/**
 * Site-Wide Google Play Intent Deep Link Handler
 * Intercepts Google Play Store links on Android mobile devices to open the native Play Store app directly.
 * Prevents 302 HTTP web redirects and browser history stack corruption, ensuring the user can return
 * directly to the origin page upon pressing the mobile back button.
 */
export function initSiteWidePlayStoreHandler() {
  if (typeof window === 'undefined') return;

  const handlePlayStoreClick = (e: MouseEvent) => {
    // 1. Find closest anchor or button connecting to Google Play Store
    const target = (e.target as HTMLElement)?.closest<HTMLElement>(
      'a[href*="play.google.com/store/apps/details"], [data-playstore-id]'
    );

    if (!target) return;

    // 2. Hybrid Android Device Detection (Client Hints API + Regex Fallback)
    const isAndroid =
      (typeof (navigator as any).userAgentData?.platform === 'string' &&
        (navigator as any).userAgentData.platform === 'Android') ||
      /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      e.preventDefault();
      e.stopPropagation();

      const href = target.getAttribute('href') || '';
      const match = href.match(/id=([^&]+)/);
      const langMatch = href.match(/hl=([^&]+)/);

      const playStoreId =
        target.getAttribute('data-playstore-id') ||
        (match ? match[1] : 'com.selalink.buildself');
      const playStoreLang =
        target.getAttribute('data-playstore-lang') ||
        (langMatch ? langMatch[1] : 'ko');

      const fallbackUrl = encodeURIComponent(
        `https://play.google.com/store/apps/details?id=${playStoreId}&hl=${playStoreLang}`
      );
      const intentUrl = `intent://details?id=${playStoreId}#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${fallbackUrl};end`;

      window.location.href = intentUrl;
    }
  };

  // Attach event listener using event capturing to catch all clicks site-wide
  document.addEventListener('click', handlePlayStoreClick, true);
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSiteWidePlayStoreHandler());
  } else {
    initSiteWidePlayStoreHandler();
  }
}
