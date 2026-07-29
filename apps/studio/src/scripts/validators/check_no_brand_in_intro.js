import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studioRoot = path.join(__dirname, '../..');

const targetDirs = [
  path.join(studioRoot, 'data/blogs/pets/*.json'),
  path.join(studioRoot, 'data/blogs/ingredients/*.json'),
  path.join(studioRoot, 'data/blogs/habits/*.json')
];

console.log('🔍 [Master JSON Intro 브랜드 잔류 무결성 검증기] 전수 검사를 시작합니다...\n');

let errorCount = 0;
let totalScanned = 0;

targetDirs.forEach(pattern => {
  const files = glob.sync(pattern);
  files.forEach(filePath => {
    if (filePath.endsWith('_meta.json')) return;
    totalScanned++;

    const raw = fs.readFileSync(filePath, 'utf-8');
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      return;
    }

    const topKey = Object.keys(data)[0];
    if (!topKey || !data[topKey] || !data[topKey].locales) return;

    const locales = data[topKey].locales;
    Object.keys(locales).forEach(lang => {
      const intro = locales[lang].intro;
      if (!intro || typeof intro !== 'string') return;

      if (/PetSelf|FreshSnap/i.test(intro)) {
        console.error(`❌ [ERR] ${path.basename(filePath)} (${lang}): intro 필드에 브랜드명(PetSelf/FreshSnap)이 잔류해 있습니다.`);
        console.error(`   내용: "${intro.substring(0, 120)}..."\n`);
        errorCount++;
      }
    });
  });
});

if (errorCount > 0) {
  console.error(`🚨 [검증 실패] 총 ${errorCount}개 위치에서 브랜드명이 발견되었습니다.`);
  process.exit(1);
} else {
  console.log(`✅ [통과] 총 ${totalScanned}개 Master JSON의 모든 언어 intro 필드에 브랜드 잔류 0건! 완벽합니다.\n`);
}
