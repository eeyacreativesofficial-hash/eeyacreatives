'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand } from '@/data/content';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'drawer';
  scrolled?: boolean;
}

export default function Logo({
  className = '',
  variant = 'header',
  scrolled = false,
}: LogoProps) {
  const pathname = usePathname();

  // Tab visibility and saveData detection for CSS animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    if (nav.connection?.saveData) {
      document.body.classList.add('save-data');
    }

    const handleVisibility = () => {
      if (document.hidden) {
        document.body.classList.add('tab-hidden');
      } else {
        document.body.classList.remove('tab-hidden');
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const handleTap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  const isHeader = variant === 'header';
  const isFooter = variant === 'footer';
  const isDrawer = variant === 'drawer';

  // Emblem sizing:
  // Desktop header: 46px (not scrolled) -> 38px (scrolled)
  // Footer: 44px, Drawer / Mobile: 38px
  const emblemSize = isHeader
    ? scrolled
      ? 38
      : 46
    : isFooter
    ? 44
    : 38;

  const emblemDimensionClass = isHeader
    ? scrolled
      ? 'w-[38px] h-[38px]'
      : 'w-[46px] h-[46px]'
    : isFooter
    ? 'w-[44px] h-[44px]'
    : 'w-[38px] h-[38px]';

  // Gap between emblem and wordmark: strictly 14px on desktop header
  const gapClass = isHeader
    ? scrolled
      ? 'gap-2.5 sm:gap-3'
      : 'gap-3 sm:gap-[14px]'
    : 'gap-3';

  // Wordmark size:
  // Desktop header: clamp(1.28rem, 1.45vw, 1.85rem) at 1200-1360px (guarantees >=32px clearance to nav)
  // Above 1360px: clamp(1.45rem, 1.7vw, 1.9rem)
  // Footer: clamp(1.3rem, 1.8vw, 1.8rem)
  // Drawer: clamp(1.2rem, 5vw, 1.45rem)
  const wordmarkSizeClass = isHeader
    ? 'text-[clamp(1.26rem,1.45vw,1.85rem)] min-[1360px]:text-[clamp(1.45rem,1.7vw,1.9rem)] tracking-[0.11em] min-[1360px]:tracking-[0.14em]'
    : isFooter
    ? 'text-[clamp(1.3rem,1.8vw,1.8rem)] tracking-[0.12em]'
    : 'text-[clamp(1.2rem,5vw,1.45rem)] tracking-[0.10em]';

  const wrapAnimationClass = isHeader
    ? 'brand-title-wrap'
    : 'brand-title-wrap brand-title-soft';

  return (
    <Link
      href="/"
      onClick={handleTap}
      className={`relative inline-flex items-center shrink-0 flex-shrink-0 whitespace-nowrap outline-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 focus-visible:rounded-sm group select-none transition-all duration-300 min-h-[44px] ${gapClass} ${className}`}
      aria-label="EEYA CREATIVES — Home"
    >
      {/* ── 1. EMBLEM (Round, crisp gold ring glow & pulse) ── */}
      <div
        className={`relative ${emblemDimensionClass} rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 emblem-pulse-container`}
        style={{
          boxShadow: '0 0 18px rgba(216, 177, 90, 0.45)',
        }}
      >
        <div className="emblem-ring-pulse" aria-hidden="true" />
        <Image
          src="/images/brand/logo-icon-256.webp"
          alt="EEYA CREATIVES Emblem"
          width={emblemSize}
          height={emblemSize}
          priority
          className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* ── 2. WORDMARK & OPTIONAL MICRO-TAGLINE ── */}
      <div className="flex flex-col items-start justify-center min-w-0 shrink-0">
        <div className="relative inline-flex items-center overflow-visible">
          {/* Main Wordmark with Breathing Glow & Sweep Shine (strictly on text) */}
          <span
            className={`font-serif uppercase leading-none ${wordmarkSizeClass} brand-wordmark-gold whitespace-nowrap ${wrapAnimationClass}`}
            data-text="EEYA CREATIVES"
          >
            <span className="font-[800] mr-[0.24em]">EEYA</span>
            <span className="font-[700]">CREATIVES</span>
          </span>
        </div>

        {/* ── 3. MICRO-TAGLINE: only at 1360px and wider, and only while unscrolled ── */}
        {isHeader && Boolean(brand.headerTagline) && (
          <span
            className={`font-sans text-[9.5px] min-[1536px]:text-[10px] tracking-[0.20em] uppercase text-gold/80 mt-1 transition-all duration-300 whitespace-nowrap pointer-events-none ${
              scrolled ? 'hidden' : 'hidden min-[1360px]:block'
            }`}
          >
            {brand.headerSubtext || 'AI POWERED CREATIVE STUDIO'}
          </span>
        )}
      </div>
    </Link>
  );
}
