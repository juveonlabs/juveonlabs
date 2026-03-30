import React, { useEffect } from 'react';
import Footer from './Footer.jsx';
import { ArrowLeft, Mic, PhoneCall, Headphones, ArrowRight, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CallAgents() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9fc] font-display selection:bg-blue-200 selection:text-blue-900 flex flex-col items-center overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Embedded Navigation */}
      <nav className="relative z-50 w-full px-6 py-4 lg:px-8">
        <div className="max-w-7xl mx-auto cursor-pointer" onClick={() => {
            navigate('/');
            setTimeout(() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}>
          <div className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors font-medium backdrop-blur-md bg-white/50 px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow active:scale-95 duration-200">
            <ArrowLeft size={16} /> Back to Services
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-6 flex-grow flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-3 shadow-sm">
            <Mic size={14} /> Autonomous Voice Tech
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-4 leading-tight">
            Conversations that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Never Sleep.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
            Handle inbound and outbound calls with intelligent voice agents that manage customer interactions, qualify leads, and route conversations—24/7 without human intervention.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-10 relative">
          
          <div className="bg-white/70 backdrop-blur-2xl border border-gray-200/50 rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <PhoneCall size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">Inbound & Outbound</h3>
            <p className="text-gray-600 font-medium leading-relaxed text-sm">
              Dynamically dial out to leads instantly or take high-volume inbound service calls. Never miss a single opportunity.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-2xl border border-gray-200/50 rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <Target size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">Lead Qualification</h3>
            <p className="text-gray-600 font-medium leading-relaxed text-sm">
              Voice AI naturally converses with prospects to gather data, schedule appointments, and push qualified leads to your CRM.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-2xl border border-gray-200/50 rounded-3xl p-5 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <Headphones size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">Advanced Routing</h3>
            <p className="text-gray-600 font-medium leading-relaxed text-sm">
              When situations get overly complex, the AI instantly bridges the call to the appropriate highly-skilled human operator.
            </p>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-6 lg:p-8 text-center shadow-2xl relative overflow-hidden mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 blur-[1px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight text-left md:text-left">
              Replace rigid phone trees with <br className="hidden md:block"/> seamless artificial intelligence.
            </h2>
            <a
              href="https://calendly.com/juveonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white whitespace-nowrap text-blue-800 px-6 py-3 rounded-full font-bold text-base inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Build Voice Agent <Zap size={18} className="text-blue-500" />
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
