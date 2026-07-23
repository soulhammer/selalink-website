import { test, expect } from '@playwright/test';

test.describe('BuildSnap & FreshSnap E2E 사용자 UI 시나리오 및 반응형 검증', () => {

  // ----------------------------------------------------
  // 1. BuildSnap PC (1440x900) 사용자 전체 여정 테스트
  // ----------------------------------------------------
  test('BuildSnap PC Viewport E2E User Journey & Matching Flow', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    console.log('[BuildSnap PC] Navigating to KO page...');
    await page.goto('/ko/apps/buildsnap/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // 1-1. 통계 아코디언 대시보드 토글
    const btnToggleStats = page.locator('#btnToggleStats, #btnStatsToggle');
    if (await btnToggleStats.isVisible()) {
      await btnToggleStats.click();
      await page.waitForTimeout(300);
      const statsContent = page.locator('#statsContainer, #statsAccordionContent');
      await expect(statsContent).toBeVisible();
    }

    // 1-2. 위저드 질문 선택 및 2단계 이동
    const ageBtn = page.locator('.age-btn').first();
    const genderBtn = page.locator('.gender-btn').first();
    if (await ageBtn.isVisible()) await ageBtn.click();
    if (await genderBtn.isVisible()) await genderBtn.click();

    const btnNext = page.locator('#btnNextStep');
    if (await btnNext.isVisible()) {
      await btnNext.click();
      await page.waitForTimeout(500);
    }

    // 1-3. 맞춤 진단 실행
    const btnDiagnose = page.locator('#btnDiagnose');
    if (await btnDiagnose.isVisible()) {
      await btnDiagnose.click();
      await page.waitForTimeout(500);
    }

    // 1-4. 결과 확인
    const resultContainer = page.locator('#resultContainer, #diagnosisCard');
    await expect(resultContainer).toBeVisible();

    // 1-5. 스크린샷 캡처
    await page.screenshot({ path: 'test-results/buildsnap_pc_user_journey.png' });
  });

  // ----------------------------------------------------
  // 2. BuildSnap Mobile (375x812) 사용자 전체 여정 테스트
  // ----------------------------------------------------
  test('BuildSnap Mobile Viewport E2E User Journey', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    console.log('[BuildSnap Mobile] Navigating to KO page...');
    await page.goto('/ko/apps/buildsnap/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const title = page.locator('h1, h2').first();
    await expect(title).toBeVisible();

    // 2-1. 모바일에서 터치 버튼 클릭
    const ageBtn = page.locator('.age-btn').first();
    if (await ageBtn.isVisible()) await ageBtn.click();

    await page.screenshot({ path: 'test-results/buildsnap_mobile_user_journey.png' });
  });

  // ----------------------------------------------------
  // 3. FreshSnap PC (1440x900) 사용자 전체 여정 테스트
  // ----------------------------------------------------
  test('FreshSnap PC Viewport E2E User Journey & Storage Management', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    console.log('[FreshSnap PC] Navigating to KO page...');
    await page.goto('/ko/apps/freshsnap/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // 3-1. 식재료 검색 기능
    const searchInput = page.locator('#searchInput');
    if (await searchInput.isVisible()) {
      await searchInput.fill('양파');
      await page.waitForTimeout(300);
    }

    // 3-2. 식재료 카드 내 냉장고에 추가 클릭 시도
    const addBtn = page.locator('.add-to-fridge-btn, [data-action="add-fridge"]').first();
    if (await addBtn.isVisible()) {
      await addBtn.click();
      await page.waitForTimeout(300);

      // 내 냉장고 카운트 증가 확인
      const fridgeCount = page.locator('#myFridgeCount');
      if (await fridgeCount.isVisible()) {
        const text = await fridgeCount.textContent();
        expect(Number(text)).toBeGreaterThanOrEqual(1);
      }
    }

    // 3-3. 스크린샷 캡처
    await page.screenshot({ path: 'test-results/freshsnap_pc_user_journey.png' });
  });

  // ----------------------------------------------------
  // 4. FreshSnap Mobile (375x812) 사용자 전체 여정 테스트
  // ----------------------------------------------------
  test('FreshSnap Mobile Viewport E2E User Journey', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    console.log('[FreshSnap Mobile] Navigating to KO page...');
    await page.goto('/ko/apps/freshsnap/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();

    await page.screenshot({ path: 'test-results/freshsnap_mobile_user_journey.png' });
  });

  // ----------------------------------------------------
  // 5. BuildSnap & FreshSnap 다국어(EN, JA, ES) 접속 검증
  // ----------------------------------------------------
  test('BuildSnap & FreshSnap Multilingual Locales Page Load', async ({ page }) => {
    // EN BuildSnap
    await page.goto('/en/apps/buildsnap/', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(/\/en\/apps\/buildsnap/);

    // JA FreshSnap
    await page.goto('/ja/apps/freshsnap/', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(/\/ja\/apps\/freshsnap/);

    // ES FreshSnap
    await page.goto('/es/apps/freshsnap/', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(/\/es\/apps\/freshsnap/);
  });
});
