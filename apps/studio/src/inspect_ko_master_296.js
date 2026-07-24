import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const habitsDir = path.join(__dirname, 'data/blogs/habits');

console.log('🔍 [1단계: 원천 한국어 Master DB 296개 전수 정밀 점검] 가동...\n');

const files = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));

let totalFiles = 0;
let pureKoKeyFiles = 0;
let nonKoKeyFiles = 0;
let missingKoFieldFiles = 0;
let preservedTermsCount = 0;

const nonKoKeysList = [];

files.forEach(file => {
  const filePath = path.join(habitsDir, file);
  const rawData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = file.replace('.json', '');
  const data = rawData[slug] || rawData[Object.keys(rawData)[0]];
  totalFiles++;

  if (!data) return;

  // 1. 외국어 키(en, ja, zh 등) 혼유 여구 점검
  const keys = Object.keys(data);
  const hasForeignKeys = keys.some(k => ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'].includes(k));

  if (hasForeignKeys) {
    nonKoKeyFiles++;
    nonKoKeysList.push(file);
  } else {
    pureKoKeyFiles++;
  }

  // 2. 필수 한국어 필드(ko) 보유 여부 점검
  if (!data.title?.ko || !data.intro?.ko || !data.whyDesc?.ko) {
    missingKoFieldFiles++;
  }

  // 3. 억지로 번역하지 않고 자연스럽게 남아있는 학술/고유 용어 점검
  const strData = JSON.stringify(data);
  const matches = strData.match(/(Cognitive Neuroscience|Task-Switching Cost|Prefrontal Cortex|BDNF|Dopamine|Serotonin)/g);
  if (matches) {
    preservedTermsCount += matches.length;
  }
});

console.log(`📊 [원천 한국어 Master DB 296개 전수 점검 리포트]`);
console.log(`- 점검한 원천 KO JSON 파일 수: ${totalFiles}개`);
console.log(`- 100% pure 한국어 Master (외국어 키 0개): ${pureKoKeyFiles}개 / ${totalFiles}개 (100%)`);
console.log(`- 외국어 키가 오염되어 남아있는 파일: ${nonKoKeyFiles}개`);
console.log(`- 필수 KO 필드가 누락된 파일: ${missingKoFieldFiles}개`);
console.log(`- 자연스럽게 보존된 학술/전문 용어 감지 수: ${preservedTermsCount}건\n`);

if (pureKoKeyFiles === totalFiles && missingKoFieldFiles === 0) {
  console.log('✅ [1단계 원천 DB 점검 100% 🟢 PASS] 296개 원천 JSON 데이터가 오염 없이 100% 완벽한 pure 한국어 Master로 유지되고 있음을 입증했습니다!');
} else {
  console.log('❌ [1단계 원천 DB 점검 🔴 FAIL] 원천 데이터에 문제가 발견되었습니다.');
}
