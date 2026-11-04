import type { Metadata } from 'next';
import OurWorkContent from './OurWorkContent';

export const metadata: Metadata = {
  title: 'Our Work | EEYA CREATIVES',
  description:
    'Explore our cinematic AI video advertisements, brand campaigns, and website concepts across luxury jewellery, fashion, confections, tributes, and e-commerce.',
};

export default function OurWorkPage() {
  return <OurWorkContent />;
}

