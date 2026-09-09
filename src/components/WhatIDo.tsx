import React from 'react';
import {
  Layers,
  Building2,
  Network,
  BarChart3,
  Database,
  ServerCrash,
  Check
} from 'lucide-react';
import { whatIDoData } from '../data/portfolioData';

export const WhatIDo: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return Layers;
      case 'Building2':
        return Building2;
      case 'Network':
        return Network;
      case 'BarChart3':
        return BarChart3;
      case 'Database':
        return Database;
      case 'ServerCrash':
        return ServerCrash;
      default:
        return Layers;
    }
  };

  return (
    <section id="what-i-do" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            What I Do & Deliver
          </h2>
          <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
            Specialized engineering capabilities tailored to enterprise systems, mission-critical business logic, and
            high-throughput data processing.
          </p>
        </div>

        {/* 6 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIDoData.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 transition-all duration-200 flex flex-col justify-between group shadow-xl backdrop-blur-md"
              >
                <div>
                  {/* Icon & ID */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-900/30 dark:text-white/30 font-semibold">0{item.id}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-900/50 dark:text-white/50 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-900/70 dark:text-white/70">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges Footer */}
                <div className="pt-4 border-t border-slate-300/10 dark:border-white/10 flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-100 dark:bg-black/40 text-slate-900/60 dark:text-white/60 border border-slate-300/10 dark:border-white/10"
                    >
                      {s}
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
