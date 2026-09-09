import React from 'react';
import {
  ShieldCheck,
  Zap,
  FolderSync,
  Star,
  Bug,
  Cpu,
  Server
} from 'lucide-react';
import { recentEngineeringWork } from '../data/portfolioData';

export const RecentEngineering: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'naming-series-fix':
        return ShieldCheck;
      case 'recent-folders-project':
        return FolderSync;
      case 'project-favorites':
        return Star;
      case 'production-bugfixes':
        return Bug;
      case 'testing-deployment':
        return Server;
      default:
        return Cpu;
    }
  };

  return (
    <section id="recent-work" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>LIVE PRODUCTION DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            Recent Engineering Work
          </h2>
          <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
            Recent production deployments, enterprise performance enhancements, critical bug resolutions, and
            architectural refactorings delivered to live business environments.
          </p>
        </div>

        {/* Engineering Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEngineeringWork.map((item) => {
            const Icon = getIcon(item.id);
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 transition-all duration-200 flex flex-col justify-between group shadow-xl backdrop-blur-md"
              >
                <div>
                  {/* Status & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-black/40 text-slate-900/70 dark:text-white/70 border border-slate-300/10 dark:border-white/10">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{item.status}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Impact statement */}
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5 mb-4 text-xs font-mono text-blue-300 flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>Impact: {item.impact}</span>
                  </div>

                  {/* Details */}
                  <p className="text-xs text-slate-900/60 dark:text-white/60 leading-relaxed font-normal mb-6">
                    {item.details}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-slate-300/10 dark:border-white/10 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-black/40 text-slate-900/40 dark:text-white/40 border border-slate-300/5 dark:border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
