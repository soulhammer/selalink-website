export interface FilterOptions {
  activeCategory: string;
  searchQuery: string;
  activeMethod: string;
  activeLayout: string;
  wrapperItems: NodeListOf<HTMLElement>;
  emptyState: HTMLElement | null;
  grid: HTMLElement | null;
  refrigeratorView: HTMLElement | null;
}

export function filterIngredients(options: FilterOptions) {
  const {
    activeCategory,
    searchQuery,
    activeMethod,
    activeLayout,
    wrapperItems,
    emptyState,
    grid,
    refrigeratorView
  } = options;

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

  if (emptyState && grid && refrigeratorView) {
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
  }
}
