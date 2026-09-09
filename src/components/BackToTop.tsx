import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/40 border border-blue-400/30 transition-all duration-200 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-3 cursor-pointer"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
