'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import Icon from '@/components/ui/Icons';
import { navLinks, contact } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Active nav state: either from pathname (on subpages) or scroll-spy (on homepage)
  const getSubpageActive = useCallback((): string => {
    if (pathname.startsWith('/our-work')) return '/our-work';
    if (pathname.startsWith('/services')) return '/services';
    if (pathname.startsWith('/our-vision')) return '/our-vision';
    if (pathname.startsWith('/offers')) return '/offers';
    if (pathname.startsWith('/contact')) return '/contact';
    return '/';
  }, [pathname]);

  const [activeNav, setActiveNav] = useState<string>(getSubpageActive());

  // Update immediately whenever pathname changes or popstate fires
  useEffect(() => {
    setActiveNav(getSubpageActive());
    setMobileMenuOpen(false);
  }, [pathname, getSubpageActive]);

  useEffect(() => {
    const handlePopState = () => {
      setActiveNav(getSubpageActive());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getSubpageActive]);

  // Scroll detection for header background and brand sizing (over 48px)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Homepage IntersectionObserver scroll-spy
  useEffect(() => {
    if (pathname !== '/') return;

    const handleTopCheck = () => {
      if (window.scrollY < 160) {
        setActiveNav('/');
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    };
    window.addEventListener('scroll', handleTopCheck, { passive: true });

    const sectionMap: { id: string; href: string }[] = [
      { id: 'hero', href: '/' },
      { id: 'our-work', href: '/our-work' },
      { id: 'services', href: '/services' },
      { id: 'our-vision', href: '/our-vision' },
      { id: 'offers', href: '/offers' },
      { id: 'contact', href: '/contact' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && window.scrollY >= 160) {
          const match = sectionMap.find((s) => s.id === visible[0].target.id);
          if (match) {
            setActiveNav(match.href);
            if (match.id !== 'hero') {
              const newHash = '#' + match.id;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, '', newHash);
              }
            } else if (window.location.hash) {
              window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
          }
        } else if (window.scrollY < 160) {
          setActiveNav('/');
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
      },
      {
        root: null,
        rootMargin: '-15% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionMap.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleTopCheck);
      observer.disconnect();
    };
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#080B12]/90 backdrop-blur-[14px] border-b border-[#202B3B] ${
          scrolled ? 'h-[64px]' : 'h-[76px]'
        }`}
      >
        {/* Soft dark gradient behind header for seamless integration */}
        <div
          className="absolute top-0 inset-x-0 h-[100px] pointer-events-none -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(8, 11, 18, 0.60) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        <div className="header-container h-full">
          {/* Desktop 3-Column Grid Layout (>= 1200px) */}
          <div
            className="hidden min-[1200px]:grid w-full h-full items-center"
            style={{
              gridTemplateColumns: 'minmax(max-content, 1fr) auto minmax(max-content, 1fr)',
              columnGap: '32px',
            }}
          >
            {/* Left Column: Brand Lockup (aligns to wrapper left padding) */}
            <div className="flex items-center justify-start shrink-0 justify-self-start">
              <Logo variant="header" scrolled={scrolled} />
            </div>

            {/* Centre Column: Nav flex row (centered in header container) */}
            <nav
              className="flex items-center justify-center justify-self-center"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeNav === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-2.5 px-[clamp(8px,0.9vw,14px)] min-[1360px]:px-[clamp(10px,1.1vw,18px)] text-[13px] min-[1360px]:text-[14px] font-sans tracking-[0.08em] uppercase transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 focus-visible:rounded-sm flex items-center justify-center min-h-[44px] whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-gold font-medium'
                        : 'text-ivory/70 hover:text-ivory'
                    }`}
                  >
                    <span className="whitespace-nowrap select-none">{link.label}</span>
                    {isActive && (
                      <span
                        className="absolute left-2 right-2 h-[2px] bg-gold rounded-full"
                        style={{ bottom: '6px' }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Column: "LET'S TALK" (aligns to wrapper right padding) */}
            <div className="flex items-center justify-end shrink-0 justify-self-end">
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase tracking-wider h-[44px] px-6 shrink-0 whitespace-nowrap flex items-center justify-center"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* Mobile / Tablet Header (< 1200px) */}
          <div className="min-[1200px]:hidden flex items-center justify-between w-full h-full">
            <Logo variant="header" scrolled={scrolled} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory outline-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[#080B12] flex flex-col overflow-x-hidden w-full max-w-full"
          >
            {/* Top Bar (64px) */}
            <div className="header-container flex items-center justify-between h-16 border-b border-[#202B3B]">
              <Logo variant="drawer" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-ivory outline-none focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 rounded-sm"
                aria-label="Close menu"
              >
                <Icon name="x" size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 p-6 overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive = activeNav === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-xl sm:text-2xl font-serif tracking-wider uppercase transition-colors px-4 py-3 min-h-[48px] flex items-center justify-center ${
                        isActive ? 'text-gold font-bold' : 'text-ivory hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 w-full max-w-xs flex justify-center"
              >
                <a
                  href={contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center justify-center min-h-[48px]"
                >
                  Let&apos;s Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
