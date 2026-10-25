$templates = @(
    @{ name = "deep-tech-frontier"; display = "Space Grotesk"; heading = "Space Grotesk"; body = "Space Grotesk"; code = "JetBrains Mono"; accent = "#00d4ff"; accentHover = "#33ddff"; accentLight = "#003d4d"; accentMuted = "#006b7a"; bg = "#050508"; bgElevated = "#0a0a0f"; bgSubtle = "#111116"; fg = "#e8e8ed"; fgMuted = "#6b6b7b"; border = "#1a1a22"; radius = "var(--radius-sm)"; buttonRadius = "var(--radius-sm)"; cardRadius = "var(--radius-sm)"; vibe = "Dark, technical, data-dense, mission-focused" },
    @{ name = "umkm-warmth"; display = "Fraunces"; heading = "Fraunces"; body = "DM Sans"; accent = "#c8553d"; accentHover = "#b04834"; accentLight = "#fdf3f0"; accentMuted = "#e8b5a8"; bg = "#fdfaf6"; bgElevated = "#ffffff"; bgSubtle = "#f5f0eb"; fg = "#2d2824"; fgMuted = "#6b5d54"; border = "#e8dfd7"; radius = "var(--radius-xl)"; buttonRadius = "var(--radius-full)"; cardRadius = "var(--radius-xl)"; vibe = "Human, authentic, warm, approachable" },
    @{ name = "creative-studio"; display = "Syne"; heading = "Syne"; body = "Inter"; accent = "#1a1a2e"; accentHover = "#0f0f1a"; accentLight = "#f0f0f5"; accentMuted = "#8b8ba3"; bg = "#fafafa"; bgElevated = "#ffffff"; bgSubtle = "#f0f0f5"; fg = "#1a1a2e"; fgMuted = "#6b6b7b"; border = "#e0e0e8"; radius = "var(--radius-sm)"; buttonRadius = "var(--radius-sm)"; cardRadius = "var(--radius-md)"; vibe = "Portfolio-first, visual density, curated chaos" },
    @{ name = "saas-product-led"; display = "Geist"; heading = "Geist"; body = "Geist"; code = "Geist Mono"; accent = "#6366f1"; accentHover = "#4f46e5"; accentLight = "#eef2ff"; accentMuted = "#c7d2fe"; bg = "#ffffff"; bgElevated = "#fafafa"; bgSubtle = "#f5f5f5"; fg = "#0f172a"; fgMuted = "#64748b"; border = "#e2e8f0"; radius = "var(--radius-md)"; buttonRadius = "var(--radius-md)"; cardRadius = "var(--radius-lg)"; vibe = "Demo-driven, dev-friendly, clean" },
    @{ name = "innovation-lab"; display = "Inter Variable"; heading = "Inter Variable"; body = "Inter Variable"; accent = "#00ff88"; accentHover = "#33ff99"; accentLight = "#00331a"; accentMuted = "#00cc66"; bg = "#050508"; bgElevated = "#0a0a0f"; bgSubtle = "#111116"; fg = "#fafafa"; fgMuted = "#888899"; border = "#1a1a22"; radius = "var(--radius-lg)"; buttonRadius = "var(--radius-full)"; cardRadius = "var(--radius-xl)"; vibe = "Experimental, motion, 3D, glassmorphism" },
    @{ name = "corporate-institutional"; display = "Merriweather"; heading = "Merriweather"; body = "Source Sans 3"; accent = "#1e3a5f"; accentHover = "#152a4a"; accentLight = "#eef3f8"; accentMuted = "#9db4d4"; gold = "#c8a951"; bg = "#ffffff"; bgElevated = "#f8f9fa"; bgSubtle = "#f1f3f5"; fg = "#1a1a2e"; fgMuted = "#5c5c70"; border = "#dee2e6"; radius = "var(--radius-md)"; buttonRadius = "var(--radius-md)"; cardRadius = "var(--radius-lg)"; vibe = "Structured, compliant, multi-audience" },
    @{ name = "mission-driven"; display = "Literata"; heading = "Literata"; body = "Inter"; accent = "#e86c00"; accentHover = "#cc5800"; accentLight = "#fff3e8"; accentMuted = "#f5c896"; bg = "#fefcf8"; bgElevated = "#ffffff"; bgSubtle = "#faf8f3"; fg = "#1d1d1d"; fgMuted = "#6b5b4a"; border = "#e8dfd0"; radius = "var(--radius-lg)"; buttonRadius = "var(--radius-full)"; cardRadius = "var(--radius-xl)"; vibe = "Story-led, evidence-based, transparent" },
    @{ name = "developer-platform"; display = "IBM Plex Sans"; heading = "IBM Plex Sans"; body = "IBM Plex Sans"; code = "JetBrains Mono"; accent = "#00d4ff"; accentHover = "#33ddff"; accentLight = "#002b33"; accentMuted = "#008c99"; bg = "#0d1117"; bgElevated = "#161b22"; bgSubtle = "#21262d"; fg = "#e6edf3"; fgMuted = "#8b949e"; border = "#30363d"; radius = "var(--radius-md)"; buttonRadius = "var(--radius-md)"; cardRadius = "var(--radius-lg)"; vibe = "API-first, dark-native, searchable" },
    @{ name = "modular-agency"; display = "Inter"; heading = "Inter"; body = "Inter"; accent = "#6366f1"; accentHover = "#4f46e5"; accentLight = "#eef2ff"; accentMuted = "#c7d2fe"; bg = "#fafafa"; bgElevated = "#ffffff"; bgSubtle = "#f5f5f5"; fg = "#18181b"; fgMuted = "#71717a"; border = "#e4e4e7"; radius = "var(--radius-md)"; buttonRadius = "var(--radius-md)"; cardRadius = "var(--radius-lg)"; vibe = "Component showcase, themeable, documented" }
)

