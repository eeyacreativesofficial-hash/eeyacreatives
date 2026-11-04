'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contact } from '@/data/content';
import Icon from './Icons';

export default function WhatsAppFloat() {
  const [mounted, setMounted] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [primaryCtaInView, setPrimaryCtaInView] = useState(false);
  const [isFieldFocused, setIsFieldFocused] = useState(false);

  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 1. Scroll detection: fade to 35% opacity and scale to 0.9, returning 700ms after scrolling stops
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  // 2. Hide when any primary WhatsApp button with [data-wa-cta] is > 50% visible
  useEffect(() => {
    const targets = document.querySelectorAll('[data-wa-cta]');
    if (!targets || targets.length === 0) return;

    const visibleMap = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap.set(entry.target, entry.isIntersecting && entry.intersectionRatio >= 0.5);
        });
        const anyVisible = Array.from(visibleMap.values()).some(Boolean);
        setPrimaryCtaInView(anyVisible);
      },
      {
        threshold: [0, 0.5, 1.0],
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  // 3. Hide while any form field is focused
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        setIsFieldFocused(true);
      }
    };

    const handleFocusOut = () => {
      setIsFieldFocused(false);
    };

    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);
    return () => {
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  // 4. Hide while video is playing so it never covers the player or toolbar
  useEffect(() => {
    const handleVideoState = (e: Event) => {
      const customEvent = e as CustomEvent<{ playing: boolean }>;
      setIsVideoPlaying(Boolean(customEvent.detail?.playing));
    };

    window.addEventListener('eeya-video-state', handleVideoState);
    return () => window.removeEventListener('eeya-video-state', handleVideoState);
  }, []);

  // 5. Hide while the footer is in view
  useEffect(() => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  const isVisible = mounted && !footerInView && !isVideoPlaying && !primaryCtaInView && !isFieldFocused;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={contact.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isScrolling ? 0.9 : 1,
            opacity: isScrolling ? 0.35 : 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: isScrolling ? 0.9 : 1.08, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
          }}
          className="fixed right-4 z-40 w-[52px] h-[52px] min-w-[52px] min-h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0C]"
        >
          <Icon name="whatsapp" size={26} className="text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
