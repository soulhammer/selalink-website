// FreshSnap Index Page Client-side script
import { initRefrigeratorView } from './freshsnap/refrigerator';
import { filterIngredients } from './freshsnap/filter';
import { indexLocalTranslations } from '../i18n/freshsnapTranslations';

// Client-side search and filtering logic
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const categoryButtons = document.querySelectorAll('.category-btn');
const wrapperItems = document.querySelectorAll('.ingredient-item-wrapper') as NodeListOf<HTMLElement>;
const emptyState = document.getElementById('emptyState') as HTMLElement;
const grid = document.getElementById('ingredientsGrid') as HTMLElement;
const refrigeratorView = document.getElementById('refrigeratorView') as HTMLElement;
const methodFilterContainer = document.getElementById('methodFilterContainer');
const fridgeViewInfoBanner = document.getElementById('fridgeViewInfoBanner');

// Filter elements (Advanced)
const methodFilterBtns = document.querySelectorAll('.method-filter-btn');
const viewGridBtn = document.getElementById('viewGridBtn');
const viewFridgeBtn = document.getElementById('viewFridgeBtn');

// Refrigerator Grid targets
const roomShelfGrid = document.getElementById('roomShelfGrid');
const fridgeShelfGrid = document.getElementById('fridgeShelfGrid');
const freezerShelfGrid = document.getElementById('freezerShelfGrid');

// State Variables
let activeCategory = 'all';
let searchQuery = '';
let activeMethod = 'all';
let activeLayout = 'grid'; // grid, fridge

const dispatchFilter = () => {
  filterIngredients({
    activeCategory,
    searchQuery,
    activeMethod,
    activeLayout,
    wrapperItems,
    emptyState,
    grid,
    refrigeratorView
  });
};

const dispatchInitRefrigeratorView = () => {
  initRefrigeratorView({
    roomShelfGrid,
    fridgeShelfGrid,
    freezerShelfGrid,
    wrapperItems
  });
};

// [3] Event Listeners - Search & Categories
searchInput?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
  dispatchFilter();
  saveState();
});

categoryButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach((b) => {
      b.classList.remove('bg-emerald-600', 'border-emerald-600', 'text-white', 'shadow-md', 'shadow-emerald-600/20');
      b.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-700', 'dark:text-slate-300');
    });

    btn.classList.remove('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-700', 'dark:text-slate-300');
    btn.classList.add('bg-emerald-600', 'border-emerald-600', 'text-white', 'shadow-md', 'shadow-emerald-600/20');

    activeCategory = btn.getAttribute('data-category') || 'all';
    dispatchFilter();
    saveState();
  });
});

// [4] Event Listeners - Advanced Filters (Method & State)
methodFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    methodFilterBtns.forEach((b) => {
      b.classList.remove('active');
      b.classList.add('text-slate-500', 'dark:text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    });
    btn.classList.add('active');
    btn.classList.remove('text-slate-500', 'dark:text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    
    activeMethod = btn.getAttribute('data-method-filter') || 'all';
    dispatchFilter();
    saveState();
  });
});