function GetTitle($t, $isId) {
    switch($t.name) {
        "deep-tech-frontier" { if($isId) { return "Deep Tech Frontier — Teknologi Masa Depan Indonesia" } else { return "Deep Tech Frontier — Engineering the Impossible" } }
        "umkm-warmth" { if($isId) { return "UMKM Warmth — Kerajinan Autentik Indonesia" } else { return "UMKM Warmth — Authentic Indonesian Craftsmanship" } }
        "creative-studio" { if($isId) { return "Creative Studio — Desain yang Berbicara" } else { return "Creative Studio — Design That Speaks" } }
        "saas-product-led" { if($isId) { return "SaaS Product-Led — Demo Dulu, Bicara Nanti" } else { return "SaaS Product-Led — Show, Don't Tell" } }
        "innovation-lab" { if($isId) { return "Innovation Lab — Eksperimen di Ujung Batas" } else { return "Innovation Lab — Experiments at the Edge" } }
        "corporate-institutional" { if($isId) { return "Corporate Institutional — Kepercayaan Terukur" } else { return "Corporate Institutional — Measurable Trust" } }
        "mission-driven" { if($isId) { return "Mission Driven — Dampak Nyata, Bukan Janji" } else { return "Mission Driven — Real Impact, Not Promises" } }
        "developer-platform" { if($isId) { return "Developer Platform — API First, Docs Selalu" } else { return "Developer Platform — API First, Docs Always" } }
        "modular-agency" { if($isId) { return "Modular Agency — Bangun Sekali, Adaptasi Selamanya" } else { return "Modular Agency — Build Once, Adapt Forever" } }
        default { return "Enterprise Authority" }
    }
}

function GetDesc($t, $isId) {
    switch($t.name) {
        "deep-tech-frontier" { if($isId) { return "Penerbangan antariksa, komputasi kuantum, dan sistem propulsi generasi baru untuk Indonesia." } else { return "Next-generation aerospace, quantum computing, and advanced propulsion systems." } }
        "umkm-warmth" { if($isId) { return "Temukan produk UMKM Indonesia yang otentik. Dibuat tangan dengan tradisi, didukung komunitas." } else { return "Discover authentic Indonesian UMKM products. Handcrafted with tradition, powered by community." } }
        "creative-studio" { if($isId) { return "Studio kreatif: branding, desain produk, arsitektur visual. Portofolio yang membuktikan kemampuan." } else { return "Creative studio: branding, product design, visual architecture. Portfolio that proves capability." } }
        "saas-product-led" { if($isId) { return "Produk B2B SaaS dengan demo interaktif. Dibangun untuk developer, oleh developer." } else { return "B2B SaaS with interactive demos. Built for developers, by developers." } }
        "innovation-lab" { if($isId) { return "R&D, AI, komputasi kuantum, bioteknologi. Mendorong batas yang mungkin." } else { return "R&D, AI, quantum computing, biotech. Pushing the boundaries of possible." } }
        "corporate-institutional" { if($isId) { return "Perbankan, asuransi, BUMN, universitas. Tata kelola, kepatuhan, transparansi." } else { return "Banking, insurance, SOEs, universities. Governance, compliance, transparency." } }
        "mission-driven" { if($isId) { return "Non-profit, teknologi iklim, perusahaan sosial. Bukti dampak, transparansi penuh." } else { return "Non-profits, climate tech, social enterprise. Evidence-based impact, full transparency." } }
        "developer-platform" { if($isId) { return "Platform cloud, API, infrastructure. Dokumentasi yang bisa dicopy-paste, playground live." } else { return "Cloud platforms, APIs, infrastructure. Copy-pasteable docs, live playgrounds." } }
        "modular-agency" { if($isId) { return "White-label, design system, multi-brand. Komponen yang bisa di-tema, terdokumentasi." } else { return "White-label, design systems, multi-brand. Themeable components, documented." } }
        default { return "Enterprise-grade solutions for modern organizations." }
    }
}

