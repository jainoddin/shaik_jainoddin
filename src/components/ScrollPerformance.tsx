'use client';

import { useEffect } from 'react';

export default function ScrollPerformance() {
  useEffect(() => {
    let endTimer: ReturnType<typeof setTimeout> | undefined;
    let scrolling = false;

    const onScroll = () => {
      if (!scrolling) {
        scrolling = true;
        document.documentElement.classList.add('is-scrolling');
        window.dispatchEvent(new Event('portfolio-scroll-start'));
      }
      clearTimeout(endTimer);
      endTimer = setTimeout(() => {
        scrolling = false;
        document.documentElement.classList.remove('is-scrolling');
        window.dispatchEvent(new Event('portfolio-scroll-end'));
      }, 120);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(endTimer);
      document.documentElement.classList.remove('is-scrolling');
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
