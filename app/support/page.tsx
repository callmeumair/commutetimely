import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support - CommuteTimely',
  description: 'Get help and support for CommuteTimely app. Find answers to common questions and contact our support team.',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Help */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Quick Help</h2>
            
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">Getting Started</h3>
                <div className="space-y-3 text-gray-300">
                  <p>1. Download the app from your device&apos;s app store</p>
                  <p>2. Create an account or sign in</p>
                  <p>3. Add your home and work addresses</p>
                  <p>4. Set your preferred arrival time</p>
                  <p>5. Enable notifications and location services</p>
                </div>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">Common Issues</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">App not sending notifications</h4>
                    <p className="text-gray-300 text-sm">Check that notifications are enabled in your device settings and that location services are turned on.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Inaccurate arrival times</h4>
                    <p className="text-gray-300 text-sm">The app learns from your commute patterns. Give it a few days to improve accuracy.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">App crashes or freezes</h4>
                    <p className="text-gray-300 text-sm">Try restarting the app or reinstalling it from the app store.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">Tips for Best Results</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Keep the app running in the background</li>
                  <li>• Allow location access for accurate predictions</li>
                  <li>• Update your routes if you change your commute</li>
                  <li>• Check traffic conditions before leaving</li>
                  <li>• Use the app consistently for better learning</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Support Options */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get Help</h2>
            
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">Email Support</h3>
                <p className="text-gray-300 mb-3">Get help from our support team</p>
                <a 
                  href="mailto:support@commutetimely.com"
                  className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-200"
                >
                  Contact Support
                </a>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">FAQ</h3>
                <p className="text-gray-300 mb-3">Find answers to common questions</p>
                <Link 
                  href="/faq"
                  className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-200"
                >
                  View FAQ
                </Link>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">User Guide</h3>
                <p className="text-gray-300 mb-3">Learn how to use all features</p>
                <Link 
                  href="/how-it-works"
                  className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-200"
                >
                  Read Guide
                </Link>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">Report a Bug</h3>
                <p className="text-gray-300 mb-3">Help us improve the app</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#e6c244] hover:to-[#d4af37] text-white font-semibold rounded-lg px-4 py-2 text-sm transition-all duration-200"
                >
                  Report Bug
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Response Time */}
        <div className="mt-12 bg-gradient-to-r from-[#0f3d3e] to-[#1a1a1a] rounded-lg p-8 border border-[#d4af37]/20">
          <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
          <p className="text-gray-300">
                         Our support team typically responds to all inquiries within 24 hours during business days. 
             For urgent issues, please include &quot;URGENT&quot; in your email subject line.
          </p>
        </div>
      </div>
    </div>
  )
} 