function GetDisplayName($t) {
    $parts = $t.name.Split('-')
    $result = @()
    foreach($p in $parts) { $result += $p.Substring(0,1).ToUpper() + $p.Substring(1).ToLower() }
    return $result -join ' '
}

function GetSkipText($isId) {
    if($isId) { return "Langsung ke konten utama" } else { return "Skip to main content" }
}

function WriteLayout($t, $v, $isNextjs, $isId) {
    $basePath = "D:\PROJECT\template-design\$($t.name)\$v\src"
    if($isNextjs) { $layoutPath = "$basePath\app\layout.tsx" } else { $layoutPath = "$basePath\layouts\Layout.astro" }
    
    $siteUrl = if($isId) { "https://$($t.name.replace('-','')).co.id" } else { "https://$($t.name.replace('-','')).example.com" }
    $ogImage = if($isId) { "/og-image-id.png" } else { "/og-image.png" }
    $locale = if($isId) { "id" } else { "en" }
    $localeName = if($isId) { "id_ID" } else { "en_US" }
    $lang = if($isId) { "id" } else { "en" }
    $title = GetTitle $t $isId
    $desc = GetDesc $t $isId
    $displayName = GetDisplayName $t
    $skipText = GetSkipText $isId
    
    $fontCode = if($t.code) { $t.code } else { "" }
    
    if($isNextjs) {
        $fontFamily = "$($t.display), $($t.body)"
        if($fontCode) { $fontFamily += ", $fontCode" }
        $fontImports = @"
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=$($t.display.Replace(' ', '+')):wght@300;400;500;600;700&family=$($t.body.Replace(' ', '+')):wght@400;500;600;700$(if($fontCode) { "&family=$($fontCode.Replace(' ', '+')):wght@400;500;600;700" })&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=$($t.display.Replace(' ', '+')):wght@300;400;500;600;700&family=$($t.body.Replace(' ', '+')):wght@400;500;600;700$(if($fontCode) { "&family=$($fontCode.Replace(' ', '+')):wght@400;500;600;700" })&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=$($t.display.Replace(' ', '+')):wght@300;400;500;600;700&family=$($t.body.Replace(' ', '+')):wght@400;500;600;700$(if($fontCode) { "&family=$($fontCode.Replace(' ', '+')):wght@400;500;600;700" })&display=swap" />
        </noscript>
"@
        
        $content = @"
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '$title',
    template: '%s | $displayName',
  },
  description: '$desc',
  keywords: ['$($t.name.Replace('-', ' '))', 'company', 'profile', 'landing page'],
  authors: [{ name: '$displayName' }],
  creator: '$displayName',
  publisher: '$displayName',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: '$localeName',
    url: '$siteUrl',
    siteName: '$displayName',
    title: '$title',
    description: '$desc',
    images: [{ url: '$ogImage', width: 1200, height: 630, alt: '$displayName' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '$title',
    description: '$desc',
    images: ['$ogImage'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '$($t.bg)' },
    { media: '(prefers-color-scheme: dark)', color: '$($t.bgElevated)' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="$lang" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
$fontImports
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          $skipText
        </a>
        {children}
      </body>
    </html>
  );
}
"@
    } else {
        $content = @"
---
interface Props {
  title: string;
  description: string;
  canonicalURL?: string;
  ogImage?: string;
}

const { title, description, canonicalURL = '$siteUrl', ogImage = '$ogImage' } = Astro.props;
---

<!DOCTYPE html>
<html lang="$lang">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content="$displayName" />
    <meta property="og:locale" content="$localeName" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=$($t.display.Replace(' ', '+')):wght@300;400;500;600;700&family=$($t.body.Replace(' ', '+')):wght@400;500;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=$($t.display.Replace(' ', '+')):wght@300;400;500;600;700&family=$($t.body.Replace(' ', '+')):wght@400;500;600;700&display=swap" media="print" onload="this.media='all'" />
    <noscript>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=$($t.display.Replace(' ', '+')):wght@300;400;500;600;700&family=$($t.body.Replace(' ', '+')):wght@400;500;600;700&display=swap" />
    </noscript>
    
    <link rel="stylesheet" href="/styles/global.css" />
  </head>
  <body>
    <a href="#main-content" class="skip-link">$skipText</a>
    <slot />
  </body>
</html>
"@
    }
    
    $content | Out-File -FilePath $layoutPath -Encoding utf8
    Write-Host "Created layout for $($t.name) $v"
}

