import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - CommuteTimely',
  description: 'Frequently asked questions about CommuteTimely. Find answers to common questions about our smart commute notification app.',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {/* Getting Started */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">Getting Started</h2>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">How do I set up my first commute?</h3>
                <p className="text-gray-300">
                  Simply download the app, create an account, and add your home and work addresses. 
                  Set your preferred arrival time and choose your transport mode. The app will start 
                  learning your patterns immediately.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Does the app work in my city?</h3>
                <p className="text-gray-300">
                  CommuteTimely works in over 50 major cities worldwide and is constantly expanding. 
                  We use global traffic data sources to provide accurate predictions wherever you are.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">How long does it take to learn my commute?</h3>
                <p className="text-gray-300">
                  The app starts providing predictions immediately, but accuracy improves significantly 
                  after 3-5 days of regular use as it learns your specific patterns and preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Features & Functionality */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">Features & Functionality</h2>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">How does CommuteTimely know when to notify me?</h3>
                <p className="text-gray-300">
                  The app uses real-time traffic data, historical patterns, and your personal commute 
                  preferences to calculate the optimal departure time. It continuously monitors traffic 
                  conditions and adjusts notifications accordingly.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Can I use the app for multiple destinations?</h3>
                <p className="text-gray-300">
                  Yes! You can add multiple destinations like work, gym, grocery store, etc. Each 
                  destination can have its own arrival time and transport mode preferences.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">What transport modes are supported?</h3>
                <p className="text-gray-300">
                  We support driving, public transit, walking, and cycling. The app adapts its 
                  predictions based on your chosen transport mode and available data for each type.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Can I customize notification times?</h3>
                <p className="text-gray-300">
                  Absolutely! You can set multiple notification times (e.g., 15 minutes before departure, 
                  5 minutes before departure) and choose which ones you want to receive.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">Privacy & Security</h2>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">How does CommuteTimely protect my privacy?</h3>
                <p className="text-gray-300">
                  Your privacy is our top priority. All location data is processed locally on your device, 
                  and we never sell or share your personal information. We use industry-standard encryption 
                  and follow GDPR compliance guidelines.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">What data does the app collect?</h3>
                <p className="text-gray-300">
                  We collect location data (processed locally), commute preferences, and app usage statistics. 
                  We never collect personal information like names, addresses, or contact details.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Can I delete my data?</h3>
                <p className="text-gray-300">
                  Yes, you can delete your account and all associated data at any time through the app 
                  settings. We'll permanently remove all your information from our systems.
                </p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">Troubleshooting</h2>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">I&apos;m not receiving notifications. What should I do?</h3>
                <p className="text-gray-300">
                  First, check that notifications are enabled in your device settings and that location 
                  services are turned on. Also ensure the app has permission to send notifications. 
                  If the issue persists, try restarting the app or reinstalling it.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">The arrival times seem inaccurate. Why?</h3>
                <p className="text-gray-300">
                  The app learns from your commute patterns over time. If predictions seem off initially, 
                  give it a few days to learn your specific route and timing. You can also manually 
                  adjust your route preferences for better accuracy.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">The app crashes or freezes. How can I fix this?</h3>
                <p className="text-gray-300">
                  Try closing and reopening the app, or restart your device. If the problem continues, 
                  uninstall and reinstall the app from your device&apos;s app store. Make sure you have the 
                  latest version installed.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">How do I update my commute settings?</h3>
                <p className="text-gray-300">
                  Go to the app settings and select &quot;Commute Settings.&quot; You can modify addresses, 
                  arrival times, transport modes, and notification preferences at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing & Availability */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-[#d4af37]">Pricing & Availability</h2>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Is CommuteTimely free to use?</h3>
                <p className="text-gray-300">
                  Yes! The core features of CommuteTimely are completely free. We may offer premium 
                  features in the future, but the basic commute notification service will always be free.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Which devices and operating systems are supported?</h3>
                <p className="text-gray-300">
                  CommuteTimely is available for iOS (iPhone) and Android devices. We support iOS 12+ 
                  and Android 8+ with regular updates for newer versions.
                </p>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3">When will the app be available in my country?</h3>
                <p className="text-gray-300">
                  We&apos;re constantly expanding to new regions. If CommuteTimely isn&apos;t available in your 
                  country yet, you can sign up for our waitlist to be notified when we launch there.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="bg-gradient-to-r from-[#0f3d3e] to-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Contact Support
              </a>
              <a 
                href="/support"
                className="border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold rounded-lg px-6 py-3 transition-all duration-200"
              >
                Visit Support Center
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 