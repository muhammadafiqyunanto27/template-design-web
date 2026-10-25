foreach($t in $templates) {
    foreach($v in $variants) {
        $folderPath = "$basePath\$($t.name)\$($v.id)"
        New-Item -ItemType Directory -Path $folderPath -Force | Out-Null
        
        $css = GetCss $t.accent $t.accentLight
        
        $heroTitle = $t.display
        if($v.id -eq "nextjs-id" -or $v.id -eq "astro-id") {
            $heroTitle = $t.display
        }
        
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