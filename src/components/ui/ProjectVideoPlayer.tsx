'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icons';
import type { Project } from '@/data/content';

interface ProjectVideoPlayerProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectVideoPlayer({
  project,
  priority = true,
}: ProjectVideoPlayerProps) {
  const isPortrait = project.orientation === 'portrait';
  const isKalam = project.slug === 'kalam-tribute';
  const [isPlaying, setIsPlaying] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Smoothly scroll the stage into view (offset for sticky header)
  const scrollToStage = useCallback(() => {
    if (stageRef.current) {
      const headerOffset = 96; // sticky header height + clearance
      const elementPosition = stageRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('eeya-video-state', { detail: { playing: true } })
      );
    }
    // Smoothly scroll into view on play
    setTimeout(() => {
      scrollToStage();
    }, 60);
  }, [scrollToStage]);

  const handleClose = useCallback(() => {
    setIsPlaying(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('eeya-video-state', { detail: { playing: false } })
      );
    }
  }, []);

  // Listen for external "Watch the Film" button trigger from title row
  useEffect(() => {
    const handleTrigger = () => {
      if (isPlaying) {
        scrollToStage();
      } else {
        handlePlay();
      }
    };

    const eventName = `eeya-play-${project.slug}`;
    window.addEventListener(eventName, handleTrigger);
    return () => window.removeEventListener(eventName, handleTrigger);
  }, [project.slug, isPlaying, handlePlay, scrollToStage]);

  // Close on Escape key when playing
  useEffect(() => {
    if (!isPlaying) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, handleClose]);

  // Clean up global video state on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('eeya-video-state', { detail: { playing: false } })
        );
      }
    };
  }, []);

  const youtubeEmbedUrl = project.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&playsinline=1&iv_load_policy=3&color=white&modestbranding=1`
    : null;

  return (
    <div
      ref={stageRef}
      id={`player-${project.slug}`}
      className={`mx-auto flex flex-col items-stretch transition-all duration-[400ms] ease-in-out motion-reduce:transition-none ${
        isPlaying && isPortrait
          ? 'w-[min(calc(80svh*9/16),92vw)] lg:w-[min(calc(84svh*9/16),506px,92vw)]'
          : 'w-full max-w-[1200px]'
      }`}
    >
      {/* ============================================================== */}
      {/* SLIM TOOLBAR DIRECTLY ABOVE VIDEO (Appears only while playing) */}
      {/* Never overlays the video, exactly as wide as the video         */}
      {/* ============================================================== */}
      {isPlaying && (
        <div className="w-full flex items-center justify-between gap-3 mb-2.5 min-h-[44px]">
          <span className="text-muted/75 font-sans text-xs sm:text-sm tracking-wide">
            Now playing: <strong className="text-ivory font-medium">{project.title}</strong>
          </span>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close video and restore cover stage"
            className="min-h-[44px] h-[44px] px-4 rounded-sm bg-[var(--bg-0)] border border-gold/40 text-gold hover:bg-gold hover:text-obsidian flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold text-xs font-sans tracking-wider uppercase font-semibold shrink-0"
          >
            <Icon name="x" size={16} />
            <span>Close</span>
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* VIDEO STAGE / COVER STAGE                                      */}
      {/* ============================================================== */}
      {!isPlaying ? (
        /* BEFORE PLAY: ALL FOUR PROJECTS SHOW THE EXACT SAME 16:9 STAGE */
        /* Hugs the landscape cover exactly: no tall frame, no empty space */
        <div className="relative w-full aspect-video overflow-hidden border border-gold/40 rounded-sm shadow-[0_0_35px_rgba(212,168,83,0.15)] bg-[var(--bg-0)] flex items-center justify-center">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={priority}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className={`object-cover ${
              isKalam ? 'object-[25%_40%]' : 'object-center'
            }`}
            style={isKalam ? { objectPosition: '25% 40%' } : undefined}
          />

          {/* Subtle bottom gradient on cover */}
          <div
            className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none z-[1]"
            style={{
              background:
                'linear-gradient(0deg, rgba(10, 9, 8, 0.75) 0%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/* Top-Right Badge: TRIBUTE or CONCEPT */}
          {(project.badge || project.isConcept) && (
            <div className="absolute top-3.5 right-3.5 px-2.5 py-1 text-[10px] tracking-widest font-semibold uppercase bg-[var(--bg-0)]/85 border border-gold/40 text-gold rounded-sm z-[2] shadow-md pointer-events-none">
              {project.badge || 'CONCEPT'}
            </div>
          )}

          {/* Centered Gold Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-[2]">
            <button
              type="button"
              aria-label={`Play video: ${project.title}`}
              onClick={handlePlay}
              className="min-w-[56px] min-h-[56px] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-2xl shadow-black/80 transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-0)] cursor-pointer"
            >
              <Icon name="play" size={24} className="ml-0.5 text-obsidian" />
            </button>
          </div>
        </div>
      ) : isPortrait ? (
        /* PORTRAIT ON PLAY: Cover removed completely, ONLY the 9:16 video on var(--bg-0) */
        /* Height min(84svh, 900px) on desktop, up to 80svh on mobile, width from 9/16, max-w 92vw */
        <div className="relative w-full aspect-[9/16] h-[80svh] lg:h-[min(84svh,900px)] max-h-[900px] overflow-hidden border border-gold/40 rounded-sm shadow-[0_0_35px_rgba(212,168,83,0.18)] bg-[var(--bg-0)]">
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={project.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full border-0 block"
            />
          ) : (
            <video
              src={project.videoUrl}
              playsInline
              controls
              autoPlay
              preload="auto"
              onEnded={handleClose}
              className="w-full h-full object-contain block bg-[var(--bg-0)]"
            />
          )}
        </div>
      ) : (
        /* LANDSCAPE ON PLAY: Iframe replaces cover in the same 16:9 stage */
        <div className="relative w-full aspect-video overflow-hidden border border-gold/40 rounded-sm shadow-[0_0_35px_rgba(212,168,83,0.15)] bg-[var(--bg-0)]">
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={project.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full border-0 block"
            />
          ) : (
            <video
              src={project.videoUrl}
              playsInline
              controls
              autoPlay
              preload="auto"
              onEnded={handleClose}
              className="w-full h-full object-cover block bg-[var(--bg-0)]"
            />
          )}
        </div>
      )}
    </div>
  );
}
