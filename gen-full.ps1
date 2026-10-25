$templates = @(
    @{ name = "enterprise-authority"; display = "Enterprise Authority"; accent = "#1e3a5f"; accentLight = "#eef3f8"; desc = "Restrained, authoritative, accessible. For Fortune 500, governments, big tech."; },
    @{ name = "deep-tech-frontier"; display = "Deep Tech Frontier"; accent = "#06b6d4"; accentLight = "#f0fdfa"; desc = "Dark, technical, data-dense. For aerospace, quantum, defense."; },
    @{ name = "umkm-warmth"; display = "UMKM Warmth"; accent = "#c8553d"; accentLight = "#fdf3f0"; desc = "Human, authentic, warm. For local coffee, batik, bengkel, restoran keluarga."; },
    @{ name = "creative-studio"; display = "Creative Studio"; accent = "#be185d"; accentLight = "#fdf2f8"; desc = "Portfolio-first, visual density. For design agencies, architects."; },
    @{ name = "saas-product-led"; display = "SaaS Product-Led"; accent = "#2563eb"; accentLight = "#eff6ff"; desc = "Demo-driven, developer-friendly. For B2B SaaS, dev tools, AI startup."; },
    @{ name = "innovation-lab"; display = "Innovation Lab"; accent = "#10b981"; accentLight = "#f0fdf4"; desc = "Experimental, motion-heavy, glassmorphism. For R&D labs."; },
    @{ name = "corporate-institutional"; display = "Corporate Institutional"; accent = "#1e3a5f"; accentLight = "#eef3f8"; desc = "Structured, compliant. For bank, insurance, universities."; },
    @{ name = "mission-driven"; display = "Mission Driven"; accent = "#e86c00"; accentLight = "#fff3e8"; desc = "Story-led, evidence-based. For non-profit, climate tech."; },
    @{ name = "developer-platform"; display = "Developer Platform"; accent = "#06b6d4"; accentLight = "#f0fdfa"; desc = "API-first, dark-native. For cloud provider, API company."; },
    @{ name = "modular-agency"; display = "Modular Agency"; accent = "#e11d48"; accentLight = "#fef2f2"; desc = "Component showcase, themeable. For white-label, design system."; }
)

$variants = @(
    @{ id = "nextjs-intl"; label = "Next.js International"; locale = "English"; fw = "Next.js"; },
    @{ id = "nextjs-id"; label = "Next.js Indonesia"; locale = "Indonesia"; fw = "Next.js"; },
    @{ id = "astro-intl"; label = "Astro International"; locale = "English"; fw = "Astro"; },
    @{ id = "astro-id"; label = "Astro Indonesia"; locale = "Indonesia"; fw = "Astro"; }
)

$basePath = "D:\PROJECT\template-design\templates"

