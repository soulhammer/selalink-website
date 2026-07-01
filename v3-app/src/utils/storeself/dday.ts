export interface DDayCalculatorOptions {
  storageDuration: number;
  buyDateInputValue: string;
  currentLang: string;
  localTranslations: Record<string, any>;
  calcEatUntil: HTMLElement | null;
  calcDDay: HTMLElement | null;
  feedbackCard: HTMLElement | null;
  inlineNudge?: HTMLElement | null;
  ingredientImage?: HTMLElement | null;
  ingredientEmoji?: HTMLElement | null;
}

export function updateDDayCalculator(options: DDayCalculatorOptions) {
  const {
    storageDuration,
    buyDateInputValue,
    currentLang,
    localTranslations,
    calcEatUntil,
    calcDDay,
    feedbackCard,
    inlineNudge,
    ingredientImage,
    ingredientEmoji
  } = options;

  const translate = (key: string, variables: Record<string, string> = {}) => {
    let text = localTranslations[currentLang]?.[key] || localTranslations['en']?.[key] || key;
    Object.entries(variables).forEach(([k, val]) => {
      text = text.replace(`{${k}}`, val);
    });
    return text;
  };

  const getDaysTranslation = (days: number) => {
    return days === 1 ? translate('detail.days') : translate('detail.days.plural');
  };

  const clearResult = () => {
    if (calcEatUntil) calcEatUntil.textContent = '';
    if (calcDDay) calcDDay.textContent = '';
    if (feedbackCard) {
      feedbackCard.className = "p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between min-h-[90px] transition-all duration-300";
    }
  };

  if (!buyDateInputValue) {
    clearResult();
    return;
  }

  // 보관 권장 기간이 0인 경우 (비권장 보관법)
  if (storageDuration === 0) {
    if (calcEatUntil) calcEatUntil.textContent = '';
    if (calcDDay) {
      calcDDay.textContent = translate('detail.not_recommended');
      calcDDay.className = 'text-base font-bold text-rose-600 dark:text-rose-400 leading-snug';
    }
    if (inlineNudge) {
      inlineNudge.classList.remove('opacity-100', 'translate-y-0');
      inlineNudge.classList.add('opacity-0', 'translate-y-1', 'hidden');
    }
    if (feedbackCard) {
      feedbackCard.className = "p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/15 border border-rose-500/40 flex flex-col justify-between min-h-[90px] transition-all duration-300";
    }
    return;
  }

  if (storageDuration === 9999) {
    if (calcEatUntil) {
      const infUntilText = ({
        ko: '소비기한 없음', en: 'No Expiry Date', ja: '消費期限なし', zh: '无消费期限', es: 'Sin fecha de caducidad', fr: 'Pas de date de péremption', de: 'Kein Verfallsdatum', pt: 'Sem data de validade', id: 'Tidak ada tanggal kedaluwarsa'
      } as Record<string, string>)[currentLang] || 'No Expiry Date';
      calcEatUntil.textContent = infUntilText;
    }
    if (calcDDay) {
      const infLabel = ({
        ko: '무기한 보관 가능 ♾️', en: 'Stored Indefinitely ♾️', ja: '無期限保存可能 ♾️', zh: '可无期限保存 ♾️', es: 'Almacenado indefinidamente ♾️', fr: 'Stocké indéfiniment ♾️', de: 'Unbegrenzt haltbar ♾️', pt: 'Armazenado indefinidamente ♾️', id: 'Disimpan selamanya ♾️'
      } as Record<string, string>)[currentLang] || 'Stored Indefinitely ♾️';
      calcDDay.innerHTML = `🟢 ${infLabel}`;
      calcDDay.className = 'text-lg font-extrabold text-emerald-600 dark:text-emerald-400 leading-snug';
      if (feedbackCard) {
        feedbackCard.className = "p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-500/40 flex flex-col justify-between min-h-[90px] transition-all duration-300";
      }
    }
    return;
  }

  const dateParts = buyDateInputValue.split('-');
  if (dateParts.length !== 3) {
    clearResult();
    return;
  }

  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    clearResult();
    return;
  }

  const buyDate = new Date(year, month, day);
  if (isNaN(buyDate.getTime())) {
    clearResult();
    return;
  }
  
  const expireDate = new Date(buyDate);
  expireDate.setDate(buyDate.getDate() + storageDuration);

  // Expiry Date string rendering
  const expireDateStr = expireDate.toLocaleDateString(currentLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  if (calcEatUntil) {
    calcEatUntil.textContent = translate('detail.calc.eat_until', { date: expireDateStr });
  }

  // Calculate D-day
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  expireDate.setHours(0, 0, 0, 0);

  const referenceDate = buyDate > today ? buyDate : today;
  const timeDiff = expireDate.getTime() - referenceDate.getTime();
  const diffDays = Math.round(timeDiff / (1000 * 3600 * 24));

  // D-Day icon reaction
  const targetIcon = ingredientImage || ingredientEmoji;
  if (targetIcon) {
    targetIcon.classList.remove('animate-bounce');
    void targetIcon.offsetWidth; // Trigger reflow
    targetIcon.classList.add('animate-bounce');
    setTimeout(() => targetIcon.classList.remove('animate-bounce'), 1000);
  }

  if (calcDDay) {
    if (diffDays > 0) {
      calcDDay.innerHTML = `🟢 ${translate('detail.calc.dday', { dday: `D-${diffDays}` })}`;
      calcDDay.className = 'text-lg font-extrabold text-emerald-600 dark:text-emerald-400 leading-snug';
      if (feedbackCard) {
        feedbackCard.className = "p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-500/40 flex flex-col justify-between min-h-[90px] transition-all duration-300";
      }
    } else if (diffDays < 0) {
      calcDDay.innerHTML = `🔴 ${translate('detail.calc.dday_minus', { dday: `${Math.abs(diffDays)}${getDaysTranslation(Math.abs(diffDays))}` })}`;
      calcDDay.className = 'text-lg font-extrabold text-rose-600 dark:text-rose-400 leading-snug';
      if (feedbackCard) {
        feedbackCard.className = "p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/15 border border-rose-500/40 flex flex-col justify-between min-h-[90px] transition-all duration-300";
      }
    } else {
      calcDDay.innerHTML = `🟡 ${translate('detail.calc.dday_today')}`;
      calcDDay.className = 'text-lg font-extrabold text-amber-600 dark:text-amber-500 leading-snug';
      if (feedbackCard) {
        feedbackCard.className = "p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/15 border border-amber-500/40 flex flex-col justify-between min-h-[90px] transition-all duration-300";
      }
    }
  }
}
