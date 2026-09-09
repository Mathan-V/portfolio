import React from 'react';
import {
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Zap
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            Professional Experience & Track Record
          </h2>
          <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
            Engineering robust backend services, business intelligence dashboards, and interactive web clients for
            enterprise operations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-blue-500 via-slate-900/10 dark:via-white/10 to-transparent" />

          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-10 sm:pl-16">
                {/* Timeline Marker */}
                <div className={`absolute left-2 sm:left-6 -translate-x-1/2 top-1 w-5 h-5 rounded-full bg-white dark:bg-[#0A0A0B] border-4 ${index === 0 ? 'border-blue-500 shadow-lg shadow-blue-500/50' : 'border-slate-300 dark:border-slate-700'}`} />

                {/* Experience Content Box */}
                <div className="p-7 sm:p-9 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl">
                  {/* Job Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-300/10 dark:border-white/10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {index === 0 && (
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Current Position
                          </span>
                        )}
                      </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-900/80 dark:text-white/80">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-900/50 dark:text-white/50">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-900/70 dark:text-white/70 text-sm sm:text-base leading-relaxed my-6">
                {exp.summary}
              </p>

              {/* Key Wins Callout */}
              <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-blue-900/15 via-slate-900/5 dark:via-white/[0.02] to-transparent border border-blue-500/20">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Key Engineering Milestones</span>
                </div>
                <ul className="space-y-2.5">
                  {exp.keyWins.map((win, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900/80 dark:text-white/80">
                      <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{win}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Responsibilities Grid */}
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-slate-900/40 dark:text-white/40">
                  Core Engineering Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-900/70 dark:text-white/70 hover:border-slate-300/15 dark:border-white/15 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used in this role */}
              <div className="mt-8 pt-6 border-t border-slate-300/10 dark:border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-slate-900/40 dark:text-white/40 block mb-3">
                  Technologies Utilized Daily
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-black/40 text-xs font-mono text-slate-900/70 dark:text-white/70 border border-slate-300/10 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      </div>
    </section>
  );
};
