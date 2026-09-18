import React from 'react';
import { Send, MapPin, ArrowRight } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio-data';
import CopyEmailButton from './CopyEmailButton';

export default function ContactSection() {
  return (
    <section id="contact" className="cv-auto py-20 bg-[#F4F8FF] border-t border-slate-200/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-sky-200/35 to-transparent animate-contact-sheen" />
        <div className="absolute right-[8%] top-8 w-56 h-56 rounded-full border border-blue-200/80 animate-contact-ring" />
        <div className="absolute right-[11%] top-14 w-44 h-44 rounded-full border border-cyan-200/70 animate-contact-ring" style={{ animationDelay: '1.4s' }} />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/95 border border-slate-200/90 shadow-sm hover:border-blue-300/80 transition-colors duration-300 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.12),transparent_42%)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-xs">
                <Send className="w-6 h-6" />
              </div>
              <span className="section-tag mb-3">GET IN TOUCH</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Let&apos;s build something meaningful.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            {/* Middle Column: Direct Contacts */}
            <div className="lg:col-span-4 space-y-4">
              <CopyEmailButton />

              {/* LinkedIn */}
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Jainoddin Shaik LinkedIn Profile"
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-600 font-medium">LinkedIn</div>
                  <div className="text-sm font-semibold text-slate-900 truncate">
                    {personalInfo.contact.linkedinDisplay}
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Jainoddin Shaik GitHub Profile"
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                  <GitHubIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-600 font-medium">GitHub</div>
                  <div className="text-sm font-semibold text-slate-900 truncate">
                    {personalInfo.contact.githubDisplay}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {personalInfo.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Big CTA Button */}
            <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center">
              <a
                href={`mailto:${personalInfo.contact.email}?subject=Collaboration%20Opportunity&body=Hi%20Jainoddin,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.`}
                aria-label="Send collaboration email to Jainoddin Shaik"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-slate-600 mt-2.5 lg:text-right font-medium">
                Quick response, always!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
