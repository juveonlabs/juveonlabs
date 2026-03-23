import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer.jsx';
import { Menu, Sparkles, Download, Wand2, BookOpen, ArrowRight, ArrowDown, Bot, Linkedin, Instagram, Plus, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SideDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left Side Spectrum */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 items-end gap-1.5 h-40 opacity-30">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-full animate-spectrum"
            style={{ animationDelay: `${i * 0.12}s`, height: `${30 + Math.random() * 50}%` }}
          />
        ))}
      </div>

      {/* Right Side Spectrum */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 items-end gap-1.5 h-40 opacity-30">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-indigo-600 to-purple-400 rounded-full animate-spectrum"
            style={{ animationDelay: `${i * 0.12 + 0.6}s`, height: `${30 + Math.random() * 50}%` }}
          />
        ))}
      </div>

      {/* Floating 3D Rings */}
      <div className="absolute left-[-5%] top-1/4 w-[500px] h-[500px] border-[1px] border-purple-200/40 rounded-full animate-float-3d opacity-40 mix-blend-multiply" />
      <div className="absolute right-[-10%] bottom-1/4 w-[600px] h-[600px] border-[1px] border-indigo-200/30 rounded-full animate-float-3d opacity-30 mix-blend-multiply" style={{ animationDelay: '-5s' }} />
      <div className="absolute left-1/3 top-[-10%] w-[400px] h-[400px] border-[1px] border-fuchsia-200/20 rounded-full animate-float-3d opacity-20 mix-blend-multiply" style={{ animationDelay: '-10s' }} />
    </div>
  );
};

const ImagePlaceholder = ({ label, imgSrc }) => (
  <div
    className="w-full aspect-square rounded-full overflow-hidden relative"
  >
    {imgSrc ? (
      <img src={imgSrc} alt={label} className="w-full h-full object-cover object-top grayscale scale-[0.85] rounded-full" />
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium tracking-widest text-xs uppercase z-10 text-center px-4 bg-gray-50">
          {label}
        </div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </>
    )}
  </div>
);

