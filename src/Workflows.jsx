import React, { useEffect } from 'react';
import Footer from './Footer.jsx';
import { ArrowLeft, CheckCircle2, GitMerge, Database, Zap, ArrowRight, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkflowDiagramBox = ({ icon: Icon, title, description, color, delay }) => (
  <div 
    className="relative flex flex-col items-center bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-500 z-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]"
    style={{ animationDelay: delay }}
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm ${color}`}>
      <Icon size={24} className="text-gray-700" />
    </div>
    <h4 className="text-xl font-bold text-gray-900 tracking-tight mb-2 text-center">{title}</h4>
    <p className="text-sm text-gray-500 font-medium text-center leading-relaxed">
      {description}
    </p>
  </div>
);

const Connector = ({ vertical = false, delay }) => (
  <div 
    className={`relative opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards] flex items-center justify-center ${vertical ? 'h-16 w-8' : 'w-16 h-8'} z-0`}
    style={{ animationDelay: delay }}
  >
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${vertical ? 'w-[2px] h-full' : 'w-full h-[2px]'} bg-gradient-to-br from-indigo-200 to-purple-200`} />
    <div className={`w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_2px_rgba(129,140,248,0.5)] animate-pulse relative z-10 ${vertical ? 'mt-auto mb-[-4px]' : 'ml-auto mr-[-4px]'}`} />
  </div>
);

export default function Workflows() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen w-full font-display selection:bg-indigo-500/30 bg-[#faf9fc] relative overflow-hidden flex flex-col items-center pb-12">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-200/30 rounded-full blur-[120px] opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px] opacity-40 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 pt-6 lg:pt-8 pb-12 flex flex-col items-center">
        
        <div className="w-full flex justify-start mb-4 lg:mb-6">
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-gray-600 font-medium hover:bg-white hover:text-gray-900 shadow-sm hover:-translate-x-1 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100/60 mx-auto mb-6 animate-[spin_10s_linear_infinite]">
            <div className="animate-[spin_10s_linear_infinite_reverse]">
              <GitMerge size={26} className="text-indigo-600" />
            </div>
          </div>
          <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-4">Operations Infrastructure</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
            Automated Workflows
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            We replace manual multi-step tasks with event-driven, autonomous pipelines that intelligently route data exactly where it needs to go.
          </p>
        </div>

        {/* Minimalist Workflow Diagram */}
        <div className="relative w-full max-w-5xl mx-auto mb-16 bg-white/40 backdrop-blur-3xl border border-white rounded-[3rem] p-6 lg:p-10 shadow-[0_10px_50px_-12px_rgba(79,70,229,0.1)]">
           <h3 className="text-center text-xs tracking-widest uppercase font-bold text-gray-400 mb-8">Visualizing an automation sequence</h3>
           
           {/* Desktop Horizontal Layout */}
           <div className="hidden lg:flex items-center justify-center w-full">
              <WorkflowDiagramBox 
                icon={Database} 
                title="Trigger Event" 
                description="A new lead is captured via your website or CRM." 
                color="bg-rose-50 border-rose-100" 
                delay="200ms"
              />
              <Connector delay="350ms" />
              <WorkflowDiagramBox 
                icon={Zap} 
                title="Processing" 
                description="LLMs qualify the lead and categorize the data instantly." 
                color="bg-purple-50 border-purple-100" 
                delay="500ms"
              />
              <Connector delay="650ms" />
              <WorkflowDiagramBox 
                icon={CheckCircle2} 
                title="Action Taken" 
                description="Slack alert sent. Email campaign triggered." 
                color="bg-emerald-50 border-emerald-100" 
                delay="800ms"
              />
           </div>

           {/* Mobile Vertical Layout */}
           <div className="flex lg:hidden flex-col items-center justify-center w-full">
              <WorkflowDiagramBox 
                icon={Database} 
                title="Trigger Event" 
                description="A new lead is captured via your website or CRM." 
                color="bg-rose-50 border-rose-100" 
                delay="200ms"
              />
              <Connector vertical delay="350ms" />
              <WorkflowDiagramBox 
                icon={Zap} 
                title="Processing" 
                description="LLMs qualify the lead and categorize the data instantly." 
                color="bg-purple-50 border-purple-100" 
                delay="500ms"
              />
              <Connector vertical delay="650ms" />
              <WorkflowDiagramBox 
                icon={CheckCircle2} 
                title="Action Taken" 
                description="Slack alert sent. Email campaign triggered." 
                color="bg-emerald-50 border-emerald-100" 
                delay="800ms"
              />
           </div>
        </div>

        {/* Closing details */}
        <div className="w-full max-w-3xl opacity-0 animate-[fade-in-up_0.8s_ease-out_forwards]" style={{ animationDelay: '1000ms' }}>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-10 lg:p-14 text-white shadow-[0_15px_50px_-12px_rgba(79,70,229,0.5)] flex flex-col items-center text-center relative overflow-hidden">
             {/* Decorative glow inside button container */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
             
             <div className="relative z-10">
               <h4 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Start Building</h4>
               <p className="text-indigo-100/90 font-medium mb-10 text-lg max-w-xl mx-auto leading-relaxed">Discuss how an automated workflow can completely replace the manual operational friction holding your team back.</p>
               <button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 text-lg rounded-full font-bold hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300">
                  Let's talk <ArrowRight size={20} />
               </button>
             </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
