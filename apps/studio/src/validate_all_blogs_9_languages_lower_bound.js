import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const habitsDir = path.join(__dirname, 'data/blogs/habits');
const petsDir = path.join(__dirname, 'data/blogs/pets');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

// Linguistically realistic lower bounds relative to KO character length
const lowerBounds = {
  en: 1.00,
  es: 0.90,
  fr: 0.90,
  de: 0.90,
  pt: 0.85,
  id: 0.85,
  ja: 0.50,
  zh: 0.35,
  ko: 1.00
};

console.log('================================================================');
console.log('📊 [전체 블로그 9개 언어 하한선(Lower Bound) 정밀 전수 검증 리포트]');
console.log('================================================================\n');

let totalChecked = 0;
let lowerBoundViolations = 0;
const violationList = [];

// 1. 습관 블로그 검사
const habitFiles = fs.readdirSync(habitsDir).filter(f => f.endsWith('.json'));
habitFiles.forEach(file => {
  const filePath = path.join(habitsDir, file);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = Object.keys(raw)[0];
  const data = raw[slug];
  if (!data || !data.intro) return;

  const koLen = (data.title?.ko || '').length + (data.intro?.ko || '').length;

  locales.forEach(loc => {
    totalChecked++;
    const locLen = (data.title?.[loc] || '').length + (data.intro?.[loc] || '').length;
    const minExpected = Math.round(koLen * lowerBounds[loc]);

    if (locLen < minExpected) {
      lowerBoundViolations++;
      violationList.push(`[습관] ${slug} -> ${loc.toUpperCase()}: 실제 ${locLen}자 vs 최소기대 ${minExpected}자 (KO: ${koLen}자)`);
    }
  });
});

// 2. 반려동물 블로그 검사
const petFiles = fs.readdirSync(petsDir).filter(f => f.endsWith('.json') && f !== 'meta.json');
petFiles.forEach(file => {
  const filePath = path.join(petsDir, file);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = Object.keys(raw)[0];
  const data = raw[slug];
  if (!data || !data.locales) return;

  const koLen = (data.locales.ko?.title || '').length + (data.locales.ko?.intro || '').length;

  locales.forEach(loc => {
    totalChecked++;
    const locObj = data.locales[loc];
    const locLen = (locObj?.title || '').length + (locObj?.intro || '').length;
    const minExpected = Math.round(koLen * lowerBounds[loc]);

    if (locLen < minExpected) {
      lowerBoundViolations++;
      violationList.push(`[반려동물] ${slug} -> ${loc.toUpperCase()}: 실제 ${locLen}자 vs 최소기대 ${minExpected}자 (KO: ${koLen}자)`);
    }
  });
});

console.log(`[1] 총 전수 스캔한 언어 세트 수: ${totalChecked.toLocaleString()}개 (296개 습관 + 44개 반려동물 × 9개 언어)`);
console.log(`[2] 하한선 미달/축약 포스트 결함 건수: ${lowerBoundViolations}건\n`);

if (lowerBoundViolations === 0) {
  console.log(`🎉 [검증 성공] 9개 언어 전체의 분량 하한선(Lower Bound) 검사를 100% 통과했습니다! (축약 포스트 0건)`);
} else {
  console.log(`⚠️ [하한선 결함 발견] 총 ${lowerBoundViolations}건:`);
  violationList.slice(0, 10).forEach(v => console.log(`   - ${v}`));
  if (violationList.length > 10) console.log(`   ... 외 ${violationList.length - 10}건`);
}
console.log('================================================================\n');
