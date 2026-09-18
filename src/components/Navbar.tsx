'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import SectionLink from './SectionLink';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let endTimer: ReturnType<typeof setTimeout> | undefined;

    const syncScrolled = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
    };

    const handleScroll = () => {
      syncScrolled();
      document.documentElement.classList.add('is-scrolling');
      clearTimeout(endTimer);
      endTimer = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 140);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    syncScrolled();

    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      clearTimeout(endTimer);
      document.documentElement.classList.remove('is-scrolling');
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 supports-[backdrop-filter]:bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5'
          : 'bg-transparent border-b border-transparent py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <SectionLink
          targetId="home"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          aria-label="Jainoddin Shaik Home"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/logos/js-icon.webp"
              alt="Jainoddin Shaik"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </SectionLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <SectionLink
                key={link.name}
                targetId={link.id}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-200 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {link.name}
              </SectionLink>
            );
          })}
        </nav>

        {/* Opportunities Status Pill */}
        <div className="hidden sm:flex items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-700 text-xs font-medium shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-status-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {personalInfo.contact.availability}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <SectionLink
                key={link.name}
                targetId={link.id}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </SectionLink>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-status-pulse" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {personalInfo.contact.availability}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
