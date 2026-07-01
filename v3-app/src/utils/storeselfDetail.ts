// StoreSelf Detail Page Client-side script
import { StoreSelfCalendar } from './storeself/calendar';
import { updateDDayCalculator } from './storeself/dday';

const appEl = document.getElementById('storeself-detail-app');
if (appEl) {
  const currentItem = JSON.parse(appEl.getAttribute('data-item') || '{}');
  const currentLang = appEl.getAttribute('data-lang') || 'en';
  const localTranslations = JSON.parse(appEl.getAttribute('data-local-translations') || '{}');
  const sourceTranslations = JSON.parse(appEl.getAttribute('data-source-translations') || '{}');
  const initialBuyDateStr = appEl.getAttribute('data-initial-buy-date-str') || '';

  let storageDuration = 0;

  const tabs = document.querySelectorAll('.method-tab');
  const daysCount = document.getElementById('daysCount');
  const daysUnit = document.getElementById('daysUnit');
  const gaugeFill = document.getElementById('gaugeFill');
  const tipsContainer = document.getElementById('tipsContainer');
  const buyDateInput = document.getElementById('buyDate') as HTMLInputElement;
  const inlineNudge = document.getElementById('inlineNudge');

  // Date parsing
  const dateParts = initialBuyDateStr.split('-');
  let selectedDate = new Date(parseInt(dateParts[0], 10), parseInt(dateParts[1], 10) - 1, parseInt(dateParts[2], 10));

  const buyDateTrigger = document.getElementById('buyDateTrigger');
  const buyDateFormatted = document.getElementById('buyDateFormatted');
  const customCalendarPopover = document.getElementById('customCalendarPopover');
  const prevMonthBtn = document.getElementById('prevMonthBtn');
  const nextMonthBtn = document.getElementById('nextMonthBtn');
  const currentMonthYear = document.getElementById('currentMonthYear');
  const calendarDaysGrid = document.getElementById('calendarDaysGrid');
  const presetChips = document.querySelectorAll('.preset-chip');

  const updateDateDisplay = () => {
    if (!buyDateInput || !buyDateFormatted) return;
    const y = selectedDate.getFullYear();
    const m = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const d = String(selectedDate.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    buyDateInput.value = dateStr;
    
    buyDateFormatted.textContent = selectedDate.toLocaleDateString(currentLang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper functions for translation in local UI elements
  const translate = (key: string, variables: Record<string, string> = {}) => {
    let text = localTranslations[currentLang]?.[key] || localTranslations['en']?.[key] || key;
    Object.entries(variables).forEach(([k, val]) => {
      text = text.replace(`{${k}}`, val);
    });
    return text;
  };

  const translateSource = (key: string) => {
    return sourceTranslations[currentLang]?.[key] || sourceTranslations['en']?.[key] || key;
  };

  const getDaysTranslation = (days: number) => {
    return days === 1 ? translate('detail.days') : translate('detail.days.plural');
  };

  const triggerDDayCalculator = () => {
    updateDDayCalculator({
      storageDuration,
      buyDateInputValue: buyDateInput?.value || '',
      currentLang,
      localTranslations,
      calcEatUntil: document.getElementById('calcEatUntil'),
      calcDDay: document.getElementById('calcDDay'),
      feedbackCard: document.getElementById('resultFeedbackCard'),
      inlineNudge,
      ingredientImage: document.getElementById('ingredientImage'),
      ingredientEmoji: document.getElementById('ingredientEmoji')
    });
  };

  // Initialize Custom Calendar component
  const calendar = new StoreSelfCalendar({
    currentLang,
    selectedDate,
    onDateSelect: (date) => {
      selectedDate = date;
      updateDateDisplay();
      triggerDDayCalculator();
    },
    buyDateTrigger,
    customCalendarPopover,
    prevMonthBtn,
    nextMonthBtn,
    currentMonthYear,
    calendarDaysGrid
  });

  updateDateDisplay();

  const switchMethod = (method: string) => {
    const guide = currentItem.storage[method];
    storageDuration = guide?.durationDays || 0;

    // Update Active Tab styles
    tabs.forEach((tab) => {
      if (tab.getAttribute('data-method') === method) {
        tab.classList.add('active-tab', 'bg-emerald-600', 'text-white', 'border-emerald-600', 'shadow-md', 'shadow-emerald-600/15');
        tab.classList.remove('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-700', 'dark:text-slate-300');
      } else {
        tab.classList.remove('active-tab', 'bg-emerald-600', 'text-white', 'border-emerald-600', 'shadow-md', 'shadow-emerald-600/15');
        const isDisabled = tab.hasAttribute('disabled');
        if (!isDisabled) {
          tab.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-700', 'dark:text-slate-300');
        }
      }
    });

    // Update days counters & Gauge
    if (daysCount) {
      daysCount.textContent = storageDuration === 9999
        ? (({ ko: '무기한', en: 'Infinite', ja: '無期限', zh: '无期限', es: 'Indefinido', fr: 'Indéfini', de: 'Unbegrenzt', pt: 'Indefinido', id: 'Selamanya' } as Record<string, string>)[currentLang] || 'Infinite')
        : String(storageDuration);
    }
    if (daysUnit) {
      daysUnit.textContent = storageDuration === 9999 ? '' : getDaysTranslation(storageDuration);
    }
    
    if (gaugeFill) {
      const percentage = storageDuration === 9999 ? 100 : Math.min(100, (storageDuration / 45) * 100);
      (gaugeFill as HTMLElement).style.width = `${percentage}%`;
      
      gaugeFill.className = 'h-full rounded-full transition-all duration-700 ease-out shadow-[0_1px_2px_rgba(0,0,0,0.15)]';
      if (storageDuration === 9999) {
        gaugeFill.classList.add('bg-gradient-to-r', 'from-emerald-400', 'to-blue-500');
      } else if (storageDuration <= 7) {
        gaugeFill.classList.add('bg-gradient-to-r', 'from-amber-400', 'to-orange-500');
      } else if (storageDuration <= 30) {
        gaugeFill.classList.add('bg-gradient-to-r', 'from-emerald-500', 'to-teal-500');
      } else {
        gaugeFill.classList.add('bg-gradient-to-r', 'from-teal-500', 'to-blue-500');
      }
    }

    // Update tips description
    if (tipsContainer && guide) {
      const tipText = guide.tips[currentLang] || guide.tips['en'];
      tipsContainer.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-500/10 opacity-0 transition-opacity duration-300" id="tipTextWrapper">
          <p class="font-semibold text-slate-700 dark:text-slate-200">${tipText}</p>
        </div>
      `;
      setTimeout(() => {
        const wrapper = document.getElementById('tipTextWrapper');
        if (wrapper) wrapper.classList.replace('opacity-0', 'opacity-100');
      }, 50);
    }

    // Update sources list
    const sourcesContainer = document.getElementById('sourcesContainer');
    if (sourcesContainer) {
      if (guide && guide.sources && guide.sources.length > 0) {
        const sourceLabels = guide.sources.map((src: string) => {
          return `<span class="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 px-2 py-0.5 rounded-md font-bold text-emerald-800 dark:text-emerald-300">${translateSource('source.' + src)}</span>`;
        }).join('');
        sourcesContainer.innerHTML = `
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="font-bold mr-1">${translateSource('detail.source.label')}:</span>
            ${sourceLabels}
          </div>
        `;
        sourcesContainer.style.display = 'block';
      } else {
        sourcesContainer.style.display = 'none';
        sourcesContainer.innerHTML = '';
      }
    }

    // Recalculate D-day
    triggerDDayCalculator();
  };

  // Initialize method tab
  const getInitialMethod = () => {
    if (currentItem.storage.fridge && currentItem.storage.fridge.durationDays > 0) return 'fridge';
    if (currentItem.storage.room && currentItem.storage.room.durationDays > 0) return 'room';
    if (currentItem.storage.freezer && currentItem.storage.freezer.durationDays > 0) return 'freezer';
    return currentItem.storage.fridge ? 'fridge' : (currentItem.storage.room ? 'room' : 'freezer');
  };
  const initialRecMethod = getInitialMethod();
  switchMethod(initialRecMethod);

  // Tab click listeners
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-method') || '';
      if (target) switchMethod(target);
    });
  });

  // Preset chips listeners
  presetChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const offset = parseInt(chip.getAttribute('data-preset') || '0', 10);
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - offset);
      selectedDate = targetDate;
      updateDateDisplay();
      calendar.setSelectedDate(selectedDate);
      triggerDDayCalculator();
    });
  });

  buyDateInput?.addEventListener('input', triggerDDayCalculator);

  // Spatial Glow effect
  document.querySelectorAll('.bento-card').forEach((card) => {
    let glow = card.querySelector('.bento-glow');
    if (!glow) {
      glow = document.createElement('div');
      glow.className = 'bento-glow';
      card.prepend(glow);
    }
    
    card.addEventListener('mousemove', (e: any) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (glow as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (glow as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
