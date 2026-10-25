import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mission Driven — Dampak Nyata, Bukan Janji',
    template: '%s | Mission Driven',
  },
  description: 'Non-profit, teknologi iklim, perusahaan sosial. Bukti dampak, transparansi penuh.',
  keywords: ['mission driven', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Mission Driven' }],
  creator: 'Mission Driven',
  publisher: 'Mission Driven',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://missiondriven.co.id',
    siteName: 'Mission Driven',
    title: 'Mission Driven — Dampak Nyata, Bukan Janji',
    description: 'Non-profit, teknologi iklim, perusahaan sosial. Bukti dampak, transparansi penuh.',
    images: [{ url: '/og-image-id.png', width: 1200, height: 630, alt: 'Mission Driven' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Driven — Dampak Nyata, Bukan Janji',
    description: 'Non-profit, teknologi iklim, perusahaan sosial. Bukti dampak, transparansi penuh.',
    images: ['/og-image-id.png'],
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
    <html lang="id" suppressHydrationWarning>
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
          Langsung ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
