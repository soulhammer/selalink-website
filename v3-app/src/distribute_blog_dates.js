import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetSlugs = [
  'drucker-three-year-study',
  'bezos-six-page-memo',
  'marquez-yellow-rose',
  'miyazaki-river-cleanup',
  'phelps-pre-race-routine',
  'woods-hundred-putts',
  'watson-think-sign',
  'copernicus-observatory-tower',
  'dostoevsky-pacing-recitation',
  'chung-dawn-breakfast'
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

targetSlugs.forEach((slug, idx) => {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.error(`파일 없음: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  const targetDate = generatedDates[idx];

  // pubDate와 updatedDate를 정규식으로 교체
  content = content.replace(/(pubDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);
  content = content.replace(/(updatedDate:\s*")([^"]+)(")/, `$1${targetDate}$3`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[완료] ${slug}.md -> ${targetDate}`);
});

console.log('날짜 분산 완료! 이제 컴파일 스크립트를 기동해야 합니다.');
