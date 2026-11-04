'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateInView from '@/components/ui/AnimateInView';
import Icon from '@/components/ui/Icons';
import ProjectCardCover from '@/components/ui/ProjectCardCover';
import PageHeroBanner from '@/components/ui/PageHeroBanner';
import CTASection from '@/components/sections/CTASection';
import SectionDivider from '@/components/ui/SectionDivider';
import Section from '@/components/ui/Section';
import {
  projects,
  previewProjects,
  ourWorkTabs,
} from '@/data/content';

export default function OurWorkContent() {
  const [activeTab, setActiveTab] = useState('all');

  // Sync tab with URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['all', 'video-ads', 'websites'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const showVideoSection = activeTab === 'all' || activeTab === 'video-ads';

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => a.order - b.order);
  }, []);

  // Section 2: More Creations (View-Only Design Previews, sorted 5 to 10)
  const visiblePreviewProjects = useMemo(() => {
    const list =
      activeTab === 'all'
        ? previewProjects
        : previewProjects.filter((p) => p.categorySlug === activeTab);
    return [...list].sort((a, b) => a.order - b.order);
  }, [activeTab]);

  return (
    <>
      {/* Page Hero Banner */}
      <PageHeroBanner
        slug="work"
        eyebrow="Portfolio"
        title="Our Creations"
        description="Cinematic advertisements and website designs created for brands of every size."
      >
        {/* Filter Bar (All, Video Ads, Websites) - Left-aligned under heading */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 w-full mt-8">
          {ourWorkTabs.map((tab) => {
            const isActive = activeTab === tab.slug;
            return (
              <button
                key={tab.slug}
                type="button"
                onClick={() => setActiveTab(tab.slug)}
                className={`px-6 py-2.5 rounded-sm text-xs tracking-wider uppercase font-medium transition-all duration-300 min-h-[44px] ${
                  isActive
                    ? 'bg-gold text-obsidian shadow-sm shadow-gold/20 font-semibold'
                    : 'bg-[#111925] text-muted/80 border border-[#202B3B] hover:border-[#26364F] hover:text-ivory'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </PageHeroBanner>

      {/* Section 1: Video Advertisements (Spotlight) */}
      {showVideoSection && (
        <Section
          variant="spotlight"
          className="pt-16 pb-20 md:py-24 border-t border-[#202B3B]"
          aria-label="Video Advertisements"
        >
          <div className="site-container" aria-labelledby="video-ads-heading">
            <div className="mb-10 md:mb-12">
              <h2
                id="video-ads-heading"
                className="font-serif text-2xl sm:text-3xl text-ivory mb-2"
              >
                Video Advertisements &amp; Brand Films
              </h2>
              <p className="body-md text-muted/80">
                Select any project to explore the production framework and full showcase.
              </p>
            </div>

              {/* 2-Column Desktop Grid / 1-Column Mobile Grid for Real Openable Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {sortedProjects.map((project, i) => (
                  <AnimateInView key={project.slug} delay={i * 0.1} className="h-full">
                    <div className="group card-dark bg-[#111925] border border-[#202B3B] hover:border-[#26364F] rounded-sm overflow-hidden transition-all duration-300 h-full flex flex-col md:hover:-translate-y-1 md:hover:shadow-[0_12px_30px_rgba(38,54,79,0.25)]">
                      {/* 16:9 Cover as Link (Opens Detail Page) */}
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
                        <p className="body-md text-muted/70 text-sm leading-relaxed mb-6 flex-1">
                          {project.description}
                        </p>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                          <Link
                            href={`/our-work/${project.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase text-gold hover:text-gold-light transition-colors min-h-[44px]"
                          >
                            View Project Breakdown
                            <Icon name="arrowRight" size={13} />
                          </Link>
                          {project.badge && (
                            <span className="text-[10px] font-sans tracking-wider uppercase text-muted/50 border border-white/10 px-2 py-0.5 rounded-sm">
                              {project.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </Section>
        )}

      {showVideoSection && visiblePreviewProjects.length > 0 && <SectionDivider />}

      {/* Section 2: More Creations / View-Only Design Previews (Blueprint + Dots) */}
      {visiblePreviewProjects.length > 0 && (
        <Section
          variant="blueprint"
          dots
          className="pt-16 pb-24 md:py-24 border-t border-[#202B3B]"
          aria-label="Design Previews"
        >
          <div className="site-container" aria-labelledby="previews-heading">
            <div className="mb-10 md:mb-12">
              <h2
                id="previews-heading"
                className="font-serif text-2xl sm:text-3xl text-ivory mb-2"
              >
                Design Previews &amp; Concept Works
              </h2>
              <p className="body-md text-muted/80">
                Concept productions and website prototypes crafted for diverse business verticals.
              </p>
            </div>

            {/* 3-Column Desktop Grid / 2-Column Tablet Grid / 1-Column Mobile Grid for Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {visiblePreviewProjects.map((preview, i) => (
                <AnimateInView key={preview.slug} delay={i * 0.08} className="h-full">
                  <div className="group card-dark bg-[#111925] border border-[#202B3B] rounded-sm overflow-hidden h-full flex flex-col relative transition-all duration-300">
                    {/* 16:9 Static Cover Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#0A0E17] flex-shrink-0">
                      <Image
                        src={preview.thumbnail}
                        alt={preview.title}
                        fill
                        quality={85}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />

                      {/* Very light dark gradient ONLY on bottom 25% */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(0deg, rgba(8, 11, 18, 0.75) 0%, transparent 100%)',
                        }}
                        aria-hidden="true"
                      />

                      {/* Subtle top-right Pill & Lock Icon on dark translucent pill */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-widest font-semibold uppercase bg-[var(--bg-0)]/80 border border-gold/40 text-gold rounded-sm z-10">
                        <Icon name="lock" size={11} className="text-gold/80" />
                        <span>Design Preview</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gold/80 font-sans text-xs tracking-wider uppercase mb-2">
                        {preview.category}
                      </p>
                      <h3 className="font-serif text-xl text-ivory mb-2">
                        {preview.title}
                      </h3>
                      <p className="body-md text-muted/70 text-sm leading-relaxed flex-1">
                        {preview.description}
                      </p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
