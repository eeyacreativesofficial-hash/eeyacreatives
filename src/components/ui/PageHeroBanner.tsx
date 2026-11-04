'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { pageBannerStyle, spaceImages } from '@/data/content';

interface PageHeroBannerProps {
  slug: 'work' | 'services' | 'vision' | 'offers' | 'contact';
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  as?: 'h1' | 'h2';
  children?: React.ReactNode;
  className?: string;
}

export default function PageHeroBanner({
  slug,
  eyebrow,
  title,
  description,
  as = 'h1',
  children,
  className = '',
}: PageHeroBannerProps) {
  const [imgError, setImgError] = useState(false);
  const HeadingTag = as;
  const isColorMode = pageBannerStyle === 'color';
  const isSpaceMode = pageBannerStyle === 'space' && !imgError;
  const spaceConfig = spaceImages[slug];

  const screenDissolveStyle: React.CSSProperties = {
    mixBlendMode: 'screen',
    WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 52%, transparent 100%)',
    maskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 52%, transparent 100%)',
  };

  const mobileVerticalFadeStyle: React.CSSProperties = {
    mixBlendMode: 'screen',
    WebkitMaskImage:
      'linear-gradient(180deg, transparent 0%, #000 18%, #000 72%, transparent 100%)',
    maskImage:
      'linear-gradient(180deg, transparent 0%, #000 18%, #000 72%, transparent 100%)',
  };

  // ── SPACE BANNER MODE (Default) ──────────────────────────────────
  if (isSpaceMode && spaceConfig) {
    const isMoonEarth = spaceConfig.src.includes('moon-earth');

    return (
      <section
        className={`relative w-full border-b border-[#202B3B] s-aurora ${className}`}
        aria-label={typeof title === 'string' ? title : eyebrow || 'Page Banner'}
      >
        {/* Ambient Dark Scrim behind text to guarantee contrast */}
        <div
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 30% 50%, rgba(8, 11, 18, 0.75) 0%, rgba(8, 11, 18, 0.40) 70%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* ── DESKTOP SPLIT LAYOUT (>= 1024px, Site Container, min-height 440px) ── */}
        <div className="hidden lg:flex site-container pt-28 pb-16 lg:pt-32 lg:pb-20 items-center justify-between gap-8 lg:gap-12 min-h-[440px] relative z-10">
          {/* Left Text Column: Aligns exactly with container left edge */}
          <div className="flex-1 min-w-0 max-w-xl xl:max-w-2xl flex flex-col items-start text-left">
            {eyebrow && (
              <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
                {eyebrow}
              </p>
            )}

            <HeadingTag
              className="font-serif text-3xl sm:text-4xl xl:text-5xl text-ivory max-w-xl xl:max-w-2xl leading-tight mb-4"
              style={{ textShadow: '0 2px 24px rgba(0, 0, 0, 0.7)' }}
            >
              {title}
            </HeadingTag>

            {description && (
              <p className="font-sans text-base sm:text-lg text-[#CFCBC1] max-w-lg xl:max-w-xl leading-relaxed">
                {description}
              </p>
            )}

            {children && (
              <div className="mt-6 w-full flex flex-col items-start [&_.flex]:justify-start">
                {children}
              </div>
            )}
          </div>

          {/* Right Image Panel: aspect 4/3, width min(46%, 620px), justify-self: end (aligned to container right edge) */}
          <div
            className="aspect-[4/3] shrink-0 relative flex items-center justify-center bg-transparent ml-auto"
            style={{ width: 'min(46%, 620px)', isolation: 'isolate' }}
          >
            <div className={`relative w-full h-full overflow-hidden bg-transparent ${isMoonEarth ? 'p-[10%]' : ''}`}>
              <Image
                src={spaceConfig.src}
                alt=""
                fill
                priority
                quality={88}
                sizes="(min-width: 1280px) 620px, (min-width: 1024px) 480px, 100vw"
                className={isMoonEarth ? 'object-contain' : 'object-cover'}
                style={{
                  ...screenDissolveStyle,
                  objectPosition: spaceConfig.objectPosition.desktop,
                }}
                onError={() => setImgError(true)}
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE / TABLET LAYOUT (< 1024px) ────────────────────────── */}
        <div className="lg:hidden w-full site-container flex flex-col relative z-10 pt-20 md:pt-24 pb-12">
          {/* Top Image Band: full-bleed (width 100vw, margin-inline calc(50% - 50vw)), max-h 240px, vertical fade only */}
          <div
            className="w-[100vw] aspect-[16/10] max-h-[240px] relative bg-transparent mb-6 overflow-hidden"
            style={{
              width: '100vw',
              marginInline: 'calc(50% - 50vw)',
              isolation: 'isolate',
            }}
          >
            <div className={`relative w-full h-full overflow-hidden bg-transparent ${isMoonEarth ? 'p-[8%]' : ''}`}>
              <Image
                src={spaceConfig.src}
                alt=""
                fill
                priority
                quality={88}
                sizes="(max-width: 1023px) 100vw, 560px"
                className={isMoonEarth ? 'object-contain' : 'object-cover'}
                style={{
                  ...mobileVerticalFadeStyle,
                  objectPosition: spaceConfig.objectPosition.mobile,
                }}
                onError={() => setImgError(true)}
              />
            </div>
          </div>

          {/* Text underneath, centered (normal flow, no overlap) */}
          <div className="px-2 sm:px-4 text-center flex flex-col items-center max-w-2xl mx-auto">
            {eyebrow && (
              <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
                {eyebrow}
              </p>
            )}

            <HeadingTag
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory max-w-2xl mx-auto leading-tight mb-3"
              style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.7)' }}
            >
              {title}
            </HeadingTag>

            {description && (
              <p className="font-sans text-sm sm:text-base text-[#CFCBC1] max-w-xl mx-auto leading-relaxed">
                {description}
              </p>
            )}

            {children && <div className="mt-6 w-full flex flex-wrap justify-center gap-3">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  // ── COLOR MODE OR FALLBACK (Pure Aurora centered) ──────────────────
  return (
    <section
      className={`relative min-h-[440px] flex flex-col justify-center items-center text-center border-b border-[#202B3B] s-aurora pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 ${className}`}
      aria-label={typeof title === 'string' ? title : eyebrow || 'Page Banner'}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at 50% 50%, rgba(8, 11, 18, 0.65) 0%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container flex flex-col items-center justify-center relative z-10">
        {eyebrow && (
          <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            {eyebrow}
          </p>
        )}

        <HeadingTag
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory max-w-3xl mx-auto leading-tight mb-4"
          style={{ textShadow: '0 2px 24px rgba(0, 0, 0, 0.6)' }}
        >
          {title}
        </HeadingTag>

        {description && (
          <p className="font-sans text-base sm:text-lg text-[#CFCBC1] max-w-2xl mx-auto leading-relaxed mb-2">
            {description}
          </p>
        )}

        {children && <div className="mt-8 w-full flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
