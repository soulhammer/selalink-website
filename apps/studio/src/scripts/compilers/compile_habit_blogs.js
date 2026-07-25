import fs from 'fs';
import pathModule from 'path';
import { fileURLToPath } from 'url';
import { cleanMarkdown } from '../../utils/compilerHelper.js';
import { renderEvidenceBox, renderFaqSection } from '../../utils/blogTemplates.js';
import { compileMasterJsonCollection } from './compile_blog_base.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathModule.dirname(__filename);

const habitsDir = pathModule.join(__dirname, '../../data/blogs/habits');
const blogRootDir = pathModule.join(__dirname, '../../content/blog');

function renderLocaleMarkdown({ blogSlug, lang, data, histMeta }) {
  const pubDate = data.pubDate || histMeta.pubDate || "2026-06-19";
  const updatedDate = data.updatedDate || histMeta.updatedDate || pubDate;

  const relWebpPath = `/images/blog/${blogSlug.replace(/-/g, '_')}.webp`;
  const relPngPath = `/images/blog/${blogSlug.replace(/-/g, '_')}.png`;
  const absWebpPath = pathModule.join(__dirname, '../../../public', relWebpPath);
  
  let heroImage = data.heroImage || histMeta.heroImage;
  if (!heroImage) {
    heroImage = fs.existsSync(absWebpPath) ? relWebpPath : relPngPath;
  }

  const defaultKoTags = histMeta.tags || JSON.stringify(data.tags?.['ko'] || ["위습관", "루틴"]);
  const locData = data.locales?.[lang] || data.locales?.['en'] || data.locales?.['ko'];

  const safeClean = (txt) => typeof txt === 'string' ? cleanMarkdown(txt) : (txt ? cleanMarkdown(String(txt)) : '');

  let title = locData?.title || data.title?.[lang] || data.title?.['en'] || data.title?.['ko'] || "";
  let description = locData?.description || data.description?.[lang] || data.description?.['en'] || data.description?.['ko'] || "";
  let authority = locData?.authority || data.authority?.[lang] || data.authority?.['en'] || data.authority?.['ko'] || "";
  let intro = safeClean(locData?.intro || data.intro?.[lang] || data.intro?.[en] || data.intro?.[ko] || "").replace(/\\n/g, '\n');
  let whyTitle = locData?.whyTitle || data.whyTitle?.[lang] || data.whyTitle?.['en'] || data.whyTitle?.['ko'] || "";
  let whyDesc = safeClean(locData?.whyDesc || data.whyDesc?.[lang] || data.whyDesc?.[en] || data.whyDesc?.[ko] || "").replace(/\\n/g, '\n');
  let cautionTitle = locData?.cautionTitle || data.cautionTitle?.[lang] || data.cautionTitle?.['en'] || data.cautionTitle?.['ko'] || "";
  let cautionDesc = safeClean(locData?.cautionDesc || data.cautionDesc?.[lang] || data.cautionDesc?.[en] || data.cautionDesc?.[ko] || "").replace(/\\n/g, '\n');

  let tags;
  if (locData?.tags) {
    tags = JSON.stringify(locData.tags);
  } else if (data.tags?.[lang]) {
    tags = JSON.stringify(data.tags[lang]);
  } else if (lang === 'ko') {
    tags = defaultKoTags;
  } else {
    tags = '[]';
  }

  const steps = [];
  const stepCards = [];

  const stepLabels = {
    ko: 'STEP', en: 'STEP', zh: '步骤', ja: 'ステップ', es: 'PASO', fr: 'ÉTAPE', de: 'SCHRITT', pt: 'PASSO', id: 'LANGKAH'
  };
  const stepLabel = stepLabels[lang] || stepLabels['en'];

  const rawSteps = locData?.steps || data.steps;
  if (rawSteps && Array.isArray(rawSteps)) {
    rawSteps.forEach((step, idx) => {
      const stepName = step.title || step.name?.[lang] || step.name?.['en'] || step.name?.['ko'] || step.name || '';
      const rawTextVal = step.desc || step.text?.[lang] || step.text?.['en'] || step.text?.['ko'] || step.text || '';
      const stepText = safeClean(rawTextVal).replace(/\\n/g, '\n');

      steps.push({ name: stepName, text: stepText });

      stepCards.push(`<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">${stepLabel} ${idx + 1}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${stepName}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${stepText}
  </p>
</div>`);
    });
  }

  const stepsYaml = steps.length > 0
    ? 'steps:\n' + steps.map(s => `  - name: "${s.name.replace(/"/g, '\\"')}"\n    text: "${s.text.replace(/"/g, '\\"')}"`).join('\n')
    : 'steps: []';

  const faqItems = [];
  const rawFaqs = locData?.faqs || data.faqs;
  if (rawFaqs && Array.isArray(rawFaqs)) {
    rawFaqs.forEach(faq => {
      const qVal = faq.question || faq.q;
      const q = typeof qVal === 'string' ? qVal : (qVal?.[lang] || qVal?.['en'] || qVal?.['ko'] || '');
      const aVal = faq.answer || faq.a;
      const a = safeClean(typeof aVal === 'string' ? aVal : (aVal?.[lang] || aVal?.['en'] || aVal?.['ko'] || '')).replace(/\\n/g, '\n');
      faqItems.push({ question: String(q || ''), answer: String(a || '') });
    });
  }

  const faqsYaml = faqItems.length > 0
    ? 'faqs:\n' + faqItems.map(f => `  - question: "${(f.question || '').replace(/"/g, '\\"')}"\n    answer: "${(f.answer || '').replace(/"/g, '\\"')}"`).join('\n')
    : '';

  const evidenceBoxHtml = renderEvidenceBox(lang, authority, 'habits');
  const faqSectionHtml = renderFaqSection(lang, faqItems);

  let markdown = `---
layout: "../../../layouts/BlogPostLayout.astro"
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
updatedDate: "${updatedDate}"
category: "BuildSelf"
tags: ${tags}
heroImage: "${heroImage}"
app: "buildself"
formatVersion: 4
authority: "${authority.replace(/"/g, '\\"')}"
${stepsYaml}
${faqsYaml}
---

${intro}

${evidenceBoxHtml}

---

## 1. ${whyTitle}

${whyDesc}

---

## 2. ${lang === 'ko' ? '루틴 실행 3단계 가이드' : '3-Step Routine Guide'}

${stepCards.join('\n\n')}

---

## 3. ${cautionTitle}

${cautionDesc}

${faqSectionHtml}
`;
  return cleanMarkdown(markdown);
}

compileMasterJsonCollection({
  masterDir: habitsDir,
  blogRootDir,
  blogTypeName: 'BuildSelf 습관 블로그',
  renderLocaleMarkdown
});
