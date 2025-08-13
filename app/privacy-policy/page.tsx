export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
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
                <p className="text-gray-300 mt-2">
                  <strong>Address:</strong> CommuteTimely, [Your Address]
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
  );
}