// [5] Event Listeners - Layout View Toggles
const toggleLayout = (target: string) => {
  activeLayout = target;
  if (target === 'grid') {
    viewGridBtn?.classList.add('active');
    viewGridBtn?.classList.remove('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    viewFridgeBtn?.classList.remove('active');
    viewFridgeBtn?.classList.add('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    
    methodFilterContainer?.classList.remove('hidden');
    fridgeViewInfoBanner?.classList.add('hidden');
  } else {
    viewFridgeBtn?.classList.add('active');
    viewFridgeBtn?.classList.remove('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    viewGridBtn?.classList.remove('active');
    viewGridBtn?.classList.add('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    
    methodFilterContainer?.classList.add('hidden');
    fridgeViewInfoBanner?.classList.remove('hidden');
  }
  dispatchFilter();
  saveState();
};

viewGridBtn?.addEventListener('click', () => toggleLayout('grid'));
viewFridgeBtn?.addEventListener('click', () => toggleLayout('fridge'));

// 카드 클릭 시 상태 저장
document.querySelectorAll('.ingredient-item').forEach((item) => {
  item.addEventListener('click', () => {
    saveState();
  });
});

// 보관실 미니 카드 클릭 시 상태 저장 및 수동 이동 보장
document.addEventListener('click', (e) => {
  const miniCard = (e.target as HTMLElement).closest('.fridge-mini-card') as HTMLAnchorElement;
  if (miniCard) {
    saveState();
    const href = miniCard.getAttribute('href');
    if (href) {
      window.location.href = href;
    }
  }
});

// sessionStorage 상태 저장 헬퍼
const saveState = () => {
  sessionStorage.setItem('freshsnap_activeCategory', activeCategory);
  sessionStorage.setItem('freshsnap_searchQuery', searchQuery);
  sessionStorage.setItem('freshsnap_activeMethod', activeMethod);
  sessionStorage.setItem('freshsnap_activeLayout', activeLayout);
  sessionStorage.setItem('freshsnap_scrollPosition', String(window.scrollY));
};

// sessionStorage 상태 복원 헬퍼
const restoreState = () => {
  const savedCategory = sessionStorage.getItem('freshsnap_activeCategory');
  const savedSearchQuery = sessionStorage.getItem('freshsnap_searchQuery');
  const savedMethod = sessionStorage.getItem('freshsnap_activeMethod');
  const savedLayout = sessionStorage.getItem('freshsnap_activeLayout');

  if (savedCategory !== null) activeCategory = savedCategory;
  if (savedSearchQuery !== null) searchQuery = savedSearchQuery;
  if (savedMethod !== null) activeMethod = savedMethod;
  if (savedLayout !== null) activeLayout = savedLayout;

  if (searchInput) {
    searchInput.value = searchQuery || '';
  }

  // 카테고리 버튼 active 클래스 동기화
  categoryButtons.forEach((btn) => {
    const cat = btn.getAttribute('data-category');
    if (cat === activeCategory) {
      btn.classList.add('bg-emerald-600', 'border-emerald-600', 'text-white', 'shadow-md', 'shadow-emerald-600/20');
      btn.classList.remove('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-700', 'dark:text-slate-300');
    } else {
      btn.classList.remove('bg-emerald-600', 'border-emerald-600', 'text-white', 'shadow-md', 'shadow-emerald-600/20');
      btn.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800', 'text-slate-700', 'dark:text-slate-300');
    }
  });

  // 보관 방식 버튼 active 클래스 동기화
  methodFilterBtns.forEach((btn) => {
    const method = btn.getAttribute('data-method-filter');
    if (method === activeMethod) {
      btn.classList.add('active');
      btn.classList.remove('text-slate-500', 'dark:text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    } else {
      btn.classList.remove('active');
      btn.classList.add('text-slate-500', 'dark:text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    }
  });

  // 레이아웃 동기화
  if (activeLayout === 'grid') {
    viewGridBtn?.classList.add('active');
    viewGridBtn?.classList.remove('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    viewFridgeBtn?.classList.remove('active');
    viewFridgeBtn?.classList.add('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    
    methodFilterContainer?.classList.remove('hidden');
    fridgeViewInfoBanner?.classList.add('hidden');
  } else {
    viewFridgeBtn?.classList.add('active');
    viewFridgeBtn?.classList.remove('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    viewGridBtn?.classList.remove('active');
    viewGridBtn?.classList.add('text-slate-400', 'hover:text-slate-800', 'dark:hover:text-slate-202');
    
    methodFilterContainer?.classList.add('hidden');
    fridgeViewInfoBanner?.classList.remove('hidden');
  }

  dispatchFilter();

  const savedScroll = sessionStorage.getItem('freshsnap_scrollPosition');
  if (savedScroll !== null) {
    const targetScroll = parseInt(savedScroll, 10);
    if (targetScroll > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: targetScroll,
          behavior: 'instant'
        });
        sessionStorage.removeItem('freshsnap_scrollPosition');
      }, 100);
    }
  }
};

// 초기화 및 상태 복원
dispatchInitRefrigeratorView();

// 나의 냉장고 렌더링 및 인터랙션 액션 로직
const myFridgeSection = document.getElementById('myFridgeSection');
const myFridgeCount = document.getElementById('myFridgeCount');
const zeroWasteScore = document.getElementById('zeroWasteScore');
const zeroWasteProgress = document.getElementById('zeroWasteProgress');
const myFridgeGrid = document.getElementById('myFridgeGrid');

const myFridgeToggleBtn = document.getElementById('myFridgeToggleBtn');
const myFridgeToggleArrow = document.getElementById('myFridgeToggleArrow');
const myFridgeResetBtn = document.getElementById('myFridgeResetBtn');

const renderMyFridge = () => {
  if (!myFridgeSection || !myFridgeGrid || !myFridgeCount || !zeroWasteScore || !zeroWasteProgress) return;
  
  const currentLang = document.documentElement.lang || 'en';
  const tLocal = (key: string) => {
    return indexLocalTranslations[currentLang]?.[key] || indexLocalTranslations['en']?.[key] || key;
  };

  const getIngredientMultilingualName = (item: any, lang: string) => {
    if (item.nameMultilingual && item.nameMultilingual[lang]) {
      return item.nameMultilingual[lang];
    }
    const id = item.ingredientId || item.id;
    if (id) {
      const cardEl = document.querySelector(`.ingredient-item-wrapper[data-id="${id}"], [data-id="${id}"]`);
      if (cardEl) {
        const rawMulti = cardEl.getAttribute('data-name-multilingual');
        if (rawMulti) {
          try {
            const parsed = JSON.parse(rawMulti);
            if (parsed[lang]) return parsed[lang];
          } catch (e) {}
        }
      }
    }

    if (item.name) {
      const allCards = document.querySelectorAll('.ingredient-item-wrapper, [data-name-multilingual]');
      for (let i = 0; i < allCards.length; i++) {
        const rawMulti = allCards[i].getAttribute('data-name-multilingual');
        if (rawMulti) {
          try {
            const parsed = JSON.parse(rawMulti);
            if (parsed.ko === item.name || parsed.en === item.name || Object.values(parsed).includes(item.name)) {
              if (parsed[lang]) return parsed[lang];
            }
          } catch (e) {}
        }
      }
    }
    return item.name || '';
  };
  
  const listStr = localStorage.getItem('freshsnap_my_fridge') || '[]';
  const list = JSON.parse(listStr);
  
  if (list.length === 0) {
    myFridgeCount.textContent = '0';
    const statsStr = localStorage.getItem('freshsnap_stats') || '{"consumed":0,"wasted":0}';
    const stats = JSON.parse(statsStr);
    const total = stats.consumed + stats.wasted;
    const scoreVal = total === 0 ? 100 : Math.round((stats.consumed / total) * 100);
    zeroWasteScore.textContent = `${scoreVal}%`;
    zeroWasteProgress.style.width = `${scoreVal}%`;
    
    // 초기화 버튼 제어: 보관 식재료가 없어도 누적 점수 기록이 존재하면 활성화
    if (myFridgeResetBtn) {
      if (total > 0) {
        myFridgeResetBtn.removeAttribute('disabled');
        myFridgeResetBtn.classList.remove('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
      } else {
        myFridgeResetBtn.setAttribute('disabled', 'true');
        myFridgeResetBtn.classList.add('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
      }
    }
    
    const urgentAlertShelf = document.getElementById('urgentAlertShelf');
    const urgentAlertGrid = document.getElementById('urgentAlertGrid');
    const urgentCountBadge = document.getElementById('urgentCountBadge');
    if (urgentAlertShelf) urgentAlertShelf.classList.add('hidden');
    if (urgentAlertGrid) urgentAlertGrid.innerHTML = '';
    if (urgentCountBadge) urgentCountBadge.textContent = '0';
    
    // 점선 박스의 고급스러운 Empty State 가이드 카드 렌더링
    myFridgeGrid.innerHTML = `
      <div class="col-span-full py-8 px-5 flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 select-none animate-fade-in">
        <div class="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center mb-3 border border-indigo-100/50 dark:border-indigo-900/50 text-2xl select-none">
          🧊
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed font-semibold">
          ${tLocal('util.myfridge.empty')}
        </p>
      </div>
    `;
    return;
  }
  
  // 보관 품목이 존재할 때는 초기화 버튼 활성화
  if (myFridgeResetBtn) {
    myFridgeResetBtn.removeAttribute('disabled');
    myFridgeResetBtn.classList.remove('opacity-40', 'cursor-not-allowed', 'pointer-events-none');
  }
  
  myFridgeSection.classList.remove('hidden');
  myFridgeCount.textContent = String(list.length);
  
  // 통계 점수 반영
  const statsStr = localStorage.getItem('freshsnap_stats') || '{"consumed":0,"wasted":0}';
  const stats = JSON.parse(statsStr);
  const total = stats.consumed + stats.wasted;
  const scoreVal = total === 0 ? 100 : Math.round((stats.consumed / total) * 100);
  
  zeroWasteScore.textContent = `${scoreVal}%`;
  zeroWasteProgress.style.width = `${scoreVal}%`;
  
  // 오늘 날짜 구하기 (자정 기준)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const processedList = list.map((item: any) => {
    const buyDateStr = item.buyDate || (item.addedDate ? item.addedDate.split('T')[0] : new Date().toISOString().split('T')[0]);
    const buyParts = buyDateStr.split('-');
    const buyDate = new Date(parseInt(buyParts[0], 10), parseInt(buyParts[1], 10) - 1, parseInt(buyParts[2], 10));
    buyDate.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - buyDate.getTime();
    const elapsedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let remaining = 9999;
    if (item.durationDays !== 9999) {
      remaining = item.durationDays - elapsedDays;
    }
    return { ...item, remaining };
  });

  const urgentAlertShelf = document.getElementById('urgentAlertShelf');
  const urgentAlertGrid = document.getElementById('urgentAlertGrid');
  const urgentCountBadge = document.getElementById('urgentCountBadge');

  // 긴급 보관주의(D-3 이하) 아이템 필터링 및 핀 쉘프 노출
  const urgentItems = processedList.filter((item: any) => item.remaining <= 3 && item.remaining !== 9999);
  if (urgentAlertShelf && urgentAlertGrid && urgentCountBadge) {
    if (urgentItems.length > 0) {
      urgentAlertShelf.classList.remove('hidden');
      const itemUnit = currentLang === 'ja' ? '個' : currentLang === 'zh' ? '个' : currentLang === 'ko' ? '개' : ' Items';
      urgentCountBadge.textContent = `${urgentItems.length}${itemUnit}`;

      const btnConsumeTxt = tLocal('util.card.ate') || '먹었어요 😋';

      urgentAlertGrid.innerHTML = urgentItems.map((item: any) => {
        const itemName = getIngredientMultilingualName(item, currentLang);
        return `
          <div class="flex items-center gap-2 p-2 px-3 rounded-2xl bg-amber-500/15 dark:bg-amber-950/50 border border-amber-500/30 text-amber-950 dark:text-amber-100 text-xs font-bold shadow-sm">
            <span>⚠️ <strong>${itemName}</strong></span>
            <span class="text-[10px] font-black text-rose-600 dark:text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded-full">D-${item.remaining < 0 ? 'DAY' : item.remaining}</span>
            <button type="button" class="urgent-consume-btn text-[10px] font-black bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded-md ml-1 active:scale-95 transition-all cursor-pointer" data-id="${item.ingredientId || item.id}">${btnConsumeTxt}</button>
          </div>
        `;
      }).join('');

      urgentAlertGrid.querySelectorAll('.urgent-consume-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
          if (!id) return;
          const freshList = JSON.parse(localStorage.getItem('freshsnap_my_fridge') || '[]');
          const updatedList = freshList.filter((it: any) => (it.ingredientId || it.id) !== id);
          localStorage.setItem('freshsnap_my_fridge', JSON.stringify(updatedList));

          const curStats = JSON.parse(localStorage.getItem('freshsnap_stats') || '{"consumed":0,"wasted":0}');
          curStats.consumed += 1;
          localStorage.setItem('freshsnap_stats', JSON.stringify(curStats));

          renderMyFridge();
        });
      });
    } else {
      urgentAlertShelf.classList.add('hidden');
    }
  }
  
  // 남은 기한 순 정렬 (마이너스는 기한이 많이 지난 것이므로 가장 위로)
  processedList.sort((a: any, b: any) => a.remaining - b.remaining);
  
  myFridgeGrid.innerHTML = processedList.map((item: any) => {
    const isImminent = item.remaining <= 3;
    const isExpired = item.remaining < 0;
    
    let borderClass = 'border-slate-200/60 dark:border-slate-855 dark:border-slate-800/80';
    let bgGlow = '';
    
    if (isExpired) {
      borderClass = 'border-rose-500/80 dark:border-rose-500/80';
      bgGlow = 'shadow-[0_0_15px_rgba(244,63,94,0.18)] dark:shadow-[0_0_20px_rgba(244,63,94,0.3)]';
    } else if (isImminent && item.remaining !== 9999) {
      borderClass = 'border-amber-500/80 dark:border-amber-500/80';
      bgGlow = 'shadow-[0_0_12px_rgba(245,158,11,0.15)] dark:shadow-[0_0_15px_rgba(245,158,11,0.25)]';
    }
    
    // 보관 방식 라벨 & 색상
    let methodLabel = '';
    let methodEmoji = '🟢';
    if (item.method === 'room') {
      methodLabel = tLocal('util.card.room');
      methodEmoji = '🟡';
    } else if (item.method === 'fridge') {
      methodLabel = tLocal('util.card.fridge');
      methodEmoji = '🟢';
    } else if (item.method === 'freezer') {
      methodLabel = tLocal('util.card.freezer');
      methodEmoji = '🔵';
    }
    
    // D-Day 텍스트
    let ddayText = '';
    let ddayClass = 'text-indigo-600 dark:text-indigo-400';
    if (item.remaining === 9999) {
      ddayText = tLocal('util.myfridge.status.infinite');
      ddayClass = 'text-slate-400 dark:text-slate-500';
    } else if (item.remaining === 0) {
      ddayText = 'D-Day';
      ddayClass = 'text-amber-600 dark:text-amber-400 animate-pulse';
    } else if (item.remaining > 0) {
      ddayText = `D-${item.remaining}`;
      if (item.remaining <= 3) {
        ddayClass = 'text-amber-500 dark:text-amber-400';
      }
    } else {
      ddayText = `D+${Math.abs(item.remaining)}`;
      ddayClass = 'text-rose-600 dark:text-rose-400 font-black';
    }
    
    // 상태 뱃지
    let statusBadge = '';
    if (isExpired && item.remaining !== 9999) {
      statusBadge = `<span class="bg-rose-50 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 px-2 py-0.5 rounded-md text-[9px] font-black">${tLocal('util.myfridge.status.expired')}</span>`;
    } else if (isImminent && item.remaining !== 9999) {
      statusBadge = `<span class="bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300 border border-amber-200/50 dark:border-amber-900/50 px-2 py-0.5 rounded-md text-[9px] font-black">${tLocal('util.myfridge.status.imminent')}</span>`;
    } else if (item.remaining !== 9999) {
      statusBadge = `<span class="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 border border-emerald-200/30 dark:border-emerald-900/30 px-2 py-0.5 rounded-md text-[9px] font-black">${tLocal('util.myfridge.status.safe')}</span>`;
    }
    
    const itemMultilingualName = getIngredientMultilingualName(item, currentLang);
    const iconHTML = item.iconImage 
      ? `<img src="${item.iconImage}" alt="${itemMultilingualName}" class="w-10 h-10 object-contain select-none block" />`
      : `<span class="text-3xl select-none block">${item.emoji}</span>`;
      
    return `
      <div 
        class="my-fridge-card relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-4 rounded-2xl border ${borderClass} ${bgGlow} transition-all duration-300 flex flex-col justify-between"
        data-id="${item.idForDelete}"
      >
        <!-- 그냥 삭제 버튼 (z-20 및 호버/액티브 스케일 인터랙션, SVG 아이콘화) -->
        <button 
          type="button" 
          class="remove-btn absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/80 shadow-md cursor-pointer select-none active:scale-[0.88] transition-all duration-200 z-20 group" 
          data-action="remove"
          title="Remove item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 stroke-[2.5] stroke-current transition-transform duration-200 group-hover:rotate-90" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- 카드 상단 정보 -->
        <div class="flex items-start justify-between gap-2.5 mb-3">
          <div class="flex items-center gap-2.5">
            <div class="shrink-0">${iconHTML}</div>
            <div>
              <h3 class="text-sm font-bold text-slate-800 dark:text-slate-100 line-clamp-1">${itemMultilingualName}</h3>
              <div class="flex items-center gap-1.5 mt-0.5">
                <span class="text-[9px] font-extrabold uppercase tracking-tight text-slate-400 dark:text-slate-500">
                  ${methodEmoji} ${methodLabel}
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-end gap-1 select-none font-outfit">
            <span class="text-base font-black ${ddayClass}">${ddayText}</span>
            ${statusBadge}
          </div>
        </div>
        
        <!-- 카드 하단 버튼 액션 -->
        <div class="grid grid-cols-2 gap-1.5 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <button 
            type="button" 
            class="consume-btn py-1.5 px-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/20 dark:hover:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-extrabold text-[10px] sm:text-[11px] text-center transition-colors cursor-pointer select-none active:scale-[0.97] truncate whitespace-nowrap"
            data-action="consume"
            title="${tLocal('util.myfridge.consume')}"
          >
            ${tLocal('util.myfridge.consume')}
          </button>
          <button 
            type="button" 
            class="waste-btn py-1.5 px-1 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-400 font-extrabold text-[10px] sm:text-[11px] text-center transition-colors cursor-pointer select-none active:scale-[0.97] truncate whitespace-nowrap"
            data-action="waste"
            title="${tLocal('util.myfridge.waste')}"
          >
            ${tLocal('util.myfridge.waste')}
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  // 버튼 클릭 리스너 등록 (remove-btn도 button 태그이므로 같이 탐지됨)
  myFridgeGrid.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const card = (e.target as HTMLElement).closest('.my-fridge-card');
      if (!card) return;
      
      const idForDelete = card.getAttribute('data-id');
      const action = btn.getAttribute('data-action');
      if (!idForDelete || !action) return;
      
      // 카드 페이드 아웃 애니메이션
      card.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        handleFridgeAction(idForDelete, action);
      }, 250);
    });
  });
};

const handleFridgeAction = (idForDelete: string, action: string) => {
  const listStr = localStorage.getItem('freshsnap_my_fridge') || '[]';
  const list = JSON.parse(listStr);
  const updatedList = list.filter((item: any) => item.idForDelete !== idForDelete);
  localStorage.setItem('freshsnap_my_fridge', JSON.stringify(updatedList));
  
  // 단순 제거('remove')인 경우에는 통계 점수를 변경하지 않음
  if (action !== 'remove') {
    const statsStr = localStorage.getItem('freshsnap_stats') || '{"consumed":0,"wasted":0}';
    const stats = JSON.parse(statsStr);
    if (action === 'consume') {
      stats.consumed += 1;
    } else if (action === 'waste') {
      stats.wasted += 1;
    }
    localStorage.setItem('freshsnap_stats', JSON.stringify(stats));
  }
  
  renderMyFridge();
};

// 아코디언 토글 클릭 핸들러 등록
myFridgeToggleBtn?.addEventListener('click', () => {
  if (!myFridgeGrid || !myFridgeToggleArrow) return;
  const isCollapsed = myFridgeGrid.classList.toggle('hidden');
  myFridgeToggleArrow.textContent = isCollapsed ? '▼' : '▲';
  myFridgeToggleBtn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
  localStorage.setItem('freshsnap_my_fridge_collapsed', isCollapsed ? 'true' : 'false');
});

// 커스텀 초기화 모달 및 관련 버튼 바인딩
const myFridgeResetModal = document.getElementById('myFridgeResetModal');
const myFridgeConfirmResetBtn = document.getElementById('myFridgeConfirmResetBtn');
const myFridgeCancelResetBtn = document.getElementById('myFridgeCancelResetBtn');

// 초기화 클릭 시 커스텀 모달 노출
myFridgeResetBtn?.addEventListener('click', () => {
  myFridgeResetModal?.classList.remove('hidden');
});

// 취소 버튼 클릭 시 모달 은닉
myFridgeCancelResetBtn?.addEventListener('click', () => {
  myFridgeResetModal?.classList.add('hidden');
});

// 확인 버튼 클릭 시 실제 초기화 수행 및 은닉
myFridgeConfirmResetBtn?.addEventListener('click', () => {
  localStorage.removeItem('freshsnap_my_fridge');
  localStorage.setItem('freshsnap_stats', JSON.stringify({ consumed: 0, wasted: 0 }));
  myFridgeResetModal?.classList.add('hidden');
  renderMyFridge();
});

// 페이지 첫 진입 시 이전 아코디언 접힘 상태 복원
const applyInitialCollapse = () => {
  if (!myFridgeGrid || !myFridgeToggleArrow || !myFridgeToggleBtn) return;
  const isCollapsed = localStorage.getItem('freshsnap_my_fridge_collapsed') === 'true';
  if (isCollapsed) {
    myFridgeGrid.classList.add('hidden');
    myFridgeToggleArrow.textContent = '▼';
    myFridgeToggleBtn.setAttribute('aria-expanded', 'false');
  } else {
    myFridgeGrid.classList.remove('hidden');
    myFridgeToggleArrow.textContent = '▲';
    myFridgeToggleBtn.setAttribute('aria-expanded', 'true');
  }
};

// 최초 로드 및 뒤로가기(bfcache) 네비게이션 시 최신 상태 동기화
window.addEventListener('pageshow', () => {
  applyInitialCollapse();
  renderMyFridge();
  restoreState();
});

let scrollTimeout: any;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    sessionStorage.setItem('freshsnap_scrollPosition', String(window.scrollY));
  }, 100);
});

// Spatial Glow hydration
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

// 모바일 신뢰 기관 리스트 토글 팝오버
const mobileTrustTrigger = document.getElementById('mobileTrustTrigger');
const trustBadgeContainer = document.getElementById('trustBadgeContainer');
const mobileTrustArrow = document.getElementById('mobileTrustArrow');

const closeMobileTrust = () => {
  trustBadgeContainer?.classList.add('hidden');
  trustBadgeContainer?.classList.remove('flex', 'absolute', 'top-[110%]', 'z-45', 'bg-white/95', 'dark:bg-slate-900/95', 'p-3.5', 'rounded-2xl', 'border', 'border-slate-200/60', 'dark:border-slate-800/80', 'shadow-2xl', 'backdrop-blur-md', 'max-w-[310px]', 'w-[90vw]', 'justify-center');
  if (mobileTrustArrow) mobileTrustArrow.style.transform = 'rotate(0deg)';
};

mobileTrustTrigger?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isHidden = trustBadgeContainer?.classList.contains('hidden');
  if (isHidden) {
    trustBadgeContainer?.classList.remove('hidden');
    trustBadgeContainer?.classList.add('flex', 'absolute', 'top-[110%]', 'z-45', 'bg-white/95', 'dark:bg-slate-900/95', 'p-3.5', 'rounded-2xl', 'border', 'border-slate-200/60', 'dark:border-slate-800/80', 'shadow-2xl', 'backdrop-blur-md', 'max-w-[310px]', 'w-[90vw]', 'justify-center');
    if (mobileTrustArrow) mobileTrustArrow.style.transform = 'rotate(180deg)';
  } else {
    closeMobileTrust();
  }
});

document.addEventListener('click', (e) => {
  if (mobileTrustTrigger && !mobileTrustTrigger.contains(e.target as Node) && trustBadgeContainer && !trustBadgeContainer.contains(e.target as Node)) {
    closeMobileTrust();
  }
});

// ==========================================
// [신규 UI/UX] 모바일 하단 탭바 & Bottom Sheet & PC Drag-and-Drop
// ==========================================

// 모바일 4대 고정 하단 탭바 조작
const mobileNavHome = document.getElementById('mobileNavHome');
const mobileNavFridge = document.getElementById('mobileNavFridge');
const mobileNavGuide = document.getElementById('mobileNavGuide');
const mobileNavStats = document.getElementById('mobileNavStats');

mobileNavHome?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

mobileNavFridge?.addEventListener('click', () => {
  myFridgeSection?.scrollIntoView({ behavior: 'smooth' });
});

mobileNavGuide?.addEventListener('click', () => {
  grid?.scrollIntoView({ behavior: 'smooth' });
});

mobileNavStats?.addEventListener('click', () => {
  myFridgeSection?.scrollIntoView({ behavior: 'smooth' });
});

// 모바일 Bottom Sheet 슬라이드 모달 조작
const mobileBottomSheetModal = document.getElementById('mobileBottomSheetModal');
const bottomSheetCloseHandle = document.getElementById('bottomSheetCloseHandle');
const bsCloseBtn = document.getElementById('bsCloseBtn');
const bsQuickAddBtn = document.getElementById('bsQuickAddBtn');

let currentBsIngredient: any = null;

const closeBottomSheet = () => {
  mobileBottomSheetModal?.classList.add('hidden');
};

bottomSheetCloseHandle?.addEventListener('click', closeBottomSheet);
bsCloseBtn?.addEventListener('click', closeBottomSheet);

// 1-Tap 내 냉장고에 담기
bsQuickAddBtn?.addEventListener('click', () => {
  if (!currentBsIngredient) return;
  const listStr = localStorage.getItem('freshsnap_my_fridge') || '[]';
  const list = JSON.parse(listStr);

  const existingIdx = list.findIndex((item: any) => item.ingredientId === currentBsIngredient.ingredientId);
  const now = new Date().toISOString();

  if (existingIdx >= 0) {
    list[existingIdx].addedDate = now;
  } else {
    list.unshift({
      ingredientId: currentBsIngredient.ingredientId,
      name: currentBsIngredient.name,
      nameMultilingual: currentBsIngredient.nameMultilingual || null,
      storageMethod: currentBsIngredient.storageMethod,
      durationDays: currentBsIngredient.durationDays,
      tip: currentBsIngredient.tip,
      addedDate: now
    });
  }

  localStorage.setItem('freshsnap_my_fridge', JSON.stringify(list));
  renderMyFridge();
  closeBottomSheet();
});

// PC Drag and Drop (보관실 구역 간 이동)
const setupDragAndDrop = () => {
  [roomShelfGrid, fridgeShelfGrid, freezerShelfGrid].forEach((shelf) => {

    if (!shelf) return;
    shelf.addEventListener('dragover', (e) => {
      e.preventDefault();
      shelf.classList.add('bg-emerald-500/10', 'border-emerald-500');
    });

    shelf.addEventListener('dragleave', () => {
      shelf.classList.remove('bg-emerald-500/10', 'border-emerald-500');
    });

    shelf.addEventListener('drop', (e) => {
      e.preventDefault();
      shelf.classList.remove('bg-emerald-500/10', 'border-emerald-500');
      const ingredientId = e.dataTransfer?.getData('text/plain');
      if (!ingredientId) return;

      let targetMethod = 'fridge';
      if (shelf.id === 'roomShelfGrid') targetMethod = 'room';
      else if (shelf.id === 'freezerShelfGrid') targetMethod = 'freezer';

      const listStr = localStorage.getItem('freshsnap_my_fridge') || '[]';
      const list = JSON.parse(listStr);
      const targetItem = list.find((item: any) => item.ingredientId === ingredientId);

      if (targetItem) {
        targetItem.storageMethod = targetMethod;
        localStorage.setItem('freshsnap_my_fridge', JSON.stringify(list));
        renderMyFridge();
      }
    });
  });
};

setupDragAndDrop();

