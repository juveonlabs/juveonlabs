import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CrtMonitorHero from './components/CrtMonitorHero';
import TerminalPanel from './components/TerminalPanel';
import JourneyFlowchart from './components/JourneyFlowchart';
import ContactTerminal from './components/ContactTerminal';
import MeetTheTeam from './components/MeetTheTeam';
import SplashScreen from './SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('splashSeen');
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-grid flex flex-col min-h-screen relative selection:bg-red-500 selection:text-white">
      
      {/* Global Checkered Scan Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay" style={{ 
        background: `linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,1) 50%)`,
        backgroundSize: `100% 4px`
      }} />

      {showSplash && <SplashScreen onComplete={() => {
        setShowSplash(false);
        sessionStorage.setItem('splashSeen', 'true');
      }} />}

      <Navbar />
      
      <main className={`flex flex-col w-full z-10 relative transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        {/* Landing Section */}
        <section className="w-full min-h-[90vh] pb-16 flex justify-center items-center px-4 md:px-8">
           <CrtMonitorHero autoPower={!showSplash} />
        </section>
        
        {/* Services Section Below */}
        <section id="services" className="w-full min-h-screen bg-black/5">
           <TerminalPanel />
        </section>

        {/* Flowchart Journey Section */}
        <section className="w-full border-t-2 border-[#111]">
           <JourneyFlowchart />
        </section>

        {/* Unified Communications Terminal */}
        <section className="w-full border-t-2 border-[#111] bg-black/5">
           <ContactTerminal />
        </section>

        {/* Meet the Team Section */}
        <section className="w-full border-t-2 border-[#111]">
           <MeetTheTeam />
        </section>
      </main>

    </div>
  );
}

export default App;
