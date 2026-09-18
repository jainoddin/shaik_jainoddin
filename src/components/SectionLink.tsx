'use client';

import React from 'react';

type SectionLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { targetId: string };

export function scrollToSection(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 72;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
  window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

export default function SectionLink({ targetId, onClick, children, ...props }: SectionLinkProps) {
  return (
    <a href={`#${targetId}`} onClick={(event) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      scrollToSection(targetId);
    }} {...props}>
      {children}
    </a>
  );
}
