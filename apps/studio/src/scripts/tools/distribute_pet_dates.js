import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const petTargetsWithDates = [
  { slug: 'clownfish-care', date: '2026-01-12' },
  { slug: 'emperor-scorpion-care', date: '2026-02-02' },
  { slug: 'african-grey-parrot-care', date: '2026-02-23' },
  { slug: 'milk-snake-care', date: '2026-03-16' },
  { slug: 'african-bullfrog-care', date: '2026-04-06' },
  { slug: 'electric-blue-crayfish-care', date: '2026-04-27' },
  { slug: 'prairie-dog-care', date: '2026-05-18' },
  { slug: 'sulcata-tortoise-care', date: '2026-06-08' },
  { slug: 'papillon-care', date: '2026-06-29' },
  { slug: 'birman-care', date: '2026-07-20' }
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
