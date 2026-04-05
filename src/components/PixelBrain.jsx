import React, { useMemo } from 'react';

const PixelBrain = () => {
  // 16x16 grid representing a hardware AI brain core.
  // 0 = Empty, 1 = Solid structure, 2 = Animated processing node
  const grid = [
    [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,1,1,2,1,1,1,2,1,1,1,0,0,0],
    [0,0,1,1,1,1,2,1,2,1,1,1,1,1,0,0],
    [0,1,1,2,1,1,1,1,1,1,1,2,1,1,1,0],
    [0,1,1,1,1,2,1,2,1,2,1,1,1,1,1,0],
    [1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1],
    [1,1,1,1,2,1,2,1,2,1,2,1,1,1,1,1],
    [1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1],
    [1,1,1,2,1,2,1,2,1,2,1,2,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,2,1,1,2,1,2,1,1,2,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,2,1,1,1,1,1,2,1,1,1,0,0],
    [0,0,0,1,1,1,2,1,2,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],
  ];

  // Pre-calculate random animation properties for the processing nodes so they
  // flicker organically rather than entirely in unison.
  const cellStyles = useMemo(() => {
    return grid.map(row => 
      row.map(() => ({
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${0.5 + Math.random()}s`
      }))
    );
  }, []);

  return (
    <div className="w-full aspect-square bg-[#050505] p-6 flex flex-col items-center justify-center relative overflow-hidden group border-[3px] border-[#111]">
      
      {/* Background Hardware Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '12px 12px' 
        }} 
      />

      {/* Decorative Corners */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-white/20"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-white/20"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-white/20"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-white/20"></div>

      {/* The Pixel Core */}
      <div 
        className="w-full h-full relative z-10 grid"
        style={{ 
          gridTemplateColumns: `repeat(16, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(16, minmax(0, 1fr))`,
          gap: '2px'
        }}
      >
        {grid.map((row, rIndex) => (
          row.map((cell, cIndex) => {
            if (cell === 0) return <div key={`${rIndex}-${cIndex}`} className="opacity-0" />;
            
            const isAnimated = cell === 2;
            const style = isAnimated ? cellStyles[rIndex][cIndex] : {};
            
            return (
              <div 
                key={`${rIndex}-${cIndex}`} 
                className={`w-full h-full bg-[#f4f4f5] transition-all shadow-[0_0_5px_rgba(255,255,255,0.1)] 
                  ${isAnimated 
                    ? 'animate-pulse opacity-100 group-hover:bg-[#ff3333] group-hover:shadow-[0_0_8px_#ff3333]' 
                    : 'opacity-[0.6] group-hover:opacity-[0.8]'
                  }`}
                style={style}
              />
            );
          })
        ))}
      </div>
      
      {/* Inline styles for custom scanline animation block */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan-sweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scan-sweep {
          animation: scan-sweep 5s infinite linear;
        }
      `}} />
      
      {/* Vertically Scrolling Data Sweep Overlay */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-[#ff3333]/10 to-transparent z-20 pointer-events-none animate-scan-sweep" />

      {/* Subtle bottom text node */}
      <div className="absolute bottom-2 font-mono text-[8px] text-[#ff3333]/60 tracking-widest uppercase font-bold right-4">
        LOGIC_CORE_ACTIVE
      </div>
      
    </div>
  );
};

export default PixelBrain;
