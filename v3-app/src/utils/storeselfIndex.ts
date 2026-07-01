// StoreSelf Index Page Client-side script
import { initRefrigeratorView } from './storeself/refrigerator';
import { filterIngredients } from './storeself/filter';

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

  const savedScroll = sessionStorage.getItem('storeself_scrollPosition');
  if (savedScroll !== null) {
    const targetScroll = parseInt(savedScroll, 10);
    if (targetScroll > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: targetScroll,
          behavior: 'instant'
        });
        sessionStorage.removeItem('storeself_scrollPosition');
      }, 100);
    }
  }
};

// 초기화 및 상태 복원
dispatchInitRefrigeratorView();
restoreState();

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
