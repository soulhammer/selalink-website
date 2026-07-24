import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🧹 [Phase 1+: 원천 JSON 브랜드명 정제 및 ko 단일화] 수술 가동...\n');

function sanitizeBrandMentions(str) {
  if (typeof str !== 'string') return str;

  let cleaned = str;
  // 브랜드 문구 정제 패턴 (자연스러운 문장으로 치환)
  cleaned = cleaned.replace(/오늘\s+BuildSelf에서는/g, '오늘 포스트에서는');
  cleaned = cleaned.replace(/오늘\s+BuildSelf에서/g, '오늘 포스트에서');
  cleaned = cleaned.replace(/BuildSelf와\s+함께\s+/g, '');
  cleaned = cleaned.replace(/BuildSelf와\s+함께/g, '');
  cleaned = cleaned.replace(/BuildSelf/g, '이 포스트');
  cleaned = cleaned.replace(/FreshSelf/g, '이 아티클');
  cleaned = cleaned.replace(/FreshSnap/g, '이 가이드');
  cleaned = cleaned.replace(/BuildSnap/g, '이 분석');
  cleaned = cleaned.replace(/SelaLink/g, '이 포스트');

  // 다중 공백 정리
  cleaned = cleaned.replace(/  +/g, ' ');

  return cleaned;
}

function cleanAndSanitize(obj) {
  if (!obj || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(item => cleanAndSanitize(item));
  }

  const cleanedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && ('ko' in value)) {
      const sanitizedKo = sanitizeBrandMentions(value.ko);
      cleanedObj[key] = { ko: sanitizedKo };
    } else if (typeof value === 'string') {
      cleanedObj[key] = sanitizeBrandMentions(value);
    } else if (typeof value === 'object') {
      cleanedObj[key] = cleanAndSanitize(value);
    } else {
      cleanedObj[key] = value;
    }
  }

  return cleanedObj;
}

const files = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));
let cleanedCount = 0;

files.forEach(file => {
  const filePath = path.join(habitsDir, file);
  const rawData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  const cleanedData = cleanAndSanitize(rawData);
  
  fs.writeFileSync(filePath, JSON.stringify(cleanedData, null, 2), 'utf-8');
  cleanedCount++;
});

console.log(`✅ [Phase 1+ 완료] 총 ${cleanedCount}개 원천 JSON 포스트에서 브랜드명(BuildSelf 등) 정제 및 ko 단일화가 완료되었습니다!\n`);
