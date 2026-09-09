import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, Sun, Moon } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Capabilities', href: '#what-i-do' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Portfolio', href: '#projects' },
    { label: 'Recent Work', href: '#recent-work' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'what-i-do', 'skills', 'experience', 'architecture', 'projects', 'recent-work', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-slate-300/10 dark:border-white/10 shadow-2xl shadow-black/80 py-3'
          : 'bg-white/40 dark:bg-[#0A0A0B]/40 backdrop-blur-md border-b border-slate-300/5 dark:border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Zone (Single clean line) */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-400/40 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform bg-[#12121A]">
              <img
                src={developerInfo.avatarUrl}
                alt={developerInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors italic">
                Mathan V
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Enterprise
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-slate-300/10 dark:border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:bg-slate-900/5 dark:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-900/80 dark:text-white/80 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-300/10 dark:border-white/10 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-blue-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-900/80 dark:text-white/80 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-300/10 dark:border-white/10 hover:border-slate-300/25 dark:border-white/25 hover:text-slate-900 dark:text-white transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>RESUME.PDF</span>
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:text-white bg-slate-900/5 dark:bg-white/5 border border-slate-300/10 dark:border-white/10 rounded-lg text-xs"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-blue-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:text-white bg-slate-900/5 dark:bg-white/5 border border-slate-300/10 dark:border-white/10 rounded-lg text-xs"
              title="Resume"
            >
              <FileText className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:text-white hover:bg-slate-900/10 dark:bg-white/10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-3 border border-slate-300/10 dark:border-white/10 bg-white/95 dark:bg-[#0A0A0B]/95 backdrop-blur-2xl rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500'
                      : 'text-slate-900/70 dark:text-white/70 hover:bg-slate-900/5 dark:bg-white/5 hover:text-slate-900 dark:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-300/10 dark:border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium font-mono text-slate-900/90 dark:text-white/90 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 border border-slate-300/10 dark:border-white/10"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>VIEW RESUME.PDF</span>
                </button>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Mathan V</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
