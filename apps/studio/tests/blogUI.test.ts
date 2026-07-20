/**
 * @vitest-environment jsdom
 */
import { describe, test, expect, beforeEach, vi, afterEach } from 'vitest';

describe('블로그 메인 UI JSDOM 동적 기능 통합 검증', () => {

  const mockPosts = [
    { app: 'buildself', date: '1721380000000', title: '세종대왕 새벽 독서', desc: '조선 시대 세종대왕의 독서법', tags: '#집중 #학습', ing: '' },
    { app: 'freshsnap', date: '1721381000000', title: '신선한 사과 보관법', desc: '사과를 아삭하게 보관하기', tags: '#과일 #신선', ing: '사과 apple リンゴ 苹果 manzana pomme apfel maçã apel' },
    { app: 'buildself', date: '1721382000000', title: '아인슈타인 사색', desc: '물리학자의 생각 정리 습관', tags: '#창의 #물리', ing: '' },
    { app: 'freshsnap', date: '1721383000000', title: '레몬 보관 꿀팁', desc: '레몬 슬라이스 밀봉 보관', tags: '#신선 #보관', ing: '레몬 lemon レモン 柠檬 limón citron zitrone limão jeruk' },
    { app: 'petself', date: '1721384000000', title: '웰시코기 발톱 관리', desc: '웰시코기 상처 없는 발톱 깎기', tags: '#강아지 #펫', ing: '' },
    { app: 'buildself', date: '1721385000000', title: '데카르트 침대 명상', desc: '철학자의 아침 명상법', tags: '#명상 #생각', ing: '' },
    { app: 'freshsnap', date: '1721386000000', title: '대파 냉동 보관', desc: '송송 썬 대파 오래 먹기', tags: '#채소 #요리', ing: '대파 scallion' },
    { app: 'petself', date: '1721387000000', title: '페르시안 고양이 목욕', desc: '장모종 털 엉킴 방지 목욕법', tags: '#고양이 #미용', ing: '' },
    { app: 'buildself', date: '1721388000000', title: 'steve jobs turtlenecks', desc: 'steve jobs minimal uniform routine', tags: '#minimal #focus', ing: '' },
    { app: 'freshsnap', date: '1721389000000', title: '바나나 상온 보관법', desc: '바나나 꼭지 밀봉 보관', tags: '#바나나 #보관', ing: '바나나 banana バナナ 香蕉 plátano banane banane banana pisang' },
    { app: 'petself', date: '1721390000000', title: '골든 햄스터 집 고르기', desc: '터널형 케이지 선택 가이드', tags: '#햄스터 #리포트', ing: '' },
    { app: 'buildself', date: '1721391000000', title: '뉴턴 메모 습관', desc: '노트 필기 정리를 통한 발견', tags: '#메모 #학습', ing: '' },
    { app: 'freshsnap', date: '1721392000000', title: '소고기 진공 보관', desc: '소고기 갈변 방지 진공 팩 보관법', tags: '#육류 #냉장', ing: '소고기 beef' },
    { app: 'petself', date: '1721393000000', title: '러시안 블루 유전병', desc: '러시안 블루 당뇨 관리 수칙', tags: '#고양이 #건강', ing: '' },
  ];

  beforeEach(async () => {
    // 1. JSDOM DOM 초기화
    document.documentElement.lang = 'ko';
    
    const postCardsHTML = mockPosts.map(p => `
      <a class="post-card blog-card-transition" 
         data-app="${p.app}" 
         data-date="${p.date}" 
         data-title="${p.title}" 
         data-desc="${p.desc}" 
         data-tags="${p.tags}" 
         data-ing-name="${p.ing}"
         href="#">
        <div>${p.title}</div>
      </a>
    `).join('\n');

    document.body.innerHTML = `
      <input id="blog-search-input" type="text" />
      <button id="blog-search-clear" class="hidden">X</button>
      <select id="blog-sort-select">
        <option value="latest">최신순</option>
        <option value="oldest">과거순</option>
      </select>
      <span id="blog-search-count" data-results-template="총 {count}개의 포스트가 발견되었습니다."></span>
      <div id="blog-posts-container">
        ${postCardsHTML}
      </div>
      <div id="blog-load-more-container">
        <button id="blog-load-more-btn">더보기</button>
      </div>
      <div id="blog-empty-state" class="hidden">포스트가 없습니다.</div>
      
      <button class="filter-btn" data-filter="all">All</button>
      <button class="filter-btn" data-filter="freshsnap">FreshSnap</button>
      <button class="filter-btn" data-filter="buildself">BuildSelf</button>
      <button class="filter-btn" data-filter="petself">PetSelf</button>
    `;

    // 2. 가상 타이머 모킹 적용 (디바운스 검증을 위해 필수)
    vi.useFakeTimers();

    // 3. blogIndex.ts 동적 리로드하여 이벤트 바인딩 실행
    vi.resetModules();
    await import('../src/utils/blogIndex');
    document.dispatchEvent(new Event('DOMContentLoaded'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('초기 렌더링 상태 및 더보기 페이징 한도 검증', () => {
    const postsContainer = document.getElementById('blog-posts-container');
    
    // 1. 초기 렌더링 시 최대 노출 카드 한도는 12개
    const visibleCards = postsContainer?.querySelectorAll('a:not(.blog-card-hidden)');
    expect(visibleCards?.length).toBe(12);

    // 2. 더보기 버튼 클릭
    const loadMoreBtn = document.getElementById('blog-load-more-btn');
    loadMoreBtn?.dispatchEvent(new MouseEvent('click'));

    // 3. 더보기 작동 후 한도가 늘어나서 총 14개(전체 개수) 카드 노출됨을 검증
    const visibleCardsAfter = postsContainer?.querySelectorAll('a:not(.blog-card-hidden)');
    expect(visibleCardsAfter?.length).toBe(14);
  });

  test('태그 필터 선택 시 콘텐츠 한도 초기화(Limit Reset) 및 카테고리 분류 검증', () => {
    // 1. 더보기 클릭해서 14개 노출
    const loadMoreBtn = document.getElementById('blog-load-more-btn');
    loadMoreBtn?.dispatchEvent(new MouseEvent('click'));
    
    const postsContainer = document.getElementById('blog-posts-container');
    expect(postsContainer?.querySelectorAll('a:not(.blog-card-hidden)').length).toBe(14);

    // 2. 'BuildSelf' 태그 필터 클릭
    const buildselfFilter = document.querySelector('button[data-filter="buildself"]') as HTMLButtonElement;
    buildselfFilter?.click();

    // 3. 검증: 필터 클릭 시 한도가 다시 12개로 리셋되어야 하며, BuildSelf 멘토 카드만 보여야 함
    const visibleCards = postsContainer?.querySelectorAll('a:not(.blog-card-hidden)') || [];
    expect(visibleCards.length).toBeLessThanOrEqual(12);
    
    visibleCards.forEach(card => {
      expect(card.getAttribute('data-app')).toBe('buildself');
    });
  });

  test('정렬 셀렉터 변경 시 오름차순/내림차순 정렬 상태 및 전체 카드 정합성 검증', () => {
    const postsContainer = document.getElementById('blog-posts-container');
    const sortSelect = document.getElementById('blog-sort-select') as HTMLSelectElement;

    // 1. 정렬 방식을 '과거 등록 순' (oldest)으로 변경
    sortSelect.value = 'oldest';
    sortSelect.dispatchEvent(new Event('change'));

    // 2. 카드들이 과거 순으로 정렬되었는지 타임스탬프 속성 비교 검증
    let visibleCards = Array.from(postsContainer?.querySelectorAll('a:not(.blog-card-hidden)') || []) as HTMLElement[];
    let dates = visibleCards.map(c => parseInt(c.getAttribute('data-date') || '0', 10));
    let sortedDates = [...dates].sort((a, b) => a - b);
    expect(dates).toEqual(sortedDates);

    // 3. 다시 '최신 등록 순' (latest)으로 변경
    sortSelect.value = 'latest';
    sortSelect.dispatchEvent(new Event('change'));

    // 4. 내림차순(최신 순) 정렬 검증
    visibleCards = Array.from(postsContainer?.querySelectorAll('a:not(.blog-card-hidden)') || []) as HTMLElement[];
    dates = visibleCards.map(c => parseInt(c.getAttribute('data-date') || '0', 10));
    sortedDates = [...dates].sort((a, b) => b - a);
    expect(dates).toEqual(sortedDates);
  });

  test('검색어 입력 시 디바운스 필터링 및 결과 피드백 텍스트 갱신 검증', () => {
    const searchInput = document.getElementById('blog-search-input') as HTMLInputElement;

    // 1. 검색어 '사과' 입력 및 input 이벤트 발생
    searchInput.value = '사과';
    searchInput.dispatchEvent(new Event('input'));

    // 디바운스 150ms 대기 시뮬레이션
    vi.advanceTimersByTime(150);

    const postsContainer = document.getElementById('blog-posts-container');
    const visibleCards = Array.from(postsContainer?.querySelectorAll('a:not(.blog-card-hidden)') || []) as HTMLElement[];

    // 2. 검증: 검색어 '사과'가 제목, 설명, 식재료명 중 하나에는 반드시 포함되어 있어야 함
    expect(visibleCards.length).toBe(1);
    visibleCards.forEach(card => {
      const title = card.getAttribute('data-title') || '';
      const desc = card.getAttribute('data-desc') || '';
      const ingName = card.getAttribute('data-ing-name') || '';
      expect(title.includes('사과') || desc.includes('사과') || ingName.includes('사과')).toBe(true);
    });

    // 3. 결과 카운트 텍스트 갱신 검증
    const searchCountText = document.getElementById('blog-search-count')?.textContent;
    expect(searchCountText).toContain('총 1개의 포스트가 발견되었습니다.');
  });

  test('9개 모든 언어별 블로그 페이지에서 해당 언어의 검색어 작동 검증 (E2E 대체)', () => {
    const langSpecs = [
      { lang: 'ko', query: '사과', expectedText: '총 1개의 포스트가 발견되었습니다.' },
      { lang: 'en', query: 'Apple', expectedText: 'Found 1 post(s) matching your criteria.' },
      { lang: 'ja', query: 'リンゴ', expectedText: '合計 1 件の記事が見つかりました。' },
      { lang: 'zh', query: '苹果', expectedText: '共找到 1 篇符合条件的文章。' },
      { lang: 'es', query: 'Manzana', expectedText: 'Se encontraron 1 artículo(s) que coinciden con tus criterios.' },
      { lang: 'fr', query: 'Pomme', expectedText: 'Trouvé 1 article(s) correspondant à vos critères.' },
      { lang: 'de', query: 'Apfel', expectedText: '1 Beitrag/Beiträge gefunden, die Ihren Kriterien entsprechen.' },
      { lang: 'pt', query: 'Maçã', expectedText: 'Encontrado(s) 1 artigo(s) correspondente(s) aos seus critérios.' },
      { lang: 'id', query: 'Apel', expectedText: 'Ditemukan 1 artikel yang sesuai dengan kriteria Anda.' }
    ];

    const searchInput = document.getElementById('blog-search-input') as HTMLInputElement;

    langSpecs.forEach(spec => {
      // 언어 코드 수동 할당 및 템플릿 주입 모방
      const countEl = document.getElementById('blog-search-count');
      if (countEl) {
        const tpl = spec.expectedText.replace('1', '{count}');
        countEl.setAttribute('data-results-template', tpl);
      }
      document.documentElement.lang = spec.lang;
      searchInput.value = spec.query;
      searchInput.dispatchEvent(new Event('input'));

      // 디바운스 대기
      vi.advanceTimersByTime(150);

      // 검색결과 카운트 텍스트 검증
      const text = document.getElementById('blog-search-count')?.textContent;
      expect(text).toBe(spec.expectedText);
    });
  });

});
