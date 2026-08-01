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

// 9. BuildSelf 앱 전용 미니 광고 카드 렌더러 ('역사적 & 학술적 근거' 섹션 직후 인라인 배치용)
export function renderBuildSelfCtaBox(lang) {
  const cta = labels.buildselfCta || {};
  const tagsMap = {
    ko: "위인 멘토와 함께하는 데일리 성장",
    en: "Daily growth with historical mentors",
    ja: "偉人メンターと共に毎日成長",
    zh: "与历史导师共同每日成长",
    es: "Crecimiento diario con mentores históricos",
    fr: "Croissance quotidienne avec des mentors historiques",
    de: "Tägliches Wachstum mit historischen Mentoren",
    pt: "Crescimento diário com mentores históricos",
    id: "Pertumbuhan harian bersama mentor sejarah"
  };
  const tag = tagsMap[lang] || tagsMap['en'];
  const rawTitle = cta.title?.[lang] || cta.title?.['en'] || "BuildSelf - 위인의 삶을 읽었다면, 이제 당신의 습관으로!";
  
  let brandName = "BuildSelf";
  let messageText = rawTitle;
  if (rawTitle.includes(" - ")) {
    const parts = rawTitle.split(" - ");
    brandName = parts[0];
    messageText = parts.slice(1).join(" - ");
  }

  const download = cta.download?.[lang] || cta.download?.['en'] || "Google Play에서 다운로드";
  const subtext = cta.subtext?.[lang] || cta.subtext?.['en'] || "✨ 100% 무료 · 회원가입 없음 · 광고 없음 · 오프라인 저장";
  const playStoreLink = `https://play.google.com/store/apps/details?id=com.selalink.buildself&hl=${lang}`;

  return `<div class="my-8 relative overflow-hidden rounded-3xl border border-sky-100 dark:border-sky-500/20 p-6 md:p-8 bg-gradient-to-br from-sky-50/80 via-sky-50/40 to-transparent dark:from-sky-950/20 dark:via-sky-950/10 dark:to-slate-900/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg not-prose">
  <div class="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
    <div class="space-y-3.5 flex-1 min-w-0 max-w-xl w-full flex flex-col items-center text-center">
      <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border shadow-xs max-w-full mx-auto bg-sky-100 dark:bg-sky-500/20 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-500/30">
        <span>💬</span>
        <span class="truncate">${tag}</span>
      </div>
      <div class="space-y-1.5 w-full text-center">
        <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug text-center m-0 flex flex-col items-center">
          <span class="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-black text-base md:text-lg tracking-wider uppercase">
            <img src="/images/buildself/icon.webp" alt="BuildSelf App Icon" class="w-5 h-5 md:w-6 md:h-6 rounded-lg object-cover shadow-xs border border-sky-200 dark:border-sky-500/30 m-0" />
            <span>${brandName}</span>
          </span>
          <span class="block text-base md:text-xl font-extrabold text-slate-900 dark:text-white leading-snug mt-0.5">${messageText}</span>
        </h3>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-3 shrink-0 w-full lg:w-[340px] pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200/40 dark:border-slate-700/30">
      <div class="flex items-center justify-center -space-x-3 py-1" title="${labels.avatarTitles?.buildself?.[lang] || 'Join historical mentors and figures'}">
        <img src="/images/buildself/mentors/einstein.webp" alt="Einstein Mentor" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-30 hover:scale-110 transition-transform m-0" />
        <img src="/images/buildself/mentors/kingsejong.webp" alt="King Sejong Mentor" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-20 hover:scale-110 transition-transform m-0" />
        <img src="/images/buildself/mentors/nikola_tesla.webp" alt="Nikola Tesla Mentor" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-10 hover:scale-110 transition-transform m-0" />
        <img src="/images/buildself/mentors/abraham_lincoln.webp" alt="Lincoln Mentor" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform m-0" />
        <img src="/images/buildself/mentors/yisunsin.webp" alt="Yi Sun-sin Mentor" class="hidden sm:block w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform m-0" />
        <img src="/images/buildself/mentors/shin_saimdang.webp" alt="Shin Saimdang Mentor" class="hidden md:block w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform m-0" />
      </div>
      <div class="flex items-center justify-center w-full">
        <a href="${playStoreLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 focus:outline-none focus:ring-4 shadow-sm hover:shadow hover:scale-[1.01] active:scale-[0.99] text-center whitespace-nowrap w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-500/20 no-underline">
          <img src="/images/google_play_icon.webp" alt="Google Play Icon" class="w-4 h-4 sm:w-5 sm:h-5 shrink-0 object-contain drop-shadow-sm m-0" />
          <span class="whitespace-nowrap">${download}</span>
        </a>
      </div>
      <div class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 text-center w-full max-w-[320px] leading-relaxed px-1">
        ${subtext}
      </div>
    </div>
  </div>
</div>`;
}

