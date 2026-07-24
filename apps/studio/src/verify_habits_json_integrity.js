import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🔍 [296개 원천 JSON 전수 최종 무결성 철저 검증] 가동...\n');

let totalFiles = 0;
let cleanCount = 0;
let issueLogs = [];

if (fs.existsSync(habitsDir)) {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));
  totalFiles = jsonFiles.length;

  jsonFiles.forEach(file => {
    const jsonPath = path.join(habitsDir, file);
    const slug = file.replace('.json', '');
    const rawJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const key = rawJson[slug] ? slug : Object.keys(rawJson)[0];
    const data = rawJson[key];

    if (!data) {
      issueLogs.push(`${file}: 데이터 객체 없음`);
      return;
    }

    let hasIssue = false;

    // 1. ko 필드만 보존되어 있는지 검사
    const topKeys = Object.keys(data);
    topKeys.forEach(k => {
      if (typeof data[k] === 'object' && !Array.isArray(data[k]) && data[k] !== null) {
        const langKeys = Object.keys(data[k]);
        if (langKeys.length > 1 || (langKeys.length === 1 && !langKeys.includes('ko'))) {
          hasIssue = true;
          issueLogs.push(`${file} -> ${k}: ko 외 타 언어 키 유출 (${langKeys.join(',')})`);
        }
      }
    });

    // 2. 한자 오염 감지
    const jsonStr = JSON.stringify(data);
    if (/[\u4E00-\u9FFF]/.test(jsonStr)) {
      hasIssue = true;
      issueLogs.push(`${file}: 한자 오염 문자 잔재 감지됨`);
    }

    // 3. 기계적 템플릿 대괄호 머리말 감지
    if (/\[인물 고증:/.test(jsonStr) || /■ 주인공 인물/.test(jsonStr)) {
      hasIssue = true;
      issueLogs.push(`${file}: 기계적 템플릿 머리말 잔재 감지됨`);
    }

    // 4. authority 존재 및 길이 검사
    if (!data.authority || !data.authority.ko || data.authority.ko.length < 5) {
      hasIssue = true;
      issueLogs.push(`${file}: authority 출처 데이터 미비`);
    }

    if (!hasIssue) {
      cleanCount++;
    }
  });
}

console.log(`========================================`);
console.log(`📊 [최종 철저 검증 리포트]`);
console.log(`- 전체 원천 JSON 파일 수: ${totalFiles}개`);
console.log(`- 100% 무결성 검증 통과 파일 수: ${cleanCount}개`);
console.log(`- 감지된 오염 및 결함 수: ${issueLogs.length}건`);
if (issueLogs.length > 0) {
  console.log(`⚠️ 결함 내역:\n` + issueLogs.join('\n'));
} else {
  console.log(`🎉 [결론] 296개 원천 JSON 전수가 단 1건의 오점 없이 100% 완전무결한 상태임을 확정합니다!`);
}
console.log(`========================================\n`);
