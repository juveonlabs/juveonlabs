import React from 'react';
import { Bot, Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative w-full bg-[#030014] text-white pt-24 pb-12 overflow-hidden mt-auto border-t border-blue-900/20 font-display">
      {/* Dark Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
              <img src="/Frame 4.png" alt="Juveon Labs" className="h-8 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform" />
              <span className="font-bold text-2xl tracking-tight text-white group-hover:text-blue-300 transition-colors">juveon labs</span>
            </div>
            <p className="text-gray-400 font-medium text-sm leading-relaxed pr-4">
              We design context-aware, autonomous systems that streamline the most complex aspects of your business.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.linkedin.com/company/juveonlabs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/juveonlabs?igsh=MWdud2dwNzBmYm1vcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Infrastructure Col */}
          <div className="lg:ml-8">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs opacity-80">Infrastructure</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => navigate('/agents')} className="text-gray-400 hover:text-blue-400 transition-all text-sm font-medium flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> AI Agents</button></li>
              <li><button onClick={() => navigate('/workflows')} className="text-gray-400 hover:text-blue-400 transition-all text-sm font-medium flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Automated Workflows</button></li>
              <li><button onClick={() => navigate('/call-agents')} className="text-gray-400 hover:text-blue-400 transition-all text-sm font-medium flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> AI Call Agents</button></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs opacity-80">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => navigate('/about')} className="text-gray-400 hover:text-blue-400 transition-all text-sm font-medium flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About Us</button></li>
              <li><a href="https://calendly.com/juveonlabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all text-sm font-medium flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Book a Consultation</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs opacity-80">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-400 text-sm font-medium flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20"><Sparkles size={16} /></div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email Us</span>
                  <a href="mailto:juveonlabs@gmail.com" className="hover:text-blue-400 transition-colors">juveonlabs@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium tracking-wide">© {new Date().getFullYear()} Juveon Labs. All rights reserved.</p>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
            <button onClick={() => navigate('/privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
