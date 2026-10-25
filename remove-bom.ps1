$files = Get-ChildItem D:\PROJECT\template-design -Recurse -Filter "*.json"
foreach($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    # Remove BOM if present
    if($content.StartsWith([char]0xFEFF)) {
        $content = $content.Substring(1)
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding $false))
        Write-Host "Removed BOM from $($file.FullName)"
    }
}
Write-Host "Done!"