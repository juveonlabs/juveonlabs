import React, { useState, useEffect } from 'react';

const tvGrainStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  opacity: 0.12,
  mixBlendMode: 'overlay',
};

const CrtMonitorHero = ({ autoPower }) => {
  // powerStatus can be: 'off', 'logo', 'booting', 'active'
  const [powerStatus, setPowerStatus] = useState('off');
  const [hasAutoBooted, setHasAutoBooted] = useState(false);

  useEffect(() => {
    if (autoPower && powerStatus === 'off' && !hasAutoBooted) {
      setHasAutoBooted(true);
      setPowerStatus('logo');
      
      // Sequence: Logo (0.8s) -> Booting (0.8s) -> Active
      setTimeout(() => {
        setPowerStatus('booting');
        setTimeout(() => {
          setPowerStatus('active');
        }, 800);
      }, 800);
    }
  }, [autoPower, powerStatus, hasAutoBooted]);

  const handlePowerClick = () => {
    if (powerStatus === 'active') {
      setPowerStatus('off');
    } else {
      setPowerStatus('logo');
      
      // Sequence: Logo (0.8s) -> Booting (0.8s) -> Active
      setTimeout(() => {
        setPowerStatus('booting');
        setTimeout(() => {
          setPowerStatus('active');
        }, 800);
      }, 800);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-12 relative aspect-square max-h-[90vh]">
      
      {/* 1980s Beige Plastic Shell */}
      <div 
        className="w-full h-full rounded-[24px] md:rounded-[40px] p-4 md:p-8 lg:p-12 shadow-2xl relative flex flex-col group overflow-hidden" 
        style={{
          background: 'linear-gradient(135deg, #e8e6df 0%, #cdc9ba 100%)',
          boxShadow: `
            inset 2px 2px 5px rgba(255,255,255,0.8),
            inset -4px -4px 10px rgba(0,0,0,0.15),
            0 25px 50px -12px rgba(0,0,0,0.5),
            inset 0 0 0 1px #a39f91
          `
        }}
      >
        
        {/* Physical Brand Plate */}
        <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] uppercase font-bold mono-text opacity-40 tracking-[0.2em]" style={{ color: '#000', textShadow: '1px 1px 0px rgba(255,255,255,0.6)' }}>
           JUVEON LABS // AUTHENTIC
        </div>

        {/* Deep Inset Screen Frame */}
        <div className="w-full flex-1 rounded-[16px] md:rounded-[30px] p-2 md:p-3 min-h-0" style={{ 
            background: 'linear-gradient(to bottom, #111, #333)',
            boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.8), 0 2px 0 rgba(255,255,255,0.4)' 
        }}>
          
          {/* Inner Glowing Screen Array */}
          <div className="relative w-full h-full overflow-hidden rounded-[14px] md:rounded-[26px] crt-flicker flex flex-col items-center justify-center" style={{ backgroundColor: '#050505' }}>
            
            {/* Extremely Grainy TV Screen Surface */}
            <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 ${powerStatus === 'off' ? 'opacity-0' : 'opacity-100'}`} style={tvGrainStyle}></div>

            {/* Subtle Scanlines */}
            <div className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 ${powerStatus === 'off' ? 'opacity-0' : 'opacity-30'}`} style={{ 
              background: `linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 50%)`,
              backgroundSize: `100% 4px`
            }}></div>
            
            {/* Screen Content Layers */}
            <div className="relative z-20 w-full p-6 md:p-10 flex flex-col justify-center h-full items-center text-center">
              
              {/* OFF State */}
              {powerStatus === 'off' && (
                <div className="opacity-0 transition-opacity duration-300">
                  {/* COMPLETELY BLACK */}
                </div>
              )}

              {/* LOGO State */}
              {powerStatus === 'logo' && (
                <div className="animate-pulse">
                  <h2 className="text-2xl md:text-4xl font-bold ndot-text uppercase tracking-widest text-[#f4f4f5]" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                    JUVEON LABS
                  </h2>
                </div>
              )}

              {/* BOOTING State */}
              {powerStatus === 'booting' && (
                 <div className="flex flex-col items-start w-full max-w-xs">
                    <p className="text-[10px] md:text-sm mono-text uppercase text-[#f4f4f5] animate-bounce">
                      &gt; SYSTEM STARTING...
                    </p>
                    <p className="text-[10px] md:text-sm mono-text uppercase text-[#f4f4f5] mt-2">
                       &gt; ALL SYSTEMS NOMINAL
                    </p>
                    <div className="w-full h-1 bg-white/20 mt-4 overflow-hidden relative">
                       <div className="absolute inset-0 bg-[#ff3333] animate-[loading-bar_0.8s_linear_infinite]" style={{ width: '30%' }}></div>
                    </div>
                 </div>
              )}

              {/* ACTIVE State */}
              {powerStatus === 'active' && (
                <div className="relative z-20 w-full p-6 md:p-10 flex flex-col justify-center h-full gap-4 text-left" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                  
                  <div className="flex justify-between items-start mb-auto">
                    <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold mono-text opacity-60" style={{ color: '#f4f4f5' }}>
                      SYSTEM: READY<br/>
                      STATUS: ACTIVE
                    </div>
                    <div className="text-[10px] md:text-xs flex items-center uppercase font-bold mono-text px-2 md:px-3 py-1 cursor-pointer bg-black/40 border" style={{ color: '#ff3333', borderColor: '#ff3333' }}>
                      <span className="inline-block w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: '#ff3333', boxShadow: '0 0 8px #ff3333' }}></span>
                      LIVE
                    </div>
                  </div>

                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase leading-[1.05] ndot-text max-w-4xl tracking-tighter my-4 md:my-6" style={{ textShadow: '0px 0px 4px #f4f4f5, 2px 2px 4px rgba(0,0,0,0.8)', color: '#f4f4f5' }}>
                    <span className="block typewriter-text" style={{ animationDelay: '0s' }}>
                      We find what
                    </span>
                    <span className="block typewriter-text" style={{ animationDelay: '0.8s', width: 0 }}>
                      slows your
                    </span>
                    <span className="block typewriter-text" style={{ animationDelay: '1.6s', width: 0 }}>
                      business down.
                    </span>
                  </h1>

                  <p className="text-sm md:text-lg lg:text-xl font-bold uppercase mono-text max-w-2xl bg-black/40 p-1 md:p-2 inline-block shadow-lg mt-2 mb-auto text-white">
                    <span style={{ color: '#ff3333' }}>&gt; </span>
                    Then we automate it.<span className="animate-pulse" style={{ color: '#ff3333' }}>_</span>
                  </p>
                </div>
              )}

            </div>

            {/* Glowing Phosphor Border */}
            <div className={`absolute inset-0 z-30 pointer-events-none rounded-[14px] md:rounded-[26px] transition-opacity duration-500 ${powerStatus === 'off' ? 'opacity-0' : 'opacity-100'} shadow-[inset_0_0_50px_rgba(255,255,255,0.06)]`}></div>

          </div>
        </div>
        
        {/* Physical Controls */}
        <div className="mt-3 md:mt-5 flex justify-between items-center text-xs px-2 md:px-6 font-bold mono-text uppercase">
          
          <div className="flex gap-2 md:gap-3">
             <div className="w-6 md:w-12 h-1.5 rounded-full" style={{ background: '#a39f91', boxShadow: 'inset 0 2px 2px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.8)' }}></div>
             <div className="w-6 md:w-12 h-1.5 rounded-full" style={{ background: '#a39f91', boxShadow: 'inset 0 2px 2px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.8)' }}></div>
          </div>

          <div className="flex items-center gap-4">
             {/* Power LED */}
             <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${powerStatus !== 'off' ? 'bg-green-500' : 'bg-green-900 opacity-30'}`} style={{ boxShadow: powerStatus !== 'off' ? 'inset 0 1px 3px rgba(0,0,0,0.5), 0 0 10px #22c55e' : 'none' }}></div>
             
             {/* Power Button */}
             <button 
                onClick={handlePowerClick}
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-sm text-[8px] md:text-[10px] cursor-pointer translate-y-0 active:translate-y-[1px] transition-all relative overflow-hidden group/btn" 
                style={{ 
                 background: 'linear-gradient(to bottom, #f2f0e9, #dcd9cd)',
                 color: '#555',
                 textShadow: '1px 1px 0px #fff',
                 boxShadow: '0 3px 0 #a39f91, 0 4px 5px rgba(0,0,0,0.2)'
             }}>
                 <span className="relative z-10">POWER</span>
                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
             </button>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}} />
    </div>
  );
};

export default CrtMonitorHero;
