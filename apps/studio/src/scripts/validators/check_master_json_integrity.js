import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';
import { detectMojibake, checkLanguagePurity } from '../../utils/validatorUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonDirs = [
  path.join(__dirname, '../../data/blogs/habits/*.json'),
  path.join(__dirname, '../../data/blogs/pets/*.json'),
  path.join(__dirname, '../../data/blogs/ingredients/*.json')
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

    // 1. 유니코드 인코딩 오염(Mojibake) 검사
    if (detectMojibake(rawText)) {
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

        const isEasternHistory = ['confucius-guqin-harmony.json', 'sejong-dawn-reading.json', 'zhuge-liang-guqin-strategy.json'].includes(fileName);
        const purityResult = checkLanguagePurity(text, lang, { isEasternHistory });

        if (!purityResult.valid) {
          console.error(`\x1b[31m❌ [ERR] ${fileName} (${fieldName}.${lang}): ${purityResult.errorReason}\x1b[0m`);
          hasError = true;
        }
      };

      const isHabitBlog = filePath.includes('data/blogs/habits/');
      const isPetBlog = filePath.includes('data/blogs/pets/');
      const isIngredientBlog = filePath.includes('data/blogs/ingredients/');

      const textFields = isPetBlog 
        ? ['title', 'description', 'authority', 'intro', 'whyTitle', 'whyDesc']
        : ['title', 'description', 'authority', 'intro', 'whyTitle', 'whyDesc', 'cautionTitle'];

      textFields.forEach(field => {
        const fieldData = entry[field];
        if (fieldData) {
          requiredLangs.forEach(lang => {
            checkTextSlot(fieldData[lang], field, lang, fileName);
          });
        } else if (entry.locales) {
          requiredLangs.forEach(lang => {
            const loc = entry.locales[lang];
            if (!loc || loc[field] === undefined || loc[field] === null || loc[field] === '') {
              console.error(`\x1b[31m❌ [ERR] ${fileName}: 'locales.${lang}.${field}' 다국어 텍스트 슬롯이 누락되거나 비어 있습니다.\x1b[0m`);
              hasError = true;
            } else {
              checkTextSlot(loc[field], `locales.${lang}.${field}`, lang, fileName);
            }
          });
        } else if (isHabitBlog) {
          console.error(`\x1b[31m❌ [ERR] ${fileName}: 필수 구조 필드 '${field}' 가 아예 누락되었습니다.\x1b[0m`);
          hasError = true;
        }
      });

      // 배열 필드 스캔 (pets: daily_routine/body_signals, habits/ingredients: steps/cautions/faqs)
      const arrayFields = isPetBlog 
        ? ['daily_routine', 'body_signals', 'faqs']
        : ['steps', 'faqs'];

      arrayFields.forEach(arrayField => {
        const arrData = entry[arrayField];
        if (arrData && Array.isArray(arrData) && arrData.length > 0) {
          arrData.forEach((item, idx) => {
            ['title', 'desc', 'q', 'a', 'name', 'text', 'question', 'answer'].forEach(subField => {
              if (item[subField]) {
                if (typeof item[subField] === 'object') {
                  requiredLangs.forEach(lang => {
                    checkTextSlot(item[subField][lang], `${arrayField}[${idx}].${subField}`, lang, fileName);
                  });
                }
              }
            });
          });
        } else if (entry.locales) {
          requiredLangs.forEach(lang => {
            const loc = entry.locales[lang];
            const locArr = loc?.[arrayField];
            if (!locArr || !Array.isArray(locArr) || locArr.length === 0) {
              console.error(`\x1b[31m❌ [ERR] ${fileName}: 'locales.${lang}.${arrayField}' 배열 필드가 누락되거나 비어 있습니다.\x1b[0m`);
              hasError = true;
            } else {
              locArr.forEach((item, idx) => {
                ['title', 'desc', 'q', 'a', 'name', 'text', 'question', 'answer', 'meaning', 'response'].forEach(subField => {
                  if (item[subField] !== undefined && item[subField] !== null) {
                    checkTextSlot(item[subField], `locales.${lang}.${arrayField}[${idx}].${subField}`, lang, fileName);
                  }
                });
              });
            }
          });
        } else if (isHabitBlog) {
          console.error(`\x1b[31m❌ [ERR] ${fileName}: 필수 배열 필드 '${arrayField}' 가 아예 누락되거나 비어 있습니다.\x1b[0m`);
          hasError = true;
        }
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
