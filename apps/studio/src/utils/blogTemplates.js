import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const labelsPath = path.join(__dirname, '../data/blogs/compilerLabels.json');
const labels = JSON.parse(fs.readFileSync(labelsPath, 'utf-8'));

// 1. 식재료 보관 정보 전용 단계 카드 렌더러 (에메랄드 테마, 가독성 & 반응형 극대화)
export function renderIngredientStepCard(stepLabel, stepIdx, name, text, imageHtml = '') {
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.04] to-transparent dark:border-emerald-500/20 dark:bg-emerald-950/20 shadow-sm backdrop-blur-md transition-all">
  <div class="flex flex-wrap items-center gap-3 mb-4">
    <span class="px-3.5 py-1.5 text-xs font-black tracking-wider bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 rounded-full border border-emerald-500/30 shadow-xs">${stepLabel} ${stepIdx}</span>
    <h4 class="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100 m-0">${name}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-sm md:text-base m-0 font-normal">
    ${text}
  </p>${imageHtml}
</div>`;
}

// 2. 위인 습관 정보 전용 단계 카드 렌더러 (인디고 & 골드 앰버 테마)
export function renderStepCard(lang, stepIdx, name, text, imageHtml = '') {
  const stepText = labels.stepLabel[lang] || labels.stepLabel['en'];
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-500/[0.04] to-transparent dark:border-indigo-500/20 dark:bg-indigo-950/20 shadow-sm backdrop-blur-md transition-all">
  <div class="flex flex-wrap items-center gap-3 mb-4">
    <span class="px-3.5 py-1.5 text-xs font-black tracking-wider bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 rounded-full border border-indigo-500/30 shadow-xs">${stepText} ${stepIdx}</span>
    <h4 class="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100 m-0">${name}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-sm md:text-base m-0 font-normal">
    ${text}
  </p>${imageHtml}
</div>`;
}

// 3. 권위/근거 보증 박스 렌더러 (도메인별 맞춤 시각화)
export function renderEvidenceBox(lang, authority, appType) {
  const domainKey = (appType === 'petself' || appType === 'pet') ? 'pet' : appType;
  const title = labels.evidenceTitle[domainKey]?.[lang] || labels.evidenceTitle[domainKey]?.['en'] || "";
  const pattern = labels.evidenceDescPattern[lang] || labels.evidenceDescPattern['en'] || "";
  const desc = pattern.includes('<strong>$1</strong>')
    ? pattern.replace('<strong>$1</strong>', authority)
    : pattern.replace('$1', authority);
  
  // domain ('pet', 'ingredients', 'habits')에 따라 CSS 테마 색상 매핑
  let boxColorClass = "border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-transparent dark:border-indigo-500/30 dark:from-indigo-950/30 dark:to-slate-900/40";
  let titleColorClass = "text-indigo-900 dark:text-indigo-200 font-extrabold";
  let descColorClass = "text-indigo-800/90 dark:text-indigo-300/90 font-medium";

  if (domainKey === 'pet' || domainKey === 'ingredients') {
    boxColorClass = "border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent dark:border-emerald-500/30 dark:from-emerald-950/30 dark:to-slate-900/40";
    titleColorClass = "text-emerald-900 dark:text-emerald-200 font-extrabold";
    descColorClass = "text-emerald-800/90 dark:text-emerald-300/90 font-medium";
  }

  return `<div class="my-8 p-6 md:p-7 rounded-[2rem] border ${boxColorClass} flex items-start sm:items-center gap-4 shadow-xs backdrop-blur-md">
  <div class="flex-shrink-0 w-11 h-11 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-white/10 flex items-center justify-center text-2xl shadow-xs">
    🛡️
  </div>
  <div class="flex-1 min-w-0">
    <h5 class="text-sm md:text-base ${titleColorClass} m-0 tracking-tight">
      ${title}
    </h5>
    <p class="text-xs md:text-sm ${descColorClass} m-0 mt-1.5 leading-relaxed break-words">
      ${desc}
    </p>
  </div>
</div>`;
}