function GetCss($accent, $accentLight) {
    return @"
<style>
    :root {
      --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
      --font-text:    "Inter", ui-sans-serif, system-ui, sans-serif;
      --font-mono:    "JetBrains Mono", ui-monospace, monospace;
      --step-0: 0.875rem;   --step-1: 1.25rem;   --step-2: 1.563rem;
      --step-3: 1.953rem;   --step-4: 2.441rem;   --step-5: 3.052rem;
      --step-6: 3.815rem;   --step-7: 4.769rem;   --step-8: 5.961rem;
      --space-3xs: 0.25rem; --space-2xs: 0.5rem;   --space-xs: 0.75rem;
      --space-s:   1rem;    --space-m:   1.5rem;   --space-l:   2rem;
      --space-xl:  3rem;    --space-2xl: 4.5rem;   --space-3xl: 6rem;
      --space-section: clamp(3rem, 2rem + 5vw, 7rem);
      --base:   #faf9f6;
      --surface:#ffffff;
      --ink:    #0a0a0a;
      --ink-2:  #4a4a4a;
      --ink-3:  #8a8a8a;
      --line:   #ddd8d0;
      --accent: $accent;
      --accent-light: $accentLight;
      --radius: 0;
      --border: 1px solid var(--line);
      --dur: 220ms; --ease: cubic-bezier(0.2, 0, 0, 1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; background: var(--base); }
    body { font-family: var(--font-text); font-size: var(--step-0); line-height: 1.5; color: var(--ink); background: var(--base); -webkit-font-smoothing: antialiased; }
    a { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; }
    a:hover { border-bottom-color: var(--accent); }
    header { border-bottom: var(--border); background: var(--base); position: sticky; top: 0; z-index: 100; }
    .header-inner { max-width: 1200px; margin: 0 auto; padding: var(--space-4) var(--space-l); display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); }
    .navbar-brand { font-family: var(--font-display); font-size: var(--step-4); font-weight: 800; letter-spacing: -0.02em; color: var(--ink); text-decoration: none; }
    .navbar-brand span { color: var(--accent); }
    .navbar-nav { display: flex; gap: var(--space-4); }
    .navbar-link { font-size: var(--step-0); color: var(--ink-2); text-decoration: none; border-bottom: 2px solid transparent; padding: var(--space-1) 0; }
    .navbar-link:hover { color: var(--ink); border-bottom-color: var(--ink); }
    .hero { padding-block: var(--space-section-lg) var(--space-2xl); text-align: left; max-width: 1200px; margin: 0 auto; padding-inline: var(--space-l); }
    .hero-eyebrow { font-family: var(--font-display); font-size: var(--step-1); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); margin-bottom: var(--space-3); border-left: 3px solid var(--accent); padding-left: var(--space-3); display: inline-block; }
    .hero h1 { font-family: var(--font-display); font-size: var(--step-7); font-weight: 800; line-height: 1.05; letter-spacing: -0.04em; color: var(--ink); margin-bottom: var(--space-6); max-width: 60ch; }
    .hero h1 .accent { color: var(--accent); }
    .hero p { font-family: var(--font-text); font-size: var(--step-1); line-height: 1.6; color: var(--ink-2); max-width: 55ch; margin-bottom: var(--space-8); }
    .hero-actions { display: flex; gap: var(--space-3); flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; gap: var(--space-2); padding: var(--space-3) var(--space-6); font-family: var(--font-display); font-size: var(--step-0); font-weight: 600; color: var(--ink); background: transparent; border: var(--border); border-radius: var(--radius); cursor: pointer; transition: all var(--dur) var(--ease); text-decoration: none; }
    .btn:hover { background: var(--ink); color: var(--base); border-color: var(--ink); }
    .btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
    .btn-accent { background: var(--accent); color: var(--base); border-color: var(--accent); }
    .btn-accent:hover { background: var(--ink); border-color: var(--ink); }
    .section { max-width: 1200px; margin: 0 auto var(--space-3xl); padding: 0 var(--space-l); }
    .section-eyebrow { font-family: var(--font-display); font-size: var(--step-1); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); margin-bottom: var(--space-2); border-left: 3px solid var(--accent); padding-left: var(--space-3); display: inline-block; }
    .section-title { font-family: var(--font-display); font-size: var(--step-5); font-weight: 800; line-height: 1.1; color: var(--ink); margin-bottom: var(--space-3); }
    .section-description { font-family: var(--font-text); font-size: var(--step-1); line-height: 1.6; color: var(--ink-2); max-width: 60ch; margin-bottom: var(--space-6); }
    .grid { display: grid; gap: var(--space-l); }
    .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .card { border: var(--border); background: var(--surface); padding: var(--space-xl); border-radius: var(--radius); }
    .card:hover { border-color: var(--accent); }
    .card-badge { font-size: var(--step-0); font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-2); }
    .card-title { font-family: var(--font-display); font-size: var(--step-2); font-weight: 700; color: var(--ink); line-height: 1.2; margin-bottom: var(--space-2); }
    .card-text { font-size: var(--step-0); color: var(--ink-2); line-height: 1.6; }
    .footer { max-width: 1200px; margin: 0 auto var(--space-2xl); padding: var(--space-xl) var(--space-l); border-top: var(--border); font-family: var(--font-text); font-size: var(--step-0); color: var(--ink-3); text-align: center; }
    footer a { color: var(--ink-3); }
    .cta { text-align: left; border: var(--border); border-radius: var(--radius); padding: var(--space-3xl) var(--space-xl); }
    .cta-title { font-family: var(--font-display); font-size: var(--step-6); font-weight: 800; color: var(--ink); margin-bottom: var(--space-4); }
    .cta-actions { display: flex; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-6); }
    .trust-bar { padding-block: var(--space-xl); border-bottom: var(--border); background: var(--surface); }
    .trust-bar p { font-size: var(--step-0); color: var(--ink-2); text-align: center; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-4); }
    .logo-cloud { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: var(--space-6); opacity: 0.4; transition: opacity var(--dur) var(--ease); filter: grayscale(100%); }
    .logo-cloud:hover { opacity: 0.8; filter: grayscale(0%); }
    .stat { display: flex; flex-direction: column; gap: var(--space-1); }
    .stat-value { font-family: var(--font-mono); font-size: var(--step-5); font-weight: 700; color: var(--ink); }
    .stat-label { font-size: var(--step-0); color: var(--ink-2); }
    @media (max-width: 768px) {
      .header-inner { padding: var(--space-3) var(--space-4); flex-direction: column; align-items: stretch; gap: var(--space-3); }
      .navbar-nav { flex-direction: column; align-items: flex-start; gap: var(--space-2); }
      .hero { padding-block: var(--space-2xl) var(--space-xl); padding-inline: var(--space-4); }
      .hero h1 { font-size: var(--step-6); }
      .section { padding: 0 var(--space-4); margin-bottom: var(--space-2xl); }
      .grid-cols-3, .grid-cols-2 { grid-template-columns: 1fr; }
      .cta { padding: var(--space-2xl) var(--space-xl); }
    }
</style>
"@
}

