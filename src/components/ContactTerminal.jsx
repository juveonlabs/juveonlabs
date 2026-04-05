import React, { useState } from 'react';

const ContactTerminal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    payload: ''
  });
  
  const [transmitStatus, setTransmitStatus] = useState('IDLE');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    setTransmitStatus('TRANSMITTING...');
    setTimeout(() => setTransmitStatus('SUCCESS. LOG_SAVED.'), 1500);
    setTimeout(() => setTransmitStatus('IDLE'), 4000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-24 relative z-20">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 pb-4 border-[#111]">
        <h2 className="text-3xl md:text-5xl font-bold uppercase ndot-text glitch-hover text-[#111] leading-none mb-2 md:mb-0">
          GET IN TOUCH
        </h2>
        <span className="font-bold mono-text opacity-50 uppercase text-xs text-[#111]">
          CONTACT
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        
        {/* Terminal Input Array — White Theme */}
        <div className="flex-1 bg-white p-6 md:p-10 rounded-sm border-[3px] border-[#111] shadow-[8px_8px_0_rgba(17,17,17,0.15)] relative overflow-hidden group">
           
           <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]" style={{ 
              background: `linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 50%)`,
              backgroundSize: `100% 4px`
           }}></div>

           <div className="text-[#ff3333] opacity-60 text-xs mono-text mb-8 border-b border-black/10 pb-4 flex justify-between">
              <span>SEND A MESSAGE</span>
              <span className="animate-pulse">_</span>
           </div>

           <form onSubmit={handleTransmit} className="space-y-6 relative z-20">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group/input">
                  <label className="block text-[10px] text-[#111] mono-text uppercase font-bold mb-2 group-focus-within/input:text-[#ff3333] transition-colors">
                    YOUR NAME
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#f4f4f5] border border-black/10 text-[#111] px-4 py-3 text-sm mono-text focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_10px_rgba(255,51,51,0.15)] transition-all font-bold placeholder-black/40"
                    placeholder="Enter Name"
                  />
                </div>
                
                <div className="group/input">
                  <label className="block text-[10px] text-[#111] mono-text uppercase font-bold mb-2 group-focus-within/input:text-[#ff3333] transition-colors">
                    YOUR EMAIL
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#f4f4f5] border border-black/10 text-[#111] px-4 py-3 text-sm mono-text focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_10px_rgba(255,51,51,0.15)] transition-all font-bold placeholder-black/40"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div className="group/input">
                <label className="block text-[10px] text-[#111] mono-text uppercase font-bold mb-2 group-focus-within/input:text-[#ff3333] transition-colors">
                  COMPANY NAME (OPTIONAL)
                </label>
                <input 
                  type="text" 
                  name="company"
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f5] border border-black/10 text-[#111] px-4 py-3 text-sm mono-text focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_10px_rgba(255,51,51,0.15)] transition-all font-bold placeholder-black/40"
                  placeholder="Enter Company Name"
                />
              </div>

              <div className="group/input">
                <label className="block text-[10px] text-[#111] mono-text uppercase font-bold mb-2 group-focus-within/input:text-[#ff3333] transition-colors">
                  YOUR MESSAGE
                </label>
                <textarea 
                  name="payload"
                  required
                  rows="4"
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f5] border border-black/10 text-[#111] px-4 py-3 text-sm mono-text focus:outline-none focus:border-[#ff3333] focus:shadow-[0_0_10px_rgba(255,51,51,0.15)] transition-all font-bold resize-none placeholder-black/40"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-black/10">
                 <div className="text-[#ff3333] font-bold text-xs mono-text">
                   STATUS: <span className={transmitStatus !== 'IDLE' ? 'animate-pulse' : ''}>{transmitStatus}</span>
                 </div>
                 
                 <button type="submit" className="retro-btn text-xs">
                   [ SEND MESSAGE ]
                 </button>
              </div>

           </form>
        </div>

        {/* Calendly Action Block */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6">
           
           <div className="border-[3px] border-[#111] p-6 bg-white shadow-[6px_6px_0_rgba(17,17,17,0.15)] transition-transform hover:-translate-y-1">
             <h3 className="text-xl font-bold ndot-text uppercase mb-2">BOOK DIRECTLY</h3>
             <p className="mono-text text-xs opacity-70 mb-6 font-bold">Skip the queue. Book a high-level technical audit on Calendly directly with our engineers.</p>
             
             <a href="https://calendly.com/juveonlabs" target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full relative overflow-hidden group/cal cursor-pointer bg-[#111] text-white py-6 border-[3px] border-[#111] active:translate-y-1 transition-all">
                  <div className="absolute inset-0 bg-[#ff3333] w-0 group-hover/cal:w-full transition-all duration-300 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center justify-center font-bold mono-text uppercase tracking-widest text-sm">
                    BOOK ON CALENDLY <span className="ml-3 group-hover/cal:translate-x-2 transition-transform">-&gt;</span>
                  </span>
                </button>
             </a>
           </div>

        </div>

      </div>

    </div>
  );
};

export default ContactTerminal;
