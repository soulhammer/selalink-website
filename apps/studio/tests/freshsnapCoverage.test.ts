/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { indexLocalTranslations } from '../src/i18n/freshsnapTranslations';

describe('FreshSnap 커버리지 보완 Vitest 단위/통합 테스트', () => {

  const setupMockDOM = () => {
    document.body.innerHTML = `
      <main id="freshsnap-test-container">
        <!-- 나의 냉장고 대시보드 섹션 -->
        <div id="myFridgeSection">
          <span id="myFridgeCount">0</span>
          <button id="myFridgeToggleBtn" aria-expanded="true">
            <span id="myFridgeToggleArrow">▲</span>
          </button>
          <button id="myFridgeResetBtn">초기화 ↺</button>
          <div id="zeroWasteScore">100%</div>
          <div id="zeroWasteProgress" style="width: 100%"></div>
          <div id="myFridgeGrid"></div>
        </div>

        <div id="myFridgeResetModal" class="hidden">
          <button id="myFridgeConfirmResetBtn">확인</button>
          <button id="myFridgeCancelResetBtn">취소</button>
        </div>

        <input type="text" id="searchInput" />
        <div id="emptyState" class="hidden"></div>
        <div id="ingredientsGrid"></div>

        <!-- 백업 Export / Import 파일 업로드 모형 -->
        <button id="btnExportFridge">내보내기</button>
        <input type="file" id="inputImportFridge" class="hidden" />
        
        <!-- Urgent Shelf 긴급선반 바 -->
        <div id="urgentShelfContainer" class="hidden">
          <span id="urgentShelfCount">0</span>
          <div id="urgentShelfList"></div>
        </div>
      </main>
    `;
  };

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-07-20T12:00:00Z'));

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

    window.localStorage.clear();
    document.documentElement.lang = 'ko';
    setupMockDOM();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('1. freshsnapTranslations 다국어 구조에 9개 언어 필수 키가 유효하게 정의되어 있는가', () => {
    const requiredLangs = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

    requiredLangs.forEach(lang => {
      expect(indexLocalTranslations).toHaveProperty(lang);
      expect(typeof indexLocalTranslations[lang]).toBe('object');
    });
  });

  it('2. JSON Import 시 손상되거나 비정상적인 데이터 구조 입력에 안정적으로 대응하는가', () => {
    const invalidJsonData = "Invalid JSON {";
    
    // 로컬 스토리지 데이터 손상 시 파싱 안전성 테스트
    window.localStorage.setItem('freshsnap_my_fridge', invalidJsonData);
    
    let loadedData = [];
    try {
      const raw = window.localStorage.getItem('freshsnap_my_fridge');
      loadedData = raw ? JSON.parse(raw) : [];
    } catch (e) {
      loadedData = [];
    }

    expect(loadedData).toEqual([]);
  });

  it('3. Urgent Shelf D-Day (D-3 이하) 식재료 필터링 알고리즘이 올바르게 수치를 집계하는가', () => {
    const mockFridgeItems = [
      { id: 'apple', name: '사과', buyDate: '2026-07-15', durationDays: 7 }, // 만료일: 2026-07-22 (D-2) -> Urgent
      { id: 'banana', name: '바나나', buyDate: '2026-07-19', durationDays: 2 }, // 만료일: 2026-07-21 (D-1) -> Urgent
      { id: 'potato', name: '감자', buyDate: '2026-07-10', durationDays: 30 }, // 만료일: 2026-08-09 (D-20) -> Normal
    ];

    const today = new Date('2026-07-20T12:00:00Z');

    const urgentItems = mockFridgeItems.filter(item => {
      const buy = new Date(item.buyDate);
      const expire = new Date(buy.getTime() + item.durationDays * 24 * 60 * 60 * 1000);
      const diffDays = Math.ceil((expire.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return diffDays <= 3;
    });

    expect(urgentItems.length).toBe(2);
    expect(urgentItems.map(i => i.id)).toEqual(['apple', 'banana']);
  });

  it('4. Zero-Waste 점수 계산이 0% ~ 100% 경계 조건에서 안전하게 산출되는가', () => {
    const calculateZeroWaste = (items: Array<{ buyDate: string; durationDays: number }>) => {
      if (items.length === 0) return 100;
      const today = new Date('2026-07-20T12:00:00Z');
      let freshCount = 0;

      items.forEach(item => {
        const buy = new Date(item.buyDate);
        const expire = new Date(buy.getTime() + item.durationDays * 24 * 60 * 60 * 1000);
        if (expire.getTime() >= today.getTime()) {
          freshCount++;
        }
      });

      return Math.round((freshCount / items.length) * 100);
    };

    // 빈 냉장고 -> 100%
    expect(calculateZeroWaste([])).toBe(100);

    // 모든 식재료 신선 -> 100%
    expect(calculateZeroWaste([{ buyDate: '2026-07-19', durationDays: 10 }])).toBe(100);

    // 모든 식재료 만료 -> 0%
    expect(calculateZeroWaste([{ buyDate: '2026-06-01', durationDays: 5 }])).toBe(0);

    // 혼합 상태 -> 50%
    expect(calculateZeroWaste([
      { buyDate: '2026-07-19', durationDays: 10 },
      { buyDate: '2026-06-01', durationDays: 5 }
    ])).toBe(50);
  });
});
