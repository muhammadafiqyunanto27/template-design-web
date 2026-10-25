$templates = @("deep-tech-frontier","umkm-warmth","creative-studio","saas-product-led","innovation-lab","corporate-institutional","mission-driven","developer-platform","modular-agency")
$variants = @("nextjs-intl","nextjs-id","astro-intl","astro-id")

$nextjsPkg = @{
    version = "1.0.0"
    private = $true
    scripts = @{ dev = "next dev"; build = "next build"; start = "next start"; lint = "next lint" }
    dependencies = @{ next = "14.2.0"; react = "^18.3.0"; "react-dom" = "^18.3.0" }
    devDependencies = @{ "@types/node" = "^20.12.0"; "@types/react" = "^18.3.0"; "@types/react-dom" = "^18.3.0"; typescript = "^5.4.0"; eslint = "^8.57.0"; "eslint-config-next" = "14.2.0" }
}

$astroPkg = @{
    version = "1.0.0"
    private = $true
    scripts = @{ dev = "astro dev"; build = "astro build"; preview = "astro preview" }
    dependencies = @{ astro = "^4.5.0" }
    devDependencies = @{ typescript = "^5.4.0" }
}

$nextjsTsconfig = @{
    compilerOptions = @{
        lib = @("dom", "dom.iterable", "esnext")
        allowJs = $true
        skipLibCheck = $true
        strict = $true
        noEmit = $true
        esModuleInterop = $true
        module = "esnext"
        moduleResolution = "bundler"
        resolveJsonModule = $true
        isolatedModules = $true
        jsx = "preserve"
        incremental = $true
        plugins = @(@{ name = "next" })
        paths = @{ "@/*" = @("./src/*"); "@/shared/*" = @("../../../shared/*") }
    }
    include = @("next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts")
    exclude = @("node_modules")
}

$astroTsconfig = @{
    extends = "astro/tsconfigs/strict"
    compilerOptions = @{
        baseUrl = "."
        paths = @{ "@/*" = @("src/*"); "@/shared/*" = @("../../../shared/*") }
    }
}

$nextjsConfig = @"
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
"@

foreach($t in $templates) {
    foreach($v in $variants) {
        $basePath = "D:\PROJECT\template-design\$t\$v"
        
        if($v -like "nextjs*") {
            $pkg = $nextjsPkg.Clone()
            $pkg.name = "${t}-${v}"
            $pkg | ConvertTo-Json -Depth 5 | Out-File -FilePath "$basePath\package.json" -Encoding utf8
            
            $nextjsTsconfig | ConvertTo-Json -Depth 5 | Out-File -FilePath "$basePath\tsconfig.json" -Encoding utf8
            
            $nextjsConfig | Out-File -FilePath "$basePath\next.config.js" -Encoding utf8
        } else {
            $pkg = $astroPkg.Clone()
            $pkg.name = "${t}-${v}"
            $pkg | ConvertTo-Json -Depth 5 | Out-File -FilePath "$basePath\package.json" -Encoding utf8
            
            $astroTsconfig | ConvertTo-Json -Depth 5 | Out-File -FilePath "$basePath\tsconfig.json" -Encoding utf8
            
            $isId = $v.EndsWith("-id")
            $siteUrl = if($isId) { "https://$($t.replace('-','')).co.id" } else { "https://$($t.replace('-','')).example.com" }
            $cssImports = if($isId) {
                '`@import "../../../../shared/tokens/intl/colors.css"; @import "../../../../shared/tokens/id/colors.css"; @import "../../../../shared/tokens/intl/typography.css"; @import "../../../../shared/tokens/intl/spacing.css";`'
            } else {
                '`@import "../../../../shared/tokens/intl/colors.css"; @import "../../../../shared/tokens/intl/typography.css"; @import "../../../../shared/tokens/intl/spacing.css";`'
            }
            
            $astroConfig = @"
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: '$siteUrl',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: $cssImports
        },
      },
    },
  },
});
"@
            $astroConfig | Out-File -FilePath "$basePath\astro.config.mjs" -Encoding utf8
        }
    }
}
Write-Host "All configs generated!"