function WritePage($t, $v, $isNextjs, $isId) {
    $basePath = "D:\PROJECT\template-design\$($t.name)\$v\src"
    if($isNextjs) { $pagePath = "$basePath\app\page.tsx" } else { $pagePath = "$basePath\pages\index.astro" }
    
    $displayName = GetDisplayName $t
    $vibe = $t.vibe
    
    if($isNextjs) {
        $content = @"
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Landing page for $displayName',
};

const navigation = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Home">
          <span className="navbar-name">$displayName</span>
        </Link>
        <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="navbar-link">{item.label}</Link>
          ))}
        </nav>
        <div className="navbar-actions">
          <Link href="/contact" className="btn btn-primary btn-sm">Contact</Link>
        </div>
        <button className="navbar-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span className="navbar-toggle-icon" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <h1 id="hero-title" className="heading-display hero-title">
          Welcome to $displayName
        </h1>
        <p className="hero-description">
          This is the $($t.name) template - $vibe
        </p>
        <div className="hero-actions">
          <Link href="/about" className="btn btn-primary btn-lg">Learn More</Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta">
          <h2 id="cta-title" className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">Contact us today to learn more about our services.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-name">$displayName</span>
            <p className="footer-description">A modern company profile template.</p>
          </div>
          <nav aria-label="Quick Links">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 $displayName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
"@
    } else {
        $content = @"
---
import Layout from '../layouts/Layout.astro';
import '../styles/global.css';

const navigation = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];
---

<Layout title="Welcome to $displayName" description="Landing page for $displayName">
  <header class="navbar" role="banner">
    <div class="navbar-inner">
      <a href="/" class="navbar-brand" aria-label="Home">
        <span class="navbar-name">$displayName</span>
      </a>
      <nav class="navbar-nav" role="navigation" aria-label="Main navigation">
        {navigation.map(item => <a href={item.href} class="navbar-link">{item.label}</a>)}
      </nav>
      <div class="navbar-actions">
        <a href="/contact" class="btn btn-primary btn-sm">Contact</a>
      </div>
      <button class="navbar-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span class="navbar-toggle-icon" aria-hidden="true"></span>
      </button>
    </div>
  </header>

  <main id="main-content" role="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero-content">
        <h1 id="hero-title" class="heading-display hero-title">Welcome to $displayName</h1>
        <p class="hero-description">This is the $($t.name) template - $vibe</p>
        <div class="hero-actions">
          <a href="/about" class="btn btn-primary btn-lg">Learn More</a>
          <a href="/contact" class="btn btn-secondary btn-lg">Get in Touch</a>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="cta-title">
      <div class="container">
        <div class="cta">
          <h2 id="cta-title" class="cta-title">Ready to Get Started?</h2>
          <p class="cta-description">Contact us today to learn more about our services.</p>
          <div class="cta-actions">
            <a href="/contact" class="btn btn-primary btn-lg">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="footer-name">$displayName</span>
          <p class="footer-description">A modern company profile template.</p>
        </div>
        <nav aria-label="Quick Links">
          <h3 class="footer-title">Quick Links</h3>
          <div class="footer-links">
            <a href="/" class="footer-link">Home</a>
            <a href="/about" class="footer-link">About</a>
            <a href="/services" class="footer-link">Services</a>
            <a href="/contact" class="footer-link">Contact</a>
          </div>
        </nav>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">© 2024 $displayName. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script>
    const toggle = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('.navbar-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });
    }
  </script>
</Layout>
"@
    }
    
    $content | Out-File -FilePath $pagePath -Encoding utf8
    Write-Host "Created page for $($t.name) $v"
}

foreach($t in $templates) {
    foreach($v in @("nextjs-intl", "nextjs-id", "astro-intl", "astro-id")) {
        $isNextjs = $v.StartsWith("nextjs")
        $isId = $v.EndsWith("-id")
        WriteLayout $t $v $isNextjs $isId
        WritePage $t $v $isNextjs $isId
    }
}
Write-Host "All layouts and pages generated!"