'use client';

import { useState, useRef, useEffect } from 'react';
import Icon from './Icons';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

function parseVideoUrl(url: string): { type: 'youtube' | 'vimeo' | 'html5'; embedUrl?: string } {
  if (!url) return { type: 'html5' };

  // YouTube match
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
    };
  }

  // Vimeo match
  const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/i);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
    };
  }

  return { type: 'html5' };
}

export default function VideoPlayer({
  src,
  poster = '/images/showreel-poster.webp',
  className = '',
  autoPlay = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [posterError, setPosterError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { type, embedUrl } = parseVideoUrl(src);

  useEffect(() => {
    if (type !== 'html5') return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [type]);

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (type === 'html5' && videoRef.current) {
      videoRef.current.play()?.catch(() => {});
    }
  };

  return (
    <div
      className={`relative w-full aspect-video rounded-sm overflow-hidden bg-[#15171A] border border-gold/40 shadow-2xl group ${className}`}
    >
      {/* Active Video Player */}
      {isPlaying ? (
        type === 'youtube' || type === 'vimeo' ? (
          <iframe
            src={embedUrl}
            title="Video Player"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )
      ) : (
        /* Poster & Click-To-Play Overlay (Dark charcoal frame with gold play button, no placeholder text) */
        <button
          type="button"
          onClick={handleStartPlay}
          className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center bg-[#15171A] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Play video"
        >
          {/* Poster Image (hidden until loaded; if missing or error, clean charcoal frame remains without broken icon) */}
          {poster && !posterError && (
            <img
              src={poster}
              alt=""
              onLoad={() => setPosterLoaded(true)}
              onError={() => setPosterError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                posterLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Dark Charcoal Ambient Vignette (No placeholder text) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/70 via-[#15171A]/20 to-[#090A0C]/50 pointer-events-none" />

          {/* Centered Gold Play Button (No text under it) */}
          <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold/90 text-obsidian flex items-center justify-center shadow-2xl shadow-black/80 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
            <Icon name="play" size={28} className="ml-1 text-obsidian" />
          </div>
        </button>
      )}
    </div>
  );
}
