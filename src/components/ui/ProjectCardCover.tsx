'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/Icons';
import type { Project } from '@/data/content';

interface ProjectCardCoverProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCardCover({
  project,
  priority = false,
}: ProjectCardCoverProps) {
  const isKalam = project.slug === 'kalam-tribute';

  return (
    <Link
      href={`/our-work/${project.slug}`}
      aria-label={`Open ${project.title}`}
      className="group/cover relative aspect-video w-full overflow-hidden bg-[var(--bg-1)] border border-gold/30 rounded-sm flex-shrink-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-0)]"
    >
      {/* 1. Permanent Sharp Cover Image (Always visible, server-rendered, Next.js Image) */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        priority={priority}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-transform duration-500 group-hover/cover:scale-105 ${
          isKalam ? 'object-[25%_40%]' : 'object-center'
        }`}
        style={isKalam ? { objectPosition: '25% 40%' } : undefined}
      />

      {/* 2. Light dark gradient on bottom 25% */}
      <div
        className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(0deg, rgba(10, 9, 8, 0.75) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* 3. Top-Right Badge: at most ONE badge, never shown if coverHasText is true */}
      {!project.coverHasText && (project.badge || (project.isConcept && project.slug !== 'kalam-tribute')) && (
        <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] tracking-widest font-semibold uppercase bg-[var(--bg-0)]/80 border border-gold/40 text-gold rounded-sm z-[2] shadow-md pointer-events-none">
          {project.badge || 'CONCEPT'}
        </div>
      )}

      {/* 4. Centered Gold Play Button (Visual element inside the link, >=44px tap target) */}
      <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
        <div className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-lg shadow-black/60 transition-transform duration-300 group-hover/cover:scale-110">
          <Icon name="play" size={20} className="ml-0.5 text-obsidian" />
        </div>
      </div>
    </Link>
  );
}

