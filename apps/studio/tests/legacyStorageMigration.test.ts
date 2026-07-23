import { describe, it, expect, beforeEach } from 'vitest';
// @ts-ignore
import { JSDOM } from 'jsdom';
import { initBuildSnapUI } from '../src/pages/[lang]/apps/buildsnap/_buildsnapClient';

describe('구형(Legacy) localStorage 한글 캐시 데이터 다국어 마이그레이션 TDD 검증', () => {
  let dom: JSDOM;
  let window: any;
  let document: Document;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="ja">
      <body>
        <button id="btnToggleStats">Toggle Stats</button>
        <div id="statsAccordionContent" class="hidden"></div>
        <span id="chevronStatsIcon"></span>
        <span id="statsToggleArrow"></span>
        <div id="statMyTotalHabits"></div>
        <div id="statMyCompletionRate"></div>
        <div id="statMyMaxStreak"></div>
        <div id="myStatsCompletionBadge"></div>
        <div id="myStatsProgressBar"></div>
        <div id="myCanvasBoard"></div>
        <div id="canvasCountBadge"></div>
        <button id="btnClearCanvas">Clear</button>
        <button id="btnAddToCanvas">Add</button>
      </body>
      </html>
    `, { url: 'http://localhost:4321/ja/apps/buildsnap/' });

    window = dom.window;
    document = window.document;

    (global as any).window = window;
    (global as any).document = document;
    (global as any).localStorage = window.localStorage;
    (global as any).HTMLElement = window.HTMLElement;
    (global as any).Element = window.Element;

    window.localStorage.clear();
  });

  it('BuildSnap: habitId가 없는 구형 한글 localStorage 데이터([{ heroName: "알렉상드르 뒤마" }])가 존재하더라도 일본어(ja) 접속 시 100% 일본어로 다국어 치환되어야 한다', () => {
    // 구형 캐시 데이터 주입 (habitId 없음)
    const legacyCanvas = [
      {
        heroName: "알렉상드르 뒤마",
        habitTitle: "작품 장르별 집필용 종이 색상 구분",
        actionName: "업무 장르별 종이 또는 템플릿 색상 스위칭 (뒤마 루틴)",
        lastCheckedDate: "",
        streakCount: 1
      },
      {
        heroName: "빅토르 위고",
        habitTitle: "셀프 삭발을 통한 물리적 외출 제한과 집중 고립",
        actionName: "외출 차단을 위한 디지털 락커 고립화 (위고 루틴)",
        lastCheckedDate: "",
        streakCount: 1
      }
    ];

    window.localStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(legacyCanvas));

    const habitsMock = [
      {
        id: "dumas-color-paper",
        name: "알렉상드르 뒤마",
        habitName: "작품 장르별 집필용 종이 색상 구분",
        actionName: "업무 장르별 종이 또는 템플릿 색상 스위칭 (뒤마 루틴)"
      },
      {
        id: "hugo-isolation",
        name: "빅토르 위고",
        habitName: "셀프 삭발을 통한 물리적 외출 제한과 집중 고립",
        actionName: "외출 차단을 위한 디지털 락커 고립화 (위고 루틴)"
      }
    ];

    const habitsTranslationsMock = {
      "dumas-color-paper": {
        "ja": {
          name: "アレクサンドル・デュマ",
          habitName: "作品ジャンル別執筆用紙の色分け",
          quote: "業務ジャンル別用紙またはテンプレート色の切り替え"
        }
      },
      "hugo-isolation": {
        "ja": {
          name: "ヴィクトル・ユーゴー",
          habitName: "セルフ丸刈りによる外出制限と集中隔離",
          quote: "外出遮断のためのデジタルロッカー隔離化"
        }
      }
    };

    initBuildSnapUI({
      habits: habitsMock,
      currentLang: "ja",
      habitsTranslations: habitsTranslationsMock,
      runtimeTranslations: {} as any,
      eraMentors: {} as any
    });

    const canvasBoard = document.getElementById('myCanvasBoard')!;
    const renderedHTML = canvasBoard.innerHTML;

    // 1. 한국어 원본 이름, 제목, 설명글이 1자도 노출되지 않음을 사전에 엄격 검증
    expect(renderedHTML).not.toContain("알렉상드르 뒤마");
    expect(renderedHTML).not.toContain("작품 장르별 집필용 종이 색상 구분");
    expect(renderedHTML).not.toContain("업무 장르별 종이 또는 템플릿 색상 스위칭 (뒤마 루틴)");
    expect(renderedHTML).not.toContain("빅토르 위고");

    // 2. 일본어로 100% 자동 역방향 탐색 치환(quote 폴백 연동)되었음을 확고히 검증
    expect(renderedHTML).toContain("アレクサンドル・デュマ");
    expect(renderedHTML).toContain("作品ジャンル別執筆用紙の色分け");
    expect(renderedHTML).toContain("業務ジャンル別用紙またはテンプレート色の切り替え");
    expect(renderedHTML).toContain("ヴィクトル・ユーゴー");
  });
});
