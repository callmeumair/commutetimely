import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Set your destination and desired arrival time.',
      description: 'Tell us where you need to go and when you want to arrive.',
      icon: '📍'
    },
    {
      number: '2',
      title: 'We check real-time traffic and transit data each morning.',
      description: 'Our system analyzes current conditions to calculate the optimal departure time.',
      icon: '🚦'
    },
    {
      number: '3',
      title: 'You get a push: "Leave at 8:12 AM" – and you\'re always on time.',
      description: 'One simple notification tells you exactly when to leave.',
      icon: '📱'
    }
  ];

  return (
    <section className="section-padding bg-gray-900/50 backdrop-blur-sm">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 fade-in">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto fade-in px-4">
            Three simple steps to never be late again
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4 lg:px-0">
          {steps.map((step, index) => (
            <div key={index} className="text-center scale-in">
              {/* Step number and icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700 hover:border-gray-600 transition-all duration-500 ease-in-out hover:scale-110">
                  <span className="text-xl sm:text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold glow">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-700 transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Visual flow indicator */}
        <div className="mt-12 flex justify-center fade-in">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full glow"></div>
            <div className="w-6 h-0.5 sm:w-8 bg-gray-700"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full glow"></div>
            <div className="w-6 h-0.5 sm:w-8 bg-gray-700"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 