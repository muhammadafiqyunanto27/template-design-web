import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://innovationlab.co.id',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "../../../../shared/tokens/intl/colors.css"; @import "../../../../shared/tokens/id/colors.css"; @import "../../../../shared/tokens/intl/typography.css"; @import "../../../../shared/tokens/intl/spacing.css";`
        },
      },
    },
  },
});
