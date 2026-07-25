export const themeColors: Record<string, string> = {
  studio: '#0D9488', // Teal
  buildself: '#0284C7', // Sky Blue (Distinct from FreshSnap Emerald)
  freshself: '#8B5CF6',
  freshsnap: '#10B981', // Pistachio Mint
  logself: '#6366F1',
  petself: '#F43F5E', // Rose
  buildsnap: '#6366F1'
};

export const themeFonts: Record<string, string> = {
  studio: "'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  buildself: "'Outfit', 'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  freshself: "'Plus Jakarta Sans', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  freshsnap: "'Plus Jakarta Sans', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  logself: "'Outfit', 'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  petself: "'Plus Jakarta Sans', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  buildsnap: "'Outfit', 'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif"
};

export function getPathForLang(currentPath: string, lang: string, targetLang: string): string {
  const regex = new RegExp(`^/${lang}(/|$)`);
  if (regex.test(currentPath)) {
    return currentPath.replace(regex, `/${targetLang}$1`);
  } else {
    return `/${targetLang}${currentPath}`;
  }
}

export interface BrandHeaderConfig {
  logoText: string;
  logoLink: string;
  logoColorClass: string;
}

export function getBrandHeaderConfig(appId: string, isBlogArea: boolean, lang: string): BrandHeaderConfig {
  if (isBlogArea) {
    return {
      logoText: 'Blog',
      logoLink: `/${lang}/blog/`,
      logoColorClass: 'text-indigo-600 dark:text-indigo-400 font-extrabold font-outfit'
    };
  }

  const isFreshApp = appId === 'freshself' || appId === 'freshsnap';

  if (appId === 'buildself') {
    return {
      logoText: 'BuildSelf',
      logoLink: `/${lang}/apps/buildself/`,
      logoColorClass: 'text-teal-600 dark:text-teal-400 font-extrabold font-outfit'
    };
  } else if (appId === 'buildsnap') {
    return {
      logoText: 'BuildSnap',
      logoLink: `/${lang}/apps/buildsnap/`,
      logoColorClass: 'text-indigo-600 dark:text-indigo-400 font-extrabold font-outfit'
    };
  } else if (isFreshApp) {
    return {
      logoText: 'FreshSelf',
      logoLink: `/${lang}/apps/freshself/`,
      logoColorClass: 'text-purple-600 dark:text-purple-400 font-bold font-jakarta'
    };
  } else if (appId === 'logself') {
    return {
      logoText: 'logSelf',
      logoLink: `/${lang}/apps/logself/`,
      logoColorClass: 'text-indigo-600 dark:text-indigo-400 font-extrabold font-outfit'
    };
  }

  return {
    logoText: '',
    logoLink: `/${lang}`,
    logoColorClass: ''
  };
}
