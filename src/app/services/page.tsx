import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Creative craft for brands that aim higher: cinematic AI video advertising, brand films, product and lifestyle advertising, social media creatives, website development, and festive campaigns.',
  openGraph: {
    title: 'EEYA CREATIVES | Services',
    description:
      'Creative craft for brands that aim higher: cinematic AI video advertising, brand films, product and lifestyle advertising, social media creatives, website development, and festive campaigns.',
  },
  twitter: {
    title: 'EEYA CREATIVES | Services',
    description:
      'Creative craft for brands that aim higher: cinematic AI video advertising, brand films, product and lifestyle advertising, social media creatives, website development, and festive campaigns.',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}

