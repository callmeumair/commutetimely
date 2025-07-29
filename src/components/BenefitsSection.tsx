import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: '✨',
      title: 'No more guessing',
      description: 'Get precise departure times based on real-time data, not estimates.'
    },
    {
      icon: '🛣️',
      title: 'Traffic- and weather-aware',
      description: 'Our system considers current traffic conditions and weather to give you the most accurate timing.'
    },
    {
      icon: '🔕',
      title: 'One push per day, no noise',
      description: 'Just one notification when it\'s time to leave. No spam, no distractions.'
    },
    {
      icon: '📅',
      title: 'Sync with your routine',
      description: 'Set up your regular destinations and arrival times once, then forget about it.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why CommuteTimely?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, smart, and always on time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Arrive on time, every time
            </h3>
            <p className="text-gray-600">
              Join thousands of commuters who have eliminated the stress of being late with our smart timing system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 