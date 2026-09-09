import React, { useState } from 'react';
import {
  Search,
  DraftingCompass,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { engineeringApproachSteps } from '../data/portfolioData';

export const EngineeringApproach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return Search;
      case 'DraftingCompass':
        return DraftingCompass;
      case 'Code2':
        return Code2;
      case 'CheckCircle2':
        return CheckCircle2;
      case 'Rocket':
        return Rocket;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Cpu;
    }
  };

  const activeStep = engineeringApproachSteps[activeStepIndex];
  const ActiveIcon = getIcon(activeStep.iconName);

  return (
    <section id="approach" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
            Engineering Approach: Concept to Production
          </h2>
          <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
            A disciplined, 6-stage lifecycle engineered to transform ambiguous business goals into resilient,
            high-performance enterprise software.
          </p>
        </div>

        {/* Pipeline Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {engineeringApproachSteps.map((step, idx) => {
            const Icon = getIcon(step.iconName);
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500/80 shadow-lg shadow-blue-500/20 text-white'
                    : 'bg-white/[0.025] border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 hover:bg-white/[0.045] text-slate-900/70 dark:text-white/70'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-blue-400' : 'text-slate-900/40 dark:text-white/40'}`}>
                    {step.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-900/40 dark:text-white/40'}`} />
                </div>
                <div className={`text-xs font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-900/80 dark:text-white/80'}`}>
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Step Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">STAGE {activeStep.step}</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {activeStep.name}: {activeStep.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-900/70 dark:text-white/70 leading-relaxed font-normal pt-2">
                {activeStep.description}
              </p>

              <div className="pt-4 border-t border-slate-300/10 dark:border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-900/40 dark:text-white/40 block mb-3">
                  Core Stage Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStep.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-xs font-mono text-slate-900/80 dark:text-white/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architectural Principles */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-900/40 dark:text-white/40 block">
                Mathan V's Engineering Tenet
              </span>
              <p className="text-xs text-slate-900/60 dark:text-white/60 leading-relaxed font-normal italic">
                "Understanding the exact business workflow upfront saves hundreds of debugging hours in production. Every
                Frappe DocType, PostgreSQL index, and React hook is written with maintainability and fault tolerance in
                mind."
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero-Compromise Code Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
