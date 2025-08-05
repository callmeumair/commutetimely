import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - CommuteTimely',
  description: 'Privacy Policy for CommuteTimely app and website.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              CommuteTimely collects information to provide better services to our users. We collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Location data (processed locally on your device)</li>
              <li>Commute preferences and routes</li>
              <li>App usage statistics</li>
              <li>Device information for app optimization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide accurate commute time predictions</li>
              <li>Improve our services and user experience</li>
              <li>Send relevant notifications</li>
              <li>Analyze traffic patterns (anonymized data only)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p className="text-gray-300 mb-4">
              Your privacy is our top priority. We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>All location data is processed locally on your device</li>
              <li>We never sell or share your personal information</li>
              <li>Data is encrypted in transit and at rest</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              We may use third-party services for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Traffic data providers</li>
              <li>Analytics (anonymized data only)</li>
              <li>App store platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of data collection</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: privacy@commutetimely.com<br />
              Address: CommuteTimely Inc., 123 Tech Street, San Francisco, CA 94105
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 