'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { quoteBandImage } from '@/data/content';

interface QuoteBandSectionProps {
  slogan?: string;
  quote?: string;
  attribution?: string;
  footnote?: string;
  motto?: string;
}

export default function QuoteBandSection({
  slogan = 'IDEAS MEET VISUALS',
  attribution = 'Dr. A.P.J. Abdul Kalam',
  footnote = 'A quotation shared in admiration. No endorsement is implied.',
  motto = 'AI POWERED ADVERTISING AND WEBSITE DEVELOPMENT CREATIVE STUDIO',
}: QuoteBandSectionProps) {
  const [imgError, setImgError] = useState(false);

  // Dynamic image resolution: quote-dream.webp (4/3) or rocket-launch.webp (4/5)
  // When quoteBandImage === 'auto', quote-dream.webp is prioritized.
  const imageConfig = {
    src: '/images/space/quote-dream.webp',
    aspect: 'aspect-[4/3]',
    mobileAspect: 'aspect-[16/10]',
    objectPosition: 'center',
    alt: 'Open book with radiant golden cosmic galaxy swirling into the night sky, symbolizing dreams transforming into thoughts',
  };

  const screenDissolveStyle: React.CSSProperties = {
    mixBlendMode: 'screen',
    WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 52%, transparent 100%)',
    maskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 52%, transparent 100%)',
  };

  const quoteContent = (
    <div className="relative z-10 flex flex-col items-start text-left max-w-xl">
      {/* 1. Small Gold Caps Label */}
      <p className="text-gold font-sans text-[0.9rem] font-semibold tracking-[0.22em] uppercase mb-5">
        {slogan}
      </p>

      {/* 2. Large Decorative Opening Quote Mark & Quote Text */}
      <div className="relative">
        <span
          className="font-serif text-[5rem] text-gold/35 absolute -top-10 -left-6 pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote
          className="relative z-10 font-serif italic font-semibold text-[clamp(1.9rem,3.4vw,3rem)] text-ivory leading-[1.2] max-w-[22em]"
          style={{ textWrap: 'balance' }}
        >
          <span className="text-gold quote-gold-underline">Dream, dream, dream.</span>{' '}
          Dreams transform into thoughts and thoughts result in action.
        </blockquote>
      </div>

      {/* 3. Attribution */}
      <div className="w-[48px] h-[1px] bg-gold mt-6 mb-3" aria-hidden="true" />
      <p className="font-sans font-semibold text-[1.05rem] tracking-[0.08em] text-gold mb-2">
        {attribution}
      </p>

      {/* 4. Footnote in #B4B0A6 at 13px */}
      <p className="text-[13px] text-[#B4B0A6] font-normal leading-relaxed mb-8 max-w-md">
        {footnote}
      </p>

      {/* 5. Motto in small muted caps below */}
      <div className="pt-4 border-t border-[var(--hairline)] w-full max-w-md">
        <p className="text-[11px] font-sans tracking-[0.22em] uppercase text-muted/60">
          {motto}
        </p>
      </div>
    </div>
  );

  return (
    <Section
      variant="halo"
      hasBeams
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Philosophy Quote"
    >
      <div className="site-container relative z-10">
        {!imgError ? (
          <>
            {/* ── DESKTOP SPLIT LAYOUT (>= 1024px, quote left-aligned to container edge) ── */}
            <div className="hidden lg:flex items-center justify-between gap-12 xl:gap-16 min-h-[460px]">
              {/* Left Column (~52%) */}
              <div className="w-[52%]">{quoteContent}</div>

              {/* Right Column: Panel max 520px wide with screen blend and four-sided dissolve */}
              <div
                className={`w-[48%] max-w-[520px] ${imageConfig.aspect} shrink-0 relative flex items-center justify-center bg-transparent`}
                style={{ isolation: 'isolate' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-transparent">
                  <Image
                    src={imageConfig.src}
                    alt={imageConfig.alt}
                    fill
                    loading="lazy"
                    quality={88}
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                    style={{
                      ...screenDissolveStyle,
                      objectPosition: imageConfig.objectPosition,
                    }}
                    onError={() => setImgError(true)}
                  />
                </div>
              </div>
            </div>

            {/* ── MOBILE / TABLET LAYOUT (< 1024px) ── */}
            <div className="lg:hidden flex flex-col items-center">
              {/* Image Band on top (aspect 16/10, max-h 240px, screen blend and mask) */}
              <div
                className={`w-full max-w-md mx-auto ${imageConfig.mobileAspect} max-h-[240px] relative bg-transparent mb-8`}
                style={{ isolation: 'isolate' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-transparent">
                  <Image
                    src={imageConfig.src}
                    alt={imageConfig.alt}
                    fill
                    loading="lazy"
                    quality={88}
                    sizes="(max-width: 1023px) 100vw, 520px"
                    className="object-cover"
                    style={{
                      ...screenDissolveStyle,
                      objectPosition: imageConfig.objectPosition,
                    }}
                    onError={() => setImgError(true)}
                  />
                </div>
              </div>

              {/* Quote below, centered on mobile */}
              <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center [&_.quote-gold-underline]:inline-block">
                {quoteContent}
              </div>
            </div>
          </>
        ) : (
          /* Pure Halo Colour Recipe Fallback when image is missing */
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            {quoteContent}
          </div>
        )}
      </div>
    </Section>
  );
}
