import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import NetworkScanner from './components/NetworkScanner';
import { useNavigate } from 'react-router-dom';

const FlowBox = ({ step, title, description }) => (
  <div className="border border-black/10 p-6 transition-all hover:bg-black/5 bg-white/60 backdrop-blur-md relative overflow-hidden flex-1 w-full group">
    <div className="absolute top-0 left-0 bg-red-500 text-white font-bold px-2 py-0.5 text-[10px] uppercase tracking-widest z-20" style={{ backgroundColor: 'var(--glitch-red)' }}>
      {step}
    </div>
    <div className="border-b border-black/10 mb-4 pb-4 mt-2 relative z-10">
      <h3 className="text-xl ndot-text uppercase">{title}</h3>
    </div>
    <p className="text-sm font-medium opacity-70 uppercase leading-relaxed mono-text relative z-10">{description}</p>
    <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
  </div>
);

const Connector = ({ vertical = false }) => (
  <div className={`flex items-center justify-center font-bold text-2xl opacity-30 ${vertical ? 'py-4' : 'px-6'}`}>
    <span className="mono-text">{vertical ? 'V' : '>'}</span>
  </div>
);

export default function Workflows() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
            <NetworkScanner />
          </div>
          
          <div>
            <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">WORKFLOWS<span className="animate-pulse opacity-50">_</span></h1>
            <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>INFRASTRUCTURE</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          <div className="border-l-2 border-red-500 pl-4 mb-12" style={{ borderColor: 'var(--glitch-red)' }}>
            <p className="text-lg mono-text uppercase leading-relaxed font-bold mt-2">
              We replace manual multi-step tasks with event-driven, autonomous pipelines that intelligently route data exactly where it needs to go.
            </p>
          </div>

          <h3 className="text-xs tracking-widest uppercase font-bold opacity-40 mb-6 mono-text">
            EXECUTION SEQUENCE
          </h3>

          {/* Desktop Horizontal Layout */}
          <div className="hidden lg:flex items-center justify-center w-full mb-16">
            <FlowBox 
              step="STATE_01"
              title="Trigger Event" 
              description="A new lead is captured via website or CRM." 
            />
            <Connector />
            <FlowBox 
              step="STATE_02"
              title="Processing" 
              description="LLMs qualify the lead and categorize data." 
            />
            <Connector />
            <FlowBox 
              step="STATE_03"
              title="Action Taken" 
              description="Alerts sent & email campaigns fired." 
            />
          </div>

          {/* Mobile Vertical Layout */}
          <div className="flex lg:hidden flex-col items-center justify-center w-full mb-16">
            <FlowBox 
              step="STATE_01"
              title="Trigger Event" 
              description="A new lead is captured via website or CRM." 
            />
            <Connector vertical />
            <FlowBox 
              step="STATE_02"
              title="Processing" 
              description="LLMs qualify the lead and categorize data." 
            />
            <Connector vertical />
            <FlowBox 
              step="STATE_03"
              title="Action Taken" 
              description="Alerts sent & email campaigns fired." 
            />
          </div>

          {/* Closing details */}
          <div className="border border-black/10 p-8 text-center bg-white/40 backdrop-blur-md relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-150" style={{ backgroundColor: 'var(--glitch-red)', opacity: 0.1 }} />
             <h4 className="text-2xl uppercase mb-4 ndot-text">Start Building</h4>
             <p className="font-bold opacity-70 mb-8 text-sm uppercase max-w-xl mx-auto leading-relaxed mono-text">
               Discuss how an automated workflow can completely replace manual operational friction.
             </p>
             <a
               href="https://calendly.com/juveonlabs"
               target="_blank"
               rel="noopener noreferrer"
               className="retro-btn inline-block text-white bg-black border-none"
             >
               RUN INSTALLER.BAT
             </a>
          </div>

        </div>

      </div>
    </div>
  );
}
