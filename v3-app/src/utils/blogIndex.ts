document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('blog-search-input') as HTMLInputElement | null;
  const searchClear = document.getElementById('blog-search-clear') as HTMLButtonElement | null;
  const sortSelect = document.getElementById('blog-sort-select') as HTMLSelectElement | null;
  const postsContainer = document.getElementById('blog-posts-container');
  const emptyState = document.getElementById('blog-empty-state');
  const searchCount = document.getElementById('blog-search-count');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const loadMoreBtn = document.getElementById('blog-load-more-btn') as HTMLButtonElement | null;
  const loadMoreContainer = document.getElementById('blog-load-more-container') as HTMLDivElement | null;

  if (!postsContainer) return;

  // 카드를 배열로 캐싱
  const cards = Array.from(postsContainer.children) as HTMLElement[];
  let activeFilter = 'all';

  // 페이징 관련 상태
  const ITEMS_PER_PAGE = 12;
  let visibleLimit = ITEMS_PER_PAGE;

  // 디바운스 타이머
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  // 모바일 무한 스크롤 관찰자(Observer)
  let infiniteScrollObserver: IntersectionObserver | null = null;

  function setupInfiniteScroll() {
    // 기존 관찰 중단
    if (infiniteScrollObserver) {
      infiniteScrollObserver.disconnect();
      infiniteScrollObserver = null;
    }

    // 모바일(화면 너비 768px 미만)일 때만 무한 스크롤 활성화
    const isMobile = window.innerWidth < 768;
    
    if (isMobile && loadMoreContainer && loadMoreBtn) {
      infiniteScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // 더보기 버튼 컨테이너가 뷰포트에 감지되고, 숨김 상태가 아니며, 아직 로드할 글이 남아있을 때
          if (entry.isIntersecting && !loadMoreContainer.classList.contains('hidden')) {
            // 자연스러운 지연 시간(200ms) 후 다음 카드 로딩 유도
            setTimeout(() => {
              loadMoreBtn.click();
            }, 200);
          }
        });
      }, {
        root: null, // 브라우저 뷰포트 기준
        rootMargin: '120px', // 스크롤 바닥 도달 전 120px 위에서 미리 로드하여 자연스러움 연출
        threshold: 0.1
      });

      infiniteScrollObserver.observe(loadMoreContainer);
    }
  }

  function filterAndSort(isSearchReset = false) {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const sortBy = sortSelect ? sortSelect.value : 'latest';

    // 필터나 검색어가 변경되었을 경우 페이징 한도를 초기값으로 리셋
    if (isSearchReset) {
      visibleLimit = ITEMS_PER_PAGE;
    }

    // 검색창 지우기 버튼 노출 제어
    if (searchClear) {
      if (query.length > 0) {
        searchClear.classList.remove('hidden');
      } else {
        searchClear.classList.add('hidden');
      }
    }

    // 1. 정렬을 먼저 수행하여 DOM에 재배치
    const sortedCards = [...cards].sort((a, b) => {
      const dateA = parseInt(a.getAttribute('data-date') || '0', 10);
      const dateB = parseInt(b.getAttribute('data-date') || '0', 10);

      return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
    });

    sortedCards.forEach(card => {
      postsContainer?.appendChild(card);
    });

    // 2. 필터링 및 페이징 한도 적용
    let matchCount = 0;
    let visibleCount = 0;

    sortedCards.forEach(card => {
      const title = card.getAttribute('data-title') || '';
      const desc = card.getAttribute('data-desc') || '';
      const ingName = card.getAttribute('data-ing-name') || '';
      const tags = card.getAttribute('data-tags') || '';
      const app = card.getAttribute('data-app') || '';

      // 1. 카테고리 필터 매칭
      let matchesFilter = false;
      if (activeFilter === 'all') {
        matchesFilter = true;
      } else if (activeFilter === 'storeself') {
        // StoreSelf 필터는 freshself(식재료 보관 지원)도 포함시킴
        matchesFilter = (app === 'storeself' || app === 'freshself');
      } else if (activeFilter === 'buildself') {
        matchesFilter = (app === 'buildself');
      } else if (activeFilter === 'logself') {
        matchesFilter = (app === 'logself');
      } else if (activeFilter === 'petself') {
        matchesFilter = (app === 'petself');
      }

      // 2. 검색어 매칭 (제목, 설명, 식재료 한글명, 태그)
      const matchesQuery = !query || 
        title.includes(query) || 
        desc.includes(query) || 
        ingName.includes(query) || 
        tags.includes(query);

      // 초기 카드들에 트랜지션 클래스 추가
      card.classList.add('blog-card-transition');

      if (matchesFilter && matchesQuery) {
        matchCount++;
        // 현재 페이징 제한 개수까지만 노출 처리
        if (matchCount <= visibleLimit) {
          card.classList.remove('blog-card-hidden');
          visibleCount++;
        } else {
          card.classList.add('blog-card-hidden');
        }
      } else {
        card.classList.add('blog-card-hidden');
      }
    });

    // 4. 결과 개수 피드백 업데이트
    if (searchCount) {
      const lang = document.documentElement.lang || 'ko';
      let text = '';
      if (query.length > 0 || activeFilter !== 'all') {
        if (lang === 'ko') {
          text = `총 ${matchCount}개의 포스트가 발견되었습니다.`;
        } else if (lang === 'ja') {
          text = `合計 ${matchCount} 件の記事が見つかりました。`;
        } else if (lang === 'zh') {
          text = `共找到 ${matchCount} 篇符合条件的文章。`;
        } else if (lang === 'es') {
          text = `Se encontraron ${matchCount} artigo(s) que coinciden con tus criterios.`;
        } else if (lang === 'fr') {
          text = `Trouvé ${matchCount} article(s) correspondant à vos critères.`;
        } else if (lang === 'de') {
          text = `${matchCount} Beitrag/Beiträge gefunden, die Ihren Kriterien entsprechen.`;
        } else if (lang === 'pt') {
          text = `Encontrado(s) ${matchCount} artigo(s) correspondente(s) aos seus critérios.`;
        } else if (lang === 'id') {
          text = `Ditemukan ${matchCount} artikel yang sesuai dengan kriteria Anda.`;
        } else {
          text = `Found ${matchCount} post(s) matching your criteria.`;
        }
        searchCount.textContent = text;
        searchCount.classList.remove('opacity-0');
      } else {
        searchCount.textContent = '';
      }
    }

    // 5. 결과 없음 토글
    if (emptyState) {
      if (matchCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }

    // 6. 더보기 버튼 노출 제어
    if (loadMoreContainer) {
      if (matchCount > visibleLimit) {
        loadMoreContainer.classList.remove('hidden');
      } else {
        loadMoreContainer.classList.add('hidden');
      }
    }

    // 7. 무한 스크롤 상태 재연동
    setupInfiniteScroll();
  }

  // 디바운스 적용 검색 입력 핸들러
  function handleSearchInput() {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      filterAndSort(true);
    }, 150); // 150ms 디바운스 적용
  }

  // 더보기 클릭 이벤트
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleLimit += ITEMS_PER_PAGE;
      filterAndSort(false);
    });
  }

  // 카테고리 탭 클릭 이벤트 및 스타일 제어
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      activeFilter = filter;

      // 모든 버튼 스타일 초기화 (비활성 상태)
      filterButtons.forEach(b => {
        b.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm cursor-pointer border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300 dark:border-white/5 dark:bg-slate-900/40 dark:text-slate-300";
      });

      // 활성화된 버튼 전용 테마 적용
      if (filter === 'all') {
        btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm cursor-pointer bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-900";
      } else if (filter === 'storeself') {
        btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm cursor-pointer bg-emerald-500 border-emerald-500 text-white dark:bg-emerald-600 dark:border-emerald-600";
      } else if (filter === 'buildself') {
        btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm cursor-pointer bg-indigo-500 border-indigo-500 text-white dark:bg-indigo-600 dark:border-indigo-600";
      } else if (filter === 'logself') {
        btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm cursor-pointer bg-blue-500 border-blue-500 text-white dark:bg-blue-600 dark:border-blue-600";
      } else if (filter === 'petself') {
        btn.className = "filter-btn px-6 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 shadow-sm cursor-pointer bg-rose-500 border-rose-500 text-white dark:bg-rose-600 dark:border-rose-600";
      }

      filterAndSort(true); // 필터 변경 시 페이징 리셋
    });
  });

  // 검색창 관련 이벤트 리스너
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      filterAndSort(true);
      searchInput.focus();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      filterAndSort(false); // 정렬 변경 시에는 페이징 유지
    });
  }

  // 화면 리사이즈 시 모바일 여부에 따라 옵저버 활성화 재지정 (디바운스 200ms)
  let resizeTimer: ReturnType<typeof setTimeout> | null = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupInfiniteScroll();
    }, 200);
  });

  // 초기 실행
  filterAndSort(true);
});
