// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cambia "site" por tu dominio final (ver src/config/site.ts).
export default defineConfig({
  site: 'https://recuperarcorreos.cl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});