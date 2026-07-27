import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studioRoot = path.join(__dirname, '../../..');

const habitTargets = [
  'cervantes-street-paper-reading',
  'dante-vernacular-collection',
  'heo-jun-herbal-categorization',
  'hippocrates-clinical-logging',
  'jang-yeongsil-natural-flow-mapping',
  'john-lennon-voice-recorder-capture',
  'messi-prematch-ball-touch',
  'michael-jackson-video-feedback',
  'neil-armstrong-mental-simulation',
  'raphael-master-sketching',
  'schliemann-vocal-language-recitation',
  'usain-bolt-breathing-smile',
  'wozniak-circuit-minimalism',
  'yuna-kim-just-do-it-routine'
];

const petTargets = [
  'shetland-sheepdog-care',
  'somali-cat-care'
];

// 2026년 1월부터 2026년 7월 현재까지 균등 분산 날짜 (총 16개)
const dates = [
  '2026-01-12',
  '2026-01-25',
  '2026-02-08',
  '2026-02-22',
  '2026-03-07',
  '2026-03-20',
  '2026-04-03',
  '2026-04-17',
  '2026-05-01',
  '2026-05-15',
  '2026-05-29',
  '2026-06-12',
  '2026-06-25',
  '2026-07-08',
  '2026-07-18',
  '2026-07-25'
];

const items = [
  ...habitTargets.map((slug, idx) => ({ slug, category: 'habits', targetDate: dates[idx] })),
  ...petTargets.map((slug, idx) => ({ slug, category: 'pets', targetDate: dates[14 + idx] }))
];

console.log('🗓️ 신규 16개 블로그 분산 작업 시작...');

const blogBaseDir = path.join(studioRoot, 'src/content/blog');
const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

items.forEach(({ slug, category, targetDate }) => {
  // 1. JSON Master 파일 수정
  const jsonPath = path.join(studioRoot, `src/data/blogs/${category}`, `${slug}.json`);
  if (fs.existsSync(jsonPath)) {
    let raw = fs.readFileSync(jsonPath, 'utf-8');
    let data = JSON.parse(raw);
    const topKey = Object.keys(data)[0];
    if (topKey && data[topKey]) {
      data[topKey].pubDate = targetDate;
      data[topKey].updatedDate = targetDate;
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf-8');
      console.log(`[JSON 완료] [${category}] ${slug}.json -> ${targetDate}`);
    }
  } else {
    console.error(`JSON 파일 없음: ${jsonPath}`);
  }

  // 2. 모든 언어의 Markdown 파일 수정
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
});

console.log('✨ 신규 16개 블로그 2026년 1월~7월 날짜 분산 업데이트 완료!');
