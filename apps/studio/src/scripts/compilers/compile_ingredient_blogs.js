import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { cleanMarkdown } from '../../utils/compilerHelper.js';
import { renderIngredientStepCard, renderEvidenceBox, renderCautionBox, renderFaqSection } from '../../utils/blogTemplates.js';
import { compileMasterJsonCollection } from './compile_blog_base.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRoot = path.join(__dirname, '../../content/blog');
const ingredientsDir = path.join(__dirname, '../../data/blogs/ingredients');

function renderLocaleMarkdown({ blogSlug, lang, data, histMeta }) {
  const master = data;
  const targetPath = path.join(blogRoot, lang, `${blogSlug}.md`);

  // 수동 고품질 특수 보존 케이스 (apples, watermelon)
  if ((blogSlug === 'how-to-store-apples' || blogSlug === 'how-to-store-watermelon') && fs.existsSync(targetPath)) {
    let originalContent = fs.readFileSync(targetPath, 'utf-8');
    const originalParts = originalContent.split('---');
    
    if (originalParts.length >= 3) {
      let originalFrontmatter = originalParts[1];
      const originalBody = originalParts.slice(2).join('---');

      const appMatch = originalFrontmatter.match(/app:\s*"([^"]+)"/);
      if (!appMatch) {
        originalFrontmatter += '\napp: "freshsnap"';
      } else if (appMatch[1] === 'freshself') {
        originalFrontmatter = originalFrontmatter.replace(/app:\s*"freshself"/, 'app: "freshsnap"');
      }

      return cleanMarkdown(`---${originalFrontmatter}---${originalBody}`);
    }
  }

  const enData = master.locales?.['en'] || master.locales?.['ko'] || {};
  const locData = master.locales?.[lang] || enData;
  if (!locData || (!locData.title && !enData.title)) return '';

  const title = locData.title || enData.title || '';
  const desc = locData.description || enData.description || '';
  const auth = locData.authority || enData.authority || '';
  const intro = locData.intro || enData.intro || '';

  const safeClean = (txt) => typeof txt === 'string' ? cleanMarkdown(txt) : (txt ? cleanMarkdown(String(txt)) : '');
  const stepLabelText = lang === 'ko' ? '단계' : 'STEP';

  const steps = locData.steps || enData.steps || [];
  let stepCardsHtml = '';
  let stepsYaml = '';

  if (steps.length > 0) {
    stepCardsHtml = steps.map((st, idx) => {
      const stName = st.name || st.title || '';
      const stText = safeClean(st.text || st.desc || st.content || '');
      return renderIngredientStepCard(stepLabelText, idx + 1, stName, stText);
    }).join('\n\n');

    stepsYaml = 'steps:\n' + steps.map(st => {
      const name = (st.name || st.title || '').replace(/"/g, '\\"');
      const text = safeClean(st.text || st.desc || st.content || '').replace(/"/g, '\\"');
      return `  - name: "${name}"\n    text: "${text}"`;
    }).join('\n');
  } else {
    const step1Title = locData.step1Title || locData.sections?.step1?.title || enData.step1Title || '';
    const step1Text = safeClean(locData.step1Desc || locData.sections?.step1?.content || enData.step1Desc || '');
    const step2Title = locData.step2Title || locData.sections?.step2?.title || enData.step2Title || '';
    const step2Text = safeClean(locData.step2Desc || locData.sections?.step2?.content || enData.step2Desc || '');
    const step3Title = locData.step3Title || locData.sections?.step3?.title || enData.step3Title || '';
    const step3Text = safeClean(locData.step3Desc || locData.sections?.step3?.content || enData.step3Desc || '');

    stepCardsHtml = [
      renderIngredientStepCard(stepLabelText, 1, step1Title, step1Text),
      renderIngredientStepCard(stepLabelText, 2, step2Title, step2Text),
      renderIngredientStepCard(stepLabelText, 3, step3Title, step3Text)
    ].join('\n\n');

    stepsYaml = `steps:
  - name: "${step1Title.replace(/"/g, '\\"')}"
    text: "${step1Text.replace(/"/g, '\\"')}"
  - name: "${step2Title.replace(/"/g, '\\"')}"
    text: "${step2Text.replace(/"/g, '\\"')}"
  - name: "${step3Title.replace(/"/g, '\\"')}"
    text: "${step3Text.replace(/"/g, '\\"')}"`;
  }

  const cautionTitle = locData.cautionTitle || enData.cautionTitle || '보관 시 필수 규칙 및 주의사항';
  const cautions = locData.cautions || enData.cautions || [];
  let cautionBoxHtml = '';

  if (cautions.length > 0) {
    cautionBoxHtml = cautions.map(c => {
      const cTitle = c.title || cautionTitle;
      const cDesc = safeClean(c.desc || c.description || '');
      if (!cDesc) return '';
      return renderCautionBox('border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10', '⚠️', cTitle, cDesc);
    }).filter(Boolean).join('\n\n');
  } else {
    const cautionText = safeClean(locData.cautionDesc || enData.cautionDesc || '');
    if (cautionText) {
      cautionBoxHtml = renderCautionBox('border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10', '⚠️', cautionTitle, cautionText);
    }
  }

  const faqItems = (locData.faqs || enData.faqs || []).map(item => ({
    question: String(item.question || item.q || ''),
    answer: safeClean(String(item.answer || item.a || '')).replace(/\\n/g, '\n')
  }));

  const faqsYaml = faqItems.length > 0
    ? 'faqs:\n' + faqItems.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')
    : '';

  const pubDate = master.pubDate || histMeta.pubDate || "2026-06-22";
  const updatedDate = master.updatedDate || histMeta.updatedDate || pubDate;
  const heroImage = master.heroImage || histMeta.heroImage || `/images/blog/${master.ingId?.replace(/-/g, '_')}_storage_hack.webp`;

  const faqSectionHtml = renderFaqSection(lang, faqItems);

  const guideTitle = locData.guideTitle || enData.guideTitle || (lang === 'ko' ? '과학적으로 검증된 보관 가이드' : 'Scientifically Proven Storage Guide');

  const evidenceBoxHtml = auth ? renderEvidenceBox(lang, auth, 'ingredients') : '';

  let markdown = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
updatedDate: "${updatedDate}"
category: "FreshSnap"
heroImage: "${heroImage}"
app: "freshsnap"
formatVersion: 4
authority: "${auth.replace(/"/g, '\\"')}"
${stepsYaml}
${faqsYaml}
---

${intro}

${evidenceBoxHtml}

---

## 1. ${guideTitle}

${stepCardsHtml}

---

## 2. ${cautionTitle}

${cautionBoxHtml}

${faqSectionHtml}
`;

  return cleanMarkdown(markdown);
}

compileMasterJsonCollection({
  masterDir: ingredientsDir,
  blogRootDir: blogRoot,
  blogTypeName: 'FreshSnap 식재료 보관 블로그',
  renderLocaleMarkdown
});
