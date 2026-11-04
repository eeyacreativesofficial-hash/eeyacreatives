'use client';

import Link from 'next/link';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icons';
import Section from '@/components/ui/Section';
import { offers, offersPreviewData } from '@/data/content';

export default function OffersTeaser() {
  const launchOffers = offers;

  return (
    <Section
      variant="champagne"
      id="offers"
      className="pt-20 pb-28 md:py-28 border-t border-[#202B3B] scroll-mt-24 relative overflow-hidden"
      aria-label="Offers Preview"
    >
      <div className="relative z-10 site-container">
        <SectionHeading
          eyebrow={offersPreviewData.eyebrow}
          title={offersPreviewData.heading}
          description={offersPreviewData.subtext}
        />

        {/* Four compact one-line items in 1 row (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16 items-stretch">
          {launchOffers.map((offer, i) => (
            <AnimateInView key={offer.id} delay={i * 0.08} className="h-full">
              <Link
                href="/offers"
                className="group block card-dark bg-[#111925] border border-[#202B3B] hover:border-[#26364F] p-6 sm:p-7 rounded-sm h-full transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_10px_30px_rgba(38,54,79,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-sans font-bold tracking-wider uppercase bg-gold/15 text-gold border border-gold/30 px-3 py-1 rounded-sm">
                    {offer.badge}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold transition-colors duration-300 group-hover:bg-gold/20">
                    <Icon name={offer.icon} size={18} />
                  </div>
                </div>

                {/* Compact title item */}
                <h3 className="font-serif text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors duration-300 leading-snug">
                  {offer.title}
                </h3>
              </Link>
            </AnimateInView>
          ))}
        </div>

        {/* Single centered button to /offers */}
        <AnimateInView className="text-center">
          <Link href="/offers" className="btn-primary min-h-[44px] px-8">
            {offersPreviewData.buttonText}
            <Icon name="arrowRight" size={14} />
          </Link>
        </AnimateInView>
      </div>
    </Section>
  );
}
