import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://1dulei.github.io',
  output: 'static',
  build: {
    format: 'directory',
  },
});
