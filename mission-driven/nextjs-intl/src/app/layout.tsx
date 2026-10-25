import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mission Driven — Real Impact, Not Promises',
    template: '%s | Mission Driven',
  },
  description: 'Non-profits, climate tech, social enterprise. Evidence-based impact, full transparency.',
  keywords: ['mission driven', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Mission Driven' }],
  creator: 'Mission Driven',
  publisher: 'Mission Driven',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://missiondriven.example.com',
    siteName: 'Mission Driven',
    title: 'Mission Driven — Real Impact, Not Promises',
    description: 'Non-profits, climate tech, social enterprise. Evidence-based impact, full transparency.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mission Driven' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Driven — Real Impact, Not Promises',
    description: 'Non-profits, climate tech, social enterprise. Evidence-based impact, full transparency.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fefcf8' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
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
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Literata:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
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
