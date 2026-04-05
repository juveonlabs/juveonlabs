import React, { useState, useEffect } from 'react';

const CoreScanner = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev);
    }, 2000); // Pulse every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-square bg-[#050505] p-6 lg:p-8 flex items-center justify-center relative overflow-hidden group border-[3px] border-[#111]">
      
      {/* Heavy Grain Texture Map */}
      <div className="absolute inset-0 pointer-events-none z-50 mix-blend-screen opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ 
        backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px), linear-gradient(-45deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '20px 20px' 
      }} />

      {/* Inner Radar Pulses */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[80%] h-[80%] rounded-full border border-white/5 absolute animate-ping-slow"></div>
        <div className="w-[50%] h-[50%] rounded-full border border-white/5 absolute animate-ping-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Rotating Abstract Core */}
      <div className="relative w-[70%] h-[70%] flex items-center justify-center z-10">
        
        {/* Outer Ring - Spins Right */}
        <div className="absolute inset-0 border border-white/20 border-t-white/80 rounded-full animate-spin-right group-hover:border-t-[#ff3333] transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
        
        {/* Middle Diamond - Spins Left */}
        <div className="absolute w-[80%] h-[80%] border border-white/20 flex items-center justify-center animate-spin-left group-hover:border-[#ff3333]/50 transition-colors"></div>

        {/* Inner Box - Counter Pulsing */}
        <div className={`absolute w-[50%] h-[50%] border-2 flex items-center justify-center transition-all duration-700 ease-in-out ${active ? 'scale-110 border-white/50 rotate-45' : 'scale-90 border-white/20 -rotate-45'}`}>
             <div className="w-[40%] h-[40%] bg-white group-hover:bg-[#ff3333] shadow-[0_0_15px_#ffffff] group-hover:shadow-[0_0_20px_#ff3333] transition-colors duration-300"></div>
        </div>

      </div>

      {/* Scanner Sweep */}
      <div className="absolute w-full h-1 bg-white/30 z-20 shadow-[0_0_10px_#ffffff] animate-vertical-sweep opacity-50 blur-[1px]"></div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-spin-right {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes custom-spin-left {
          from { transform: rotate(45deg); }
          to { transform: rotate(-315deg); }
        }
        @keyframes vertical-sweep {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-spin-right {
          animation: custom-spin-right 6s linear infinite;
        }
        .animate-spin-left {
          animation: custom-spin-left 8s linear infinite;
        }
        .animate-vertical-sweep {
          animation: vertical-sweep 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}} />

      {/* Label */}
      <div className="absolute right-4 bottom-3 flex flex-col items-end z-20">
         <span className="text-[7px] text-white/50 mono-text font-bold uppercase tracking-widest">ABOUT</span>
         <span className="text-[10px] text-white mono-text font-bold">CORE</span>
         <div className="flex gap-1 mt-1">
            <div className={`w-1 h-3 transition-colors duration-300 ${active ? 'bg-white' : 'bg-white/20'}`}></div>
            <div className={`w-1 h-3 transition-colors duration-300 ${!active ? 'bg-white' : 'bg-white/20'}`}></div>
         </div>
      </div>
    </div>
  );
};

export default CoreScanner;
