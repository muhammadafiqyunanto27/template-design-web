$templates = @(
    @{ name = "enterprise-authority"; display = "Enterprise Authority"; accent = "#2563eb"; accentLight = "#eff6ff"; descR = "Restrained, authoritative, accessible. For Fortune 500, governments, big tech."; },
    @{ name = "deep-tech-frontier"; display = "Deep Tech Frontier"; accent = "#00d4ff"; accentLight = "#003d4d"; descR = "Dark, technical, data-dense. For aerospace, quantum, defense."; },
    @{ name = "umkm-warmth"; display = "UMKM Warmth"; accent = "#c8553d"; accentLight = "#fdf3f0"; descR = "Human, authentic, warm. For local coffee, batik, bengkel, restoran keluarga."; },
    @{ name = "creative-studio"; display = "Creative Studio"; accent = "#1a1a2e"; accentLight = "#f0f0f5"; descR = "Portfolio-first, visual density. For design agencies, architects."; },
    @{ name = "saas-product-led"; display = "SaaS Product-Led"; accent = "#6366f1"; accentLight = "#eef2ff"; descR = "Demo-driven, developer-friendly. For B2B SaaS, dev tools, AI startup."; },
    @{ name = "innovation-lab"; display = "Innovation Lab"; accent = "#00ff88"; accentLight = "#00331a"; descR = "Experimental, motion-heavy, glassmorphism. For R&D labs."; },
    @{ name = "corporate-institutional"; display = "Corporate Institutional"; accent = "#1e3a5f"; accentLight = "#eef3f8"; descR = "Structured, compliant. For bank, insurance, universities."; },
    @{ name = "mission-driven"; display = "Mission Driven"; accent = "#e86c00"; accentLight = "#fff3e8"; descR = "Story-led, evidence-based. For non-profit, climate tech."; },
    @{ name = "developer-platform"; display = "Developer Platform"; accent = "#00d4ff"; accentLight = "#002b33"; descR = "API-first, dark-native. For cloud provider, API company."; },
    @{ name = "modular-agency"; display = "Modular Agency"; accent = "#6366f1"; accentLight = "#eef2ff"; descR = "Component showcase, themeable. For white-label, design system."; }
)

$variants = @(
    @{ id = "nextjs-intl"; label = "Next.js International"; locale = "English"; fw = "Next.js"; },
    @{ id = "nextjs-id"; label = "Next.js Indonesia"; locale = "Indonesia"; fw = "Next.js"; },
    @{ id = "astro-intl"; label = "Astro International"; locale = "English"; fw = "Astro"; },
    @{ id = "astro-id"; label = "Astro Indonesia"; locale = "Indonesia"; fw = "Astro"; }
)

$basePath = "D:\PROJECT\template-design\templates"

