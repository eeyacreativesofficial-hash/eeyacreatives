'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icons';
import { hero, contact, mobileHeroImagePosition, spaceImages } from '@/data/content';

export default function Hero() {
  const heroImageSrc = spaceImages.hero.src || '/images/hero/hero-section-2026.webp';
  const heroObjPosDesktop = spaceImages.hero.objectPosition.desktop || '75% 50%';
  const heroObjPosMobile = spaceImages.hero.objectPosition.mobile || '70% 50%';

  const heroImageCard = (
    <div className="w-full max-w-sm mx-auto aspect-[16/11] rounded-[4px] border border-gold/40 relative overflow-hidden mt-6 mb-2 shadow-2xl shadow-[#080B12]/90">
      <Image
        src={heroImageSrc}
        alt="Dr. A.P.J. Abdul Kalam in a cinematic studio with production lighting, cameras and books"
        fill
        quality={88}
        priority
        loading="eager"
        sizes="(max-width: 767px) 100vw, 384px"
        className="object-cover"
        style={{ objectPosition: heroObjPosMobile }}
      />
      {/* Bottom edge fading into the next section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 70%, rgba(8, 11, 18, 0.6) 90%, #080B12 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-0 md:min-h-[92dvh] lg:min-h-[100dvh] flex flex-col justify-center overflow-hidden scroll-mt-24"
      style={{ backgroundColor: '#080B12' }}
      aria-label="Hero"
    >
      {/* ── 1. Hero Background Image (Desktop & Tablet only) ── */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none -z-0 overflow-hidden"
        style={{ backgroundColor: '#080B12' }}
        aria-hidden="true"
      >
        <Image
          src={heroImageSrc}
          alt="Dr. A.P.J. Abdul Kalam in a cinematic studio surrounded by production cameras and illuminated books"
          fill
          priority
          loading="eager"
          quality={92}
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: heroObjPosDesktop,
          }}
        />

        {/* Stronger readable zone behind text: linear-gradient(90deg, rgba(5,7,12,0.92) 0%, rgba(5,7,12,0.78) 30%, rgba(5,7,12,0.35) 52%, transparent 66%) */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(5, 7, 12, 0.92) 0%, rgba(5, 7, 12, 0.78) 30%, rgba(5, 7, 12, 0.35) 52%, transparent 66%)',
          }}
          aria-hidden="true"
        />

        {/* Soft Radial Scrim strictly over the left text area for WCAG AA readability */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 75% at 18% 50%, rgba(8, 11, 18, 0.80) 0%, rgba(8, 11, 18, 0.20) 58%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        {/* Tablet Scrim (768px - 1024px) */}
        <div
          className="hidden md:block lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 11, 18, 0.85) 0%, rgba(8, 11, 18, 0.50) 48%, rgba(8, 11, 18, 0.92) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Gentle bottom edge transition into the following section (--bg-0: #080B12) */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 md:h-32 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(8, 11, 18, 0.70) 75%, var(--bg-0) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── 2. DESKTOP TWO-COLUMN LAYOUT (1024px and up, Site Container) ── */}
      <div className="hidden lg:flex relative z-10 site-container pt-32 pb-20 lg:pt-36 lg:pb-24 items-center justify-between gap-8 hero-fade-in">
        {/* Left Content Column (max width 52vw minus container left offset, capped to guarantee >=40px before armchair) */}
        <div className="w-full lg:max-w-[min(680px,calc(52vw-clamp(20px,4vw,48px)))] flex flex-col items-start text-left">
          {/* Eyebrow / Motto: single leading decorative line only, text-wrap: balance */}
          <div className="flex items-center gap-3 mb-5 max-w-xl">
            <span className="w-8 h-[1px] bg-gold/80 flex-shrink-0" aria-hidden="true" />
            <p
              className="text-gold font-sans text-xs xl:text-[13px] font-semibold tracking-[0.18em] uppercase leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {hero.eyebrow}
            </p>
          </div>

          {/* Main Headline: clamp(2.4rem, 3.6vw, 3.9rem), second sentence on one line */}
          <h1 className="font-serif text-[clamp(2.4rem,3.6vw,3.9rem)] font-normal tracking-[0.015em] leading-[1.08] mb-5 max-w-2xl xl:max-w-3xl">
            <span className="block text-[#F5F2EA] font-normal uppercase">
              {hero.headlinePart1}
            </span>
            <span className="block text-gold italic font-normal uppercase mt-1 lg:whitespace-nowrap">
              {hero.headlinePart2}
            </span>
          </h1>

          {/* Description */}
          <p className="font-sans text-base lg:text-[17px] text-[#CFCBC1] leading-[1.65] max-w-xl mb-8">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-4 mb-10 w-auto">
            <Link
              href="/our-work"
              className="btn-primary justify-center text-xs tracking-widest uppercase font-semibold text-center h-[50px] min-h-[48px] px-8"
            >
              Explore Our Work
              <Icon name="arrowRight" size={16} />
            </Link>
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-cta="true"
              className="btn-outline justify-center text-xs tracking-widest uppercase font-semibold text-center h-[50px] min-h-[48px] px-8 bg-[#080B12]/80 backdrop-blur-sm"
            >
              <Icon name="whatsapp" size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* 4 Service Cards in a Horizontal Row (padding 14px 16px, equal widths & heights) */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 w-full max-w-2xl xl:max-w-3xl items-stretch">
            {hero.highlights.map((item, i) => (
              <Link
                key={i}
                href="/services"
                className="flex items-center gap-2.5 px-4 py-3.5 rounded-sm border border-[#202B3B] bg-[#111925]/90 hover:bg-[#141D2A] hover:border-[#26364F] active:scale-[0.98] transition-all backdrop-blur-md group min-w-0 shadow-lg shadow-[#080B12]/60 h-full"
              >
                <div className="w-8 h-8 rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold group-hover:scale-105 transition-transform">
                  <Icon name={item.icon} size={15} />
                </div>
                <span className="font-sans text-[12px] xl:text-[12.5px] text-[#F5F2EA] group-hover:text-gold transition-colors font-medium leading-snug break-words">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Open visual corridor showcasing Dr. Abdul Kalam */}
        <div className="hidden lg:block w-[48%] xl:w-[48%] pointer-events-none" aria-hidden="true" />
      </div>

      {/* ── 3. TABLET LAYOUT (768px to 1023px) ── */}
      <div className="hidden md:flex lg:hidden relative z-10 site-container w-full max-w-3xl mx-auto flex-col items-center justify-center pt-32 pb-20 text-center hero-fade-in">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-6 h-[1px] bg-gold/80 flex-shrink-0" aria-hidden="true" />
          <p className="text-gold font-sans text-xs md:text-[13px] font-semibold tracking-[0.16em] uppercase leading-snug">
            {hero.eyebrow}
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-normal tracking-normal leading-[1.14] max-w-xl mx-auto mb-4">
          <span className="block text-[#F5F2EA] font-normal uppercase">
            {hero.headlinePart1}
          </span>
          <span className="block text-gold italic font-normal uppercase mt-1">
            {hero.headlinePart2}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base text-[#CFCBC1] leading-[1.65] max-w-xl mx-auto mb-8">
          {hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 mb-10 w-auto">
          <Link
            href="/our-work"
            className="btn-primary justify-center text-xs tracking-widest uppercase font-semibold text-center h-[50px] min-h-[48px] px-8"
          >
            Explore Our Work
            <Icon name="arrowRight" size={16} />
          </Link>
          <a
            href={contact.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-cta="true"
            className="btn-outline justify-center text-xs tracking-widest uppercase font-semibold text-center h-[50px] min-h-[48px] px-8 bg-[#080B12]/80 backdrop-blur-sm"
          >
            <Icon name="whatsapp" size={16} />
            Chat on WhatsApp
          </a>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3.5 w-full max-w-xl items-stretch text-left">
          {hero.highlights.map((item, i) => (
            <Link
              key={i}
              href="/services"
              className="flex items-center gap-2.5 px-4 py-3.5 rounded-sm border border-[#202B3B] bg-[#111925]/90 hover:bg-[#141D2A] hover:border-[#26364F] active:scale-[0.98] transition-all backdrop-blur-md group min-w-0 h-full"
            >
              <div className="w-8 h-8 rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold group-hover:scale-105 transition-transform">
                <Icon name={item.icon} size={15} />
              </div>
              <span className="font-sans text-[12.5px] text-[#F5F2EA] group-hover:text-gold transition-colors font-medium leading-snug">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── 4. MOBILE LAYOUT (Under 768px, single-column normal flow) ── */}
      <div className="flex md:hidden relative z-10 site-container w-full max-w-lg mx-auto flex-col items-center justify-center pt-24 pb-8 sm:pb-10 text-center hero-fade-in">
        {/* Top image position if configured */}
        {mobileHeroImagePosition === 'top' && heroImageCard}

        {/* 1. Motto Eyebrow (centred, two balanced lines, decorative side lines hidden, 14px below it) */}
        <p
          className="text-gold font-sans text-[10.5px] font-semibold tracking-[0.12em] uppercase text-center mb-[14px] leading-snug max-w-[32ch] mx-auto"
          style={{ textWrap: 'balance' }}
        >
          {hero.eyebrow}
        </p>

        {/* 2. Headline: split H1 into two block spans */}
        <h1 className="font-serif text-center w-full max-w-sm mx-auto mb-4">
          <span
            className="block text-[#F5F2EA] font-normal uppercase whitespace-nowrap text-[clamp(1.5rem,7.6vw,2.5rem)] leading-[1.12]"
          >
            Make Your Brand
          </span>
          <span
            className="block text-gold italic font-normal uppercase mt-1 text-[clamp(1.5rem,7.6vw,2.5rem)] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Impossible to Ignore.
          </span>
        </h1>

        {/* 3. Description paragraph (body text >= 16px) */}
        <p className="font-sans text-[16px] text-[#CFCBC1] leading-[1.65] text-center max-w-[34ch] mx-auto mb-6">
          {hero.description}
        </p>

        {/* 4. Two CTA Buttons: column, 100% width, max-w 420px, centred, min-height 52px, 12px gap */}
        <div className="flex flex-col gap-3 w-full max-w-[420px] mx-auto mb-8">
          <Link
            href="/our-work"
            className="btn-primary w-full h-[52px] min-h-[52px] justify-center text-xs tracking-widest uppercase font-semibold text-center px-6"
          >
            Explore Our Work
            <Icon name="arrowRight" size={15} />
          </Link>
          <a
            href={contact.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-cta="true"
            className="btn-outline w-full h-[52px] min-h-[52px] justify-center text-xs tracking-widest uppercase font-semibold text-center px-6 bg-[#080B12]/80 backdrop-blur-sm"
          >
            <Icon name="whatsapp" size={15} />
            Chat on WhatsApp
          </a>
        </div>

        {/* afterButtons position if configured */}
        {mobileHeroImagePosition === 'afterButtons' && heroImageCard}

        {/* 5. Highlight cards: 2 cols minmax(0,1fr), 12px gaps, 10-12px padding, icon 28px, 10px icon gap, text 12.5-13.5px line-height 1.3 */}
        <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-3 w-full max-w-[420px] mx-auto items-stretch text-left">
          {hero.highlights.map((item, i) => (
            <Link
              key={i}
              href="/services"
              className="flex items-center gap-[10px] p-2.5 sm:p-3 pr-2 rounded-sm border border-[#202B3B] bg-[#111925]/90 active:scale-[0.98] transition-all backdrop-blur-sm group min-w-0 h-full"
            >
              <div className="w-7 h-7 min-w-[28px] min-h-[28px] rounded-sm bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold">
                <Icon name={item.icon} size={14} />
              </div>
              <span className="font-sans text-[12.5px] sm:text-[13.5px] leading-snug text-[#F5F2EA] font-medium min-w-0 flex-1 break-normal hyphens-none">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* 6. Hero Image at 'end' (framed card: aspect 16/11, 1px gold hairline, objectPosition 70% 50%, bottom fade) */}
        {mobileHeroImagePosition === 'end' && heroImageCard}
      </div>
    </section>
  );
}
