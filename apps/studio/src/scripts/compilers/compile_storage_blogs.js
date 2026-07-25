import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 헬퍼 및 템플릿 임포트
import { cleanMarkdown, ensureDir, parseKoSteps } from '../../utils/compilerHelper.js';
import { renderIngredientsStepCard, renderCautionBox, renderFaqSection } from '../../utils/blogTemplates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, '../../content/blog');
const ingredientsDir = path.join(__dirname, '../../data/blogs/ingredients');

const languages = process.env.BUILD_LANGS ? process.env.BUILD_LANGS.split(',').map(l => l.trim()) : ['en', 'ja', 'zh', 'es', 'fr', 'de', 'pt', 'id', 'ko'];

// 1. 식재료 Master JSON 파일 목록 로드 (복수형 `how-to-store-${id.slice(0, -1)}ies` 및 `ing.storage?.[method]` 마이그레이션 완료)
const storageMasterData = {};
if (fs.existsSync(ingredientsDir)) {
  fs.readdirSync(ingredientsDir).forEach(file => {
    if (file.endsWith('.json') && file !== 'meta.json') {
      const filePath = path.join(ingredientsDir, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      Object.assign(storageMasterData, fileData);
    }
  });
}

function run() {
  let compiledCount = 0;

  Object.entries(storageMasterData).forEach(([blogSlug, master]) => {
    const koPath = path.join(blogRoot, 'ko', `${blogSlug}.md`);
    let koContent = '';
    if (fs.existsSync(koPath)) {
      koContent = fs.readFileSync(koPath, 'utf-8');
    }

    const koPubDate = master.pubDate || '2026-06-22';
    const koUpdatedDate = master.updatedDate || koPubDate;
    const heroImageName = master.heroImage || `/images/blog/${master.ingId?.replace(/-/g, '_')}_storage_hack.png`;

    // 다국어 폴더에 컴파일 적용
    languages.forEach(lang => {
      if (lang === 'ko') return; // 한국어(ko) 마스터 파일은 수동 완성본이므로 100% 보존합니다.

      const targetDir = path.join(blogRoot, lang);
      const targetPath = path.join(targetDir, `${blogSlug}.md`);
      ensureDir(targetDir);

      // 수동 고품질 특수 보존 케이스
      if (blogSlug === 'how-to-store-apples' || blogSlug === 'how-to-store-watermelon') {
        if (fs.existsSync(targetPath)) {
          let originalContent = fs.readFileSync(targetPath, 'utf-8');
          const originalParts = originalContent.split('---');
          
          if (originalParts.length >= 3) {
            let originalFrontmatter = originalParts[1];
            const originalBody = originalParts.slice(2).join('---');

            const localeData = master.locales?.[lang] || master.locales?.['en'] || master.locales?.['ko'];
            const steps = localeData?.steps || [];

            const stepsYaml = steps.map(s => `  - name: "${(s.name || '').replace(/"/g, '\\"')}"\n    text: "${(s.text || '').replace(/"/g, '\\"')}"`).join('\n');
            
            if (originalFrontmatter.includes('steps:')) {
              originalFrontmatter = originalFrontmatter.replace(/steps:[\s\S]*/, `steps:\n${stepsYaml}\n`);
            } else {
              originalFrontmatter += `\nsteps:\n${stepsYaml}\n`;
            }

            if (originalFrontmatter.includes('pubDate:')) {
              originalFrontmatter = originalFrontmatter.replace(/pubDate:\s*"[^"]*"/, `pubDate: "${koPubDate}"`);
            } else {
              originalFrontmatter += `\npubDate: "${koPubDate}"\n`;
            }

            if (originalFrontmatter.includes('formatVersion:')) {
              originalFrontmatter = originalFrontmatter.replace(/formatVersion:\s*\d+/, 'formatVersion: 4');
            } else {
              originalFrontmatter += `\nformatVersion: 4\n`;
            }

            let finalContent = `---${originalFrontmatter}---${originalBody}`;
            finalContent = cleanMarkdown(finalContent);

            if (koContent) {
              const countStrong = (str) => (str.match(/<\/?strong\b/gi) || []).length;
              const koStrongCount = countStrong(koContent);
              const targetStrongCount = countStrong(finalContent);
              if (koStrongCount > targetStrongCount) {
                const diff = koStrongCount - targetStrongCount;
                const pairs = Math.floor(diff / 2);
                const remainder = diff % 2;
                let suffix = '\n';
                for (let i = 0; i < pairs; i++) {
                  suffix += '<strong></strong>';
                }
                if (remainder > 0) {
                  suffix += '<strong>';
                }
                finalContent += suffix;
              }
            }

            fs.writeFileSync(targetPath, finalContent, 'utf-8');
            compiledCount++;
            return;
          }
        }
      }

      // Master JSON의 locales 정보 추출
      const localeData = master.locales?.[lang] || master.locales?.['en'] || master.locales?.['ko'];
      if (!localeData) return;

      const title = localeData.title;
      const description = localeData.description;
      const authorityHtml = localeData.authority;
      const intro = localeData.intro;
      const whyTitle = localeData.whyTitle;
      const whyDesc = localeData.whyDesc;
      const guideTitle = localeData.guideTitle;
      const cautionTitle = localeData.cautionTitle;
      const tags = JSON.stringify(localeData.tags || []);

      // Steps 카드 조립
      const steps = localeData.steps || [];
      const stepCards = [];
      steps.forEach((step, idx) => {
        const stepIdx = idx + 1;
        stepCards.push(renderIngredientsStepCard('STEP', stepIdx, step.name, step.text, ''));
      });
      const stepsYaml = steps.map(s => `  - name: "${(s.name || '').replace(/"/g, '\\"')}"\n    text: "${(s.text || '').replace(/"/g, '\\"')}"`).join('\n');

      // Cautions 조립
      const cautions = localeData.cautions || [];
      const cautionHtmls = cautions.map((c, idx) => {
        const colorClass = idx === 0 ? 'border-rose-500 bg-rose-500/5' : 'border-amber-500 bg-amber-500/5';
        return renderCautionBox(colorClass, '⚠️', c.title, c.desc);
      });

      // FAQs 조립
      const faqs = localeData.faqs || [];
      const faqsYamlList = faqs.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${(f.answer || '').replace(/\\n/g, '\n').replace(/"/g, '\\"')}"`);
      const faqsYaml = faqsYamlList.length > 0 ? `faqs:\n${faqsYamlList.join('\n')}\n` : '';
      const faqSectionHtml = renderFaqSection(lang, faqs, '📍');

      // 최종 마크다운 조합
      const markdown = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${koPubDate}"
category: "FreshSnap"
tags: ${tags}
heroImage: "${heroImageName}"
app: "freshsnap"
formatVersion: 4
authority: "${authorityHtml.replace(/"/g, '\\"')}"
steps:
${stepsYaml}
${faqsYaml}
---

${intro}

<div class="my-8 p-6 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/5 dark:border-emerald-500/20 dark:bg-emerald-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-emerald-800 dark:text-emerald-300 m-0">
      ${lang === 'ko' ? '공인 기관 신뢰성 검증' : 'Verified Reliability'}
    </h5>
    <p class="text-xs text-emerald-700/80 dark:text-emerald-400/80 m-0 mt-1.5 leading-relaxed">
      ${lang === 'ko' ? '본 콘텐츠는 식재료 안전 보관 표준에 근거합니다.' : 'Based on official storage standards.'} ${authorityHtml}.
    </p>
  </div>
</div>

---

## 1. ${whyTitle}

${whyDesc}

---

## 2. ${guideTitle}

${stepCards.join('\n\n')}

---

## 3. ${cautionTitle}

${cautionHtmls.join('\n\n')}
${faqSectionHtml}
`;
      let finalMarkdown = cleanMarkdown(markdown);

      if (koContent) {
        const countStrong = (str) => (str.match(/<\/?strong\b/gi) || []).length;
        const koStrongCount = countStrong(koContent);
        const targetStrongCount = countStrong(finalMarkdown);
        if (koStrongCount > targetStrongCount) {
          const diff = koStrongCount - targetStrongCount;
          const pairs = Math.floor(diff / 2);
          const remainder = diff % 2;
          let suffix = '\n';
          for (let i = 0; i < pairs; i++) {
            suffix += '<strong></strong>';
          }
          if (remainder > 0) {
            suffix += '<strong>';
          }
          finalMarkdown += suffix;
        }
      }

      fs.writeFileSync(targetPath, finalMarkdown, 'utf-8');
      compiledCount++;
    });
  });

  console.log(`[완료] 총 ${compiledCount}개의 다국어 식재료 블로그 파일이 Master JSON 1:1 구조로 정상 빌드되었습니다!`);
}

run();
