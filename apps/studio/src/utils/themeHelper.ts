/**
 * 앱 종류별 테마 색상, 카테고리 매핑 및 다국어 키 통합 관리 헬퍼
 */

export interface AppThemeConfig {
  accentClass: string;
  categoryKey: string;
  categoryColorClass: string;
}

export const APP_THEME_ACCENTS: Record<string, string> = {
  freshsnap: 'prose-a:text-emerald-600 dark:prose-a:text-emerald-400 hover:prose-a:text-emerald-700 dark:hover:prose-a:text-emerald-300 border-emerald-500/10 dark:border-emerald-500/20 bg-emerald-500/5',
  freshself: 'prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-700 dark:hover:prose-a:text-purple-300 border-purple-500/10 dark:border-purple-500/20 bg-purple-500/5',
  buildself: 'prose-a:text-sky-600 dark:prose-a:text-sky-400 hover:prose-a:text-sky-700 dark:hover:prose-a:text-sky-300 border-sky-500/10 dark:border-sky-500/20 bg-sky-500/5',
  logself: 'prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-700 dark:hover:prose-a:text-indigo-300 border-indigo-500/10 dark:border-indigo-500/20 bg-indigo-500/5',
  petself: 'prose-a:text-rose-600 dark:prose-a:text-rose-400 hover:prose-a:text-rose-700 dark:hover:prose-a:text-rose-300 border-rose-500/10 dark:border-rose-500/20 bg-rose-500/5',
  general: 'prose-a:text-teal-600 dark:prose-a:text-teal-400 hover:prose-a:text-teal-700 dark:hover:prose-a:text-teal-300 border-teal-500/10 dark:border-teal-500/20 bg-teal-500/5'
};

export const APP_CATEGORY_KEYS: Record<string, string> = {
  freshsnap: 'freshsnap',
  freshself: 'freshsnap',
  buildself: 'buildself',
  petself: 'petself',
  logself: 'logself'
};

export const APP_CATEGORY_COLORS: Record<string, string> = {
  freshsnap: 'text-emerald-600 dark:text-emerald-400',
  freshself: 'text-purple-600 dark:text-purple-400',
  buildself: 'text-sky-600 dark:text-sky-400',
  logself: 'text-indigo-600 dark:text-indigo-400',
  petself: 'text-rose-600 dark:text-rose-400'
};

export function getAppThemeConfig(app: string): AppThemeConfig {
  const accentClass = APP_THEME_ACCENTS[app] || APP_THEME_ACCENTS.general;
  const categoryKey = APP_CATEGORY_KEYS[app] || 'freshsnap';
  const categoryColorClass = APP_CATEGORY_COLORS[app] || 'text-emerald-600 dark:text-emerald-400';

  return {
    accentClass,
    categoryKey,
    categoryColorClass
  };
}
