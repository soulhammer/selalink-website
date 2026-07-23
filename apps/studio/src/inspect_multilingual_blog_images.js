import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '..');
const distDir = path.join(studioRoot, 'dist');
const langs = ['en', 'ja', 'es', 'de', 'fr', 'id', 'pt', 'zh', 'ko'];

if (!fs.existsSync(distDir)) {
  console.log('❌ dist 폴더가 없습니다. 먼저 npm run build 또는 테스트 빌드가 필요합니다.');
  process.exit(1);
}

let totalCheckedImages = 0;
let totalMissingImages = 0;
const missingReport = [];

langs.forEach(lang => {
  const blogIndexPath = path.join(distDir, lang, 'blog', 'index.html');
  if (fs.existsSync(blogIndexPath)) {
    const html = fs.readFileSync(blogIndexPath, 'utf-8');
    const imgMatches = html.matchAll(/<img[^>]+src=["']([^"']+)["']/g);
    
    for (const match of imgMatches) {
      totalCheckedImages++;
      const imgSrc = match[1];
      
      // 외부 URL 및 data URI 제외
      if (imgSrc.startsWith('http') || imgSrc.startsWith('data:')) continue;
      
      const cleanSrc = imgSrc.split('?')[0].split('#')[0];
      const relSrc = cleanSrc.startsWith('/') ? cleanSrc.slice(1) : cleanSrc;
      const targetFile = path.join(distDir, relSrc);

      if (!fs.existsSync(targetFile)) {
        totalMissingImages++;
        missingReport.push({ lang, imgSrc, targetFile });
      }
    }
  } else {
    console.log(`⚠️ ${lang}/blog/index.html 파일이 존재하지 않습니다.`);
  }
});

console.log(`📊 [다국어 블로그 이미지 파싱 검사] 총 ${totalCheckedImages}개 <img> 태그 검사 완료`);
console.log(`❌ 누락된 이미지 개수: ${totalMissingImages}개\n`);

if (totalMissingImages > 0) {
  missingReport.slice(0, 20).forEach(item => {
    console.log(`[${item.lang}] -> src="${item.imgSrc}" (파일 없음: ${item.targetFile})`);
  });
} else {
  console.log('✨ 모든 언어 블로그 목록 페이지의 <img> 태그 경로가 dist 내에 정확히 존재합니다!');
}
