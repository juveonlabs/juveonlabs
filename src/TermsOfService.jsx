import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-grid min-h-screen flex flex-col font-display selection:bg-red-500 selection:text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16 flex-1 w-full flex flex-col relative z-10">
        
        <button 
          onClick={() => navigate('/')}
          className="retro-btn self-start mb-12"
        >
           <span className="mr-2">&lt;</span> BACK TO MAIN
        </button>

        <div className="mb-12">
           <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">TERMS OF SERVICE<span className="animate-pulse opacity-50">_</span></h1>
           <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>LAST COMPILED: MARCH 24, 2026</p>
        </div>

        <div className="space-y-12 pb-16">
          
          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">1. Agreement to Terms</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>By accessing our website and utilizing our automation agents ("Services"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the Service.</p>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">2. Use of Autonomous Agents</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>When deploying our custom AI agents and automated workflows within your business infrastructure, you agree that you possess the necessary rights and authorizations for all data processed by the agents.</p>
              <p>Our agents are designed to execute tasks as defined during the onboarding process. Juveon Labs is not liable for operational consequences resulting from misconfigured instructions provided by the client.</p>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">3. Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>The Service and its original content, features, and functionality (including the core technology powering our AI agents) are and will remain the exclusive property of Juveon Labs and its licensors. You may not reverse engineer, decompile, or extract the proprietary logic of the deployed agents.</p>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">4. Contact Us</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <a href="mailto:juveonlabs@gmail.com" className="font-bold text-red-500 hover:text-black transition-colors" style={{ color: 'var(--glitch-red)' }}>juveonlabs@gmail.com</a>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
