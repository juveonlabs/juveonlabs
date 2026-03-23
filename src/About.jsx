import React, { useEffect } from 'react';
import Footer from './Footer.jsx';
import { ArrowLeft, Users, Zap, Shield, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImagePlaceholder = ({ label, imgSrc }) => (
  <div
    className="w-full aspect-square rounded-full overflow-hidden relative"
  >
    {imgSrc ? (
      <img src={imgSrc} alt={label} className="w-full h-full object-cover object-top grayscale scale-[0.85] rounded-full" />
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium tracking-widest text-xs uppercase z-10 text-center px-4">
          {label}
        </div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </>
    )}
  </div>
);

export default function About() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen w-full font-display selection:bg-purple-500/30 bg-[#faf9fc] relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[80px] opacity-40 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24 flex flex-col flex-1">
        <button
          onClick={() => navigate('/')}
          className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-600 font-medium hover:bg-white hover:text-gray-900 shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-300 mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="mb-24 mt-8 opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-4">Our Story</h2>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Built to elevate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">human potential.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                At Juveon Labs, we believe that efficiency is not about doing more it's about doing what matters. We design context aware, automations systems that streamline the most complex aspects of your business, so your team can focus on high impact work.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-purple-100 bg-purple-50 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Radical Efficiency</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">We hunt down operational friction and eliminate it through intelligent automation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-indigo-100 bg-indigo-50 flex items-center justify-center shrink-0">
                    <Target size={18} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Custom Built</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">No generic templates. Every agent is trained precisely on your data and workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative h-[500px] w-full rounded-[3rem] p-[2px] overflow-hidden group shadow-[0_20px_50px_-12px_rgba(147,51,234,0.15)] hidden lg:block">
              <div className="absolute inset-[-100%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,#a855f7_85%,#6b21a8_100%)] opacity-20" />
              <div className="relative h-full bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.9rem] overflow-hidden flex items-center justify-center p-8">
                <div className="w-full h-full border border-purple-200/50 rounded-[2rem] bg-gradient-to-br from-purple-50/50 to-white/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <Shield size={64} strokeWidth={1} className="text-purple-300 mb-6" />
                  <p className="text-sm tracking-widest uppercase font-bold text-gray-400">Juveon Labs Intelligence</p>
                  {/* Decorative moving blur */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-purple-400/10 to-transparent rounded-full animate-[spin_8s_linear_infinite] pointer-events-none mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section with 3 place holders */}
        <div className="mt-16 opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100/60 mx-auto mb-6">
              <Users size={20} className="text-indigo-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Behind the Agents</h2>
            <p className="text-gray-600 font-medium">The engineers and strategists building the future of autonomous operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

            <div className="group cursor-pointer">
              <ImagePlaceholder label="James" imgSrc="/james.jpeg" />
              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">James Prabhakar</h4>
              </div>
            </div>

            <div className="group cursor-pointer">
              <ImagePlaceholder label="Uttej" imgSrc="/uttej.jpeg" />
              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Uttej Kumar</h4>
              </div>
            </div>

            <div className="group cursor-pointer">
              <ImagePlaceholder label="Vignan" imgSrc="/Vignan.jpeg" />
              <div className="mt-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Vignan Thamma</h4>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