$cssTemplate = @'
<style>
    :root {
      --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
      --font-text:    "JetBrains Mono", ui-monospace, monospace;
      --step-0: 0.875rem;   --step-1: 1.05rem;   --step-2: 1.26rem;
      --step-3: 1.51rem;    --step-4: 1.81rem;   --step-5: 2.17rem;
      --step-6: 2.60rem;    --step-7: 3.12rem;   --step-8: 3.75rem;
      --space-1: 0.25rem;   --space-2: 0.5rem;   --space-3: 0.75rem;
      --space-4: 1rem;      --space-5: 1.25rem;  --space-6: 1.5rem;
      --space-8: 2rem;      --space-10: 2.5rem;  --space-12: 3rem;
      --space-16: 4rem;     --space-24: 6rem;    --space-32: 8rem;
      --base:   #faf9f6;
      --surface:#ffffff;
      --ink:    #0a0a0a;
      --ink-2:  #4a4a4a;
      --ink-3:  #8a8a8a;
      --line:   #ddd8d0;
      --accent: __ACCENT__;
      --accent-light: __ACCENTLIGHT__;
      --radius: 0;
      --border: 1px solid var(--line);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; background: var(--base); }
    body { font-family: var(--font-text); font-size: var(--step-0); line-height: 1.5; color: var(--ink); background: var(--base); }
    a { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; }
    a:hover { border-bottom-color: var(--accent); }
    header { border-bottom: var(--border); background: var(--base); position: sticky; top: 0; z-index: 10; }
    .header-inner { max-width: 1200px; margin: 0 auto; padding: var(--space-4) var(--space-6); display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); }
    .logo { font-family: var(--font-display); font-size: var(--step-4); font-weight: 800; letter-spacing: -0.02em; color: var(--ink); }
    .logo span { color: var(--accent); }
    nav { display: flex; gap: var(--space-4); }
    nav a { font-size: var(--step-0); color: var(--ink-2); padding: var(--space-1) 0; border-bottom: 2px solid transparent; }
    nav a:hover { color: var(--ink); border-bottom-color: var(--ink); }
    .hero { padding: var(--space-32) var(--space-6) var(--space-24); text-align: left; max-width: 1200px; margin: 0 auto; }
    .hero-eyebrow { font-family: var(--font-display); font-size: var(--step-1); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); margin-bottom: var(--space-3); border-left: 3px solid var(--accent); padding-left: var(--space-3); display: inline-block; }
    .hero h1 { font-family: var(--font-display); font-size: var(--step-8); font-weight: 800; line-height: 1.05; letter-spacing: -0.04em; color: var(--ink); margin-bottom: var(--space-6); max-width: 70ch; }
    .hero h1 .accent { color: var(--accent); }
    .hero p { font-size: var(--step-1); color: var(--ink-2); max-width: 55ch; margin-bottom: var(--space-8); }
    .hero-actions { display: flex; gap: var(--space-3); flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; gap: var(--space-2); padding: var(--space-3) var(--space-6); font-family: var(--font-display); font-size: var(--step-0); font-weight: 600; color: var(--ink); background: transparent; border: var(--border); border-radius: var(--radius); cursor: pointer; transition: all 220ms cubic-bezier(0.2, 0, 0, 1); text-decoration: none; }
    .btn:hover { background: var(--ink); color: var(--base); border-color: var(--ink); }
    .btn-accent { background: var(--accent); color: var(--base); border-color: var(--accent); }
    .btn-accent:hover { background: #b04834; border-color: #b04834; }
    .section { max-width: 1200px; margin: 0 auto var(--space-32); padding: 0 var(--space-6); }
    .section-eyebrow { font-family: var(--font-display); font-size: var(--step-1); font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); margin-bottom: var(--space-2); border-left: 3px solid var(--accent); padding-left: var(--space-3); display: inline-block; }
    .section-title { font-family: var(--font-display); font-size: var(--step-5); font-weight: 800; line-height: 1.1; color: var(--ink); margin-bottom: var(--space-3); }
    .section-desc { font-size: var(--step-1); color: var(--ink-2); max-width: 60ch; margin-bottom: var(--space-6); }
    .grid { display: grid; gap: var(--space-6); }
    .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .card { border: var(--border); background: var(--surface); padding: var(--space-6); border-radius: var(--radius); }
    .card-badge { font-size: var(--step-0); font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-2); }
    .card-title { font-family: var(--font-display); font-size: var(--step-2); font-weight: 700; color: var(--ink); line-height: 1.2; margin-bottom: var(--space-2); }
    .card-text { font-size: var(--step-0); color: var(--ink-2); line-height: 1.6; }
    .footer { max-width: 1200px; margin: 0 auto var(--space-16); padding: 0 var(--space-6); border-top: var(--border); padding-top: var(--space-8); font-family: var(--font-text); font-size: var(--step-0); color: var(--ink-3); text-align: center; }
    footer a { color: var(--ink-3); }
    @media (max-width: 768px) {
      .header-inner { padding: var(--space-3) var(--space-4); flex-direction: column; align-items: stretch; gap: var(--space-3); }
      nav { flex-direction: column; align-items: flex-start; gap: var(--space-2); }
      .hero { padding: var(--space-24) var(--space-4) var(--space-16); }
      .hero h1 { font-size: var(--step-6); }
      .section { padding: 0 var(--space-4); }
      .grid-cols-3 { grid-template-columns: 1fr; }
    }
</style>
'@

foreach($t in $templates) {
    foreach($v in $variants) {
        $folderPath = "$basePath\$($t.name)\$($v.id)"
        New-Item -ItemType Directory -Path $folderPath -Force | Out-Null
        
        $css = $cssTemplate -replace "__ACCENT__", $t.accent -replace "__ACCENTLIGHT__", $t.accentLight
        
        $html = @"
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="$($t.descR)" />
  <title>$($t.display) — $($v.label)</title>
  $css
</head>
<body>

  <header>
    <div class="header-inner">
      <a href="/" class="logo">Template<span>Design</span></a>
      <nav>
        <a href="/nextjs-intl/">Next.js Intl</a>
        <a href="/nextjs-id/">Next.js ID</a>
        <a href="/astro-intl/">Astro Intl</a>
        <a href="/astro-id/">Astro Indonesia</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <span class="hero-eyebrow">Template</span>
    <h1>$($t.display)<span class="accent"> — $($v.label)</span></h1>
    <p>$($t.descR)</p>
    <div class="hero-actions">
      <a href="/" class="btn">← Kembali ke Home</a>
      <a href="/$($v.id)/" class="btn btn-accent">Lihat Semua $($v.label)</a>
    </div>
  </section>

  <section class="section">
    <span class="section-eyebrow">Company Profile</span>
    <h2 class="section-title">Tentang Perusahaan</h2>
    <p class="section-desc">$($t.display) adalah salah satu template company profile terkemuka dalam koleksi kami, dirancang khusus untuk bisnis skala $(if($v.id -eq "nextjs-id" -or $v.id -eq "astro-id") { "Indonesia" } else { "global" }). Setiap elemen dirancang dengan pendekatan Swiss Editorial — typography yang雄terang, ruang yang cukup, dan warna yang hemat.</p>
    
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
Write-Host "All 40 template pages generated!"