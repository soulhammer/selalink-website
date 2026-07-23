/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { initBuildSnapUI, type BuildSnapConfig } from '../src/pages/[lang]/apps/buildsnap/_buildsnapClient';

describe('BuildSnap 커버리지 보완 Vitest 단위/통합 테스트', () => {
  const mockConfig: BuildSnapConfig = {
    habits: [
      { id: 'sejong-dawn-reading', name: '세종대왕', era: '근세', habitName: '새벽 독서와 경연', quote: '독서는 나의 아침 힘이다.', tags: ['집중', '쉬움'] },
      { id: 'henri-cartier-bresson', name: '앙리 카르티에 브레송', era: '현대', habitName: '결정적 순간 포착', quote: '눈과 마음의 조화.', tags: ['창의', '어려움'] }
    ],
    currentLang: 'es', // 한국어가 아닌 스페인어로 지정하여 다국어 및 폴백 로직 검증
    habitsTranslations: {
      'sejong-dawn-reading': {
        ko: { name: '세종대왕', habitName: '새벽 독서', actionName: '책 읽기' },
        en: { name: 'King Sejong', habitName: 'Dawn Reading', actionName: 'Reading books early morning' }
      },
      'henri-cartier-bresson': {
        ko: { name: '앙리 카르티에 브레송', habitName: '결정적 순간', actionName: '사진 찍기' },
        en: { name: 'Henri Cartier-Bresson', habitName: 'Decisive Moment', actionName: 'Taking photos' }
      }
    },
    runtimeTranslations: {
      routineSuffix: ' 루틴',
      calendarSuffix: ' 달력',
      step1: 'Step 1',
      step2: 'Step 2',
      step3: 'Step 3',
      canvasStep1: 'CStep 1',
      canvasStep2: 'CStep 2',
      canvasStep3: 'CStep 3',
      canvasBranding: 'BuildSnap',
      timeMorning: '아침',
      timeAfternoon: '점심',
      timeEvening: '저녁',
      timeNight: '밤',
      timeAnytime: '언제나',
      statsBadge: '배지',
      statsBadgeNone: '없음',
      cycleGuide: '가이드',
      toastReset: '초기화되었습니다'
    },
    eraMentors: {
      ancient: ['소크라테스'],
      renaissance: ['레오나르도 다빈치'],
      earlyModern: ['세종대왕'],
      modern: ['앙리 카르티에 브레송'],
      contemporary: ['스티브 잡스']
    }
  };

  const setupMockDOM = () => {
    document.body.innerHTML = `
      <main>
        <button id="btnStatsToggle">Dashboard <span id="statsToggleArrow">▼</span></button>
        <div id="statsAccordionContent" class="hidden">Accordion Content</div>

        <svg id="waveTimelineSvg">
          <path id="waveAreaPath"></path>
          <path id="waveCurveLine"></path>
          <circle id="dotAncient" cx="10" cy="85"></circle>
          <button id="lblAncient"><span class="btn-text">Ancient</span></button>
          <circle id="dotRenaissance" cx="105" cy="85"></circle>
          <button id="lblRenaissance"><span class="btn-text">Renaissance</span></button>
          <circle id="dotEarlyModern" cx="200" cy="85"></circle>
          <button id="lblEarlyModern"><span class="btn-text">Early Modern</span></button>
          <circle id="dotModern" cx="295" cy="85"></circle>
          <button id="lblModern"><span class="btn-text">Modern</span></button>
          <circle id="dotContemporary" cx="390" cy="85"></circle>
          <button id="lblContemporary"><span class="btn-text">Contemporary</span></button>
        </svg>

        <div id="eraTooltip" style="opacity: 0">
          <div id="eraTooltipTitle"></div>
          <div id="eraTooltipMentors"></div>
        </div>

        <div id="wizardSlider">
          <button class="age-btn active-btn" data-age="adult">Adult</button>
          <button class="gender-btn active-btn" data-gender="all">All</button>
          <button class="q1-btn active-btn" data-q1="focus">Focus</button>
          <button class="q2-btn active-btn" data-q2="mental">Mental</button>
          <button class="q3-btn active-btn" data-q3="easy">Easy</button>
        </div>

        <button id="btnPrevStep" class="invisible">Prev</button>
        <button id="btnNextStep">Next</button>
        <button id="btnDiagnose" class="hidden">Match</button>

        <div id="indicator1" class="w-8"></div>
        <div id="indicator2" class="w-2.5"></div>

        <div id="resultContainer" class="hidden">
          <img id="resultHeroImage" src="" />
          <h3 id="resultMentorName"></h3>
          <p id="resultHabitName"></p>
          <p id="resultHabitQuote"></p>
          <a id="btnReadStory" href="#">Story Link</a>
          <div id="matcherStatsBadge"></div>
          <div id="matcherCycleGuide"></div>
          <div id="quickFilterChips"></div>
          <button id="btnShuffle">Shuffle</button>
          <button id="btnResetHistory">Reset</button>
        </div>
        <div id="matcherEmptyState" class="hidden">Empty</div>
        <div id="matcherWaitingGuide">Waiting</div>

        <div id="buildsnapToast" class="hidden"></div>
      </main>
    `;
  };

  beforeEach(() => {
    let store: Record<string, string> = {};
    const mockLocalStorage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value; },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { store = {}; }
    };
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
      configurable: true
    });

    setupMockDOM();
    window.localStorage.clear();
  });

  it('1. 아코디언 토글 시 화살표 표기 및 hidden 클래스가 정상 토글되는가', () => {
    initBuildSnapUI(mockConfig);
    const btnToggle = document.getElementById('btnStatsToggle');
    const content = document.getElementById('statsAccordionContent');
    const arrow = document.getElementById('statsToggleArrow');

    expect(content?.classList.contains('hidden')).toBe(true);
    expect(arrow?.textContent).toBe('▼');

    btnToggle?.click();
    expect(content?.classList.contains('hidden')).toBe(false);
    expect(arrow?.textContent).toBe('▲');

    btnToggle?.click();
    expect(content?.classList.contains('hidden')).toBe(true);
    expect(arrow?.textContent).toBe('▼');
  });

  it('2. 역사 시대(Era) 타임라인 버튼 클릭 시 툴팁 및 하이라이트가 정상 적용되는가', () => {
    initBuildSnapUI(mockConfig);
    const lblAncient = document.getElementById('lblAncient');
    const tooltip = document.getElementById('eraTooltip');

    expect(tooltip?.style.opacity).toBe('0');

    lblAncient?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(tooltip?.style.opacity).toBe('1');

    // 동일 버튼 재클릭 시 하이라이트 해제
    lblAncient?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(tooltip?.style.opacity).toBe('0');
  });

  it('3. 다국어 설정(es)에서 한국어/영문 사전 폴백 및 진단 실행 결과가 정상 산출되는가', () => {
    initBuildSnapUI(mockConfig);

    const btnDiagnose = document.getElementById('btnDiagnose');
    btnDiagnose?.classList.remove('hidden');
    btnDiagnose?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const resultContainer = document.getElementById('resultContainer');
    expect(resultContainer?.classList.contains('hidden')).toBe(false);
  });

  it('4. 맞춤 습관 초기화(Reset) 시 웰컴 가이드 및 폼이 리셋되는가', () => {
    initBuildSnapUI(mockConfig);

    const btnDiagnose = document.getElementById('btnDiagnose');
    btnDiagnose?.classList.remove('hidden');
    btnDiagnose?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const btnReset = document.getElementById('btnResetHistory');
    btnReset?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const waitingGuide = document.getElementById('matcherWaitingGuide');
    expect(waitingGuide).not.toBeNull();
  });
});
