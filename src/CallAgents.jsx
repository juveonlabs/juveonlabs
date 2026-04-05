import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import AudioScanner from './components/AudioScanner';
import { useNavigate } from 'react-router-dom';

const FeatureBlock = ({ title, description, index }) => (
  <div className="border border-black/10 p-6 transition-all hover:bg-black/5 bg-white/60 backdrop-blur-md relative overflow-hidden group">
    <div className="border-b border-black/10 mb-4 pb-4 flex justify-between items-end relative z-10">
      <h3 className="text-xl ndot-text uppercase">{title}</h3>
      <span className="text-[10px] font-bold opacity-40">STEP {index}</span>
    </div>
    <p className="text-sm font-medium opacity-70 uppercase leading-relaxed mono-text relative z-10">{description}</p>
    <div className="absolute left-0 bottom-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: 'var(--glitch-red)' }} />
  </div>
);

export default function CallAgents() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-grid min-h-screen flex flex-col font-display selection:bg-red-500 selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16 flex-1 w-full flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Sidebar Header & Graphic */}
        <div className="lg:w-1/3 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <button 
            onClick={() => navigate('/')}
            className="retro-btn self-start"
          >
             <span className="mr-2">&lt;</span> BACK TO MAIN
          </button>
          
          <div className="w-full max-w-[320px]">
            <AudioScanner />
          </div>
          
          <div>
            <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">VOICE AGENTS<span className="animate-pulse opacity-50">_</span></h1>
            <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>AUTONOMOUS COMMS</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          <div className="border-l-2 border-red-500 pl-4 mb-10" style={{ borderColor: 'var(--glitch-red)' }}>
            <h2 className="text-3xl uppercase mb-4 leading-tight ndot-text mt-2">
              Conversations that <br/> 
              <span style={{ color: 'var(--glitch-red)' }}>NEVER SLEEP.</span>
            </h2>
            <p className="text-lg mono-text uppercase leading-relaxed font-bold">
              Handle inbound and outbound calls with intelligent voice agents that manage customer interactions, qualify leads, and route conversations—24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <FeatureBlock 
              index="01"
              title="Inbound/Outbound"
              description="Dynamically dial out to leads instantly or take high-volume inbound service calls. Never miss an opportunity."
            />
            <FeatureBlock 
              index="02"
              title="Lead Qualification"
              description="Voice AI naturally converses with prospects to gather data, schedule appointments, and push qualified leads."
            />
            <FeatureBlock 
              index="03"
              title="Advanced Routing"
              description="When situations get overly complex, the AI instantly bridges the call to a human operator."
            />
          </div>

          <div className="border border-black/10 p-8 text-center bg-white/40 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-150" style={{ backgroundColor: 'var(--glitch-red)', opacity: 0.1 }} />
            <h3 className="text-2xl uppercase mb-6 ndot-text">
               Replace rigid phone trees with seamless AI.
            </h3>
            <a
              href="https://calendly.com/juveonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn inline-block text-white bg-black border-none"
            >
              BUILD_VOICE_AGENT.EXE
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
