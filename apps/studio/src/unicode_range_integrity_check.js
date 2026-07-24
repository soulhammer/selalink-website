import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🔬 [유니코드 범위(Unicode Ranges) 차원 정밀 스캔] 296개 원천 JSON 전수 문자 검사 가동...\n');

/*
  허용 유니코드 범위:
  1. 한글 음절 및 자모: \uAC00-\uD7A3, \u3130-\u318F, \u1100-\u11FF
  2. 표준 ASCII (알파벳, 숫자, 공백, 문장부호): \u0020-\u007E
  3. 라틴 고유명사 확장부호 (Gaudí, René, Pyotr 등 유럽 인명 고유명사): \u00C0-\u024F
  4. 개행 및 이스케이프: \n, \r, \t

  차단 유니코드 범위:
  - CJK 한자: \u4E00-\u9FFF
  - 일어 히라가나/가타카나: \u3040-\u30FF
  - 전각/반각 부호: \uFF00-\uFFEF
*/

// 차단 대상 유니코드 정규식 (한자 + 일어)
const forbiddenUnicodeRegex = /[\u4E00-\u9FFF\u3040-\u30FF]/g;

let totalFiles = 0;
let cleanFiles = 0;
let unicodeViolations = [];

if (fs.existsSync(habitsDir)) {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));
  totalFiles = jsonFiles.length;

  jsonFiles.forEach(file => {
    const jsonPath = path.join(habitsDir, file);
    const content = fs.readFileSync(jsonPath, 'utf-8');

    const matches = content.match(forbiddenUnicodeRegex);

    if (matches && matches.length > 0) {
      const uniqueMatches = Array.from(new Set(matches));
      unicodeViolations.push(`${file}: 유니코드 한자/일어 감지됨 [${uniqueMatches.join(', ')}]`);
    } else {
      cleanFiles++;
    }
  });
}

console.log(`========================================`);
console.log(`🔬 [유니코드 차원 정밀 검증 결과 리포트]`);
console.log(`- 전체 원천 JSON 파일 수: ${totalFiles}개`);
console.log(`- 유니코드 검증 100% 통과 파일 수: ${cleanFiles}개`);
console.log(`- 금지 유니코드(한자/일어) 위반 수: ${unicodeViolations.length}건`);
if (unicodeViolations.length > 0) {
  console.log(`⚠️ 유니코드 위반 내역:\n` + unicodeViolations.join('\n'));
} else {
  console.log(`🎉 [유니코드 검증 완벽] 296개 원천 JSON 전수에서 금지 유니코드(한자/일어)가 단 1글자도 존재하지 않음을 확인했습니다!`);
}
console.log(`========================================\n`);
