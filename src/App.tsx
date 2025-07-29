import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TargetUserSection from './components/TargetUserSection';
import EmailCaptureSection from './components/EmailCaptureSection';
import Footer from './components/Footer';
import { config } from './config';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChatClick = () => {
    // Open Google Form in a new tab
    window.open(config.GOOGLE_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="animated-bg"></div>
      <div className="stars"></div>
      <div className="diagonal-lines"></div>
      
      {/* Additional floating blobs */}
      <div className="floating-blob-1"></div>
      <div className="floating-blob-2"></div>
      <div className="floating-blob-3"></div>
      
      {/* Floating clock icon */}
      <div className="floating-clock">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TargetUserSection />
        <EmailCaptureSection />
        <Footer />
      </div>

      {/* Floating chat bubble */}
      <div className="floating-chat" onClick={handleChatClick}>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Notify Me</span>
          <span className="text-lg">💬</span>
        </div>
      </div>
    </div>
  );
}

export default App;
