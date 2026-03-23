import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
      className="fixed bottom-8 right-8 z-[100] p-3.5 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_40px_rgba(147,51,234,0.5)] hover:bg-purple-700 hover:scale-110 active:scale-95 transition-all duration-300 group border border-purple-400/30"
      aria-label="Back to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
    </button>
  );
}
