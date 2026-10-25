import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Deep Tech Frontier — Teknologi Masa Depan Indonesia',
    template: '%s | Deep Tech Frontier',
  },
  description: 'Penerbangan antariksa, komputasi kuantum, dan sistem propulsi generasi baru untuk Indonesia.',
  keywords: ['deep tech frontier', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Deep Tech Frontier' }],
  creator: 'Deep Tech Frontier',
  publisher: 'Deep Tech Frontier',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://deeptechfrontier.co.id',
    siteName: 'Deep Tech Frontier',
    title: 'Deep Tech Frontier — Teknologi Masa Depan Indonesia',
    description: 'Penerbangan antariksa, komputasi kuantum, dan sistem propulsi generasi baru untuk Indonesia.',
    images: [{ url: '/og-image-id.png', width: 1200, height: 630, alt: 'Deep Tech Frontier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep Tech Frontier — Teknologi Masa Depan Indonesia',
    description: 'Penerbangan antariksa, komputasi kuantum, dan sistem propulsi generasi baru untuk Indonesia.',
    images: ['/og-image-id.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#050508' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" />
        </noscript>
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Langsung ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
