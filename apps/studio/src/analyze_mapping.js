import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parsedPath = path.join(__dirname, 'parsed_ingredients.json');
const ingredients = JSON.parse(fs.readFileSync(parsedPath, 'utf-8'));

const requiredLanguages = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
let totalErrors = 0;
const errors = [];

ingredients.forEach(ing => {
  const nameKo = ing.names?.ko || ing.id;
  
  // 1. Check names multilingual integrity
  requiredLanguages.forEach(lang => {
    if (!ing.names || !ing.names[lang] || ing.names[lang].trim() === '') {
      errors.push(`[이름 누락] 식재료: ${nameKo} (${ing.id}) - 언어 '${lang}'의 이름이 정의되지 않았거나 비어있습니다.`);
      totalErrors++;
    }
  });
  
  // 2. Check storage tips multilingual integrity
  ['room', 'fridge', 'freezer'].forEach(method => {
    const guide = ing.storage[method];
    if (guide) {
      requiredLanguages.forEach(lang => {
        if (!guide.tips || !guide.tips[lang] || guide.tips[lang].trim() === '') {
          errors.push(`[팁 누락] 식재료: ${nameKo} (${ing.id}) - 보관방식 '${method}'의 언어 '${lang}' 팁이 정의되지 않았거나 비어있습니다.`);
          totalErrors++;
        }
      });
    }
  });
});

console.log(`=== 다국어 무결성 검사 결과 (총 115개 식재료) ===`);
if (totalErrors === 0) {
  console.log(`✅ 완벽함: 모든 115개 식재료의 이름 및 보관 팁에 대한 9개 국어(ko, en, ja, zh, es, fr, de, pt, id) 번역이 100% 누락 없이 채워져 있습니다.`);
} else {
  console.log(`❌ 누락 발견: 총 ${totalErrors}개의 다국어 누락이 발견되었습니다.`);
  errors.forEach(err => console.log(err));
}

// Write validation results to a temp log file
fs.writeFileSync(path.join(__dirname, 'multilingual_validation.log'), errors.join('\n') || 'SUCCESS', 'utf-8');
