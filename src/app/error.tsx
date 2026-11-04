'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or error tracking service
    console.error('Unhandled studio application error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding pt-32 pb-20 bg-[#080B12] text-center">
      <div className="max-w-md mx-auto">
        <p className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Status 500 — System Notice
        </p>
        <h1 className="heading-xl text-ivory mb-6 font-serif">Something Went Wrong</h1>
        <p className="body-lg text-muted/80 mb-8 leading-relaxed">
          An unexpected interruption occurred. Our creative engine has recorded this event and our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn-primary min-h-[48px] px-8 text-xs tracking-widest uppercase font-semibold w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="btn-outline min-h-[48px] px-8 text-xs tracking-widest uppercase font-semibold w-full sm:w-auto"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

