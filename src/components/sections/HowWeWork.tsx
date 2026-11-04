'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeading from '@/components/ui/SectionHeading';
import { howWeWork } from '@/data/content';

export default function HowWeWork() {
  return (
    <section id="our-vision" className="section-padding pt-20 pb-28 md:py-28 bg-[#090A0C] scroll-mt-24" aria-label="How We Work">
      <SectionHeading
        eyebrow="Our Process"
        title="How We Work"
        description="A clear, collaborative process from the first conversation to the final deliverable."
      />

      <div className="max-w-7xl mx-auto w-full">
        {/* Desktop Layout: 5-Column Grid with Horizontal Connecting Line */}
        <div className="hidden md:block relative">
          {/* Thin gold horizontal connecting line behind circles */}
          <div
            className="absolute top-6 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {howWeWork.map((step, i) => (
              <AnimateInView key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-start text-left">
                  {/* Numbered Circle */}
                  <div className="w-12 h-12 rounded-full border border-gold/40 bg-[#090A0C] flex items-center justify-center mb-6 shadow-md shadow-black/80">
                    <span className="font-serif text-lg font-medium text-gold">
                      0{step.step}
                    </span>
                  </div>
                  {/* Title & Description */}
                  <h3 className="font-serif text-xl text-ivory mb-2.5">
                    {step.title}
                  </h3>
                  <p className="body-md text-muted/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Stacked Vertical Timeline with Vertical Connecting Line */}
        <div className="md:hidden relative pl-14 sm:pl-16 space-y-10">
          {/* Thin gold vertical connecting line */}
          <div
            className="absolute top-6 bottom-6 left-6 w-[1px] bg-gradient-to-b from-gold/20 via-gold/50 to-gold/20 z-0"
            aria-hidden="true"
          />

          {howWeWork.map((step, i) => (
            <AnimateInView key={step.step} delay={i * 0.08}>
              <div className="relative">
                {/* Numbered Circle placed on the vertical line */}
                <div className="absolute -left-14 sm:-left-16 top-0 w-12 h-12 rounded-full border border-gold/40 bg-[#090A0C] flex items-center justify-center z-10 shadow-md shadow-black/80">
                  <span className="font-serif text-base font-medium text-gold">
                    0{step.step}
                  </span>
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="font-serif text-xl text-ivory mb-2">
                    {step.title}
                  </h3>
                  <p className="body-md text-muted/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
