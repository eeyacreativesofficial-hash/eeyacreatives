'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimateInView from '@/components/ui/AnimateInView';
import Icon from '@/components/ui/Icons';
import PageHeroBanner from '@/components/ui/PageHeroBanner';
import Section from '@/components/ui/Section';
import SectionDivider from '@/components/ui/SectionDivider';
import {
  services,
  servicesHeader,
  servicesClosing,
  buildWhatsAppLink,
  whatsappMessages,
  contact,
} from '@/data/content';

export default function ServicesContent() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (!prefersReducedMotion) {
          setHighlightedSlug(hash);
          const timer = setTimeout(() => {
            setHighlightedSlug(null);
          }, 2000);
          return () => clearTimeout(timer);
        }
      }
    };

    // Trigger on initial mount with small delay for hydration
    const initialTimer = setTimeout(handleHash, 100);
    window.addEventListener('hashchange', handleHash);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <>
      {/* Page Hero Banner */}
      <PageHeroBanner
        slug="services"
        eyebrow={servicesHeader.eyebrow}
        title={servicesHeader.heading}
        description={servicesHeader.subtext}
      />

      {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile, equal card heights) */}
      <Section
        variant="spotlight"
        className="pt-16 pb-24 md:py-24 border-t border-[#202B3B]"
        aria-label="Services list"
      >
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, i) => {
            const hasError = failedImages[service.slug];
            const isHighlighted = highlightedSlug === service.slug;
            const whatsappUrl = buildWhatsAppLink(
              whatsappMessages.service(service.title)
            );

            return (
              <AnimateInView key={service.slug} delay={i * 0.08} className="h-full">
                <article
                  id={service.slug}
                  className={`card-dark group relative flex flex-col h-full rounded-sm overflow-hidden scroll-mt-28 md:scroll-mt-32 transition-all duration-300 ${
                    isHighlighted
                      ? 'border-gold ring-2 ring-gold/90 shadow-[0_0_40px_rgba(38,54,79,0.35)]'
                      : 'border border-[#202B3B]'
                  }`}
                >
                  {/* 16:9 Cover Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-2)] border-b border-[#202B3B] flex-shrink-0">
                    {!hasError ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority={i < 3}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 md:group-hover:scale-105"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [service.slug]: true }))
                        }
                      />
                    ) : (
                      /* Clean dark frame with thin gold border and large gold line icon fallback */
                      <div className="absolute inset-0 flex items-center justify-center bg-[#111925] border border-[#202B3B]">
                        <Icon name={service.icon} size={48} className="text-gold" />
                      </div>
                    )}

                    {/* Subtle bottom vignette on cover */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(0deg, rgba(8, 11, 18, 0.75) 0%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Small Gold Numeral (01 to 06) */}
                    <span className="font-serif text-sm tracking-widest text-gold font-normal mb-3 block">
                      {service.number}
                    </span>

                    {/* Title in Serif Font */}
                    <h3 className="font-serif text-xl sm:text-2xl text-ivory mb-3 font-normal leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="font-sans text-sm text-muted/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-xs text-ivory/85"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Card Actions: View Examples link + Enquire on WhatsApp button */}
                    <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-auto">
                      <a
                        href="/our-work"
                        className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase text-gold hover:text-gold-light transition-colors min-h-[44px] py-2"
                      >
                        View Examples
                        <Icon name="arrowRight" size={13} />
                      </a>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs px-4 py-2.5 min-h-[44px] h-[44px] tracking-wider uppercase justify-center"
                      >
                        <Icon name="whatsapp" size={15} />
                        Enquire
                      </a>
                    </div>
                  </div>
                </article>
              </AnimateInView>
            );
          })}
          </div>
        </div>
      </Section>

      {/* Centered Section Divider */}
      <SectionDivider />

      {/* Closing Band */}
      <Section
        variant="bloom"
        className="py-24 sm:py-28 md:py-32 lg:py-36 pb-36 sm:pb-32 md:pb-36 border-t border-[#202B3B]"
        aria-label="Creative consultation"
      >
        <div className="site-container text-center relative z-10">
          <AnimateInView>
            {/* Thin gold line above heading (~60px wide, centered) */}
            <div
              className="w-[60px] h-[1px] bg-gold/70 mx-auto mb-6"
              aria-hidden="true"
            />

            {/* Heading in serif font */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory mb-5 tracking-tight leading-tight">
              {servicesClosing.heading}
            </h2>

            {/* Text in muted grey */}
            <p className="font-sans text-base sm:text-lg text-muted/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {servicesClosing.text}
            </p>

            {/* Buttons: stacked full width on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[420px] sm:max-w-none mx-auto">
              <a
                href={buildWhatsAppLink(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-cta="true"
                className="btn-primary w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
              >
                <Icon name="whatsapp" size={18} />
                {servicesClosing.whatsappButton}
              </a>
              <a
                href={`mailto:${contact.email.address}`}
                className="btn-outline w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
              >
                <Icon name="mail" size={18} />
                {servicesClosing.emailButton}
              </a>
            </div>
          </AnimateInView>
        </div>
      </Section>
    </>
  );
}
