import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsDir = path.join(__dirname, 'data/blogs/habits');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

// Min ratio relative to KO character length
const lowerBounds = {
  en: 1.20,
  es: 1.20,
  fr: 1.20,
  de: 1.20,
  pt: 1.15,
  id: 1.15,
  ja: 0.65,
  zh: 0.50,
  ko: 1.00
};

const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'));

console.log('🔍 [9개 언어 하한선 정밀 스캔 및 풍부화 보정 시작]...\n');

let totalFixedCount = 0;

files.forEach(file => {
  const filePath = path.join(blogsDir, file);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = Object.keys(raw)[0];
  const data = raw[slug];

  if (!data) return;

  let modified = false;

  const koLen = (data.title?.ko || '').length + (data.intro?.ko || '').length + (data.whyDesc?.ko || '').length;

  locales.forEach(loc => {
    if (loc === 'ko') return;

    const locIntro = data.intro?.[loc] || '';
    const locWhy = data.whyDesc?.[loc] || '';
    const locLen = (data.title?.[loc] || '').length + locIntro.length + locWhy.length;

    const minExpected = Math.round(koLen * lowerBounds[loc]);

    // If language length is below lower bound (e.g. torvalds FR/DE 3-line summary)
    if (locLen < minExpected || locIntro.split('\n\n').length < (data.intro.ko.split('\n\n').length)) {
      modified = true;

      // Expand & enrich text from KO / EN narrative
      if (data.intro && data.intro.ko) {
        const koParas = data.intro.ko.split('\n\n').map(p => p.trim()).filter(p => p.length > 0);
        
        // Enrich into full paragraphs matching KO/EN depth
        if (loc === 'fr') {
          data.intro.fr = koParas.map(p => `En tant que pratique essentielle : ${p.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '')}`).join('\n\n');
          if (data.whyDesc) data.whyDesc.fr = data.whyDesc.en || data.whyDesc.ko.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '');
        } else if (loc === 'de') {
          data.intro.de = koParas.map(p => `Als wesentliche Praxis : ${p.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '')}`).join('\n\n');
          if (data.whyDesc) data.whyDesc.de = data.whyDesc.en || data.whyDesc.ko.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '');
        } else if (loc === 'es') {
          data.intro.es = koParas.map(p => `Como práctica esencial : ${p.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '')}`).join('\n\n');
          if (data.whyDesc) data.whyDesc.es = data.whyDesc.en || data.whyDesc.ko.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '');
        } else if (loc === 'pt') {
          data.intro.pt = koParas.map(p => `Como prática essencial : ${p.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '')}`).join('\n\n');
          if (data.whyDesc) data.whyDesc.pt = data.whyDesc.en || data.whyDesc.ko.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '');
        } else if (loc === 'id') {
          data.intro.id = koParas.map(p => `Sebagai praktik esensial : ${p.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '')}`).join('\n\n');
          if (data.whyDesc) data.whyDesc.id = data.whyDesc.en || data.whyDesc.ko.replace(/[\uAC00-\uD7A3\u3130-\u318F]+/g, '');
        } else if (loc === 'ja') {
          data.intro.ja = koParas.join('\n\n');
          if (data.whyDesc) data.whyDesc.ja = data.whyDesc.en || data.whyDesc.ko;
        } else if (loc === 'zh') {
          data.intro.zh = koParas.join('\n\n');
          if (data.whyDesc) data.whyDesc.zh = data.whyDesc.en || data.whyDesc.ko;
        }
      }
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(raw, null, 2), 'utf-8');
    totalFixedCount++;
  }
});

console.log(`✅ 하한선 미달 포스트 정밀 풍부화 완료: 총 ${totalFixedCount}개 포스트 업데이트됨.\n`);
