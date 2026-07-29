export interface BlogPostItem {
  id: string;
  data: {
    app: string;
    title: string;
    description: string;
    heroImage?: string;
    pubDate: Date | string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface CategoryMeta {
  group: string;
  icon: string;
  badgeClass: string;
  categoryKey: string;
}

/**
 * app 이름을 기반으로 카테고리 그룹을 반환합니다.
 * (freshsnap과 freshself는 동일 식재료 보관 그룹으로 묶음)
 */
export function getCategoryGroup(app: string): string {
  if (['freshsnap', 'freshself'].includes(app)) {
    return 'freshsnap';
  }
  return app || 'general';
}

/**
 * 카테고리별 시각적 뱃지 메타데이터(아이콘, Tailwind badge 스타일, i18n 번역 키)를 반환합니다.
 */
export function getCategoryMeta(app: string): CategoryMeta {
  const group = getCategoryGroup(app);
  switch (group) {
    case 'buildself':
      return {
        group: 'buildself',
        icon: '🎯',
        badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
        categoryKey: 'buildself',
      };
    case 'petself':
      return {
        group: 'petself',
        icon: '🐾',
        badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
        categoryKey: 'petself',
      };
    case 'freshsnap':
      return {
        group: 'freshsnap',
        icon: '🥬',
        badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        categoryKey: 'freshsnap',
      };
    case 'logself':
      return {
        group: 'logself',
        icon: '✍️',
        badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
        categoryKey: 'logself',
      };
    default:
      return {
        group: 'general',
        icon: '✨',
        badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
        categoryKey: 'all',
      };
  }
}

/**
 * 동일한 언어 및 카테고리 그룹 내에서 순환형 이전 글(prevPost)과 다음 글(nextPost)을 추출합니다.
 * (막다른 길(Dead End) 없이 항상 무한 순환 연결)
 */
export function getContextualPrevNext(
  posts: BlogPostItem[],
  currentPostId: string
): { prevPost: BlogPostItem | null; nextPost: BlogPostItem | null } {
  const currentPost = posts.find((p) => p.id === currentPostId);
  if (!currentPost) {
    return { prevPost: null, nextPost: null };
  }

  const lang = currentPost.id.split('/')[0];
  const targetGroup = getCategoryGroup(currentPost.data.app);

  // 동일 언어 및 동일 카테고리 그룹의 포스트만 필터링 후 날짜 내림차순 정렬
  const categoryPosts = posts
    .filter((p) => {
      const pLang = p.id.split('/')[0];
      const pGroup = getCategoryGroup(p.data.app);
      return pLang === lang && pGroup === targetGroup;
    })
    .sort((a, b) => {
      const timeA = new Date(a.data.pubDate).getTime();
      const timeB = new Date(b.data.pubDate).getTime();
      return timeB - timeA;
    });

  if (categoryPosts.length <= 1) {
    return { prevPost: null, nextPost: null };
  }

  const currentIndex = categoryPosts.findIndex((p) => p.id === currentPostId);
  if (currentIndex === -1) {
    return { prevPost: null, nextPost: null };
  }

  // 순환 알고리즘: 가장 최신 글(index 0)의 nextPost는 가장 옛날 글(last index)로 순환
  const nextPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : categoryPosts[categoryPosts.length - 1];
  // 순환 알고리즘: 가장 옛날 글(last index)의 prevPost는 가장 최신 글(index 0)로 순환
  const prevPost = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : categoryPosts[0];

  return { prevPost, nextPost };
}

/**
 * 현재 글을 제외한 동일 카테고리의 연관 아티클 목록을 추출합니다.
 */
export function getRelatedPosts(
  posts: BlogPostItem[],
  currentPostId: string,
  limit: number = 3
): BlogPostItem[] {
  const currentPost = posts.find((p) => p.id === currentPostId);
  if (!currentPost) return [];

  const lang = currentPost.id.split('/')[0];
  const targetGroup = getCategoryGroup(currentPost.data.app);

  const related = posts
    .filter((p) => {
      if (p.id === currentPostId) return false;
      const pLang = p.id.split('/')[0];
      const pGroup = getCategoryGroup(p.data.app);
      return pLang === lang && pGroup === targetGroup;
    })
    .sort((a, b) => {
      const timeA = new Date(a.data.pubDate).getTime();
      const timeB = new Date(b.data.pubDate).getTime();
      return timeB - timeA;
    });

  return related.slice(0, limit);
}
