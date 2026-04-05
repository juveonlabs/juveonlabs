import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] px-4 py-2 md:px-5 md:py-3 border-[3px] border-[#111] bg-white text-[#111] font-bold mono-text uppercase text-[10px] md:text-xs shadow-[4px_4px_0_rgba(17,17,17,1)] hover:bg-[#111] hover:text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_rgba(17,17,17,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 group"
      aria-label="Back to top"
    >
      <span className="hidden md:inline">SYSTEM.</span>TOP <span className="group-hover:-translate-y-1 transition-transform">[ ^ ]</span>
    </button>
  );
}
