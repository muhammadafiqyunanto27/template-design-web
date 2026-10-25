import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Developer Platform — API First, Docs Always',
    template: '%s | Developer Platform',
  },
  description: 'Cloud platforms, APIs, infrastructure. Copy-pasteable docs, live playgrounds.',
  keywords: ['developer platform', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Developer Platform' }],
  creator: 'Developer Platform',
  publisher: 'Developer Platform',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://developerplatform.example.com',
    siteName: 'Developer Platform',
    title: 'Developer Platform — API First, Docs Always',
    description: 'Cloud platforms, APIs, infrastructure. Copy-pasteable docs, live playgrounds.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Developer Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Platform — API First, Docs Always',
    description: 'Cloud platforms, APIs, infrastructure. Copy-pasteable docs, live playgrounds.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d1117' },
    { media: '(prefers-color-scheme: dark)', color: '#161b22' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" />
        </noscript>
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
