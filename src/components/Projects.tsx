import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'bi', label: 'BI & Reporting' },
    { id: 'integration', label: 'Enterprise Integrations' },
    { id: 'erp', label: 'ERP & Business Logic' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'bi') return project.id === 'kj-reporting-system';
    if (selectedFilter === 'integration')
      return project.id === 'erpnext-tally-integration' || project.id === 'cleartax-integration';
    if (selectedFilter === 'erp')
      return project.id === 'manufacturing-stock-modules' || project.id === 'kyc-verification-system';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
              <span>ENGINEERED SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
              Featured Enterprise Projects
            </h2>
            <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
              Production business applications, custom ERP modules, bidirectional integrations, and real-time BI
              dashboards built for real-world enterprise operations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 backdrop-blur-md self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:bg-slate-900/5 dark:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === 'kj-reporting-system';
            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-2xl backdrop-blur-xl relative ${
                  isFlagship ? 'lg:col-span-2 bg-gradient-to-br from-blue-600/10 via-slate-900/5 dark:via-white/[0.02] to-transparent' : ''
                }`}
              >
                {/* Glow accent */}
                {isFlagship && (
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none" />
                )}

                <div className="p-6 sm:p-8 relative z-10">
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        FEATURED PROJECT
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-900/70 dark:text-white/70 mb-4">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-900/50 dark:text-white/50 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Highlights / Contributions Preview */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-900/40 dark:text-white/40 block mb-2">
                      Key Highlights & Deliverables:
                    </span>
                    <div className={`grid ${isFlagship ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-2`}>
                      {project.keyContributions.slice(0, isFlagship ? 6 : 4).map((contrib, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-900/70 dark:text-white/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{contrib}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Action */}
                <div className="px-6 sm:px-8 py-4 bg-slate-100 dark:bg-black/40 border-t border-slate-300/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-100 dark:bg-black/40 text-slate-900/70 dark:text-white/70 border border-slate-300/10 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all whitespace-nowrap active:scale-95 cursor-pointer hover:scale-105"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
