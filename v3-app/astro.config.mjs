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