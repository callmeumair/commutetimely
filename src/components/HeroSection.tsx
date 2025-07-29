import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Never Be Late Again.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get one daily push notification that tells you exactly when to leave.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Join Waitlist →
            </button>
          </div>
          
          {/* Right side - App mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
                    <div className="text-sm font-semibold text-gray-900">CommuteTimely</div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  {/* Notification */}
                  <div className="bg-primary-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-600">Now</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      Time to leave!
                    </div>
                    <div className="text-xs text-gray-600">
                      Leave at 8:12 AM to arrive on time
                    </div>
                  </div>
                  
                  {/* Time display */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">8:12 AM</div>
                    <div className="text-sm text-gray-500">Departure time</div>
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="flex justify-around pt-4 border-t border-gray-100">
                    <div className="w-6 h-6 bg-primary-500 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
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