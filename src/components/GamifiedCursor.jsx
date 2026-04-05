import React, { useEffect, useState } from 'react';

const GamifiedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false); // For clicking

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .cursor-pointer, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[99999] ease-linear"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          // Use slight negative margin to properly center the crosshair exactly on the cursor tip
          marginLeft: '-16px',
          marginTop: '-16px',
        }}
      >
        {/* The Gamified Reticle */}
        <div className={`relative flex items-center justify-center transition-all duration-150 ${isHovering ? 'w-10 h-10 scale-110' : 'w-8 h-8'} ${isActive ? 'scale-75' : ''}`}>
           
           {/* Center Dot */}
           <div className={`absolute w-1.5 h-1.5 bg-[#ff3333] shadow-[0_0_8px_#ff3333] ${isHovering ? 'animate-ping' : ''}`}></div>

           {/* Crosshair Lines */}
           <div className="absolute w-full h-[2px] bg-[#111] opacity-70"></div>
           <div className="absolute h-full w-[2px] bg-[#111] opacity-70"></div>
           
           {/* Interactive Targeting Brackets (Only visible on hover) */}
           <div className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#ff3333] transition-all duration-200 ${isHovering ? 'opacity-100 -translate-x-1 -translate-y-1' : 'opacity-0'}`}></div>
           <div className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#ff3333] transition-all duration-200 ${isHovering ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0'}`}></div>
           <div className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#ff3333] transition-all duration-200 ${isHovering ? 'opacity-100 -translate-x-1 translate-y-1' : 'opacity-0'}`}></div>
           <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#ff3333] transition-all duration-200 ${isHovering ? 'opacity-100 translate-x-1 translate-y-1' : 'opacity-0'}`}></div>
        </div>
      </div>

      {/* Global override to hide default cursor, but keep it on touch screens to avoid bugs */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}} />
    </>
  );
};

export default GamifiedCursor;
