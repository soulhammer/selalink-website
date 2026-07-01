import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const labelsPath = path.join(__dirname, '../data/blogs/compilerLabels.json');
const labels = JSON.parse(fs.readFileSync(labelsPath, 'utf-8'));

export function renderEvidenceBox(lang, authority, domain) {
  const title = labels.evidenceTitle[domain]?.[lang] || labels.evidenceTitle[domain]?.['en'] || "";
  const pattern = labels.evidenceDescPattern[lang] || labels.evidenceDescPattern['en'] || "";
  const desc = pattern.replace('$1', authority);
  
  return `<div class="my-8 p-6 rounded-[2rem] border border-indigo-500/10 bg-indigo-500/5 dark:border-indigo-500/20 dark:bg-indigo-900/10 flex items-center gap-4">
  <span class="text-2xl">🛡️</span>
  <div>
    <h5 class="text-sm font-bold text-indigo-800 dark:text-indigo-300 m-0">
      ${title}
    </h5>
    <p class="text-xs text-indigo-700/80 dark:text-indigo-400/80 m-0 mt-1.5 leading-relaxed">
      ${desc}
    </p>
  </div>
</div>`;
}

export function renderStepCard(lang, stepIdx, name, text, imageHtml = '') {
  const stepText = labels.stepLabel[lang] || labels.stepLabel['en'];
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 tracking-wider">${stepText} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${name}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${text}
  </p>${imageHtml}
</div>`;
}

export function renderPetStepCard(lang, stepIdx, stepType, name, meaningLabel, meaningText, responseLabel, responseText) {
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">${stepType} ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${name}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    <strong>• ${meaningLabel}:</strong> ${meaningText}<br/>
    <strong>• ${responseLabel}:</strong> ${responseText}
  </p>
</div>`;
}

export function renderPetRoutineCard(lang, stepIdx, name, text) {
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <span class="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20">ROUTINE ${stepIdx}</span>
    <h4 class="text-xl font-extrabold text-slate-900 dark:text-white m-0">${name}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base m-0">
    ${text}
  </p>
</div>`;
}

export function renderCautionBox(colorClass, icon, title, desc) {
  return `<div class="my-6 p-5 rounded-2xl border-l-4 ${colorClass} flex items-start gap-4">
  <span class="text-xl">${icon}</span>
  <div>
    <strong class="text-slate-950 dark:text-white font-extrabold block mb-1">${title}</strong>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${desc}
    </p>
  </div>
</div>`;
}

export function renderTipBox(desc) {
  return `<div class="my-6 p-5 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10 flex items-start gap-4">
  <span class="text-xl">💡</span>
  <div>
    <p class="text-slate-700 dark:text-slate-300 text-sm m-0 leading-relaxed">
      ${desc}
    </p>
  </div>
</div>`;
}

export function renderFaqSection(lang, faqs) {
  if (!faqs || faqs.length === 0) return '';
  const faqTitle = labels.faqTitle[lang] || labels.faqTitle['en'];

  const faqItems = faqs.map((faq, faqIdx) => {
    const isOpen = faqIdx === 0 ? ' open' : '';
    const borderClass = faqIdx < faqs.length - 1 ? ' border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4' : '';
    return `  <details class="group${borderClass} cursor-pointer"${isOpen}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none">
      <span>${faq.question}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
    </summary>
    <p class="mt-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed pl-1">
      ${faq.answer}
    </p>
  </details>`;
  }).join('\n\n');

  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/50 dark:border-white/5 dark:bg-slate-900/30 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>📌</span> ${faqTitle}
  </h3>
  
${faqItems}
</div>`;
}

export function getPetLabels() {
  return labels;
}
