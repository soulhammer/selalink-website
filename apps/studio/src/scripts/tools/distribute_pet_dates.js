import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const petTargetsWithDates = [
  { slug: 'akita-inu-care', date: '2026-01-15' },
  { slug: 'apple-snail-care', date: '2026-02-05' },
  { slug: 'burmese-cat-care', date: '2026-02-26' },
  { slug: 'cornish-rex-care', date: '2026-03-19' },
  { slug: 'dwarf-gourami-care', date: '2026-04-09' },
  { slug: 'fire-bellied-newt-care', date: '2026-04-30' },
  { slug: 'flemish-giant-rabbit-care', date: '2026-05-21' },
  { slug: 'indian-ringneck-care', date: '2026-06-11' },
  { slug: 'italian-greyhound-care', date: '2026-07-02' },
  { slug: 'panther-chameleon-care', date: '2026-07-23' }
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
