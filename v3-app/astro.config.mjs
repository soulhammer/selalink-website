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
        return url.pathname !== '/apps/freshself/' && url.pathname !== '/apps/buildself/';
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