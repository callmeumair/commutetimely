import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import TargetUserSection from './components/TargetUserSection';
import EmailCaptureSection from './components/EmailCaptureSection';
import Footer from './components/Footer';

function App() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For MVP, you can use Formspree, Mailchimp, or Google Sheets
    // For now, we'll just log the email
    console.log('Email submitted:', email);
    alert('Thanks for joining our waitlist! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TargetUserSection />
      <EmailCaptureSection 
        email={email} 
        setEmail={setEmail} 
        onSubmit={handleEmailSubmit} 
      />
      <Footer />
    </div>
  );
}

export default App;
