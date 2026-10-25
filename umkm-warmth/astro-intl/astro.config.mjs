import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://umkmwarmth.example.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "../../../../shared/tokens/intl/colors.css"; @import "../../../../shared/tokens/intl/typography.css"; @import "../../../../shared/tokens/intl/spacing.css";`
        },
      },
    },
  },
});
