// StoreSelf Detail Page Client-side script

const appEl = document.getElementById('storeself-detail-app');
if (appEl) {
  const currentItem = JSON.parse(appEl.getAttribute('data-item') || '{}');
  const currentLang = appEl.getAttribute('data-lang') || 'en';
  const localTranslations = JSON.parse(appEl.getAttribute('data-local-translations') || '{}');
  const sourceTranslations = JSON.parse(appEl.getAttribute('data-source-translations') || '{}');
  const initialBuyDateStr = appEl.getAttribute('data-initial-buy-date-str') || '';

  // Client-side Tab and Slider calculation scripts
  let storageDuration = 0;

  const tabs = document.querySelectorAll('.method-tab');
  const daysCount = document.getElementById('daysCount');
  const daysUnit = document.getElementById('daysUnit');
  const gaugeFill = document.getElementById('gaugeFill');
  const tipsContainer = document.getElementById('tipsContainer');
  const buyDateInput = document.getElementById('buyDate') as HTMLInputElement;
  const inlineNudge = document.getElementById('inlineNudge');

  // Hybrid Custom Calendar State
  const dateParts = initialBuyDateStr.split('-');
  let selectedDate = new Date(parseInt(dateParts[0], 10), parseInt(dateParts[1], 10) - 1, parseInt(dateParts[2], 10));
  let displayedYear = selectedDate.getFullYear();
  let displayedMonth = selectedDate.getMonth();

  const buyDateTrigger = document.getElementById('buyDateTrigger');
  const buyDateFormatted = document.getElementById('buyDateFormatted');
  const customCalendarPopover = document.getElementById('customCalendarPopover');
  const prevMonthBtn = document.getElementById('prevMonthBtn');
  const nextMonthBtn = document.getElementById('nextMonthBtn');
  const currentMonthYear = document.getElementById('currentMonthYear');
  const calendarDaysGrid = document.getElementById('calendarDaysGrid');
  const presetChips = document.querySelectorAll('.preset-chip');

  const monthNames: Record<string, string[]> = {
    ko: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ja: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    zh: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  };

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

  const renderCustomCalendar = () => {
    if (!calendarDaysGrid || !currentMonthYear) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Disable next month button if we are showing the current or future month
    if (nextMonthBtn) {
      const isFutureMonth = displayedYear > today.getFullYear() || (displayedYear === today.getFullYear() && displayedMonth >= today.getMonth());
      if (isFutureMonth) {
        nextMonthBtn.classList.add('opacity-20', 'pointer-events-none');
      } else {
        nextMonthBtn.classList.remove('opacity-20', 'pointer-events-none');
      }
    }

    // Update Header Text
    const mList = monthNames[currentLang] || monthNames['en'];
    const monthStr = mList[displayedMonth];
    if (currentLang === 'ko' || currentLang === 'ja' || currentLang === 'zh') {
      currentMonthYear.textContent = `${displayedYear}년 ${monthStr}`;
    } else {
      currentMonthYear.textContent = `${monthStr} ${displayedYear}`;
    }

    calendarDaysGrid.innerHTML = '';

    const firstDayIndex = new Date(displayedYear, displayedMonth, 1).getDay();
    const totalDays = new Date(displayedYear, displayedMonth + 1, 0).getDate();
    const prevTotalDays = new Date(displayedYear, displayedMonth, 0).getDate();

    // Render Prev Month Padding
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = prevTotalDays - i;
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 dark:text-slate-600 font-medium select-none pointer-events-none opacity-40';
      cell.textContent = String(dayNum);
      calendarDaysGrid.appendChild(cell);
    }

    // Render Current Month Days
    for (let i = 1; i <= totalDays; i++) {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'w-8 h-8 flex items-center justify-center rounded-xl font-semibold cursor-pointer transition-all active:scale-90 select-none ';

      const cellDate = new Date(displayedYear, displayedMonth, i);
      const isFuture = cellDate > today;
      const isToday = today.getFullYear() === displayedYear && today.getMonth() === displayedMonth && today.getDate() === i;
      const isSelected = selectedDate.getFullYear() === displayedYear && selectedDate.getMonth() === displayedMonth && selectedDate.getDate() === i;

      if (isFuture) {
        cell.className += 'text-slate-300 dark:text-slate-700 opacity-20 pointer-events-none cursor-not-allowed';
      } else if (isSelected) {
        cell.className += 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-500 scale-[1.05]';
      } else if (isToday) {
        cell.className += 'border border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800';
      } else {
        cell.className += 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800';
      }

      cell.textContent = String(i);
      
      if (!isFuture) {
        cell.addEventListener('click', () => {
          selectedDate = new Date(displayedYear, displayedMonth, i);
          updateDateDisplay();
          renderCustomCalendar();
          closeCalendarPopover();
          updateDDayCalculator();
        });
      }

      calendarDaysGrid.appendChild(cell);
    }

    // Render Next Month Padding to fill 42 cells (6 rows)
    const currentCellsCount = firstDayIndex + totalDays;
    const nextMonthPadding = 42 - currentCellsCount;
    for (let i = 1; i <= nextMonthPadding; i++) {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 dark:text-slate-600 font-medium select-none pointer-events-none opacity-40';
      cell.textContent = String(i);
      calendarDaysGrid.appendChild(cell);
    }
  };

  const toggleCalendarPopover = () => {
    if (!customCalendarPopover) return;
    const isOpen = customCalendarPopover.classList.contains('opacity-100');
    if (isOpen) {
      closeCalendarPopover();
    } else {
      openCalendarPopover();
    }
  };

  const openCalendarPopover = () => {
    if (!customCalendarPopover) return;
    displayedYear = selectedDate.getFullYear();
    displayedMonth = selectedDate.getMonth();
    renderCustomCalendar();
    customCalendarPopover.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    customCalendarPopover.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
  };

  const closeCalendarPopover = () => {
    if (!customCalendarPopover) return;
    customCalendarPopover.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    customCalendarPopover.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  };

  // Initialize state
  updateDateDisplay();

  // Helper functions for translation
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

  const updateDDayCalculator = () => {
    const calcEatUntil = document.getElementById('calcEatUntil');
    const calcDDay = document.getElementById('calcDDay');
    const feedbackCard = document.getElementById('resultFeedbackCard');

    const clearResult = () => {
      if (calcEatUntil) calcEatUntil.textContent = '';
      if (calcDDay) calcDDay.textContent = '';
      if (feedbackCard) {
        feedbackCard.className = "p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between min-h-[90px] transition-all duration-300";
      }
    };

    if (!buyDateInput || !buyDateInput.value) {
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

    // YYYY-MM-DD 문자열을 로컬 타임존 기준으로 안전하게 파싱 (UTC 타임존 왜곡 방지)
    const dateParts = buyDateInput.value.split('-');
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
    
    const effectiveDuration = storageDuration;
    
    const expireDate = new Date(buyDate);
    expireDate.setDate(buyDate.getDate() + effectiveDuration);

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

    // 구매일이 미래인 경우, D-Day 기준일을 오늘이 아닌 구매일로 적용하여 보관 기간 왜곡 방지
    const referenceDate = buyDate > today ? buyDate : today;
    const timeDiff = expireDate.getTime() - referenceDate.getTime();
    // 정확한 정수 일수 계산을 위해 Math.round 적용
    const diffDays = Math.round(timeDiff / (1000 * 3600 * 24));

    // D-Day 감성 이모지 바운스 리액션 및 카드 보더 틴트 변경
    const imgEl = document.getElementById('ingredientImage');
    const emojiEl = document.getElementById('ingredientEmoji');
    const targetIcon = imgEl || emojiEl;

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
  };

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
      
      // 게이지 색상 그라데이션 동적 조절
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

    // Update sources list (고대비 가시성 뱃지로 렌더링)
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
    updateDDayCalculator();
  };

  // Initialize state
  const getInitialMethod = () => {
    if (currentItem.storage.fridge && currentItem.storage.fridge.durationDays > 0) return 'fridge';
    if (currentItem.storage.room && currentItem.storage.room.durationDays > 0) return 'room';
    if (currentItem.storage.freezer && currentItem.storage.freezer.durationDays > 0) return 'freezer';
    return currentItem.storage.fridge ? 'fridge' : (currentItem.storage.room ? 'room' : 'freezer');
  };
  const initialRecMethod = getInitialMethod();
  switchMethod(initialRecMethod);

  // Event listeners
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-method') || '';
      if (target) switchMethod(target);
    });
  });

  buyDateTrigger?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCalendarPopover();
  });

  prevMonthBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    displayedMonth--;
    if (displayedMonth < 0) {
      displayedMonth = 11;
      displayedYear--;
    }
    renderCustomCalendar();
  });

  nextMonthBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    displayedMonth++;
    if (displayedMonth > 11) {
      displayedMonth = 0;
      displayedYear++;
    }
    renderCustomCalendar();
  });

  // Preset chips event listeners
  presetChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const offset = parseInt(chip.getAttribute('data-preset') || '0', 10);
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - offset);
      selectedDate = targetDate;
      displayedYear = selectedDate.getFullYear();
      displayedMonth = selectedDate.getMonth();
      updateDateDisplay();
      renderCustomCalendar();
      closeCalendarPopover();
      updateDDayCalculator();
    });
  });

  // Close calendar when clicking outside
  document.addEventListener('click', (e) => {
    if (customCalendarPopover && !customCalendarPopover.contains(e.target as Node) && buyDateTrigger && !buyDateTrigger.contains(e.target as Node)) {
      closeCalendarPopover();
    }
  });

  // Hidden input change listener (for absolute compatibility)
  buyDateInput?.addEventListener('input', updateDDayCalculator);

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
