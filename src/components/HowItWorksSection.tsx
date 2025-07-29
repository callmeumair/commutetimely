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
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to never be late again
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step number and icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Visual flow indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 