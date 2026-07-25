import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { cleanMarkdown } from '../../utils/compilerHelper.js';
import { renderIngredientsStepCard, renderCautionBox, renderFaqSection } from '../../utils/blogTemplates.js';
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

  const step1Title = locData.step1Title || locData.sections?.step1?.title || enData.step1Title || '';
  const step1Text = safeClean(locData.step1Desc || locData.sections?.step1?.content || enData.step1Desc || '');
  const step2Title = locData.step2Title || locData.sections?.step2?.title || enData.step2Title || '';
  const step2Text = safeClean(locData.step2Desc || locData.sections?.step2?.content || enData.step2Desc || '');
  const step3Title = locData.step3Title || locData.sections?.step3?.title || enData.step3Title || '';
  const step3Text = safeClean(locData.step3Desc || locData.sections?.step3?.content || enData.step3Desc || '');

  const cautionTitle = locData.cautionTitle || enData.cautionTitle || 'Caution';
  const cautionText = safeClean(locData.cautionDesc || enData.cautionDesc || '');

  const faqItems = (locData.faqs || enData.faqs || []).map(item => ({
    question: String(item.question || item.q || ''),
    answer: safeClean(String(item.answer || item.a || '')).replace(/\\n/g, '\n')
  }));

  const stepsYaml = `steps:
  - name: "${step1Title.replace(/"/g, '\\"')}"
    text: "${step1Text.replace(/"/g, '\\"')}"
  - name: "${step2Title.replace(/"/g, '\\"')}"
    text: "${step2Text.replace(/"/g, '\\"')}"
  - name: "${step3Title.replace(/"/g, '\\"')}"
    text: "${step3Text.replace(/"/g, '\\"')}"`;

  const faqsYaml = faqItems.length > 0
    ? 'faqs:\n' + faqItems.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')
    : '';

  const pubDate = master.pubDate || histMeta.pubDate || "2026-06-22";
  const updatedDate = master.updatedDate || histMeta.updatedDate || pubDate;
  const heroImage = master.heroImage || histMeta.heroImage || `/images/blog/${master.ingId?.replace(/-/g, '_')}_storage_hack.webp`;

  const stepLabelText = lang === 'ko' ? '단계' : 'STEP';
  const stepCardsHtml = [
    renderIngredientsStepCard(stepLabelText, 1, step1Title, step1Text),
    renderIngredientsStepCard(stepLabelText, 2, step2Title, step2Text),
    renderIngredientsStepCard(stepLabelText, 3, step3Title, step3Text)
  ].join('\n\n');

  const cautionBoxHtml = renderCautionBox('border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10', '⚠️', cautionTitle, cautionText);
  const faqSectionHtml = renderFaqSection(lang, faqItems);

  const langTagMap = {
    ko: ["식재료보관", "신선보관", master.ingId || 'food'],
    en: ["FoodStorage", "FreshStorage", master.ingId || 'food'],
    zh: ["食材保存", "保鲜技巧", master.ingId || 'food'],
    ja: ["食材保存", "鮮度保持", master.ingId || 'food'],
    es: ["ConservacionAlimentos", "AlmacenamientoFresco", master.ingId || 'food'],
    fr: ["ConservationAliments", "StockageFrais", master.ingId || 'food'],
    de: ["Lebensmittellagerung", "Frischelagerung", master.ingId || 'food'],
    pt: ["ConservacaoAlimentos", "ArmazenamentoFresco", master.ingId || 'food'],
    id: ["PenyimpananMakanan", "PenyimpananSegar", master.ingId || 'food']
  };
  const tagsJson = JSON.stringify(langTagMap[lang] || langTagMap['en']);

  let markdown = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${desc.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
updatedDate: "${updatedDate}"
category: "FreshSnap"
tags: ${tagsJson}
heroImage: "${heroImage}"
app: "freshsnap"
formatVersion: 4
authority: "${auth.replace(/"/g, '\\"')}"
${stepsYaml}
${faqsYaml}
---

${intro}

---

## 1. ${lang === 'ko' ? '올바른 보관법 3단계' : '3-Step Storage Method'}

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
