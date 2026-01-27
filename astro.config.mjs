import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://masseub.github.io',
  // Trailing slash avoids double- or missing-slash issues when composing URLs in code
  base: '/maxreactengineering/',
  vite: {
    plugins: [tailwindcss()],
  },
});
