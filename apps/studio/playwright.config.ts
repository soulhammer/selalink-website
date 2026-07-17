import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // 테스트 파일 패턴 (Vitest의 스캔 충돌을 방지하기 위해 별도 확장자 지정)
  testMatch: '**/*.playwright.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    headless: true, // 로컬에서도 백그라운드 구동
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // 테스트 실행 전에 로컬 astro 개발 서버가 떠있는지 확인하고, 떠있으면 재사용
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
    stdout: 'ignore',
    stderr: 'pipe',
    timeout: 120 * 1000,
  },
});
