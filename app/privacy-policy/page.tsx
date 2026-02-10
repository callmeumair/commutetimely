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
              Privacy Policy — CommuteTimely
            </h1>

            <div className="space-y-8">
              <section>
                <p className="text-gray-300 leading-relaxed font-semibold">
                  Last updated: February 2026
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  CommuteTimely is designed with privacy as a core principle. We do not collect, store, sell, or share personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Data Collection
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  CommuteTimely does not collect any personal or identifiable data from users.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  All commute-related calculations (such as route planning, leave-time suggestions, and reminders) are performed locally on your device. This data never leaves your device and is not transmitted to our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Analytics
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  CommuteTimely does not use third-party analytics, tracking SDKs, advertising networks, or profiling tools that collect user data.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Any internal diagnostics used are limited to non-identifiable, device-local information strictly for app functionality and reliability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Location Information
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If you grant location access, it is used only on your device to calculate commute-related features. Location data is not stored, logged, or shared by CommuteTimely.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Data Sharing
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell, rent, trade, or share user data with third parties. Since no personal data is collected, there is nothing to share.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Children’s Privacy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  CommuteTimely does not knowingly collect data from anyone, including children under the age of 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If the app’s data practices change in the future, this privacy policy will be updated accordingly, and users will be informed where required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Contact
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions or concerns about privacy, you can contact us at:
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-gray-300">
                    <a href="mailto:hello@commutetimely.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                      hello@commutetimely.com
                    </a>
                  </p>
                </div>
              </section>
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
