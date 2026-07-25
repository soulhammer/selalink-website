import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const petsDir = path.join(__dirname, 'data/blogs/pets');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

console.log('================================================================');
console.log('📊 [반려동물/식재료 등 습관 외 블로그 다국어 무결성 전수 검증]');
console.log('================================================================\n');

const petFiles = fs.readdirSync(petsDir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

let totalFieldsChecked = 0;
let missingFieldsCount = 0;
let truncatedFieldsCount = 0;
let paragraphMismatchCount = 0;
let koreanLeakCount = 0;

const koreanRegex = /[\uAC00-\uD7A3\u3130-\u318F]/;

const flaggedPosts = [];

petFiles.forEach(file => {
  const filePath = path.join(petsDir, file);
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const slug = Object.keys(raw)[0];
  const postData = raw[slug];

  if (!postData || !postData.locales) return;

  const locsData = postData.locales;
  const postIssues = [];

  const requiredFields = ['title', 'description', 'authority', 'intro', 'whyTitle', 'whyDesc'];

  locales.forEach(loc => {
    const locObj = locsData[loc];
    if (!locObj) {
      missingFieldsCount += requiredFields.length;
      postIssues.push(`[언어 세트 완전 누락] locales.${loc}`);
      return;
    }

    requiredFields.forEach(field => {
      totalFieldsChecked++;
      const val = locObj[field];
      if (!val || typeof val !== 'string' || val.trim().length === 0) {
        missingFieldsCount++;
        postIssues.push(`[누락] ${field}.${loc}`);
      } else {
        if (val.trim().endsWith('...') || val.trim().endsWith('…')) {
          truncatedFieldsCount++;
          postIssues.push(`[미완성/말줄임] ${field}.${loc}`);
        }
        if (loc !== 'ko' && koreanRegex.test(val)) {
          koreanLeakCount++;
          postIssues.push(`[한글 유출] ${field}.${loc}`);
        }
      }
    });

    // Daily routine check
    if (locObj.daily_routine) {
      locObj.daily_routine.forEach((item, rIdx) => {
        totalFieldsChecked += 2;
        if (!item.name || item.name.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] daily_routine[${rIdx}].name.${loc}`);
        }
        if (!item.text || item.text.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] daily_routine[${rIdx}].text.${loc}`);
        } else if (loc !== 'ko' && koreanRegex.test(item.text)) {
          koreanLeakCount++;
          postIssues.push(`[한글 유출] daily_routine[${rIdx}].text.${loc}`);
        }
      });
    }

    // FAQs check
    if (locObj.faqs) {
      locObj.faqs.forEach((faq, fIdx) => {
        totalFieldsChecked += 2;
        if (!faq.question || faq.question.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] faqs[${fIdx}].question.${loc}`);
        }
        if (!faq.answer || faq.answer.trim().length === 0) {
          missingFieldsCount++;
          postIssues.push(`[누락] faqs[${fIdx}].answer.${loc}`);
        } else if (loc !== 'ko' && koreanRegex.test(faq.answer)) {
          koreanLeakCount++;
          postIssues.push(`[한글 유출] faqs[${fIdx}].answer.${loc}`);
        }
      });
    }
  });

  // Paragraph structure parity check in intro (KO vs others)
  const koIntroParas = (locsData.ko?.intro || '').split('\n\n').filter(p => p.trim().length > 0).length;
  locales.forEach(loc => {
    if (loc === 'ko' || !locsData[loc]) return;
    const locIntroParas = (locsData[loc]?.intro || '').split('\n\n').filter(p => p.trim().length > 0).length;
    if (koIntroParas > 0 && locIntroParas > 0 && koIntroParas !== locIntroParas) {
      paragraphMismatchCount++;
      postIssues.push(`[문단 불일치] intro.ko: ${koIntroParas}개 문단 vs intro.${loc}: ${locIntroParas}개 문단`);
    }
  });

  if (postIssues.length > 0) {
    flaggedPosts.push({ slug, postIssues });
  }
});

console.log(`[1] 총 검사 대상 반려동물 포스트: ${petFiles.length}개`);
console.log(`[2] 총 검사 필드 수: ${totalFieldsChecked.toLocaleString()}개`);
console.log(`[3] 필드 누락(Missing): ${missingFieldsCount}건`);
console.log(`[4] 미완성/말줄임(Truncated '...'): ${truncatedFieldsCount}건`);
console.log(`[5] 타 언어 내 한글 유출(Korean Leak): ${koreanLeakCount}건`);
console.log(`[6] 문단 구조 불일치(Paragraph Mismatch): ${paragraphMismatchCount}건\n`);

console.log('================================================================');
if (flaggedPosts.length === 0) {
  console.log(`🎉 [검증 성공] 44개 반려동물 블로그의 9개 언어 데이터가 결함 없이 100% 정상입니다!`);
} else {
  console.log(`⚠️  [결함 발견] 총 ${flaggedPosts.length}개 포스트에서 이슈 감지:`);
  flaggedPosts.forEach(fp => {
    console.log(`  📌 [${fp.slug}] (이슈 ${fp.postIssues.length}건)`);
    fp.postIssues.slice(0, 3).forEach(iss => console.log(`     - ${iss}`));
    if (fp.postIssues.length > 3) console.log(`     ... 외 ${fp.postIssues.length - 3}건`);
  });
}
console.log('================================================================\n');
