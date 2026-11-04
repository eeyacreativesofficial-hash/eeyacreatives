'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateInView from '@/components/ui/AnimateInView';
import Icon from '@/components/ui/Icons';
import Section from '@/components/ui/Section';
import { visionPreview, spaceImages } from '@/data/content';
import { cormorantGaramond } from '@/app/fonts';

export default function OurVisionPreview() {
  const moonConfig = spaceImages?.moonOrb || {
    src: '/images/space/moon-orb.webp',
  };

  return (
    <Section
      variant="halo"
      id="our-vision"
      className="py-20 md:py-28 border-t border-[#202B3B] scroll-mt-24 text-center relative overflow-hidden"
      aria-label="Our Vision Preview"
    >
      <span id="vision" className="scroll-mt-24 pointer-events-none absolute top-0 left-0" aria-hidden="true" />

      <div className="site-container relative z-10">
        <AnimateInView>
          <div className="w-10 h-[1px] bg-gold/70 mx-auto mb-3" aria-hidden="true" />
          <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            {visionPreview.eyebrow}
          </p>

          {/* Celestial Moon Orb Accent: 240px desktop / 170px mobile with soft gold glow behind and 4-sided circular dissolve */}
          <div className="flex justify-center mb-8 relative">
            {/* Soft gold glow behind it (alpha 0.18, 1.6x moon size) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[272px] h-[272px] md:w-[384px] md:h-[384px] pointer-events-none -z-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(216, 177, 90, 0.18) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* Seamless Moon Orb without borders or rings */}
            <div
              className="relative w-[170px] h-[170px] md:w-[240px] md:h-[240px] overflow-hidden bg-transparent z-10 transition-transform duration-700 hover:scale-105"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 60%, transparent 72%)',
                maskImage: 'radial-gradient(circle at 50% 50%, #000 60%, transparent 72%)',
              }}
            >
              <Image
                src={moonConfig.src}
                alt="Moon Orb"
                fill
                quality={88}
                sizes="(min-width: 768px) 240px, 170px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Vision Statement in Cormorant Garamond without quotation marks */}
          <h2
            className={`${cormorantGaramond.className} font-medium text-ivory mb-6 leading-[1.22] max-w-3xl mx-auto`}
            style={{
              fontSize: 'clamp(1.7rem, 2.9vw, 2.6rem)',
              textWrap: 'balance',
            }}
          >
            {visionPreview.statement}
          </h2>

          {/* Support line */}
          <p className="font-sans text-[16px] leading-[1.7] text-[#CFCBC1] max-w-[38ch] mx-auto mb-10">
            {visionPreview.support}
          </p>

          <Link href="/our-vision" className="btn-outline min-h-[44px] px-8">
            {visionPreview.buttonText}
            <Icon name="arrowRight" size={14} />
          </Link>
        </AnimateInView>
      </div>
    </Section>
  );
}
