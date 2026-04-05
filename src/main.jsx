import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Agents from './Agents.jsx';
import About from './About.jsx';
import Workflows from './Workflows.jsx';
import CallAgents from './CallAgents.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import TermsOfService from './TermsOfService.jsx';
import Contact from './Contact.jsx';
import BackToTop from './BackToTop.jsx';
import GamifiedCursor from './components/GamifiedCursor.jsx';
import ScrollLines from './components/ScrollLines.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import Footer from './Footer.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <GamifiedCursor />
        <ScrollLines />
        <BackToTop />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/about" element={<About />} />
              <Route path="/workflows" element={<Workflows />} />
              <Route path="/call-agents" element={<CallAgents />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  </React.StrictMode>,
);

