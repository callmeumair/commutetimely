import React from 'react';
import { config } from '../config';

const EmailCaptureSection: React.FC = () => {
  const handleJoinWaitlist = () => {
    // Open Google Form in a new tab
    window.open(config.GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 fade-in">
            Be First in Line
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto fade-in px-4">
            Join our waitlist and get notified when CommuteTimely launches. 
            No spam, just one email when we're ready.
          </p>

          <div className="max-w-md mx-auto fade-in px-4">
            <button
              onClick={handleJoinWaitlist}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 text-base sm:text-lg glow"
            >
              Join Waitlist →
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 mt-4 lg:mt-6 fade-in px-4">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Social proof */}
        <div className="mt-8 lg:mt-12 text-center fade-in px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">👥</span>
              <span className="text-xs sm:text-sm">500+ waitlist signups</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">⭐</span>
              <span className="text-xs sm:text-sm">Early access priority</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl mr-2">🎁</span>
              <span className="text-xs sm:text-sm">Launch day perks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection; 