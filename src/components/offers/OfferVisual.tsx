'use client';

import React from 'react';
import Icon from '@/components/ui/Icons';

interface OfferVisualProps {
  slug: string;
  badge: string;
  isFeatured?: boolean;
}

export default function OfferVisual({ slug, badge, isFeatured }: OfferVisualProps) {
  return (
    <div className="relative h-[170px] w-full flex items-center justify-center overflow-hidden border-b border-[rgba(216,177,90,0.16)] bg-gradient-to-b from-[#14100B] to-[#17120D] select-none">
      {/* ── Radial Gold Glow Backdrop (rgba(216, 177, 90, 0.22)) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle 140px at 50% 50%, rgba(216, 177, 90, 0.22) 0%, rgba(216, 177, 90, 0.05) 55%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* ── Faint Gold Dot Pattern (~5% opacity fading toward edges) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(216, 177, 90, 0.18) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage:
            'radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* ── Top-Left Badge Pill (Only on non-featured cards; featured card has corner ribbon) ── */}
      {!isFeatured && (
        <div className="absolute top-3.5 left-5 z-20">
          <span className="inline-block px-3 py-1 rounded-sm text-[10px] font-sans font-bold tracking-widest uppercase bg-[#0E0C0A]/85 text-gold border border-gold/30 backdrop-blur-sm shadow-sm">
            {badge}
          </span>
        </div>
      )}

      {/* ── 1. Video Ad Visual: Huge "50%" in serif + "OFF" label with lines ── */}
      {slug === 'video-ad' && (
        <div className="relative z-10 flex flex-col items-center justify-center pt-2">
          <span
            className="font-serif font-light leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#D8B15A] to-[#B38A36]"
            style={{
              fontSize: 'clamp(3.4rem, 7vw, 5rem)',
              textShadow: '0 0 35px rgba(216, 177, 90, 0.35)',
            }}
          >
            50%
          </span>
          <div className="flex items-center justify-center gap-3 mt-1.5">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold/60" aria-hidden="true" />
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-gold uppercase">
              OFF
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold/60" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* ── 2. Website Visual: Minimalist Browser Window ── */}
      {slug === 'website' && (
        <div className="relative z-10 w-[204px] sm:w-[224px] rounded-md border border-gold/35 bg-[#0C0B0A]/95 shadow-[0_8px_25px_rgba(0,0,0,0.55)] p-2.5">
          {/* Browser Header Bar with three tiny dots and address bar */}
          <div className="flex items-center gap-1.5 pb-2 border-b border-gold/15 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            <div className="ml-auto w-16 h-1 rounded-full bg-gold/20" />
          </div>

          {/* Gold Hero Bar */}
          <div className="w-full h-8 rounded-sm bg-gradient-to-r from-gold/25 via-gold/15 to-transparent border border-gold/30 flex items-center px-2 mb-2">
            <div className="w-12 h-1.5 rounded-full bg-gold/80" />
          </div>

          {/* Two Short Text Bars */}
          <div className="space-y-1 mb-2">
            <div className="w-3/4 h-1 rounded-full bg-gold/30" />
            <div className="w-1/2 h-1 rounded-full bg-gold/20" />
          </div>

          {/* Three Small Cards */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-6 rounded-sm border border-gold/20 bg-gold/5 flex items-center justify-center">
              <div className="w-3 h-0.5 rounded-full bg-gold/40" />
            </div>
            <div className="h-6 rounded-sm border border-gold/20 bg-gold/5 flex items-center justify-center">
              <div className="w-3 h-0.5 rounded-full bg-gold/40" />
            </div>
            <div className="h-6 rounded-sm border border-gold/20 bg-gold/5 flex items-center justify-center">
              <div className="w-3 h-0.5 rounded-full bg-gold/40" />
            </div>
          </div>
        </div>
      )}

      {/* ── 3. Festive Campaign Visual: Diya Flame & 5 Twinkling Sparkles ── */}
      {slug === 'festive-campaign' && (
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {/* Centered Diya Lamp & Flame SVG */}
          <svg
            className="w-24 h-24 text-gold drop-shadow-[0_0_20px_rgba(216,177,90,0.5)]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Diya Base (Curved traditional oil lamp bowl) */}
            <path
              d="M20 62 C26 78, 74 78, 80 62 C74 65, 26 65, 20 62 Z"
              fill="url(#diyaBaseGrad)"
              stroke="#D8B15A"
              strokeWidth="1.5"
            />
            {/* Diya Rim */}
            <ellipse cx="50" cy="62" rx="30" ry="4" fill="#2E2417" stroke="#D8B15A" strokeWidth="1" />

            {/* Glowing Teardrop Flame */}
            <path
              d="M50 30 C53 42, 60 48, 60 54 C60 60, 55 63, 50 63 C45 63, 40 60, 40 54 C40 48, 47 42, 50 30 Z"
              fill="url(#flameGrad)"
              className="animate-twinkle-1"
            />
            {/* Inner Flame Core */}
            <path
              d="M50 40 C51.5 46, 55 50, 55 54 C55 57, 53 59, 50 59 C47 59, 45 57, 45 54 C45 50, 48.5 46, 50 40 Z"
              fill="#FFF8E7"
            />

            <defs>
              <linearGradient id="diyaBaseGrad" x1="20" y1="62" x2="80" y2="76" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D8B15A" />
                <stop offset="0.5" stopColor="#8F6B28" />
                <stop offset="1" stopColor="#D8B15A" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="50" y1="30" x2="50" y2="63" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFEAA7" />
                <stop offset="0.45" stopColor="#F59E0B" />
                <stop offset="1" stopColor="#D8B15A" />
              </linearGradient>
            </defs>
          </svg>

          {/* Five 4-Point Gold Sparkles of Varied Sizes with Gentle Twinkle */}
          {/* Sparkle 1 (Top Left) */}
          <svg
            className="absolute top-5 left-12 w-5 h-5 text-gold animate-twinkle-1 pointer-events-none drop-shadow-[0_0_8px_rgba(216,177,90,0.6)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
          </svg>

          {/* Sparkle 2 (Top Right) */}
          <svg
            className="absolute top-6 right-14 w-6 h-6 text-gold animate-twinkle-2 pointer-events-none drop-shadow-[0_0_10px_rgba(216,177,90,0.7)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
          </svg>

          {/* Sparkle 3 (Center Left) */}
          <svg
            className="absolute top-20 left-7 w-4 h-4 text-gold-light animate-twinkle-3 pointer-events-none drop-shadow-[0_0_6px_rgba(216,177,90,0.5)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
          </svg>

          {/* Sparkle 4 (Center Right) */}
          <svg
            className="absolute top-18 right-8 w-4 h-4 text-gold-light animate-twinkle-1 pointer-events-none drop-shadow-[0_0_6px_rgba(216,177,90,0.5)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
          </svg>

          {/* Sparkle 5 (Bottom Center/Right) */}
          <svg
            className="absolute bottom-4 right-20 w-3.5 h-3.5 text-gold animate-twinkle-2 pointer-events-none drop-shadow-[0_0_6px_rgba(216,177,90,0.5)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" />
          </svg>
        </div>
      )}

      {/* ── 4. Combo Visual: Two Linked Gold Rings (Website + Film) with "+" connector ── */}
      {slug === 'website-video-combo' && (
        <div className="relative z-10 flex items-center justify-center gap-3 pt-2">
          {/* Left Ring: Website / Browser Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[1.5px] border-gold/70 bg-gradient-to-br from-gold/15 to-[#0E0C0A] flex items-center justify-center text-gold shadow-[0_0_20px_rgba(216,177,90,0.25)]">
            <Icon name="browser" size={24} className="text-gold" />
          </div>

          {/* Thin Gold Connector with "+" symbol */}
          <div className="relative flex items-center justify-center w-8">
            <span className="w-full h-[1px] bg-gold/60" aria-hidden="true" />
            <div className="absolute w-5 h-5 rounded-full bg-gold text-obsidian font-bold text-xs flex items-center justify-center shadow-sm">
              +
            </div>
          </div>

          {/* Right Ring: Film / Play Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[1.5px] border-gold/70 bg-gradient-to-br from-gold/15 to-[#0E0C0A] flex items-center justify-center text-gold shadow-[0_0_20px_rgba(216,177,90,0.25)]">
            <Icon name="film" size={24} className="text-gold" />
          </div>
        </div>
      )}
    </div>
  );
}

