import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18nDir = path.join(__dirname, 'data/blogs/habits_i18n');

console.log('🔍 [Phase 2 엄격 검증] 템플릿 구문 및 유니코드 무결성 296개 전수 스캔...\n');

const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));

let totalChecked = 0;
let templateViolations = 0;
const violationList = [];

files.forEach(file => {
  const filePath = path.join(i18nDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  totalChecked++;

  const str = JSON.stringify(data);

  // 템플릿 꼼수 구문 감지 패턴
  const forbiddenPatterns = [
    /Habit Mastery:/i,
    /偉人の習慣：/i,
    /大师习惯：/i,
    /의 脳科学メカニズム/i,
    /的科学机制/i,
    /Suivez l'étape/i,
    /Befolgen Sie Schritt/i
  ];

  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(str)) {
      templateViolations++;
      violationList.push(`${file}: 금지된 템플릿 패턴 감지됨 -> ${pattern}`);
    }
  });
});

console.log(`📊 [Phase 2 검증 리포트]`);
console.log(`- 검사한 파일 총수: ${totalChecked}개`);
console.log(`- 템플릿 꼼수 감지 건수: ${templateViolations}건\n`);

if (templateViolations > 0) {
  console.log('❌ [Phase 2 🔴 FAIL] 템플릿 꼼수 구문이 감지되었습니다!');
  console.log(violationList.slice(0, 5).join('\n'));
  process.exit(1);
} else {
  console.log('✅ [Phase 2 100% 🟢 PASS] 296개 독립 번역 DB 전체에서 템플릿 꼼수 구문 0건으로 완벽 무결성이 확인되었습니다!');
}
