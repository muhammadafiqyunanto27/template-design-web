$templates = @(
    @{ name = "enterprise-authority"; display = "Enterprise Authority"; desc = "Restrained, authoritative, accessible. Untuk Fortune 500, pemerintah, big tech."; },
    @{ name = "deep-tech-frontier"; display = "Deep Tech Frontier"; desc = "Dark, technical, data-dense. Untuk aerospace, quantum, defense."; },
    @{ name = "umkm-warmth"; display = "UMKM Warmth"; desc = "Human, authentic, warm. Untuk kopi lokal, batik, bengkel, restoran keluarga."; },
    @{ name = "creative-studio"; display = "Creative Studio"; desc = "Portfolio-first, visual density. Untuk design agen, arsitek, production house."; },
    @{ name = "saas-product-led"; display = "SaaS Product-Led"; desc = "Demo-driven, developer-friendly. Untuk B2B SaaS, dev tools, AI startup."; },
    @{ name = "innovation-lab"; display = "Innovation Lab"; desc = "Experimental, motion-heavy, glassmorphism. Untuk R&amp;D, Google X, DeepMind."; },
    @{ name = "corporate-institutional"; display = "Corporate Institutional"; desc = "Structured, compliant. Untuk bank, asuransi, BUMN, universitas."; },
    @{ name = "mission-driven"; display = "Mission Driven"; desc = "Story-led, evidence-based. Untuk non-profit, climate tech, sosial enterprise."; },
    @{ name = "developer-platform"; display = "Developer Platform"; desc = "API-first, dark-native. Untuk cloud provider, API company, infrastructure."; },
    @{ name = "modular-agency"; display = "Modular Agency"; desc = "Component showcase, themeable. Untuk white-label, design system."; }
)

$variants = @(
    @{ id = "nextjs-intl"; label = "Next.js International"; accent = "#2563eb"; locale = "English"; fw = "Next.js"; },
    @{ id = "nextjs-id"; label = "Next.js Indonesia"; accent = "#c8553d"; locale = "Indonesia"; fw = "Next.js"; },
    @{ id = "astro-intl"; label = "Astro International"; accent = "#00ff88"; locale = "English"; fw = "Astro"; },
    @{ id = "astro-id"; label = "Astro Indonesia"; accent = "#c8553d"; locale = "Indonesia"; fw = "Astro"; }
)

$basePath = "D:\PROJECT\template-design\templates"

