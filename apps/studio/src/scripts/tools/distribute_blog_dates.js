import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const petTargetsWithDates = [
  { slug: 'english-cocker-spaniel-care', date: '2026-01-20' },
  { slug: 'english-bulldog-care', date: '2026-02-10' },
  { slug: 'ragamuffin-cat-care', date: '2026-03-02' },
  { slug: 'egyptian-mau-care', date: '2026-03-23' },
  { slug: 'sulphur-crested-cockatoo-care', date: '2026-04-14' },
  { slug: 'eclectus-parrot-care', date: '2026-05-05' },
  { slug: 'california-kingsnake-care', date: '2026-05-26' },
  { slug: 'bristlenose-pleco-care', date: '2026-06-16' },
  { slug: 'hermit-crab-care', date: '2026-07-07' },
  { slug: 'vampire-crab-care', date: '2026-07-28' }
];

const ingredientTargetsWithDates = [
  { slug: 'how-to-store-pears', date: '2026-01-15' },
  { slug: 'how-to-store-garlic-chives', date: '2026-02-05' },
  { slug: 'how-to-store-gochujang', date: '2026-02-25' },
  { slug: 'how-to-store-fish-cakes', date: '2026-03-18' },
  { slug: 'how-to-store-noodles', date: '2026-04-08' },
  { slug: 'how-to-store-tortillas', date: '2026-04-29' },
  { slug: 'how-to-store-plums', date: '2026-05-20' },
  { slug: 'how-to-store-sesame-seeds', date: '2026-06-10' },
  { slug: 'how-to-store-figs', date: '2026-07-01' },
  { slug: 'how-to-store-oriental-melon', date: '2026-07-22' }
];

console.log('🗓️ 신규 10개 식재료 및 반려동물 블로그 날짜 분산 작업 시작...');

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

console.log('✨ 신규 마스터 JSON 날짜 분산 업데이트 완료!');


