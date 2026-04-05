import React from 'react';
import { useNavigate } from 'react-router-dom';

const TerminalPanel = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: '01',
      title: 'AI AGENTS',
      desc: 'Deploy intelligent agents to automate daily workflows automatically.',
      action: () => navigate('/agents')
    },
    {
      id: '02',
      title: 'WORKFLOWS',
      desc: 'Create visual, event-driven autonomous pipelines that orchestrate your business.',
      action: () => navigate('/workflows')
    },
    {
      id: '03',
      title: 'VOICE AGENTS',
      desc: 'Intelligent AI voice agents managing 24/7 client inbound & outbound calls.',
      action: () => navigate('/call-agents')
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 pb-32 h-full flex flex-col justify-end z-20 pb-2">
      
      <div className="flex justify-between items-end mb-12 border-b-2 pb-4">
        <h2 className="text-3xl md:text-4xl font-bold uppercase ndot-text glitch-hover" style={{ color: 'var(--text-color)' }}>
          OUR SERVICES
        </h2>
        <span className="hidden md:inline-block font-bold mono-text opacity-50 uppercase text-xs" style={{ color: 'var(--text-color)' }}>
          MENU
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
        {services.map((service) => (
          <div key={service.id} className="border-[3px] backdrop-blur-md relative flex flex-col group overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,0.8)] min-h-[300px]" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--container-bg)', color: 'var(--text-color)' }}>
            
            {/* Header */}
            <div className="border-b-[3px] px-3 py-2 flex justify-between items-center opacity-80" style={{ borderColor: 'var(--text-color)', backgroundColor: 'var(--btn-bg)' }}>
               <div className="flex gap-2">
                 <div className="w-2 h-2 border bg-white" style={{ borderColor: 'var(--text-color)' }} />
                 <div className="w-2 h-2 border bg-white" style={{ borderColor: 'var(--text-color)' }} />
               </div>
               <span className="font-bold text-[10px] mono-text opacity-70">STEP: {service.id}</span>
            </div>

            {/* Content Core - restored vertical flex */}
            <div className="p-6 md:p-8 flex-1 flex flex-col relative z-20 justify-between">
               
               <div>
                 <h3 className="text-2xl uppercase mb-4 ndot-text pt-2 relative">
                   <span className="absolute -left-3 md:-left-4 top-2 bottom-2 w-1 transition-all duration-300 bg-transparent group-hover:bg-red-500" style={{ backgroundColor: 'var(--glitch-red)', width: '3px', opacity: 0 }} />
                   {service.title}
                 </h3>
                 
                 <p className="text-sm leading-relaxed mono-text opacity-80 uppercase font-bold mt-4">
                   {service.desc}
                 </p>
               </div>
               
               <div className="mt-8 relative z-10 pt-4 border-t-2 border-dashed" style={{ borderColor: 'var(--text-muted)' }}>
                  <button onClick={service.action} className="retro-btn glitch-hover w-full py-4 text-xs relative group/btn" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', border: 'none' }}>
                    <span className="flex items-center justify-between px-2">
                       <span>EXPLORE</span>
                       <span className="group-hover/btn:translate-x-1 md:group-hover/btn:translate-x-2 transition-transform duration-300">-&gt;</span>
                    </span>
                  </button>
               </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TerminalPanel;
