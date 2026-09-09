import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-100/60 dark:bg-black/60 border-t border-slate-300/5 dark:border-white/5 py-12 text-slate-900/50 dark:text-white/50 text-xs backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-300/5 dark:border-white/5">
          {/* Brand & Summary */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-400/40 shadow-lg shadow-blue-500/20 shrink-0 bg-slate-100 dark:bg-black/40">
              <img
                src={developerInfo.avatarUrl}
                alt={developerInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm tracking-tight italic">Mathan V</div>
              <div className="text-slate-900/40 dark:text-white/40 font-mono text-[11px]">
                Full Stack Developer · Python · Frappe · React · PostgreSQL
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-900/60 dark:text-white/60">
            <a href="#about" className="hover:text-slate-900 dark:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-slate-900 dark:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 dark:text-white transition-colors">Projects</a>
            <a href="#recent-work" className="hover:text-slate-900 dark:text-white transition-colors">Recent Work</a>
            <button onClick={onOpenResume} className="hover:text-slate-900 dark:text-white transition-colors cursor-pointer">Resume</button>
            <a href="#contact" className="hover:text-slate-900 dark:text-white transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={developerInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 hover:bg-slate-900/5 dark:bg-white/5 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={developerInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 hover:bg-slate-900/5 dark:bg-white/5 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${developerInfo.email}`}
              className="p-2.5 rounded-xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 hover:bg-slate-900/5 dark:bg-white/5 transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright telemetry line from Immersive Theme */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[10px] font-mono text-slate-900/30 dark:text-white/30 tracking-widest uppercase">
          <div>
            Hyperready Technology // © {currentYear} Mathan V
          </div>
          <div>
            Frappe Framework // React // PostgreSQL // Superset
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