// 10. PetSelf(FreshSelf for Pets) 앱 전용 미니 광고 카드 렌더러 ('수의학적 & 행동학적 근거' 섹션 직후 인라인 배치용)
export function renderPetSelfCtaBox(lang) {
  const cta = labels.petselfCta || {};
  const tag = cta.tag?.[lang] || cta.tag?.['ko'] || cta.tag?.['en'] || "스마트 보관부터 유통기한 알림까지";
  const rawTitle = cta.title?.[lang] || cta.title?.['ko'] || cta.title?.['en'] || "FreshSelf - 사료와 영양제, 버려짐 없이 완벽 보관!";
  
  let brandName = "FreshSelf";
  let messageText = rawTitle;
  if (rawTitle.includes(" - ")) {
    const parts = rawTitle.split(" - ");
    brandName = parts[0];
    messageText = parts.slice(1).join(" - ");
  }

  const download = cta.download?.[lang] || cta.download?.['ko'] || cta.download?.['en'] || "Google Play에서 다운로드";
  const subtext = cta.subtext?.[lang] || cta.subtext?.['ko'] || cta.subtext?.['en'] || "✨ 100% 무료 · 회원가입 없음 · 광고 없음 · 오프라인 저장";
  const playStoreLink = `https://play.google.com/store/apps/details?id=com.selalink.freshself&hl=${lang}`;

  return `<div class="my-8 relative overflow-hidden rounded-3xl border border-rose-100 dark:border-rose-500/20 p-6 md:p-8 bg-gradient-to-br from-rose-50/80 via-rose-50/40 to-transparent dark:from-rose-950/20 dark:via-rose-950/10 dark:to-slate-900/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg not-prose">
  <div class="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
    <div class="space-y-3.5 flex-1 min-w-0 max-w-xl w-full flex flex-col items-center text-center">
      <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border shadow-xs max-w-full mx-auto bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-500/30">
        <span>💬</span>
        <span class="truncate">${tag}</span>
      </div>
      <div class="space-y-1.5 w-full text-center">
        <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug text-center m-0 flex flex-col items-center">
          <span class="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-black text-base md:text-lg tracking-wider uppercase">
            <img src="/images/freshself/icon.webp" alt="FreshSelf App Icon" class="w-5 h-5 md:w-6 md:h-6 rounded-lg object-cover shadow-xs border border-rose-200 dark:border-rose-500/30 m-0" />
            <span>${brandName}</span>
          </span>
          <span class="block text-base md:text-xl font-extrabold text-slate-900 dark:text-white leading-snug mt-0.5">${messageText}</span>
        </h3>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-3 shrink-0 w-full lg:w-[340px] pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200/40 dark:border-slate-700/30">
      <div class="flex items-center justify-center -space-x-2.5 py-1" title="${labels.avatarTitles?.fresh?.[lang] || 'Meet cute 3D fresh fruit & food characters'}">
        <img src="/images/freshself/fruits/apple.webp" alt="Apple Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-30 hover:scale-110 transition-transform bg-rose-50 dark:bg-rose-950/40 m-0" />
        <img src="/images/freshself/fruits/avocado.webp" alt="Avocado Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-20 hover:scale-110 transition-transform bg-emerald-50 dark:bg-emerald-950/40 m-0" />
        <img src="/images/freshself/fruits/banana.webp" alt="Banana Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-10 hover:scale-110 transition-transform bg-amber-50 dark:bg-amber-950/40 m-0" />
        <img src="/images/freshself/fruits/strawberry.webp" alt="Strawberry Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform bg-red-50 dark:bg-red-950/40 m-0" />
        <img src="/images/freshself/fruits/orange.webp" alt="Orange Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform bg-orange-50 dark:bg-orange-950/40 m-0" />
        <img src="/images/freshself/fruits/broccoli.webp" alt="Broccoli Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform bg-green-50 dark:bg-green-950/40 m-0" />
      </div>
      <div class="flex items-center justify-center w-full">
        <a href="${playStoreLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 focus:outline-none focus:ring-4 shadow-sm hover:shadow hover:scale-[1.01] active:scale-[0.99] text-center whitespace-nowrap w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white focus:ring-rose-500/20 no-underline">
          <img src="/images/google_play_icon.webp" alt="Google Play Icon" class="w-4 h-4 sm:w-5 sm:h-5 shrink-0 object-contain drop-shadow-sm m-0" />
          <span class="whitespace-nowrap">${download}</span>
        </a>
      </div>
      <div class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 text-center w-full max-w-[320px] leading-relaxed px-1">
        ${subtext}
      </div>
    </div>
  </div>
</div>`;
}

