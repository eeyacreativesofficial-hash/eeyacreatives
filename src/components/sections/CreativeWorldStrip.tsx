'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icons';
import Section from '@/components/ui/Section';
import { vision } from '@/data/content';

export default function CreativeWorldStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbRatio, setThumbRatio] = useState(0.33);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollLeft / maxScroll)));
      setThumbRatio(Math.min(1, Math.max(0.15, clientWidth / scrollWidth)));
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < maxScroll - 4);
    } else {
      setScrollProgress(0);
      setThumbRatio(1);
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByStep = (direction: 'prev' | 'next') => {
    const el = containerRef.current;
    if (!el) return;

    const firstSlide = el.querySelector('[data-slide]') as HTMLElement | null;
    const slideWidth = firstSlide ? firstSlide.offsetWidth + 24 : el.clientWidth * 0.33;
    const targetScroll = el.scrollLeft + (direction === 'next' ? slideWidth : -slideWidth);

    el.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <Section
      variant="spotlight"
      className="py-20 md:py-28 overflow-hidden"
      aria-label="Our Creative World"
    >
      <div className="site-container relative z-10">
        {/* Header Row: Title on Left, Desktop 44px Arrow Buttons on Right */}
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-2xl css-fade-up">
            <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              {vision.creativeWorld.eyebrow}
            </p>
            <h2 className="heading-lg text-ivory">
              {vision.creativeWorld.heading}
            </h2>
          </div>

          {/* Desktop Arrow Controls (44px circles with gold hairline) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 mb-1" aria-label="Slide navigation">
            <button
              type="button"
              onClick={() => scrollByStep('prev')}
              disabled={!canScrollLeft}
              aria-label="Previous slide"
              className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border flex items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                canScrollLeft
                  ? 'border-gold/30 hover:border-gold text-gold hover:bg-gold/10'
                  : 'border-gold/15 text-gold/30 cursor-not-allowed opacity-50'
              }`}
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByStep('next')}
              disabled={!canScrollRight}
              aria-label="Next slide"
              className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border flex items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                canScrollRight
                  ? 'border-gold/30 hover:border-gold text-gold hover:bg-gold/10'
                  : 'border-gold/15 text-gold/30 cursor-not-allowed opacity-50'
              }`}
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container:
            - Desktop: 3 visible cards (each ~33% width minus 24px gaps)
            - Mobile: 1.15 visible cards (~84vw) with scroll-snap
            - No native scrollbar
        */}
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-label="Creative Visuals Gallery"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 pt-1 px-1 -mx-4 sm:-mx-6 lg:mx-0 lg:px-0 scrollbar-none items-stretch focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50"
        >
          {vision.creativeWorld.items.map((item, idx) => (
            <div
              key={item.src}
              data-slide
              className="w-[84vw] sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start rounded-sm overflow-hidden border border-[#202B3B] hover:border-[#26364F] transition-colors duration-300 group flex flex-col bg-[var(--bg-1)] css-fade-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* 3:2 Landscape Image Container */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-[var(--bg-2)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 380px"
                  style={{ objectPosition: item.objectPosition }}
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                />
              </div>

              {/* Clean Dark Strip Under Image (Not Over Image) */}
              <div className="px-4 py-3.5 bg-[var(--bg-1)] border-t border-gold/20 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2.5">
                  <span className="text-gold flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={15} />
                  </span>
                  <span className="font-sans text-[14px] uppercase tracking-[0.14em] font-medium text-ivory group-hover:text-gold transition-colors">
                    {item.label}
                  </span>
                </div>
                <span className="font-sans text-xs font-semibold text-gold/60 tracking-wider">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2px Gold Progress Line (24px below cards) */}
        <div className="mt-6 max-w-xs sm:max-w-sm mx-auto h-[2px] bg-gold/15 rounded-full overflow-hidden relative" aria-hidden="true">
          <div
            className="h-full bg-gold rounded-full transition-transform duration-100 ease-out will-change-transform"
            style={{
              width: `${thumbRatio * 100}%`,
              transform: `translateX(${scrollProgress * ((1 - thumbRatio) / Math.max(thumbRatio, 0.01)) * 100}%)`,
            }}
          />
        </div>

        {/* Caption line below the strip */}
        <p className="text-center font-sans text-xs sm:text-sm text-[var(--body)] mt-4 tracking-wide">
          {vision.creativeWorld.caption}
        </p>
      </div>
    </Section>
  );
}

