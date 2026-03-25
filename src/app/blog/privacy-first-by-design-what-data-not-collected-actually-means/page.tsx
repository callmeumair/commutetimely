import BlogPostLayout from "@/components/BlogPostLayout";

export default function ArticlePage() {
    return (
        <BlogPostLayout
            title="Privacy-First by design: what &#34;Data Not Collected&#34; actually means"
            tag="Privacy"
            tagColor="#3A7BFF"
            author="CommuteTimely Team"
            date="Nov 2025"
            readTime="6 min"
        >
            <p>
                There’s a quiet trade happening inside most modern apps.
            </p>
            <p>
                You open an app to get a service — directions, recommendations, predictions — and in return the app quietly collects something from you. Your location. Your behavior. Your routines.
            </p>
            <p>
                Location-based apps, in particular, sit at the center of what could reasonably be called a <strong>data harvesting industry</strong>.
            </p>
            <p>
                That’s why one small line on the App Store page for <strong>CommuteTimely</strong> matters so much. Under the privacy label, it says: <span className="text-[#3A7BFF] font-bold">Data Not Collected.</span>
            </p>
            <p>
                But how can an app that relies on location manage to collect none of it? The answer lies in a simple design decision. Instead of sending your data to the cloud to be processed, we moved the intelligence directly onto your phone.
            </p>

            <hr className="my-12 border-white/5" />

            <h2>The Default Model of Location Apps</h2>
            <p>
                Most location-based applications follow a similar architecture. Your phone gathers GPS coordinates, which are transmitted to a remote server. The server analyzes the data and sends a result back.
            </p>
            <p>
                If you send raw GPS coordinates to a server every few seconds, that server quickly learns a remarkable amount about your life. It can infer where you live, work, and sleep.
            </p>

            <h2>Rethinking the Architecture</h2>
            <p>
                What if the server never needed your location at all?
            </p>
            <p>
                CommuteTimely is designed so that the intelligence runs <strong>directly on your phone</strong>. Your device becomes the brain of the system, rather than a thin terminal for a distant server.
            </p>

            <h2>Local Storage Only</h2>
            <p>
                Your commute contains two extremely sensitive pieces of information: Your home location and your workplace location. In CommuteTimely, these never leave your device.
            </p>
            <p>
                They are stored locally using Apple’s <strong>Secure Enclave</strong>—a specialized hardware component designed to isolate and protect sensitive information. Even our company cannot access it. Your commute belongs to you.
            </p>

            <h2>Anonymous Traffic Queries</h2>
            <p>
                Predicting commute timing still requires external data: traffic conditions and transit delays. The challenge is obtaining that information <strong>without revealing your personal route</strong>.
            </p>
            <p>
                We use a technique called <strong>disjointed querying</strong>. The system breaks your route into small anonymous segments. The server receives fragments like "Traffic on Highway 101 Northbound," not a coherent story about your journey. The system learns about roads, but it never learns about you.
            </p>

            <h2>Federated Learning</h2>
            <p>
                To improve our models, we use <strong>Federated Learning</strong>. Instead of sending raw data to the server, the server sends a machine learning model to your device. Your phone trains it locally.
            </p>
            <p>
                Once finished, the phone sends back only the <strong>updated mathematical parameters</strong>. These numbers contain no readable information about your commute. We learn collectively without ever seeing anyone’s personal data.
            </p>

            <h2>Privacy by Design</h2>
            <p>
                Real privacy doesn’t come from promises in a Terms of Service agreement. It comes from <strong>architecture</strong>. If a system is designed so that it never receives sensitive information, it cannot misuse it.
            </p>

            <h2>The Economics of Privacy</h2>
            <p>
                Many apps appear free because their true business model lies in advertising networks and data marketplaces. CommuteTimely takes a different path: users pay a transparent subscription for <strong>CommuteTimely Pro</strong>.
            </p>
            <p>
                Our incentives align with yours. We succeed when the app is valuable to you, not when we collect more data about you.
            </p>

            <h2>A Different Kind of Smart App</h2>
            <p>
                Technology should make life easier without demanding unnecessary access to personal information. By moving intelligence closer to the user, we deliver sophisticated predictions without quietly building a database about your life.
            </p>
            <p>
                That is what “Data Not Collected” actually means. Not just a label, but a system designed from the ground up to respect the boundary between useful technology and personal privacy.
            </p>
        </BlogPostLayout>
    );
}
