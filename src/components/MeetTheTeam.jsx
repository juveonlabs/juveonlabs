import React from 'react';

const RetroImagePlaceholder = ({ label, imgSrc }) => (
  <div className="border border-black/10 p-2 bg-white/60 backdrop-blur-md transition-colors w-full flex flex-col group relative overflow-hidden">
    <div className="border-b border-black/10 mb-2 font-bold uppercase text-[10px] pb-1 mono-text opacity-50 relative z-10">
      {label} //
    </div>
    <div className="flex-1 w-full relative overflow-hidden bg-transparent z-10 flex items-center justify-center">
      {imgSrc ? (
        <img src={imgSrc} alt={label} className="w-full aspect-square object-cover object-top grayscale contrast-[1.1] transition-transform duration-700 group-hover:scale-[1.02]" />
      ) : (
        <div className="w-full aspect-square flex items-center justify-center font-bold text-xs uppercase opacity-30 mono-text">
          _NO_SIGNAL
        </div>
      )}
    </div>
  </div>
);

export default function MeetTheTeam() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column Text */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <div className="border-l-2 border-red-500 pl-4 mb-2 lg:mb-4" style={{ borderColor: 'var(--glitch-red)' }}>
            <h2 className="text-4xl uppercase tracking-tighter ndot-text mb-2">
              THE TEAM<span className="animate-pulse opacity-50">_</span>
            </h2>
            <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>
              HUMAN OPERATORS
            </p>
          </div>
          <p className="font-bold uppercase opacity-70 text-sm mono-text leading-relaxed mt-2 max-w-md">
            The engineers and strategists building the future of autonomous operations. We construct hyper-specialized agents to permanently eliminate your operational friction.
          </p>
        </div>

        {/* Right Column Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <RetroImagePlaceholder label="JAMES" imgSrc="/james.jpeg" />
              <div className="mt-4 text-center border-b-[2px] border-black px-2 pb-1">
                <h4 className="font-bold uppercase text-[10px] tracking-widest mono-text mt-1">James Prabhakar</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <RetroImagePlaceholder label="UTTEJ" imgSrc="/uttej.jpeg" />
              <div className="mt-4 text-center border-b-[2px] border-black px-2 pb-1">
                <h4 className="font-bold uppercase text-[10px] tracking-widest mono-text mt-1">Uttej Kumar</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <RetroImagePlaceholder label="VIGNAN" imgSrc="/Vig.PNG" />
              <div className="mt-4 text-center border-b-[2px] border-black px-2 pb-1">
                <h4 className="font-bold uppercase text-[10px] tracking-widest mono-text mt-1">Vignan Thumma</h4>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
