import React, { useEffect } from 'react';
import Footer from './Footer.jsx';
import { ArrowLeft, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen w-full font-display selection:bg-blue-500/30 bg-[#faf9fc] relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[80px] opacity-40 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24 flex flex-col flex-1">
        <button
          onClick={() => navigate('/')}
          className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-600 font-medium hover:bg-white hover:text-gray-900 shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-300 mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="mb-16 opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100/60 mb-6">
            <Edit3 size={20} className="text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Last updated: March 24, 2026. Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none text-gray-600 space-y-8 opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
          
          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">1. Agreement to Terms</h2>
            <p className="leading-relaxed mb-4">By accessing our website and utilizing our automation agents ("Services"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the Service.</p>
          </section>

          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">2. Use of Autonomous Agents</h2>
            <p className="leading-relaxed mb-4">When deploying our custom AI agents and automated workflows within your business infrastructure, you agree that you possess the necessary rights and authorizations for all data processed by the agents.</p>
            <p className="leading-relaxed mb-4">Our agents are designed to execute tasks as defined during the onboarding process. Juveon Labs is not liable for operational consequences resulting from misconfigured instructions provided by the client.</p>
          </section>

          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">3. Intellectual Property</h2>
            <p className="leading-relaxed mb-4">The Service and its original content, features, and functionality (including the core technology powering our AI agents) are and will remain the exclusive property of Juveon Labs and its licensors. You may not reverse engineer, decompile, or extract the proprietary logic of the deployed agents.</p>
          </section>

          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">4. Contact Us</h2>
            <p className="leading-relaxed mb-4">If you have any questions about these Terms, please contact us at:</p>
            <a href="mailto:juveonlabs@gmail.com" className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors">juveonlabs@gmail.com</a>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
