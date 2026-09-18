import React from 'react';
import { Briefcase, Puzzle, Sparkles, Target, Quote } from 'lucide-react';
import { personalInfo, currentExperience } from '../data/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="cv-auto py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: About Me */}
          <div className="flex flex-col">
            <span className="section-tag mb-4">ABOUT ME</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {personalInfo.aboutTitle}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {personalInfo.aboutParagraph}
            </p>

            {/* 3 Pill Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Puzzle className="w-4 h-4 text-blue-600" />
                <span>Problem Solver</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Continuous Learner</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Product Focused</span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-5 rounded-2xl bg-[#F0F7FF] border border-blue-100/80 flex items-start gap-3">
              <Quote className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm font-medium italic text-slate-700 leading-relaxed">
                {personalInfo.aboutQuote}
              </p>
            </div>
          </div>

          {/* Right Column: Current Experience */}
          <div id="experience" className="flex flex-col">
            <span className="section-tag mb-4">CURRENT EXPERIENCE</span>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {currentExperience.role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 mb-1">
                    {currentExperience.company}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {currentExperience.location} • {currentExperience.period}
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {currentExperience.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Quote Footer in Experience Card */}
              <div className="p-4 rounded-xl bg-[#F0F7FF] border border-blue-100/60 flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium italic text-slate-700 leading-relaxed">
                  {currentExperience.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
