import React, { useEffect, useState } from 'react';

const LogicScanner = () => {
  const [hexData, setHexData] = useState([]);

  useEffect(() => {
    // Generate random hex dumps for the scrolling data effect
    const generateHex = () => Array.from({length: 40}, () => 
      `0x${Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0')}`
    );
    setHexData(generateHex());
    
    // Update data occasionally to feel dynamic
    const interval = setInterval(() => {
      setHexData(generateHex());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-square bg-[#050505] p-6 lg:p-8 flex items-center justify-center relative overflow-hidden group border-[3px] border-[#111]">
      
      {/* Heavy Grain Texture Map */}
      <div className="absolute inset-0 pointer-events-none z-50 mix-blend-screen opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
      }}></div>

      {/* Micro Targeting Grid */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ 
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '16px 16px' 
      }} />

      {/* Dynamic Targeting Brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/30 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-700 z-10"></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/30 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-700 z-10"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700 z-10"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/30 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-700 z-10"></div>

      {/* Main Radar Aperture */}
      <div className="w-[85%] h-[85%] border border-white/10 rounded-full relative flex items-center justify-center z-10 box-border">
        
        {/* Concentric Tracking Rings */}
        <div className="absolute w-[75%] h-[75%] border border-white/10 rounded-full z-10 box-border border-dashed opacity-50"></div>
        <div className="absolute w-[45%] h-[45%] border border-white/5 rounded-full z-10 box-border"></div>
        
        {/* Core Node */}
        <div className="absolute w-2 h-2 bg-white rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.7)] group-hover:bg-[#ff3333] group-hover:shadow-[0_0_15px_#ff3333] transition-colors"></div>
        
        {/* Axis Crosshairs */}
        <div className="absolute w-[120%] h-[1px] bg-white/10 z-10 group-hover:rotate-45 transition-transform duration-1000 ease-in-out"></div>
        <div className="absolute w-[1px] h-[120%] bg-white/10 z-10 group-hover:rotate-45 transition-transform duration-1000 ease-in-out"></div>
        
        {/* Sweeping Scanner Sensor (Conic Gradient) */}
        <div 
          className="absolute inset-0 rounded-full z-0 opacity-50 mix-blend-screen animate-radar-spin" 
          style={{ 
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.05) 80%, rgba(255,255,255,0.8) 100%)' 
          }}
        ></div>
        
        {/* Sharp Leading Edge of Scanner */}
        <div className="absolute top-0 right-[50%] w-[1px] h-[50%] bg-white/90 shadow-[0_0_5px_rgba(255,255,255,0.5)] origin-bottom animate-radar-spin z-10"></div>
      </div>

      {/* Infinite Scrolling Micro Hex Data */}
      <div className="absolute left-3 top-0 h-full w-[40px] overflow-hidden opacity-[0.20] pointer-events-none z-10 flex flex-col justify-center">
        <div className="animate-data-scroll font-mono text-[8px] leading-[14px] text-white tracking-widest whitespace-nowrap">
          {hexData.map((hex, i) => (
             <div key={i}>{hex}</div>
          ))}
          {/* Duplicate set for infinite scroll optical illusion */}
          {hexData.map((hex, i) => (
             <div key={`dup-${i}`}>{hex}</div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 4s linear infinite;
        }
        @keyframes data-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-data-scroll {
          animation: data-scroll 15s linear infinite;
        }
      `}} />
      
      {/* UI Readout Panel */}
      <div className="absolute bottom-3 right-4 flex flex-col items-end z-20">
         <span className="text-[7px] text-white/50 mono-text font-bold uppercase tracking-widest mb-1">SENSOR :: ACTIVE</span>
         <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-white/30 rounded-sm animate-pulse" style={{ animationDuration: '0.4s' }}></div>
            <div className="w-1.5 h-1.5 bg-white/30 rounded-sm animate-pulse" style={{ animationDuration: '0.6s' }}></div>
            <div className="w-1.5 h-1.5 bg-white/80 rounded-sm animate-pulse" style={{ animationDuration: '0.8s' }}></div>
         </div>
      </div>

    </div>
  );
};

export default LogicScanner;
