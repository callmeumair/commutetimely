import SiteLayout from "@/components/SiteLayout";

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="relative pt-32 pb-24 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(58,123,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Privacy Policy — CommuteTimely
          </h1>
          <p className="text-sm text-white/45 mb-10">Last updated: February 2026</p>

          <div className="space-y-8 text-white/75 leading-relaxed">
            <p>
              CommuteTimely is designed with privacy as a core principle. We do not collect,
              store, sell, or share personal data.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Data Collection</h2>
              <p>
                CommuteTimely does not collect any personal or identifiable data from users.
              </p>
              <p className="mt-3">
                All commute-related calculations (such as route planning, leave-time suggestions,
                and reminders) are performed locally on your device. This data never leaves your
                device and is not transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Analytics</h2>
              <p>
                CommuteTimely does not use third-party analytics, tracking SDKs, advertising
                networks, or profiling tools that collect user data.
              </p>
              <p className="mt-3">
                Any internal diagnostics used are limited to non-identifiable, device-local
                information strictly for app functionality and reliability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Location Information</h2>
              <p>
                If you grant location access, it is used only on your device to calculate
                commute-related features. Location data is not stored, logged, or shared by
                CommuteTimely.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Data Sharing</h2>
              <p>
                We do not sell, rent, trade, or share user data with third parties. Since no
                personal data is collected, there is nothing to share.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Children’s Privacy</h2>
              <p>
                CommuteTimely does not knowingly collect data from anyone, including children
                under the age of 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Changes to This Policy</h2>
              <p>
                If the app’s data practices change in the future, this privacy policy will be
                updated accordingly, and users will be informed where required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
              <p>If you have any questions or concerns about privacy, you can contact us at:</p>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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
