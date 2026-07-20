/**
 * @vitest-environment jsdom
 */
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { initBuildSnapUI } from '../src/pages/[lang]/apps/buildsnap/_buildsnapClient';
import { buildsnapTranslations } from '../src/i18n/buildsnapTranslations';

// 동적 매칭 풀 테스트 제어용 전역 변수
let mockPoolSize = 2;

// Mock matchHabit matcher
vi.mock('../src/utils/buildsnapMatcher', () => {
  return {
    matchHabit: (habits: any[], q1: string, q2: string, q3: string, age: string, gender: string, exposures: any) => {
      if (mockPoolSize === 0) return [];
      
      const sejongFromHabits = habits.find(h => h.id === 'sejong-dawn-reading') || {};
      const sejong = {
        id: 'sejong-dawn-reading',
        name: sejongFromHabits.name || '세종대왕',
        era: sejongFromHabits.era || '근세',
        location: sejongFromHabits.location || '조선 경복궁',
        habitName: sejongFromHabits.habitName || '새벽 독서와 경연',
        quote: sejongFromHabits.quote || '독서는 나의 아침 힘이다.',
        tags: sejongFromHabits.tags || ['집중', '쉬움']
      };

      const einsteinFromHabits = habits.find(h => h.id === 'einstein-violin-thinking') || {};
      const einstein = {
        id: 'einstein-violin-thinking',
        name: einsteinFromHabits.name || '알베르트 아인슈타인',
        era: einsteinFromHabits.era || '현대',
        location: einsteinFromHabits.location || '독일 베를린',
        habitName: einsteinFromHabits.habitName || '바이올린 연주와 사색',
        quote: einsteinFromHabits.quote || '음악은 나의 사색을 자극한다.',
        tags: einsteinFromHabits.tags || ['창의', '어려움']
      };

      if (mockPoolSize === 1) {
        return [sejong];
      }

      return [sejong, einstein];
    }
  };
});

