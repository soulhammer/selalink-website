import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const habitTargetsWithDates = [
  { slug: 'yundongju-poetry-notebook', date: '2026-01-20' },
  { slug: 'hamilton-writing-routine', date: '2026-02-10' },
  { slug: 'sushi-copying-routine', date: '2026-03-02' },
  { slug: 'manet-live-sketch', date: '2026-03-23' },
  { slug: 'baekseok-vocabulary-collection', date: '2026-04-14' },
  { slug: 'suntzu-precalculation-routine', date: '2026-05-05' },
  { slug: 'musashi-ink-painting-routine', date: '2026-05-26' },
  { slug: 'parkjiwon-nighttime-journal', date: '2026-06-16' },
  { slug: 'rachmaninoff-scale-routine', date: '2026-07-07' },
  { slug: 'seurat-croton-routine', date: '2026-07-25' }
];

console.log('🗓️ 신규 10개 위인습관 블로그 날짜 분산 작업 시작...');

habitTargetsWithDates.forEach(({ slug, date }) => {
  const jsonPath = path.join(studioRoot, `src/data/blogs/habits/${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    let raw = fs.readFileSync(jsonPath, 'utf-8');
    let data = JSON.parse(raw);
    const topKey = Object.keys(data)[0];
    if (topKey && data[topKey]) {
      data[topKey].pubDate = date;
      data[topKey].updatedDate = date;
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf-8');
      console.log(`[JSON 완료] [habits] ${slug}.json -> ${date}`);
    }
  } else {
    console.error(`❌ JSON 파일 없음: ${jsonPath}`);
  }
});

console.log('✨ 신규 10개 위인습관 마스터 JSON 날짜 분산 업데이트 완료!');

