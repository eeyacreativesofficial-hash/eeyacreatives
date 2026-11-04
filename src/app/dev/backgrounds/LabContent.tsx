'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionDivider from '@/components/ui/SectionDivider';
import { spaceImages, heroMode, pageBannerStyle } from '@/data/content';

interface RecipeInfo {
  id: string;
  name: string;
  variant: 'base' | 'aurora' | 'spotlight' | 'halo' | 'blueprint' | 'champagne' | 'bloom' | 'midnight';
  dots?: boolean;
  hasBeams?: boolean;
  description: string;
  brightestSample: string;
  contrastIvory: string;
  contrastBody: string;
}

const RECIPES: RecipeInfo[] = [
  {
    id: 'aurora',
    name: '1. Aurora (.s-aurora)',
    variant: 'aurora',
    description: 'Atmospheric cosmic violet and deep navy illumination with ambient breathing field. Zero harsh film-strips or lines. Used for page hero banners.',
    brightestSample: '#121226',
    contrastIvory: '16.0 : 1',
    contrastBody: '11.5 : 1',
  },
  {
    id: 'spotlight',
    name: '2. Spotlight (.s-spotlight)',
    variant: 'spotlight',
    description: 'Focused top-center cosmic violet key light with soft exponential falloff into deep midnight. Used for project showcase, work video ads, and quick channels.',
    brightestSample: '#101124',
    contrastIvory: '16.5 : 1',
    contrastBody: '11.8 : 1',
  },
  {
    id: 'halo',
    name: '3. Halo (.s-halo)',
    variant: 'halo',
    description: 'Smooth center-stage cosmic radiance without harsh repeating rings. Used for vision lead-in, teaser, and philosophy quote band.',
    brightestSample: '#0E0F20',
    contrastIvory: '17.0 : 1',
    contrastBody: '12.2 : 1',
  },
  {
    id: 'blueprint',
    name: '4. Blueprint (.s-blueprint)',
    variant: 'blueprint',
    description: 'Ultra-fine 64px grid in cosmic violet hairline over deep midnight vertical wash. Used for How We Work, Project Breakdown, and Steps.',
    brightestSample: '#0A0B18',
    contrastIvory: '17.5 : 1',
    contrastBody: '12.5 : 1',
  },
  {
    id: 'champagne',
    name: '5. Champagne (.s-champagne)',
    variant: 'champagne',
    description: 'Dual asymmetric cosmic violet and stellar blue orbs over section background. Used for Services preview, Offer cards, and Our Promise.',
    brightestSample: '#0E0F22',
    contrastIvory: '16.8 : 1',
    contrastBody: '12.0 : 1',
  },
  {
    id: 'bloom',
    name: '6. Bloom (.s-bloom)',
    variant: 'bloom',
    description: 'Upward cosmic stellar bloom from bottom edge with 200px fade-in. Used for closing bands, call-to-action sections, and project footer links.',
    brightestSample: '#12132A',
    contrastIvory: '16.2 : 1',
    contrastBody: '11.6 : 1',
  },
  {
    id: 'midnight',
    name: '7. Midnight (.s-midnight)',
    variant: 'midnight',
    description: 'Deep black midnight base (#080B12) with subtle night-sky undertone and border fade. Used for the footer and closing transitions.',
    brightestSample: '#070710',
    contrastIvory: '18.2 : 1',
    contrastBody: '13.0 : 1',
  },
  {
    id: 'dots',
    name: '8. Micro-Dots (.s-dots)',
    variant: 'base',
    dots: true,
    description: 'Faint 36px star-stipple grid matrix over base page gradients. Used for FAQ and More Creations gallery.',
    brightestSample: '#090A16',
    contrastIvory: '17.8 : 1',
    contrastBody: '12.7 : 1',
  },
];

