import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, test, expect } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogRoot = path.join(__dirname, 'content/blog');
const habitsDir = path.join(__dirname, 'data/blogs/habits');

const targetLocales = ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id'];

// 포스트 전구역(Full Body) 문단 및 고유 문장 추출 함수
function getFullDocParagraphs(content) {
  const parts = content.split('---\n');
  if (parts.length < 3) return { fullText: '', paras: [], uniqueRatio: 1.0, hasFaqDuplicate: false, hasGenericTemplate: false };

  const bodyContent = parts.slice(2).join('---\n').trim();
  const cleanBody = bodyContent.replace(/<div[\s\S]*?<\/div>/g, '').replace(/---/g, '').trim();

  // 모든 텍스트 문단 파싱
  const paras = cleanBody
    .split('\n\n')
    .map(p => p.replace(/<[^>]+>/g, '').trim())
    .filter(p => p.length > 15 && !p.startsWith('#') && !p.startsWith('title:') && !p.startsWith('description:'));

  const uniqueParas = new Set(paras);
  const uniqueRatio = paras.length > 0 ? (uniqueParas.size / paras.length) : 1.0;

  // FAQ 질문과 답변이 동일한지 검사
  let hasFaqDuplicate = false;
  const detailsMatches = [...cleanBody.matchAll(/<summary[\s\S]*?<span>([\s\S]*?)<\/span>[\s\S]*?<p[\s\S]*?>([\s\S]*?)<\/p>/g)];
  detailsMatches.forEach(m => {
    const q = m[1].trim();
    const a = m[2].trim();
    if (q.length > 10 && q === a) {
      hasFaqDuplicate = true;
    }
  });

  // 일반 공통 템플릿(Fallback) 구문이 들어가 있는지 검사
  const genericPatterns = [
    'Discover the cognitive scientific principles and historic routine',
    'Erfahren Sie die gehirnwissenschaftlichen Prinzipien und die historische Routine',
    'Pelajari prinsip-prinsip ilmiah saraf dan rutinitas bersejarah',
    'Descubra los principios neurocientíficos y la rutina histórica',
    'Découvrez les principes neuroscientifiques et la routine historique',
    'Ejecute el Paso',
    'Exécutez l\'Étape',
    'Führen Sie Schritt',
    'Lakukan Langkah',
    'Execute Step',
    'このルーティンのステップ',
    '以高度集中力执行步骤',
    'Comprender los mecanismos neuronales revela cómo los hábitos específicos',
    'Comprendre les mécanismes neuronaux révèle comment des habitudes',
    'Das Verständnis der neuronalen Mechanismen zeigt',
    'Memahami mekanisme saraf mengungkapkan bagaimana kebiasaan',
    'La consistencia es la clave para dominar esta rutina',
    'La régularité est la clé pour maîtriser cette routine',
    'Konsistenz ist der Schlüssel zur Festigung dieser Routine',
    'Konsistensi adalah kunci untuk menguasai rutinitas ini'
  ];

  const hasGenericTemplate = genericPatterns.some(pattern => cleanBody.includes(pattern));

  return { fullText: cleanBody, paras, uniqueRatio, totalCount: paras.length, uniqueCount: uniqueParas.size, hasFaqDuplicate, hasGenericTemplate };
}

describe('TDD 3중 Quality Gate: 습관 블로그 전구역(Full Body) 다국어 품질 & 1:1 고유 내용 100% 검증', () => {
  test('모든 습관 블로그 포스트가 공통 템플릿 구문 없이 한국어 Master와 1:1 대응하는 고유 번역본을 가져야 한다', () => {
    const koDir = path.join(blogRoot, 'ko');
    const habitSlugs = new Set(fs.readdirSync(habitsDir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')));
    const koFiles = fs.readdirSync(koDir).filter(f => f.endsWith('.md') && habitSlugs.has(f.replace('.md', '')));

    let failedPostsCount = 0;
    const failures = [];

    koFiles.forEach(file => {
      const koPath = path.join(koDir, file);
      const koContent = fs.readFileSync(koPath, 'utf-8');
      const { paras: koParas } = getFullDocParagraphs(koContent);

      if (koParas.length === 0) return;

      let postHasFailure = false;
      const reasons = [];

      targetLocales.forEach(loc => {
        const targetPath = path.join(blogRoot, loc, file);
        if (!fs.existsSync(targetPath)) {
          postHasFailure = true;
          reasons.push(`${loc}: 파일 미존재`);
          return;
        }

        const targetContent = fs.readFileSync(targetPath, 'utf-8');
        const { paras: tParas, uniqueRatio, totalCount, uniqueCount, hasFaqDuplicate, hasGenericTemplate } = getFullDocParagraphs(targetContent);

        // 1. 공통 템플릿 문구 잔재 검출 🔴 FAIL
        if (hasGenericTemplate) {
          postHasFailure = true;
          reasons.push(`${loc}: 공통 템플릿 문구 잔재 감지됨`);
        }

        // 2. 포스트 전구역 동일 문단 2회 이상 중복 출현 검출 (Anti-Duplication Assertion)
        if (totalCount > 2 && uniqueCount < totalCount) {
          postHasFailure = true;
          reasons.push(`${loc}: 전구역 동일 문장 복붙 감지됨`);
        }

        // 3. 고유 문장 비율(Uniqueness Ratio) 80% 미만 🔴 FAIL
        if (totalCount >= 3 && uniqueRatio < 0.8) {
          postHasFailure = true;
          reasons.push(`${loc}: 고유성 비율 미달 (${(uniqueRatio * 100).toFixed(1)}%)`);
        }

        // 4. FAQ 질문과 답변 복붙 동일 감지 🔴 FAIL
        if (hasFaqDuplicate) {
          postHasFailure = true;
          reasons.push(`${loc}: FAQ 질문과 답변이 동일하게 복붙됨`);
        }

        // 5. JA 로케일 제목 영문 방치 검출
        if (loc === 'ja' && targetContent.includes('title: "The Master Who Copied Music Under Moonlight')) {
          postHasFailure = true;
          reasons.push(`ja: 제목 영문 방치 감지됨`);
        }
      });

      if (postHasFailure) {
        failedPostsCount++;
        failures.push(`${file} -> ${reasons.join('; ')}`);
      }
    });

    if (failures.length > 0) {
      console.log(`❌ [Strict 1:1 Quality Gate 검증 실패] 총 ${failedPostsCount}개 포스트에 공통 템플릿 문구 잔재 발견됨.`);
      console.log('샘플 실패 목록 (최대 10개):\n' + failures.slice(0, 10).join('\n'));
    }

    expect(failedPostsCount, `템플릿 잔재 포스트 ${failedPostsCount}개 발견됨`).toBe(0);
  });
});
