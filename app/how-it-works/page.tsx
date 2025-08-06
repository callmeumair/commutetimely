import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - CommuteTimely',
  description: 'Learn how CommuteTimely works to help you never be late again. Simple setup, smart notifications, and accurate predictions.',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">How It Works</h1>
        
        <div className="space-y-16">
          {/* Step 1: Setup */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    1
                  </div>
                  <h2 className="text-3xl font-bold">Setup Your Commute</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Start by adding your home and work addresses. You can also add multiple destinations 
                  if you have different workplaces or regular stops. The app will use these locations 
                  to calculate your optimal departure times.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Add home and work addresses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Set your preferred arrival time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Choose your transport mode</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Enable notifications and location</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                  <p className="text-gray-400">Just add your addresses and preferences</p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2: Learning */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Learning</h3>
                    <p className="text-gray-400">The app learns from your patterns</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    2
                  </div>
                  <h2 className="text-3xl font-bold">AI Learns Your Patterns</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  The app uses machine learning to understand your commute patterns. It analyzes your 
                  travel times, preferred routes, and traffic conditions to build a personalized model 
                  that gets more accurate over time.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Analyzes your travel patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Learns from traffic conditions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Adapts to your preferences</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Improves accuracy over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 3: Monitoring */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    3
                  </div>
                  <h2 className="text-3xl font-bold">Real-Time Monitoring</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  CommuteTimely continuously monitors traffic conditions, weather, and other factors 
                  that could affect your commute. The app processes this data in real-time to provide 
                  the most accurate departure recommendations.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Real-time traffic monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Weather condition analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Event and construction alerts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Public transit updates</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live Monitoring</h3>
                  <p className="text-gray-400">24/7 traffic and condition tracking</p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4: Notifications */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔔</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
                    <p className="text-gray-400">Get notified at the perfect time</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    4
                  </div>
                  <h2 className="text-3xl font-bold">Smart Notifications</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  When it&apos;s time to leave, you&apos;ll receive a smart notification that tells you exactly 
                  when to depart. The app considers all factors and gives you the optimal departure time 
                  to ensure you arrive on time.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Optimal departure time calculation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Customizable notification times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Multiple reminder options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#d4af37] text-xl">•</span>
                    <span>Emergency delay alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Behind */}
          <section className="bg-gradient-to-r from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
            <h2 className="text-3xl font-bold mb-8 text-center">Technology Behind CommuteTimely</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-300">
                  Advanced AI algorithms that learn from your commute patterns and adapt to changing conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
                <p className="text-gray-300">
                  Integration with multiple traffic data sources for the most accurate predictions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-300">
                  All processing happens locally on your device, keeping your data secure and private.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 