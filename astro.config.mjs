import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://maxreactengineering.be',
  base: '/',               // <-- IMPORTANT pour custom domain
  output: 'static',        // <-- IMPORTANT pour GitHub Pages
  vite: { plugins: [tailwindcss()] },
});
