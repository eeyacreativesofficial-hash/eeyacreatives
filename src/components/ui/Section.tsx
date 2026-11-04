'use client';

import React from 'react';

export type SectionVariant =
  | 'aurora'
  | 'spotlight'
  | 'halo'
  | 'blueprint'
  | 'champagne'
  | 'bloom'
  | 'midnight'
  | 'base';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant: SectionVariant;
  dots?: boolean;
  hasBeams?: boolean;
  bloomLow?: boolean;
  as?: 'section' | 'div' | 'footer' | 'header' | 'article';
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

/**
 * Shared Section component implementing the EEYA CREATIVES Background System.
 * Ensures consistent recipe classes, grain overlays (::after), and guarantees
 * content sits above the visual background on z-index 1.
 */
export default function Section({
  variant,
  dots = false,
  hasBeams = false,
  bloomLow = false,
  as: Component = 'section',
  children,
  className = '',
  innerClassName = '',
  ...props
}: SectionProps) {
  const variantClass = variant === 'base' ? 'bg-base' : `s-${variant}`;
  const dotsClass = dots ? 's-dots' : '';
  const beamsClass = hasBeams ? 'has-beams' : '';
  const bloomLowClass = bloomLow ? 's-bloom-low' : '';

  return (
    <Component
      className={`relative overflow-hidden ${variantClass} ${dotsClass} ${beamsClass} ${bloomLowClass} ${className}`}
      {...props}
    >
      <div className={`relative z-[1] w-full ${innerClassName}`}>
        {children}
      </div>
    </Component>
  );
}

