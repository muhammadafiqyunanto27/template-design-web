$templates = @("enterprise-authority","deep-tech-frontier","umkm-warmth","creative-studio","saas-product-led","innovation-lab","corporate-institutional","mission-driven","developer-platform","modular-agency")
$variants = @("nextjs-intl","nextjs-id","astro-intl","astro-id")

foreach($variant in $variants) {
    $pagePath = "D:\PROJECT\template-design\$variant\index.html"
    $content = Get-Content $pagePath -Raw
    
    foreach($t in $templates) {
        $oldLink = "https://$t-$variant.vercel.app"
        $newLink = "/templates/$t/$variant/"
        $content = $content -replace [regex]::Escape($oldLink), $newLink
    }
    
    $content | Set-Content $pagePath -Encoding utf8
    Write-Host "Updated links in $variant/index.html"
}
Write-Host "All induk page links updated to /templates/!"