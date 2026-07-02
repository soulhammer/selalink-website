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

    // 3. 더보기 작동 후 노출 카드 개수가 늘어났는지 확인 (expect.toPass로 자동 대기)
    const scrolledVisible = page.locator('#blog-posts-container > a:visible');
    await expect(async () => {
      const count = await scrolledVisible.count();
      expect(count).toBeGreaterThan(initialVisible);
    }).toPass();
  });

  test('태그 필터 선택 시 콘텐츠 한도 초기화(Limit Reset) 및 카테고리 분류 검증', async ({ page }) => {
    const posts = page.locator('#blog-posts-container > a:visible');

    // 1. 더보기 버튼 클릭해서 노출 한도 늘림
    await page.click('#blog-load-more-btn');
    await expect(async () => {
      expect(await posts.count()).toBeGreaterThan(12);
    }).toPass();

    // 2. '위인 습관' 카테고리 태그 버튼 클릭
    await page.click('button[data-filter="buildself"]');

    // 3. 기대 결과: 필터 변경 시 페이징 노출 한도가 다시 초기화되어 최대 12개 이하만 표시되어야 함
    await expect(async () => {
      expect(await posts.count()).toBeLessThanOrEqual(12);
    }).toPass();

    // 4. 노출된 모든 카드가 위인 습관(BuildSelf) 카테고리인지 속성값 확인
    const count = await posts.count();
    for (let i = 0; i < count; i++) {
      const app = await posts.nth(i).getAttribute('data-app');
      expect(app).toBe('buildself');
    }
  });

  test('정렬 셀렉터 변경 시 오름차순/내림차순 정렬 상태 및 전체 카드 정합성 검증', async ({ page }) => {
    // 1. 정렬 방식을 '과거 등록 순' (oldest)으로 변경
    await page.selectOption('select#blog-sort-select', 'oldest');

    // 2. 현재 노출된 12개 카드들의 날짜 속성(data-date)을 수집하여 과거 순으로 정렬되었는지 검증 (toPass 활용)
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    await expect(async () => {
      const count = await visibleCards.count();
      const dates: number[] = [];

      for (let i = 0; i < count; i++) {
        const dateStr = await visibleCards.nth(i).getAttribute('data-date');
        if (dateStr) {
          dates.push(parseInt(dateStr, 10));
        }
      }

      const sortedDates = [...dates].sort((a, b) => a - b);
      expect(dates).toEqual(sortedDates);
    }).toPass();

    // 4. 다시 '최신 등록 순' (latest)으로 원복
    await page.selectOption('select#blog-sort-select', 'latest');

    // 5. 내림차순(최신 순) 정렬 검증 (toPass 활용)
    await expect(async () => {
      const count = await visibleCards.count();
      const newDates: number[] = [];
      for (let i = 0; i < count; i++) {
        const dateStr = await visibleCards.nth(i).getAttribute('data-date');
        if (dateStr) {
          newDates.push(parseInt(dateStr, 10));
        }
      }

      const revSortedDates = [...newDates].sort((a, b) => b - a);
      expect(newDates).toEqual(revSortedDates);
    }).toPass();
  });

  test('검색어 입력 시 필터링 및 결과 피드백 텍스트 갱신 검증', async ({ page }) => {
    // 1. 검색창에 '사과' 입력
    await page.fill('input#blog-search-input', '사과');
    // 디바운스 타이머(150ms) 만료 및 필터링 적용 대기
    await page.waitForTimeout(250);

    // 2. 화면에 노출된 모든 카드가 검색 조건을 충족하고 결과 텍스트가 갱신되었는지 검증 (toPass 활용)
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    await expect(async () => {
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

      const searchCountText = await page.locator('#blog-search-count').textContent();
      expect(searchCountText).toContain(`${count}개의 포스트가 발견되었습니다.`);
    }).toPass();
  });

  test('검색 + 태그 필터 + 날짜 정렬 복합 연동 시나리오 검증', async ({ page }) => {
    // 1. 카테고리 필터 '식재료 보관' (storeself) 클릭
    await page.click('button[data-filter="storeself"]');

    // 2. 검색어 '보관' 입력
    await page.fill('input#blog-search-input', '보관');
    // 디바운스 타이머(150ms) 만료 및 필터링 적용 대기
    await page.waitForTimeout(250);

    // 3. 정렬 방식을 '과거 등록 순' (oldest)으로 변경
    await page.selectOption('select#blog-sort-select', 'oldest');

    // 4. 노출된 카드들이 복합 연동 조건 및 과거 순 정렬 상태를 충족하는지 검증 (toPass 활용)
    const visibleCards = page.locator('#blog-posts-container > a:visible');
    await expect(async () => {
      const count = await visibleCards.count();
      const dates: number[] = [];
      
      for (let i = 0; i < count; i++) {
        const card = visibleCards.nth(i);
        
        const app = await card.getAttribute('data-app');
        expect(app === 'storeself' || app === 'freshself').toBe(true);

        const title = await card.getAttribute('data-title') || '';
        const desc = await card.getAttribute('data-desc') || '';
        const tags = await card.getAttribute('data-tags') || '';
        const matches = title.includes('보관') || desc.includes('보관') || tags.includes('보관');
        expect(matches).toBe(true);

        const dateStr = await card.getAttribute('data-date');
        if (dateStr) {
          dates.push(parseInt(dateStr, 10));
        }
      }

      const sortedDates = [...dates].sort((a, b) => a - b);
      expect(dates).toEqual(sortedDates);
    }).toPass();
  });

  test('9개 모든 언어별 블로그 페이지에서 해당 언어의 검색어 작동 검증', async ({ page }) => {
    const searchSpecs = [
      { lang: 'ko', query: '사과' },
      { lang: 'en', query: 'Apple' },
      { lang: 'ja', query: 'リンゴ' },
      { lang: 'zh', query: '苹果' },
      { lang: 'es', query: 'Manzana' },
      { lang: 'fr', query: 'Pomme' },
      { lang: 'de', query: 'Apfel' },
      { lang: 'pt', query: 'Maçã' },
      { lang: 'id', query: 'Apel' }
    ];

    for (const spec of searchSpecs) {
      // 1. 해당 언어의 블로그 리스트 페이지로 이동
      await page.goto(`/${spec.lang}/blog`);
      await page.waitForLoadState('networkidle');

      // 2. 검색창에 검색어 입력
      const searchInput = page.locator('input#blog-search-input');
      await searchInput.fill(spec.query);
      // 디바운스 타이머(150ms) 만료 및 필터링 적용 대기
      await page.waitForTimeout(250);

      // 3. 필터링된 결과 카드들이 검색어를 포함하고 있는지 검증
      const visibleCards = page.locator('#blog-posts-container > a:visible');
      
      await expect(async () => {
        const count = await visibleCards.count();
        // 최소한 사과 보관법 1개 이상은 검색되어야 함
        expect(count).toBeGreaterThanOrEqual(1);

        for (let i = 0; i < count; i++) {
          const title = (await visibleCards.nth(i).getAttribute('data-title') || '').toLowerCase();
          const desc = (await visibleCards.nth(i).getAttribute('data-desc') || '').toLowerCase();
          const ingName = (await visibleCards.nth(i).getAttribute('data-ing-name') || '').toLowerCase();
          const tags = (await visibleCards.nth(i).getAttribute('data-tags') || '').toLowerCase();

          const lowerQuery = spec.query.toLowerCase();
          
          // 포르투갈어의 경우 'ã' 등 다이아크리틱 매칭을 고려해 normalized 매칭도 추가
          const normalizedTitle = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          const normalizedQuery = lowerQuery.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

          const matches = 
            title.includes(lowerQuery) || 
            desc.includes(lowerQuery) || 
            ingName.includes(lowerQuery) || 
            tags.includes(lowerQuery) ||
            normalizedTitle.includes(normalizedQuery);

          expect(matches, `오류 [${spec.lang}]: 검색어 '${spec.query}'와 매칭되지 않는 카드 '${title}'가 노출되었습니다.`).toBe(true);
        }

        const searchCountText = await page.locator('#blog-search-count').textContent();
        expect(searchCountText).toContain(`${count}`);
      }).toPass();
    }
  });

});

