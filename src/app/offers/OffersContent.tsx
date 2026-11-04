'use client';

import { useState } from 'react';
import AnimateInView from '@/components/ui/AnimateInView';
import Icon from '@/components/ui/Icons';
import PageHeroBanner from '@/components/ui/PageHeroBanner';
import Section from '@/components/ui/Section';
import SectionDivider from '@/components/ui/SectionDivider';
import OfferVisual from '@/components/offers/OfferVisual';
import {
  offers,
  offersHeader,
  offersSelector,
  offersNote,
  offersReassurance,
  offersSteps,
  offersClosing,
  buildWhatsAppLink,
} from '@/data/content';

export default function OffersContent() {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const handleChipClick = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        setHighlightedSlug(slug);
        setTimeout(() => {
          setHighlightedSlug((current) => (current === slug ? null : current));
        }, 2000);
      }
    }
  };

  return (
    <>
      {/* ── 1. Page Hero Banner ── */}
      <PageHeroBanner
        slug="offers"
        eyebrow={offersHeader.eyebrow}
        title={
          <>
            {offersHeader.headingPart1}
            <span className="text-gold italic font-serif">
              {offersHeader.headingPart2}
            </span>
          </>
        }
        description={offersHeader.subtext}
      />

      {/* ── 2. "FIND YOUR OFFER" Selector & Cards ── */}
      <Section
        variant="champagne"
        className="pt-12 pb-20 md:pb-24 overflow-hidden"
        aria-label="Launch Packages"
      >
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 relative z-20">
          <p className="text-gold font-sans text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase mb-4">
            {offersSelector.caption}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {offersSelector.chips.map((chip) => {
              const isSelected = highlightedSlug === chip.slug;
              return (
                <button
                  key={chip.slug}
                  type="button"
                  onClick={() => handleChipClick(chip.slug)}
                  className={`min-h-[44px] px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-sans tracking-wide uppercase font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isSelected
                      ? 'bg-gold text-obsidian shadow-[0_0_20px_rgba(216,177,90,0.4)] font-semibold scale-105'
                      : 'bg-[#111925] text-ivory border border-[#202B3B] hover:border-[#26364F] hover:text-gold hover:bg-[#141D2A]'
                  }`}
                  aria-label={`Scroll to ${chip.label} offer`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Four Offer Cards (2x2 Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1120px] mx-auto items-stretch relative z-10">
          {offers.map((offer, idx) => {
            const isHighlighted = highlightedSlug === offer.slug;
            const isFeatured = !!offer.featured;

            return (
              <AnimateInView key={offer.id} delay={idx * 0.08} className="h-full">
                <article
                  id={offer.slug}
                  className={`group relative offer-card-panel flex flex-col justify-between h-full overflow-hidden transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-[0_16px_36px_rgba(0,0,0,0.65)] scroll-mt-36 ${
                    isFeatured
                      ? '!border-gold/75 shadow-[0_0_35px_rgba(216,177,90,0.18)]'
                      : 'border-[rgba(216,177,90,0.20)]'
                  } ${
                    isHighlighted
                      ? '!border-gold ring-2 ring-gold/90 shadow-[0_0_40px_rgba(216,177,90,0.45)]'
                      : ''
                  }`}
                >
                  {/* Decorative film-strip perforation along the left edge */}
                  <div className="offer-film-strip" aria-hidden="true" />

                  {/* Corner Ribbon for Featured Card */}
                  {isFeatured && (
                    <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none z-20">
                      <div className="absolute transform rotate-45 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-sans font-bold text-[10px] tracking-widest uppercase text-center py-1 right-[-32px] top-[22px] w-[130px] shadow-md border-b border-gold/40">
                        {offer.badge}
                      </div>
                    </div>
                  )}

                  {/* Top Visual Area (CSS & SVG only, ~170px tall, no images) */}
                  <OfferVisual
                    slug={offer.slug}
                    badge={offer.badge}
                    isFeatured={isFeatured}
                  />

                  {/* Card Content (Offset to the right of the 14px film-strip) */}
                  <div className="pl-8 pr-6 pt-6 pb-6 sm:pl-9 sm:pr-8 sm:pb-8 flex flex-col flex-1">
                    {/* Tagline */}
                    <p className="text-gold italic font-serif text-[15px] mb-2 leading-snug">
                      {offer.tagline}
                    </p>

                    {/* Title */}
                    <h2
                      className="font-serif text-[1.3rem] text-ivory font-medium leading-snug line-clamp-2 mb-3"
                      style={{ textWrap: 'balance' }}
                    >
                      {offer.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[16px] text-[#CFCBC1] leading-relaxed mb-6">
                      {offer.description}
                    </p>

                    {/* Three Key Points */}
                    <ul className="space-y-2.5 mb-6">
                      {offer.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[var(--body)]"
                        >
                          <span
                            className="w-4 h-4 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-[10px] flex-shrink-0 mt-0.5 select-none"
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Thin Divider */}
                    <div
                      className="w-full h-[1px] bg-[rgba(216,177,90,0.16)] mb-6 mt-auto"
                      aria-hidden="true"
                    />

                    {/* Gold Outline Button Pinned to Bottom */}
                    <a
                      href={buildWhatsAppLink(offer.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center text-center min-h-[44px] group-hover:bg-gold group-hover:text-obsidian group-hover:border-gold transition-all duration-300 font-semibold text-xs tracking-widest uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Icon name="whatsapp" size={18} />
                      Claim This Offer
                    </a>
                  </div>
                </article>
              </AnimateInView>
            );
          })}
        </div>

        {/* ── 4. Centered Small Line Below Cards ── */}
        <div className="mt-10 mb-14 text-center max-w-xl mx-auto px-4 relative z-10">
          <p className="text-xs sm:text-sm text-[#CFCBC1]/75 tracking-wide">
            {offersNote}
          </p>
        </div>

        {/* ── 5. Reassurance Strip (3 items with gold icons) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto relative z-10">
          {offersReassurance.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-sm border border-[#202B3B] bg-[#111925]/90 backdrop-blur-sm"
            >
              <Icon name={item.icon} size={18} className="text-gold flex-shrink-0" />
              <span className="text-sm font-medium text-ivory tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ── 6. "HOW TO CLAIM YOUR OFFER" (Three Simple Steps) ── */}
      <Section
        variant="blueprint"
        className="py-20 md:py-28 text-center"
        aria-label="How to Claim"
      >
        <div className="site-container relative z-10">
          <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            {offersSteps.eyebrow}
          </p>
          <h2 className="heading-lg text-ivory mb-12 sm:mb-16">
            {offersSteps.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Desktop Horizontal Line joining numerals */}
            <div
              className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {offersSteps.items.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-14 h-14 rounded-full border border-[#202B3B] bg-[#111925] flex items-center justify-center font-serif text-2xl text-gold font-light mb-4 shadow-[0_0_15px_rgba(38,54,79,0.3)]">
                  {step.num}
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-ivory mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#CFCBC1] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ── 7. Closing Band: "Need Something Different?" (bottom padding >= 96px) ── */}
      <Section
        variant="bloom"
        className="pt-20 pb-24 sm:pt-24 sm:pb-28 border-t border-[#202B3B] text-center"
        aria-label="Custom Plan Inquiry"
      >
        <div className="site-container relative z-10">
          {/* Thin gold line (~60px wide, centered) */}
          <div className="w-[60px] h-[1px] bg-gold/70 mx-auto mb-6" aria-hidden="true" />

          <h2 className="heading-xl text-ivory mb-5">
            {offersClosing.heading}
          </h2>
          <p className="body-lg mb-9 max-w-xl mx-auto text-[#CFCBC1]">
            {offersClosing.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[420px] sm:max-w-none mx-auto">
            <a
              href={buildWhatsAppLink(offersClosing.customPlanMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-cta="true"
              className="btn-primary w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
            >
              <Icon name="whatsapp" size={18} />
              {offersClosing.customPlanButton}
            </a>
            <a
              href={`mailto:${offersClosing.emailAddress}`}
              className="btn-outline w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
            >
              <Icon name="mail" size={18} />
              {offersClosing.emailButton}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
