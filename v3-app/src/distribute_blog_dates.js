import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetSlugs = [
  'archimedes-sand-geometry',
  'bohr-dialogue-dictation',
  'heisenberg-alpine-hiking',
  'luther-lute-meditation',
  'monroe-night-reading',
  'planck-piano-refresh',
  'serena-match-routine',
  'victoria-daily-journaling',
  'warhol-morning-dictation',
  'zuckerberg-uniform-minimization'
];

// 2026-01-01 ~ 2026-07-16
// 196일 간격 중 10개 날짜 분산 생성
const baseDate = new Date('2026-01-01T00:00:00Z');
const intervalDays = 18; // 18일 간격

const generatedDates = targetSlugs.map((_, idx) => {
  const d = new Date(baseDate.getTime() + idx * intervalDays * 24 * 60 * 60 * 1000);
  return d.toISOString().split('T')[0];
});

console.log('분산 날짜 목록:', generatedDates);

const blogDir = path.join(__dirname, 'content/blog/ko');
const jsonDir = path.join(__dirname, 'data/blogs/habits');

targetSlugs.forEach((slug, idx) => {
  const targetDate = generatedDates[idx];

  // 1. Markdown 파일 수정
  const mdPath = path.join(blogDir, `${slug}.md`);
  if (fs.existsSync(mdPath)) {
    let content = fs.readFileSync(mdPath, 'utf-8');
    content = content.replace(/(pubDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
    content = content.replace(/(updatedDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
    fs.writeFileSync(mdPath, content, 'utf-8');
    console.log(`[MD 완료] ${slug}.md -> ${targetDate}`);
  } else {
    console.error(`MD 파일 없음: ${mdPath}`);
  }

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
