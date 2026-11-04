'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'eeya_scroll_memory';

function getSavedPositions(): Record<string, number> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveScrollPosition(key: string, y: number) {
  if (!key) return;
  try {
    const positions = getSavedPositions();
    positions[key] = Math.round(y);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {}
}

function getStorageKey(): string {
  if (typeof window === 'undefined') return '';
  return window.location.pathname + window.location.search + window.location.hash;
}

export default function ScrollMemory() {
  const pathname = usePathname();
  const isPopStateRef = useRef(false);
  const prevPathnameRef = useRef(pathname);
  const restoreCleanupRef = useRef<(() => void) | null>(null);

  const saveCurrent = () => {
    if (typeof window === 'undefined') return;
    const key = getStorageKey();
    const y = window.scrollY;
    saveScrollPosition(key, y);
    // Also save under base path (without hash) for resilient lookup
    const baseKey = window.location.pathname + window.location.search;
    if (baseKey !== key) {
      saveScrollPosition(baseKey, y);
    }
  };

  const restorePosition = (targetY: number) => {
    // Cancel any previous restore attempt
    if (restoreCleanupRef.current) {
      restoreCleanupRef.current();
      restoreCleanupRef.current = null;
    }

    let userScrolled = false;
    let cancelled = false;

    const onUserScroll = () => {
      userScrolled = true;
    };

    window.addEventListener('wheel', onUserScroll, { passive: true, once: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true, once: true });

    restoreCleanupRef.current = () => {
      cancelled = true;
      window.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('touchmove', onUserScroll);
    };

    const startTime = Date.now();

    const attempt = () => {
      if (userScrolled || cancelled) {
        if (restoreCleanupRef.current) {
          restoreCleanupRef.current();
          restoreCleanupRef.current = null;
        }
        return;
      }

      window.scrollTo({ top: targetY, left: 0, behavior: 'instant' as ScrollBehavior });

      const docHeight = document.documentElement.scrollHeight;
      const neededHeight = targetY + window.innerHeight;

      // Stop once document is tall enough or 1.5s has elapsed
      if (docHeight >= neededHeight || Date.now() - startTime >= 1500) {
        if (restoreCleanupRef.current) {
          restoreCleanupRef.current();
          restoreCleanupRef.current = null;
        }
        return;
      }

      setTimeout(attempt, 100);
    };

    requestAnimationFrame(attempt);
  };

  const scrollToHash = (hash: string) => {
    if (!hash) return;
    const id = hash.replace(/^#/, '');
    const targetId =
      id === 'vision' || id === 'our-vision'
        ? document.getElementById('our-vision')
          ? 'our-vision'
          : 'vision'
        : id;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(targetId) || document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elTop - headerOffset),
          left: 0,
          behavior: 'instant' as ScrollBehavior,
        });
      } else if (attempts < 15) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    requestAnimationFrame(tryScroll);
  };

  // 1. Initial mount check (for back_forward reload or fresh visit)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Remove legacy reload guard
    try {
      sessionStorage.removeItem('eeya_last_reload_redirect');
    } catch {}

    // Allow native browser scroll restoration on normal F5 refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isBackForwardNav =
      navEntries.length > 0 && navEntries[0].type === 'back_forward';

    if (isBackForwardNav) {
      const positions = getSavedPositions();
      const key = getStorageKey();
      const baseKey = window.location.pathname + window.location.search;
      const saved = positions[key] ?? positions[baseKey];
      if (saved !== undefined) {
        restorePosition(saved);
      } else if (window.location.hash) {
        scrollToHash(window.location.hash);
      }
    }
  }, []);

  // 2. Global event listeners for saving and popstate detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // (a) Throttled scroll event (every ~150ms)
    let scrollThrottle: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollThrottle) return;
      scrollThrottle = setTimeout(() => {
        scrollThrottle = null;
        saveCurrent();
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // (b) Right before any internal link click that navigates away
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (anchor && anchor.href) {
        try {
          const targetUrl = new URL(anchor.href, window.location.origin);
          if (targetUrl.origin === window.location.origin) {
            saveCurrent();
          }
        } catch {}
      }
    };
    document.addEventListener('click', handleClick, { capture: true });

    // (c) On pagehide
    const handlePageHide = () => {
      saveCurrent();
    };
    window.addEventListener('pagehide', handlePageHide);

    // Popstate event (browser Back/Forward navigation)
    const handlePopState = () => {
      isPopStateRef.current = true;
      const key = getStorageKey();
      const baseKey = window.location.pathname + window.location.search;
      const positions = getSavedPositions();
      const saved = positions[key] ?? positions[baseKey];

      if (saved !== undefined) {
        restorePosition(saved);
      } else if (window.location.hash) {
        scrollToHash(window.location.hash);
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick, { capture: true });
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // 3. Handle route transitions
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      if (isPopStateRef.current) {
        // Arrived via Back/Forward
        isPopStateRef.current = false;
        const key = getStorageKey();
        const baseKey = window.location.pathname + window.location.search;
        const positions = getSavedPositions();
        const saved = positions[key] ?? positions[baseKey];

        if (saved !== undefined) {
          restorePosition(saved);
        } else if (window.location.hash) {
          scrollToHash(window.location.hash);
        }
      } else {
        // Arrived via clicking a normal link (new navigation)
        if (window.location.hash) {
          scrollToHash(window.location.hash);
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }
      }
    }
  }, [pathname]);

  return null;
}

