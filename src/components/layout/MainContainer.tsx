'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import InteractiveBackground from '@/components/ui/InteractiveBackground';

interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  const pathname = usePathname() || '/';

  let pageName = 'home';
  if (pathname.startsWith('/services')) {
    pageName = 'services';
  } else if (pathname.startsWith('/our-work/') && pathname !== '/our-work') {
    pageName = 'project';
  } else if (pathname.startsWith('/our-work')) {
    pageName = 'work';
  } else if (pathname.startsWith('/our-vision')) {
    pageName = 'vision';
  } else if (pathname.startsWith('/offers')) {
    pageName = 'offers';
  } else if (pathname.startsWith('/contact')) {
    pageName = 'contact';
  }

  return (
    <main className="flex-1 relative" id="main-content" data-page={pageName}>
      <InteractiveBackground />
      {children}
    </main>
  );
}

