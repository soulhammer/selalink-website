import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18nDir = path.join(__dirname, 'data/blogs/habits_i18n');

console.log('🚨 [296개 전체 번역 DB 파일 전수 검사 가동]...\n');

const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));

let totalFiles = 0;
let templateFallbackViolations = 0;
const violatedFilesList = [];

files.forEach(file => {
  const filePath = path.join(i18nDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  totalFiles++;

  const strContent = JSON.stringify(data);

  // 슬러그 템플릿 꼼수 구문 패턴 스캔
  if (
    strContent.includes('Neuroscientific analysis and historical routine regarding') ||
    strContent.includes('Habit Routine:') ||
    strContent.includes('偉人の習慣：') ||
    strContent.includes('大师习惯：') ||
    strContent.includes('Action Step 1')
  ) {
    templateFallbackViolations++;
    violatedFilesList.push(file);
  }
});

console.log(`📊 [296개 전수 검사 리포트]`);
console.log(`- 점검한 번역 DB 파일 총수: ${totalFiles}개`);
console.log(`- 템플릿 꼼수가 남아있는 위반 파일 수: ${templateFallbackViolations}개 / ${totalFiles}개`);
console.log(`- 정상 직역 완료 파일 수: ${totalFiles - templateFallbackViolations}개\n`);

if (templateFallbackViolations > 0) {
  console.log(`❌ [전수 검사 🔴 FAIL] 296개 중 무려 ${templateFallbackViolations}개 파일에 템플릿 꼼수 구문이 흉측하게 방치되어 있습니다!`);
  console.log(`📌 [위반 파일 예시 10선]:`);
  console.log(violatedFilesList.slice(0, 10).map(f => `  • ${f}`).join('\n'));
} else {
  console.log(`✅ [전수 검사 100% 🟢 PASS] 296개 전 파일에서 템플릿 꼼수 구문이 0건입니다!`);
}
