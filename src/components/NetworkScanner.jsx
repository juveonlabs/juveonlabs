import React, { useEffect, useState } from 'react';

const NetworkScanner = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-square bg-[#050505] p-6 lg:p-8 flex items-center justify-center relative overflow-hidden group border-[3px] border-[#111]">
      
      {/* Heavy Grain Texture Map */}
      <div className="absolute inset-0 pointer-events-none z-50 mix-blend-screen opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] z-0" style={{ 
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '20px 20px' 
      }} />

      {/* Logic Network */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
         
         {/* Top Node */}
         <div className={`absolute top-[15%] left-[50%] -translate-x-1/2 w-8 h-8 flex items-center justify-center transition-all duration-300 ${pulse ? 'scale-110' : 'scale-100'}`}>
            <div className="w-full h-full border-2 border-white/40 rotate-45 flex items-center justify-center group-hover:border-[#ff3333] transition-colors">
               <div className={`w-2 h-2 bg-white group-hover:bg-[#ff3333] ${pulse ? 'opacity-100 shadow-[0_0_15px_#ffffff] group-hover:shadow-[0_0_15px_#ff3333]' : 'opacity-30'}`}></div>
            </div>
         </div>

         {/* Bottom Left Node */}
         <div className="absolute bottom-[20%] left-[20%] w-6 h-6 border-2 border-white/20 flex items-center justify-center group-hover:border-[#ff3333]">
           <div className={`w-1.5 h-1.5 bg-white transition-opacity ${!pulse ? 'opacity-100 shadow-[0_0_10px_#ffffff]' : 'opacity-20'}`}></div>
         </div>

         {/* Bottom Right Node */}
         <div className="absolute bottom-[20%] right-[20%] w-6 h-6 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-[#ff3333]">
           <div className={`w-1.5 h-1.5 rounded-full bg-white transition-opacity ${!pulse ? 'opacity-100 shadow-[0_0_10px_#ffffff]' : 'opacity-20'}`}></div>
         </div>

         {/* Connection Lines */}
         <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="50" y1="28" x2="28" y2="70" stroke="white" strokeWidth="1" strokeDasharray="2,2" className="animate-pulse" />
            <line x1="50" y1="28" x2="72" y2="70" stroke="white" strokeWidth="1" strokeDasharray="2,2" className="animate-pulse" />
            <line x1="28" y1="70" x2="72" y2="70" stroke="white" strokeWidth="1" />
         </svg>

         {/* Roaming Data Packet */}
         <div className="absolute w-2 h-2 bg-white rounded-full z-20 shadow-[0_0_8px_#ffffff] animate-packet-roam opacity-90 group-hover:bg-[#ff3333] group-hover:shadow-[0_0_10px_#ff3333]"></div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes packet-roam {
          0% { top: 28%; left: 50%; transform: translate(-50%, -50%); }
          33% { top: 70%; left: 28%; transform: translate(-50%, -50%); }
          66% { top: 70%; left: 72%; transform: translate(-50%, -50%); }
          100% { top: 28%; left: 50%; transform: translate(-50%, -50%); }
        }
        .animate-packet-roam {
          animation: packet-roam 4s linear infinite;
        }
      `}} />

      {/* Label */}
      <div className="absolute left-4 bottom-3 flex flex-col z-20">
         <span className="text-[7px] text-white/50 mono-text font-bold uppercase tracking-widest">NETWORK_GRAPH</span>
         <span className="text-[10px] text-white mono-text font-bold">ROUTING</span>
      </div>

    </div>
  );
};

export default NetworkScanner;
