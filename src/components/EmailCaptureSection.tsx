import React from 'react';
import { config } from '../config';

const EmailCaptureSection: React.FC = () => {
  const handleJoinWaitlist = () => {
    // Open Google Form in a new tab
    window.open(config.GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section className="section-padding bg-primary-600">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be First in Line
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our waitlist and get notified when CommuteTimely launches. 
            No spam, just one email when we're ready.
          </p>

          <div className="max-w-md mx-auto">
            <button
              onClick={handleJoinWaitlist}
              className="w-full bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Join Waitlist →
            </button>
          </div>

          <p className="text-sm text-primary-200 mt-6">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Social proof */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-primary-200">
            <div className="flex items-center">
              <span className="text-2xl mr-2">👥</span>
              <span className="text-sm">500+ waitlist signups</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">⭐</span>
              <span className="text-sm">Early access priority</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🎁</span>
              <span className="text-sm">Launch day perks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection; 