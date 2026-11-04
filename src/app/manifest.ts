import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EEYA CREATIVES',
    short_name: 'EEYA',
    description: 'AI Powered Advertising and Website Development Creative Studio',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0908',
    theme_color: '#0A0908',
    icons: [
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}

