import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetSlugs = [
  'augustus-decision-consultation',
  'epicurus-garden-conversation',
  'keynes-morning-bed-work',
  'leibniz-universal-notebook',
  'mead-immediate-field-notes',
  'pythagoras-evening-examination',
  'rembrandt-self-portrait-reflection',
  'senna-pre-race-visualization',
  'smith-contemplative-walking',
  'verdi-morning-farming'
];

// 2026-01-01 ~ 2026-07-17 (약 197일) 간격 중 10개 날짜 고르게 분산 생성
const baseDate = new Date('2026-01-01T00:00:00Z');
const intervalDays = 19; // 19일 간격 (최대 171일 더해서 2026-06-20 경까지 분포)

const generatedDates = targetSlugs.map((_, idx) => {
  const d = new Date(baseDate.getTime() + idx * intervalDays * 24 * 60 * 60 * 1000);
  return d.toISOString().split('T')[0];
});

console.log('분산 날짜 목록:', generatedDates);

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

console.log('날짜 분산 완료! 이제 컴파일 스크립트를 기동해야 합니다.');
