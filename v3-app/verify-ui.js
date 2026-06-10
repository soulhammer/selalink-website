import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const outputDir = '/Users/soulhammer/.gemini/antigravity-ide/brain/5fc16341-b574-4c76-b087-aa9b1a95e228/scratch';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function run() {
  console.log('실시간 반응형 웹 브라우저 검증을 시작합니다...');
  console.log(`실행 크롬 경로: ${chromePath}`);
  
  // 브라우저 팝업 실행 (headless: false)
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: chromePath,
    defaultViewport: null,
    args: ['--window-position=100,100']
  });

  const page = await browser.newPage();
  
  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  try {
    for (const vp of viewports) {
      console.log(`\n----------------------------------------`);
      console.log(`뷰포트 전환: ${vp.name} (${vp.width}x${vp.height})`);
      
      // 뷰포트 크기 변경
      await page.setViewport({ width: vp.width, height: vp.height });

      // 1. 메인 포털 검증
      console.log(`메인 페이지 접속 중... (http://localhost:4321/ko)`);
      await page.goto('http://localhost:4321/ko', { waitUntil: 'networkidle0' });
      await new Promise(resolve => setTimeout(resolve, 1000)); // 애니메이션 렌더링 시간 대기

      const mainScreenshotPath = path.join(outputDir, `auto_main_${vp.name}.png`);
      await page.screenshot({ path: mainScreenshotPath });
      console.log(`메인 페이지 스크린샷 저장 완료: ${mainScreenshotPath}`);

      // 2. FreshSelf 상세 페이지 검증
      console.log(`FreshSelf 상세 페이지 접속 중... (http://localhost:4321/ko/apps/freshself/)`);
      await page.goto('http://localhost:4321/ko/apps/freshself/', { waitUntil: 'networkidle0' });
      await new Promise(resolve => setTimeout(resolve, 1000));

      const freshScreenshotPath = path.join(outputDir, `auto_freshself_${vp.name}.png`);
      await page.screenshot({ path: freshScreenshotPath });
      console.log(`FreshSelf 상세 페이지 스크린샷 저장 완료: ${freshScreenshotPath}`);

      // 3. BuildSelf 상세 페이지 검증
      console.log(`BuildSelf 상세 페이지 접속 중... (http://localhost:4321/ko/apps/buildself/)`);
      await page.goto('http://localhost:4321/ko/apps/buildself/', { waitUntil: 'networkidle0' });
      await new Promise(resolve => setTimeout(resolve, 1000));

      const buildScreenshotPath = path.join(outputDir, `auto_buildself_${vp.name}.png`);
      await page.screenshot({ path: buildScreenshotPath });
      console.log(`BuildSelf 상세 페이지 스크린샷 저장 완료: ${buildScreenshotPath}`);
    }
    
    console.log(`\n모든 뷰포트 검증 완료! 브라우저를 종료합니다.`);
  } catch (error) {
    console.error('검증 실행 중 에러가 발생했습니다:', error);
  } finally {
    await browser.close();
  }
}

run();
