import React from 'react';
import {
  Briefcase,
  TerminalSquare,
  Layout,
  Database,
  Workflow,
  ShieldAlert,
  Target,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { whyWorkWithMePoints } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return Briefcase;
      case 'TerminalSquare':
        return TerminalSquare;
      case 'Layout':
        return Layout;
      case 'Database':
        return Database;
      case 'Workflow':
        return Workflow;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Target':
        return Target;
      case 'Sparkles':
        return Sparkles;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>ENGINEERING VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            Why Work With Me
          </h2>
          <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
            A developer who bridges the gap between complex software architecture, mission-critical operations, and
            business ROI.
          </p>
        </div>

        {/* 8 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMePoints.map((point, index) => {
            const Icon = getIcon(point.iconName);
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 transition-all duration-200 flex flex-col justify-between group shadow-xl backdrop-blur-md"
              >
                <div>
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors mb-2">
                    {point.title}
                  </h3>

                  <p className="text-xs text-slate-900/50 dark:text-white/50 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-300/10 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-slate-900/40 dark:text-white/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
