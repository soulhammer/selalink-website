/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getLocalizedIngredients, getCategoryCounts } from '../src/utils/freshsnap/indexHelper';
import { getFreshSnapDetailData } from '../src/utils/freshsnap/detailHelper';
import { updateDDayCalculator } from '../src/utils/freshsnap/dday';
import { FreshSnapCalendar } from '../src/utils/freshsnap/calendar';
import { filterIngredients } from '../src/utils/freshsnap/filter';
import { initRefrigeratorView } from '../src/utils/freshsnap/refrigerator';

describe('FreshSnap 식재료 다국어 검색/추천 비즈니스 로직 검증', () => {
  
  // 모의 식재료 데이터
  const mockIngredients = [
    {
      id: 'apple',
      category: 'fruit',
      emoji: '🍎',
      names: {
        ko: '사과',
        en: 'Apple',
        ja: 'リンゴ'
      },
      searchKeywords: {
        ko: ['부사', '아오리'],
        en: ['fuji', 'gala']
      },
      storage: {
        fridge: { durationDays: 21, sources: ['usda'], tips: { ko: '사과는 냉장 보관하세요.', en: 'Store apples in fridge.' } },
        room: { durationDays: 7, sources: ['fda'], tips: { ko: '실온 보관 가능합니다.', en: 'Can store at room.' } },
        freezer: { durationDays: 0, tips: { ko: '', en: '' } }
      }
    },
    {
      id: 'onion',
      category: 'vegetable',
      emoji: '🧅',
      names: {
        ko: '양파',
        en: 'Onion'
      },
      storage: {
        fridge: { durationDays: 0, tips: { ko: '', en: '' } },
        room: { durationDays: 30, sources: ['usda'], tips: { ko: '양파는 서늘한 곳에 보관하세요.', en: 'Keep onion in cool place.' } }
      }
    },
    {
      id: 'honey',
      category: 'etc',
      emoji: '🍯',
      names: {
        ko: '꿀',
        en: 'Honey'
      },
      storage: {
        room: { durationDays: 9999, sources: ['fda'], tips: { ko: '꿀은 굳지 않게 실온 보관하세요.', en: 'Keep honey at room temp.' } }
      }
    }
  ];

  it('식재료 다국어 명칭 및 검색어 결합 인덱스가 정상 생성되는가', () => {
    // 1. 한국어 환경 변환 검증
    const koResult = getLocalizedIngredients(mockIngredients, 'ko');
    expect(koResult[0].localName).toBe('사과');
    expect(koResult[0].searchIndex).toContain('사과');
    expect(koResult[0].searchIndex).toContain('apple');
    expect(koResult[0].searchIndex).toContain('부사');
    
    // 2. 영어 환경 변환 검증
    const enResult = getLocalizedIngredients(mockIngredients, 'en');
    expect(enResult[0].localName).toBe('Apple');
    expect(enResult[0].searchIndex).toContain('apple');
    expect(enResult[0].searchIndex).toContain('fuji');
  });

  it('추천 보관 방법이 우위 로직(냉장 > 실온 > 냉동)에 의해 정확히 연산되는가', () => {
    const koResult = getLocalizedIngredients(mockIngredients, 'ko');
    
    // 사과는 fridge 기간이 있으므로 fridge가 추천됨
    expect(koResult[0].recommendedMethod).toBe('fridge');
    
    // 양파는 fridge 기간이 0이고, room 기간만 있으므로 room이 추천됨
    expect(koResult[1].recommendedMethod).toBe('room');
  });

  it('카테고리별 분기 집계가 MECE 원칙으로 정상 산출되는가', () => {
    const counts = getCategoryCounts(mockIngredients);
    expect(counts.all).toBe(3);
    expect(counts.fruit).toBe(1);
    expect(counts.vegetable).toBe(1);
    expect(counts.etc).toBe(1);
    expect(counts.meat).toBe(0);
  });

  describe('상세 페이지 SSR/SSG 데이터 헬퍼 (getFreshSnapDetailData) 검증', () => {
    it('사과(일반) 식재료의 추천 보관법, HowTo 및 FAQ 스키마가 정상 생성되는가', () => {
      const detailData = getFreshSnapDetailData(mockIngredients[0], 'ko');
      
      expect(detailData.recommendedMethod).toBe('fridge');
      expect(detailData.initialDays).toBe(21);
      expect(detailData.pageTitle).toContain('사과');
      expect(detailData.dynamicDescription).toContain('사과');

      // HowTo Schema 검증
      const howToSchema = detailData.combinedSchemas.find(s => s['@type'] === 'HowTo');
      expect(howToSchema).toBeDefined();
      expect(howToSchema.step.length).toBe(2); // fridge, room 둘 다 > 0 이므로 2개
      expect(howToSchema.step[0].name).toBe('냉장 보관법');

      // FAQ Schema 검증
      const faqSchema = detailData.combinedSchemas.find(s => s['@type'] === 'FAQPage');
      expect(faqSchema).toBeDefined();
      expect(faqSchema.mainEntity.length).toBe(2);
    });

    it('꿀(무기한 9999일) 식재료의 템플릿 치환 및 FAQ 문구가 무기한으로 정상 생성되는가', () => {
      const detailData = getFreshSnapDetailData(mockIngredients[2], 'ko');
      
      expect(detailData.recommendedMethod).toBe('room');
      expect(detailData.initialDays).toBe(9999);

      const faqSchema = detailData.combinedSchemas.find(s => s['@type'] === 'FAQPage');
      expect(faqSchema.mainEntity[0].acceptedAnswer.text).toContain('무기한');
    });

    it('다국어(영어, 일본어) 환경에서 타이틀 및 HowTo 스키마 언어가 일치하는가', () => {
      const enData = getFreshSnapDetailData(mockIngredients[0], 'en');
      expect(enData.pageTitle).toContain('Apple');

      const jaData = getFreshSnapDetailData(mockIngredients[0], 'ja');
      expect(jaData.pageTitle).toContain('リンゴ');
    });
  });

  describe('D-Day 계산기 연산 로직 (updateDDayCalculator) 검증', () => {
    let mockDOM: any;

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="calcEatUntil"></div>
        <div id="calcDDay"></div>
        <div id="resultFeedbackCard"></div>
        <div id="inlineNudge"></div>
        <div id="ingredientImage"></div>
      `;
      mockDOM = {
        calcEatUntil: document.getElementById('calcEatUntil'),
        calcDDay: document.getElementById('calcDDay'),
        feedbackCard: document.getElementById('resultFeedbackCard'),
        inlineNudge: document.getElementById('inlineNudge'),
        ingredientImage: document.getElementById('ingredientImage')
      };
    });

    it('보관 기간이 0인 비권장 보관법 선택 시 비권장 상태로 UI가 변경되는가', () => {
      updateDDayCalculator({
        storageDuration: 0,
        buyDateInputValue: '2026-07-20',
        currentLang: 'ko',
        localTranslations: { ko: { 'detail.not_recommended': '보관을 권장하지 않습니다.' } },
        ...mockDOM
      });

      expect(mockDOM.calcDDay.textContent).toBe('보관을 권장하지 않습니다.');
      expect(mockDOM.feedbackCard.className).toContain('bg-rose-50');
    });

    it('보관 기간이 9999(무기한)인 경우 무기한 보관 문구가 정상 노출되는가', () => {
      updateDDayCalculator({
        storageDuration: 9999,
        buyDateInputValue: '2026-07-20',
        currentLang: 'ko',
        localTranslations: {},
        ...mockDOM
      });

      expect(mockDOM.calcDDay.textContent).toContain('무기한 보관 가능');
      expect(mockDOM.feedbackCard.className).toContain('bg-emerald-50');
    });

    it('구매일 미입력 시 결과창이 초기화되는가', () => {
      updateDDayCalculator({
        storageDuration: 7,
        buyDateInputValue: '',
        currentLang: 'ko',
        localTranslations: {},
        ...mockDOM
      });

      expect(mockDOM.calcDDay.textContent).toBe('');
      expect(mockDOM.calcEatUntil.textContent).toBe('');
    });

    it('과거, 오늘, 미래 구매일에 따라 D-Day 표기가 올바르게 구분되는가', () => {
      const todayStr = '2026-07-20';
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2026-07-20T12:00:00Z'));

      const localTranslations = {
        ko: {
          'detail.calc.eat_until': '소비기한: {date}',
          'detail.calc.dday': '{dday}',
          'detail.calc.dday_minus': '{dday} 경과',
          'detail.calc.dday_today': '오늘까지 소비 권장',
          'detail.days': '일',
          'detail.days.plural': '일'
        }
      };

      // 1. 보관기한 7일, 오늘 구매 -> D-7 (미래 만료, 초록색)
      updateDDayCalculator({
        storageDuration: 7,
        buyDateInputValue: todayStr,
        currentLang: 'ko',
        localTranslations,
        ...mockDOM
      });
      expect(mockDOM.calcDDay.textContent).toContain('D-7');
      expect(mockDOM.feedbackCard.className).toContain('bg-emerald-50');

      // 2. 보관기한 7일, 10일 전 구매 -> D+3 경과 (과거 만료, 빨간색)
      updateDDayCalculator({
        storageDuration: 7,
        buyDateInputValue: '2026-07-10',
        currentLang: 'ko',
        localTranslations,
        ...mockDOM
      });
      expect(mockDOM.calcDDay.textContent).toContain('3일 경과');
      expect(mockDOM.feedbackCard.className).toContain('bg-rose-50');

      // 3. 보관기한 7일, 7일 전 구매 -> 오늘 만료 (노란색)
      updateDDayCalculator({
        storageDuration: 7,
        buyDateInputValue: '2026-07-13',
        currentLang: 'ko',
        localTranslations,
        ...mockDOM
      });
      expect(mockDOM.calcDDay.textContent).toContain('오늘까지 소비 권장');
      expect(mockDOM.feedbackCard.className).toContain('bg-amber-50');

      vi.useRealTimers();
    });
  });

  describe('커스텀 달력 클래스 (FreshSnapCalendar) 단위 검증', () => {
    let calendarDOM: any;

    beforeEach(() => {
      document.body.innerHTML = `
        <button id="buyDateTrigger">2026-07-20</button>
        <div id="customCalendarPopover" class="opacity-0 scale-95 pointer-events-none">
          <button id="prevMonthBtn">이전</button>
          <button id="nextMonthBtn">다음</button>
          <span id="currentMonthYear"></span>
          <div id="calendarDaysGrid"></div>
        </div>
      `;
      calendarDOM = {
        buyDateTrigger: document.getElementById('buyDateTrigger'),
        customCalendarPopover: document.getElementById('customCalendarPopover'),
        prevMonthBtn: document.getElementById('prevMonthBtn'),
        nextMonthBtn: document.getElementById('nextMonthBtn'),
        currentMonthYear: document.getElementById('currentMonthYear'),
        calendarDaysGrid: document.getElementById('calendarDaysGrid')
      };
    });

    it('달력 인스턴스 생성 및 랜더링이 정상 작동하는가', () => {
      let selectedDate = new Date('2026-07-20');
      const calendar = new FreshSnapCalendar({
        currentLang: 'ko',
        selectedDate,
        onDateSelect: (d) => { selectedDate = d; },
        ...calendarDOM
      });

      calendar.render();
      expect(calendarDOM.currentMonthYear.textContent).toContain('2026년 7월');
      expect(calendarDOM.calendarDaysGrid.children.length).toBe(42); // 6 rows * 7 days
    });

    it('팝오버 토글 및 열기/닫기가 정상 제어되는가', () => {
      const calendar = new FreshSnapCalendar({
        currentLang: 'ko',
        selectedDate: new Date('2026-07-20'),
        onDateSelect: () => {},
        ...calendarDOM
      });

      calendar.openCalendarPopover();
      expect(calendarDOM.customCalendarPopover.classList.contains('opacity-100')).toBe(true);

      calendar.closeCalendarPopover();
      expect(calendarDOM.customCalendarPopover.classList.contains('opacity-0')).toBe(true);

      calendar.toggleCalendarPopover();
      expect(calendarDOM.customCalendarPopover.classList.contains('opacity-100')).toBe(true);
    });

    it('이전/다음 달 클릭 이벤트 시 연도 및 월이 변경되는가', () => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2026-12-31T12:00:00Z')); // 12월 31일로 미래제한 해제 설정

      const calendar = new FreshSnapCalendar({
        currentLang: 'ko',
        selectedDate: new Date('2026-05-15'),
        onDateSelect: () => {},
        ...calendarDOM
      });

      calendar.render();
      expect(calendarDOM.currentMonthYear.textContent).toContain('2026년 5월');

      // 이전 달 클릭
      calendarDOM.prevMonthBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(calendarDOM.currentMonthYear.textContent).toContain('2026년 4월');

      // 다음 달 클릭
      calendarDOM.nextMonthBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(calendarDOM.currentMonthYear.textContent).toContain('2026년 5월');

      vi.useRealTimers();
    });
  });

  describe('식재료 필터 유틸리티 (filterIngredients) 엣지 케이스 & 보관 방식 필터 검증', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="emptyState" class="hidden"></div>
        <div id="ingredientsGrid"></div>
        <div id="refrigeratorView" class="hidden"></div>
        <div class="refrigerator-shelf" id="roomShelf">
          <div class="fridge-mini-card" data-category="vegetable" data-search-index="양파">
            <span class="mini-days-badge" data-base-duration="30"><span class="days-num"></span></span>
          </div>
        </div>
        <div class="refrigerator-shelf" id="fridgeShelf">
          <div class="fridge-mini-card" data-category="fruit" data-search-index="사과">
            <span class="mini-days-badge" data-base-duration="21"><span class="days-num"></span></span>
          </div>
        </div>
        <div class="ingredient-item-wrapper">
          <div class="ingredient-item" data-item-category="fruit" data-search-index="사과 apple" data-has-room="true" data-has-fridge="true" data-has-freezer="false" data-duration-room="7" data-duration-fridge="21" data-duration-freezer="0">
            <div class="duration-badges">
              <span data-badge-method="room"><span class="badge-days"></span></span>
              <span data-badge-method="fridge"><span class="badge-days"></span></span>
            </div>
          </div>
        </div>
        <div class="ingredient-item-wrapper">
          <div class="ingredient-item" data-item-category="vegetable" data-search-index="양파 onion" data-has-room="true" data-has-fridge="false" data-has-freezer="false" data-duration-room="30">
            <div class="duration-badges">
              <span data-badge-method="room"><span class="badge-days"></span></span>
            </div>
          </div>
        </div>
      `;
    });

    it('카테고리 및 검색어 필터 조건에 따라 가시성이 올바르게 전환되는가', () => {
      const wrappers = document.querySelectorAll('.ingredient-item-wrapper') as NodeListOf<HTMLElement>;
      const emptyState = document.getElementById('emptyState')!;
      const grid = document.getElementById('ingredientsGrid')!;
      const refrigeratorView = document.getElementById('refrigeratorView')!;

      // 1. 과일 카테고리 필터링
      filterIngredients({
        activeCategory: 'fruit',
        searchQuery: '',
        activeMethod: 'all',
        activeLayout: 'grid',
        wrapperItems: wrappers,
        emptyState,
        grid,
        refrigeratorView
      });

      expect(wrappers[0].classList.contains('hidden')).toBe(false);
      expect(wrappers[1].classList.contains('hidden')).toBe(true);

      // 2. 검색어 '양파' 필터링
      filterIngredients({
        activeCategory: 'all',
        searchQuery: '양파',
        activeMethod: 'all',
        activeLayout: 'grid',
        wrapperItems: wrappers,
        emptyState,
        grid,
        refrigeratorView
      });

      expect(wrappers[0].classList.contains('hidden')).toBe(true);
      expect(wrappers[1].classList.contains('hidden')).toBe(false);

      // 3. 일치하는 결과가 전혀 없는 경우 emptyState 표출
      filterIngredients({
        activeCategory: 'meat',
        searchQuery: '소고기',
        activeMethod: 'all',
        activeLayout: 'grid',
        wrapperItems: wrappers,
        emptyState,
        grid,
        refrigeratorView
      });

      expect(emptyState.classList.contains('hidden')).toBe(false);
      expect(grid.classList.contains('hidden')).toBe(true);
    });

    it('단일 보관 방식(room) 선택 시 해당 뱃지는 강조되고 비대상 뱃지는 opacity-55 딤드 처리되는가', () => {
      const wrappers = document.querySelectorAll('.ingredient-item-wrapper') as NodeListOf<HTMLElement>;
      const emptyState = document.getElementById('emptyState')!;
      const grid = document.getElementById('ingredientsGrid')!;
      const refrigeratorView = document.getElementById('refrigeratorView')!;

      filterIngredients({
        activeCategory: 'all',
        searchQuery: '',
        activeMethod: 'room',
        activeLayout: 'grid',
        wrapperItems: wrappers,
        emptyState,
        grid,
        refrigeratorView
      });

      const roomBadge = wrappers[0].querySelector('[data-badge-method="room"]');
      const fridgeBadge = wrappers[0].querySelector('[data-badge-method="fridge"]');

      expect(roomBadge?.classList.contains('font-black')).toBe(true);
      expect(fridgeBadge?.classList.contains('opacity-55')).toBe(true);
    });

    it('refrigeratorView 모드에서 선반 내 검색어와 일치하는 미니 카드가 없으면 선반 자체가 hidden 처리되는가', () => {
      const wrappers = document.querySelectorAll('.ingredient-item-wrapper') as NodeListOf<HTMLElement>;
      const emptyState = document.getElementById('emptyState')!;
      const grid = document.getElementById('ingredientsGrid')!;
      const refrigeratorView = document.getElementById('refrigeratorView')!;
      const fridgeShelf = document.getElementById('fridgeShelf')!;

      // '양파' 검색 시 fridgeShelf (사과 위치)는 0건이 되므로 선반이 hidden이어야 함
      filterIngredients({
        activeCategory: 'all',
        searchQuery: '양파',
        activeMethod: 'all',
        activeLayout: 'fridge',
        wrapperItems: wrappers,
        emptyState,
        grid,
        refrigeratorView
      });

      expect(fridgeShelf.classList.contains('hidden')).toBe(true);
    });
  });

  describe('D-Day 계산기 (updateDDayCalculator) 비정상/예외 날짜 입력 방어선 검증', () => {
    let mockDOM: any;

    beforeEach(() => {
      document.body.innerHTML = `
        <div id="calcEatUntil">소비기한</div>
        <div id="calcDDay">D-Day</div>
        <div id="resultFeedbackCard"></div>
      `;
      mockDOM = {
        calcEatUntil: document.getElementById('calcEatUntil'),
        calcDDay: document.getElementById('calcDDay'),
        feedbackCard: document.getElementById('resultFeedbackCard')
      };
    });

    it('잘못된 형식의 날짜 문자열(예: invalid-date, 2026-07) 입력 시 결과를 클리어하는가', () => {
      updateDDayCalculator({
        storageDuration: 7,
        buyDateInputValue: 'invalid-date-format',
        currentLang: 'ko',
        localTranslations: {},
        ...mockDOM
      });

      expect(mockDOM.calcEatUntil.textContent).toBe('');
      expect(mockDOM.calcDDay.textContent).toBe('');

      updateDDayCalculator({
        storageDuration: 7,
        buyDateInputValue: '2026-07',
        currentLang: 'ko',
        localTranslations: {},
        ...mockDOM
      });

      expect(mockDOM.calcDDay.textContent).toBe('');
    });
  });

  describe('커스텀 달력 (FreshSnapCalendar) 미래 날짜 클릭 제한 및 외부 클릭 닫기 검증', () => {
    let calendarDOM: any;
    let selectedDate: Date;

    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2026-07-20T12:00:00Z'));
      document.body.innerHTML = `
        <button id="buyDateTrigger">2026-07-20</button>
        <div id="customCalendarPopover" class="opacity-100 scale-100 pointer-events-auto">
          <button id="prevMonthBtn">이전</button>
          <button id="nextMonthBtn">다음</button>
          <span id="currentMonthYear"></span>
          <div id="calendarDaysGrid"></div>
        </div>
      `;
      calendarDOM = {
        buyDateTrigger: document.getElementById('buyDateTrigger'),
        customCalendarPopover: document.getElementById('customCalendarPopover'),
        prevMonthBtn: document.getElementById('prevMonthBtn'),
        nextMonthBtn: document.getElementById('nextMonthBtn'),
        currentMonthYear: document.getElementById('currentMonthYear'),
        calendarDaysGrid: document.getElementById('calendarDaysGrid')
      };
      selectedDate = new Date('2026-07-20');
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('미래 날짜 셀(예: 오늘 7월 20일 이후인 7월 25일) 클릭 시 날짜 선택 이벤트가 트리거되지 않는가', () => {
      let isCalled = false;
      const calendar = new FreshSnapCalendar({
        currentLang: 'ko',
        selectedDate,
        onDateSelect: () => { isCalled = true; },
        ...calendarDOM
      });

      calendar.render();

      // 미래 날짜 셀( pointer-events-none 클래스 포함 ) 클릭
      const dayButtons = calendarDOM.calendarDaysGrid.querySelectorAll('button');
      // 25일 버튼 클릭 시도
      const futureBtn = Array.from(dayButtons).find((btn: any) => btn.textContent === '25' && btn.classList.contains('pointer-events-none')) as HTMLElement;

      futureBtn?.click();
      expect(isCalled).toBe(false);
    });

    it('달력 팝오버 외부 영역 클릭 시 팝오버가 자동으로 닫히는가', () => {
      new FreshSnapCalendar({
        currentLang: 'ko',
        selectedDate,
        onDateSelect: () => {},
        ...calendarDOM
      });

      expect(calendarDOM.customCalendarPopover.classList.contains('opacity-100')).toBe(true);

      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(calendarDOM.customCalendarPopover.classList.contains('opacity-0')).toBe(true);
    });
  });

  describe('가상 냉장고 뷰 초기화 (initRefrigeratorView) 검증', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="roomShelfGrid"></div>
        <div id="fridgeShelfGrid"></div>
        <div id="freezerShelfGrid"></div>
        <div class="ingredient-item-wrapper">
          <div class="ingredient-item" data-item-id="apple" data-item-category="fruit" data-search-index="사과" data-has-fridge="true" data-duration-fridge="21" data-recommended-method="fridge" data-recommended-label="냉장">
            <h2>사과</h2>
            <span class="text-[10px]">과일</span>
          </div>
        </div>
        <div class="ingredient-item-wrapper">
          <div class="ingredient-item" data-item-id="onion" data-item-category="vegetable" data-search-index="양파" data-has-room="true" data-duration-room="30" data-recommended-method="room" data-recommended-label="실온">
            <h2>양파</h2>
            <span class="text-[10px]">야채</span>
          </div>
        </div>
      `;
    });

    it('각 식재료가 추천 보관 방식 선반(실온/냉장)에 맞게 미니 카드로 배치되는가', () => {
      const roomShelfGrid = document.getElementById('roomShelfGrid');
      const fridgeShelfGrid = document.getElementById('fridgeShelfGrid');
      const freezerShelfGrid = document.getElementById('freezerShelfGrid');
      const wrappers = document.querySelectorAll('.ingredient-item-wrapper') as NodeListOf<HTMLElement>;

      initRefrigeratorView({
        roomShelfGrid,
        fridgeShelfGrid,
        freezerShelfGrid,
        wrapperItems: wrappers
      });

      expect(fridgeShelfGrid?.innerHTML).toContain('사과');
      expect(fridgeShelfGrid?.innerHTML).toContain('21');
      expect(roomShelfGrid?.innerHTML).toContain('양파');
      expect(roomShelfGrid?.innerHTML).toContain('30');
      expect(freezerShelfGrid?.innerHTML).toBe('');
    });
  });

  describe('나의 가상 냉장고 D-Day 계산 및 Zero-Waste 점수 연산 검증', () => {
    it('구매일과 보관 기간에 따른 남은 D-Day가 정확히 연산되는가', () => {
      // 오늘이 2026-07-20이라고 가정
      const today = new Date('2026-07-20');
      today.setHours(0, 0, 0, 0);

      const calculateRemaining = (buyDateStr: string, durationDays: number) => {
        const buyParts = buyDateStr.split('-');
        const buyDate = new Date(parseInt(buyParts[0], 10), parseInt(buyParts[1], 10) - 1, parseInt(buyParts[2], 10));
        buyDate.setHours(0, 0, 0, 0);
        
        const diffTime = today.getTime() - buyDate.getTime();
        const elapsedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (durationDays === 9999) return 9999;
        return durationDays - elapsedDays;
      };

      // 1. 보관 기한이 10일이고, 3일 전에 구매한 경우 -> 남은 기한 7일 (D-7)
      expect(calculateRemaining('2026-07-17', 10)).toBe(7);

      // 2. 보관 기한이 5일이고, 7일 전에 구매한 경우 -> 기한 초과 2일 (D+2, 즉 -2)
      expect(calculateRemaining('2026-07-13', 5)).toBe(-2);

      // 3. 오늘 구매한 경우 -> 남은 기한이 보관 기한과 동일
      expect(calculateRemaining('2026-07-20', 7)).toBe(7);

      // 4. 무기한 보관 식재료인 경우 -> 9999 반환
      expect(calculateRemaining('2026-07-10', 9999)).toBe(9999);
    });

    it('소비/폐기 수량에 따른 Zero-Waste Score가 올바르게 연산되는가', () => {
      const getZeroWasteScore = (consumed: number, wasted: number) => {
        const total = consumed + wasted;
        return total === 0 ? 100 : Math.round((consumed / total) * 100);
      };

      // 1. 아무 내역이 없는 초기 상태 -> 100%
      expect(getZeroWasteScore(0, 0)).toBe(100);

      // 2. 3개 먹고, 1개 버린 경우 -> 75%
      expect(getZeroWasteScore(3, 1)).toBe(75);

      // 3. 2개 먹고, 3개 버린 경우 -> 40%
      expect(getZeroWasteScore(2, 3)).toBe(40);

      // 4. 전부 먹고 하나도 안 버린 경우 -> 100%
      expect(getZeroWasteScore(5, 0)).toBe(100);
    });
  });

});

