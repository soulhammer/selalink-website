// @ts-check
import os from 'node:os';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const defaultConcurrency = process.env.CI ? 2 : Math.min(os.cpus().length, 4);

// https://astro.build/config
export default defineConfig({
  site: 'https://selalink.net',
  build: {
    concurrency: defaultConcurrency
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/src/content/blog/**', '**/dist/**']
      }
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000
    }
  }
});