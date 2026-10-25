import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Enterprise Authority — Trusted by Global Leaders',
    template: '%s | Enterprise Authority',
  },
  description: 'Enterprise-grade solutions for Fortune 500 companies, governments, and institutions. Security, compliance, and scale built in.',
  keywords: ['enterprise', 'software', 'solutions', 'security', 'compliance', 'scale', 'Fortune 500'],
  authors: [{ name: 'Enterprise Authority' }],
  creator: 'Enterprise Authority',
  publisher: 'Enterprise Authority',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enterprise-authority.example.com',
    siteName: 'Enterprise Authority',
    title: 'Enterprise Authority — Trusted by Global Leaders',
    description: 'Enterprise-grade solutions for Fortune 500 companies, governments, and institutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enterprise Authority',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Authority — Trusted by Global Leaders',
    description: 'Enterprise-grade solutions for Fortune 500 companies, governments, and institutions.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
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
    <html lang="en" suppressHydrationWarning>
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
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}