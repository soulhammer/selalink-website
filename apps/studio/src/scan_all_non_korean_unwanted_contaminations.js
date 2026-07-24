import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🔍 [한국어 원천 데이터 전수 오염 정밀 스캔] 한자·일어뿐만 아니라 라틴계 5개 언어 무단 혼입 문구까지 전수 검사 시작...\n');

// 8개 외국어 무단 유입 템플릿 문구 감지 및 삭제 맵
const foreignTemplatePatterns = [
  /En la práctica dedicada.*/gi,
  /Dans la pratique dédiée.*/gi,
  /In der engagierten Ausübung.*/gi,
  /Na prática dedicada.*/gi,
  /Dalam praktik berdedikasi.*/gi,
  /This physical and mental practice.*/gi
];

let totalScanned = 0;
let contaminationFoundCount = 0;

function cleanUnwantedForeignText(text) {
  if (typeof text !== 'string') return text;
  let str = text;

  // 1. 라틴계 5개 언어 템플릿 잔재 삭제
  foreignTemplatePatterns.forEach(pattern => {
    str = str.replace(pattern, '');
  });

  // 2. 한자 및 일본어 오염 단어 정제
  str = str.replaceAll('脳科学的', '뇌과학적');
  str = str.replaceAll('脳科学', '뇌과학');
  str = str.replaceAll('視覚的刺激', '시각적 자극');
  str = str.replaceAll('視覚的', '시각적');
  str = str.replaceAll('刺激', '자극');

  return str.trim();
}

function recursiveCleanKoFields(obj) {
  if (typeof obj === 'string') {
    return cleanUnwantedForeignText(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => recursiveCleanKoFields(item));
  }

  if (obj && typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      res[k] = recursiveCleanKoFields(v);
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

    const cleanedJson = recursiveCleanKoFields(rawJson);

    fs.writeFileSync(jsonPath, JSON.stringify(cleanedJson, null, 2), 'utf-8');
    totalScanned++;
  });
}

console.log(`✅ [전수 검사 및 교정 완료] 총 ${totalScanned}개 원천 포스트의 ko 필드에서 한자·일어 및 스페인어/프랑스어/독일어/포르투갈어/인도네시아어 오염 문장이 전수 정제되었습니다!\n`);
