import type { Metadata } from 'next';
import Icon from '@/components/ui/Icons';
import SectionDivider from '@/components/ui/SectionDivider';
import PageHeroBanner from '@/components/ui/PageHeroBanner';
import Section from '@/components/ui/Section';
import CreativeWorldStrip from '@/components/sections/CreativeWorldStrip';
import QuoteBandSection from '@/components/sections/QuoteBandSection';
import { vision, buildWhatsAppLink, whatsappMessages } from '@/data/content';
import { cormorantGaramond } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Our Vision',
  description:
    'Every brand has a story worth sharing. Great storytelling and refined design should not belong only to the few. At EEYA CREATIVES, brands of every size can look and feel premium.',
  openGraph: {
    title: 'EEYA CREATIVES | Our Vision',
    description:
      'Every brand has a story worth sharing. Great storytelling and refined design should not belong only to the few. At EEYA CREATIVES, brands of every size can look and feel premium.',
  },
  twitter: {
    title: 'EEYA CREATIVES | Our Vision',
    description:
      'Every brand has a story worth sharing. Great storytelling and refined design should not belong only to the few. At EEYA CREATIVES, brands of every size can look and feel premium.',
  },
};

export default function OurVisionPage() {
  const whatsappUrl = buildWhatsAppLink(whatsappMessages.default);

  return (
    <div className="bg-[var(--bg-0)] text-ivory">
      {/* ============================================================== */}
      {/* 1. HERO BANNER                                                 */}
      {/* ============================================================== */}
      <PageHeroBanner
        slug="vision"
        eyebrow={vision.header.eyebrow}
        title={
          <>
            Every Brand Has a{' '}
            <span className="text-gold italic font-serif">Story Worth Sharing.</span>
          </>
        }
        description={vision.header.subtext}
      />

      {/* ============================================================== */}
      {/* 2. VISION AND MISSION (Two Equal Statement Columns)             */}
      {/* ============================================================== */}
      <Section
        variant="halo"
        className="pt-24 pb-[72px]"
        aria-label="Vision and Mission"
      >
        <div className="site-container relative z-10">
          {/* Centered Lead-In Line (40px space below) */}
          <div className="text-center max-w-3xl mx-auto mb-10 css-fade-up">
            <p className="font-sans text-base sm:text-lg text-[var(--body)] leading-relaxed">
              {vision.statements.leadIn}
            </p>
          </div>

          {/* Two Equal Columns with 1px Center Hairline (1024px+) or Stacked (under 1024px) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 relative items-stretch">
            {/* Desktop 1px vertical gold hairline centered (100% block height, 20% opacity) */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-[rgba(216,177,90,0.20)] pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Left Column: OUR VISION (80px padding on hairline side) */}
            <div className="lg:pr-20 flex flex-col justify-start text-left css-fade-up css-delay-1 relative z-10">
              {/* Short 40px gold line */}
              <div className="w-10 h-[1px] bg-gold/70 mb-3" aria-hidden="true" />

              {/* Label */}
              <span className="text-gold font-sans text-xs tracking-[0.25em] uppercase font-semibold block mb-5">
                {vision.statements.vision.label}
              </span>

              {/* Statement in sentence case, Cormorant Garamond, no quotes, max 4 lines */}
              <h2
                className={`${cormorantGaramond.className} font-medium text-ivory mb-6 leading-[1.22] line-clamp-4`}
                style={{
                  fontSize: 'clamp(1.7rem, 2.9vw, 2.6rem)',
                  textWrap: 'balance',
                }}
              >
                {vision.statements.vision.statement}
              </h2>

              {/* Support line */}
              <p className="font-sans text-[16px] leading-[1.7] text-[#CFCBC1] max-w-[38ch]">
                {vision.statements.vision.support}
              </p>
            </div>

            {/* Mobile & Tablet Divider (56px gap) */}
            <div
              className="lg:hidden flex items-center justify-center my-14 w-full"
              aria-hidden="true"
            >
              <div className="flex items-center justify-center w-[60px] relative">
                <span className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <span className="absolute w-2 h-2 rotate-45 border border-gold/60 bg-[var(--bg-0)]" />
              </div>
            </div>

            {/* Right Column: OUR MISSION (80px padding on hairline side) */}
            <div className="lg:pl-20 flex flex-col justify-start text-left css-fade-up css-delay-2 relative z-10">
              {/* Short 40px gold line */}
              <div className="w-10 h-[1px] bg-gold/70 mb-3" aria-hidden="true" />

              {/* Label */}
              <span className="text-gold font-sans text-xs tracking-[0.25em] uppercase font-semibold block mb-5">
                {vision.statements.mission.label}
              </span>

              {/* Statement in sentence case, Cormorant Garamond, no quotes, max 4 lines */}
              <h2
                className={`${cormorantGaramond.className} font-medium text-ivory mb-6 leading-[1.22] line-clamp-4`}
                style={{
                  fontSize: 'clamp(1.7rem, 2.9vw, 2.6rem)',
                  textWrap: 'balance',
                }}
              >
                {vision.statements.mission.statement}
              </h2>

              {/* Support line */}
              <p className="font-sans text-[16px] leading-[1.7] text-[#CFCBC1] max-w-[38ch]">
                {vision.statements.mission.support}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ============================================================== */}
      {/* 3. TYPOGRAPHIC BAND (Full Width, No Cards)                     */}
      {/* ============================================================== */}
      <Section
        variant="bloom"
        bloomLow
        className="py-20 md:py-28 text-center"
        aria-label="Core Process"
      >
        <div className="site-container relative z-10">
          {/* Desktop: Horizontal Three Words with Diamonds. Mobile: Stacked Centered */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 lg:gap-14">
            {vision.typographicBand.items.map((item, idx) => (
              <div
                key={item.word}
                className="flex flex-col md:flex-row items-center gap-8 lg:gap-14 css-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <span
                    className={`font-serif tracking-tight leading-none mb-3 ${
                      item.word === 'Create.' ? 'text-shimmer-gold' : 'text-ivory'
                    }`}
                    style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)' }}
                  >
                    {item.word}
                  </span>
                  <p className="font-sans text-sm sm:text-[15px] text-[var(--body)] max-w-xs leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                {/* Gold Diamond Divider between items on desktop */}
                {idx < vision.typographicBand.items.length - 1 && (
                  <span
                    className="hidden md:inline-block text-gold/40 text-lg select-none"
                    aria-hidden="true"
                  >
                    ◆
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ============================================================== */}
      {/* 4. FROM IDEA TO IMPACT (Four Connected Cards)                  */}
      {/* ============================================================== */}
      <Section
        variant="blueprint"
        className="py-20 md:py-28"
        aria-label="From Idea to Impact"
      >
        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 css-fade-up">
            <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              {vision.ideaToImpact.eyebrow}
            </p>
            <h2 className="heading-lg text-ivory">
              {vision.ideaToImpact.heading}
            </h2>
          </div>

          {/* Cards Grid: 4 equal cards joined by thin gold line (desktop), 2x2 tablet, 1 mobile */}
          <div className="relative">
            {/* Desktop connecting line between cards */}
            <div
              className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-gold/25 via-gold/50 to-gold/25 pointer-events-none z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch relative z-10">
              {vision.ideaToImpact.cards.map((card, idx) => (
                <div
                  key={card.word}
                  className="css-fade-up h-full"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="card-dark group p-6 sm:p-7 flex flex-col h-full rounded-sm">
                    {/* Top Row: Numeral & Icon Circle */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif text-3xl sm:text-4xl text-gold font-light leading-none">
                        {card.num}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-gold/35 bg-[var(--bg-0)] flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-obsidian transition-colors duration-300">
                        <Icon name={card.icon} size={18} />
                      </div>
                    </div>

                    {/* Word in Serif */}
                    <h3 className="font-serif text-2xl text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                      {card.word}
                    </h3>

                    {/* Thin gold divider */}
                    <div
                      className="w-8 h-[1px] bg-gold/40 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-gold"
                      aria-hidden="true"
                    />

                    {/* One Line Description */}
                    <p className="font-sans text-[15px] sm:text-base text-[var(--body)] leading-relaxed mt-auto">
                      {card.line}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ============================================================== */}
      {/* 5. QUOTE BAND (Cinematic Banner with Ideas Meet Visuals)      */}
      {/* ============================================================== */}
      <QuoteBandSection
        slogan={vision.quoteBand.slogan}
        quote={vision.quoteBand.quote}
        attribution={vision.quoteBand.attribution}
        footnote={vision.quoteBand.footnote}
        motto={vision.quoteBand.motto}
      />

      <SectionDivider />

      {/* ============================================================== */}
      {/* 6. A GLIMPSE OF WHAT WE CREATE (Image Strip)                   */}
      {/* ============================================================== */}
      <CreativeWorldStrip />

      <SectionDivider />

      {/* ============================================================== */}
      {/* 7. OUR PROMISE (Polished Section)                              */}
      {/* ============================================================== */}
      <Section
        variant="champagne"
        className="py-20 md:py-28"
        aria-label="Our Promise"
      >
        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 css-fade-up">
            <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              {vision.promise.eyebrow}
            </p>
            <h2 className="heading-lg text-ivory mb-3">
              {vision.promise.heading}
            </h2>
            <p className="body-md text-[var(--body)] leading-relaxed">
              {vision.promise.subtext}
            </p>
          </div>

          {/* Three Cards: Equal heights, 56px icon circle, faint numeral behind */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {vision.promise.items.map((item, idx) => (
              <div
                key={item.title}
                className="css-fade-up h-full"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="relative p-8 rounded-sm card-dark h-full flex flex-col group">
                  {/* Large Faint Numeral in Background */}
                  <span
                    className="font-serif text-6xl sm:text-7xl text-gold/[0.08] select-none pointer-events-none absolute right-6 top-6 leading-none font-light"
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>

                  {/* 56px Gold Hairline Circle with Icon */}
                  <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full border border-gold/40 bg-[var(--bg-0)] flex items-center justify-center text-gold mb-6 shrink-0 shadow-sm group-hover:bg-gold group-hover:text-obsidian transition-colors duration-300">
                    <Icon name={item.icon} size={22} />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ivory mb-3 font-medium group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Body text brightened to var(--body), at least 15-16px */}
                  <p className="font-sans text-[15px] sm:text-base text-[var(--body)] leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ============================================================== */}
      {/* 8. CLOSING BAND (With Soft Gold CSS Light-Beam Backdrop)       */}
      {/* ============================================================== */}
      <Section
        variant="bloom"
        className="pt-20 pb-24 md:pt-28 md:pb-28 border-t border-[var(--hairline)] text-center"
        aria-label="Call to action"
      >
        <div className="site-container relative z-10 css-fade-up">
          {/* Thin gold line above (~60px, centered) */}
          <div className="w-[60px] h-[1px] bg-gold/70 mx-auto mb-6" aria-hidden="true" />

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory mb-4 tracking-tight">
            {vision.closing.heading}
          </h2>

          <p className="font-sans text-base sm:text-lg text-[var(--body)] max-w-2xl mx-auto mb-10 leading-relaxed">
            {vision.closing.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[420px] sm:max-w-none mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-cta="true"
              className="btn-primary w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Icon name="whatsapp" size={18} />
              {vision.closing.whatsappButton}
            </a>
            <a
              href={`mailto:${vision.closing.emailAddress}`}
              className="btn-outline w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Icon name="mail" size={18} />
              {vision.closing.emailButton}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