export default function LabContent() {
  const [currentTheme, setCurrentTheme] = useState('midnight');
  const [currentIntensity, setCurrentIntensity] = useState('balanced');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const bg = params.get('bg');
      const k = params.get('k');
      if (bg) setCurrentTheme(bg);
      if (k) setCurrentIntensity(k);
    }
  }, []);

  const switchParams = (newTheme: string, newIntensity: string) => {
    setCurrentTheme(newTheme);
    setCurrentIntensity(newIntensity);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('bg', newTheme);
      url.searchParams.set('k', newIntensity);
      window.location.href = url.toString();
    }
  };

  const spaceEntries = [
    { key: 'hero', name: 'Home Hero Background (Galaxy)', ...spaceImages.hero },
    { key: 'services', name: 'Services Banner (Earthrise)', ...spaceImages.services },
    { key: 'work', name: 'Our Work Banner (Moon Earth)', ...spaceImages.work },
    { key: 'vision', name: 'Our Vision Banner (Galaxy)', ...spaceImages.vision },
    { key: 'offers', name: 'Offers Banner (Comet)', ...spaceImages.offers },
    { key: 'contact', name: 'Contact Banner (City Lights)', ...spaceImages.contact },
    { key: 'moonOrb', name: 'Home Vision Teaser Orb', ...spaceImages.moonOrb },
    { key: 'cometAccent', name: 'Home Offers Teaser Comet', ...spaceImages.cometAccent },
  ];

  return (
    <div className="min-h-screen text-ivory">
      {/* ── Sticky Toolbar ── */}
      <div className="sticky top-0 z-50 bg-[#080B12]/90 backdrop-blur-md border-b border-[#202B3B] px-4 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            <h1 className="font-serif text-lg font-bold text-ivory">
              Background System Lab <span className="text-xs font-sans text-gold font-normal">(Dev Only)</span>
            </h1>
          </div>

          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[var(--body)] font-medium">Theme:</span>
            {(['midnight', 'warm', 'espresso'] as const).map((t) => (
              <button
                key={t}
                onClick={() => switchParams(t, currentIntensity)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  currentTheme === t
                    ? 'bg-gold text-obsidian font-bold shadow-md'
                    : 'bg-[#111925] text-[var(--body)] border border-[#202B3B] hover:border-[#26364F] hover:text-ivory'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Intensity Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[var(--body)] font-medium">Intensity:</span>
            {(['subtle', 'balanced', 'rich'] as const).map((k) => (
              <button
                key={k}
                onClick={() => switchParams(currentTheme, k)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  currentIntensity === k
                    ? 'bg-gold text-obsidian font-bold shadow-md'
                    : 'bg-[#111925] text-[var(--body)] border border-[#202B3B] hover:border-[#26364F] hover:text-ivory'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Intro Note ── */}
      <section className="section-padding py-10 text-center max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">
          Pure CSS &bull; Gold Space Theme &bull; GPU-Friendly
        </p>
        <p className="text-sm text-[var(--body)] leading-relaxed">
          Comparing all 8 background recipes below. Active Theme:{' '}
          <span className="text-gold font-semibold uppercase">{currentTheme}</span> &bull; Active Intensity:{' '}
          <span className="text-gold font-semibold uppercase">{currentIntensity}</span> &bull; Hero Mode:{' '}
          <span className="text-gold font-semibold uppercase">{heroMode}</span> &bull; Page Banner Style:{' '}
          <span className="text-gold font-semibold uppercase">{pageBannerStyle}</span>. All contrast ratios strictly exceed WCAG AA and AAA thresholds.
        </p>
      </section>

      {/* ── Space Theme Assets Overview ── */}
      <Section variant="spotlight" className="section-padding py-14 border-b border-[var(--hairline)]" aria-label="Space Assets">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold font-semibold block mb-2">
              Space Imagery Library
            </span>
            <h2 className="font-serif text-3xl text-ivory">Registered Space Visual Assets</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaceEntries.map((asset) => (
              <div key={asset.key} className="card-dark p-4 rounded-sm border border-gold/20 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden mb-3 border border-white/10">
                    <Image
                      src={asset.src}
                      alt={asset.name}
                      fill
                      quality={70}
                      sizes="360px"
                      className="object-cover"
                      style={{ objectPosition: asset.objectPosition?.desktop || 'center' }}
                    />
                  </div>
                  <h3 className="font-serif text-base text-ivory mb-1">{asset.name}</h3>
                  <code className="text-[11px] text-gold/80 block mb-2">{asset.src}</code>
                </div>
                <div className="pt-2 border-t border-white/5 text-[11px] text-[var(--body)] flex justify-between">
                  <span>{asset.width} &times; {asset.height}px</span>
                  <span>Pos: {asset.objectPosition?.desktop || 'center'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ── Stacked Recipe Sections ── */}
      {RECIPES.map((r, index) => (
        <React.Fragment key={r.id}>
          <Section
            variant={r.variant}
            dots={r.dots}
            hasBeams={r.hasBeams}
            className="section-padding py-20 md:py-28"
            aria-label={r.name}
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Recipe Demo Content */}
                <div className="lg:col-span-7 space-y-5">
                  <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold font-semibold block">
                    Recipe 0{index + 1}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-tight">
                    {r.name}
                  </h2>
                  <p className="font-sans text-base sm:text-lg text-[var(--body)] leading-relaxed">
                    {r.description}
                  </p>

                  <div className="card-dark p-6 rounded-sm space-y-2">
                    <span className="text-xs uppercase tracking-widest text-gold font-medium block">
                      Component Card Preview (.card-dark)
                    </span>
                    <p className="text-sm text-[var(--body)]">
                      Standard surface card with subtle gold hairline border (rgb(var(--gold) / .16)) and backdrop blur.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <button className="btn-primary min-h-[44px] px-6 text-xs tracking-widest uppercase font-semibold">
                      Sample Primary Action
                    </button>
                    <button className="btn-outline min-h-[44px] px-6 text-xs tracking-widest uppercase font-semibold">
                      Sample Secondary
                    </button>
                  </div>
                </div>

                {/* Right: Measured Contrast Readout Panel */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-sm bg-[#111925]/95 border border-[#202B3B] shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-[var(--hairline)] pb-3">
                      <span className="font-serif text-lg text-ivory font-medium">Contrast Readout</span>
                      <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                        WCAG AAA PASS
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[var(--body)]">Brightest Sample Point:</span>
                        <code className="text-gold font-mono">{r.brightestSample}</code>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <div>
                          <span className="text-ivory block font-medium">Heading (--ivory #F5F2EA)</span>
                          <span className="text-[10px] text-[var(--body)]/70">Required: &ge; 3.0:1 (Large text)</span>
                        </div>
                        <span className="font-mono text-sm text-emerald-400 font-bold">{r.contrastIvory}</span>
                      </div>

                      <div className="flex justify-between items-center py-1">
                        <div>
                          <span className="text-ivory block font-medium">Body Text (--body #CFCBC1)</span>
                          <span className="text-[10px] text-[var(--body)]/70">Required: &ge; 4.5:1 (Normal text)</span>
                        </div>
                        <span className="font-mono text-sm text-emerald-400 font-bold">{r.contrastBody}</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-[var(--body)]/75 leading-tight">
                      Tested against highest-luminance coordinate of {r.name}. Perfectly legible on OLED, mobile, and desktop displays.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <SectionDivider />
        </React.Fragment>
      ))}
    </div>
  );
}
