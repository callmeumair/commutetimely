import React from 'react';
import { config } from '../config';

const HeroSection: React.FC = () => {
  const handleJoinWaitlist = () => {
    // Open Google Form in a new tab
    window.open(config.GOOGLE_FORM_URL, '_blank');
  };

  return (
    <section className="section-padding bg-black relative">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-in">
              Never Be Late Again.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed fade-in">
              Get one daily push notification that tells you exactly when to leave.
            </p>
            <div className="fade-in">
              <button 
                onClick={handleJoinWaitlist}
                className="btn-primary text-lg px-8 py-4 glow"
              >
                Join Waitlist →
              </button>
            </div>
          </div>
          
          {/* Right side - App mockup */}
          <div className="flex justify-center lg:justify-end slide-in-right">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 ease-in-out hover:scale-[1.02]">
                <div className="w-full h-full bg-gray-800 rounded-2xl p-4 flex flex-col">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
                    <div className="text-sm font-semibold text-white">CommuteTimely</div>
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                  </div>
                  
                  {/* Notification */}
                  <div className="bg-gray-700/50 rounded-xl p-4 mb-4 border border-gray-600">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-400">Now</span>
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">
                      Time to leave!
                    </div>
                    <div className="text-xs text-gray-400">
                      Leave at 8:12 AM to arrive on time
                    </div>
                  </div>
                  
                  {/* Time display */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <div className="text-3xl font-bold gradient-text mb-2">8:12 AM</div>
                    <div className="text-sm text-gray-400">Departure time</div>
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="flex justify-around pt-4 border-t border-gray-700">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse">
                <span className="text-2xl">🚗</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30 animate-pulse">
                <span className="text-xl">⏰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 