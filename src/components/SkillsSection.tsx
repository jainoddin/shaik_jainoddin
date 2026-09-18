import React from 'react';
import TechIcon from './TechIcon';
import { Sparkles, Layers, Cpu, Database, Wrench } from 'lucide-react';

interface OrbitBadgeProps {
  name: string;
  label: string;
  glowColor: string;
  counterAnimationClass: string;
  positionClass: string;
  tagline?: string;
}

function OrbitBadge({
  name,
  label,
  glowColor,
  counterAnimationClass,
  positionClass,
  tagline,
}: OrbitBadgeProps) {
  return (
    <div
      className={`absolute ${positionClass} z-20 pointer-events-auto`}
    >
      {/* Counter-rotation wrapper keeps the badge 100% upright at all times */}
      <div
        className={`${counterAnimationClass} hover:[animation-play-state:paused] flex flex-col items-center group cursor-pointer`}
      >
        {/* Glowing Circular Glass Bubble */}
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md ${glowColor} flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1.5`}
          title={`${label}${tagline ? ` • ${tagline}` : ''}`}
        >
          <TechIcon name={name} className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-300 group-hover:rotate-6" />
        </div>

        {/* Clean Text Label */}
        <div className="mt-1.5 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/80 shadow-2xs text-[10px] sm:text-[11px] font-bold text-slate-700 tracking-tight whitespace-nowrap group-hover:text-blue-600 group-hover:border-blue-300 transition-colors">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const allSkills = [
    { category: 'Frontend', name: 'React.js', icon: 'React' },
    { category: 'Frontend', name: 'Next.js', icon: 'Next.js' },
    { category: 'Frontend', name: 'TypeScript', icon: 'TypeScript' },
    { category: 'Frontend', name: 'JavaScript', icon: 'JavaScript' },
    { category: 'Frontend', name: 'Tailwind CSS', icon: 'Tailwind CSS' },
    { category: 'Frontend', name: 'Redux Toolkit', icon: 'Redux Toolkit' },
    { category: 'Frontend', name: 'HTML5', icon: 'HTML5' },
    { category: 'Frontend', name: 'CSS3', icon: 'CSS3' },
    { category: 'Backend', name: 'Node.js', icon: 'Node.js' },
    { category: 'Backend', name: 'Express', icon: 'Express' },
    { category: 'Backend', name: 'Rust', icon: 'Rust' },
    { category: 'Backend', name: 'Python', icon: 'Python' },
    { category: 'Backend', name: 'REST APIs', icon: 'REST APIs' },
    { category: 'Backend', name: 'Socket.IO', icon: 'Socket.IO' },
    { category: 'Data & Tools', name: 'PostgreSQL', icon: 'PostgreSQL' },
    { category: 'Data & Tools', name: 'MongoDB', icon: 'MongoDB' },
    { category: 'Data & Tools', name: 'Docker', icon: 'Docker' },
    { category: 'Data & Tools', name: 'Git', icon: 'Git' },
    { category: 'Data & Tools', name: 'Figma', icon: 'Figma' },
    { category: 'Data & Tools', name: 'Gemini AI', icon: 'Gemini AI' },
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/40 to-white relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-200/20 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-blue-200/15 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* Subtle Blueprint Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none -z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(37, 99, 235, 0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Planetary Tech System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Tech stack &amp; superpowers
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A live, concentric architecture of modern web, backend, and cloud technologies.
            <span className="hidden sm:inline"> Hover over any planet to inspect and pause its orbit.</span>
          </p>
        </div>

        {/* ============================================================ */}
        {/* ORBITING PLANETARY GALAXY (Cardless Live Orbital System) */}
        {/* ============================================================ */}
        <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] sm:min-h-[640px] lg:min-h-[760px] select-none">
          {/* Responsive Scaling Container (Scales gracefully on small mobile devices) */}
          <div className="scale-[0.58] sm:scale-[0.80] lg:scale-100 transform origin-center transition-transform duration-300 flex items-center justify-center relative w-[800px] h-[800px]">
            
            {/* Center Hub: FULL STACK CORE */}
            <div className="absolute z-30 flex flex-col items-center justify-center pointer-events-auto group cursor-pointer">
              {/* Pulsing Ripple Rings */}
              <div className="absolute w-44 h-44 rounded-full bg-cyan-400/15 blur-lg animate-pulse pointer-events-none" />
              <div className="absolute w-36 h-36 rounded-full border border-cyan-400/30 animate-ping pointer-events-none" />

              {/* 3D Hub Button Badge */}
              <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-2 border-cyan-400/90 shadow-[0_0_40px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center text-center p-3 transition-transform duration-300 group-hover:scale-110">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-widest leading-none">
                  FULL STACK
                </span>
                <span className="text-base font-black text-white tracking-wider leading-tight mt-0.5">
                  CORE
                </span>
                <span className="text-[9px] font-medium text-slate-400 tracking-tight mt-0.5">
                  JAINODDIN
                </span>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* RING 1: INNER ORBIT (Core Frameworks - React, Next.js, TS, Node) */}
            {/* -------------------------------------------------------- */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/40 border-dashed animate-orbit-cw-45 hover:[animation-play-state:paused] pointer-events-none">
              {/* React.js (Top 0°) */}
              <OrbitBadge
                name="React"
                label="React.js"
                tagline="UI Architecture"
                glowColor="shadow-cyan-500/30 hover:shadow-cyan-400/60 border-cyan-200"
                counterAnimationClass="animate-orbit-ccw-45"
                positionClass="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* TypeScript (Right 90°) */}
              <OrbitBadge
                name="TypeScript"
                label="TypeScript"
                tagline="Type Safety"
                glowColor="shadow-blue-500/30 hover:shadow-blue-400/60 border-blue-200"
                counterAnimationClass="animate-orbit-ccw-45"
                positionClass="top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
              />

              {/* Next.js (Bottom 180°) */}
              <OrbitBadge
                name="Next.js"
                label="Next.js"
                tagline="SSR & Web Apps"
                glowColor="shadow-slate-600/30 hover:shadow-slate-900/50 border-slate-300"
                counterAnimationClass="animate-orbit-ccw-45"
                positionClass="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              />

              {/* Node.js (Left 270°) */}
              <OrbitBadge
                name="Node.js"
                label="Node.js"
                tagline="Backend Runtime"
                glowColor="shadow-emerald-500/30 hover:shadow-emerald-400/60 border-emerald-200"
                counterAnimationClass="animate-orbit-ccw-45"
                positionClass="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            {/* -------------------------------------------------------- */}
            {/* RING 2: MIDDLE ORBIT (Systems & Styling - Tailwind, Rust, Python, Express) */}
            {/* -------------------------------------------------------- */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-blue-400/30 animate-orbit-ccw-60 hover:[animation-play-state:paused] pointer-events-none">
              {/* Tailwind CSS (Top-Right 45°) */}
              <OrbitBadge
                name="Tailwind CSS"
                label="Tailwind CSS"
                tagline="Design System"
                glowColor="shadow-teal-500/30 hover:shadow-teal-400/60 border-teal-200"
                counterAnimationClass="animate-orbit-cw-60"
                positionClass="top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2"
              />

              {/* Rust (Bottom-Right 135°) */}
              <OrbitBadge
                name="Rust"
                label="Rust"
                tagline="High Performance"
                glowColor="shadow-orange-500/30 hover:shadow-orange-400/60 border-orange-200"
                counterAnimationClass="animate-orbit-cw-60"
                positionClass="bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2"
              />

              {/* Python (Bottom-Left 225°) */}
              <OrbitBadge
                name="Python"
                label="Python"
                tagline="Scripting & AI"
                glowColor="shadow-yellow-500/30 hover:shadow-yellow-400/60 border-yellow-200"
                counterAnimationClass="animate-orbit-cw-60"
                positionClass="bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2"
              />

              {/* Express (Top-Left 315°) */}
              <OrbitBadge
                name="Express"
                label="Express.js"
                tagline="RESTful Microservices"
                glowColor="shadow-slate-500/30 hover:shadow-slate-700/50 border-slate-300"
                counterAnimationClass="animate-orbit-cw-60"
                positionClass="top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            {/* -------------------------------------------------------- */}
            {/* RING 3: OUTER ORBIT (Databases, Cloud & Tools) */}
            {/* -------------------------------------------------------- */}
            <div className="absolute w-[760px] h-[760px] rounded-full border border-indigo-400/25 border-dashed animate-orbit-cw-80 hover:[animation-play-state:paused] pointer-events-none">
              {/* PostgreSQL (Top 0°) */}
              <OrbitBadge
                name="PostgreSQL"
                label="PostgreSQL"
                tagline="Relational DB"
                glowColor="shadow-indigo-500/30 hover:shadow-indigo-400/60 border-indigo-200"
                counterAnimationClass="animate-orbit-ccw-80"
                positionClass="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Docker (Top-Right 72°) */}
              <OrbitBadge
                name="Docker"
                label="Docker"
                tagline="Containers & Deploy"
                glowColor="shadow-blue-500/30 hover:shadow-blue-400/60 border-blue-200"
                counterAnimationClass="animate-orbit-ccw-80"
                positionClass="top-[19.1%] right-[4.5%] translate-x-1/2 -translate-y-1/2"
              />

              {/* Git (Bottom-Right 144°) */}
              <OrbitBadge
                name="Git"
                label="Git"
                tagline="Version Control"
                glowColor="shadow-orange-500/30 hover:shadow-orange-400/60 border-orange-200"
                counterAnimationClass="animate-orbit-ccw-80"
                positionClass="bottom-[19.1%] right-[9.5%] translate-x-1/2 translate-y-1/2"
              />

              {/* MongoDB (Bottom-Left 216°) */}
              <OrbitBadge
                name="MongoDB"
                label="MongoDB"
                tagline="Document Storage"
                glowColor="shadow-emerald-500/30 hover:shadow-emerald-400/60 border-emerald-200"
                counterAnimationClass="animate-orbit-ccw-80"
                positionClass="bottom-[19.1%] left-[9.5%] -translate-x-1/2 translate-y-1/2"
              />

              {/* Gemini AI (Top-Left 288°) */}
              <OrbitBadge
                name="Gemini AI"
                label="Gemini AI"
                tagline="AI Integrations"
                glowColor="shadow-indigo-500/30 hover:shadow-indigo-400/60 border-indigo-200"
                counterAnimationClass="animate-orbit-ccw-80"
                positionClass="top-[19.1%] left-[4.5%] -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* BOTTOM QUICK-ACCESS PILLS BAR (Clean & Accessible Overview) */}
        {/* ------------------------------------------------------------ */}
        <div className="mt-8 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Full Tech Inventory (20 Technologies)
              </span>
            </div>
            <span className="text-xs text-slate-500">
              Modern frontend, resilient backend systems &amp; cloud storage
            </span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {allSkills.map((skill) => (
              <div
                key={skill.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-default group"
              >
                <TechIcon name={skill.name} className="w-3.5 h-3.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
