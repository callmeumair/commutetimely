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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight fade-in">
                Never Be Late
                <span className="block gradient-text">Again.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 fade-in">
                One smart notification that tells you exactly when to leave.
              </p>
            </div>
            
            <div className="fade-in">
              <button 
                onClick={handleJoinWaitlist}
                className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 glow w-full sm:w-auto"
              >
                Join Waitlist →
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-gray-500 text-sm fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>500+ signups</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Launch Q1 2025</span>
              </div>
            </div>
          </div>
          
          {/* Right side - App mockup */}
          <div className="flex justify-center lg:justify-end slide-in-right order-1 lg:order-2">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 sm:w-72 h-80 sm:h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 ease-in-out hover:scale-105">
                <div className="w-full h-full bg-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">CT</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white">CommuteTimely</div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-gray-400 text-xs">⚙️</span>
                    </div>
                  </div>
                  
                  {/* Notification */}
                  <div className="bg-gray-700/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-gray-600">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-gray-400">Now</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                      Time to leave!
                    </div>
                    <div className="text-xs text-gray-400">
                      Leave at 8:12 AM to arrive on time
                    </div>
                  </div>
                  
                  {/* Time display */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <div className="text-2xl sm:text-4xl font-bold gradient-text mb-2 sm:mb-3">8:12 AM</div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Departure time</div>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="flex justify-around pt-4 sm:pt-6 border-t border-gray-700">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">🏠</span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs">📊</span>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs">👤</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements - hidden on mobile */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-500/30 animate-pulse hidden sm:flex">
                <span className="text-2xl">🚗</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse hidden sm:flex">
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