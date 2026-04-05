import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="border-b border-white/10 relative z-50 glass-panel" style={{ borderColor: 'var(--text-color)' }}>
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10 w-full">
        
        <div className="flex items-center gap-3 cursor-pointer group glitch-hover" onClick={() => navigate('/')}>
          <img src="/Logo.png" alt="Juveon Labs Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl md:text-2xl font-bold ndot-text uppercase">
            Juveon Labs
            <span className="animate-pulse ml-1" style={{ color: 'var(--glitch-red)' }}>_</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-bold mono-text opacity-70">
          <button className="hover:text-red-500 transition-colors uppercase text-xs tracking-widest" onClick={() => navigate('/')}>HOME</button>
          <button className="hover:text-red-500 transition-colors uppercase text-xs tracking-widest" onClick={() => navigate('/about')}>ABOUT</button>
          <button className="hover:text-red-500 transition-colors uppercase text-xs tracking-widest" onClick={() => {
            navigate('/');
            setTimeout(() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}), 100);
          }}>SERVICES</button>
          <a href="https://calendly.com/juveonlabs" target="_blank" rel="noopener noreferrer" className="retro-btn text-xs tracking-widest opacity-100 bg-transparent glitch-hover">
            BOOK A CALL
          </a>
        </div>

        {/* Mobile menu toggle or simple links could go here if needed, but removing dark toggle as requested */}

      </div>
    </nav>
  );
};

export default Navbar;
