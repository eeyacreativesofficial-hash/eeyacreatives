'use client';

import Link from 'next/link';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icons';
import ProjectCardCover from '@/components/ui/ProjectCardCover';
import Section from '@/components/ui/Section';
import { projects } from '@/data/content';

export default function FeaturedWork() {
  // Show 4 featured cards sorted by order (1. Kalam Tribute, 2. Timeless Gold, 3. Modern Elegance, 4. Jewellery Creations)
  const featured = [...projects]
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <Section
      variant="spotlight"
      id="our-work"
      className="pt-10 sm:pt-14 md:pt-24 lg:pt-28 pb-20 md:pb-28 border-t border-[#202B3B] scroll-mt-24"
      aria-label="Our Projects"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="OUR PROJECTS"
          title="Creations That Speak for Themselves"
          description="A glimpse of the cinematic advertisements and digital experiences we create for brands of every size."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {featured.map((project, i) => (
          <AnimateInView key={project.slug} delay={i * 0.1} className="h-full">
            <div className="group card-dark bg-[#111925] border border-[#202B3B] hover:border-[#26364F] rounded-sm overflow-hidden transition-all duration-300 h-full flex flex-col md:hover:-translate-y-1 md:hover:shadow-[0_12px_30px_rgba(38,54,79,0.25)]">
              {/* 16:9 Cover Thumbnail as Link (Opens Detail Page on Click) */}
              <ProjectCardCover project={project} priority={i < 2} />

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-gold/80 font-sans text-xs tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <Link href={`/our-work/${project.slug}`} className="min-h-[44px] inline-flex items-center">
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory mb-2 hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </Link>
                <p className="body-md text-muted/70 text-sm sm:text-[15px] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <Link
                  href={`/our-work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-gold text-xs font-sans tracking-wider uppercase font-semibold hover:gap-2.5 transition-all duration-300 mt-auto min-h-[44px]"
                >
                  View Project Breakdown
                  <Icon name="arrowRight" size={14} />
                </Link>
              </div>
            </div>
          </AnimateInView>
        ))}
      </div>

      <AnimateInView className="text-center mt-12 sm:mt-16">
        <Link href="/our-work" className="btn-outline min-h-[44px]">
          View All Projects
          <Icon name="arrowRight" size={14} />
        </Link>
      </AnimateInView>
      </div>
    </Section>
  );
}
