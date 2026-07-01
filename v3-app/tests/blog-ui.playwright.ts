import { test, expect } from '@playwright/test';

test.describe('블로그 메인 UI 동적 기능 통합 검증 (검색, 필터, 정렬, 무한 스크롤)', () => {
  
  test.beforeEach(async ({ page }) => {
    // 로컬 Astro 개발 서버의 한국어 블로그 페이지로 진입
    await page.goto('/ko/blog');
    await page.waitForLoadState('networkidle');
  });

  test('초기 렌더링 상태 및 더보기 페이징 한도 검증', async ({ page }) => {
    // 1. 초기 상태: 화면에 보이는 블로그 카드가 최대 12개인지 확인
    const initialVisible = await page.locator('#blog-posts-container > a:visible').count();
    expect(initialVisible).toBeLessThanOrEqual(12);

    // 2. 더보기 버튼 클릭
    await page.click('#blog-load-more-btn');
    await page.waitForTimeout(500); // 렌더링 시간 대기

    // 3. 더보기 작동 후 노출 카드 개수가 늘어났는지 확인
    const scrolledVisible = await page.locator('#blog-posts-container > a:visible').count();
    expect(scrolledVisible).toBeGreaterThan(initialVisible);
  });

  test('태그 필터 선택 시 콘텐츠 한도 초기화(Limit Reset) 및 카테고리 분류 검증', async ({ page }) => {
    // 1. 더보기 버튼 클릭해서 노출 한도 늘림
    await page.click('#blog-load-more-btn');
    await page.waitForTimeout(500);

    // 2. '위인 습관' 카테고리 태그 버튼 클릭
    await page.click('button[data-filter="buildself"]');
    await page.waitForTimeout(500);

    // 3. 기대 결과: 필터 변경 시 페이징 노출 한도가 다시 초기화되어 최대 12개 이하만 표시되어야 함
    const filteredVisible = await page.locator('#blog-posts-container > a:visible').count();
    expect(filteredVisible).toBeLessThanOrEqual(12);

    // 4. 노출된 모든 카드가 위인 습관(BuildSelf) 카테고리인지 속성값 확인
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    const count = await visibleCards.count();
    for (let i = 0; i < count; i++) {
      const app = await visibleCards.nth(i).getAttribute('data-app');
      expect(app).toBe('buildself');
    }
  });

  test('정렬 셀렉터 변경 시 오름차순/내림차순 정렬 상태 및 전체 카드 정합성 검증', async ({ page }) => {
    // 1. 정렬 방식을 '과거 등록 순' (oldest)으로 변경
    await page.selectOption('select#blog-sort-select', 'oldest');
    await page.waitForTimeout(500);

    // 2. 현재 노출된 12개 카드들의 날짜 속성(data-date)을 수집
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    const count = await visibleCards.count();
    const dates: number[] = [];

    for (let i = 0; i < count; i++) {
      const dateStr = await visibleCards.nth(i).getAttribute('data-date');
      if (dateStr) {
        dates.push(parseInt(dateStr, 10));
      }
    }

    // 3. 수집된 날짜가 과거 순(오름차순)으로 바르게 나열되어 배치되었는지 검증
    const sortedDates = [...dates].sort((a, b) => a - b);
    expect(dates).toEqual(sortedDates);

    // 4. 다시 '최신 등록 순' (latest)으로 원복
    await page.selectOption('select#blog-sort-select', 'latest');
    await page.waitForTimeout(500);

    const newDates: number[] = [];
    for (let i = 0; i < count; i++) {
      const dateStr = await visibleCards.nth(i).getAttribute('data-date');
      if (dateStr) {
        newDates.push(parseInt(dateStr, 10));
      }
    }

    // 5. 내림차순(최신 순) 정렬 검증
    const revSortedDates = [...newDates].sort((a, b) => b - a);
    expect(newDates).toEqual(revSortedDates);
  });

  test('검색어 입력 시 필터링 및 결과 피드백 텍스트 갱신 검증', async ({ page }) => {
    // 1. 검색창에 '사과' 입력
    await page.fill('input#blog-search-input', '사과');
    await page.waitForTimeout(500);

    // 2. 화면에 노출된 모든 카드가 제목/설명/태그에 '사과'를 포함하고 있는지 체크
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    const count = await visibleCards.count();
    
    for (let i = 0; i < count; i++) {
      const title = await visibleCards.nth(i).getAttribute('data-title') || '';
      const desc = await visibleCards.nth(i).getAttribute('data-desc') || '';
      const ingName = await visibleCards.nth(i).getAttribute('data-ing-name') || '';
      const tags = await visibleCards.nth(i).getAttribute('data-tags') || '';

      const matches = 
        title.includes('사과') || 
        desc.includes('사과') || 
        ingName.includes('사과') || 
        tags.includes('사과');
      
      expect(matches, `오류: 검색어 '사과'와 매칭되지 않는 카드가 노출되었습니다: ${title}`).toBe(true);
    }

    // 3. 검색 결과 피드백 텍스트가 정상적으로 화면에 갱신되었는지 확인
    const searchCountText = await page.locator('#blog-search-count').textContent();
    expect(searchCountText).toContain(`${count}개의 포스트가 발견되었습니다.`);
  });

  test('검색 + 태그 필터 + 날짜 정렬 복합 연동 시나리오 검증', async ({ page }) => {
    // 1. 카테고리 필터 '식재료 보관' (storeself) 클릭
    await page.click('button[data-filter="storeself"]');

    // 2. 검색어 '보관' 입력
    await page.fill('input#blog-search-input', '보관');

    // 3. 정렬 방식을 '과거 등록 순' (oldest)으로 변경
    await page.selectOption('select#blog-sort-select', 'oldest');
    await page.waitForTimeout(500);

    // 4. 노출된 카드들 검사
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    const count = await visibleCards.count();
    
    const dates: number[] = [];
    for (let i = 0; i < count; i++) {
      const card = visibleCards.nth(i);
      
      // 카테고리가 'storeself' 또는 'freshself' 인지 검사
      const app = await card.getAttribute('data-app');
      expect(app === 'storeself' || app === 'freshself').toBe(true);

      // '보관'이라는 키워드를 포함하는지 검사
      const title = await card.getAttribute('data-title') || '';
      const desc = await card.getAttribute('data-desc') || '';
      const tags = await card.getAttribute('data-tags') || '';
      const matches = title.includes('보관') || desc.includes('보관') || tags.includes('보관');
      expect(matches).toBe(true);

      // 날짜 수집
      const dateStr = await card.getAttribute('data-date');
      if (dateStr) {
        dates.push(parseInt(dateStr, 10));
      }
    }

    // 5. 복합 필터 하에서도 날짜가 과거 순으로 정상 정렬되어 표시되는지 검증
    const sortedDates = [...dates].sort((a, b) => a - b);
    expect(dates).toEqual(sortedDates);
  });

});
