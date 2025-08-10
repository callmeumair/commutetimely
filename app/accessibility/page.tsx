import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility - CommuteTimely',
  description: 'Learn about CommuteTimely\'s commitment to accessibility and inclusive design for all users.',
  openGraph: {
    title: 'Accessibility - CommuteTimely',
    description: 'Learn about CommuteTimely\'s commitment to accessibility and inclusive design for all users.',
  },
}

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      title: 'Screen Reader Support',
      description: 'Full compatibility with screen readers including VoiceOver, NVDA, and JAWS.',
      icon: '🔊'
    },
    {
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility with logical tab order and keyboard shortcuts.',
      icon: '⌨️'
    },
    {
      title: 'High Contrast Mode',
      description: 'Enhanced contrast options for users with visual impairments.',
      icon: '🎨'
    },
    {
      title: 'Reduced Motion',
      description: 'Respects user preferences for reduced motion and animations.',
      icon: '🔄'
    },
    {
      title: 'Large Text Support',
      description: 'Scalable text sizes and readable typography for all users.',
      icon: '📝'
    },
    {
      title: 'Voice Commands',
      description: 'Voice-activated controls for hands-free operation.',
      icon: '🎤'
    }
  ]

  const complianceStandards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container-max py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Accessibility
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            CommuteTimely is committed to making smart commuting accessible to everyone
          </p>
        </div>
      </div>

      {/* Commitment Statement */}
      <div className="container-max pb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Accessibility Commitment
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We believe that technology should be accessible to everyone, regardless of ability. 
            CommuteTimely is designed with accessibility as a core principle, ensuring that 
            users with disabilities can fully benefit from our smart commuting solutions.
          </p>
        </div>
      </div>

      {/* Accessibility Features */}
      <div className="container-max pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Accessibility Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accessibilityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="container-max pb-16">
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Compliance Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-max pb-16 sm:pb-20 md:pb-24">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            If you encounter any accessibility issues or have suggestions for improvement, 
            we want to hear from you. Your feedback helps us make CommuteTimely better for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:accessibility@commutetimely.com"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Contact Accessibility Team
            </a>
            <a
              href="/support"
              className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              Get Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
