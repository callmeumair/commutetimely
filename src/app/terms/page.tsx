import SiteLayout from "@/components/SiteLayout";

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="relative pt-32 pb-24 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(110,92,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-white/45 mb-10">Last Updated: February 2026</p>

          <div className="space-y-8 text-white/75 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Acceptance of Terms</h2>
              <p>
                By accessing and using CommuteTimely, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
              <p className="mt-3">
                These Terms of Service constitute a legally binding agreement between you and
                CommuteTimely regarding your use of our mobile application and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Use of the App</h2>
              <p>
                CommuteTimely provides intelligent commute alerts using real-time traffic data
                processing locally on your device. You may use our services for personal,
                non-commercial purposes in accordance with these terms and applicable laws.
              </p>
              <p className="mt-3">
                You agree not to use the app for any unlawful purpose or in any way that could
                damage, disable, overburden, or impair our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Privacy and Data Protection</h2>
              <p>
                Your privacy is paramount. CommuteTimely is designed to process data locally on
                your device. We do not collect, store, or sell your personal information.
              </p>
              <p className="mt-3">
                By using our services, you acknowledge that our data practices are governed by our
                Privacy Policy, which confirms that no personal data is transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Service Availability and Updates</h2>
              <p>
                We strive to provide reliable and continuous service, but we do not guarantee that
                our services will be available at all times or free from errors.
              </p>
              <p className="mt-3">
                We may update, modify, or discontinue features of our services at any time with or
                without notice to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, CommuteTimely shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from
                your use of our services.
              </p>
              <p className="mt-3">
                Our total liability to you for any claims arising from these terms or your use of
                our services shall not exceed the amount you paid us, if any, in the twelve months
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Disclaimers</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any
                kind. We disclaim all warranties, express or implied, including but not limited to
                warranties of merchantability and fitness for a particular purpose.
              </p>
              <p className="mt-3">
                We do not guarantee the accuracy, completeness, or usefulness of any information
                provided through our services, including traffic data and commute predictions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Termination</h2>
              <p>
                You may stop using our services at any time by deleting the app from your device.
                We may terminate or suspend access to our services immediately, without prior
                notice, for any reason, including violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the jurisdiction in which CommuteTimely operates.
              </p>
              <p className="mt-3">
                Any disputes arising from these terms or your use of our services shall be resolved
                through binding arbitration or in the courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify
                users of any material changes by posting the new terms on this page.
              </p>
              <p className="mt-3">
                Your continued use of our services after any changes constitutes acceptance of the
                new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:hello@commutetimely.com"
                  className="text-[#3A7BFF] hover:text-[#6EA3FF] transition-colors"
                >
                  hello@commutetimely.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
