import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TargetUserSection from './components/TargetUserSection';
import EmailCaptureSection from './components/EmailCaptureSection';
import Footer from './components/Footer';

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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="animated-bg"></div>
      <div className="stars"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TargetUserSection />
        <EmailCaptureSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
