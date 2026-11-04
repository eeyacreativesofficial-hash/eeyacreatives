'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateInView from '@/components/ui/AnimateInView';
import ProjectVideoPlayer from '@/components/ui/ProjectVideoPlayer';
import ProjectCardCover from '@/components/ui/ProjectCardCover';
import Icon from '@/components/ui/Icons';
import SectionDivider from '@/components/ui/SectionDivider';
import Section from '@/components/ui/Section';
import {
  projects,
  projectDetailFramework,
  buildWhatsAppLink,
  whatsappMessages,
  type Project,
} from '@/data/content';

interface Props {
  project: Project;
}

// Exactly the other three openable video projects, excluding current, in Our Work order
function getOtherThreeProjects(currentSlug: string, allProjects: Project[]): Project[] {
  return [...allProjects]
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);
}

export default function ProjectDetail({ project }: Props) {
  const isPortrait = project.orientation === 'portrait';

  const steps = [
    {
      num: '01',
      label: projectDetailFramework.stepLabels.input,
      title: 'Input',
      icon: 'fileText',
      bullets: project.input,
      isInput: true,
    },
    {
      num: '02',
      label: projectDetailFramework.stepLabels.process,
      title: 'Process',
      icon: 'clapperboard',
      bullets: project.process,
      isInput: false,
    },
    {
      num: '03',
      label: projectDetailFramework.stepLabels.output,
      title: 'Output',
      icon: 'play',
      bullets: project.output,
      isInput: false,
    },
  ];

  const whatsappUrl = buildWhatsAppLink(
    whatsappMessages.project(project.title)
  );

  const remainingProjects = useMemo(() => {
    return getOtherThreeProjects(project.slug, projects);
  }, [project.slug]);

  const handleWatchFilm = () => {
    window.dispatchEvent(new CustomEvent(`eeya-play-${project.slug}`));
  };

  const formatText = 'Cinematic Film';
  const typeText = project.category.replace(/\(Concept\)/gi, '').trim();

  return (
    <>
      {/* ============================================================== */}
      {/* 1. PROJECT SHOWCASE (Spotlight behind player stage)            */}
      {/* ============================================================== */}
      <Section
        variant="spotlight"
        className="pt-24 pb-14 md:pt-28 md:pb-20 section-padding border-b border-[#202B3B]"
        aria-label="Project showcase"
      >
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Header Block on clean colour recipe */}
          <div className="relative">
            {/* 1. Back Link */}
            <AnimateInView>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-muted hover:text-gold text-xs font-sans tracking-widest uppercase transition-colors mb-5 min-h-[44px]"
              >
                <Icon name="arrowRight" size={13} className="rotate-180" />
                Back to Our Work
              </Link>
            </AnimateInView>

            {/* 2. Badges Row: Category text + at most ONE badge (CONCEPT for concept projects; no badge for tribute) */}
            <AnimateInView delay={0.05}>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-gold font-sans text-xs tracking-widest uppercase font-semibold">
                  {project.category}
                </span>
                {project.isConcept && project.slug !== 'kalam-tribute' && (
                  <span className="px-2.5 py-0.5 text-[10px] tracking-widest font-semibold uppercase bg-gold/10 border border-gold/30 text-gold rounded-sm">
                    CONCEPT
                  </span>
                )}
              </div>
            </AnimateInView>

            {/* 3. Title Row (Title on left, "Watch the Film" button on right on desktop; stacked on mobile) */}
            <AnimateInView delay={0.1} className="mb-2">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h1 className="font-serif text-[clamp(2rem,3.2vw,3.1rem)] leading-[1.1] text-ivory max-w-2xl">
                  {project.title}
                </h1>

                <div className="shrink-0">
                  <button
                    type="button"
                    onClick={handleWatchFilm}
                    className="btn-primary w-full sm:w-auto min-h-[44px] h-[44px] px-8 justify-center text-xs tracking-widest uppercase font-semibold cursor-pointer shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Icon name="play" size={16} className="text-obsidian" />
                    Watch the Film
                  </button>
                </div>
              </div>
            </AnimateInView>

            {/* 4. Tagline */}
            <AnimateInView delay={0.15}>
              <p className="text-muted/80 text-sm sm:text-base leading-relaxed mb-7 max-w-3xl">
                {project.description}
              </p>
            </AnimateInView>
          </div>

          {/* 5. The PLAYER STAGE (Vertical 9:16 box for portrait; 16:9 box for landscape) */}
          <AnimateInView delay={0.2} className="mb-2 w-full flex justify-center">
            <ProjectVideoPlayer project={project} priority={true} />
          </AnimateInView>

          {/* 6. 1080p Tip Directly Under Stage */}
          <AnimateInView delay={0.25}>
            <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-[13.5px] text-muted/70 mt-3.5 mb-7 sm:mb-9 font-sans">
              <Icon name="settings" size={15} className="text-gold/80 shrink-0" />
              <span>{projectDetailFramework.qualityTip}</span>
            </div>
          </AnimateInView>

          {/* 7. Quick Facts: under 600px vertical list of 3 rows; >=600px 3-column row */}
          <AnimateInView delay={0.3}>
            {/* Mobile layout (<600px): vertical list with hairline between rows */}
            <div className="flex min-[600px]:hidden flex-col divide-y divide-gold/20 border-y border-gold/20 bg-[var(--bg-1)] rounded-sm mb-14">
              <div className="flex items-center justify-between py-2.5 px-4 min-h-[44px]">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-gold">
                  Format
                </span>
                <span className="font-sans text-[15px] text-ivory font-medium">
                  {formatText}
                </span>
              </div>
              <div className="flex items-center justify-between py-2.5 px-4 min-h-[44px]">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-gold">
                  Type
                </span>
                <span className="font-sans text-[15px] text-ivory font-medium">
                  {typeText}
                </span>
              </div>
              <div className="flex items-center justify-between py-2.5 px-4 min-h-[44px]">
                <span className="text-[11px] font-sans font-semibold tracking-[0.16em] uppercase text-gold">
                  Created By
                </span>
                <span className="font-sans text-[15px] text-ivory font-medium">
                  EEYA CREATIVES
                </span>
              </div>
            </div>

            {/* Desktop / Tablet layout (>=600px): 3 columns */}
            <div className="hidden min-[600px]:grid grid-cols-3 divide-x divide-gold/20 border-y border-gold/20 py-3.5 mb-14 md:mb-20 bg-[var(--bg-1)] rounded-sm">
              <div className="px-4 text-left">
                <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-gold/75 mb-0.5">
                  Format
                </span>
                <span className="font-sans text-sm text-ivory font-medium">
                  {formatText}
                </span>
              </div>
              <div className="px-4 text-left">
                <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-gold/75 mb-0.5">
                  Type
                </span>
                <span className="font-sans text-sm text-ivory font-medium block">
                  {typeText}
                </span>
              </div>
              <div className="px-4 text-left">
                <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-gold/75 mb-0.5">
                  Created By
                </span>
                <span className="font-sans text-sm text-ivory font-medium">
                  EEYA CREATIVES
                </span>
              </div>
            </div>
          </AnimateInView>
        </div>
      </Section>

      {/* ============================================================== */}
      {/* 2. THE THREE-STEP JOURNEY (Blueprint)                          */}
      {/* ============================================================== */}
      <Section
        variant="blueprint"
        className="section-padding py-20 md:py-28 border-b border-[#293755]"
        aria-label="How This Film Came to Life"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Section Header */}
          <AnimateInView className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="text-gold font-sans text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-3">
              {projectDetailFramework.eyebrow}
            </p>
            <h2 className="heading-lg text-ivory mb-3">
              {projectDetailFramework.heading}
            </h2>
            <p className="body-md text-muted/75 leading-relaxed">
              {projectDetailFramework.subtext}
            </p>
          </AnimateInView>

          {/* Three-Step Flow Layout */}
          <div className="relative w-full">
            {/* Desktop continuous gold connector line running between card icons */}
            <div
              className="hidden lg:block absolute top-9 left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30 z-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* Mobile & Tablet (<1024px): vertical timeline line down left side */}
            <div
              className="lg:hidden absolute top-8 bottom-8 left-[23px] w-[2px] bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10 pointer-events-none z-0"
              aria-hidden="true"
            />

            {/* Cards Grid: 3 equal columns on desktop (>=1024px), single column stacked on tablet (<1024px) & mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
              {steps.map((step, i) => (
                <AnimateInView key={step.title} delay={i * 0.1} className="h-full">
                  <div className="relative pl-14 lg:pl-0 flex flex-col items-stretch h-full">
                    {/* Circle Indicator on Mobile & Tablet (<1024px, absolute on timeline) */}
                    <div className="lg:hidden absolute left-0 top-0 z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border border-gold/40 bg-[var(--bg-0)] flex items-center justify-center text-gold shadow-md shadow-black/80">
                        <Icon name={step.icon} size={18} />
                      </div>
                    </div>

                    {/* Desktop Connector Chevron: Exactly Centered in the 32px gap between cards */}
                    {i < 2 && (
                      <div
                        className="hidden lg:flex absolute top-9 w-6 h-6 rounded-full bg-[var(--bg-0)] border border-gold/40 items-center justify-center text-gold/80 z-20 shadow-sm shadow-black/80 pointer-events-none"
                        style={{
                          left: 'calc(100% + 16px)',
                          transform: 'translate(-50%, -50%)',
                        }}
                        aria-hidden="true"
                      >
                        <Icon name="chevronRight" size={12} />
                      </div>
                    )}

                    {/* Step Card */}
                    <div
                      className={`card-dark group rounded-sm p-6 sm:p-7 flex flex-col h-full w-full ${
                        step.isInput
                          ? '!border-2 !border-gold/60 shadow-[0_0_25px_rgba(212,168,83,0.12)]'
                          : ''
                      }`}
                    >
                      {/* Top Row: Numeral & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-3xl sm:text-4xl text-gold font-medium leading-none">
                            {step.num}
                          </span>
                          {/* Visual focus pill on Input card */}
                          {step.isInput && (
                            <span className="px-2 py-0.5 text-[9px] tracking-[0.2em] font-semibold uppercase bg-gold text-[var(--bg-0)] rounded-sm font-sans shadow-sm">
                              START HERE
                            </span>
                          )}
                        </div>

                        {/* Gold line icon in thin circle at top right */}
                        <div className="w-10 h-10 rounded-full border border-gold/35 bg-[var(--bg-0)] flex items-center justify-center text-gold shadow-sm">
                          <Icon name={step.icon} size={18} />
                        </div>
                      </div>

                      {/* Label & Title */}
                      <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-gold/90 font-semibold mb-1">
                        {step.label}
                      </span>
                      <h3 className="font-serif text-2xl text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Short gold divider */}
                      <div
                        className="w-8 h-[1px] bg-gold/40 mb-5 transition-all duration-300 group-hover:w-14 group-hover:bg-gold"
                        aria-hidden="true"
                      />

                      {/* List of 4 items: Input card at #E8E4DA (focus), Process & Output at #CFCBC1, at least 15px */}
                      <ul
                        className="space-y-3.5 flex-1"
                        aria-label={`${step.title} key points`}
                      >
                        {step.bullets.map((bullet, idx) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 leading-relaxed"
                          >
                            {/* Marker per step type: check for input, numbered dot for process, sparkles for output */}
                            {i === 0 && (
                              <Icon
                                name="check"
                                size={14}
                                className="text-gold shrink-0 mt-1"
                              />
                            )}
                            {i === 1 && (
                              <span className="w-4 h-4 rounded-full border border-gold/40 bg-gold/15 text-gold text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-semibold">
                                {idx + 1}
                              </span>
                            )}
                            {i === 2 && (
                              <Icon
                                name="sparkles"
                                size={14}
                                className="text-gold shrink-0 mt-0.5"
                              />
                            )}
                            <span
                              className={`text-[15px] sm:text-[15px] leading-snug ${
                                step.isInput ? 'font-medium' : 'font-normal'
                              }`}
                              style={{
                                color: step.isInput ? '#E8E4DA' : '#CFCBC1',
                              }}
                            >
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Centered Section Divider */}
      <SectionDivider />

      {/* ============================================================== */}
      {/* 3. CLOSING CALL TO ACTION BAND (Bloom)                         */}
      {/* ============================================================== */}
      <Section
        variant="bloom"
        className="section-padding py-16 md:py-24 border-b border-[rgba(216,177,90,0.16)] text-center"
        aria-label="Project consultation"
      >
        <div className="max-w-[1200px] mx-auto relative z-10 px-4">
          <AnimateInView>
            <div
              className="w-[50px] h-[1px] bg-gold/70 mx-auto mb-5"
              aria-hidden="true"
            />

            <h2 className="heading-md sm:heading-lg text-ivory mb-3">
              {projectDetailFramework.ctaHeading}
            </h2>
            <p className="body-md text-muted/80 mb-8 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
              {projectDetailFramework.ctaText}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[420px] sm:max-w-none mx-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-cta="true"
                className="btn-primary w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
              >
                <Icon name="whatsapp" size={17} />
                Start Your Project
              </a>
              <Link
                href="/our-work"
                className="btn-outline w-full sm:w-auto min-h-[52px] h-[52px] px-8 justify-center text-xs tracking-widest uppercase font-semibold"
              >
                View More Work
              </Link>
            </div>

            {project.conceptNote ? (
              <p className="text-[11px] text-muted/60 mt-6 tracking-wider uppercase font-sans">
                {project.conceptNote}
              </p>
            ) : project.isConcept ? (
              <p className="text-[11px] text-muted/60 mt-6 tracking-wider uppercase font-sans">
                {projectDetailFramework.ctaConceptNote}
              </p>
            ) : null}
          </AnimateInView>
        </div>
      </Section>

      {/* Centered Section Divider */}
      <SectionDivider />

      {/* ============================================================== */}
      {/* 4. COMPACT "MORE TO WATCH" SECTION (Spotlight)                 */}
      {/* ============================================================== */}
      <Section
        variant="spotlight"
        className="section-padding pt-14 pb-24 md:pt-20 md:pb-28 border-t border-[#293755]"
        aria-label="More to Watch"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-gold font-sans text-xs tracking-widest uppercase font-semibold mb-2">
              {projectDetailFramework.moreToWatchEyebrow}
            </p>
            <h2 className="heading-md sm:heading-lg text-ivory">
              {projectDetailFramework.moreToWatchHeading}
            </h2>
          </div>

          {/* Desktop: 3 Columns. Mobile: Horizontal Swipe Row (~78vw wide per card, snap scrolling, next card partly visible) */}
          <div className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 px-1 -mx-4 sm:-mx-6 lg:mx-0 lg:px-0 scrollbar-none">
            {remainingProjects.map((item, i) => (
              <div
                key={item.slug}
                className="w-[78vw] sm:w-[320px] shrink-0 snap-start lg:w-auto h-full flex flex-col"
              >
                <AnimateInView delay={i * 0.08} className="h-full">
                  <div className="group card-dark bg-[#18233B] border border-[#293755] hover:border-gold/40 rounded-sm overflow-hidden transition-all duration-300 h-full flex flex-col md:hover:-translate-y-1 md:hover:shadow-[0_10px_24px_rgba(138,116,230,0.15)]">
                    {/* Compact 16:9 Cover Thumbnail as Link */}
                    <ProjectCardCover project={item} />

                    {/* Compact Content: Category, Title, View Breakdown link */}
                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <p className="text-gold/80 font-sans text-[11px] tracking-wider uppercase mb-1.5">
                        {item.category}
                      </p>
                      <Link href={`/our-work/${item.slug}`} className="min-h-[44px] inline-flex items-center">
                        <h3 className="font-serif text-lg sm:text-xl text-ivory mb-2 hover:text-gold transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>
                      <Link
                        href={`/our-work/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-gold text-xs font-sans tracking-wider uppercase font-semibold hover:gap-2.5 transition-all duration-300 mt-auto pt-3 min-h-[44px]"
                      >
                        View Project Breakdown
                        <Icon name="arrowRight" size={13} />
                      </Link>
                    </div>
                  </div>
                </AnimateInView>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
