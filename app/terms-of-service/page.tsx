import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - CommuteTimely',
  description: 'Terms of Service for CommuteTimely app and website.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By downloading, installing, or using the CommuteTimely mobile application and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              CommuteTimely provides intelligent commute timing notifications based on real-time traffic data, historical patterns, and user preferences. Our service includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Smart departure time calculations</li>
              <li>Real-time traffic monitoring</li>
              <li>Customizable notification settings</li>
              <li>Multi-transport mode support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              As a user of CommuteTimely, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide accurate information when setting up routes</li>
              <li>Use the service responsibly and safely</li>
              <li>Not attempt to reverse engineer or hack the app</li>
              <li>Respect the privacy of other users</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy and Data</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our service, you consent to our data practices as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
            <p className="text-gray-300 mb-4">
              We strive to provide reliable service, but we cannot guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>100% uptime or availability</li>
              <li>Perfect accuracy of traffic predictions</li>
              <li>Compatibility with all devices or operating systems</li>
              <li>Uninterrupted service during maintenance or updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              CommuteTimely and all related content, features, and functionality are owned by CommuteTimely Inc. and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              CommuteTimely is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from the use of our service, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Inaccurate arrival time predictions</li>
              <li>Service interruptions or technical issues</li>
              <li>Data loss or privacy breaches</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access to CommuteTimely at any time, with or without cause. You may also stop using our service at any time. Upon termination, your right to use the service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes through the app or website. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: legal@commutetimely.com<br />
              Address: CommuteTimely Inc., 123 Tech Street, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 