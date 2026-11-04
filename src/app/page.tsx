import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import ServicesPreview from '@/components/sections/ServicesPreview';
import OurVisionPreview from '@/components/sections/OurVisionPreview';
import OffersTeaser from '@/components/sections/OffersTeaser';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'EEYA CREATIVES | AI Powered Creative Studio',
  },
  openGraph: {
    title: 'EEYA CREATIVES | AI Powered Creative Studio',
  },
  twitter: {
    title: 'EEYA CREATIVES | AI Powered Creative Studio',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <OurVisionPreview />
      <OffersTeaser />
      <CTASection />
    </>
  );
}
