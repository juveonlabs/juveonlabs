import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Agents from './Agents.jsx';
import About from './About.jsx';
import Workflows from './Workflows.jsx';
import CallAgents from './CallAgents.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import TermsOfService from './TermsOfService.jsx';
import BackToTop from './BackToTop.jsx';
import CustomCursor from './CustomCursor.jsx';
import SplashScreen from './SplashScreen.jsx';
import './index.css';

function AppWrapper() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <BrowserRouter>
          <CustomCursor />
          <BackToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/about" element={<About />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/call-agents" element={<CallAgents />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
);

