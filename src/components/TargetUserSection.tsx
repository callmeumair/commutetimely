import React from 'react';

const TargetUserSection: React.FC = () => {
  const userTypes = [
    {
      icon: '👔',
      title: 'Office Workers',
      description: 'Never miss another meeting or deadline with precise departure times.',
      features: ['9-5 schedules', 'Meeting times', 'Deadline pressure']
    },
    {
      icon: '🎓',
      title: 'University Staff',
      description: 'Arrive on campus exactly when you need to, every single day.',
      features: ['Class schedules', 'Office hours', 'Research deadlines']
    },
    {
      icon: '🚚',
      title: 'Delivery Drivers',
      description: 'Optimize your routes and meet delivery windows with confidence.',
      features: ['Route optimization', 'Delivery windows', 'Customer satisfaction']
    }
  ];

  return (
    <section className="section-padding bg-gray-900/50 backdrop-blur-sm">
      <div className="container-max">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 fade-in">
            Perfect For
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto fade-in px-4">
            Anyone who needs to be somewhere on time, every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 px-4 lg:px-0">
          {userTypes.map((userType, index) => (
            <div key={index} className="card scale-in">
              <div className="text-center mb-6">
                <div className="text-3xl sm:text-4xl mb-4">{userType.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {userType.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {userType.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {userType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 lg:mt-16 text-center fade-in px-4 lg:px-0">
          <div className="card max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30 p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">
              Ready to never be late again?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-4 lg:mb-6 max-w-2xl mx-auto">
              Join our waitlist and be among the first to experience stress-free commuting.
            </p>
            <button className="btn-primary glow">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUserSection; 