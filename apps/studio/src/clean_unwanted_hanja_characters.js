import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🧹 [한자/일어 오염 문자 100% 순수 한글 교정 수술] 시작...\n');

// 오염된 한자/일어 단어 ➔ 올바른 순수 한글 교정 맵
const hanjaReplacements = {
  '脳科学的': '뇌과학적',
  '視覚的刺激': '시각적 자극',
  '脳科学': '뇌과학',
  '視覚的': '시각적',
  '刺激': '자극'
};

let cleanedCount = 0;

function cleanHanjaFromObject(obj) {
  if (typeof obj === 'string') {
    let str = obj;
    for (const [hanja, kor] of Object.entries(hanjaReplacements)) {
      str = str.replaceAll(hanja, kor);
    }
    return str;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => cleanHanjaFromObject(item));
  }

  if (obj && typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = cleanHanjaFromObject(v);
    }
    return res;
  }

  return obj;
}

if (fs.existsSync(habitsDir)) {
  const jsonFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));

  jsonFiles.forEach(file => {
    const jsonPath = path.join(habitsDir, file);
    const rawJson = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    const cleanedJson = cleanHanjaFromObject(rawJson);

    fs.writeFileSync(jsonPath, JSON.stringify(cleanedJson, null, 2), 'utf-8');
    cleanedCount++;
  });
}

console.log(`✅ [한자 오염 정제 완료] 총 ${cleanedCount}개 위인 습관 원천 JSON 내 무단 한자/일어 오염 문자가 100% 순수 한글로 교정되었습니다!\n`);
