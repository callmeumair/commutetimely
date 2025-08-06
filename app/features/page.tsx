import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - CommuteTimely',
  description: 'Discover the powerful features of CommuteTimely that help you never be late again. Smart notifications, real-time traffic monitoring, and more.',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        
        <div className="space-y-16">
          {/* Smart Notifications */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Smart Notifications</h2>
                <p className="text-gray-300 mb-6">
                  Get intelligent notifications that tell you exactly when to leave. Our AI analyzes real-time traffic data, 
                  historical patterns, and your personal commute preferences to calculate the optimal departure time.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Real-time traffic monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Machine learning predictions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Customizable notification times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Multiple route support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔔</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
                  <p className="text-gray-400">Never miss your optimal departure time</p>
                </div>
              </div>
            </div>
          </section>

          {/* Multi-Transport Support */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Transport</h3>
                    <p className="text-gray-400">Support for driving, transit, walking, and cycling</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Multi-Transport Support</h2>
                <p className="text-gray-300 mb-6">
                  Whether you drive, take public transit, walk, or cycle, CommuteTimely adapts to your preferred 
                  mode of transportation and provides accurate timing predictions.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Driving with real-time traffic</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Public transit schedules</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Walking and cycling routes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Mixed-mode commutes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Personalization */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Personalized Experience</h2>
                <p className="text-gray-300 mb-6">
                  The app learns from your commute patterns and preferences to provide increasingly accurate predictions. 
                  Customize your experience with flexible settings and preferences.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>AI-powered learning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Custom arrival times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Flexible notification settings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Multiple destinations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                  <p className="text-gray-400">Tailored to your unique commute</p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                    <p className="text-gray-400">Your data stays on your device</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Privacy & Security</h2>
                <p className="text-gray-300 mb-6">
                  Your privacy is our top priority. All location data is processed locally on your device, 
                  and we never sell or share your personal information.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>Local data processing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>No data selling</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">✓</span>
                    <span>GDPR compliant</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 