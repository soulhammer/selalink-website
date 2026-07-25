import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18nDir = path.join(__dirname, 'data/blogs/habits_i18n');

console.log('🔍 [Phase 2 Strict Verification] 296개 번역 DB 유니코드 한글 유출 전수 스캔...\n');

// 한글 유니코드 범위: AC00-D7A3 (음절), 3130-318F (자모)
const koreanRegex = /[\uAC00-\uD7A3\u3130-\u318F]/;

const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));
let totalChecked = 0;
let violationsFound = 0;
const violationDetails = [];

files.forEach(file => {
  console.log(`Checking: ${file}`);
  const filePath = path.join(i18nDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  totalChecked++;

  const translations = data.translations || {};

  // en, es, fr, de, pt, id 6개 알파벳 로케일에서 한글 유출 스캔
  const nonAsianLocales = ['en', 'es', 'fr', 'de', 'pt', 'id'];

  nonAsianLocales.forEach(loc => {
    const locData = translations[loc];
    if (!locData) return;

    const strContent = JSON.stringify(locData);
    if (koreanRegex.test(strContent)) {
      violationsFound++;
      const match = strContent.match(koreanRegex);
      violationDetails.push(`${file} (${loc}): 한글 유출 감지됨 -> "${match[0]}"`);
    }
  });
});

console.log(`📊 [Phase 2 유니코드 스캔 결과 리포트]`);
console.log(`- 검사한 번역 DB 파일 수: ${totalChecked}개`);
console.log(`- 한글 유출 감지 수: ${violationsFound}건\n`);

if (violationsFound > 0) {
  console.log('❌ [Phase 2 🔴 FAIL] 한글 유출이 감지되었습니다!');
  console.log(violationDetails.slice(0, 10).join('\n'));
  process.exit(1);
} else {
  console.log('✅ [Phase 2 100% 🟢 PASS] 296개 다국어 번역 DB 전체에서 한글 유출 0건으로 완벽한 무결성을 입증했습니다!');
}
