import { matchHabit } from '../../../../utils/buildsnapMatcher';
import { buildsnapTranslations } from '../../../../i18n/buildsnapTranslations';

export interface BuildSnapConfig {
  habits: any[];
  currentLang: string;
  habitsTranslations?: Record<string, any>;
  runtimeTranslations: {
    routineSuffix: string;
    calendarSuffix: string;
    step1: string;
    step2: string;
    step3: string;
    canvasStep1: string;
    canvasStep2: string;
    canvasStep3: string;
    canvasBranding: string;
    timeMorning: string;
    timeAfternoon: string;
    timeEvening: string;
    timeNight: string;
    timeAnytime: string;
    statsBadge: string;
    statsBadgeNone: string;
    cycleGuide: string;
    toastReset: string;
  };
  eraMentors: {
    ancient: string[];
    renaissance: string[];
    earlyModern: string[];
    modern: string[];
    contemporary: string[];
  };
}

export function initBuildSnapUI(config: BuildSnapConfig) {
  const { habits, currentLang, runtimeTranslations, eraMentors, habitsTranslations } = config;

  const getTranslatedHabitField = (id: string | undefined, heroNameFallback: string, field: 'name' | 'habitName' | 'actionName', fallback: string) => {
    let targetId = id;
    if (!targetId && heroNameFallback) {
      const matched = habits.find((h: any) => h.name === heroNameFallback || (h.name && heroNameFallback && (h.name.includes(heroNameFallback) || heroNameFallback.includes(h.name))));
      if (matched) targetId = matched.id;
    }

    let transObj = targetId ? (habitsTranslations as any)?.[targetId] : null;

    // ID 미스매치 방지용 전수 heroName 역방향 매칭 (앙리 카르티에 브레송, 에픽테토스 등)
    if (!transObj && heroNameFallback) {
      const entries = Object.entries(habitsTranslations as any);
      for (const [, obj] of entries) {
        const itemObj: any = obj;
        if (
          itemObj?.ko?.name === heroNameFallback ||
          itemObj?.en?.name === heroNameFallback ||
          (itemObj?.ko?.name && heroNameFallback.includes(itemObj.ko.name)) ||
          (itemObj?.en?.name && heroNameFallback.includes(itemObj.en.name))
        ) {
          transObj = itemObj;
          break;
        }
      }
    }

    if (transObj && transObj[currentLang]) {
      const langObj = transObj[currentLang];
      let res = '';
      if (field === 'name' && langObj.name) res = langObj.name;
      else if (field === 'habitName' && langObj.habitName) res = langObj.habitName;
      else if (field === 'actionName') {
        res = langObj.actionName || langObj.quote || langObj.description || '';
      }

      if (res && (currentLang === 'ko' || !/[\uAC00-\uD7A3]/.test(res))) {
        return res;
      }
    }

    // 2차 영문 사전 폴백
    if (transObj && transObj.en) {
      const enObj = transObj.en;
      let enRes = '';
      if (field === 'name' && enObj.name) enRes = enObj.name;
      else if (field === 'habitName' && enObj.habitName) enRes = enObj.habitName;
      else if (field === 'actionName') enRes = enObj.actionName || enObj.quote || enObj.description || '';

      if (enRes && !/[\uAC00-\uD7A3]/.test(enRes)) {
        return enRes;
      }
    }

    if (targetId) {
      const habitObj = habits.find((h: any) => h.id === targetId);
      if (habitObj) {
        if (field === 'name' && habitObj.name) return habitObj.name;
        if (field === 'habitName' && habitObj.habitName) return habitObj.habitName;
        if (field === 'actionName' && (habitObj.actionName || habitObj.quote)) return habitObj.actionName || habitObj.quote;
      }
    }
    return fallback;
  };

  // ----------------------------------------------------
  // A. Stats Dashboard Accordion Toggle
  // ----------------------------------------------------
  const btnStatsToggle = document.getElementById('btnToggleStats') || document.getElementById('btnStatsToggle');
  const statsAccordionContent = document.getElementById('statsContainer') || document.getElementById('statsAccordionContent');
  const chevronStatsIcon = document.getElementById('chevronStatsIcon');
  const statsToggleArrow = document.getElementById('statsToggleArrow');

  if (btnStatsToggle && statsAccordionContent) {
    btnStatsToggle.addEventListener('click', () => {
      const isCollapsed = statsAccordionContent.classList.contains('hidden');
      if (isCollapsed) {
        statsAccordionContent.classList.remove('hidden');
        if (chevronStatsIcon) {
          chevronStatsIcon.classList.add('rotate-180');
        }
        if (statsToggleArrow) {
          statsToggleArrow.textContent = '▲'; // JSDOM test backward compatibility
        }
      } else {
        statsAccordionContent.classList.add('hidden');
        if (chevronStatsIcon) {
          chevronStatsIcon.classList.remove('rotate-180');
        }
        if (statsToggleArrow) {
          statsToggleArrow.textContent = '▼'; // JSDOM test backward compatibility
        }
      }
    });
  }

  // ----------------------------------------------------
  // B. stats visual highlight bindings (SVG wave & Hover)
  // ----------------------------------------------------
  const eraTooltip = document.getElementById('eraTooltip');
  const eraTooltipTitle = document.getElementById('eraTooltipTitle');
  const eraTooltipMentors = document.getElementById('eraTooltipMentors');
  const waveTimelineSvg = document.getElementById('waveTimelineSvg');
  const waveAreaPath = document.getElementById('waveAreaPath');
  const waveCurveLine = document.getElementById('waveCurveLine');

  let activeEraId: string | null = null;

  const updateEraHighlightState = () => {
    if (eraTooltip) eraTooltip.style.opacity = '0';
    const guide = document.getElementById('waveGuideline');
    if (guide) guide.remove();
    if (waveCurveLine) {
      waveCurveLine.setAttribute('stroke', '#8b5cf6');
      waveCurveLine.setAttribute('stroke-width', '3');
    }
    if (waveAreaPath) waveAreaPath.removeAttribute('fill-opacity');

    const eraTabs = [
      { id: 'lblAncient', dotId: 'dotAncient', x: '10', name: 'Ancient Era', mentors: eraMentors.ancient },
      { id: 'lblRenaissance', dotId: 'dotRenaissance', x: '105', name: 'Renaissance', mentors: eraMentors.renaissance },
      { id: 'lblEarlyModern', dotId: 'dotEarlyModern', x: '200', name: 'Early Modern', mentors: eraMentors.earlyModern },
      { id: 'lblModern', dotId: 'dotModern', x: '295', name: 'Modern Era', mentors: eraMentors.modern },
      { id: 'lblContemporary', dotId: 'dotContemporary', x: '390', name: 'Contemporary', mentors: eraMentors.contemporary }
    ];

    eraTabs.forEach(tab => {
      const dot = document.getElementById(tab.dotId);
      if (dot) {
        dot.setAttribute('r', '5.5');
        dot.classList.remove('fill-violet-400');
      }
      const lbl = document.getElementById(tab.id);
      if (lbl) {
        lbl.classList.remove('border-indigo-500', 'translate-y-[-2px]', 'text-indigo-600', 'dark:text-indigo-400');
        lbl.classList.add('border-slate-250', 'dark:border-slate-800', 'text-slate-500', 'dark:text-slate-400');
        const txtSpan = lbl.querySelector('.btn-text');
        if (txtSpan) txtSpan.classList.remove('text-indigo-600', 'dark:text-indigo-400');
      }
    });

    if (activeEraId) {
      const activeTab = eraTabs.find(t => t.id === activeEraId || t.dotId === activeEraId);
      if (activeTab && waveTimelineSvg) {
        const dot = document.getElementById(activeTab.dotId);
        if (dot) {
          dot.setAttribute('r', '12');
          dot.classList.add('fill-violet-400');
        }
        const lbl = document.getElementById(activeTab.id);
        if (lbl) {
          lbl.classList.add('border-indigo-500', 'translate-y-[-2px]', 'text-indigo-600', 'dark:text-indigo-400');
          lbl.classList.remove('border-slate-250', 'dark:border-slate-800', 'text-slate-500', 'dark:text-slate-400');
          const txtSpan = lbl.querySelector('.btn-text');
          if (txtSpan) txtSpan.classList.add('text-indigo-600', 'dark:text-indigo-400');
        }
        if (waveCurveLine) {
          waveCurveLine.setAttribute('stroke', '#a78bfa');
          waveCurveLine.setAttribute('stroke-width', '5');
        }
        if (waveAreaPath) waveAreaPath.setAttribute('fill-opacity', '0.65');

        let guide = document.getElementById('waveGuideline') as SVGLineElement | null;
        if (!guide) {
          const newGuide = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          newGuide.setAttribute('id', 'waveGuideline');
          newGuide.setAttribute('class', 'stroke-indigo-500/60 stroke-2');
          newGuide.setAttribute('stroke-dasharray', '5 4');
          if (waveTimelineSvg) {
            waveTimelineSvg.appendChild(newGuide);
          }
          guide = newGuide as SVGLineElement;
        }
        if (guide) {
          guide.setAttribute('x1', activeTab.x);
          guide.setAttribute('y1', '10');
          guide.setAttribute('x2', activeTab.x);
          guide.setAttribute('y2', '110');
        }

        const activeTxtSpan = lbl ? lbl.querySelector('.btn-text') : null;
        if (eraTooltipTitle) eraTooltipTitle.textContent = activeTxtSpan ? activeTxtSpan.textContent : activeTab.name;
        if (eraTooltipMentors) eraTooltipMentors.textContent = '';
        if (eraTooltip) eraTooltip.style.opacity = '1';
      }
    }
  };

  const setEraHighlight = (dotId: string, lblId: string, eraName: string, _mentorList: string[], xCoord: string, _yCoord: string) => {
    const dot = document.getElementById(dotId);
    if (dot) {
      dot.setAttribute('r', '12');
      dot.classList.add('fill-violet-400');
    }
    const lbl = document.getElementById(lblId);
    if (lbl) {
      lbl.classList.add('border-indigo-500', 'translate-y-[-2px]', 'text-indigo-600', 'dark:text-indigo-400');
      lbl.classList.remove('border-slate-250', 'dark:border-slate-800', 'text-slate-600', 'dark:text-slate-350');
      const txtSpan = lbl.querySelector('.btn-text');
      if (txtSpan) {
        txtSpan.classList.remove('text-slate-600', 'dark:text-slate-350');
        txtSpan.classList.add('text-indigo-600', 'dark:text-indigo-400');
      }
    }
    if (waveCurveLine) {
      waveCurveLine.setAttribute('stroke', '#a78bfa');
      waveCurveLine.setAttribute('stroke-width', '5');
    }
    if (waveAreaPath) waveAreaPath.setAttribute('fill-opacity', '0.65');

    let guide = document.getElementById('waveGuideline') as SVGLineElement | null;
    if (!guide && waveTimelineSvg) {
      const newGuide = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      newGuide.setAttribute('id', 'waveGuideline');
      newGuide.setAttribute('class', 'stroke-indigo-500/60 stroke-2');
      newGuide.setAttribute('stroke-dasharray', '5 4');
      waveTimelineSvg.appendChild(newGuide);
      guide = newGuide as SVGLineElement;
    }
    if (guide) {
      guide.setAttribute('x1', xCoord);
      guide.setAttribute('y1', '10');
      guide.setAttribute('x2', xCoord);
      guide.setAttribute('y2', '110');
    }

    const activeTxtSpan = lbl ? lbl.querySelector('.btn-text') : null;
    if (eraTooltipTitle) eraTooltipTitle.textContent = activeTxtSpan ? activeTxtSpan.textContent : eraName;
    if (eraTooltipMentors) eraTooltipMentors.textContent = '';
    if (eraTooltip) eraTooltip.style.opacity = '1';
  };

  const resetEraHighlight = (dotId: string, lblId: string) => {
    const dot = document.getElementById(dotId);
    if (dot) {
      dot.setAttribute('r', '5.5');
      dot.classList.remove('fill-violet-400');
    }
    const lbl = document.getElementById(lblId);
    if (lbl) {
      lbl.classList.remove('border-indigo-500', 'translate-y-[-2px]', 'text-indigo-600', 'dark:text-indigo-400');
      lbl.classList.add('border-slate-250', 'dark:border-slate-800', 'text-slate-600', 'dark:text-slate-350');
      const txtSpan = lbl.querySelector('.btn-text');
      if (txtSpan) txtSpan.classList.remove('text-indigo-600', 'dark:text-indigo-400');
    }
    if (waveCurveLine) {
      waveCurveLine.setAttribute('stroke', '#8b5cf6');
      waveCurveLine.setAttribute('stroke-width', '3');
    }
    if (waveAreaPath) waveAreaPath.removeAttribute('fill-opacity');
    const guide = document.getElementById('waveGuideline');
    if (guide) guide.remove();
    if (eraTooltip) eraTooltip.style.opacity = '0';
  };

  const bindEraEvent = (dotId: string, lblId: string, eraName: string, mentorList: string[], xCoord: string, yCoord: string) => {
    const dot = document.getElementById(dotId);
    const lbl = document.getElementById(lblId);
    const enterHandler = () => { if (activeEraId) return; setEraHighlight(dotId, lblId, eraName, mentorList, xCoord, yCoord); };
    const leaveHandler = () => { if (activeEraId) return; resetEraHighlight(dotId, lblId); };

    if (dot) {
      dot.addEventListener('mouseenter', enterHandler);
      dot.addEventListener('mouseleave', leaveHandler);
      dot.addEventListener('click', () => {
        activeEraId = activeEraId === dotId ? null : dotId;
        updateEraHighlightState();
      });
    }
    if (lbl) {
      lbl.addEventListener('mouseenter', enterHandler);
      lbl.addEventListener('mouseleave', leaveHandler);
      lbl.addEventListener('click', () => {
        activeEraId = activeEraId === lblId ? null : lblId;
        updateEraHighlightState();
      });
    }
  };

  bindEraEvent('dotAncient', 'lblAncient', 'Ancient Era', eraMentors.ancient, '10', '85');
  bindEraEvent('dotRenaissance', 'lblRenaissance', 'Renaissance', eraMentors.renaissance, '105', '100');
  bindEraEvent('dotEarlyModern', 'lblEarlyModern', 'Early Modern', eraMentors.earlyModern, '200', '92');
  bindEraEvent('dotModern', 'lblModern', 'Modern Era', eraMentors.modern, '295', '20');
  bindEraEvent('dotContemporary', 'lblContemporary', 'Contemporary', eraMentors.contemporary, '390', '75');


  // ----------------------------------------------------
  // C. Matcher Wizard & Step Slider Logic (1문 1답)
  // ----------------------------------------------------
  let currentStep = 1;
  const wizardSlider = document.getElementById('wizardSlider');
  const btnPrevStep = document.getElementById('btnPrevStep') as HTMLButtonElement;
  const btnNextStep = document.getElementById('btnNextStep') as HTMLButtonElement;
  const btnDiagnose = document.getElementById('btnDiagnose') as HTMLButtonElement;

  // Wizard State variables
  let selectedAge = 'adult';
  let selectedGender = 'all';
  let selectedQ1 = 'focus';
  let selectedQ2 = 'mental';
  let selectedQ3 = 'easy';

  // 헬퍼: 버튼 활성화/비활성화 클래스 및 보더 관리
  const updateButtonSelection = (buttons: NodeListOf<Element> | Element[], activeBtn: Element, activeClasses: string[], defaultClasses: string[]) => {
    buttons.forEach(btn => {
      if (btn === activeBtn) {
        btn.classList.add('active-btn');
        defaultClasses.forEach(c => btn.classList.remove(c));
        activeClasses.forEach(c => btn.classList.add(c));
      } else {
        btn.classList.remove('active-btn');
        activeClasses.forEach(c => btn.classList.remove(c));
        defaultClasses.forEach(c => btn.classList.add(c));
      }
    });
  };

  const updateStepUI = () => {
    if (!wizardSlider || !btnPrevStep || !btnNextStep || !btnDiagnose) return;

    // Slide transform logic
    const translateX = -(currentStep - 1) * 50;
    wizardSlider.style.transform = `translateX(${translateX}%)`;

    // Update indicators
    for (let i = 1; i <= 2; i++) {
      const indicator = document.getElementById(`indicator${i}`);
      if (indicator) {
        if (i === currentStep) {
          indicator.className = 'w-8 h-2 rounded-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300';
        } else {
          indicator.className = 'w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 transition-all duration-300';
        }
      }
    }

    // Button visibility
    if (currentStep === 1) {
      btnPrevStep.classList.add('invisible');
      btnNextStep.classList.remove('hidden');
      btnDiagnose.classList.add('hidden');
    } else {
      btnPrevStep.classList.remove('invisible');
      btnNextStep.classList.add('hidden');
      btnDiagnose.classList.remove('hidden');
    }
  };

  if (btnPrevStep && btnNextStep) {
    btnPrevStep.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepUI();
        if (resultContainer) resultContainer.classList.add('hidden');
        if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
        if (matcherWaitingGuide) matcherWaitingGuide.classList.remove('hidden');
      }
    });
    btnNextStep.addEventListener('click', () => {
      if (currentStep < 2) {
        currentStep++;
        updateStepUI();
      }
    });
  }

  // Step 1: Age group click handler
  const ageButtons = document.querySelectorAll('.age-btn');
  ageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(ageButtons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedAge = btn.getAttribute('data-age') || 'adult';
      if (resultContainer) resultContainer.classList.add('hidden');
      if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    });
  });

  // Step 1: Gender click handler
  const genderButtons = document.querySelectorAll('.gender-btn');
  genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(genderButtons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedGender = btn.getAttribute('data-gender') || 'all';
      if (resultContainer) resultContainer.classList.add('hidden');
      if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    });
  });

  // Step 2: Q1, Q2 & Q3 click handler
  const q1Buttons = document.querySelectorAll('.q1-btn');
  q1Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(q1Buttons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedQ1 = btn.getAttribute('data-q1') || 'focus';
      if (resultContainer) resultContainer.classList.add('hidden');
      if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    });
  });

  const q2Buttons = document.querySelectorAll('.q2-btn');
  q2Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(q2Buttons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedQ2 = btn.getAttribute('data-q2') || 'mental';
      if (resultContainer) resultContainer.classList.add('hidden');
      if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    });
  });

  const q3Buttons = document.querySelectorAll('.q3-btn');
  q3Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(q3Buttons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedQ3 = btn.getAttribute('data-q3') || 'easy';
      if (resultContainer) resultContainer.classList.add('hidden');
      if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    });
  });


  // ----------------------------------------------------
  // D. Scored Matcher & LocalStorage Exposures Integration
  // ----------------------------------------------------
  const resultContainer = document.getElementById('resultContainer') as HTMLDivElement;
  const matcherEmptyState = document.getElementById('matcherEmptyState') as HTMLDivElement;
  const matcherWaitingGuide = document.getElementById('matcherWaitingGuide') as HTMLDivElement;
  
  const resultHeroImage = document.getElementById('resultHeroImage') as HTMLImageElement;
  const resultMentorName = document.getElementById('resultMentorName');
  const resultHabitName = document.getElementById('resultHabitName');
  const resultHabitQuote = document.getElementById('resultHabitQuote');
  const btnReadStory = document.getElementById('btnReadStory') as HTMLAnchorElement;
  const matcherStatsBadge = document.getElementById('matcherStatsBadge') as HTMLDivElement;
  const matcherCycleGuide = document.getElementById('matcherCycleGuide') as HTMLDivElement;
  
  const btnShuffle = document.getElementById('btnShuffle') as HTMLButtonElement;
  const btnResetHistory = document.getElementById('btnResetHistory') as HTMLButtonElement;
  const quickFilterChips = document.getElementById('quickFilterChips') as HTMLDivElement;

  let currentPool: any[] = [];
  let currentIndex = 0;

  // LocalStorage Helper for show count exposures tracking
  const getExposures = (): Record<string, number> => {
    try {
      return JSON.parse(localStorage.getItem('selalink_buildsnap_exposures') || '{}');
    } catch (e) {
      return {};
    }
  };

  const recordExposure = (id: string) => {
    try {
      const exposures = getExposures();
      exposures[id] = (exposures[id] || 0) + 1;
      localStorage.setItem('selalink_buildsnap_exposures', JSON.stringify(exposures));
    } catch (e) {
      // ignore
    }
  };

  // Client-side i18n translation helper
  const clientTranslations = buildsnapTranslations[currentLang] || buildsnapTranslations['ko'] || {};
  const tClient = (key: string) => {
    return clientTranslations[key] || key;
  };

  // 2. Render Tuning Chips dynamically
  const renderTuningChips = () => {
    if (!quickFilterChips) return;
    quickFilterChips.innerHTML = '';

    const getQ1Key = (val: string) => {
      if (val === 'focus') return 'buildsnap.matcher.q1.a';
      if (val === 'creative') return 'buildsnap.matcher.q1.b';
      if (val === 'simplicity') return 'buildsnap.matcher.q1.c';
      if (val === 'mind') return 'buildsnap.matcher.q1.d';
      return val;
    };

    const getQ2Key = (val: string) => {
      if (val === 'physical') return 'buildsnap.matcher.q2.a';
      if (val === 'mental') return 'buildsnap.matcher.q2.b';
      return val;
    };

    const getQ3Key = (val: string) => {
      if (val === 'easy') return 'buildsnap.matcher.q3.a';
      if (val === 'hard') return 'buildsnap.matcher.q3.b';
      return val;
    };

    const chips = [
      { label: `#${tClient(`buildsnap.matcher.age.${selectedAge}`)}`, type: 'age' },
      { label: `#${tClient(`buildsnap.matcher.gender.${selectedGender}`)}`, type: 'gender' },
      { label: `#${tClient(getQ1Key(selectedQ1))}`, type: 'q1' },
      { label: `#${tClient(getQ2Key(selectedQ2))}`, type: 'q2' },
      { label: `#${tClient(getQ3Key(selectedQ3))}`, type: 'q3' }
    ];

    chips.forEach(chip => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 select-none shadow-sm cursor-pointer hover:bg-indigo-600 hover:text-white hover:border-indigo-600 active:scale-95 transition-all';
      el.textContent = chip.label;

      el.addEventListener('click', () => {
        if (chip.type === 'age') {
          selectedAge = selectedAge === 'kids' ? 'adult' : selectedAge === 'adult' ? 'silver' : 'kids';
          const targetBtn = document.querySelector(`.age-btn[data-age="${selectedAge}"]`);
          if (targetBtn) updateButtonSelection(ageButtons, targetBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
        } else if (chip.type === 'gender') {
          selectedGender = selectedGender === 'all' ? 'male' : selectedGender === 'male' ? 'female' : 'all';
          const targetBtn = document.querySelector(`.gender-btn[data-gender="${selectedGender}"]`);
          if (targetBtn) updateButtonSelection(genderButtons, targetBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
        } else if (chip.type === 'q1') {
          const q1Pool = ['focus', 'creative', 'simplicity', 'mind'];
          const nextIdx = (q1Pool.indexOf(selectedQ1) + 1) % q1Pool.length;
          selectedQ1 = q1Pool[nextIdx];
          const targetBtn = document.querySelector(`.q1-btn[data-q1="${selectedQ1}"]`);
          if (targetBtn) updateButtonSelection(q1Buttons, targetBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
        } else if (chip.type === 'q2') {
          selectedQ2 = selectedQ2 === 'mental' ? 'physical' : 'mental';
          const targetBtn = document.querySelector(`.q2-btn[data-q2="${selectedQ2}"]`);
          if (targetBtn) updateButtonSelection(q2Buttons, targetBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
        } else if (chip.type === 'q3') {
          selectedQ3 = selectedQ3 === 'easy' ? 'hard' : 'easy';
          const targetBtn = document.querySelector(`.q3-btn[data-q3="${selectedQ3}"]`);
          if (targetBtn) updateButtonSelection(q3Buttons, targetBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
        }

        // 실시간 업데이트 리프레시
        triggerDiagnose(false);
      });

      quickFilterChips.appendChild(el);
    });
  };

  const triggerDiagnose = (isShuffle = false) => {
    const exposures = getExposures();

    currentPool = matchHabit(
      habits,
      selectedQ1,
      selectedQ2,
      selectedQ3,
      selectedAge,
      selectedGender,
      exposures
    );

    if (!isShuffle) {
      currentIndex = 0;
    }

    if (currentPool.length > 0) {
      if (currentIndex >= currentPool.length) {
        currentIndex = 0;
      }
      const item = currentPool[currentIndex];

      // Translate habit data dynamic text properties
      const transObj = habitsTranslations ? (habitsTranslations as any)[item.id]?.[currentLang] : null;
      const mentorName = transObj?.name || item.name;
      const mentorLocation = transObj?.location || item.location;
      const mentorHabitName = transObj?.habitName || item.habitName;
      const mentorQuote = transObj?.quote || item.quote;

      recordExposure(item.id);

      if (resultHeroImage) {
        resultHeroImage.src = `/images/blog/${item.id.replace(/-/g, '_')}.webp`;
      }
      if (resultMentorName) {
        resultMentorName.textContent = mentorName;
      }
      if (resultHabitName) {
        resultHabitName.innerHTML = '';
        
        const eraStr = (item.era || '').toLowerCase();
        const eraKey = eraStr.includes('early') || eraStr.includes('근세') ? 'earlyModern' 
          : eraStr.includes('renaissance') || eraStr.includes('르네상스') ? 'renaissance'
          : eraStr.includes('modern') || eraStr.includes('근대') ? 'modern'
          : eraStr.includes('contemporary') || eraStr.includes('현대') ? 'contemporary'
          : 'ancient';
        const eraLabel = tClient(`buildsnap.era.${eraKey}`);
        const eraBadge = document.createElement('span');
        eraBadge.className = 'era-badge mr-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800/40';
        eraBadge.textContent = eraLabel;

        const locBadge = document.createElement('span');
        locBadge.className = 'loc-badge bg-slate-100 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700/30';
        locBadge.textContent = mentorLocation;

        const titleEl = document.createElement('span');
        titleEl.className = 'mt-2.5 block text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-100';
        titleEl.textContent = mentorHabitName;

        resultHabitName.appendChild(eraBadge);
        resultHabitName.appendChild(locBadge);
        resultHabitName.appendChild(titleEl);
      }
      if (resultHabitQuote) {
        resultHabitQuote.textContent = `"${mentorQuote || 'No record quote for this mentor.'}"`;
      }
      if (btnReadStory) {
        btnReadStory.href = `/${currentLang}/blog/${item.id}/`;
      }

      if (matcherStatsBadge) {
        matcherStatsBadge.textContent = runtimeTranslations.statsBadge.replace('$1', currentPool.length.toString());
      }
      if (matcherCycleGuide) {
        if (currentPool.length > 1) {
          matcherCycleGuide.classList.remove('hidden');
          matcherCycleGuide.textContent = runtimeTranslations.cycleGuide
            .replace('$1', (currentIndex + 1).toString())
            .replace('$2', currentPool.length.toString());
        } else {
          matcherCycleGuide.classList.add('hidden');
        }
      }

      renderTuningChips();

      // 대기화면 숨기고 결과카드 활성화
      if (matcherWaitingGuide) matcherWaitingGuide.classList.add('hidden');
      if (resultContainer) {
        resultContainer.classList.remove('hidden');
        
        // 반응형 최적화: 모바일 기기(1024px 미만)에서만 결과 카드로 부드러운 타겟 오토 스크롤 포커싱 적용
        if (window.innerWidth < 1024 && typeof resultContainer.scrollIntoView === 'function') {
          resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    } else {
      if (resultContainer) resultContainer.classList.add('hidden');
      if (matcherWaitingGuide) matcherWaitingGuide.classList.add('hidden');
      if (matcherEmptyState) matcherEmptyState.classList.remove('hidden');
    }
  };

  if (btnDiagnose) {
    btnDiagnose.addEventListener('click', () => {
      triggerDiagnose(false);
    });
  }

  // 나의 습관 실천 현황 개인화 대시보드 동적 연산 및 렌더링 함수
  const renderMyPersonalStats = () => {
    const curCanvas = JSON.parse(localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
    const todayStr = new Date().toISOString().split('T')[0];

    const totalCount = curCanvas.length;
    const completedCount = curCanvas.filter((c: any) => c.lastCheckedDate === todayStr).length;
    const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const maxStreak = totalCount > 0 ? Math.max(...curCanvas.map((c: any) => c.streakCount || 1)) : 0;

    const elTotal = document.getElementById('statMyTotalHabits');
    const elRate = document.getElementById('statMyCompletionRate');
    const elStreak = document.getElementById('statMyMaxStreak');
    const elBadge = document.getElementById('myStatsCompletionBadge');
    const elProgressBar = document.getElementById('myStatsProgressBar');

    const unitItems = (tClient('buildsnap.mystats.unit.items') || '$1개').replace('$1', String(totalCount));
    const unitDays = (tClient('buildsnap.mystats.unit.days') || '🔥 $1일').replace('$1', String(maxStreak));
    const badgeText = (tClient('buildsnap.mystats.today_badge') || '오늘 완료율 $1% ($2/$3)')
      .replace('$1', String(completionRate))
      .replace('$2', String(completedCount))
      .replace('$3', String(totalCount));

    if (elTotal) elTotal.textContent = unitItems;
    if (elRate) elRate.textContent = `${completionRate}%`;
    if (elStreak) elStreak.textContent = unitDays;
    if (elBadge) elBadge.textContent = badgeText;
    if (elProgressBar) elProgressBar.style.width = `${completionRate}%`;
  };

  // 나의 위인 습관 캔버스 보드 동적 렌더링 함수
  const renderMyCanvas = () => {
    renderMyPersonalStats();
    const canvasBoard = document.getElementById('myCanvasBoard');
    const canvasCountBadge = document.getElementById('canvasCountBadge');
    if (!canvasBoard) return;

    const curCanvas = JSON.parse(localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
    if (canvasCountBadge) {
      const countTpl = tClient('buildsnap.canvas.count') || '담긴 습관 $1개';
      canvasCountBadge.textContent = countTpl.replace('$1', String(curCanvas.length));
    }

    if (curCanvas.length === 0) {
      const emptyTitle = tClient('buildsnap.canvas.empty.title') || '아직 담긴 위인 습관이 없습니다';
      const emptyDesc = tClient('buildsnap.canvas.empty.desc') || '위인 진단기에서 [⚡ 내 습관 캔버스에 담기]를 누르면 이곳에 나만의 실천 보드가 생성됩니다.';
      canvasBoard.innerHTML = `
        <div id="canvasEmptyGuide" class="col-span-full text-center py-12 px-6 rounded-2xl border border-dashed border-slate-250 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col items-center justify-center">
          <span class="text-4xl mb-3 animate-bounce">✨</span>
          <h4 class="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 mb-1">${emptyTitle}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 max-w-sm">${emptyDesc}</p>
        </div>
      `;
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const txtCheckToday = tClient('buildsnap.canvas.check.today') || '✓ 오늘 완료';
    const txtCheckDone = tClient('buildsnap.canvas.check.done') || '✓ 실천 완료! 👏';
    const txtDelete = tClient('buildsnap.canvas.delete') || '✕ 삭제';
    const streakUnitTpl = tClient('buildsnap.mystats.unit.days') || '🔥 $1일';

    canvasBoard.innerHTML = curCanvas.map((item: any) => {
      const isCheckedToday = item.lastCheckedDate === todayStr;
      const streak = item.streakCount || 1;
      const streakStr = streakUnitTpl.replace('$1', String(streak));
      const heroName = getTranslatedHabitField(item.habitId, item.heroName, 'name', item.heroName);
      const habitTitle = getTranslatedHabitField(item.habitId, item.heroName, 'habitName', item.habitTitle);
      const actionName = getTranslatedHabitField(item.habitId, item.heroName, 'actionName', item.actionName || item.habitTitle);

      return `
        <div class="canvas-item flex flex-col justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-sky-500/20 dark:border-sky-500/30 shadow-md hover:shadow-xl transition-all duration-300 relative group" data-id="${item.habitId}">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400">
                👤 ${heroName}
              </span>
              <button type="button" class="canvas-delete-btn text-[10px] font-bold text-slate-400 hover:text-rose-500 transition-colors p-1" data-id="${item.habitId}">
                ${txtDelete}
              </button>
            </div>
            <h4 class="text-sm font-extrabold text-slate-850 dark:text-slate-100 mb-1 leading-snug">
              ${habitTitle}
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-2 mb-3">
              ${actionName}
            </p>
          </div>

          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
            <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-1">
              ${streakStr}
            </span>
            <button type="button" class="canvas-check-btn text-[11px] font-extrabold px-3 py-1.5 rounded-xl ${isCheckedToday ? 'bg-slate-400 cursor-default' : 'bg-emerald-600 hover:bg-emerald-500 active:scale-95'} text-white shadow-sm transition-all" data-id="${item.habitId}" ${isCheckedToday ? 'disabled' : ''}>
              ${isCheckedToday ? txtCheckDone : txtCheckToday}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // 이벤트 리스너 바인딩 (삭제 및 완료)
    canvasBoard.querySelectorAll('.canvas-delete-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (!id) return;
        const freshCanvas = JSON.parse(localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
        const updated = freshCanvas.filter((c: any) => c.habitId !== id);
        localStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(updated));
        renderMyCanvas();
        showToast(tClient('buildsnap.toast.deleted'));
      });
    });

    canvasBoard.querySelectorAll('.canvas-check-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (!id) return;
        const freshCanvas = JSON.parse(localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
        const todayStrNow = new Date().toISOString().split('T')[0];

        const updated = freshCanvas.map((c: any) => {
          if (c.habitId === id) {
            const newStreak = calculateStreak(c.lastCheckedDate || '', todayStrNow, c.streakCount || 1);
            return { ...c, lastCheckedDate: todayStrNow, streakCount: newStreak };
          }
          return c;
        });

        localStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(updated));
        renderMyCanvas();
        showToast(tClient('buildsnap.toast.completed'));
      });
    });
  };

  // 캔버스 전체 비우기 버튼 바인딩
  const btnClearCanvas = document.getElementById('btnClearCanvas');
  if (btnClearCanvas) {
    btnClearCanvas.addEventListener('click', () => {
      const curCanvas = JSON.parse(localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
      if (curCanvas.length === 0) {
        showToast(tClient('buildsnap.toast.empty'));
        return;
      }
      localStorage.removeItem('selalink_buildsnap_my_canvas');
      renderMyCanvas();
      showToast(tClient('buildsnap.toast.cleared'));
    });
  }

  // 초기 캔버스 렌더링 실행
  renderMyCanvas();

  const btnAddToCanvas = document.getElementById('btnAddToCanvas');
  if (btnAddToCanvas) {
    btnAddToCanvas.addEventListener('click', () => {
      if (!currentPool || currentPool.length === 0) return;
      const item = currentPool[currentIndex];
      const curCanvas = JSON.parse(localStorage.getItem('selalink_buildsnap_my_canvas') || '[]');
      
      const isAlreadyAdded = curCanvas.some((c: any) => c.habitId === item.id);
      if (!isAlreadyAdded) {
        curCanvas.push({
          habitId: item.id,
          heroName: item.name,
          habitTitle: item.habitName,
          actionName: item.actionName || item.habitName,
          timeOfDay: item.timeOfDay || 'morning',
          addedDate: new Date().toISOString()
        });
        localStorage.setItem('selalink_buildsnap_my_canvas', JSON.stringify(curCanvas));
        renderMyCanvas();
        const heroNameTrans = getTranslatedHabitField(item.id, item.name, 'name', item.name);
        const msgAdded = (tClient('buildsnap.toast.added') || '⚡ $1의 습관이 추가되었습니다.').replace('$1', heroNameTrans);
        showToast(msgAdded);
      } else {
        showToast(tClient('buildsnap.toast.already'));
      }
    });
  }

  if (btnShuffle) {
    btnShuffle.addEventListener('click', () => {
      if (currentPool.length > 1) {
        currentIndex = (currentIndex + 1) % currentPool.length;
        triggerDiagnose(true);
      }
    });
  }

  const showToast = (message: string) => {
    let toast = document.getElementById('buildsnapToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('id', 'buildsnapToast');
      toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-slate-900/90 text-white text-xs sm:text-sm font-extrabold shadow-2xl border border-slate-700/50 transition-all duration-300 opacity-0 scale-90 translate-y-2 pointer-events-none z-[999]';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'scale-90', 'translate-y-2', 'pointer-events-none');
    toast.classList.add('opacity-100', 'scale-100', 'translate-y-0');

    setTimeout(() => {
      if (toast) {
        toast.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'scale-90', 'translate-y-2', 'pointer-events-none');
      }
    }, 3000);
  };

  if (btnResetHistory) {
    btnResetHistory.addEventListener('click', () => {
      localStorage.removeItem('selalink_buildsnap_exposures');
      triggerDiagnose(false);
      showToast(runtimeTranslations.toastReset);
    });
  }

  // 폼 및 옵션 변경 시 결과창을 닫고 대기화면 복구 처리 헬퍼 함수
  const resetToWaitingState = () => {
    if (resultContainer) resultContainer.classList.add('hidden');
    if (matcherEmptyState) matcherEmptyState.classList.add('hidden');
    if (matcherWaitingGuide) matcherWaitingGuide.classList.remove('hidden');
  };

  ageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(ageButtons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedAge = btn.getAttribute('data-age') || 'adult';
      resetToWaitingState();
    });
  });

  genderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(genderButtons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedGender = btn.getAttribute('data-gender') || 'all';
      resetToWaitingState();
    });
  });

  q2Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(q2Buttons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedQ2 = btn.getAttribute('data-q2') || 'mental';
      resetToWaitingState();
    });
  });

  q1Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(q1Buttons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedQ1 = btn.getAttribute('data-q1') || 'focus';
      resetToWaitingState();
    });
  });

  q3Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateButtonSelection(q3Buttons, btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);
      selectedQ3 = btn.getAttribute('data-q3') || 'easy';
      resetToWaitingState();
    });
  });

  const btnStartOver = document.getElementById('btnStartOver');
  if (btnStartOver) {
    btnStartOver.addEventListener('click', () => {
      selectedAge = 'adult';
      selectedGender = 'all';
      selectedQ1 = 'focus';
      selectedQ2 = 'mental';
      selectedQ3 = 'easy';

      const ageBtn = document.querySelector(`.age-btn[data-age="${selectedAge}"]`);
      if (ageBtn) updateButtonSelection(ageButtons, ageBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);

      const genderBtn = document.querySelector(`.gender-btn[data-gender="${selectedGender}"]`);
      if (genderBtn) updateButtonSelection(genderButtons, genderBtn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);

      const q1Btn = document.querySelector(`.q1-btn[data-q1="${selectedQ1}"]`);
      if (q1Btn) updateButtonSelection(q1Buttons, q1Btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);

      const q2Btn = document.querySelector(`.q2-btn[data-q2="${selectedQ2}"]`);
      if (q2Btn) updateButtonSelection(q2Buttons, q2Btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);

      const q3Btn = document.querySelector(`.q3-btn[data-q3="${selectedQ3}"]`);
      if (q3Btn) updateButtonSelection(q3Buttons, q3Btn, ['border-indigo-500', 'dark:border-indigo-500'], ['border-slate-200', 'dark:border-slate-800']);

      currentStep = 1;
      updateStepUI();
      resetToWaitingState();

      const targetEl = document.getElementById('matcherSection');
      if (targetEl && typeof targetEl.scrollIntoView === 'function') {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

/**
 * 1-Tap 위인 습관 담기용 데이터 파서 헬퍼
 */
export function parseBuildSnapQuickAdd(habit: any) {
  return {
    habitId: habit?.id || '',
    heroName: habit?.name || '',
    habitTitle: habit?.habitName || habit?.name || '',
    actionName: habit?.actionName || habit?.habitName || '',
    timeOfDay: habit?.timeOfDay || 'morning'
  };
}

/**
 * 연속 실천 일수(Streak) 계산 헬퍼
 */
export function calculateStreak(lastCheckedDate: string, todayDate: string, currentStreak: number): number {
  if (!lastCheckedDate) return 1;

  const lastDate = new Date(lastCheckedDate);
  const today = new Date(todayDate);
  lastDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return currentStreak + 1;
  } else if (diffDays === 0) {
    return currentStreak;
  } else {
    return 1;
  }
}

/**
 * 성취 뱃지 해금 조건 검증 헬퍼
 */
export function checkBadgeUnlock(streakDays: number, badgeType: string): boolean {
  if (badgeType === 'explorer') return streakDays >= 7;
  if (badgeType === 'master') return streakDays >= 14;
  if (badgeType === 'legend') return streakDays >= 30;
  return streakDays >= 7;
}

// 모바일 Bottom Sheet 슬라이드 모달 및 하단 탭바 클라이언트 이벤트 등록
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target) return;

    if (target.id === 'buildsnapBsCloseBtn' || target.id === 'buildsnapBsCloseHandle') {
      const modal = document.getElementById('buildsnapBottomSheetModal');
      if (modal) modal.classList.add('hidden');
    }

    const anchor = target.closest('a[href^="#"]');
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();
          // 통계 탭 클릭 시 아코디언 자동 오픈
          if (href === '#statsSection') {
            const statsContainer = document.getElementById('statsContainer');
            if (statsContainer && statsContainer.classList.contains('hidden')) {
              statsContainer.classList.remove('hidden');
            }
          }
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  });
}

