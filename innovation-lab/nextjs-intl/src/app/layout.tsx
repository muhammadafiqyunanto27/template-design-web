import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Innovation Lab — Experiments at the Edge',
    template: '%s | Innovation Lab',
  },
  description: 'R&D, AI, quantum computing, biotech. Pushing the boundaries of possible.',
  keywords: ['innovation lab', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Innovation Lab' }],
  creator: 'Innovation Lab',
  publisher: 'Innovation Lab',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innovationlab.example.com',
    siteName: 'Innovation Lab',
    title: 'Innovation Lab — Experiments at the Edge',
    description: 'R&D, AI, quantum computing, biotech. Pushing the boundaries of possible.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Innovation Lab' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation Lab — Experiments at the Edge',
    description: 'R&D, AI, quantum computing, biotech. Pushing the boundaries of possible.',
    images: ['/og-image.png'],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter+Variable:wght@300;400;500;600;700&family=Inter+Variable:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Variable:wght@300;400;500;600;700&family=Inter+Variable:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Variable:wght@300;400;500;600;700&family=Inter+Variable:wght@400;500;600;700&display=swap" />
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
