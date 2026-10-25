import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SaaS Product-Led — Demo Dulu, Bicara Nanti',
    template: '%s | Saas Product Led',
  },
  description: 'Produk B2B SaaS dengan demo interaktif. Dibangun untuk developer, oleh developer.',
  keywords: ['saas product led', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Saas Product Led' }],
  creator: 'Saas Product Led',
  publisher: 'Saas Product Led',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://saasproductled.co.id',
    siteName: 'Saas Product Led',
    title: 'SaaS Product-Led — Demo Dulu, Bicara Nanti',
    description: 'Produk B2B SaaS dengan demo interaktif. Dibangun untuk developer, oleh developer.',
    images: [{ url: '/og-image-id.png', width: 1200, height: 630, alt: 'Saas Product Led' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Product-Led — Demo Dulu, Bicara Nanti',
    description: 'Produk B2B SaaS dengan demo interaktif. Dibangun untuk developer, oleh developer.',
    images: ['/og-image-id.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#fafafa' },
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
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap" />
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
