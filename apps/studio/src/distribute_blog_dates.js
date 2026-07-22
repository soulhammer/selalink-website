import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetSlugs = [
  'zhuge-liang-guqin-strategy',
  'zola-morning-writing-block',
  'rosalind-franklin-diffraction-focus',
  'bismarck-morning-ride-priority',
  'vermeer-camera-obscura-light',
  'columbus-nautical-log',
  'potter-botanical-sketch',
  'gutenberg-movable-type-inspection',
  'sushi-bamboo-walk-cooking',
  'jenner-observation-tracking-log'
];

// 2026-01-15 ~ 2026-07-14 (약 180일) 간격 중 10개 날짜 고르게 분산 생성 (20일 간격)
const baseDate = new Date('2026-01-15T00:00:00Z');
const intervalDays = 20;

const generatedDates = targetSlugs.map((_, idx) => {
  const d = new Date(baseDate.getTime() + idx * intervalDays * 24 * 60 * 60 * 1000);
  return d.toISOString().split('T')[0];
});

console.log('🗓️ 신규 10개 블로그 분산 날짜 목록:', generatedDates);

const blogBaseDir = path.join(__dirname, 'content/blog');
const jsonDir = path.join(__dirname, 'data/blogs/habits');
const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

targetSlugs.forEach((slug, idx) => {
  const targetDate = generatedDates[idx];

  // 1. 모든 언어의 Markdown 파일 수정
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

  // 2. JSON 파일 수정
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

console.log('✨ 10개 블로그 날짜 분산 업데이트 완료!');
