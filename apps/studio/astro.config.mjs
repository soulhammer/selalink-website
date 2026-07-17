// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://selalink.net',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    filter: (page) => {
      try {
        const url = new URL(page);
        
        // 1. 언어 중립 리다이렉트 페이지 제외 (Astro sitemap i18n grouping 유지를 위해 제외하지 않고 살려둠)
        
        // 2. 301 리다이렉트 대상인 구버전 freshself/ingredients 하위 경로 sitemap에서 제외
        if (url.pathname.includes('/apps/freshself/ingredients/')) {
          return false;
        }
        
        // 3. 모든 언어의 규정/약관/데이터 삭제 페이지 제외 (noindex 대상)
        const isLegalPage = /\/(privacy|terms|data-deletion)\/?$/.test(url.pathname);
        if (isLegalPage) {
          return false;
        }
        
        return true;
      } catch (e) {
        return true;
      }
    },
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        ko: 'ko',
        ja: 'ja',
        zh: 'zh',
        es: 'es',
        fr: 'fr',
        de: 'de',
        pt: 'pt',
        id: 'id'
      }
    }
  })]
});