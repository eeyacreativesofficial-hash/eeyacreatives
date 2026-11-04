'use client';

import React, { useEffect, useRef } from 'react';

/**
 * InteractiveBackground provides a luxury ambient lighting field
 * inspired by world-class design studios (Apple Pro, Linear, A24).
 *
 * Features:
 * - Fluid cursor tracking with buttery lerp interpolation
 * - Breathing cinematic ambient light fields
 * - Zero impact on scroll or interaction (pointer-events: none)
 * - Optimized via requestAnimationFrame and GPU transform
 * - Clean fallback for touch devices and prefers-reduced-motion
 */
export default function InteractiveBackground() {
  const glowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const animFrameId = useRef<number | null>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect if primary pointer is coarse (touch device)
    const isTouch =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isTouch) {
      // Keep static breathing aura on touch / reduced motion
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current && glowRef.current) {
        isVisible.current = true;
        glowRef.current.style.opacity = '1';
        currentPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (glowRef.current) {
        glowRef.current.style.opacity = '0';
      }
    };

    const updatePosition = () => {
      if (isVisible.current && glowRef.current) {
        // Buttery-smooth lerp (12% per frame)
        const lerpFactor = 0.12;
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }
      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── 1. Interactive Cursor Follower (Desktop) ── */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] -mt-[300px] -ml-[300px] rounded-full opacity-0 transition-opacity duration-700 ease-out will-change-transform hidden md:block"
        style={{
          background:
            'radial-gradient(circle at center, rgb(var(--gold) / calc(var(--k) * 0.08)) 0%, rgb(var(--bronze) / calc(var(--k) * 0.03)) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* ── 2. Cinematic Ambient Breathing Field (All devices) ── */}
      <div className="absolute inset-0 cinematic-ambient-mesh opacity-70" />
    </div>
  );
}