// 11. FreshSnap 식재료 보관 전용 미니 광고 카드 렌더러 ('식품 안전 & 과학적 근거' 섹션 직후 인라인 배치용)
export function renderFreshSnapCtaBox(lang) {
  const cta = labels.freshsnapCta || {};
  const tag = cta.tag?.[lang] || cta.tag?.['ko'] || cta.tag?.['en'] || "스마트 보관부터 유통기한 알림까지";
  const rawTitle = cta.title?.[lang] || cta.title?.['ko'] || cta.title?.['en'] || "FreshSelf - 버려짐 제로! 모두의 스마트 보관 비서";
  
  let brandName = "FreshSelf";
  let messageText = rawTitle;
  if (rawTitle.includes(" - ")) {
    const parts = rawTitle.split(" - ");
    brandName = parts[0];
    messageText = parts.slice(1).join(" - ");
  }

  const download = cta.download?.[lang] || cta.download?.['ko'] || cta.download?.['en'] || "Google Play에서 다운로드";
  const subtext = cta.subtext?.[lang] || cta.subtext?.['ko'] || cta.subtext?.['en'] || "✨ 100% 무료 · 회원가입 없음 · 광고 없음 · 오프라인 저장";
  const playStoreLink = `https://play.google.com/store/apps/details?id=com.selalink.freshself&hl=${lang}`;

  return `<div class="my-8 relative overflow-hidden rounded-3xl border border-purple-100 dark:border-purple-500/20 p-6 md:p-8 bg-gradient-to-br from-purple-50/80 via-purple-50/40 to-transparent dark:from-purple-950/20 dark:via-purple-950/10 dark:to-slate-900/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg not-prose">
  <div class="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
    <div class="space-y-3.5 flex-1 min-w-0 max-w-xl w-full flex flex-col items-center text-center">
      <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border shadow-xs max-w-full mx-auto bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-500/30">
        <span>💬</span>
        <span class="truncate">${tag}</span>
      </div>
      <div class="space-y-1.5 w-full text-center">
        <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug text-center m-0 flex flex-col items-center">
          <span class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-black text-base md:text-lg tracking-wider uppercase">
            <img src="/images/freshself/icon.webp" alt="FreshSelf App Icon" class="w-5 h-5 md:w-6 md:h-6 rounded-lg object-cover shadow-xs border border-purple-200 dark:border-purple-500/30 m-0" />
            <span>${brandName}</span>
          </span>
          <span class="block text-base md:text-xl font-extrabold text-slate-900 dark:text-white leading-snug mt-0.5">${messageText}</span>
        </h3>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-3 shrink-0 w-full lg:w-[340px] pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200/40 dark:border-slate-700/30">
      <div class="flex items-center justify-center -space-x-2.5 py-1" title="${labels.avatarTitles?.fresh?.[lang] || 'Meet cute 3D fresh fruit & food characters'}">
        <img src="/images/freshself/fruits/apple.webp" alt="Apple Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-30 hover:scale-110 transition-transform bg-rose-50 dark:bg-rose-950/40 m-0" />
        <img src="/images/freshself/fruits/avocado.webp" alt="Avocado Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-20 hover:scale-110 transition-transform bg-emerald-50 dark:bg-emerald-950/40 m-0" />
        <img src="/images/freshself/fruits/banana.webp" alt="Banana Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-10 hover:scale-110 transition-transform bg-amber-50 dark:bg-amber-950/40 m-0" />
        <img src="/images/freshself/fruits/strawberry.webp" alt="Strawberry Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform bg-red-50 dark:bg-red-950/40 m-0" />
        <img src="/images/freshself/fruits/orange.webp" alt="Orange Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform bg-orange-50 dark:bg-orange-950/40 m-0" />
        <img src="/images/freshself/fruits/broccoli.webp" alt="Broccoli Buddy" class="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-white dark:border-slate-800 object-cover shadow-md z-0 hover:scale-110 transition-transform bg-green-50 dark:bg-green-950/40 m-0" />
      </div>
      <div class="flex items-center justify-center w-full">
        <a href="${playStoreLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 focus:outline-none focus:ring-4 shadow-sm hover:shadow hover:scale-[1.01] active:scale-[0.99] text-center whitespace-nowrap w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500/20 no-underline">
          <img src="/images/google_play_icon.webp" alt="Google Play Icon" class="w-4 h-4 sm:w-5 sm:h-5 shrink-0 object-contain drop-shadow-sm m-0" />
          <span class="whitespace-nowrap">${download}</span>
        </a>
      </div>
      <div class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 text-center w-full max-w-[320px] leading-relaxed px-1">
        ${subtext}
      </div>
    </div>
  </div>
</div>`;
}

export function getPetLabels() {
  return labels;
}
