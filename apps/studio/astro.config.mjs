// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://selalink.net',
  build: {
    concurrency: 10
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000
    }
  }
});