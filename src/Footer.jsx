import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-[#f4f4f5] relative z-20 border-t-4 py-16" style={{ borderColor: 'var(--text-color)' }}>
      
      {/* Absolute Noise Layer for Footer */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-screen" />
      
      {/* Subtle Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-overlay" style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 0.1) 50%)`,
        backgroundSize: `100% 4px`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-20">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-4 group">
            <img src="/lOGO.png" alt="Juveon Labs Logo" className="w-8 h-8 object-contain" />
            <span className="text-3xl font-bold uppercase ndot-text tracking-widest">
              <span className="text-[#ff3333]">JU</span>VEON LABS
            </span>
          </Link>
          <p className="opacity-60 text-sm max-w-sm mb-6 mono-text uppercase font-bold leading-relaxed">
            Automating bottlenecks out of existence with specialized AI Agents, structured logical workflows, and autonomous voice pipelines.
          </p>
          <div className="text-[10px] mono-text uppercase border border-[#333] px-3 py-1 inline-block opacity-50 font-bold bg-[#111]">
            2026
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-md font-bold uppercase mb-6 ndot-text tracking-widest text-[#ff3333]">
            QUICK LINKS
          </h4>
          <ul className="space-y-4 opacity-70 mono-text uppercase font-bold text-xs">
            <li>
              <Link to="/about" className="hover:text-white transition-colors flex items-center group">
                <span className="w-2 h-0.5 bg-[#ff3333] mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors flex items-center group">
                <span className="w-2 h-0.5 bg-[#ff3333] mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Action Column (Top Right) */}
        <div>
           <div className="flex justify-between items-start mb-6">
             <h4 className="text-md font-bold uppercase ndot-text tracking-widest text-[#ff3333]">
              SITE STATUS
             </h4>
             <div className="flex gap-4 opacity-70">
               <a href="https://www.instagram.com/juveonlabs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3333] hover:opacity-100 transition-colors" aria-label="Instagram">
                 <Instagram size={18} />
               </a>
               <a href="https://www.linkedin.com/company/juveonlabs/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff3333] hover:opacity-100 transition-colors" aria-label="LinkedIn">
                 <Linkedin size={18} />
               </a>
             </div>
           </div>
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3 opacity-70">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-xs uppercase mono-text font-bold">ALL SYSTEMS NOMINAL</span>
             </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
        <p className="opacity-50 text-[10px] uppercase font-bold mono-text tracking-widest">
          © {new Date().getFullYear()} JUVEON LABS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 opacity-50 text-[10px] uppercase font-bold mono-text tracking-widest items-center">
           <Link to="/privacy" className="hover:opacity-100 transition-opacity hover:text-[#ff3333]">Privacy Policy</Link>
           <Link to="/terms" className="hover:opacity-100 transition-opacity hover:text-[#ff3333]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
