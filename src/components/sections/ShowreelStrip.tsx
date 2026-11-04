'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { showreel } from '@/data/content';

export default function ShowreelStrip() {
  return (
    <section className="section-padding py-16 sm:py-20 md:py-28 bg-[#090A0C]" aria-label="Showreel">
      <AnimateInView className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gold font-sans text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-3">
            {showreel.title}
          </p>
          <div className="w-12 h-px bg-gold/30 mx-auto" />
        </div>

        {/* Gold-bordered frame with click-to-play video player */}
        <div className="w-full">
          <VideoPlayer
            src={showreel.videoUrl}
            poster={showreel.poster || '/images/showreel-poster.webp'}
            className="w-full"
          />
        </div>
      </AnimateInView>
    </section>
  );
}
