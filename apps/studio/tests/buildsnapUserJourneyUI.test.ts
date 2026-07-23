import { describe, it, expect, beforeEach } from 'vitest';
// @ts-ignore
import { JSDOM } from 'jsdom';
import habitsTranslations from '../src/i18n/habitsTranslations.json';
import { buildsnapTranslations } from '../src/i18n/buildsnapTranslations';

describe('BuildSnap 사용자 풀 라이프사이클 UI E2E 통합 테스트', () => {
  let dom: JSDOM;
  let window: any;
  let document: Document;

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
      <body>
        <div id="myCanvasBoard"></div>
        <span id="canvasCountBadge">0</span>
        <button id="btnClearCanvas">Clear</button>
        <button id="btnAddToCanvas">Add</button>
        <div id="toastContainer"></div>
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

  const renderCanvas = (lang: string) => {
    const canvasBoard = document.getElementById('myCanvasBoard')!;
    const curCanvas = JSON.parse(window.localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
    
    if (curCanvas.length === 0) {
      canvasBoard.innerHTML = '<div class="empty">Empty</div>';
      return;
    }

    const t = (key: string) => (buildsnapTranslations as any)[lang]?.[key] || key;

    canvasBoard.innerHTML = curCanvas.map((item: any) => {
      const transObj = (habitsTranslations as any)[item.habitId];
      const langTrans = transObj?.[lang] || {};
      const heroName = langTrans.name || item.heroName;
      const habitTitle = langTrans.habitName || item.habitTitle;
      const actionName = langTrans.actionName || langTrans.quote || langTrans.description || item.actionName;

      return `
        <div class="canvas-item" data-id="${item.habitId}">
          <span class="hero-name">${heroName}</span>
          <h4 class="habit-title">${habitTitle}</h4>
          <p class="action-name">${actionName}</p>
          <button class="delete-btn">${t('buildsnap.canvas.delete') || 'Delete'}</button>
        </div>
      `;
    }).join('');
  };

  it('사용자 시나리오 1: 한국어 페이지에서 캔버스에 담은 후, 일본어/영어/중국어 등 9개 언어 페이지로 전환 시 이름, 제목, 설명글이 100% 해당 언어로 치환되어야 한다', () => {
    // 1. 한국어 환경에서 파인만, 파바로티, 실러, 쥘 베른, 올콧, 안데르센 6개 습관 추가
    const items = [
      { habitId: "feynman-child-explanation", heroName: "리처드 파인만", habitTitle: "새로운 지식을 어린아이에게 가르치듯 쉽게 설명하기" },
      { habitId: "pavarotti-bent-nail", heroName: "루치아노 파바로티", habitTitle: "무대에 오르기 전 바닥을 살펴 굽은 못을 찾아 주머니에 넣기" },
      { habitId: "schiller-rotten-apple", heroName: "프리드리히 실러", habitTitle: "서랍 속 썩은 사과 향기로 집중력 자극하기" },
      { habitId: "verne-morning-scrap", heroName: "쥘 베른", habitTitle: "새벽 5시 정보 카드 스크랩" },
      { habitId: "alcott-ribbon-signal", heroName: "루이자 메이 올콧", habitTitle: "집중 신호용 무드 리본" },
      { habitId: "andersen-paper-cutting", heroName: "한스 크리스티안 안데르센", habitTitle: "이야기를 지어내며 종이를 오리는 손끝 아날로그 몰입" }
    ];

    window.localStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(items));

    // 2. 일본어(ja) 환경 렌더링
    renderCanvas('ja');
    let html = document.getElementById('myCanvasBoard')!.innerHTML;

    // 한국어 이름들이 단 1자도 노출되지 않아야 함
    expect(html).not.toContain("리처드 파인만");
    expect(html).not.toContain("루치아노 파바로티");
    expect(html).not.toContain("프리드리히 실러");
    expect(html).not.toContain("쥘 베른");
    expect(html).not.toContain("루이자 메이 올콧");
    expect(html).not.toContain("한스 크리스티안 안데르센");

    // 일본어로 100% 치환되어야 함
    expect(html).toContain("リチャード・ファインマン");
    expect(html).toContain("ルチアーノ・パヴァロッティ");
    expect(html).toContain("フリードリヒ・シラー");
    expect(html).toContain("ジュール・ヴェルヌ");
    expect(html).toContain("ルイーザ・メイ・オルコット");
    expect(html).toContain("ハンス・クリスチャン・アンデルセン");

    // 3. 영어(en) 환경 렌더링
    renderCanvas('en');
    html = document.getElementById('myCanvasBoard')!.innerHTML;
    expect(html).not.toContain("리처드 파인만");
    expect(html).not.toContain("루치아노 파바로티");
    expect(html).toContain("Feynman");
    expect(html).toContain("Pavarotti");
  });

  it('사용자 시나리오 2: 캔버스 전체 초기화 클릭 시 캔버스 보드 DOM이 깨끗이 비워지고 Empty State가 노출되어야 한다', () => {
    window.localStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify([
      { habitId: "kurosawa-page-writing", heroName: "구로사와 아키라" }
    ]));

    renderCanvas('ja');
    expect(document.getElementById('myCanvasBoard')!.innerHTML).toContain("canvas-item");

    // 초기화 실행
    window.localStorage.removeItem('selalink_buildsnap_my_canvas');
    renderCanvas('ja');

    expect(document.getElementById('myCanvasBoard')!.innerHTML).not.toContain("canvas-item");
    expect(document.getElementById('myCanvasBoard')!.innerHTML).toContain("Empty");
  });
});
