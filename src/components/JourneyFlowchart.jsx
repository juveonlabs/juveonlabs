import React from 'react';

const JourneyFlowchart = () => {
  const journeySteps = [
    {
      id: '01',
      title: 'INGEST',
      desc: 'Systematic auditing of manual bottlenecks and data silos.',
      status: 'OK'
    },
    {
      id: '02',
      title: 'LOGIC',
      desc: 'Designing autonomous workflows and custom AI decision trees.',
      status: 'PROCESSING'
    },
    {
      id: '03',
      title: 'DEPLOY',
      desc: 'Injecting specialized AI Agents directly into the environment.',
      status: 'PENDING'
    },
    {
      id: '04',
      title: 'SCALE',
      desc: '24/7 autonomous continuous operation. Zero downtime.',
      status: 'PLANNING'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-20 overflow-hidden">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 pb-4 border-[#111]">
        <h2 className="text-3xl md:text-5xl font-bold uppercase ndot-text glitch-hover text-[#111] leading-none mb-2 md:mb-0">
          WHAT WE DO
        </h2>
        <span className="font-bold mono-text opacity-50 uppercase text-xs text-[#111]">
          OUR PROCESS
        </span>
      </div>

      {/* Flowchart Track Wrapper */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-stretch md:items-center gap-8 md:gap-0 mt-12 py-8">
        
        {/* Horizontal Wiring (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#111]/20 -translate-y-1/2 z-0">
           {/* Animated Data Packets Travelling */}
           <div className="absolute top-0 bottom-0 left-0 bg-[#ff3333] shadow-[0_0_15px_#ff3333] w-12 animate-[data-flow_3s_linear_infinite]"></div>
           <div className="absolute top-0 bottom-0 left-0 bg-[#ff3333] shadow-[0_0_15px_#ff3333] w-6 animate-[data-flow_3s_linear_infinite] delay-[1.5s]"></div>
        </div>

        {/* Vertical Wiring (Mobile only) */}
        <div className="block md:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-[#111]/20 z-0">
           <div className="absolute right-0 left-0 top-0 bg-[#ff3333] shadow-[0_0_15px_#ff3333] h-12 animate-[data-flow-y_3s_linear_infinite]"></div>
        </div>

        {journeySteps.map((step, index) => (
          <div key={step.id} className="relative z-10 flex flex-row md:flex-col items-center md:items-center w-full md:w-1/4 group cursor-default">
            
            {/* The Hardware Node (Upgraded to look like dark glowing terminals) */}
            <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-sm border-4 border-[#111] bg-[#050505] shadow-[6px_6px_0_rgba(17,17,17,0.3)] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0_rgba(255,51,51,0.4)] ml-16 md:ml-0 md:mx-auto group-hover:border-[#ff3333]`}>
               
               {/* Inner scanline glass layer */}
               <div className="absolute inset-1 bg-[#111] rounded-sm inner-shadow-sm flex items-center justify-center overflow-hidden" style={{
                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                 backgroundSize: '100% 3px'
               }}>
                  {/* Status LED */}
                  <div className={`absolute top-2 left-2 w-2 h-2 md:w-3 md:h-3 rounded-full border border-white/20 ${index === 0 ? 'bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse' : 'bg-[#ff3333] shadow-[0_0_10px_#ea3323]'}`}></div>
                  
                  {/* Glowing Number */}
                  <span className="text-5xl md:text-6xl font-bold ndot-text text-[#f4f4f5] opacity-50 group-hover:opacity-100 group-hover:text-[#ff3333] transition-all duration-300" style={{ textShadow: '0 0 15px currentColor' }}>
                    {step.id}
                  </span>
               </div>
            </div>

            {/* Mobile Connector Line connecting node to vertical wire */}
            <div className="block md:hidden absolute left-8 top-12 h-[2px] bg-[#111] w-8 z-0"></div>

            {/* Information Block */}
            <div className="mt-0 md:mt-8 ml-6 md:ml-0 flex-1 md:text-center text-left transition-all duration-300 group-hover:translate-y-2">
               <div className="bg-[#111] text-[#f7f7f7] inline-block px-3 py-1 mb-3">
                 <h3 className="font-bold uppercase text-sm mono-text tracking-widest">{step.title}</h3>
               </div>
               <p className="text-xs font-bold mono-text opacity-70 leading-relaxed max-w-[200px] md:mx-auto">
                 {step.desc}
               </p>
               <div className="mt-3 text-[9px] mono-text opacity-40 uppercase tracking-widest">
                 [{step.status}]
               </div>
            </div>

          </div>
        ))}

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes data-flow {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes data-flow-y {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />

    </div>
  );
};

export default JourneyFlowchart;
