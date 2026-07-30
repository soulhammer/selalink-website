import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const ingredientTargetsWithDates = [
  { slug: 'how-to-store-kimchi', date: '2026-01-12' },
  { slug: 'how-to-store-oat-milk', date: '2026-02-02' },
  { slug: 'how-to-store-basil-pesto', date: '2026-02-23' },
  { slug: 'how-to-store-soy-milk', date: '2026-03-16' },
  { slug: 'how-to-store-chickpeas', date: '2026-04-06' },
  { slug: 'how-to-store-chia-seeds', date: '2026-04-27' },
  { slug: 'how-to-store-vanilla-beans', date: '2026-05-18' },
  { slug: 'how-to-store-avocado-oil', date: '2026-06-08' },
  { slug: 'how-to-store-lentils', date: '2026-06-29' },
  { slug: 'how-to-store-cinnamon', date: '2026-07-20' }
];

console.log('🗓️ 새로 생성된 10개 식재료 블로그 날짜 분산 작업 시작 (2026년 1월 ~ 7월)...');

ingredientTargetsWithDates.forEach(({ slug, date }) => {
  const jsonPath = path.join(studioRoot, `src/data/blogs/ingredients/${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    let raw = fs.readFileSync(jsonPath, 'utf-8');
    let data = JSON.parse(raw);
    const topKey = Object.keys(data)[0];
    if (topKey && data[topKey]) {
      data[topKey].pubDate = date;
      data[topKey].updatedDate = date;
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf-8');
      console.log(`[JSON 완료] [ingredients] ${slug}.json -> ${date}`);
    }
  } else {
    console.error(`❌ JSON 파일 없음: ${jsonPath}`);
  }
});

console.log('✨ 10개 식재료 마스터 JSON 날짜 분산 업데이트 완료!');
