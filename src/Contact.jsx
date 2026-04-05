import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactTerminal from './components/ContactTerminal';
import { useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-grid min-h-screen flex flex-col font-display selection:bg-red-500 selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 flex-1 w-full flex flex-col relative z-10">
        
        <button 
          onClick={() => navigate('/')}
          className="retro-btn self-start mb-12"
        >
           <span className="mr-2">&lt;</span> BACK TO MAIN
        </button>

        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          {/* Left Info Column */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="border-l-2 border-red-500 pl-4" style={{ borderColor: 'var(--glitch-red)' }}>
              <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">CONTACT US<span className="animate-pulse opacity-50">_</span></h1>
              <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>OPEN CHANNEL</p>
            </div>

            <p className="font-bold uppercase opacity-70 text-sm mono-text leading-relaxed">
              Have a project in mind? Want to explore how AI automation can remove bottlenecks from your business? Reach out to us directly or book a call.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-6 mt-4">
              <div className="border border-black/10 p-5 bg-white/60 backdrop-blur-md relative overflow-hidden group">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="opacity-50" />
                  <div>
                    <p className="text-[10px] mono-text uppercase font-bold opacity-50 mb-1">EMAIL</p>
                    <a href="mailto:juveonlabs@gmail.com" className="text-sm font-bold mono-text uppercase hover:text-red-500 transition-colors" style={{ color: 'var(--glitch-red)' }}>
                      juveonlabs@gmail.com
                    </a>
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="border border-black/10 p-5 bg-white/60 backdrop-blur-md relative overflow-hidden group">
                <div className="flex items-center gap-3">
                  <Instagram size={16} className="opacity-50" />
                  <div>
                    <p className="text-[10px] mono-text uppercase font-bold opacity-50 mb-1">INSTAGRAM</p>
                    <a href="https://www.instagram.com/juveonlabs/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold mono-text uppercase hover:text-red-500 transition-colors">
                      @juveonlabs
                    </a>
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="border border-black/10 p-5 bg-white/60 backdrop-blur-md relative overflow-hidden group">
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="opacity-50" />
                  <div>
                    <p className="text-[10px] mono-text uppercase font-bold opacity-50 mb-1">LINKEDIN</p>
                    <a href="https://www.linkedin.com/company/juveonlabs/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold mono-text uppercase hover:text-red-500 transition-colors">
                      Juveon Labs
                    </a>
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:w-2/3">
            <ContactTerminal />
          </div>
        </div>

      </div>
    </div>
  );
}
