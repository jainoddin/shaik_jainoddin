import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { featuredProjects } from '../data/portfolio-data';

export default function ProjectsSection() {

  return (
    <section id="projects" className="cv-auto py-20 bg-gradient-to-b from-[#F8FAFC] via-[#EEF4FF] to-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none projects-mesh opacity-70" />
      <div className="absolute -top-16 left-[12%] w-40 h-40 rounded-3xl border border-blue-200/70 bg-blue-100/30 pointer-events-none animate-projects-drift gpu-float" />
      <div className="absolute bottom-10 right-[8%] w-24 h-24 rounded-full border border-cyan-200/80 bg-cyan-100/25 pointer-events-none animate-projects-drift gpu-float" style={{ animationDelay: '1.6s' }} />
      <div className="absolute top-1/3 right-[22%] w-16 h-16 rotate-12 rounded-xl border border-indigo-200/70 bg-indigo-50/40 pointer-events-none animate-projects-drift gpu-float" style={{ animationDelay: '3.2s' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="section-tag mb-2">FEATURED PROJECTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Crafted with purpose & precision
            </h2>
          </div>

          <a
            href="https://github.com/jainoddin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group shrink-0"
          >
            <span>View All on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4-Column Grid - Compact, sleek cards perfectly fitted */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-transform duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Image Preview - Full Screenshot Width 100% Visible */}
              <div className="relative aspect-[2.19/1] w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 300px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3.5 flex-grow line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-medium border border-blue-100/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live site for ${project.title}`}
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code and case study for ${project.title}`}
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    <span>Case Study</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
