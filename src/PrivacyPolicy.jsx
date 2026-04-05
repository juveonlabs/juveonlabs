import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
           <h1 className="text-5xl uppercase tracking-tighter mb-2 ndot-text">PRIVACY LOG<span className="animate-pulse opacity-50">_</span></h1>
           <p className="text-xs uppercase font-bold text-red-500 mono-text tracking-widest" style={{ color: 'var(--glitch-red)' }}>LAST COMPILED: MARCH 24, 2026</p>
        </div>

        <div className="space-y-12 pb-16">
          
          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">1. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>We collect information you provide directly to us when you request our automation services, create an account, or communicate with us. This may include your name, email address, company details, and descriptions of operational workflows you wish to automate.</p>
              <p>When our autonomous agents interact with your systems (as authorized), we only process data strictly necessary to execute the mandated workflows.</p>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">2. How We Use Information</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>We use the information we collect primarily to provide, maintain, and improve our services. Specifically, we use it to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Design, train, and deploy AI agents tailored to your business.</li>
                <li>Provide customer support and technical assistance.</li>
                <li>Communicate updates, alerts, and administrative messages.</li>
              </ul>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">3. Data Security</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>We prioritize the security of your operational data. We implement enterprise-grade technical and organizational measures to safeguard your information against unauthorized access, destruction, or alteration. All agent communication is encrypted in transit and at rest.</p>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="border border-black/10 p-8 bg-white/60 backdrop-blur-md relative overflow-hidden group">
            <div className="border-b border-black/10 mb-4 pb-4">
              <h2 className="text-2xl font-bold uppercase ndot-text">4. Contact Us</h2>
            </div>
            <div className="space-y-4 text-sm font-medium opacity-80 uppercase leading-relaxed mono-text">
              <p>If you have any questions about this Privacy Policy, please contact our legal team at:</p>
              <a href="mailto:juveonlabs@gmail.com" className="font-bold text-red-500 hover:text-black transition-colors" style={{ color: 'var(--glitch-red)' }}>juveonlabs@gmail.com</a>
            </div>
            <div className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
