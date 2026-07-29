import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const petTargetsWithDates = [
  { slug: 'american-curl-care', date: '2026-01-15' },
  { slug: 'blue-gold-macaw-care', date: '2026-02-05' },
  { slug: 'chartreux-cat-care', date: '2026-02-26' },
  { slug: 'german-blue-ram-care', date: '2026-03-18' },
  { slug: 'great-dane-care', date: '2026-04-08' },
  { slug: 'hermanns-tortoise-care', date: '2026-04-29' },
  { slug: 'jack-russell-terrier-care', date: '2026-05-20' },
  { slug: 'pacific-parrotlet-care', date: '2026-06-10' },
  { slug: 'rummy-nose-tetra-care', date: '2026-07-01' },
  { slug: 'western-hognose-snake-care', date: '2026-07-22' }
];

console.log('🗓️ 신규 10개 반려동물 블로그 날짜 분산 작업 시작...');

petTargetsWithDates.forEach(({ slug, date }) => {
  const jsonPath = path.join(studioRoot, `src/data/blogs/pets/${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    let raw = fs.readFileSync(jsonPath, 'utf-8');
    let data = JSON.parse(raw);
    const topKey = Object.keys(data)[0];
    if (topKey && data[topKey]) {
      data[topKey].pubDate = date;
      data[topKey].updatedDate = date;
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf-8');
      console.log(`[JSON 완료] [pets] ${slug}.json -> ${date}`);
    }
  } else {
    console.error(`❌ JSON 파일 없음: ${jsonPath}`);
  }
});

console.log('✨ 신규 10개 반려동물 마스터 JSON 날짜 분산 업데이트 완료!');


