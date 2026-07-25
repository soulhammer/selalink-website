import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonDirs = [
  path.join(__dirname, 'data/blogs/habits/*.json'),
  path.join(__dirname, 'data/blogs/pets/*.json'),
  path.join(__dirname, 'data/blogs/ingredients/*.json')
];

const requiredLangs = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

let hasError = false;
let totalChecked = 0;

console.log('\n🔍 \x1b[36m[Master JSON 원천 데이터 무결성 검증기] 1차 검수를 시작합니다...\x1b[0m\n');

jsonDirs.forEach(pattern => {
  const files = glob.sync(pattern);
  files.forEach(filePath => {
    totalChecked++;
    const fileName = path.basename(filePath);
    if (fileName.startsWith('blog_') || fileName.startsWith('ui_') || fileName.startsWith('common_')) {
      return; // 메타 딕셔너리 JSON 파일은 개별 블로그 포스트 검사에서 예외 처리
    }
    const rawText = fs.readFileSync(filePath, 'utf8');

    // 1. 유니코드 인코딩 오염(Mojibake) 검사 (정상 스페인어/독일어/프랑스어 다이아크리틱 제외, 이중 인코딩 패턴만 타겟팅)
    const hasMojibake = rawText.includes('\uFFFD') || /Ã[¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿À-ÿ]|ì[ -ÿ]|ë[ -ÿ]/g.test(rawText);
    if (hasMojibake) {
      console.error(`\x1b[31m❌ [ERR] ${fileName}: Master JSON 내에 인코딩 오염(Mojibake 또는 \\uFFFD)이 발견되었습니다.\x1b[0m`);
      hasError = true;
    }

    try {
      const data = JSON.parse(rawText);
      const topKey = Object.keys(data)[0];
      const entry = data[topKey];

      if (!entry) {
        console.error(`\x1b[31m❌ [ERR] ${fileName}: JSON 항목 데이터가 비어 있습니다.\x1b[0m`);
        hasError = true;
        return;
      }

      // 2. 핵심 텍스트 필드 및 중첩 다국어 슬롯 9개 국어 누락/언어 순도 검사
      const checkTextSlot = (text, fieldName, lang, fileName) => {
        if (text === undefined || text === null || text === '') {
          console.error(`\x1b[31m❌ [ERR] ${fileName}: '${fieldName}.${lang}' 다국어 텍스트 슬롯이 누락되거나 비어 있습니다.\x1b[0m`);
          hasError = true;
          return;
        }

        // 언어 유출 검사
        if (['en', 'es', 'fr', 'de', 'pt', 'id'].includes(lang)) {
          const isEasternHistory = ['confucius-guqin-harmony.json', 'sejong-dawn-reading.json', 'zhuge-liang-guqin-strategy.json'].includes(fileName);
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(text);
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(text);
          const hasChinese = isEasternHistory ? false : /[\u4E00-\u9FFF]/.test(text);

          if (hasKorean || hasJapanese || hasChinese) {
            console.error(`\x1b[31m❌ [ERR] ${fileName} (${fieldName}.${lang}): 라틴계열 원천 데이터에 이종 언어(한글/가나/한자)가 포함되어 있습니다.\x1b[0m`);
            hasError = true;
          }
        }

        if (lang === 'ko') {
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(text);
          if (hasJapanese) {
            console.error(`\x1b[31m❌ [ERR] ${fileName} (${fieldName}.ko): 한국어 원천 데이터에 일본어(가나)가 포함되어 있습니다.\x1b[0m`);
            hasError = true;
          }
        }

        if (lang === 'ja') {
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(text);
          if (hasKorean) {
            console.error(`\x1b[31m❌ [ERR] ${fileName} (${fieldName}.ja): 일본어 원천 데이터에 한국어(한글)가 포함되어 있습니다.\x1b[0m`);
            hasError = true;
          }
        }

        if (lang === 'zh') {
          const hasKorean = /[\uAC00-\uD7A3\u3130-\u318F]/.test(text);
          const hasJapanese = /[\u3040-\u309F\u30A0-\u30FF]/.test(text);
          if (hasKorean || hasJapanese) {
            console.error(`\x1b[31m❌ [ERR] ${fileName} (${fieldName}.zh): 중국어 원천 데이터에 한국어/일본어가 유입되었습니다.\x1b[0m`);
            hasError = true;
          }
        }
      };

      const isHabitBlog = filePath.includes('data/blogs/habits/');
      const textFields = ['title', 'description', 'authority', 'intro', 'whyTitle', 'whyDesc', 'cautionTitle', 'cautionDesc'];

      textFields.forEach(field => {
        if (!entry[field]) {
          if (isHabitBlog) {
            console.error(`\x1b[31m❌ [ERR] ${fileName}: 최상위 필수 구조 필드 '${field}' 가 아예 누락되었습니다.\x1b[0m`);
            hasError = true;
          }
          return;
        }
        const fieldData = entry[field];
        requiredLangs.forEach(lang => {
          checkTextSlot(fieldData[lang], field, lang, fileName);
        });
      });

      // steps 배열 및 faqs 배열 필수 존재 및 9개 국어 스캔
      ['steps', 'faqs'].forEach(arrayField => {
        if (!entry[arrayField] || !Array.isArray(entry[arrayField]) || entry[arrayField].length === 0) {
          if (isHabitBlog) {
            console.error(`\x1b[31m❌ [ERR] ${fileName}: 최상위 필수 배열 필드 '${arrayField}' 가 아예 누락되거나 비어 있습니다.\x1b[0m`);
            hasError = true;
          }
          return;
        }
        entry[arrayField].forEach((item, idx) => {
          ['title', 'desc', 'q', 'a'].forEach(subField => {
            if (item[subField]) {
              requiredLangs.forEach(lang => {
                checkTextSlot(item[subField][lang], `${arrayField}[${idx}].${subField}`, lang, fileName);
              });
            }
          });
        });
      });

    } catch (err) {
      console.error(`\x1b[31m❌ [ERR] ${fileName}: JSON 파싱 에러 - ${err.message}\x1b[0m`);
      hasError = true;
    }
  });
});

if (hasError) {
  console.error(`\n🚨 \x1b[31m[Master JSON 검증 실패] ${totalChecked}개 원천 파일 중 오류가 감지되어 프로세스를 중단합니다.\x1b[0m\n`);
  process.exit(1);
} else {
  console.log(`\x1b[32m✨ [Master JSON 검증 성공] 총 ${totalChecked}개의 Master JSON 원천 데이터가 100% 완벽합니다!\x1b[0m\n`);
}
