// StoreSelf Index Page Client-side script

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

// 115개 아이템 메타데이터 스캔 및 Refrigerator 뷰 동적 구축
const initRefrigeratorView = () => {
  if (!roomShelfGrid || !fridgeShelfGrid || !freezerShelfGrid) return;
  
  roomShelfGrid.innerHTML = '';
  fridgeShelfGrid.innerHTML = '';
  freezerShelfGrid.innerHTML = '';

  wrapperItems.forEach((wrapper) => {
    const item = wrapper.querySelector('.ingredient-item') as HTMLElement;
    if (!item) return;

    const id = item.getAttribute('data-item-id') || '';
    const name = item.querySelector('h2')?.textContent?.trim() || '';
    const category = item.getAttribute('data-item-category') || '';
    const searchIndex = item.getAttribute('data-search-index') || '';
    const img = item.querySelector('img')?.getAttribute('src');
    const emoji = item.querySelector('span')?.textContent?.trim() || '🍱';
    const categoryLabel = item.querySelector('span.text-\\[10px\\]')?.textContent?.trim() || '';

    const hasRoom = item.getAttribute('data-has-room') === 'true';
    const hasFridge = item.getAttribute('data-has-fridge') === 'true';
    const hasFreezer = item.getAttribute('data-has-freezer') === 'true';

    const durRoom = item.getAttribute('data-duration-room') || '0';
    const durFridge = item.getAttribute('data-duration-fridge') || '0';
    const durFreezer = item.getAttribute('data-duration-freezer') || '0';

    const recommendedMethod = item.getAttribute('data-recommended-method') || '';
    const recommendedLabel = item.getAttribute('data-recommended-label') || '';

    // 카드 템플릿 생성 헬퍼 (div 대신 a 태그로 감싸서 네비게이션 지원)
    const createMiniCardMarkup = (method: string, duration: string, badgeClass: string, label: string) => {
      const currentLang = document.documentElement.lang || 'ko';
      let numColorClass = '';
      if (method === 'room') numColorClass = 'text-amber-950 dark:text-amber-100';
      else if (method === 'fridge') numColorClass = 'text-emerald-950 dark:text-emerald-100';
      else if (method === 'freezer') numColorClass = 'text-blue-950 dark:text-blue-100';

      return `
        <a href="/${currentLang}/apps/storeself/${id}/" 
           class="fridge-mini-card p-3 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-center justify-between transition-all select-none hover:scale-102 hover:border-emerald-500/30"
           data-id="${id}" data-category="${category}" data-search-index="${searchIndex}">
          <div class="flex items-center gap-2">
            ${img ? `<img src="${img}" alt="${name}" class="w-8 h-8 object-contain block"/>` : `<span class="text-xl block w-fit">${emoji}</span>`}
            <div>
              <h4 class="text-xs font-black text-slate-800 dark:text-slate-200">${name}</h4>
              <span class="text-[8px] font-black text-slate-400 uppercase tracking-tighter">${categoryLabel}</span>
            </div>
          </div>
          <span class="mini-days-badge text-[9px] font-extrabold px-2 py-0.5 rounded-md ${badgeClass}" 
                data-base-duration="${duration}" data-shelf-method="${method}">
            ${label} <strong class="days-num font-black ${numColorClass}">${duration}</strong>일
          </span>
        </a>
      `;
    };

    // 실온 보관실 추가 (가장 추천하는 보관법일 때만)
    if (recommendedMethod === 'room' && hasRoom && parseInt(durRoom) > 0) {
      roomShelfGrid.insertAdjacentHTML('beforeend', createMiniCardMarkup('room', durRoom, 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40', `⭐ ${recommendedLabel}`));
    }
    // 냉장 보관실 추가 (가장 추천하는 보관법일 때만)
    if (recommendedMethod === 'fridge' && hasFridge && parseInt(durFridge) > 0) {
      fridgeShelfGrid.insertAdjacentHTML('beforeend', createMiniCardMarkup('fridge', durFridge, 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-amber-900/40', `⭐ ${recommendedLabel}`));
    }
    // 냉동 보관실 추가 (가장 추천하는 보관법일 때만)
    if (recommendedMethod === 'freezer' && hasFreezer && parseInt(durFreezer) > 0) {
      freezerShelfGrid.insertAdjacentHTML('beforeend', createMiniCardMarkup('freezer', durFreezer, 'bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40', `⭐ ${recommendedLabel}`));
    }
  });
};

const filterIngredients = () => {
  let visibleCount = 0;

  // [1] Grid View 필터링 및 동적 D-Day 보정 연산
  wrapperItems.forEach((wrapper) => {
    const item = wrapper.querySelector('.ingredient-item') as HTMLElement;
    if (!item) return;

    const cat = item.getAttribute('data-item-category') || '';
    const searchIndex = item.getAttribute('data-search-index') || '';
    
    const hasRoom = item.getAttribute('data-has-room') === 'true';
    const hasFridge = item.getAttribute('data-has-fridge') === 'true';
    const hasFreezer = item.getAttribute('data-has-freezer') === 'true';

    const matchesCategory = activeCategory === 'all' || cat === activeCategory;
    const matchesSearch = searchIndex.includes(searchQuery);
    
    // 보관 방식 필터 매칭
    const matchesMethod = activeMethod === 'all' || 
      (activeMethod === 'room' && hasRoom) || 
      (activeMethod === 'fridge' && hasFridge) || 
      (activeMethod === 'freezer' && hasFreezer);

    // 카드 뱃지 일수 업데이트 (기본값 노출)
    const durationBadges = item.querySelectorAll('.duration-badges span');
    durationBadges.forEach((badge) => {
      const methodType = badge.getAttribute('data-badge-method');
      let baseDurationAttr = '0';
      if (methodType === 'room') baseDurationAttr = item.getAttribute('data-duration-room') || '0';
      else if (methodType === 'fridge') baseDurationAttr = item.getAttribute('data-duration-fridge') || '0';
      else if (methodType === 'freezer') baseDurationAttr = item.getAttribute('data-duration-freezer') || '0';
      
      const baseDuration = parseInt(baseDurationAttr);
      const currentDuration = baseDuration;
      const daysNumSpan = badge.querySelector('.badge-days');
      if (daysNumSpan) {
        daysNumSpan.textContent = String(currentDuration);
      }

      // 보관 방식 필터 선택 시 해당 뱃지만 하이라이트하고 다른 것은 딤드 처리
      if (activeMethod !== 'all') {
        if (methodType === activeMethod) {
          badge.classList.remove('opacity-55');
          badge.classList.add('scale-105', 'border-emerald-500/50', 'font-black');
        } else {
          badge.classList.add('opacity-55');
          badge.classList.remove('scale-105', 'border-emerald-500/50', 'font-black');
        }
      } else {
        badge.classList.remove('opacity-55', 'scale-105', 'border-emerald-500/50', 'font-black');
      }
    });

    // 결과 가시성 판단
    if (matchesCategory && matchesSearch && matchesMethod) {
      wrapper.classList.remove('hidden');
      visibleCount++;

      // 단일 필터 켜졌을 때 카드 강조 효과 부여
      if (activeMethod !== 'all') {
        item.classList.add('highlighted');
      } else {
        item.classList.remove('highlighted');
      }
    } else {
      wrapper.classList.add('hidden');
      item.classList.remove('highlighted');
    }
  });

  // [2] Refrigerator View 필터링 및 D-Day 동적 보정
  const miniCards = document.querySelectorAll('.fridge-mini-card') as NodeListOf<HTMLElement>;
  let activeMiniCount = 0;

  miniCards.forEach((card) => {
    const cat = card.getAttribute('data-category') || '';
    const searchIndex = card.getAttribute('data-search-index') || '';
    
    const matchesCategory = activeCategory === 'all' || cat === activeCategory;
    const matchesSearch = searchIndex.includes(searchQuery);

    const daysBadge = card.querySelector('.mini-days-badge');
    const daysNum = card.querySelector('.days-num');
    if (daysBadge && daysNum) {
      const baseDuration = parseInt(daysBadge.getAttribute('data-base-duration') || '0');
      daysNum.textContent = String(baseDuration);
    }

    if (matchesCategory && matchesSearch) {
      card.classList.remove('hidden');
      activeMiniCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  // 냉장고 각 칸(선반)의 아이템이 없으면 선반 자체를 숨기거나 빈 화면 처리
  document.querySelectorAll('.refrigerator-shelf').forEach((shelf) => {
    const visibleCards = shelf.querySelectorAll('.fridge-mini-card:not(.hidden)');
    if (visibleCards.length === 0) {
      shelf.classList.add('hidden');
    } else {
      shelf.classList.remove('hidden');
    }
  });

  // 레이아웃 모드에 따른 빈 화면 체크
  const totalCount = (activeLayout === 'grid') ? visibleCount : activeMiniCount;

  if (totalCount === 0) {
    emptyState.classList.remove('hidden');
    grid.classList.add('opacity-0', 'hidden');
    refrigeratorView.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    if (activeLayout === 'grid') {
      grid.classList.remove('hidden', 'opacity-0');
      refrigeratorView.classList.add('hidden');
    } else {
      refrigeratorView.classList.remove('hidden');
      grid.classList.add('hidden');
    }
  }
};

// [3] Event Listeners - Search & Categories
searchInput?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
  filterIngredients();
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
    filterIngredients();
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
    filterIngredients();
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
  filterIngredients();
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
    // Astro SPA 라우팅 또는 동적 HTML a 태그 이벤트 씹힘 방지를 위해 수동 이동 보장
    const href = miniCard.getAttribute('href');
    if (href) {
      window.location.href = href;
    }
  }
});

// sessionStorage 상태 저장 헬퍼
const saveState = () => {
  sessionStorage.setItem('storeself_activeCategory', activeCategory);
  sessionStorage.setItem('storeself_searchQuery', searchQuery);
  sessionStorage.setItem('storeself_activeMethod', activeMethod);
  sessionStorage.setItem('storeself_activeLayout', activeLayout);
  sessionStorage.setItem('storeself_scrollPosition', String(window.scrollY));
};

// sessionStorage 상태 복원 헬퍼
const restoreState = () => {
  const savedCategory = sessionStorage.getItem('storeself_activeCategory');
  const savedSearchQuery = sessionStorage.getItem('storeself_searchQuery');
  const savedMethod = sessionStorage.getItem('storeself_activeMethod');
  const savedLayout = sessionStorage.getItem('storeself_activeLayout');

  if (savedCategory !== null) activeCategory = savedCategory;
  if (savedSearchQuery !== null) searchQuery = savedSearchQuery;
  if (savedMethod !== null) activeMethod = savedMethod;
  if (savedLayout !== null) activeLayout = savedLayout;

  // UI 및 필터 동기화
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

  // 데이터 렌더링 및 높이 빌드
  filterIngredients();

  // 스크롤 위치 복구 (지연 처리로 높이 빌딩 완료 직후 수행 보장)
  const savedScroll = sessionStorage.getItem('storeself_scrollPosition');
  if (savedScroll !== null) {
    const targetScroll = parseInt(savedScroll, 10);
    if (targetScroll > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: targetScroll,
          behavior: 'instant'
        });
        // 1회 복원 후 저장 스크롤 값 삭제
        sessionStorage.removeItem('storeself_scrollPosition');
      }, 100);
    }
  }
};

// 초기화 및 상태 복원
initRefrigeratorView();
restoreState();

// 실시간 스크롤 위치 세션에 저장
let scrollTimeout: any;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    sessionStorage.setItem('storeself_scrollPosition', String(window.scrollY));
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
