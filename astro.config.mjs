import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mafyn.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
});