// 4. 반려동물 전용 시그널-대응 2열 미니 블록 스플릿 카드
export function renderPetStepCard(_lang, stepIdx, stepType, name, meaningLabel, meaningText, responseLabel, responseText) {
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.04] to-transparent dark:border-emerald-500/20 dark:bg-emerald-950/20 shadow-sm backdrop-blur-md">
  <div class="flex flex-wrap items-center gap-3 mb-5">
    <span class="px-3.5 py-1.5 text-xs font-black tracking-wider bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 rounded-full border border-emerald-500/30 shadow-xs">${stepType} ${stepIdx}</span>
    <h4 class="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100 m-0">${name}</h4>
  </div>
  <div class="grid grid-cols-1 gap-4">
    <div class="p-4 md:p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2.5 py-1 text-xs font-bold bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 rounded-lg border border-emerald-500/20 flex items-center gap-1.5">
          <span>🐾</span> ${meaningLabel}
        </span>
      </div>
      <p class="text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed m-0 font-normal">
        ${meaningText}
      </p>
    </div>
    <div class="p-4 md:p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2.5 py-1 text-xs font-bold bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 rounded-lg border border-indigo-500/20 flex items-center gap-1.5">
          <span>💡</span> ${responseLabel}
        </span>
      </div>
      <p class="text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed m-0 font-normal">
        ${responseText}
      </p>
    </div>
  </div>
</div>`;
}

// 5. 반려동물 전용 루틴 카드
export function renderPetRoutineCard(_lang, stepIdx, name, text) {
  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-500/[0.04] to-transparent dark:border-indigo-500/20 dark:bg-indigo-950/20 shadow-sm backdrop-blur-md">
  <div class="flex flex-wrap items-center gap-3 mb-4">
    <span class="px-3.5 py-1.5 text-xs font-black tracking-wider bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 rounded-full border border-indigo-500/30 shadow-xs">ROUTINE ${stepIdx}</span>
    <h4 class="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100 m-0">${name}</h4>
  </div>
  <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-sm md:text-base m-0 font-normal">
    ${text}
  </p>
</div>`;
}

// 6. 경고/주의사항 박스 렌더러 (모서리 오버레이 라인으로 시각적 인지성 강화)
export function renderCautionBox(colorClass, icon, title, desc) {
  return `<div class="my-6 p-5 md:p-6 rounded-r-2xl rounded-l-md border-l-4 ${colorClass} bg-amber-500/[0.06] dark:bg-amber-500/10 border-amber-500/30 flex items-start gap-4 shadow-xs backdrop-blur-xs">
  <span class="text-xl md:text-2xl flex-shrink-0 mt-0.5">${icon}</span>
  <div class="flex-1 min-w-0">
    <strong class="text-slate-950 dark:text-white font-extrabold block text-base md:text-lg mb-1.5 tracking-tight">${title}</strong>
    <p class="text-slate-800 dark:text-slate-200 text-sm md:text-base m-0 leading-relaxed font-normal break-words">
      ${desc}
    </p>
  </div>
</div>`;
}

// 7. 팁 박스 렌더러
export function renderTipBox(desc) {
  return `<div class="my-6 p-5 md:p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.05] dark:bg-indigo-500/10 flex items-start gap-4 shadow-xs backdrop-blur-xs">
  <span class="text-xl md:text-2xl flex-shrink-0 mt-0.5">💡</span>
  <div class="flex-1 min-w-0">
    <p class="text-slate-800 dark:text-slate-200 text-sm md:text-base m-0 leading-relaxed font-normal break-words">
      ${desc}
    </p>
  </div>
</div>`;
}

// 8. FAQ 렌더러 (Accordion 디자인 & 다크/라이트 가독성)
export function renderFaqSection(lang, faqs, icon = '📌') {
  if (!faqs || faqs.length === 0) return '';
  const faqTitle = labels.faqTitle[lang] || labels.faqTitle['en'];

  const faqItems = faqs.map((faq, faqIdx) => {
    const isOpen = faqIdx === 0 ? ' open' : '';
    const borderClass = faqIdx < faqs.length - 1 ? ' border-b border-slate-200/80 dark:border-slate-800/80 pb-4 mb-4' : '';
    const isExpanded = faqIdx === 0 ? 'true' : 'false';
    return `  <details class="group${borderClass} cursor-pointer"${isOpen}>
    <summary class="flex justify-between items-center font-bold text-slate-900 dark:text-white list-none text-base md:text-lg tracking-tight" role="button" aria-expanded="${isExpanded}">
      <span class="pr-4">${faq.question}</span>
      <span class="transition-transform group-open:rotate-180 text-xs text-slate-400 dark:text-slate-500 flex-shrink-0">▼</span>
    </summary>
    <p class="mt-3 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed pl-1 m-0 font-normal">
      ${faq.answer}
    </p>
  </details>`;
  }).join('\n\n');

  return `<div class="my-8 p-6 md:p-8 rounded-[2rem] border border-slate-200/80 bg-white/60 dark:border-white/10 dark:bg-slate-900/40 shadow-sm backdrop-blur-md">
  <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0 mb-6 flex items-center gap-2">
    <span>${icon}</span> ${faqTitle}
  </h3>
  
${faqItems}
</div>`;
}

export function getPetLabels() {
  return labels;
}
