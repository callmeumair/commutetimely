import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TargetUserSection from './components/TargetUserSection';
import EmailCaptureSection from './components/EmailCaptureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TargetUserSection />
      <EmailCaptureSection />
      <Footer />
    </div>
  );
}

export default App;
