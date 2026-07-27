import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const targetSlugs = [
  'how-to-store-sugar',
  'how-to-store-salt',
  'how-to-store-lime',
  'how-to-store-beans',
  'how-to-store-olives',
  'how-to-store-tomato-paste',
  'how-to-store-black-pepper',
  'how-to-store-peach',
  'how-to-store-heavy-cream',
  'how-to-store-cereal'
];

// 2026년 1월부터 2026년 7월 현재까지 균등 분산 (10개 날짜)
const generatedDates = [
  '2026-01-15',
  '2026-02-03',
  '2026-02-24',
  '2026-03-16',
  '2026-04-05',
  '2026-04-27',
  '2026-05-18',
  '2026-06-08',
  '2026-06-29',
  '2026-07-20'
];

console.log('🗓️ 신규 10개 식재료 블로그 분산 날짜 목록:', generatedDates);

const blogBaseDir = path.join(studioRoot, 'src/content/blog');
const jsonDir = path.join(studioRoot, 'src/data/blogs/ingredients');
const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

targetSlugs.forEach((slug, idx) => {
  const targetDate = generatedDates[idx];

  // 1. 모든 언어의 Markdown 파일 수정 (pubDate, updatedDate)
  locales.forEach(lang => {
    const mdPath = path.join(blogBaseDir, lang, `${slug}.md`);
    if (fs.existsSync(mdPath)) {
      let content = fs.readFileSync(mdPath, 'utf-8');
      content = content.replace(/(pubDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
      content = content.replace(/(updatedDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
      fs.writeFileSync(mdPath, content, 'utf-8');
      console.log(`[MD 완료] [${lang.toUpperCase()}] ${slug}.md -> ${targetDate}`);
    }
  });

  // 2. JSON 파일 수정 (pubDate, updatedDate)
  const jsonPath = path.join(jsonDir, `${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    let raw = fs.readFileSync(jsonPath, 'utf-8');
    let data = JSON.parse(raw);
    const topKey = Object.keys(data)[0];
    if (topKey && data[topKey]) {
      data[topKey].pubDate = targetDate;
      data[topKey].updatedDate = targetDate;
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf-8');
      console.log(`[JSON 완료] ${slug}.json -> ${targetDate}`);
    }
  } else {
    console.error(`JSON 파일 없음: ${jsonPath}`);
  }
});

console.log('✨ 8개 식재료 블로그 2026년 1월~7월 날짜 분산 업데이트 완료!');

