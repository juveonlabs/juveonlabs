import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import CoreScanner from './components/CoreScanner';
import { useNavigate } from 'react-router-dom';

const RetroImagePlaceholder = ({ label, imgSrc }) => (
  <div className="border border-black/10 p-2 bg-white/60 backdrop-blur-md transition-colors w-full flex flex-col group relative overflow-hidden">
    <div className="border-b border-black/10 mb-2 font-bold uppercase text-[10px] pb-1 mono-text opacity-50 relative z-10">
      {label} //
    </div>
    <div className="flex-1 w-full relative overflow-hidden bg-transparent z-10 flex items-center justify-center">
      {imgSrc ? (
        <img src={imgSrc} alt={label} className="w-full aspect-square object-cover object-top grayscale contrast-[1.1] transition-transform duration-700 group-hover:scale-[1.02]" />
      ) : (
        <div className="w-full aspect-square flex items-center justify-center font-bold text-xs uppercase opacity-30 mono-text">
          _NO_SIGNAL
        </div>
      )}
    </div>
  </div>
);

export default function About() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-grid min-h-screen flex flex-col font-display selection:bg-red-500 selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 flex-1 w-full flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Sidebar */}
        <div className="lg:w-1/3 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <button 
            onClick={() => navigate('/')}
            className="retro-btn self-start"
          >
             <span className="mr-2">&lt;</span> BACK TO MAIN
          </button>
          
          <div className="w-full max-w-[320px]">
             <CoreScanner />
          </div>

          <div>
             <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">ABOUT US<span className="animate-pulse opacity-50">_</span></h1>
             <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>COMPANY OVERVIEW</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          <div className="border-l-2 border-red-500 pl-4 mb-12" style={{ borderColor: 'var(--glitch-red)' }}>
            <h2 className="text-3xl uppercase mb-4 leading-tight ndot-text mt-2">
               Built to elevate <br/>
               <span style={{ color: 'var(--glitch-red)' }}>HUMAN POTENTIAL.</span>
            </h2>
            <p className="text-lg mono-text uppercase leading-relaxed font-bold">
              At Juveon Labs, we believe that efficiency is not about doing more it's about doing what matters. We design context aware, automations systems that streamline the most complex aspects of your business, so your team can focus on high impact work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="border border-black/10 p-6 bg-white/60 backdrop-blur-md relative overflow-hidden group">
               <div className="border-b border-black/10 mb-4 pb-4">
                 <h3 className="text-xl ndot-text uppercase">Radical Efficiency</h3>
               </div>
               <p className="text-sm font-medium uppercase opacity-70 leading-relaxed mono-text">We hunt down operational friction and eliminate it through intelligent automation.</p>
               <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
            </div>
            
            <div className="border border-black/10 p-6 bg-white/60 backdrop-blur-md relative overflow-hidden group">
               <div className="border-b border-black/10 mb-4 pb-4">
                 <h3 className="text-xl ndot-text uppercase">Custom Built</h3>
               </div>
               <p className="text-sm font-medium uppercase opacity-70 leading-relaxed mono-text">No generic templates. Every agent is trained precisely on your data and workflows.</p>
               <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-10 mt-16 pt-10 border-t border-black/10">
            <h3 className="text-2xl uppercase font-bold opacity-80 ndot-text mb-2">
              THE TEAM
            </h3>
            <p className="font-bold uppercase opacity-50 text-sm mono-text">
              The engineers and strategists building the future of autonomous operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <RetroImagePlaceholder label="JAMES" imgSrc="/james.jpeg" />
              <div className="mt-4 text-center border-b-[2px] border-black px-2 pb-1">
                <h4 className="font-bold uppercase text-[10px] tracking-widest mono-text">James Prabhakar</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <RetroImagePlaceholder label="UTTEJ" imgSrc="/uttej.jpeg" />
              <div className="mt-4 text-center border-b-[2px] border-black px-2 pb-1">
                <h4 className="font-bold uppercase text-[10px] tracking-widest mono-text">Uttej Kumar</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <RetroImagePlaceholder label="VIGNAN" imgSrc="/Vig.PNG" />
              <div className="mt-4 text-center border-b-[2px] border-black px-2 pb-1">
                <h4 className="font-bold uppercase text-[10px] tracking-widest mono-text">Vignan Thumma</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
