import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Mail,
  MapPin,
  Building,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { developerInfo, resumeData, experienceData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      `Mathan V - Full Stack Developer\nEmail: ${developerInfo.email}\nExperience: 3+ Years in Frappe, Python, React, PostgreSQL\nCompany: Hyperready Technology`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-100/85 dark:bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0C0C10] border border-slate-300/15 dark:border-white/15 shadow-2xl text-left flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-50/90 dark:bg-[#0A0A0E]/90 backdrop-blur-xl border-b border-slate-300/10 dark:border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">Mathan_V_Resume_FullStack.pdf</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleCopySummary}
              className="p-2 rounded-xl text-slate-900/50 dark:text-white/50 hover:text-slate-900 dark:text-white hover:bg-slate-900/10 dark:bg-white/10 transition-colors cursor-pointer"
              title="Copy Summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-900/50 dark:text-white/50 hover:text-slate-900 dark:text-white hover:bg-slate-900/10 dark:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-slate-50 dark:bg-[#09090D] text-slate-900/90 dark:text-white/90 print:bg-white print:text-white dark:text-black print:p-0">
          {/* Resume Header */}
          <div className="border-b border-slate-300/10 dark:border-white/10 pb-6 print:border-slate-200 dark:border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-blue-400/40 shadow-md shrink-0 bg-slate-100 dark:bg-black/40">
                <img
                  src={developerInfo.avatarUrl}
                  alt={developerInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-white dark:text-black tracking-tight mb-1">
                  {developerInfo.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-400 print:text-blue-700">
                  {developerInfo.role} · Enterprise Backend & Web Systems
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-900/50 dark:text-white/50 print:text-gray-600 font-mono">
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400 print:text-white dark:text-black" />
                    <span>{developerInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-blue-400 print:text-white dark:text-black" />
                    <span>{developerInfo.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-white dark:text-black" />
                    <span>{developerInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-blue-400 print:text-white dark:text-black border-b border-slate-300/10 dark:border-white/10 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-900/70 dark:text-white/70 print:text-gray-800 leading-relaxed font-normal">
              {resumeData.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-blue-400 print:text-white dark:text-black border-b border-slate-300/10 dark:border-white/10 pb-1 mb-3">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {resumeData.coreCompetencies.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-900/70 dark:text-white/70 print:text-gray-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 print:text-white dark:text-black shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-blue-400 print:text-white dark:text-black border-b border-slate-300/10 dark:border-white/10 pb-1 mb-4">
              Work Experience
            </h2>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white print:text-white dark:text-black">{exp.role}</h3>
                    <div className="text-xs font-semibold text-slate-900/50 dark:text-white/50 print:text-gray-700">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-blue-400 print:text-gray-600 sm:text-right mt-1 sm:mt-0">
                    {exp.period} · {exp.location}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-900/70 dark:text-white/70 print:text-gray-800">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-blue-400 print:text-white dark:text-black font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-blue-400 print:text-white dark:text-black border-b border-slate-300/10 dark:border-white/10 pb-1 mb-3">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-white dark:text-black block mb-1">Backend & Frameworks:</span>
                <span className="text-slate-900/50 dark:text-white/50 print:text-gray-700">
                  Python, Frappe Framework, REST APIs, ERPNext Architecture
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-white dark:text-black block mb-1">Frontend Engineering:</span>
                <span className="text-slate-900/50 dark:text-white/50 print:text-gray-700">
                  React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-white dark:text-black block mb-1">Database & BI Analytics:</span>
                <span className="text-slate-900/50 dark:text-white/50 print:text-gray-700">
                  PostgreSQL, SQL Query Optimization, Apache Superset, Embedded SDK
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-white dark:text-black block mb-1">DevOps & Environments:</span>
                <span className="text-slate-900/50 dark:text-white/50 print:text-gray-700">
                  Docker, Docker Compose, Linux, Nginx Reverse Proxy, Git, GitHub
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono font-bold tracking-wider text-blue-400 print:text-white dark:text-black border-b border-slate-300/10 dark:border-white/10 pb-1 mb-3">
              Education
            </h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white print:text-white dark:text-black">{edu.degree}</div>
                  <div className="text-slate-900/50 dark:text-white/50 print:text-gray-700">{edu.institution}</div>
                </div>
                <div className="font-mono text-blue-400 print:text-gray-600 mt-1 sm:mt-0">{edu.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-black/40 border-t border-slate-300/10 dark:border-white/10 flex justify-between items-center text-xs">
          <span className="text-slate-900/40 dark:text-white/40 font-mono">Available for discussions</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl font-semibold text-slate-900 dark:text-white bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-300/10 dark:border-white/10 cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
