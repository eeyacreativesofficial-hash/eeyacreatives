import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import ScrollMemory from '@/components/utils/ScrollMemory';
import MainContainer from '@/components/layout/MainContainer';
import { brand, backgroundTheme, backgroundIntensity, siteUrl } from '@/data/content';
import { cinzel, cormorantGaramond, montserrat } from '@/app/fonts';

if (!siteUrl) {
  console.warn('[Build Warning] siteUrl in /data/content.ts is empty. Canonical URLs omitted.');
}

export const viewport: Viewport = {
  themeColor: '#080B12',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: brand.seo.title,
  description: brand.seo.description,
  keywords: [
    'AI advertising',
    'cinematic video ads',
    'creative studio',
    'website development',
    'digital experiences',
    'brand films',
  ],
  authors: [{ name: 'EEYA CREATIVES' }],
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: brand.seo.title,
    description: brand.seo.description,
    type: 'website',
    siteName: brand.name,
    locale: 'en_US',
    ...(siteUrl ? { url: siteUrl } : {}),
    images: [
      {
        url: brand.seo.ogImage,
        width: 1200,
        height: 630,
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.seo.title,
    description: brand.seo.description,
    images: [brand.seo.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48.png?v=2', type: 'image/png', sizes: '48x48' },
      { url: '/favicon.ico?v=2', sizes: 'any' },
    ],
    shortcut: '/favicon.png?v=2',
    apple: [
      { url: '/favicon-192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-bg-theme={backgroundTheme}
      data-bg-intensity={backgroundIntensity}
      className={`${cinzel.variable} ${cormorantGaramond.variable} ${montserrat.variable} bg-obsidian text-ivory`}
    >
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://eeyacreatives.com/#organization',
                  name: 'EEYA CREATIVES',
                  url: 'https://eeyacreatives.com',
                  logo: 'https://eeyacreatives.com/images/brand/logo-icon-512.webp',
                  description:
                    'AI-powered advertising, cinematic video production, brand films, and website development creative studio.',
                  sameAs: [
                    'https://instagram.com/eeyacreatives',
                    'https://youtube.com/@eeyacreatives',
                    'https://linkedin.com/company/eeyacreatives',
                  ],
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://eeyacreatives.com/#service',
                  name: 'EEYA CREATIVES Studio',
                  url: 'https://eeyacreatives.com',
                  telephone: '+91-88255-69400',
                  email: 'eeyacreatives.official@gmail.com',
                  priceRange: '$$',
                  image: 'https://eeyacreatives.com/images/hero/hero-section-latest.jpg',
                },
              ],
            }),
          }}
        />
        {/* In development only: query parameters ?bg=... & ?k=... override settings */}
        {process.env.NODE_ENV !== 'production' && (
          <Script
            id="dev-theme-override"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  var p = new URLSearchParams(window.location.search);
                  var bg = p.get('bg');
                  var k = p.get('k');
                  if (bg && ['warm','midnight','espresso'].indexOf(bg) !== -1) {
                    document.documentElement.setAttribute('data-bg-theme', bg);
                  }
                  if (k && ['subtle','balanced','rich'].indexOf(k) !== -1) {
                    document.documentElement.setAttribute('data-bg-intensity', k);
                  }
                } catch(e) {}
              `,
            }}
          />
        )}
      </head>
      <body className="font-sans text-ivory min-h-screen flex flex-col selection:bg-gold/30 selection:text-ivory antialiased relative">
        <ScrollMemory />
        <Header />
        <MainContainer>
          {children}
        </MainContainer>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

