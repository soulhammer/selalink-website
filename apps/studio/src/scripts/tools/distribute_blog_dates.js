import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetSlugs = [
  'babbage-difference-engine',
  'daguerre-silver-plate',
  'euclid-axiomatic-thinking',
  'harvey-blood-circulation',
  'hooke-microscopic-sketching',
  'leeuwenhoek-lens-grinding',
  'neruda-green-ink-flow',
  'pascal-math-focus',
  'sagan-cosmic-perspective',
  'saintexupery-cockpit-contemplation'
];

// 2026년 1월부터 2026년 7월 중순까지 약 20일 간격 균등 분산 (10개 날짜)
const generatedDates = [
  '2026-01-10',
  '2026-01-31',
  '2026-02-21',
  '2026-03-14',
  '2026-04-04',
  '2026-04-25',
  '2026-05-16',
  '2026-06-06',
  '2026-06-27',
  '2026-07-18'
];

console.log('🗓️ 신규 10개 위인 습관 블로그 분산 날짜 목록:', generatedDates);

const blogBaseDir = path.join(__dirname, 'content/blog');
const jsonDir = path.join(__dirname, 'data/blogs/habits');
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
    if (data[slug]) {
      data[slug].pubDate = targetDate;
      data[slug].updatedDate = targetDate;
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
      console.log(`[JSON 완료] ${slug}.json -> ${targetDate}`);
    }
  } else {
    console.error(`JSON 파일 없음: ${jsonPath}`);
  }
});

console.log('✨ 10개 위인 습관 블로그 2026년 1월~7월 날짜 분산 업데이트 완료!');
