export const themeColors: Record<string, string> = {
  studio: '#0D9488', // Teal
  buildself: '#0D9488',
  freshself: '#8B5CF6',
  storeself: '#10B981', // Pistachio Mint
  logself: '#6366F1',
  petself: '#F43F5E' // Rose
};

export const themeFonts: Record<string, string> = {
  studio: "'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  buildself: "'Outfit', 'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  freshself: "'Plus Jakarta Sans', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  storeself: "'Plus Jakarta Sans', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  logself: "'Outfit', 'Space Grotesk', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif",
  petself: "'Plus Jakarta Sans', 'Pretendard', 'PingFang SC', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Microsoft YaHei', 'Meiryo', system-ui, -apple-system, sans-serif"
};

export function getPathForLang(currentPath: string, lang: string, targetLang: string): string {
  const regex = new RegExp(`^/${lang}(/|$)`);
  if (regex.test(currentPath)) {
    return currentPath.replace(regex, `/${targetLang}$1`);
  } else {
    return `/${targetLang}${currentPath}`;
  }
}
