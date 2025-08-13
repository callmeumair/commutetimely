'use client'

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using CommuteTimely, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  These Terms of Service constitute a legally binding agreement between you and 
                  CommuteTimely regarding your use of our mobile application and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Use of the App
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  CommuteTimely provides intelligent commute alerts using real-time traffic data. 
                  You may use our services for personal, non-commercial purposes in accordance 
                  with these terms and applicable laws.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You agree not to use the app for any unlawful purpose or in any way that could 
                  damage, disable, overburden, or impair our servers or networks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  User Accounts and Responsibilities
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials 
                  and for all activities that occur under your account.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You must provide accurate and complete information when creating your account 
                  and keep it updated. You are responsible for any loss or damage resulting from 
                  unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Privacy and Data
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  By using our services, you consent to the collection and use of information 
                  as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Service Availability and Updates
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We strive to provide reliable and continuous service, but we do not guarantee 
                  that our services will be available at all times or free from errors.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We may update, modify, or discontinue features of our services at any time 
                  with or without notice to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by law, CommuteTimely shall not be liable for 
                  any indirect, incidental, special, consequential, or punitive damages resulting 
                  from your use of our services.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Our total liability to you for any claims arising from these terms or your use 
                  of our services shall not exceed the amount you paid us, if any, in the twelve 
                  months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Disclaimers
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind. 
                  We disclaim all warranties, express or implied, including but not limited to 
                  warranties of merchantability and fitness for a particular purpose.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We do not guarantee the accuracy, completeness, or usefulness of any information 
                  provided through our services, including traffic data and commute predictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Termination
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You may terminate your account at any time by deleting the app or contacting us. 
                  We may terminate or suspend your access to our services immediately, without prior 
                  notice, for any reason.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Upon termination, your right to use our services will cease immediately, and 
                  we may delete your account and data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Governing Law
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with 
                  the laws of the jurisdiction in which CommuteTimely operates.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Any disputes arising from these terms or your use of our services shall be 
                  resolved through binding arbitration or in the courts of competent jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify 
                  users of any material changes by posting the new terms on this page.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Your continued use of our services after any changes constitutes acceptance 
                  of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
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