foreach($t in $templates) {
    foreach($v in $variants) {
        $folderPath = "$basePath\$($t.name)\$($v.id)"
        
        $html = @"
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="$($t.desc)" />
  <title>$($t.display) — $($v.label)</title>
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
      --accent: $($v.accent);
      --radius: 0;
      --border: 1px solid var(--line);
      --dur: 220ms; --ease: cubic-bezier(0.2, 0, 0, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; background: var(--base); }
    body {
      font-family: var(--font-text);
      font-size: var(--step-0);
      line-height: 1.5;
      color: var(--ink);
      background: var(--base);
      -webkit-font-smoothing: antialiased;
    }

    a { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; }
    a:hover { border-bottom-color: var(--accent); }

    header {
      border-bottom: var(--border);
      background: var(--base);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--space-4) var(--space-6);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-4);
    }
    .logo {
      font-family: var(--font-display);
      font-size: var(--step-4);
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--ink);
    }
    .logo span { color: var(--accent); }
    nav { display: flex; gap: var(--space-4); }
    nav a {
      font-size: var(--step-0);
      color: var(--ink-2);
      padding: var(--space-1) 0;
      border-bottom: 2px solid transparent;
    }
    nav a:hover { color: var(--ink); border-bottom-color: var(--ink); }

    .hero {
      padding: var(--space-32) var(--space-6) var(--space-24);
      text-align: left;
      max-width: 1200px;
      margin: 0 auto;
    }
    .hero-eyebrow {
      font-family: var(--font-display);
      font-size: var(--step-1);
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: var(--space-3);
      border-left: 3px solid var(--accent);
      padding-left: var(--space-3);
      display: inline-block;
    }
    .hero h1 {
      font-family: var(--font-display);
      font-size: var(--step-8);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
      color: var(--ink);
      margin-bottom: var(--space-6);
      max-width: 70ch;
    }
    .hero h1 .accent { color: var(--accent); }
    .hero p {
      font-size: var(--step-1);
      color: var(--ink-2);
      max-width: 55ch;
      margin-bottom: var(--space-8);
    }
    .hero-actions {
      display: flex;
      gap: var(--space-3);
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      font-family: var(--font-display);
      font-size: var(--step-0);
      font-weight: 600;
      color: var(--ink);
      background: transparent;
      border: var(--border);
      border-radius: var(--radius);
      cursor: pointer;
      transition: all var(--dur) var(--ease);
      text-decoration: none;
    }
    .btn:hover {
      background: var(--ink);
      color: var(--base);
      border-color: var(--ink);
    }
    .btn-accent {
      background: var(--accent);
      color: var(--base);
      border-color: var(--accent);
    }
    .btn-accent:hover {
      background: #b04834;
      border-color: #b04834;
    }

    .template-info {
      max-width: 1200px;
      margin: 0 auto var(--space-16);
      padding: 0 var(--space-6);
    }
    .template-badge {
      font-family: var(--font-display);
      font-size: var(--step-1);
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: var(--space-3);
      border-left: 3px solid var(--accent);
      padding-left: var(--space-3);
      display: inline-block;
    }
    .template-title {
      font-family: var(--font-display);
      font-size: var(--step-7);
      font-weight: 800;
      line-height: 1.05;
      color: var(--ink);
      margin-bottom: var(--space-4);
      max-width: 60ch;
    }
    .template-desc {
      font-size: var(--step-1);
      color: var(--ink-2);
      max-width: 55ch;
      margin-bottom: var(--space-8);
    }
    .template-meta {
      display: flex;
      gap: var(--space-4);
      font-family: var(--font-text);
      font-size: 0.75rem;
      color: var(--ink-3);
      margin-bottom: var(--space-5);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .note {
      max-width: 1200px;
      margin: 0 auto var(--space-16);
      padding: 0 var(--space-6);
      border-top: var(--border);
      padding-top: var(--space-8);
      font-family: var(--font-text);
      font-size: var(--step-0);
      color: var(--ink-2);
    }
    .note code {
      color: var(--accent);
      background: var(--surface);
      padding: 0.2rem 0.4rem;
      border: var(--border);
      border-radius: var(--radius);
    }

    footer {
      max-width: 1200px;
      margin: 0 auto var(--space-16);
      padding: 0 var(--space-6);
      border-top: var(--border);
      padding-top: var(--space-8);
      font-family: var(--font-text);
      font-size: var(--step-0);
      color: var(--ink-3);
      text-align: center;
    }
    footer a { color: var(--ink-3); }

    @media (max-width: 768px) {
      .header-inner { padding: var(--space-3) var(--space-4); flex-direction: column; align-items: stretch; gap: var(--space-3); }
      nav { flex-direction: column; align-items: flex-start; gap: var(--space-2); }
      .hero { padding: var(--space-24) var(--space-4) var(--space-16); }
      .hero h1 { font-size: var(--step-6); }
      .template-info { padding: 0 var(--space-4); margin-bottom: var(--space-12); }
      .note { padding: 0 var(--space-4); margin-bottom: var(--space-24); }
      footer { padding: 0 var(--space-4); margin-bottom: var(--space-12); }
    }
  </style>
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
    <p>$($t.desc)</p>
    <div class="hero-actions">
      <a href="/" class="btn">← Kembali ke Home</a>
      <a href="/$($v.id)/" class="btn btn-accent">Lihat Semua $($v.label)</a>
    </div>
  </section>

  <section class="template-info">
    <span class="template-badge">$($v.label)</span>
    <h2 class="template-title">$($t.display)</h2>
    <p class="template-desc">$($t.desc)</p>
    <div class="template-meta">
      <span>Framework: $($v.fw)</span>
      <span>Locale: $($v.locale)</span>
      <span>Status: Static HTML</span>
    </div>
  </section>

  <section class="note">
    <p><strong>Untuk deploy sebagai website penuh:</strong> impor folder sumber ini ke Vercel sebagai project terpisah:</p>
    <code>github.com/muhammadafiqyunanto27/template-design-web/tree/main/$($t.name)/$($v.id)/</code>
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
Write-Host "Semua 40 halaman template diperbarui!"