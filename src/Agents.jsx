import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import LogicScanner from './components/LogicScanner';
import { useNavigate } from 'react-router-dom';

const AgentCard = ({ title, description, index }) => (
  <div className="border border-black/10 p-6 transition-all hover:-translate-y-1 hover:shadow-xl bg-white/60 backdrop-blur-md relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-[length:4px_4px] bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 1px)' }} />
    <div className="border-b border-black/10 mb-4 pb-4 flex justify-between items-end relative z-10">
      <h4 className="text-xl ndot-text uppercase">{title}</h4>
    </div>
    <p className="text-sm font-medium opacity-70 uppercase leading-relaxed mono-text relative z-10">{description}</p>
    <div className="mt-8 flex gap-2 relative z-10">
      <span className="text-[10px] font-bold px-2 py-1 uppercase border border-black/20 text-black">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-1 animate-pulse" style={{ backgroundColor: 'var(--glitch-red)' }}></span>
        UNIT: {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  </div>
);

export default function Agents() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-grid min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
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
            <LogicScanner />
          </div>
          
          <div>
            <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">AI AGENTS<span className="animate-pulse opacity-50">_</span></h1>
            <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>OPERATIONAL INTELLIGENCE</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          <div className="border-l-2 border-red-500 pl-4 mb-10" style={{ borderColor: 'var(--glitch-red)' }}>
            <p className="font-bold text-xs uppercase opacity-50 mono-text mb-2">C:\AGENTS\DIRECTORY.SYS</p>
            <p className="text-lg mono-text uppercase leading-relaxed font-bold">
              Discover the specialized intelligent systems driving next-generation operational efficiency completely hands-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AgentCard index={0} title="Lead Gen Agent" description="Finds and qualifies leads automatically so your sales team only speaks to real prospects" />
            <AgentCard index={1} title="Automation Agent" description="Removes repetitive manual tasks from your team's daily operations" />
            <AgentCard index={2} title="Onboarding Agent" description="Handles new client intake, data collection, and follow-ups without human effort" />
            <AgentCard index={3} title="Outreach Agent" description="Sends personalised outreach messages across channels at scale" />
            <AgentCard index={4} title="Reporting Agent" description="Pulls data from your tools and generates clean reports automatically" />
          </div>
        </div>
      </div>
    </div>
  );
}
