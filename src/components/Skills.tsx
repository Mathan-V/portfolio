import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  BarChart3,
  Server,
  Box,
  Terminal,
  ShieldCheck,
  GitBranch,
  FileCode,
  Globe,
  Palette,
  Cpu,
  GitMerge,
  LayoutDashboard,
  PieChart,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Layers':
        return Layers;
      case 'Database':
        return Database;
      case 'BarChart3':
        return BarChart3;
      case 'Server':
        return Server;
      case 'Box':
        return Box;
      case 'Terminal':
        return Terminal;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'GitBranch':
        return GitBranch;
      case 'FileCode':
        return FileCode;
      case 'Globe':
        return Globe;
      case 'Palette':
        return Palette;
      case 'Cpu':
        return Cpu;
      case 'GitMerge':
        return GitMerge;
      case 'LayoutDashboard':
        return LayoutDashboard;
      case 'PieChart':
        return PieChart;
      default:
        return Code;
    }
  };

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'backend', label: 'Backend & Frappe' },
    { id: 'frontend', label: 'Frontend & React' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'bi', label: 'BI & Superset' },
    { id: 'devops', label: 'DevOps & Tooling' }
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-300/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
              <span>TECHNICAL REPERTOIRE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
              Enterprise Tech Stack & Tooling
            </h2>
            <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
              Proven proficiency across the entire software development lifecycle — from database schema design and
              server-side business logic to modern responsive frontends and BI integrations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:bg-slate-900/5 dark:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories and Skill Cards Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-300/10 dark:border-white/10 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{category.title}</h3>
                </div>
                <span className="text-[11px] text-slate-900/40 dark:text-white/40 font-mono hidden sm:inline-block">
                  {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => {
                  const Icon = getIcon(skill.iconName);
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 hover:bg-white/[0.045] transition-all duration-200 group flex flex-col justify-between backdrop-blur-md"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3.5">
                          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-black/40 text-slate-900/70 dark:text-white/70 border border-slate-300/10 dark:border-white/10">
                            {skill.level}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors mb-1.5">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-slate-900/50 dark:text-white/50 leading-relaxed font-normal">
                          {skill.focus}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-300/10 dark:border-white/10 flex items-center gap-1.5 text-[11px] text-slate-900/40 dark:text-white/40 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">Production Tested</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
