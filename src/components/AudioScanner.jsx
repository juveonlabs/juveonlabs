import React, { useEffect, useState } from 'react';

const AudioScanner = () => {
  // Generate random heights for eq bars
  const [bars, setBars] = useState(Array.from({ length: 12 }, () => 20));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(Array.from({ length: 12 }, () => 20 + Math.random() * 60));
    }, 150); // fast update for audio reacting effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-square bg-[#050505] p-6 lg:p-8 flex items-center justify-center relative overflow-hidden group border-[3px] border-[#111]">
      
      {/* Heavy Grain Texture Map */}
      <div className="absolute inset-0 pointer-events-none z-50 mix-blend-screen opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }}></div>

      {/* Cross Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] z-0 flex items-center justify-center">
         <div className="w-full h-[1px] bg-white"></div>
         <div className="absolute w-[1px] h-full bg-white"></div>
      </div>

      {/* Main Radial EQ Display */}
      <div className="relative w-[85%] h-[85%] rounded-full border border-white/10 flex items-center justify-center z-10 box-border">
         
         {/* Static inner ring */}
         <div className="absolute w-[60%] h-[60%] border border-white/20 rounded-full border-dashed group-hover:border-[#ff3333]/50 transition-colors"></div>
         
         {/* Center Pulse Core */}
         <div className="absolute w-4 h-4 bg-white rounded-full z-20 shadow-[0_0_15px_#ffffff] animate-ping opacity-20"></div>
         <div className="absolute w-3 h-3 bg-white rounded-full z-20 group-hover:bg-[#ff3333] transition-colors shadow-[0_0_10px_#ffffff] group-hover:shadow-[0_0_15px_#ff3333]"></div>

         {/* Audio Wave Bars arranged in a circle */}
         <div className="absolute inset-0 w-full h-full">
           {bars.map((height, i) => {
             const angle = (i * 360) / bars.length;
             return (
               <div 
                 key={i} 
                 className="absolute top-1/2 left-1/2 w-1 bg-white/60 box-border transition-all duration-150 origin-bottom group-hover:bg-[#ff3333]"
                 style={{ 
                   height: `${height}%`,
                   transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-40px)`
                 }}
               />
             );
           })}
         </div>
      </div>

      {/* Sweep Ring */}
      <div className="absolute w-[95%] h-[95%] rounded-full z-10 pointer-events-none mix-blend-screen opacity-10 animate-sweep-ring">
         <div className="w-full h-full rounded-full border-[4px] border-transparent border-t-white"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep-ring {
          from { transform: rotate(0deg) scale(0.9); opacity: 0; }
          50% { opacity: 0.3; scale: 1; }
          to { transform: rotate(180deg) scale(1.1); opacity: 0; }
        }
        .animate-sweep-ring {
          animation: sweep-ring 2s linear infinite;
        }
      `}} />

      {/* Label */}
      <div className="absolute right-4 bottom-3 flex flex-col items-end z-20">
         <span className="text-[7px] text-white/50 mono-text font-bold uppercase tracking-widest">AUDIO_TELEMETRY</span>
         <span className="text-[10px] text-white mono-text font-bold">LISTENING</span>
      </div>

    </div>
  );
};

export default AudioScanner;
