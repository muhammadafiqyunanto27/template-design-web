import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Modular Agency — Build Once, Adapt Forever',
    template: '%s | Modular Agency',
  },
  description: 'White-label, design systems, multi-brand. Themeable components, documented.',
  keywords: ['modular agency', 'company', 'profile', 'landing page'],
  authors: [{ name: 'Modular Agency' }],
  creator: 'Modular Agency',
  publisher: 'Modular Agency',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modularagency.example.com',
    siteName: 'Modular Agency',
    title: 'Modular Agency — Build Once, Adapt Forever',
    description: 'White-label, design systems, multi-brand. Themeable components, documented.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Modular Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modular Agency — Build Once, Adapt Forever',
    description: 'White-label, design systems, multi-brand. Themeable components, documented.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
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
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" media="print" onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
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
