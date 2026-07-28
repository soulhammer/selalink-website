import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const petTargetsWithDates = [
  { slug: 'amano-shrimp-care', date: '2026-01-15' },
  { slug: 'boston-terrier-care', date: '2026-02-05' },
  { slug: 'cardinal-tetra-care', date: '2026-02-24' },
  { slug: 'greek-tortoise-care', date: '2026-03-16' },
  { slug: 'japanese-spitz-care', date: '2026-04-08' },
  { slug: 'mini-rex-rabbit-care', date: '2026-04-28' },
  { slug: 'roborovski-hamster-care', date: '2026-05-18' },
  { slug: 'selkirk-rex-care', date: '2026-06-08' },
  { slug: 'singapura-cat-care', date: '2026-06-28' },
  { slug: 'sun-conure-care', date: '2026-07-16' }
];

console.log('🗓️ 신규 반려동물 10개 블로그 날짜 분산 작업 시작...');

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

console.log('✨ 마스터 JSON 날짜 업데이트 완료!');