foreach($t in $templates) {
    foreach($v in $variants) {
        $folderPath = "$basePath\$($t.name)\$($v.id)"
        New-Item -ItemType Directory -Path $folderPath -Force | Out-Null

        $css = GetCss $t.accent $t.accentLight

        $html = @"
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="$($t.desc)" />
  <title>$($t.display) — $($v.label)</title>
  $css
</head>
<body>

  <header>
    <div class="header-inner">
      <a href="/" class="navbar-brand">Template<span>Design</span></a>
      <nav class="navbar-nav">
        <a href="/nextjs-intl/">Next.js Intl</a>
        <a href="/nextjs-id/">Next.js ID</a>
        <a href="/astro-intl/">Astro Intl</a>
        <a href="/astro-id/">Astro Indonesia</a>
      </nav>
    </div>
  </header>

  <section class="hero section-lg">
    <span class="hero-eyebrow">Template</span>
    <h1>$($t.display)<span class="accent"> — $($v.label)</span></h1>
    <p>$($t.desc)</p>
    <div class="hero-actions">
      <a href="/" class="btn">← Kembali ke Home</a>
      <a href="/$($v.id)/" class="btn btn-accent">Lihat Semua $($v.label)</a>
    </div>
  </section>

  <section class="trust-bar">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 var(--space-l);">
      <p>Dipercaya oleh pemimpin industri di seluruh dunia</p>
      <div class="logo-cloud">
        <div style="font-weight: 600; color: var(--ink-2); font-size: var(--step-0); font-family: var(--font-mono);">Global Financial Bank</div>
        <div style="font-weight: 600; color: var(--ink-2); font-size: var(--step-0); font-family: var(--font-mono);">National Healthcare System</div>
        <div style="font-weight: 600; color: var(--ink-2); font-size: var(--step-0); font-family: var(--font-mono);">Global E-commerce Platform</div>
        <div style="font-weight: 600; color: var(--ink-2); font-size: var(--step-0); font-family: var(--font-mono);">Aerospace Leader</div>
        <div style="font-weight: 600; color: var(--ink-2); font-size: var(--step-0); font-family: var(--font-mono);">Telecommunications Giant</div>
        <div style="font-weight: 600; color: var(--ink-2); font-size: var(--step-0); font-family: var(--font-mono);">Government Agency</div>
      </div>
    </div>
  </section>

  <section class="section">
    <span class="section-eyebrow">Company Profile</span>
    <h2 class="section-title">Tentang Perusahaan</h2>
    <p class="section-description">$($t.display) adalah salah satu template company profile terkemuka dalam koleksi kami, dirancang khusus untuk bisnis skala $(if($v.id -eq "nextjs-id" -or $v.id -eq "astro-id") { "Indonesia" } else { "global" }). Setiap elemen dirancang dengan pendekatan Swiss Editorial — typography yang tajam, ruang yang cukup, dan warna yang hemat.</p>

    <div class="grid grid-cols-3">
      <div class="card">
        <span class="card-badge">Framework</span>
        <h3 class="card-title">$($v.fw)</h3>
        <p class="card-text">Dibangun dengan $($v.fw) untuk performa optimal dan pengalaman pengembang yang nyaman.</p>
      </div>
      <div class="card">
        <span class="card-badge">Locale</span>
        <h3 class="card-title">$($v.locale)</h3>
        <p class="card-text">Tersedia dalam Bahasa Inggris dan Bahasa Indonesia dengan format mata uang, tanggal, dan nomor telepon lokal.</p>
      </div>
      <div class="card">
        <span class="card-badge">Static HTML</span>
        <h3 class="card-title">Ready Deploy</h3>
        <p class="card-text">Semua template adalah file HTML statis — bisa langsung di-deploy ke Vercel tanpa build process.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <span class="section-eyebrow">Case Studies</span>
    <h2 class="section-title">Dokumen Contoh</h2>
    <p class="section-description">Contoh implementasi template ini untuk berbagai klien industri.</p>

    <div class="grid grid-cols-3">
      <div class="card">
        <span class="card-badge">Bank Nasional</h3>
        <h3 class="card-title">Sistem Perbankan Digital</h3>
        <p class="card-text">Migrasi platform perbankan inti ke cloud-native dengan uptime 99,99%.</p>
      </div>
      <div class="card">
        <span class="card-badge">Rumah Sakit</h3>
        <h3 class="card-title">Sistem Rekam Medis</h3>
        <p class="card-text">Digitalisasi rekam medis pasien dengan enkripsi end-to-end.</p>
      </div>
      <div class="card">
        <span class="card-badge">E-commerce</h3>
        <h3 class="card-title">Platform Retail</h3>
        <p class="card-text">Arsitektur edge-native untuk lonjakan trafik puncak.</p>
      </div>
    </div>
  </section>

  <section class="cta">
    <h2 class="cta-title">Siap Membangun Perusahaan Anda?</h2>
    <div class="cta-actions">
      <a href="/" class="btn">Kembali ke Home</a>
      <a href="/$($v.id)/" class="btn btn-accent">Lihat Semua Template</a>
    </div>
  </section>

  <footer>
    Template Design System · <a href="/" style="color: var(--ink-3);">Kembali ke Home</a>
  </footer>

</body>
</html>
"@

        $html | Set-Content "$folderPath\index.html" -Encoding utf8
        Write-Host "Created: $($t.name)/$($v.id)"
    }
}
Write-Host "All 40 template pages generated with full design!"