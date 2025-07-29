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
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perfect For
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Anyone who needs to be somewhere on time, every time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {userTypes.map((userType, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{userType.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {userType.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {userType.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {userType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to never be late again?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join our waitlist and be among the first to experience stress-free commuting.
            </p>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUserSection; 