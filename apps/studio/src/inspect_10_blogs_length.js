import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetSlugs = [
  'pascal-math-focus',
  'euclid-axiomatic-thinking',
  'saintexupery-cockpit-contemplation',
  'sagan-cosmic-perspective',
  'neruda-green-ink-flow',
  'hooke-microscopic-sketching',
  'babbage-difference-engine',
  'leeuwenhoek-lens-grinding',
  'harvey-blood-circulation',
  'daguerre-silver-plate'
];

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
const blogsDir = path.join(__dirname, 'data/blogs/habits');

console.log('📊 [오늘 생성된 10개 블로그 9개 언어 글자 수 정밀 검증 보고서]\n');

targetSlugs.forEach(slug => {
  const jsonPath = path.join(blogsDir, `${slug}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.log(`❌ [파일 없음] ${slug}.json`);
    return;
  }

  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const data = raw[slug] || raw[Object.keys(raw)[0]];

  console.log(`==================================================`);
  console.log(`📌 포스트: ${slug}`);
  console.log(`==================================================`);

  locales.forEach(loc => {
    const title = data.title?.[loc] || '';
    const desc = data.description?.[loc] || '';
    const intro = data.intro?.[loc] || '';
    const introParas = intro.split('\n\n').filter(p => p.trim().length > 0);
    const stepsCount = data.steps?.length || 0;
    
    let totalCharCount = title.length + desc.length + intro.length;
    if (data.steps) {
      data.steps.forEach(s => {
        totalCharCount += (s.name?.[loc] || '').length + (s.text?.[loc] || '').length;
      });
    }

    console.log(`  [${loc.toUpperCase()}] 총 글자수: ${totalCharCount.toString().padStart(5, ' ')}자 | 인트로 문단수: ${introParas.length}개 | 인트로 길이: ${intro.length.toString().padStart(4, ' ')}자`);
  });
  console.log('\n');
});
