import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - CommuteTimely',
  description: 'Learn about how CommuteTimely uses cookies and similar technologies to improve your experience.',
  openGraph: {
    title: 'Cookie Policy - CommuteTimely',
    description: 'Learn about how CommuteTimely uses cookies and similar technologies to improve your experience.',
  },
}

export default function CookiesPage() {
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
      examples: ['Authentication cookies', 'Security cookies', 'Session cookies'],
      necessary: true
    },
    {
      type: 'Performance Cookies',
      description: 'These cookies collect information about how visitors use the website, helping us improve performance and user experience.',
      examples: ['Analytics cookies', 'Error tracking cookies', 'Performance monitoring'],
      necessary: false
    },
    {
      type: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: ['Language preferences', 'Theme settings', 'User preferences'],
      necessary: false
    },
    {
      type: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies'],
      necessary: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container-max py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Cookie Policy
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Understanding how we use cookies to improve your CommuteTimely experience
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* What Are Cookies */}
      <div className="container-max pb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            What Are Cookies?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences, 
            analyzing how you use our site, and personalizing content.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We use cookies and similar technologies to ensure our website works properly, 
            to understand how you interact with our services, and to improve your experience.
          </p>
        </div>
      </div>

      {/* Cookie Types */}
      <div className="container-max pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Types of Cookies We Use
        </h2>
        <div className="space-y-6">
          {cookieTypes.map((cookie, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {cookie.type}
                </h3>
                {cookie.necessary && (
                  <span className="bg-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
                    Necessary
                  </span>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {cookie.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-400">Examples:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {cookie.examples.map((example, i) => (
                    <li key={i} className="text-sm">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cookie Management */}
      <div className="container-max pb-16">
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
            Managing Your Cookie Preferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                You can control and manage cookies through your browser settings. 
                Most browsers allow you to view, delete, and block cookies.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Cookie Consent</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                When you first visit our site, you will see a cookie consent banner 
                where you can choose which types of cookies to accept.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third-Party Cookies */}
      <div className="container-max pb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Third-Party Cookies
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Some cookies on our website are set by third-party services that we use to 
            improve our website functionality and user experience. These services include:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
            <li>Google Analytics for website performance analysis</li>
            <li>Google Fonts for typography</li>
            <li>Social media platforms for sharing functionality</li>
            <li>Payment processors for secure transactions</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container-max pb-16 sm:pb-20 md:pb-24">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Questions About Cookies?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about our use of cookies or would like to 
            exercise your rights regarding your personal data, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@commutetimely.com"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Contact Privacy Team
            </a>
            <a
              href="/privacy-policy"
              className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
