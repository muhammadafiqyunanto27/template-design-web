import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Enterprise Authority — Dipercaya Pemimpin Industri Indonesia',
    template: '%s | Enterprise Authority',
  },
  description: 'Solusi enterprise-grade untuk BUMN, korporasi besar, dan instansi pemerintah Indonesia. Keamanan, kepatuhan, dan skala terintegrasi.',
  keywords: ['enterprise', 'Indonesia', 'BUMN', 'korporasi', 'keamanan', 'kepatuhan', 'skala', 'solusi', 'cloud'],
  authors: [{ name: 'Enterprise Authority Indonesia' }],
  creator: 'Enterprise Authority Indonesia',
  publisher: 'Enterprise Authority Indonesia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://enterprise-authority.co.id',
    siteName: 'Enterprise Authority Indonesia',
    title: 'Enterprise Authority — Dipercaya Pemimpin Industri Indonesia',
    description: 'Solusi enterprise-grade untuk BUMN, korporasi besar, dan instansi pemerintah Indonesia.',
    images: [
      {
        url: '/og-image-id.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise Authority Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Authority — Dipercaya Pemimpin Industri Indonesia',
    description: 'Solusi enterprise-grade untuk BUMN, korporasi besar, dan instansi pemerintah Indonesia.',
    images: ['/og-image-id.png'],
  },
  verification: {
    google: 'google-site-verification-code-id',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
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