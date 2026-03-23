import React, { useEffect } from 'react';
import Footer from './Footer.jsx';
import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen w-full font-display selection:bg-purple-500/30 bg-[#faf9fc] relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none" />
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
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-50 to-white flex items-center justify-center shadow-sm border border-purple-100/60 mb-6">
            <Shield size={20} className="text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Last updated: March 24, 2026. How we handle, protect, and process your data.
          </p>
        </div>

        <div className="prose prose-lg prose-purple max-w-none text-gray-600 space-y-8 opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
          
          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We collect information you provide directly to us when you request our automation services, create an account, or communicate with us. This may include your name, email address, company details, and descriptions of operational workflows you wish to automate.</p>
            <p className="leading-relaxed">When our autonomous agents interact with your systems (as authorized), we only process data strictly necessary to execute the mandated workflows.</p>
          </section>

          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">2. How We Use Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect primarily to provide, maintain, and improve our services. Specifically, we use it to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Design, train, and deploy AI agents tailored to your business.</li>
              <li>Provide customer support and technical assistance.</li>
              <li>Communicate updates, alerts, and administrative messages.</li>
            </ul>
          </section>

          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">3. Data Security</h2>
            <p className="leading-relaxed mb-4">We prioritize the security of your operational data. We implement enterprise-grade technical and organizational measures to safeguard your information against unauthorized access, destruction, or alteration. All agent communication is encrypted in transit and at rest.</p>
          </section>

          <section className="bg-white/80 backdrop-blur-3xl border border-gray-200/60 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">4. Contact Us</h2>
            <p className="leading-relaxed mb-4">If you have any questions about this Privacy Policy, please contact our legal team at:</p>
            <a href="mailto:juveonlabs@gmail.com" className="font-bold text-purple-600 hover:text-purple-700 transition-colors">juveonlabs@gmail.com</a>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