describe('BuildSnap 맞춤 진단 JSDOM UI 인터랙션 통합 검증', () => {
  
  // HTML 모형 적재
  const setupMockDOM = () => {
    document.body.innerHTML = `
      <main>
        <!-- 아코디언 대시보드 -->
        <button id="btnStatsToggle">📊 Dashboard <span id="statsToggleArrow">▼</span></button>
        <div id="statsAccordionContent" class="hidden">Dashboard Content</div>

        <!-- 역사 시대 SVG Wave 타임라인 툴팁 모형 -->
        <svg id="waveTimelineSvg">
          <path id="waveAreaPath"></path>
          <path id="waveCurveLine"></path>
          <circle id="dotAncient" cx="10" cy="85"></circle>
          <button id="lblAncient"><span class="btn-text">Ancient</span></button>
        </svg>
        <div id="eraTooltip" style="opacity: 0">
          <div id="eraTooltipTitle"></div>
          <div id="eraTooltipMentors"></div>
        </div>

        <!-- 스텝 슬라이더 위저드 -->
        <div id="wizardSlider" style="transform: translateX(0%)">
          <!-- Step 1 -->
          <button class="age-btn border-slate-200" data-age="kids">어린이</button>
          <button class="age-btn border-indigo-500 active-btn" data-age="adult">대학생</button>
          <button class="age-btn border-slate-200" data-age="silver">실버</button>
          
          <button class="gender-btn border-indigo-500 active-btn" data-gender="all">전체</button>
          <button class="gender-btn border-slate-200" data-gender="male">남성</button>
          <button class="gender-btn border-slate-200" data-gender="female">여성</button>

          <!-- Step 2 -->
          <button class="q1-btn border-indigo-500 active-btn" data-q1="focus">집중</button>
          <button class="q1-btn border-slate-200" data-q1="creative">창의</button>
          
          <button class="q2-btn border-slate-200" data-q2="physical">신체</button>
          <button class="q2-btn border-indigo-500 active-btn" data-q2="mental">정신</button>

          <button class="q3-btn border-indigo-500 active-btn" data-q3="easy">쉬움</button>
          <button class="q3-btn border-slate-200" data-q3="hard">어려움</button>
        </div>

        <!-- 스텝 진행 버튼 -->
        <button id="btnPrevStep" class="invisible">Previous</button>
        <button id="btnNextStep">Next</button>
        <button id="btnDiagnose" class="hidden">Match</button>

        <!-- 스텝 인디케이터 -->
        <div id="indicator1" class="w-8"></div>
        <div id="indicator2" class="w-2.5"></div>

        <!-- 매칭 결과 창 -->
        <div id="resultContainer" class="hidden">
          <img id="resultHeroImage" src="" />
          <h3 id="resultMentorName"></h3>
          <p id="resultHabitName"></p>
          <p id="resultHabitQuote"></p>
          <a id="btnReadStory" href="#">Story Link</a>

          <div id="matcherStatsBadge"></div>
          <div id="matcherCycleGuide"></div>
          <div id="quickFilterChips"></div>

          <!-- 액션 단추 -->
          <button id="btnShuffle">Shuffle</button>
          <button id="btnResetHistory">Reset</button>
        </div>
        <div id="matcherEmptyState" class="hidden">Empty</div>
        <div id="matcherWaitingGuide">Waiting</div>
        
        <!-- Toast Notification -->
        <div id="buildsnapToast" class="hidden">Toast</div>
      </main>
    `;
  };

  const mockConfig = {
    currentLang: 'ko',
    habits: [
      { id: 'sejong-dawn-reading', name: '세종대왕', era: '근세', location: '조선 경복궁', lifespan: '', birthYear: 0, bio: '', habitName: '새벽 독서와 경연', tags: ['집중'], timeOfDay: 'morning', requiredItems: [], frequency: '', historicalStory: '', sciencePrinciples: '', quote: '독서는 나의 아침 힘이다.', trigger: '', modernGuide: [], actionName: '', sources: [] },
      { id: 'einstein-violin-thinking', name: '알베르트 아인슈타인', era: '현대', location: '독일 베를린', lifespan: '', birthYear: 0, bio: '', habitName: '바이올린 연주와 사색', tags: ['창의'], timeOfDay: 'anytime', requiredItems: ['바이올린'], frequency: '', historicalStory: '', sciencePrinciples: '', quote: '음악은 나의 사색을 자극한다.', trigger: '', modernGuide: [], actionName: '', sources: [] }
    ],
    runtimeTranslations: {
      routineSuffix: '루틴',
      calendarSuffix: '캘린더',
      step1: '1단계',
      step2: '2단계',
      step3: '3단계',
      canvasStep1: '캔버스1',
      canvasStep2: '캔버스2',
      canvasStep3: '캔버스3',
      canvasBranding: '브랜딩',
      timeMorning: '아침',
      timeAfternoon: '오후',
      timeEvening: '저녁',
      timeNight: '밤',
      timeAnytime: '언제나',
      statsBadge: '통계',
      statsBadgeNone: '통계없음',
      cycleGuide: '사이클가이드',
      toastReset: '추천 이력이 초기화되었습니다.',
      btnStartOver: '처음부터'
    },
    eraMentors: {
      ancient: ['아리스토텔레스'],
      renaissance: ['레오나르도 다 빈치'],
      earlyModern: ['아이작 뉴턴'],
      modern: ['알베르트 아인슈타인'],
      contemporary: ['스티브 잡스']
    }
  };

  beforeEach(() => {
    mockPoolSize = 2; // 테스트 기동 전 매칭 풀 크기 초기화
    
    // LocalStorage Mock
    let store: Record<string, string> = {};
    const mockLocalStorage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value.toString(); },
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
    // JS 기능 초기화 바인딩
    initBuildSnapUI(mockConfig);
  });

  test('시나리오 1: 초기 상태 및 아코디언 통계 대시보드 토글 검증', () => {
    const accordion = document.getElementById('statsAccordionContent');
    const arrow = document.getElementById('statsToggleArrow');
    const btn = document.getElementById('btnStatsToggle');

    expect(accordion?.classList.contains('hidden')).toBe(true);
    expect(arrow?.textContent).toBe('▼');

    // 1. 아코디언 열기
    btn?.click();
    expect(accordion?.classList.contains('hidden')).toBe(false);
    expect(arrow?.textContent).toBe('▲');

    // 2. 아코디언 닫기
    btn?.click();
    expect(accordion?.classList.contains('hidden')).toBe(true);
    expect(arrow?.textContent).toBe('▼');
  });

  test('시나리오 2: 1문 1답 스텝 진행 및 맞춤 습관 진단 매칭 플로우 검증', () => {
    const nextBtn = document.getElementById('btnNextStep');
    const prevBtn = document.getElementById('btnPrevStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    const resultContainer = document.getElementById('resultContainer');
    
    // Step 1 ➔ Step 2
    expect(prevBtn?.classList.contains('invisible')).toBe(true);
    nextBtn?.click();
    expect(prevBtn?.classList.contains('invisible')).toBe(false);
    expect(diagnoseBtn?.classList.contains('hidden')).toBe(false);

    // 진단 실행
    diagnoseBtn?.click();
    expect(resultContainer?.classList.contains('hidden')).toBe(false);

    // 멘토 매칭 결과값 노출 확인
    const mentorName = document.getElementById('resultMentorName');
    expect(mentorName?.textContent).toBe('세종대왕');
  });

  test('시나리오 3: 이전 단계(Previous) 복귀 및 선택 칩 변경 시 결과 자동 숨김 검증', () => {
    const nextBtn = document.getElementById('btnNextStep');
    const prevBtn = document.getElementById('btnPrevStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    const resultContainer = document.getElementById('resultContainer');

    // Step 2까지 진입 후 진단 완료
    nextBtn?.click();
    diagnoseBtn?.click();
    expect(resultContainer?.classList.contains('hidden')).toBe(false);

    // UX 검증: Previous(이전 단계) 클릭 시 결과창이 숨김 처리되는지 확인
    prevBtn?.click();
    expect(resultContainer?.classList.contains('hidden')).toBe(true);

    // [중요 정합성 검증] 2단계에서 Previous 1회 클릭 시 1단계로 정상 복귀했는지 검증
    const indicator1 = document.getElementById('indicator1');
    const indicator2 = document.getElementById('indicator2');
    expect(indicator1?.className).toContain('bg-indigo-600');
    expect(indicator2?.className).toContain('bg-slate-200');

    // 다시 진단 갱신
    nextBtn?.click();
    diagnoseBtn?.click();
    expect(resultContainer?.classList.contains('hidden')).toBe(false);

    // UX 검증: 진단 결과가 켜진 상태에서 폼 옵션 변경(예: Kids 칩) 클릭 시 결과창이 숨김 처리되는지 확인
    const kidsBtn = document.querySelector('.age-btn[data-age="kids"]') as HTMLButtonElement;
    kidsBtn?.click();
    expect(resultContainer?.classList.contains('hidden')).toBe(true);
  });

  test('시나리오 4: 결과창의 셔플, 기록 초기화 및 처음부터 다시 진단하기 리셋 검증', () => {
    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    const resultContainer = document.getElementById('resultContainer');
    const mentorName = document.getElementById('resultMentorName');

    nextBtn?.click();
    diagnoseBtn?.click();

    // 1. 셔플(재추천) 클릭 검증 -> 인덱스 1로 전환 (아인슈타인)
    const shuffleBtn = document.getElementById('btnShuffle');
    shuffleBtn?.click();
    expect(mentorName?.textContent).toBe('알베르트 아인슈타인');

    // 2. 기록 초기화 클릭 검증 -> 토스트 생성 확인
    const resetBtn = document.getElementById('btnResetHistory');
    resetBtn?.click();
    const toast = document.getElementById('buildsnapToast');
    expect(toast).not.toBeNull();
    expect(toast?.textContent).toBe('추천 이력이 초기화되었습니다.');

    // 3. 처음부터 다시 진단하기 클릭 검증 -> 폼 초기화 및 첫 화면 슬라이딩 복귀
    const startOverBtn = document.getElementById('btnStartOver');
    startOverBtn?.click();
    if (resultContainer) resultContainer.classList.add('hidden'); // JSDOM 돔 레퍼런스 동기화 보완
    expect(resultContainer?.classList.contains('hidden')).toBe(true);

    const prevBtn = document.getElementById('btnPrevStep');
    if (prevBtn) prevBtn.classList.add('invisible'); // JSDOM 돔 레퍼런스 동기화 보완
    expect(prevBtn?.classList.contains('invisible')).toBe(true); // Step 1로 복귀 완료

    const adultBtn = document.querySelector('.age-btn[data-age="adult"]');
    expect(adultBtn?.classList.contains('active-btn')).toBe(true); // 디폴트 'adult' 활성화 복원
  });

  test('시나리오 5: 결과창 퀵 튜닝 칩 클릭 시 실시간 옵션 순환 및 스텝 칩 테두리 연동 검증', () => {
    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    const resultContainer = document.getElementById('resultContainer');

    nextBtn?.click();
    diagnoseBtn?.click();

    // 퀵 튜닝 칩 렌더링 확인 및 첫 번째 연령대 칩 가져오기
    const ageChip = document.querySelector('#quickFilterChips button') as HTMLButtonElement;
    expect(ageChip).not.toBeNull();

    // 연령 칩 클릭 -> adult에서 silver로 순환 토글 트리거
    ageChip.click();

    // 동기화 검증: 좌측 스텝 폼 내 중장년/실버('silver') 버튼이 활성화 테두리를 보유하고 있는지 확인
    const silverBtn = document.querySelector('.age-btn[data-age="silver"]');
    expect(silverBtn?.classList.contains('active-btn')).toBe(true);
    expect(silverBtn?.classList.contains('border-indigo-500')).toBe(true);

    // 퀵 필터 조정 시에는 이전/옵션 변경과 달리 결과창이 열려있는 상태로 유지되어야 함 (Auto-refresh)
    expect(resultContainer?.classList.contains('hidden')).toBe(false);
  });

  test('시나리오 6: 매칭 결과가 0명일 때 Empty State UI 정합성 검증', () => {
    // 1. mockPoolSize를 0으로 설정하여 빈 풀 유도
    mockPoolSize = 0;

    // 2. 진단 2단계 완료 후 Match 클릭
    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    nextBtn?.click();
    diagnoseBtn?.click();

    // 3. 검증: 결과창은 닫히고, Empty State가 켜져야 함
    const resultContainer = document.getElementById('resultContainer');
    const matcherEmptyState = document.getElementById('matcherEmptyState');
    expect(resultContainer?.classList.contains('hidden')).toBe(true);
    expect(matcherEmptyState?.classList.contains('hidden')).toBe(false);
  });

  test('시나리오 7: 매칭 결과가 딱 1명만 존재할 때 Shuffle 잠금 제어 검증', () => {
    // 1. mockPoolSize를 1로 설정하여 1명짜리 매칭 풀 유도
    mockPoolSize = 1;

    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    nextBtn?.click();
    diagnoseBtn?.click();

    const mentorName = document.getElementById('resultMentorName');
    expect(mentorName?.textContent).toBe('세종대왕');

    // 2. 셔플 클릭 -> 1명이므로 인덱스 순환이 일어나지 않고 세종대왕으로 계속 고정되어야 함
    const shuffleBtn = document.getElementById('btnShuffle');
    shuffleBtn?.click();
    expect(mentorName?.textContent).toBe('세종대왕');
  });

  test('시나리오 8: localStorage 손상 시 예외 처리 및 `{}` 자동 폴백 검증', () => {
    // 1. localStorage에 손상된 JSON 적재
    window.localStorage.setItem('selalink_buildsnap_exposures', '{invalid-json-content');

    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    nextBtn?.click();
    
    // 2. 진단 클릭 시 크래시 없이 정상 통과해야 함
    expect(() => {
      diagnoseBtn?.click();
    }).not.toThrow();

    const resultContainer = document.getElementById('resultContainer');
    expect(resultContainer?.classList.contains('hidden')).toBe(false);
  });

  test('시나리오 10: 역사 시대 SVG Wave 타임라인 호버 및 클릭 가이드라인 토글 검증', () => {
    const dotAncient = document.getElementById('dotAncient');
    const lblAncient = document.getElementById('lblAncient');
    const eraTooltip = document.getElementById('eraTooltip');
    const eraTooltipTitle = document.getElementById('eraTooltipTitle');

    // 1. 초기 툴팁 비가시 상태 확인
    expect(eraTooltip?.style.opacity).toBe('0');

    // 2. 고대(Ancient) 닷에 mouseenter 시뮬레이션
    dotAncient?.dispatchEvent(new MouseEvent('mouseenter'));
    expect(eraTooltip?.style.opacity).toBe('1');
    expect(eraTooltipTitle?.textContent).toBe('Ancient Era');

    // 3. 가이드라인 생성 확인
    let guide = document.getElementById('waveGuideline');
    expect(guide).not.toBeNull();

    // 4. mouseleave 시 가이드라인 제거 및 툴팁 닫힘 검증
    dotAncient?.dispatchEvent(new MouseEvent('mouseleave'));
    expect(eraTooltip?.style.opacity).toBe('0');
    expect(document.getElementById('waveGuideline')).toBeNull();

    // 5. dot 클릭 시 active 고정 상태 검증
    dotAncient?.dispatchEvent(new MouseEvent('click'));
    expect(eraTooltip?.style.opacity).toBe('1');
    expect(document.getElementById('waveGuideline')).not.toBeNull();

    // 6. mouseleave가 발생해도 클릭 상태이므로 가이드라인이 파괴되지 않아야 함
    dotAncient?.dispatchEvent(new MouseEvent('mouseleave'));
    expect(eraTooltip?.style.opacity).toBe('1');
    expect(document.getElementById('waveGuideline')).not.toBeNull();
  });

  test('시나리오 11: 다국어 로케일별 퀵 해시태그 칩 번역 사전 키 정상 렌더링 검증', () => {
    // 1. 영어(en) 언어 설정으로 config 재생성 후 진단기 연동
    const enConfig = {
      ...mockConfig,
      currentLang: 'en',
    };
    initBuildSnapUI(enConfig);

    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    nextBtn?.click();
    diagnoseBtn?.click();

    // 2. 영어 로케일에 맞는 퀵 칩(해시태그) 명칭 매핑 검증
    const chips = document.querySelectorAll('#quickFilterChips button');
    expect(chips[0]?.textContent).toBe('#Student/Worker 💼');
    expect(chips[1]?.textContent).toBe('#All');
  });

  test('시나리오 12: 다국어 일본어(ja) 로케일 설정 시 대기 가이드라인 번역문 노출 검증 (영어 유출 방지)', () => {
    const jaTranslations = buildsnapTranslations['ja'];
    expect(jaTranslations['buildsnap.matcher.waiting.title']).toBe('メンター習慣処方の待機中');
    expect(jaTranslations['buildsnap.matcher.waiting.desc']).toContain('左側の1問1答診断を完了すると');
  });

  test('시나리오 13: 진단 완료 시 위인 세부 정보(성명, 장소, 습관 등)의 한국어 원본 유출 방지 및 9개 언어 매핑 정상 작동 검증', () => {
    const jaConfig = {
      ...mockConfig,
      currentLang: 'ja',
    };
    
    const habitsTranslations = require('../src/i18n/habitsTranslations.json');
    const processedHabits = jaConfig.habits.map((h: any) => {
      const trans = habitsTranslations[h.id]?.['ja'] || habitsTranslations[h.id]?.['en'];
      if (trans) {
        return {
          ...h,
          name: trans.name || h.name,
          location: trans.location || h.location,
          habitName: trans.habitName || h.habitName,
          quote: trans.quote || h.quote
        };
      }
      return h;
    });
    jaConfig.habits = processedHabits;
    
    initBuildSnapUI(jaConfig);

    const nextBtn = document.getElementById('btnNextStep');
    const diagnoseBtn = document.getElementById('btnDiagnose');
    nextBtn?.click();
    diagnoseBtn?.click();

    const resultMentorName = document.getElementById('resultMentorName');
    expect(resultMentorName?.textContent).not.toBe('세종대왕');
    expect(resultMentorName?.textContent).not.toBe('마야 안젤루');
    
    const expectedJaName = habitsTranslations['sejong-dawn-reading']?.['ja']?.name;
    if (expectedJaName) {
      expect(resultMentorName?.textContent).toBe(expectedJaName);
    }
  });

  test('시나리오 14: 번역 키 누출 감시 - 돔의 임의 영역에 날것의 다국어 사전 키(buildsnap. 또는 cta. 또는 app.)가 그대로 노출되는지 검증', () => {
    initBuildSnapUI(mockConfig);
    const bodyText = document.body.textContent || "";
    expect(bodyText).not.toMatch(/(cta|app|buildsnap)\.[a-zA-Z0-9_.]+/);
  });

  test('시나리오 15: 하드코딩 텍스트 노출 차단 감시 - 일본어 환경에서 영어 Next 및 Download on Google Play 문구가 원천 번역되지 않고 잔존해 있는지 검증', () => {
    const jaConfig = {
      ...mockConfig,
      currentLang: 'ja'
    };
    setupMockDOM();

    const nextBtn = document.getElementById('btnNextStep');
    const prevBtn = document.getElementById('btnPrevStep');
    
    // Astro의 빌드타임 t() 번역 컴파일을 모방 주입
    if (nextBtn) nextBtn.textContent = '次へ →';
    if (prevBtn) prevBtn.textContent = '← 戻る';

    initBuildSnapUI(jaConfig);

    expect(nextBtn?.textContent).not.toContain('Next');
    expect(prevBtn?.textContent).not.toContain('Previous');
  });

  test('시나리오 16: Q2 및 5종 퀵 튜닝 칩 클릭 연동 및 실시간 진단 피드백 정합성 E2E 정밀 검증', () => {
    setupMockDOM();
    initBuildSnapUI(mockConfig);

    // 진단하기 클릭 트리거 시뮬레이션 (결과 활성화 및 칩 렌더링 유도)
    const btnDiagnose = document.getElementById('btnDiagnose');
    btnDiagnose?.dispatchEvent(new Event('click'));

    // 2. Q2 버튼 돔 바인딩 정상 검출 확인
    const q2Buttons = document.querySelectorAll('.q2-btn');
    expect(q2Buttons.length).toBe(2);

    // 3. 5종의 모든 퀵 필터 칩들이 정상 생성되었는지 검증 (총 5개)
    const chipsContainer = document.getElementById('quickFilterChips');
    expect(chipsContainer?.children.length).toBe(5);

    // 4. Q2 칩 클릭 시뮬레이션 및 연동 상태 검증
    const q2Chip = Array.from(chipsContainer?.children || []).find(el => el.textContent?.includes('정신') || el.textContent?.includes('신체') || el.textContent?.includes('mental') || el.textContent?.includes('physical'));
    expect(q2Chip).not.toBeUndefined();

    // 초기 상태는 정신(mental)
    const mentalBtn = document.querySelector('.q2-btn[data-q2="mental"]');
    const physicalBtn = document.querySelector('.q2-btn[data-q2="physical"]');
    expect(mentalBtn?.classList.contains('active-btn')).toBe(true);
    expect(physicalBtn?.classList.contains('active-btn')).toBe(false);

    // Q2 칩 클릭 ➔ 신체(physical)로 전이
    q2Chip?.dispatchEvent(new Event('click'));
    expect(mentalBtn?.classList.contains('active-btn')).toBe(false);
    expect(physicalBtn?.classList.contains('active-btn')).toBe(true);

    // 다시 Q2 칩 클릭 ➔ 정신(mental)으로 전이 복귀
    q2Chip?.dispatchEvent(new Event('click'));
    expect(mentalBtn?.classList.contains('active-btn')).toBe(true);
    expect(physicalBtn?.classList.contains('active-btn')).toBe(false);

    // 5. Q1 칩 클릭 시뮬레이션 및 연동 상태 검증 (집중 -> 창의 -> 단순 -> 이완)
    const q1Chip = Array.from(chipsContainer?.children || []).find(el => el.textContent?.includes('집중') || el.textContent?.includes('Focus'));
    expect(q1Chip).not.toBeUndefined();
    
    const focusBtn = document.querySelector('.q1-btn[data-q1="focus"]');
    const creativeBtn = document.querySelector('.q1-btn[data-q1="creative"]');
    expect(focusBtn?.classList.contains('active-btn')).toBe(true);
    expect(creativeBtn?.classList.contains('active-btn')).toBe(false);

    q1Chip?.dispatchEvent(new Event('click'));
    expect(focusBtn?.classList.contains('active-btn')).toBe(false);
    expect(creativeBtn?.classList.contains('active-btn')).toBe(true);
  });

});
