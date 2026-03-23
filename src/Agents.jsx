import React, { useEffect } from 'react';
import Footer from './Footer.jsx';
import { ArrowLeft, ArrowRight, Layers, Workflow, UserPlus, MessageSquare, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AgentCard = ({ icon: Icon, title, description, colorClass, gradientClass, delay }) => (
  <div 
    className="group relative rounded-[2.5rem] p-[2px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-700 cursor-pointer overflow-hidden opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]"
    style={{ animationDelay: delay }}
  >
    <div className={`absolute inset-[-100%] animate-[spin_10s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-1000 ${gradientClass}`} />
    <div className="relative h-full bg-white/90 backdrop-blur-2xl border border-white/50 group-hover:border-transparent rounded-[2.4rem] p-10 overflow-hidden transition-colors duration-700 flex flex-col items-start text-left">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 w-full flex flex-col h-full">
         <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mb-8 shadow-sm border border-gray-100/60 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
           <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${colorClass}`} />
           <Icon size={26} strokeWidth={1.5} className="text-gray-700 group-hover:text-gray-900 transition-colors duration-500 relative z-10" />
         </div>
         <h4 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">{title}</h4>
         <p className="text-gray-600 leading-relaxed font-medium mb-8">{description}</p>
      </div>
    </div>
  </div>
);

export default function Agents() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen w-full font-display selection:bg-purple-500/30 bg-[#faf9fc] relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#6d28d9 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24 flex flex-col flex-1">
        <button 
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-600 font-medium hover:bg-white hover:text-gray-900 shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Services
        </button>

        <div className="mb-20 text-center max-w-3xl mx-auto opacity-0 translate-y-8 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-4">Core Capabilities</h2>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Our AI Agents
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Discover the specialized intelligent systems driving next-generation operational efficiency completely hands-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AgentCard 
            icon={Layers}
            title="Lead Generation Agent"
            description="Finds and qualifies leads automatically so your sales team only speaks to real prospects"
            colorClass="from-purple-500/[0.04] to-transparent"
            gradientClass="bg-[conic-gradient(from_0deg,transparent_60%,#a855f7_85%,#6b21a8_100%)]"
            delay="100ms"
          />
          <AgentCard 
            icon={Workflow}
            title="Workflow Automation Agent"
            description="Removes repetitive manual tasks from your team's daily operations"
            colorClass="from-indigo-500/[0.04] to-transparent"
            gradientClass="bg-[conic-gradient(from_0deg,transparent_60%,#818cf8_85%,#4338ca_100%)]"
            delay="250ms"
          />
          <AgentCard 
            icon={UserPlus}
            title="Client Onboarding Agent"
            description="Handles new client intake, data collection, and follow-ups without human effort"
            colorClass="from-fuchsia-500/[0.04] to-transparent"
            gradientClass="bg-[conic-gradient(from_0deg,transparent_60%,#e879f9_85%,#a21caf_100%)]"
            delay="400ms"
          />
          <AgentCard 
            icon={MessageSquare}
            title="Outreach Agent"
            description="Sends personalised outreach messages across channels at scale"
            colorClass="from-blue-500/[0.04] to-transparent"
            gradientClass="bg-[conic-gradient(from_0deg,transparent_60%,#60a5fa_85%,#1d4ed8_100%)]"
            delay="550ms"
          />
          <AgentCard 
            icon={BarChart}
            title="Reporting Agent"
            description="Pulls data from your tools and generates clean reports automatically"
            colorClass="from-rose-500/[0.04] to-transparent"
            gradientClass="bg-[conic-gradient(from_0deg,transparent_60%,#fb7185_85%,#be123c_100%)]"
            delay="700ms"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
