'use client';

import Icon from '@/components/ui/Icons';
import { socials, socialPlaceholderStyle, SocialItem } from '@/data/content';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

export default function SocialIcons({
  className = '',
  iconSize = 18,
}: SocialIconsProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 sm:gap-5 ${className}`}
      aria-label="Social media channels"
    >
      {socials.map((item: SocialItem) => {
        // Automatically enable any icon when its url is filled in with a non-empty string
        const hasUrl = Boolean(item.url && item.url.trim().length > 0 && item.url !== '#');
        const isEnabled = hasUrl && item.enabled !== false;

        // With socialPlaceholderStyle "hidden", do not render disabled icons at all
        if (!isEnabled && socialPlaceholderStyle === 'hidden') {
          return null;
        }

        // Enabled icon: render as a real link with 40px circle
        if (isEnabled) {
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`EEYA CREATIVES on ${item.label} (opens in a new tab)`}
              className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-white/10 flex items-center justify-center text-muted/70 hover:text-gold hover:border-gold/40 hover:shadow-[0_0_16px_rgba(216,177,90,0.35)] focus:outline-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 transition-all duration-300"
            >
              <Icon name={item.icon} size={iconSize} />
            </a>
          );
        }

        // Disabled icon with "inert": non-interactive span, quiet 60% opacity, no hover, no focus
        return (
          <span
            key={item.id}
            aria-disabled="true"
            aria-hidden="true"
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-white/5 flex items-center justify-center text-muted/50 opacity-60 cursor-default select-none pointer-events-none transition-none"
          >
            <Icon name={item.icon} size={iconSize} />
          </span>
        );
      })}
    </div>
  );
}

