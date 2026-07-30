import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const ingredientTargetsWithDates = [
  { slug: 'how-to-store-cocoa-powder', date: '2026-01-15' },
  { slug: 'how-to-store-raspberry', date: '2026-02-03' },
  { slug: 'how-to-store-kale', date: '2026-02-22' },
  { slug: 'how-to-store-beetroot', date: '2026-03-12' },
  { slug: 'how-to-store-prosciutto', date: '2026-04-02' },
  { slug: 'how-to-store-hot-sauce', date: '2026-04-23' },
  { slug: 'how-to-store-canola-sunflower-oil', date: '2026-05-14' },
  { slug: 'how-to-store-curry-powder', date: '2026-06-04' },
  { slug: 'how-to-store-rice-paper', date: '2026-06-25' },
  { slug: 'how-to-store-grapefruit', date: '2026-07-16' }
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
