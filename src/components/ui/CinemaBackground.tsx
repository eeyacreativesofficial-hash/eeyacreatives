import React from 'react';

export type CinemaBackgroundVariant =
  | 'hero'
  | 'work'
  | 'services'
  | 'vision'
  | 'offers'
  | 'cta'
  | 'subpage';

interface CinemaBackgroundProps {
  variant?: CinemaBackgroundVariant;
  className?: string;
  asOverlay?: boolean;
}

const VARIANT_CLASS_MAP: Record<CinemaBackgroundVariant, string> = {
  hero: 'bg-cinema-hero',
  work: 'bg-cinema-work',
  services: 'bg-cinema-services',
  vision: 'bg-cinema-vision',
  offers: 'bg-cinema-offers',
  cta: 'bg-cinema-cta',
  subpage: 'bg-cinema-subpage',
};

/**
 * Reusable Cinematic Background Component
 * Provides Apple/Linear-inspired dark cinematic backgrounds with subtle
 * indigo/violet (#6d5dfc), electric blue (#3b82f6), and amber (#f59e0b) highlights.
 * Pure CSS gradients, zero layout shift, WCAG AA compliant contrast.
 */
export default function CinemaBackground({
  variant = 'subpage',
  className = '',
  asOverlay = true,
}: CinemaBackgroundProps) {
  const bgClass = VARIANT_CLASS_MAP[variant] || VARIANT_CLASS_MAP.subpage;

  if (asOverlay) {
    return (
      <div
        className={`absolute inset-0 pointer-events-none -z-10 ${bgClass} ${className}`}
        aria-hidden="true"
      />
    );
  }

  return <div className={`${bgClass} ${className}`} />;
}

