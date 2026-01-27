import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://masseub.github.io',
  base: '/maxreactengineering',
  vite: {
    plugins: [tailwindcss()],
  },
});
