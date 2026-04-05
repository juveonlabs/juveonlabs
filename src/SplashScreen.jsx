import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const bootMessages = [
    "Juveon System Starting...",
    "Checking integrity.............. [OK]",
    "Loading resources............... [DONE]",
    "Initializing platform........... [DONE]",
    "Securing connection............. [CONNECTED]",
    "Verifying environment........... [OK]",
    "Syncing logic modules........... [DONE]",
    "Optimizing workflows............ [ACTIVE]",
    "System Ready."
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootMessages.length) {
        setLogs(prev => [...prev, bootMessages[currentLog]]);
        currentLog++;
        setProgress((currentLog / bootMessages.length) * 100);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800); // Fade out delay
        }, 500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#050505] flex flex-col p-6 md:p-12 font-mono transition-opacity duration-700 ${isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-20" style={{ 
        background: `linear-gradient(rgba(0,0,0,0) 50%, rgba(255,0,0,0.1) 50%)`,
        backgroundSize: `100% 4px`
      }}></div>

      {/* BIOS Header */}
      <div className="flex justify-between items-start mb-8 border-b border-[#ff3333]/30 pb-4 relative z-20">
        <div className="text-[#ff3333] text-xs md:text-sm font-bold tracking-widest">
          JUVEON_OS // BOOT_SEQUENCE
        </div>
        <div className="text-[#ff3333] opacity-50 text-[10px] uppercase">
          CPU_FREQ: 4.77MHz // CLOCK: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Central Identity Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 pointer-events-none">
           <img 
            src="/lOGO.png" 
            alt="" 
            className="w-64 h-64 md:w-96 md:h-96 object-contain grayscale invert brightness-[2] contrast-[5] blur-sm animate-pulse" 
            style={{ filter: 'drop-shadow(0 0 20px #ff3333)' }}
          />
        </div>
        
        <div className="z-10 w-full max-w-2xl">
          <div className="flex justify-center mb-12 animate-flicker">
             <img src="/lOGO.png" alt="Juveon Labs" className="h-16 md:h-24 w-auto object-contain brightness-0 invert" style={{ filter: 'drop-shadow(0 0 10px #ff3333)' }} />
          </div>

          {/* Terminal Logs Area */}
          <div className="overflow-hidden space-y-1 h-48 bg-black/40 backdrop-blur-sm border border-[#ff3333]/10 p-4 rounded-sm">
            {logs.map((log, index) => (
              <div key={index} className="text-[#ff3333] text-xs md:text-sm flex items-center">
                <span className="mr-2 opacity-40 font-bold">&gt;</span>
                <span className={index === logs.length - 1 ? 'animate-pulse' : ''}>{log}</span>
              </div>
            ))}
            {logs.length < bootMessages.length && (
              <div className="text-[#ff3333] animate-pulse">&gt; _</div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flicker {
          0% { opacity: 0.8; }
          5% { opacity: 0.9; }
          10% { opacity: 0.8; }
          15% { opacity: 1; }
          20% { opacity: 0.8; }
          25% { opacity: 0.9; }
          30% { opacity: 1; opacity: 1; transform: translateX(1px); }
          35% { opacity: 0.8; }
          40% { transform: translateX(-1px); }
          45% { opacity: 0.9; }
          50% { opacity: 1; }
          100% { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 2s infinite;
        }
      `}} />

      {/* Bottom Progress Area */}
      <div className="mt-8 border-t border-[#ff3333]/30 pt-6">
        <div className="flex justify-between items-end mb-2">
          <div className="text-[#ff3333] text-[10px] uppercase font-bold tracking-widest">
            {isDone ? 'BOOT_COMPLETE' : 'LOADING_SYSTEM_RESOURCES...'}
          </div>
          <div className="text-[#ff3333] text-xs font-bold">
            {Math.floor(progress)}%
          </div>
        </div>
        
        {/* Loading Bar */}
        <div className="w-full h-2 bg-[#ff3333]/10 relative border border-[#ff3333]/20">
          <div 
            className="h-full bg-[#ff3333] transition-all duration-300 shadow-[0_0_10px_#ff3333]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Physical Hardware Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-screen" />
    </div>
  );
};

export default SplashScreen;