export default function App() {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Sending...');
    const formData = new FormData(event.target);

    // Web3Forms API Key
    formData.append("access_key", "67087e9e-510d-4e85-a487-03b3f6393aab");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus('Sent successfully!');
        event.target.reset();
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('Error sending message.');
        setTimeout(() => setFormStatus(''), 3000);
      }
    } catch (error) {
      setFormStatus('Error sending message.');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };
  return (
    <div className="w-full font-display selection:bg-purple-500/30">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#faf9fc]">

        {/* Side Decorations (Spectrum & Rings) */}
        <SideDecorations />

        {/* Content Layer */}
        <div className="relative z-10 flex min-h-screen w-full">

          {/* Main Panel */}
          <div className="relative w-full min-h-[100dvh] flex flex-col p-2 lg:p-4">

            {/* Internal Content */}
            <div className="flex flex-col h-full w-full px-6 py-2 lg:px-10 lg:py-4 justify-between relative mt-1 lg:mt-2">

              {/* Nav */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/Frame 1.png" alt="Juveon Labs" className="h-8 md:h-10 w-auto object-contain" />
                  <span className="font-semibold text-2xl tracking-tighter text-gray-900">juveon labs</span>
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                  <button onClick={() => navigate('/about')} className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors hidden md:block">
                    About Us
                  </button>
                  <div className="hidden lg:flex items-center gap-2">
                    <a href="https://www.linkedin.com/company/juveonlabs/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition-colors">
                      <Linkedin size={14} />
                    </a>
                    <a href="https://www.instagram.com/juveonlabs?igsh=MWdud2dwNzBmYm1vcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition-colors">
                      <Instagram size={14} />
                    </a>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Get Your Agent
                  </button>
                </div>
              </div>

              {/* Hero Center */}
              <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8 mt-12 mb-12">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200/60 px-5 py-2 rounded-full mb-6 flex items-center gap-2 shadow-sm">
                  <Sparkles size={14} className="text-purple-600" />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-purple-700 uppercase">AI AGENTS · BUILT FOR YOUR BUSINESS</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-gray-900 leading-[1.2]">
                  We find what slows <br className="hidden lg:block" />
                  your business down.<br />
                  <span className="font-serif italic text-purple-600 text-2xl lg:text-3xl mt-2 inline-block">Then we automate it.</span>
                </h1>

                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_10px_40px_-10px_rgba(109,40,217,0.5)]"
                >
                  <span className="text-white font-medium">Explore Now</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowDown size={16} className="text-white" />
                  </div>
                </button>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  {['Workflow Audits', 'Custom AI Dev', 'Ecosystem Integration'].map((pill) => (
                    <div key={pill} className="rounded-full px-4 py-2 text-xs text-purple-700 font-medium bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-colors cursor-pointer">
                      {pill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="flex flex-col items-center text-center space-y-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">OUR PHILOSOPHY</span>
                <p className="text-lg text-gray-700">
                  <span className="font-serif italic">"Efficiency is not doing more.</span> It's doing what matters.<span className="font-serif italic">"</span>
                </p>
                <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-gray-400">
                  <div className="w-8 h-[1px] bg-gray-300"></div>
                  <span>JUVEON LABS</span>
                  <div className="w-8 h-[1px] bg-gray-300"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative w-full pt-8 pb-16 lg:pt-12 bg-[#faf9fc] overflow-hidden">
        {/* Dotted Spectrum Background Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-3">Our Services</h2>
              <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
                High-End Intelligence. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Smarter Operations.</span>
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                We design context-aware, autonomous systems that streamline the most complex aspects of your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ScrollReveal delay={0}>
              <div onClick={() => navigate('/agents')} className="group relative rounded-[2rem] p-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(147,51,234,0.25)] hover:-translate-y-2 transition-all duration-700 cursor-pointer overflow-hidden">
                <div className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,#a855f7_85%,#6b21a8_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative h-full bg-white/90 backdrop-blur-2xl border border-white/50 group-hover:border-transparent rounded-[1.9rem] p-6 lg:p-8 overflow-hidden transition-colors duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-white flex items-center justify-center mb-6 shadow-sm border border-purple-100/60 group-hover:border-purple-500 group-hover:from-purple-600 group-hover:to-purple-500 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                      <Wand2 size={24} strokeWidth={1.5} className="text-purple-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">AI Agents</h4>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium text-sm md:text-base">Deploy specialized intelligent agents designed to automate your most complex workflows, from lead generation to full client onboarding.</p>
                    <div className="flex items-center gap-2 text-purple-700 font-semibold group-hover:gap-4 transition-all duration-300 text-sm md:text-base">
                      Meet our agents <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div onClick={() => navigate('/workflows')} className="group relative rounded-[2rem] p-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.25)] hover:-translate-y-2 transition-all duration-700 cursor-pointer overflow-hidden">
                <div className="absolute inset-[-100%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,#818cf8_85%,#4338ca_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative h-full bg-white/90 backdrop-blur-2xl border border-white/50 group-hover:border-transparent rounded-[1.9rem] p-6 lg:p-8 overflow-hidden transition-colors duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center mb-6 shadow-sm border border-indigo-100/60 group-hover:border-indigo-500 group-hover:from-indigo-600 group-hover:to-indigo-500 group-hover:-rotate-3 group-hover:scale-110 transition-all duration-500">
                      <Sparkles size={24} strokeWidth={1.5} className="text-indigo-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">Automated Workflows</h4>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium text-sm md:text-base">Create event-driven workflows that connect multiple services, trigger actions, and manage processes—all through a visual and structured flow.</p>
                    <div className="flex items-center gap-2 text-indigo-700 font-semibold group-hover:gap-4 transition-all duration-300 text-sm md:text-base">
                      View capabilities <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div onClick={() => navigate('/call-agents')} className="group relative rounded-[2rem] p-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(217,70,239,0.25)] hover:-translate-y-2 transition-all duration-700 cursor-pointer overflow-hidden">
                <div className="absolute inset-[-100%] animate-[spin_11s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,#e879f9_85%,#a21caf_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative h-full bg-white/90 backdrop-blur-2xl border border-white/50 group-hover:border-transparent rounded-[1.9rem] p-6 lg:p-8 overflow-hidden transition-colors duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-50 to-white flex items-center justify-center mb-6 shadow-sm border border-fuchsia-100/60 group-hover:border-fuchsia-500 group-hover:from-fuchsia-600 group-hover:to-fuchsia-500 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                      <Bot size={24} strokeWidth={1.5} className="text-fuchsia-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">AI Call Agents</h4>
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium text-sm md:text-base">Handle inbound and outbound calls with intelligent voice agents that manage customer interactions, qualify leads, and route conversations—24/7 without human intervention.</p>
                    <div className="flex items-center gap-2 text-fuchsia-700 font-semibold group-hover:gap-4 transition-all duration-300 text-sm md:text-base">
                      Meet the agents <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT JUVEONLABS DOES */}
      <section className="relative w-full pt-8 pb-32 lg:pt-12 bg-[#faf9fc] overflow-hidden">
        {/* Dotted Spectrum Background Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">

          <ScrollReveal>

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-4">What JuveonLabs Does</h2>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                We come to you. We understand your operations. <br className="hidden md:block" />
                <span className="text-gray-900 font-bold">We build the solution.</span>
              </p>
            </div>
          </ScrollReveal>

          {/* 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            <ScrollReveal delay={0}>
              <div className="relative rounded-[2rem] p-[2px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <div className="absolute inset-[-100%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_65%,#a855f7_88%,#7c3aed_100%)] opacity-30" />
                <div className="relative h-full bg-white/95 backdrop-blur-2xl border border-white/50 rounded-[1.9rem] overflow-hidden p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black text-transparent" style={{ WebkitTextStroke: '2px #c4b5fd' }}>01</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">We Identify</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">We approach businesses and audit their workflows to find exactly where AI can help.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative rounded-[2rem] p-[2px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <div className="absolute inset-[-100%] animate-[spin_14s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_65%,#818cf8_88%,#6366f1_100%)] opacity-30" />
                <div className="relative h-full bg-white/95 backdrop-blur-2xl border border-white/50 rounded-[1.9rem] overflow-hidden p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black text-transparent" style={{ WebkitTextStroke: '2px #a5b4fc' }}>02</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">We Build</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">We custom-build AI agents tailored to your specific business needs. No generic tools.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="relative rounded-[2rem] p-[2px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <div className="absolute inset-[-100%] animate-[spin_11s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_65%,#e879f9_88%,#c026d3_100%)] opacity-30" />
                <div className="relative h-full bg-white/95 backdrop-blur-2xl border border-white/50 rounded-[1.9rem] overflow-hidden p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black text-transparent" style={{ WebkitTextStroke: '2px #f0abfc' }}>03</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">We Deliver</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">We hand over a fully working AI agent and make sure your team knows how to use it.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* RESULTS SECTION HIGH END UI (LIGHT) */}
      <section className="relative w-full py-16 lg:py-20 bg-[#faf9fc] overflow-hidden border-t border-purple-50">
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <h2 className="text-xs font-bold tracking-[0.2em] text-purple-600 uppercase mb-3">Proven Impact</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                What our clients see
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
              
              {/* Stat 1 */}
              <div className="group relative bg-white/95 backdrop-blur-3xl border border-gray-200 rounded-[1.5rem] p-6 lg:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4 block">Sales & Marketing</span>
                  <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-500">
                    3x
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed font-display text-sm">Leads generated within the first quarter</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group relative bg-white/95 backdrop-blur-3xl border border-gray-200 rounded-[1.5rem] p-6 lg:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4 block">Operations</span>
                  <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-500">
                    80%
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed font-display text-sm">Fewer manual tasks across the entire team</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group relative bg-white/95 backdrop-blur-3xl border border-gray-200 rounded-[1.5rem] p-6 lg:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4 block">Efficiency</span>
                  <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
                    200+
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed font-display text-sm mt-3">Hours saved per month by automating workflows</p>
                </div>
              </div>

            </div>

            {/* CTA Block Structured */}
            <div className="relative w-full max-w-4xl mx-auto rounded-[2rem] bg-white/95 backdrop-blur-3xl border border-gray-200 shadow-sm p-8 lg:p-12 flex flex-col items-center text-center overflow-hidden group hover:shadow-md transition-shadow duration-500 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)]">
              <div className="relative z-10 max-w-2xl w-full mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 leading-tight text-gray-900">Your business could be <span className="text-purple-600">running smarter.</span></h3>
                <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed mb-6 font-medium">We'll come to you, understand your operations, and show you exactly what's possible.</p>
                
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_10px_20px_-10px_rgba(17,24,39,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                  Book a Consultation <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="relative w-full py-24 bg-[#faf9fc] overflow-hidden border-t border-purple-50">
        {/* Dotted Spectrum Background Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100/60 mx-auto mb-6">
                <Users size={20} className="text-indigo-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Behind the Agents</h2>
              <p className="text-gray-600 font-medium text-lg">The engineers and strategists building the future of automated operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
              <div className="group cursor-pointer">
                <ImagePlaceholder label="James" imgSrc="/james.jpeg" />
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">James Prabhakar</h4>
                </div>
              </div>

              <div className="group cursor-pointer">
                <ImagePlaceholder label="Uttej" imgSrc="/uttej.jpeg" />
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Uttej Kumar</h4>
                </div>
              </div>

              <div className="group cursor-pointer">
                <ImagePlaceholder label="Vignan" imgSrc="/Vignan.jpeg" />
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Vignan Thamma</h4>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative w-full pt-12 pb-16 lg:pb-20 bg-[#faf9fc] overflow-hidden">
        {/* Dotted Spectrum Background Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-3">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-3">
                Ready to automate?
              </h3>
              <p className="text-base text-gray-600 font-medium">
                Drop us a message and we'll discuss how we can streamline your operations.
              </p>
            </div>
            <div className="relative rounded-[1.6rem] p-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group">
              <div className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,#a855f7_85%,#6b21a8_100%)] opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
              <form onSubmit={handleContactSubmit} className="relative h-full bg-white/95 backdrop-blur-3xl border border-white/50 rounded-[1.5rem] p-6 lg:p-8 overflow-hidden flex flex-col gap-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                    <input type="text" name="name" required placeholder="Jane Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium text-gray-900 placeholder-gray-400 text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
                    <input type="email" name="email" required placeholder="jane@company.com" className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium text-gray-900 placeholder-gray-400 text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Company Name</label>
                    <input type="text" name="company" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium text-gray-900 placeholder-gray-400 text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">Phone Number</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium text-gray-900 placeholder-gray-400 text-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">What are you interested in?</label>
                  <select name="service_interest" required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium text-gray-900 cursor-pointer text-sm">
                    <option value="" disabled hidden>Select a service or agent...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Automated Workflows">Automated Workflows</option>
                    <option value="Lead Generation Agent">Lead Generation Agent</option>
                    <option value="Client Onboarding Agent">Client Onboarding Agent</option>
                    <option value="Outreach Agent">Outreach Agent</option>
                    <option value="Reporting Agent">Reporting Agent</option>
                    <option value="Custom AI Solutions">Custom AI Solutions</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 ml-1">How can we help?</label>
                  <textarea name="message" required rows="3" placeholder="Tell us about the workflows you want to automate..." className="w-full px-4 py-3 rounded-xl bg-gray-50/80 border border-gray-200/80 focus:bg-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all resize-none font-medium text-gray-900 placeholder-gray-400 text-sm"></textarea>
                </div>

                <button type="submit" disabled={formStatus === 'Sending...'} className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-base shadow-[0_10px_40px_-10px_rgba(109,40,217,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(109,40,217,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                  {formStatus === 'Sending...' ? 'Sending...' : (formStatus === 'Sent successfully!' ? 'Sent!' : (formStatus === 'Error sending message.' ? 'Error!' : 'Send Inquiry'))}
                </button>

              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
