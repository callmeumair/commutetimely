import React from 'react';

interface EmailCaptureSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const EmailCaptureSection: React.FC<EmailCaptureSectionProps> = ({ 
  email, 
  setEmail, 
  onSubmit 
}) => {
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

          <form onSubmit={onSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
              >
                Notify Me
              </button>
            </div>
          </form>

          <p className="text-sm text-primary-200 mt-4">
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