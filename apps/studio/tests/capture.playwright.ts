import { test } from '@playwright/test';

test('capture buildsnap screenshot', async ({ page }) => {
  // --- 1. KO Locale Scenario ---
  console.log("Navigating to http://localhost:4321/ko/apps/buildsnap/ ...");
  await page.goto('http://localhost:4321/ko/apps/buildsnap/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  console.log("Expanding statistics accordion...");
  await page.click('#btnToggleStats');
  await page.waitForTimeout(1000);
  
  const extPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/scratch/buildsnap_dashboard_expanded.png';
  await page.screenshot({ path: extPath, fullPage: true });
  console.log("Dashboard expanded screenshot saved: " + extPath);

  console.log("Selecting step 1 options (Adult, All)...");
  await page.click('.age-btn[data-age="adult"]');
  await page.click('.gender-btn[data-gender="all"]');
  await page.waitForTimeout(500);

  console.log("Clicking next step button...");
  await page.click('#btnNextStep');
  await page.waitForTimeout(1000);

  const step2Path = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/scratch/buildsnap_wizard_step2.png';
  await page.screenshot({ path: step2Path });
  console.log("Wizard step 2 screenshot saved: " + step2Path);

  console.log("Clicking diagnose button...");
  await page.click('#btnDiagnose');
  await page.waitForTimeout(1000);

  const resultPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/scratch/buildsnap_result_card.png';
  await page.screenshot({ path: resultPath });
  console.log("Result card screenshot saved: " + resultPath);

  console.log("Scrolling to bottom...");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  const finalPath = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/buildsnap_capture.png';
  await page.screenshot({ path: finalPath });
  console.log("Final full view screenshot saved: " + finalPath);

  // --- 2. EN Locale Scenario ---
  console.log("Navigating to http://localhost:4321/en/apps/buildsnap/ ...");
  await page.goto('http://localhost:4321/en/apps/buildsnap/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  console.log("Selecting step 1 options in EN...");
  await page.click('.age-btn[data-age="adult"]');
  await page.click('.gender-btn[data-gender="all"]');
  await page.waitForTimeout(500);

  await page.click('#btnNextStep');
  await page.waitForTimeout(1000);

  console.log("Diagnosing in EN...");
  await page.click('#btnDiagnose');
  await page.waitForTimeout(1000);

  const resultPathEn = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/scratch/buildsnap_result_card_en.png';
  await page.screenshot({ path: resultPathEn });
  console.log("EN Result card screenshot saved: " + resultPathEn);

  // --- 3. JA Locale Scenario ---
  console.log("Navigating to http://localhost:4321/ja/apps/buildsnap/ ...");
  await page.goto('http://localhost:4321/ja/apps/buildsnap/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  console.log("Selecting step 1 options in JA...");
  await page.click('.age-btn[data-age="adult"]');
  await page.click('.gender-btn[data-gender="all"]');
  await page.waitForTimeout(500);

  await page.click('#btnNextStep');
  await page.waitForTimeout(1000);

  console.log("Diagnosing in JA...");
  await page.click('#btnDiagnose');
  await page.waitForTimeout(1000);

  const resultPathJa = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/scratch/buildsnap_result_card_ja.png';
  await page.screenshot({ path: resultPathJa });
  console.log("JA Result card screenshot saved: " + resultPathJa);
});

test('capture homepage states', async ({ page }) => {
  const basePath = '/Users/soulhammer/.gemini/antigravity-ide/brain/f76537a2-7db7-45de-8b39-c504e32e1a48/scratch';

  // 1. PC Viewport + Light Mode
  console.log("PC Viewport - Navigating to http://localhost:4321/ko ...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/ko', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: `${basePath}/homepage_pc_light.png`, fullPage: true });
  console.log("Saved: homepage_pc_light.png");

  // Force dark mode state simulation
  await page.evaluate(() => document.documentElement.classList.add('dark'));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${basePath}/homepage_pc_dark.png`, fullPage: true });
  console.log("Saved: homepage_pc_dark.png (Simulated)");

  // 2. Mobile Viewport + Light Mode
  console.log("Mobile Viewport - Navigating to http://localhost:4321/ko ...");
  await page.setViewportSize({ width: 375, height: 812 });
  
  await page.evaluate(() => document.documentElement.classList.remove('dark'));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${basePath}/homepage_mobile_light.png`, fullPage: true });
  console.log("Saved: homepage_mobile_light.png");

  // Force dark mode state simulation for mobile
  await page.evaluate(() => document.documentElement.classList.add('dark'));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${basePath}/homepage_mobile_dark.png`, fullPage: true });
  console.log("Saved: homepage_mobile_dark.png (Simulated)");
});

