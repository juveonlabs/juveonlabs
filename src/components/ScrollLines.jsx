import React, { useState, useEffect } from 'react';

const ScrollLines = () => {
  const [scrollY, setScrollY] = useState(0);
  const [pageHeight, setPageHeight] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setPageHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const progress = pageHeight > 0 ? scrollY / pageHeight : 0;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      
      {/* Left vertical progress rail */}
      <div className="absolute left-6 top-0 w-[1px] h-full bg-black/[0.04]">
        {/* Moving tracker dot */}
        <div 
          className="absolute left-[-3px] w-[7px] h-[7px] bg-[#ff3333] transition-transform duration-100 ease-out"
          style={{ top: `${progress * 100}%` }}
        />
        {/* Progress fill */}
        <div 
          className="absolute top-0 left-0 w-full bg-black/[0.08] origin-top transition-transform duration-100 ease-out"
          style={{ height: '100%', transform: `scaleY(${progress})` }}
        />
      </div>

      {/* Right vertical progress rail */}
      <div className="absolute right-6 top-0 w-[1px] h-full bg-black/[0.04]">
        <div 
          className="absolute right-[-3px] w-[7px] h-[7px] bg-[#ff3333] transition-transform duration-100 ease-out"
          style={{ top: `${progress * 100}%` }}
        />
        <div 
          className="absolute top-0 left-0 w-full bg-black/[0.08] origin-top transition-transform duration-100 ease-out"
          style={{ height: '100%', transform: `scaleY(${progress})` }}
        />
      </div>

      {/* Horizontal sweep line that follows scroll */}
      <div 
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent transition-all duration-200 ease-out"
        style={{ top: `${30 + progress * 40}%` }}
      />

      {/* Floating cross markers at intervals */}
      {[0.15, 0.35, 0.55, 0.75, 0.95].map((pos, i) => {
        const isActive = progress >= pos - 0.05;
        return (
          <div 
            key={i}
            className={`absolute left-6 w-2 h-2 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ top: `${pos * 100}%`, transform: `translateX(-3px)` }}
          >
            <div className="w-full h-[1px] bg-[#ff3333] absolute top-1/2" />
            <div className="h-full w-[1px] bg-[#ff3333] absolute left-1/2" />
          </div>
        );
      })}

    </div>
  );
};

export default ScrollLines;
