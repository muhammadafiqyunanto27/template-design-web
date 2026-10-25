$templates = @(
    @{ name = "enterprise-authority"; display = "Enterprise Authority"; desc = "Restrained, authoritative, accessible. Untuk Fortune 500, pemerintah, big tech."; accent = "#2563eb"; accentLight = "#eff6ff"; },
    @{ name = "deep-tech-frontier"; display = "Deep Tech Frontier"; desc = "Dark, technical, data-dense. Untuk aerospace, quantum, defense."; accent = "#00d4ff"; accentLight = "#003d4d"; },
    @{ name = "umkm-warmth"; display = "UMKM Warmth"; desc = "Human, authentic, warm. Untuk kopi lokal, batik, bengkel, restoran keluarga."; accent = "#c8553d"; accentLight = "#fdf3f0"; },
    @{ name = "creative-studio"; display = "Creative Studio"; desc = "Portfolio-first, visual density. Untuk desain agen, arsitek, production house."; accent = "#1a1a2e"; accentLight = "#f0f0f5"; },
    @{ name = "saas-product-led"; display = "SaaS Product-Led"; desc = "Demo-driven, developer-friendly. Untuk B2B SaaS, dev tools, AI startup."; accent = "#6366f1"; accentLight = "#eef2ff"; },
    @{ name = "innovation-lab"; display = "Innovation Lab"; desc = "Experimental, motion-heavy, glassmorphism. Untuk R&D, lab inovasi."; accent = "#00ff88"; accentLight = "#00331a"; },
    @{ name = "corporate-institutional"; display = "Corporate Institutional"; desc = "Structured, compliant. Untuk bank, asuransi, BUMN, universitas."; accent = "#1e3a5f"; accentLight = "#eef3f8"; },
    @{ name = "mission-driven"; display = "Mission Driven"; desc = "Story-led, evidence-based. Untuk non-profit, climate tech, sosial enterprise."; accent = "#e86c00"; accentLight = "#fff3e8"; },
    @{ name = "developer-platform"; display = "Developer Platform"; desc = "API-first, dark-native. Untuk cloud provider, API company, infrastructure."; accent = "#00d4ff"; accentLight = "#002b33"; },
    @{ name = "modular-agency"; display = "Modular Agency"; desc = "Component showcase, themeable. Untuk white-label, design system."; accent = "#6366f1"; accentLight = "#eef2ff"; }
)

$variants = @(
    @{ id = "nextjs-intl"; label = "Next.js International"; accent = "#2563eb"; },
    @{ id = "nextjs-id"; label = "Next.js Indonesia"; accent = "#c8553d"; },
    @{ id = "astro-intl"; label = "Astro International"; accent = "#00ff88"; },
    @{ id = "astro-id"; label = "Astro Indonesia"; accent = "#c8553d"; }
)

$basePath = "D:\PROJECT\template-design\templates"

foreach($t in $templates) {
    foreach($v in $variants) {
        $folderPath = "$basePath\$($t.name)\$($v.id)"
        New-Item -ItemType Directory -Path $folderPath -Force | Out-Null
        
        $html = @"
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$($t.display) — $($v.label)</title>
  <meta name="description" content="$($t.desc)" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0f;
      color: #e8e8ed;
      line-height: 1.6;
    }
    a { color: $($v.accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    header {
      background: rgba(10, 10, 15, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #1a1a22;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.5px; color: #fff; }
    .logo span { color: $($v.accent); }
    nav a { color: #888899; margin-left: 2rem; font-size: 0.95rem; transition: color 0.2s; }
    nav a:hover { color: $($v.accent); }
    .hero {
      padding: 4rem 1.5rem 3rem;
      text-align: center;
      background: radial-gradient(circle at 50% 0%, rgba($($v.accent.replace('#','')) 0.05) 0%, transparent 50%);
    }
    .hero h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #fff 0%, $($v.accent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero p { color: #888899; margin-bottom: 2rem; }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.9rem 2rem;
      background: $($v.accent);
      color: #050508;
      border: none;
      border-radius: 6px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: transform 0.2s;
    }
    .btn:hover { transform: translateY(-2px); }
    .btn-back {
      background: transparent;
      color: $($v.accent);
      border: 1px solid $($v.accent);
      margin-left: 1rem;
    }
    .container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem 4rem; }
    .template-info {
      background: #111116;
      border: 1px solid #1a1a22;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
    }
    .template-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba($($v.accent.replace('#','')) 0.1);
      color: $($v.accent);
      border: 1px solid rgba($($v.accent.replace('#','')) 0.3);
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1rem;
    }
    .template-title { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
    .template-desc { color: #888899; margin-bottom: 1.5rem; line-height: 1.6; }
    .template-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.85rem;
      color: #6b6b7b;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #1a1a22;
    }
    .note {
      margin-top: 3rem;
      padding: 1.5rem;
      background: #0a0a0f;
      border: 1px solid #1a1a22;
      border-radius: 12px;
      color: #888899;
      font-size: 0.9rem;
    }
    footer { text-align: center; padding: 3rem 1.5rem; color: #6b6b7b; font-size: 0.85rem; border-top: 1px solid #1a1a22; }
    @media (max-width: 640px) {
      .header-inner { flex-direction: column; gap: 1rem; align-items: flex-start; }
      nav { margin-top: 0.5rem; }
      nav a { margin: 0.5rem 1rem 0 0; }
    }
  </style>
</head>
<body>

  <header>
    <div class="header-inner">
      <a href="/" class="logo">Template<span>Design</span></a>
      <nav>
        <a href="/">Home</a>
        <a href="/nextjs-intl/">Next.js Intl</a>
        <a href="/nextjs-id/">Next.js ID</a>
        <a href="/astro-intl/">Astro Intl</a>
        <a href="/astro-id/">Astro Indonesia</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <h1>$($t.display)</h1>
    <p>$($t.desc)</p>
    <div>
      <a href="/" class="btn btn-back">← Kembali ke Home</a>
      <a href="/$($v.id)/" class="btn" style="background: transparent; border: 1px solid $($v.accent); color: $($v.accent); margin-left: 1rem;">Lihat Semua $($v.label)</a>
    </div>
  </section>

  <div class="container">
    <div class="template-info">
      <span class="template-badge">$($v.label)</span>
      <h2 class="template-title">$($t.display)</h2>
      <p class="template-desc">$($t.desc)</p>
      <div class="template-meta">
        <span><strong>Template:</strong> $($t.name.Split('-') | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) } -join ' ')</span>
        <span><strong>Framework:</strong> $(if($v.id -like 'nextjs*') { 'Next.js' } else { 'Astro' })</span>
        <span><strong>Locale:</strong> $(if($v.id -like '*id') { 'Indonesia' } else { 'International' })</span>
      </div>
    </div>

    <div class="note">
      <strong>Status:</strong> Template ini tersimpan sebagai folder source di GitHub.<br>
      Untuk menjalankan sebagai project Next.js/Astro penuh, import folder ini secara terpisah di Vercel:<br>
      <code>github.com/muhammadafiqyunanto27/template-design-web/tree/main/$($t.name)/$($v.id)/</code>
    </div>
  </div>

  <footer>
    Template Design System · <a href="/" style="color: $($v.accent);">Kembali ke Home</a>
  </footer>

</body>
</html>
"@

        $html | Set-Content "$folderPath\index.html" -Encoding utf8
        Write-Host "Created: $($t.name)/$($v.id)"
    }
}
Write-Host "Semua 40 halaman template dibuat!"