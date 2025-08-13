'use client'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Fallback gradient for browsers that don't support animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20" />
        
        {/* Large distant stars - slow twinkle */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`large-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: '4s',
                opacity: 0.3 + Math.random() * 0.4,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
              }}
            />
          ))}
        </div>

        {/* Medium stars - medium twinkle */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute w-0.5 h-0.5 bg-cyan-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: '3s',
                opacity: 0.2 + Math.random() * 0.3,
                boxShadow: '0 0 3px rgba(103, 232, 249, 0.6)'
              }}
            />
          ))}
        </div>

        {/* Small stars - fast twinkle */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={`small-${i}`}
              className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '2s',
                opacity: 0.1 + Math.random() * 0.2,
                boxShadow: '0 0 2px rgba(147, 197, 253, 0.5)'
              }}
            />
          ))}
        </div>

        {/* Shooting stars - occasional streaks */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 8}s`,
                animationDuration: '1s',
                opacity: 0.6,
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.9)'
              }}
            />
          ))}
        </div>

        {/* Subtle nebula-like clouds */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Content with semi-transparent backgrounds */}
      <div className="relative z-10">
        <div className="container mx-auto py-12 px-6">
          <div className="prose prose-lg mx-auto prose-invert max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This may include your name, email address, 
                  location data, commute preferences, and other information necessary to provide our services.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We also automatically collect certain information about your device and how you interact 
                  with our app, including your IP address, device type, operating system, and usage patterns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, 
                  including processing your commute alerts, analyzing traffic patterns, and optimizing 
                  our algorithms for better accuracy.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Your information helps us personalize your experience, send important notifications, 
                  and ensure the security and reliability of our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We regularly review and update our security practices to ensure they meet industry 
                  standards and protect your data effectively.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy or as required by law.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We may share aggregated, anonymized data with partners and service providers to improve 
                  our services and develop new features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You have the right to access, update, or delete your personal information at any time 
                  through your account settings or by contacting us directly.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can also opt out of certain communications and control how your data is used 
                  through our privacy settings and preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We will notify you of any material changes by posting the new policy on this page 
                  and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-gray-300">
                    <strong>Email:</strong> umerpatel1540@gmail.com
                  </p>
                </div>
              </section>

              <div className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-white/10">
                <p>Last Updated: January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced star animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-2px) translateX(1px); }
          50% { transform: translateY(-1px) translateX(-1px); }
          75% { transform: translateY(1px) translateX(2px); }
        }
        
        .animate-pulse {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-ping {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
