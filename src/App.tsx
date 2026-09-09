/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { RecentEngineering } from './components/RecentEngineering';
import { WhatIDo } from './components/WhatIDo';
import { EngineeringApproach } from './components/EngineeringApproach';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0B] text-slate-900 dark:text-white selection:bg-blue-600 selection:text-white dark:selection:text-slate-900 flex flex-col font-sans relative overflow-x-hidden">
      {/* Background ambient lighting effects for Immersive Theme */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-blue-900/15 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] -right-[15%] w-[45%] h-[45%] bg-purple-900/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-blue-800/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-immersive-grid opacity-60" />
      </div>

      {/* Top sticky navigation */}
      <Navbar onOpenResume={handleOpenResume} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ArchitectureVisualizer />
        <RecentEngineering />
        <WhatIDo />
        <EngineeringApproach />
        <WhyWorkWithMe />
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Interactive Resume View & PDF Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
