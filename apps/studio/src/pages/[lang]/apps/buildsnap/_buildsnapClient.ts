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
        resultHeroImage.src = `/images/blog/${item.id.replace(/-/g, '_')}.png`;
      }
      if (resultMentorName) {
        resultMentorName.textContent = mentorName;
      }
      if (resultHabitName) {
        resultHabitName.innerHTML = '';
        
        const eraLabel = tClient(`buildsnap.era.${item.era === '근세' ? 'earlyModern' : item.era === '근대' ? 'modern' : item.era === '현대' ? 'contemporary' : 'ancient'}`);
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
