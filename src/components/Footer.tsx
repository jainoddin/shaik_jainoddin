import React from 'react';
import Image from 'next/image';
import { LinkedInIcon, GitHubIcon, XIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio-data';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-8 pb-6">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/logos/js-icon.webp"
                alt="Jainoddin Shaik"
                fill
                loading="lazy"
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900 leading-snug">Jainoddin Shaik</div>
              <div className="text-xs text-slate-600 font-medium">Full Stack Developer</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Visit Jainoddin Shaik LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Visit Jainoddin Shaik GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/jainoddinsk?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Visit Jainoddin Shaik Twitter X Profile"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright - Near & Without Underline */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-medium">
          <div>© {currentYear} Jainoddin Shaik. All rights reserved.</div>
          <div>Built with passion, for a better web.</div>
        </div>
      </div>
    </footer>
  );
}
