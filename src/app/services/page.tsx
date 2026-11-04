import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services | EEYA CREATIVES',
  description:
    'Creative craft for brands that aim higher: cinematic AI video advertising, brand films, product and lifestyle advertising, social media creatives, website development, and festive campaigns.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}

