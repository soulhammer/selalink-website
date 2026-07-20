/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('FreshSnap 가상 냉장고 UI 인터랙션 JSDOM 통합 검증 (TDD)', () => {
  
  // HTML 모형 적재
  const setupMockDOM = () => {
    document.body.innerHTML = `
      <main id="freshsnap-test-container">
        <!-- 나의 냉장고 대시보드 섹션 -->
        <div id="myFridgeSection" class="hidden">
          <h2 class="flex items-center gap-2">
            🧊 가상 냉장고
            <span id="myFridgeCount">0</span>
            <!-- 아코디언 토글 버튼 -->
            <button id="myFridgeToggleBtn" aria-expanded="true">
              <span id="myFridgeToggleArrow">▲</span>
            </button>
          </h2>
          
          <!-- 초기화 버튼 -->
          <button id="myFridgeResetBtn">초기화 ↺</button>
          
          <div class="text-right">
            <div id="zeroWasteScore">100%</div>
          </div>
          <div id="zeroWasteProgress" style="width: 100%"></div>

          <!-- 보관 식재료 그리드 리스트 (접혔을 때 숨겨지는 타겟) -->
          <div id="myFridgeGrid"></div>
        </div>

        <!-- 커스텀 리셋 컨펌 모달 -->
        <div id="myFridgeResetModal" class="hidden">
          <button id="myFridgeConfirmResetBtn">확인</button>
          <button id="myFridgeCancelResetBtn">취소</button>
        </div>

        <!-- 기존 검색 영역 및 기타 요소 (스크립트 로딩 에러 방지용) -->
        <input type="text" id="searchInput" />
        <div id="emptyState" class="hidden"></div>
        <div id="ingredientsGrid"></div>
        <div id="refrigeratorView" class="hidden"></div>
        <div id="methodFilterContainer"></div>
        <div id="fridgeViewInfoBanner" class="hidden"></div>
        <button id="viewGridBtn"></button>
        <button id="viewFridgeBtn"></button>
        <div id="roomShelfGrid"></div>
        <div id="fridgeShelfGrid"></div>
        <div id="freezerShelfGrid"></div>
        <button id="mobileTrustTrigger"></button>
        <div id="trustBadgeContainer" class="hidden"></div>
        <span id="mobileTrustArrow"></span>
      </main>
    `;
  };

  beforeEach(() => {
    vi.resetModules();
    
    // localStorage Mocking
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

  it('1. 가상 냉장고에 등록된 아이템이 있으면 대시보드가 정상 렌더링되는가', async () => {
    // 로컬 스토리지에 모의 식재료 적재
    const mockFridge = [
      {
        id: 'onion',
        name: '양파',
        category: 'vegetable',
        emoji: '🧅',
        method: 'room',
        durationDays: 30,
        buyDate: '2026-07-15',
        idForDelete: 'delete_onion_123'
      }
    ];
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify(mockFridge));

    // freshsnapIndex 스크립트를 로드하여 렌더링 트리거
    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));

    const myFridgeSection = document.getElementById('myFridgeSection');
    const myFridgeCount = document.getElementById('myFridgeCount');
    const myFridgeGrid = document.getElementById('myFridgeGrid');

    // 대시보드가 노출되어야 하고 개수 뱃지가 1이어야 함
    expect(myFridgeSection?.classList.contains('hidden')).toBe(false);
    expect(myFridgeCount?.textContent).toBe('1');
    expect(myFridgeGrid?.innerHTML).toContain('양파');
    expect(myFridgeGrid?.innerHTML).toContain('D-25'); // 2026-07-20 기준 (구매일 2026-07-15, 기한 30일 -> 경과 5일 -> 남은 기한 25일)
  });

  it('2. 아코디언 토글 버튼을 누르면 접기/펼치기 상태가 localStorage에 저장되고 UI에 반영되는가', async () => {
    const mockFridge = [
      { id: 'onion', name: '양파', category: 'vegetable', emoji: '🧅', method: 'room', durationDays: 30, buyDate: '2026-07-15', idForDelete: 'del_1' }
    ];
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify(mockFridge));

    // 스크립트 마운트
    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));

    const toggleBtn = document.getElementById('myFridgeToggleBtn');
    const myFridgeGrid = document.getElementById('myFridgeGrid');
    const arrow = document.getElementById('myFridgeToggleArrow');

    expect(myFridgeGrid?.classList.contains('hidden')).toBe(false);
    expect(arrow?.textContent).toBe('▲');

    // 클릭하여 접기
    toggleBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(myFridgeGrid?.classList.contains('hidden')).toBe(true);
    expect(arrow?.textContent).toBe('▼');
    expect(window.localStorage.getItem('freshsnap_my_fridge_collapsed')).toBe('true');

    // 다시 클릭하여 펼치기
    toggleBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(myFridgeGrid?.classList.contains('hidden')).toBe(false);
    expect(arrow?.textContent).toBe('▲');
    expect(window.localStorage.getItem('freshsnap_my_fridge_collapsed')).toBe('false');
  });

  it('3. 초기화 버튼 클릭 시 커스텀 모달이 열리고 승인/취소 버튼이 정상 동작하는가', async () => {
    const mockFridge = [
      { id: 'onion', name: '양파', category: 'vegetable', emoji: '🧅', method: 'room', durationDays: 30, buyDate: '2026-07-15', idForDelete: 'del_1' }
    ];
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify(mockFridge));
    // 임의의 통계 수치 (먹은 것 1, 버린 것 3 -> 25%)
    window.localStorage.setItem('freshsnap_stats', JSON.stringify({ consumed: 1, wasted: 3 }));

    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));

    const scoreText = document.getElementById('zeroWasteScore');
    const resetModal = document.getElementById('myFridgeResetModal');
    const resetBtn = document.getElementById('myFridgeResetBtn');
    const confirmResetBtn = document.getElementById('myFridgeConfirmResetBtn');
    const cancelResetBtn = document.getElementById('myFridgeCancelResetBtn');

    expect(scoreText?.textContent).toBe('25%');
    expect(resetModal?.classList.contains('hidden')).toBe(true);

    // 1. 초기화 버튼 클릭 -> 모달 오픈
    resetBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(resetModal?.classList.contains('hidden')).toBe(false);

    // 2. 취소 버튼 클릭 -> 모달 닫힘 (로컬스토리지는 그대로 25% 유지)
    cancelResetBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(resetModal?.classList.contains('hidden')).toBe(true);
    expect(scoreText?.textContent).toBe('25%');

    // 3. 다시 초기화 클릭 후 확인 버튼 클릭 -> 리셋 적용 및 모달 닫힘
    resetBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    confirmResetBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(resetModal?.classList.contains('hidden')).toBe(true);
    const myFridgeSection = document.getElementById('myFridgeSection');
    const myFridgeGrid = document.getElementById('myFridgeGrid');
    expect(myFridgeSection?.classList.contains('hidden')).toBe(false);
    expect(myFridgeGrid?.innerHTML).toContain('아직 보관 중인 식재료가 없습니다');
    expect(window.localStorage.getItem('freshsnap_stats')).toBe(JSON.stringify({ consumed: 0, wasted: 0 }));
    expect(window.localStorage.getItem('freshsnap_my_fridge')).toBeNull();
  });

  it('4. 카드 내의 X 버튼을 클릭하면 통계 갱신 없이 아이템만 냉장고에서 제거되는가', async () => {
    const mockFridge = [
      { id: 'onion', name: '양파', category: 'vegetable', emoji: '🧅', method: 'room', durationDays: 30, buyDate: '2026-07-15', idForDelete: 'del_1' }
    ];
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify(mockFridge));
    window.localStorage.setItem('freshsnap_stats', JSON.stringify({ consumed: 2, wasted: 1 })); // 67%

    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));

    const myFridgeGrid = document.getElementById('myFridgeGrid');
    expect(myFridgeGrid?.innerHTML).toContain('양파');

    // 카드 내부의 X 버튼 (단순 제거 버튼) 강제 트리거
    const removeBtn = myFridgeGrid?.querySelector('.remove-btn');
    expect(removeBtn).toBeTruthy();

    removeBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    // 페이드 아웃 타임아웃 250ms 감안하여 대기
    await new Promise((resolve) => setTimeout(resolve, 300));

    // 냉장고 리스트에서 양파가 사라짐
    const updatedFridge = JSON.parse(window.localStorage.getItem('freshsnap_my_fridge') || '[]');
    expect(updatedFridge.length).toBe(0);

    // 통계는 그대로 유지 (67%)
    const stats = JSON.parse(window.localStorage.getItem('freshsnap_stats') || '{}');
    expect(stats.consumed).toBe(2);
    expect(stats.wasted).toBe(1);
  });

  it('5. 다국어(영어, 일본어) 환경에서도 냉장고가 비었을 때 해당 언어의 가이드 문구가 올바르게 출력되는가', async () => {
    // 1. 영어 환경 테스트
    vi.resetModules();
    setupMockDOM();
    document.documentElement.lang = 'en';
    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));
    
    let myFridgeGrid = document.getElementById('myFridgeGrid');
    expect(myFridgeGrid?.innerHTML).toContain('No stored ingredients yet');

    // 2. 일본어 환경 테스트
    vi.resetModules();
    setupMockDOM();
    document.documentElement.lang = 'ja';
    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));
    
    myFridgeGrid = document.getElementById('myFridgeGrid');
    expect(myFridgeGrid?.innerHTML).toContain('まだ保管中の食材がありません');
  });

  it('6. 냉장고 품목이 비었어도 누적 통계 점수가 존재하면 100%로 덮어쓰지 않고 실제 점수를 바르게 노출하는가', async () => {
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify([])); // 빈 냉장고
    window.localStorage.setItem('freshsnap_stats', JSON.stringify({ consumed: 1, wasted: 3 })); // 25%
    
    vi.resetModules();
    setupMockDOM();
    document.documentElement.lang = 'ko';
    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));
    
    const scoreText = document.getElementById('zeroWasteScore');
    const myFridgeGrid = document.getElementById('myFridgeGrid');
    
    // 품목은 비어있으나 점수는 25%여야 함
    expect(scoreText?.textContent).toBe('25%');
    expect(myFridgeGrid?.innerHTML).toContain('아직 보관 중인 식재료가 없습니다');
  });

  it('7. 냉장고 품목이 비었어도 누적 통계 기록이 존재하면 초기화 버튼이 활성화되는가', async () => {
    window.localStorage.setItem('freshsnap_my_fridge', JSON.stringify([])); // 빈 냉장고
    window.localStorage.setItem('freshsnap_stats', JSON.stringify({ consumed: 2, wasted: 2 })); // 50%
    
    vi.resetModules();
    setupMockDOM();
    document.documentElement.lang = 'ko';
    await import('../src/utils/freshsnapIndex');
    window.dispatchEvent(new Event('pageshow'));
    
    const resetBtn = document.getElementById('myFridgeResetBtn') as HTMLButtonElement;
    const confirmResetBtn = document.getElementById('myFridgeConfirmResetBtn');
    const resetModal = document.getElementById('myFridgeResetModal');
    
    // 점수 기록이 남아있으므로 초기화 버튼이 활성화(disabled가 없음)되어야 함
    expect(resetBtn?.hasAttribute('disabled')).toBe(false);
    expect(resetBtn?.classList.contains('opacity-40')).toBe(false);

    // 초기화 버튼 클릭 -> 모달 등장
    resetBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(resetModal?.classList.contains('hidden')).toBe(false);

    // 확인 버튼 클릭 -> 리셋 수행 후 최종 비활성화 처리 확인
    confirmResetBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(resetModal?.classList.contains('hidden')).toBe(true);
    expect(resetBtn?.hasAttribute('disabled')).toBe(true);
    expect(resetBtn?.classList.contains('opacity-40')).toBe(true);
    expect(window.localStorage.getItem('freshsnap_stats')).toBe(JSON.stringify({ consumed: 0, wasted: 0 }));
  });

});
