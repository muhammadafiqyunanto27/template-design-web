import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Corporate Institutional — Kepercayaan Terukur',
    template: '%s | Corporate Institutional',
  },
  description: 'Perbankan, asuransi, BUMN, universitas. Tata kelola, kepatuhan, transparansi.',
  keywords: ['corporate institutional', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Corporate Institutional' }],
  creator: 'Corporate Institutional',
  publisher: 'Corporate Institutional',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://corporateinstitutional.co.id',
    siteName: 'Corporate Institutional',
    title: 'Corporate Institutional — Kepercayaan Terukur',
    description: 'Perbankan, asuransi, BUMN, universitas. Tata kelola, kepatuhan, transparansi.',
    images: [{ url: '/og-image-id.png', width: 1200, height: 630, alt: 'Corporate Institutional' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Institutional — Kepercayaan Terukur',
    description: 'Perbankan, asuransi, BUMN, universitas. Tata kelola, kepatuhan, transparansi.',
    images: ['/og-image-id.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#f8f9fa' },
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
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" />
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
