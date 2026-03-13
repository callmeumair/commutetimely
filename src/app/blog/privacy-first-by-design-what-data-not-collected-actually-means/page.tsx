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
                If you check the CommuteTimely App Store page, under the Privacy Label sections, you'll see a badge that we are incredibly proud of: <strong>Data Not Collected</strong>. But how does an app that relies on location data manage to collect zero data?
            </p>

            <h2>The Data Harvesting Industry</h2>
            <p>
                Most location-based apps operate on a simple, flawed model: send your raw GPS coordinates to a central server, process the data, and send an answer back down. This allows the company to build a rich, marketable profile of exactly where you live, work, and sleep. We find this model invasive.
            </p>

            <h2>On-Device Intelligence</h2>
            <p>
                We inverted the model using modern silicon capabilities. CommuteTimely operates primarily on-device. Here is our architecture in a nutshell:
            </p>

            <ul>
                <li>
                    <strong>Local Storage Only:</strong> Your home address, your work address, and your recurring destinations never leave your phone. They are stored in Apple's Secure Enclave, heavily encrypted.
                </li>
                <li>
                    <strong>Anonymized Querying:</strong> When CommuteTimely needs to check traffic or transit delays for your route, it breaks the route into anonymous, disjointed segments. Our servers receive a request for "Traffic on Highway 101 Northbound" rather than "User 42's commute from 123 Main St to 456 Broad St." We have absolutely no way of tying those queries back to you.
                </li>
                <li>
                    <strong>Federated Learning:</strong> To improve our historical commute models, we use federated learning. Your device downloads a machine learning model, trains it locally on your commute data, and then sends only a massive string of random-looking mathematical weights back to the server. The weights are aggregated with thousands of other users to improve the master model. Your raw route data never leaves your hand.
                </li>
            </ul>

            <h2>If You're Not Paying for It...</h2>
            <p>
                The old adage says that if a product is free, you are the product. We reject this. We charge a fair, transparent subscription fee for CommuteTimely Pro. We are sustained by our users, not by selling our users. That alignment of incentives allows us to engineer for absolute privacy from the ground up.
            </p>
        </BlogPostLayout>
    );
}
