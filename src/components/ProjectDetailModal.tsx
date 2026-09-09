import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-100/85 dark:bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0E0E12] border border-slate-300/15 dark:border-white/15 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-50/90 dark:bg-[#0A0A0E]/90 backdrop-blur-xl border-b border-slate-300/10 dark:border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-900/50 dark:text-white/50 hover:text-slate-900 dark:text-white hover:bg-slate-900/10 dark:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Summary & Tagline */}
          <div>
            <p className="text-base sm:text-lg text-slate-900/80 dark:text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Quick Metrics if available */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10">
                  <div className="text-[10px] text-slate-900/40 dark:text-white/40 font-mono uppercase tracking-wider">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-blue-400 mt-0.5 font-mono">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Architecture Overview & System Flow */}
          {project.architectureOverview && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 space-y-5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>System Architecture & Integration Topology</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                {project.architectureOverview.frontend && (
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <span className="text-blue-400 font-semibold block mb-1 text-[11px]">FRONTEND LAYER</span>
                    <span className="text-slate-900/70 dark:text-white/70">{project.architectureOverview.frontend}</span>
                  </div>
                )}
                {project.architectureOverview.backend && (
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <span className="text-purple-400 font-semibold block mb-1 text-[11px]">BACKEND SERVICES</span>
                    <span className="text-slate-900/70 dark:text-white/70">{project.architectureOverview.backend}</span>
                  </div>
                )}
                {project.architectureOverview.database && (
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <span className="text-emerald-400 font-semibold block mb-1 text-[11px]">DATABASE & STORAGE</span>
                    <span className="text-slate-900/70 dark:text-white/70">{project.architectureOverview.database}</span>
                  </div>
                )}
                {project.architectureOverview.integration && (
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-300/5 dark:border-white/5">
                    <span className="text-amber-400 font-semibold block mb-1 text-[11px]">INTEGRATION BRIDGE</span>
                    <span className="text-slate-900/70 dark:text-white/70">{project.architectureOverview.integration}</span>
                  </div>
                )}
              </div>

              {project.architectureOverview.flow && (
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-900/40 dark:text-white/40 block mb-3">
                    Execution & Data Flow Sequence:
                  </span>
                  <div className="space-y-2.5">
                    {project.architectureOverview.flow.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-900/70 dark:text-white/70">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] border border-blue-500/30">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Key Contributions Breakdown */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-slate-900/40 dark:text-white/40 mb-3">
              Key Contributions & Deliverables
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyContributions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.025] border border-slate-300/5 dark:border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-900/80 dark:text-white/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-slate-900/40 dark:text-white/40 mb-2.5">
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-black/40 text-xs font-mono font-medium text-slate-900/80 dark:text-white/80 border border-slate-300/10 dark:border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-black/40 border-t border-slate-300/10 dark:border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-900 dark:text-white bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-300/10 dark:border-white/10 transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
