import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsDir = path.join(__dirname, 'data/blogs/habits');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];
const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'));

console.log(`================================================================`);
console.log(`📊 [전체 ${files.length}개 습관 블로그 9개 언어 다국어 무결성 전수 검증 리포트]`);
console.log(`================================================================\n`);

let totalFieldsChecked = 0;
let missingFieldsCount = 0;
let truncatedFieldsCount = 0;
let paragraphMismatchCount = 0;

const statsByLocale = {};
locales.forEach(loc => {
  statsByLocale[loc] = { totalChars: 0, minChars: Infinity, maxChars: 0, postCount: 0 };
});

const flaggedPosts = [];

files.forEach(file => {
  const filePath = path.join(blogsDir, file);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = Object.keys(raw)[0];
  const data = raw[slug];

  if (!data) return;

  const postIssues = [];

  // 1. Field completeness & Truncation check
  const requiredFields = ['title', 'description', 'authority', 'intro', 'whyTitle', 'whyDesc', 'cautionTitle', 'cautionDesc'];
  
  requiredFields.forEach(field => {
    locales.forEach(loc => {
      totalFieldsChecked++;
      const val = data[field]?.[loc];
      if (!val || typeof val !== 'string' || val.trim().length === 0) {
        missingFieldsCount++;
        postIssues.push(`[누락] ${field}.${loc}`);
      } else if (val.trim().endsWith('...') || val.trim().endsWith('…')) {
        truncatedFieldsCount++;
        postIssues.push(`[미완성/말줄임] ${field}.${loc}`);
      }
    });
  });

  // Steps check
  if (data.steps) {
    data.steps.forEach((step, sIdx) => {
      locales.forEach(loc => {
        totalFieldsChecked += 2;
        const nameVal = step.name?.[loc];
        const textVal = step.text?.[loc];
        if (!nameVal || nameVal.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] steps[${sIdx}].name.${loc}`);
        }
        if (!textVal || textVal.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] steps[${sIdx}].text.${loc}`);
        } else if (textVal.trim().endsWith('...') || textVal.trim().endsWith('…')) {
          truncatedFieldsCount++;
          postIssues.push(`[미완성/말줄임] steps[${sIdx}].text.${loc}`);
        }
      });
    });
  }

  // FAQs check
  if (data.faqs) {
    data.faqs.forEach((faq, fIdx) => {
      locales.forEach(loc => {
        totalFieldsChecked += 2;
        const qVal = faq.question?.[loc];
        const aVal = faq.answer?.[loc];
        if (!qVal || qVal.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] faqs[${fIdx}].question.${loc}`);
        }
        if (!aVal || aVal.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] faqs[${fIdx}].answer.${loc}`);
        } else if (aVal.trim().endsWith('...') || aVal.trim().endsWith('…')) {
          truncatedFieldsCount++;
          postIssues.push(`[미완성/말줄임] faqs[${fIdx}].answer.${loc}`);
        }
      });
    });
  }

  // 2. Paragraph structure parity check (KO vs other languages in 'intro')
  const koIntroParas = (data.intro?.['ko'] || '').split('\n\n').filter(p => p.trim().length > 0).length;
  locales.forEach(loc => {
    const locIntroParas = (data.intro?.[loc] || '').split('\n\n').filter(p => p.trim().length > 0).length;
    if (koIntroParas > 0 && locIntroParas > 0 && koIntroParas !== locIntroParas) {
      paragraphMismatchCount++;
      postIssues.push(`[문단 불일치] intro.ko: ${koIntroParas}개 문단 vs intro.${loc}: ${locIntroParas}개 문단`);
    }
  });

  // Calculate length statistics per locale
  locales.forEach(loc => {
    let charLen = (data.title?.[loc] || '').length + (data.description?.[loc] || '').length + (data.intro?.[loc] || '').length + (data.whyDesc?.[loc] || '').length;
    if (data.steps) {
      data.steps.forEach(s => charLen += (s.name?.[loc] || '').length + (s.text?.[loc] || '').length);
    }
    statsByLocale[loc].totalChars += charLen;
    statsByLocale[loc].minChars = Math.min(statsByLocale[loc].minChars, charLen);
    statsByLocale[loc].maxChars = Math.max(statsByLocale[loc].maxChars, charLen);
    statsByLocale[loc].postCount++;
  });

  if (postIssues.length > 0) {
    flaggedPosts.push({ slug, postIssues });
  }
});

console.log(`[1] 총 검사 필드 수: ${totalFieldsChecked.toLocaleString()}개`);
console.log(`[2] 필드 누락(Missing): ${missingFieldsCount}건`);
console.log(`[3] 미완성/말줄임(Truncated '...'): ${truncatedFieldsCount}건`);
console.log(`[4] 문단 구조 불일치(Paragraph Mismatch): ${paragraphMismatchCount}건\n`);

console.log(`================================================================`);
console.log(`📈 [언어별 평균/최소/최대 글자 수 분량 분포 통계]`);
console.log(`================================================================`);

locales.forEach(loc => {
  const st = statsByLocale[loc];
  const avg = Math.round(st.totalChars / st.postCount);
  const ratioToKo = (st.totalChars / statsByLocale['ko'].totalChars).toFixed(2);
  console.log(`  - [${loc.toUpperCase()}] 평균: ${avg.toString().padStart(5, ' ')}자 | 최소: ${st.minChars.toString().padStart(4, ' ')}자 | 최대: ${st.maxChars.toString().padStart(5, ' ')}자 | KO 대비 비율: ${ratioToKo}x`);
});

console.log('\n================================================================');
if (flaggedPosts.length === 0) {
  console.log(`🎉 [검증 성공] 296개 전체 블로그의 9개 언어 다국어 데이터가 결함 없이 100% 정상 완료되었습니다!`);
} else {
  console.log(`⚠️  [결함 발견] 총 ${flaggedPosts.length}개 포스트에서 이슈 감지:`);
  flaggedPosts.forEach(fp => {
    console.log(`  📌 [${fp.slug}]`);
    fp.postIssues.forEach(iss => console.log(`     - ${iss}`));
  });
}
console.log(`================================================================\n`);
