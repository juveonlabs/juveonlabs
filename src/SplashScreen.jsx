import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 4000; // total splash duration in ms
    const interval = 30;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step + Math.random() * 1.5, 100);
      });
    }, interval);

    // Start fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), duration);
    // Remove splash
    const completeTimer = setTimeout(() => onComplete(), duration + 600);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#030014] transition-opacity duration-600 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.6s ease-in-out' }}
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-[100px]" />

      {/* Dotted Pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Logo + Text */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-blue-500/30 rounded-full scale-150 animate-pulse" />
          <img
            src="/Frame 4.png"
            alt="Juveon Labs"
            className="relative h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            style={{
              animation: 'splash-logo 1.2s ease-out forwards',
            }}
          />
        </div>

        {/* Brand Name */}
        <div
          className="flex items-center gap-2"
          style={{
            animation: 'splash-text 1s ease-out 0.3s both',
          }}
        >
          <span className="text-3xl md:text-4xl font-bold tracking-tighter text-white font-display">
            juveon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">labs</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div
          className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden mt-4"
          style={{
            animation: 'splash-text 0.8s ease-out 0.6s both',
          }}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium font-display"
          style={{
            animation: 'splash-text 0.8s ease-out 0.9s both',
          }}
        >
          Just Automate it.
        </p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes splash-logo {
          0% { opacity: 0; transform: scale(0.5) translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes splash-text {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
