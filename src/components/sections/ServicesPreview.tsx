'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateInView from '@/components/ui/AnimateInView';
import Icon from '@/components/ui/Icons';
import Section from '@/components/ui/Section';
import { services, servicesPreviewData, homeServicesStyle } from '@/data/content';

export default function ServicesPreview() {
  const [, setFailedImages] = useState<Record<string, boolean>>({});
  const style = homeServicesStyle || servicesPreviewData.homeServicesStyle || 'image-top';

  return (
    <Section
      variant="champagne"
      id="services"
      className="pt-24 sm:pt-28 md:pt-32 pb-24 md:pb-28 lg:pb-32 border-t border-[#202B3B] scroll-mt-32"
      aria-label="Services Preview"
    >
      <div className="site-container">
        {/* Section Heading */}
      <div className="max-w-3xl text-center mx-auto mb-14 md:mb-18">
        <AnimateInView>
          <p className="text-gold font-sans text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-3">
            {servicesPreviewData.eyebrow}
          </p>
        </AnimateInView>
        <AnimateInView delay={0.08}>
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory mb-4 max-w-xl mx-auto leading-tight"
            style={{ textWrap: 'balance' }}
          >
            {servicesPreviewData.heading}
          </h2>
        </AnimateInView>
        <AnimateInView delay={0.16}>
          <p className="body-lg max-w-2xl mx-auto text-muted/80">
            {servicesPreviewData.subtext}
          </p>
        </AnimateInView>
      </div>

      {/* Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {services.map((service, i) => (
          <AnimateInView key={service.slug} delay={i * 0.08} className="h-full">
            {style === 'image-top' ? (
              /* image-top: Image on top (16:10, clean), clean dark panel below with thin gold border */
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex flex-col h-full rounded-sm overflow-hidden border border-[#202B3B] hover:border-[#26364F] bg-[#111925] transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_30px_rgba(38,54,79,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12]"
              >
                {/* 1. Image on Top: 16:10, clean (no text, number, gradient, or arrow over it) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0E17]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [service.slug]: true }))
                    }
                  />
                </div>

                {/* 2. Clean Dark Panel Below with thin gold border & equal height */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 border-t border-gold/20 bg-[#111925]">
                  {/* Small Gold Number */}
                  <span className="text-gold font-sans text-xs font-semibold tracking-wider mb-2 block">
                    {service.number}
                  </span>

                  {/* Serif Title: max two lines, text-wrap: balance */}
                  <h3
                    className="font-serif text-ivory mb-2 transition-colors duration-300 group-hover:text-gold line-clamp-2"
                    style={{
                      fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
                      lineHeight: 1.25,
                      textWrap: 'balance',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* One-Line Description: 15px, light grey (#D9D6CE), max two lines */}
                  <p className="font-sans text-[15px] leading-relaxed text-[#D9D6CE] line-clamp-2 mb-4 flex-1">
                    {service.previewLine}
                  </p>

                  {/* Gold "Explore →" Row */}
                  <div className="flex items-center gap-1.5 text-gold text-xs font-sans tracking-wider uppercase font-semibold mt-auto pt-3 border-t border-white/5">
                    <span>Explore</span>
                    <Icon
                      name="arrowRight"
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ) : (
              /* text-only: Same panel without an image, with gold line icon and larger numeral */
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex flex-col h-full rounded-sm overflow-hidden border border-[#202B3B] hover:border-[#26364F] bg-[#111925] p-7 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_30px_rgba(38,54,79,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                    <Icon name={service.icon} size={24} />
                  </div>
                  <span className="font-serif text-3xl sm:text-4xl text-gold/40 font-light">
                    {service.number}
                  </span>
                </div>

                <h3
                  className="font-serif text-ivory mb-2 transition-colors duration-300 group-hover:text-gold line-clamp-2"
                  style={{
                    fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
                    lineHeight: 1.25,
                    textWrap: 'balance',
                  }}
                >
                  {service.title}
                </h3>

                <p className="font-sans text-[15px] leading-relaxed text-[#D9D6CE] line-clamp-2 mb-6 flex-1">
                  {service.previewLine}
                </p>

                <div className="flex items-center gap-1.5 text-gold text-xs font-sans tracking-wider uppercase font-semibold mt-auto pt-3 border-t border-white/5">
                  <span>Explore</span>
                  <Icon
                    name="arrowRight"
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            )}
          </AnimateInView>
        ))}
      </div>

      {/* Centered Button linking to /services */}
      <AnimateInView className="text-center mt-12 sm:mt-16">
        <Link href="/services" className="btn-primary min-h-[44px] px-8">
          {servicesPreviewData.buttonText}
          <Icon name="arrowRight" size={14} />
        </Link>
      </AnimateInView>
      </div>
    </Section>
  );
}
