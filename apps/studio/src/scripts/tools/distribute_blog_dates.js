import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const targetSlugs = [
  'australian-shepherd-care',
  'pug-care',
  'bernese-mountain-dog-care',
  'devon-rex-care',
  'quaker-parrot-care',
  'zebra-finch-care',
  'mongolian-gerbil-care',
  'russian-tortoise-care',
  'corydoras-care',
  'discus-fish-care'
];

// 2026년 1월부터 2026년 7월 현재까지 균등 분산 (10개 날짜)
const generatedDates = [
  '2026-01-15',
  '2026-02-05',
  '2026-02-25',
  '2026-03-18',
  '2026-04-10',
  '2026-05-02',
  '2026-05-24',
  '2026-06-15',
  '2026-07-06',
  '2026-07-22'
];

console.log('🗓️ 신규 10개 반려동물 블로그 분산 날짜 목록:', generatedDates);

const blogBaseDir = path.join(studioRoot, 'src/content/blog');
const jsonDir = path.join(studioRoot, 'src/data/blogs/pets');
const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

const mdSlugMap = {
  'discus-fish-care': 'discus-care'
};

targetSlugs.forEach((slug, idx) => {
  const targetDate = generatedDates[idx];
  const mdSlug = mdSlugMap[slug] || slug;

  // 1. 모든 언어의 Markdown 파일 수정 (pubDate, updatedDate)
  locales.forEach(lang => {
    const mdPath = path.join(blogBaseDir, lang, `${mdSlug}.md`);
    if (fs.existsSync(mdPath)) {
      let content = fs.readFileSync(mdPath, 'utf-8');
      content = content.replace(/(pubDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
      content = content.replace(/(updatedDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
      fs.writeFileSync(mdPath, content, 'utf-8');
      console.log(`[MD 완료] [${lang.toUpperCase()}] ${mdSlug}.md -> ${targetDate}`);
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

console.log('✨ 10개 반려동물 블로그 2026년 1월~7월 날짜 분산 업데이트 완료!');
