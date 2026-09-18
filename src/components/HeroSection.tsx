import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, FolderGit2, Code2, Globe, Zap, BarChart3, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import TechFloatingBadges from './TechFloatingBadges';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200/80 pt-16 sm:pt-20 lg:pt-22 pb-0"
    >
      <TechFloatingBadges />

      <div className="absolute -top-32 right-0 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.38)_0%,transparent_70%)] pointer-events-none -z-0" />
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(199,210,254,0.4)_0%,transparent_70%)] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(165,243,252,0.35)_0%,transparent_70%)] pointer-events-none -z-0" />

      {/* Futuristic Contour Waves & Architectural Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M-100,200 C300,50 600,350 1100,180 C1300,120 1600,250 1900,100"
          fill="none"
          stroke="url(#lineGradLight)"
          strokeWidth="1.5"
          className="animate-dash-flow"
        />
        <path
          d="M-100,280 C320,130 620,430 1120,260 C1320,200 1620,330 1920,180"
          fill="none"
          stroke="url(#lineGradLight)"
          strokeWidth="1.2"
        />
        <path
          d="M-100,360 C340,210 640,510 1140,340 C1340,280 1640,410 1940,260"
          fill="none"
          stroke="url(#lineGradLight)"
          strokeWidth="1"
          className="animate-dash-flow-reverse"
        />
      </svg>

      {/* Micro-dot grid for subtle engineering depth */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none -z-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 sm:gap-6 lg:gap-10 items-end">
          {/* Left Column: Typography, Actions, & Centered Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center pb-1 sm:pb-6 lg:pb-10 pt-4">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider w-fit mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Full Stack Developer & Architect</span>
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-slate-900 leading-[1.08] mb-4">
              JAINODDIN
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                SHAIK
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed mb-5 sm:mb-6 font-normal">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons - Side by Side on Mobile & Desktop */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-2 sm:mb-7">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </a>

              <a
                href="/resume.pdf"
                download="Jainoddin_Shaik_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm border border-slate-200 hover:border-slate-300 shadow-xs transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Left Side 3 Stats - Hidden on Mobile, Visible on Tablet & Desktop */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-3 pt-5 border-t border-slate-200/80 max-w-lg">
              {/* Stat 1: 6+ Projects */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-blue-600 leading-none mb-0.5">6+</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Projects Delivered</div>
                </div>
              </div>

              {/* Stat 2: Full Stack */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-blue-600 leading-none mb-0.5">Full Stack</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Web & Mobile</div>
                </div>
              </div>

              {/* Stat 3: Remote */}
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-blue-600 leading-none mb-0.5">Remote</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Global Opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Flush Bottom Alignment with Portrait Picture */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end self-end">
            <div className="relative w-full max-w-[480px] h-[430px] sm:h-[480px] lg:h-[510px] flex items-end justify-center">
              {/* Vibrant Paint Brush Splash across the background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                <div className="relative w-[480px] sm:w-[540px] h-[340px] sm:h-[390px] transform -rotate-12 scale-105 drop-shadow-[0_20px_40px_rgba(37,99,235,0.25)]">
                  <Image
                    src="/images/brush-splash.webp"
                    alt=""
                    aria-hidden="true"
                    fill
                    quality={50}
                    loading="eager"
                    fetchPriority="low"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 480px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Studio Portrait standing naturally and ending right at banner bottom - No Hover Scale */}
              <div className="relative z-10 w-[330px] sm:w-[390px] lg:w-[430px] h-[420px] sm:h-[470px] lg:h-[505px] flex items-end select-none">
                <Image
                  src="/images/jainoddin-official.webp"
                  alt="Portrait of Jainoddin Shaik, Full Stack Developer & Architect"
                  fill
                  priority
                  fetchPriority="high"
                  quality={70}
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 390px, 430px"
                  className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* Floating Light Glass Card 1: Top-Right "Clean Code / Better Products" - Hidden on mobile */}
              <div className="absolute top-2 -right-1 sm:-right-3 z-20 hidden md:flex animate-float-2 gpu-float">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 flex items-center gap-2.5 shadow-lg shadow-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="pr-1">
                    <div className="text-xs font-extrabold text-slate-900 leading-none">Clean Code</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">Better Products</div>
                  </div>
                </div>
              </div>

              {/* Floating Light Glass Card 2: Middle-Right "Ideas / Into Reality" - Hidden on mobile */}
              <div className="absolute top-1/2 -right-1 sm:-right-5 -translate-y-1/2 z-20 hidden md:flex animate-float-3 gpu-float">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 flex items-center gap-2.5 shadow-lg shadow-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm shadow-cyan-500/30">
                    <Zap className="w-4 h-4 fill-white" />
                  </div>
                  <div className="pr-1">
                    <div className="text-xs font-extrabold text-slate-900 leading-none">Ideas</div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">Into Reality</div>
                  </div>
                </div>
              </div>

              {/* Floating Light Glass Card 3: Bottom-Left "Build Deploy / Scale to Millions" - Hidden on mobile */}
              <div className="absolute bottom-6 -left-1 sm:-left-3 z-20 hidden md:flex animate-float-1 gpu-float">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 flex items-center gap-2.5 shadow-lg shadow-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold text-slate-900 leading-none">Build Deploy</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-tight">Scale to Millions</div>
                  </div>
                </div>
              </div>

              {/* Circular Experience Badge - Hidden on mobile */}
              <div className="absolute bottom-2 right-2 z-20 pointer-events-none hidden md:flex items-center justify-center w-18 h-18 rounded-full bg-white border-2 border-cyan-500/80 shadow-lg shadow-cyan-500/20 rotate-[6deg] animate-float-2 gpu-float">
                <div className="text-center">
                  <div className="text-sm font-black text-cyan-600 leading-none">2+</div>
                  <div className="text-[8px] font-bold text-slate-700 uppercase tracking-tighter mt-0.5 leading-tight">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
