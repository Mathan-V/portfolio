import React from 'react';
import {
  Code,
  Layers,
  Database,
  BarChart,
  CheckCircle2,
  Building,
  Terminal,
  Cpu,
  Sparkles
} from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Frappe & Python Specialist',
      desc: '3+ years architecting custom DocTypes, server scripts, whitelisted REST APIs, and background job queues.',
      icon: Terminal,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'React Frontend Engineering',
      desc: '1+ year building intuitive, high-performance interfaces, dynamic tables, and custom embedded analytics views.',
      icon: Code,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    },
    {
      title: 'Business Intelligence & Superset',
      desc: 'Integrating Apache Superset guest tokens, embedded dashboards, and analytical SQL pipelines.',
      icon: BarChart,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: 'Enterprise Integrations & DB',
      desc: 'Connecting ERPNext to Tally & ClearTax, optimizing PostgreSQL schemas, and ensuring transaction safety.',
      icon: Database,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>ABOUT MATHAN V</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            Engineering Reliable Solutions for Complex Enterprise Workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Developer Profile Portrait Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col items-center text-center">
                {/* Profile Image with Ring & Verified Indicator */}
                <div className="relative mb-5">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-[#101017] relative group-hover:border-blue-400/50 transition-colors">
                    <img
                      src={developerInfo.avatarUrl}
                      alt={developerInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-white dark:bg-[#0A0A0E] border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>VERIFIED DEV</span>
                  </div>
                </div>

                {/* Developer Name & Role */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {developerInfo.name}
                </h3>
                <p className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-3">
                  {developerInfo.role}
                </p>

                <p className="text-xs text-slate-900/50 dark:text-white/50 leading-relaxed max-w-xs mb-5 font-normal">
                  Specializing in Python, Frappe Framework, React, and PostgreSQL for enterprise platforms.
                </p>

                {/* Info Pills */}
                <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-slate-300/10 dark:border-white/10 text-left">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <div className="text-[10px] text-slate-900/40 dark:text-white/40 font-mono uppercase">Company</div>
                    <div className="text-xs font-semibold text-slate-900/90 dark:text-white/90 mt-0.5 truncate">Hyperready Tech</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <div className="text-[10px] text-slate-900/40 dark:text-white/40 font-mono uppercase">Location</div>
                    <div className="text-xs font-semibold text-slate-900/90 dark:text-white/90 mt-0.5 truncate">{developerInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Position Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/10 via-slate-900/5 dark:via-white/[0.02] to-transparent border border-slate-300/10 dark:border-white/10 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-900/40 dark:text-white/40 font-mono">Current Engagement</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Full Stack Developer · Hyperready Tech</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active</span>
              </div>
            </div>
          </div>

          {/* Right Column: Main Prose & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl">
              <p className="text-base text-slate-900/80 dark:text-white/80 leading-relaxed font-normal mb-5">
                I’m a <span className="text-slate-900 dark:text-white font-semibold">Full Stack Developer</span> with{' '}
                <span className="text-blue-400 font-semibold">3+ years of experience</span> building business
                applications using <span className="text-slate-900 dark:text-white font-medium">Frappe and Python</span>, along with
                hands-on experience in <span className="text-slate-900 dark:text-white font-medium">React</span>. My work focuses on
                transforming business requirements into scalable, maintainable, and user-friendly software solutions.
              </p>

              <p className="text-sm sm:text-base text-slate-900/50 dark:text-white/50 leading-relaxed font-normal">
                I have worked on reporting platforms, ERP integrations, KYC workflows, manufacturing and stock modules,
                database-driven applications, and dashboard systems. I enjoy solving complex technical problems,
                improving application performance, and delivering reliable solutions to production.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-300/10 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {developerInfo.quickStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <span className="text-[10px] text-slate-900/40 dark:text-white/40 font-mono uppercase tracking-wider">{stat.label}</span>
                    <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 font-mono">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 transition-all hover:bg-white/[0.045] backdrop-blur-md group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`p-2.5 rounded-xl border shrink-0 ${item.color} group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-900/50 dark:text-white/50 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
