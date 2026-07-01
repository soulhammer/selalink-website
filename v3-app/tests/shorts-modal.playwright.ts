import { test, expect } from '@playwright/test';

test.describe('메인 홈페이지 쇼츠 비디오 모달 연동 검증', () => {
  test.beforeEach(async ({ page }) => {
    // 한국어 메인 페이지로 진입
    await page.goto('/ko');
    await page.waitForLoadState('networkidle');
  });

  test('쇼츠 비디오 카드 클릭 시 앱 타입별 다운로드 링크 및 테마 색상 분기가 잘 입혀져야 하고, 닫을 때 동영상 재생이 멈춰야 한다', async ({ page }) => {
    // 0. 동적으로 생성되는 스토리 버튼들이 나타날 때까지 대기
    await page.waitForSelector('#app-stories-container > button');

    // 1. 첫 번째 쇼츠 카드를 획득하여 앱 종류 판별 후 클릭
    const firstShortCard = page.locator('#app-stories-container > button').first();
    const cardText = await firstShortCard.locator('span').textContent() || '';
    const isBuildSelf = cardText.toUpperCase().includes('BUILDSELF');
    await firstShortCard.click();
    await page.waitForTimeout(500);

    // 2. 모달이 정상적으로 나타났는지 및 iframe src가 자동재생 URL로 채워졌는지 검사
    const modal = page.locator('#shorts-modal');
    await expect(modal).not.toHaveClass(/hidden/);

    const iframe = page.locator('#shorts-iframe');
    const iframeSrc = await iframe.getAttribute('src');
    expect(iframeSrc).toContain('autoplay=1');
    expect(iframeSrc).toContain('https://www.youtube.com/embed/');

    // 3. CTA 다운로드 버튼의 href 링크 및 브랜드별 테마 색상 분기 검사
    const ctaBtn = page.locator('#modal-cta-btn');
    const ctaHref = await ctaBtn.getAttribute('href');
    if (isBuildSelf) {
      expect(ctaHref).toContain('id=com.selalink.buildself');
      await expect(ctaBtn).toHaveClass(/from-teal-500/);
    } else {
      expect(ctaHref).toContain('id=com.selalink.freshself');
      await expect(ctaBtn).toHaveClass(/from-purple-500/);
    }

    // 4. 모달 닫기 버튼 클릭
    await page.click('#close-shorts-btn');
    await page.waitForTimeout(500);

    // 5. 모달이 다시 감춰졌는지 및 소리 계속 재생 현상을 막기 위해 iframe src가 비워졌는지 최종 검사
    await expect(modal).toHaveClass(/hidden/);
    const resetSrc = await iframe.getAttribute('src');
    expect(resetSrc).toBe('');
  });
});
