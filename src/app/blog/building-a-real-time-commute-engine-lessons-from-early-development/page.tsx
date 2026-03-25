import BlogPostLayout from "@/components/BlogPostLayout";

export default function ArticlePage() {
    return (
        <BlogPostLayout
            title="Building a real-time commute engine: lessons from early development"
            tag="Engineering"
            tagColor="#6E5CFF"
            author="CommuteTimely Team"
            date="Oct 2025"
            readTime="10 min"
        >
            <p>
                Every piece of software has a moment when reality arrives like a physics experiment gone wrong.
            </p>
            <p>
                In theory, the system works beautifully. The architecture diagrams look elegant. The database queries return results instantly. Then real users arrive.
            </p>
            <p>
                When we launched the private beta of <strong>CommuteTimely</strong>, reality arrived in about three days. Our database CPU hit 100 percent. API latency ballooned from 50 milliseconds to nearly four seconds. Requests began piling up like cars at a broken traffic light.
            </p>
            <p>
                The architecture we built was fundamentally wrong for the problem we were trying to solve. So we tore it down.
            </p>

            <hr className="my-12 border-white/5" />

            <h2>The First Architecture</h2>
            <p>
                The earliest version of CommuteTimely looked a lot like many modern startups. The backend was written in <strong>Node.js</strong>. External traffic and transit APIs were queried through REST calls. Historical commute data lived inside <strong>PostgreSQL</strong>.
            </p>
            <p>
                For a prototype, this setup was perfect. But prototypes live in calm waters. Real commuters create storms.
            </p>

            <h2>The Real Workload of Arrival Intelligence</h2>
            <p>
                Most web services respond to explicit requests. Arrival intelligence behaves differently. The system must continuously answer the question: <strong>“When should this person leave?”</strong>
            </p>
            <p>
                During peak commuting hours, CommuteTimely must evaluate departure timing roughly <strong>200,000 times per minute</strong>. The system isn’t simply fetching data. It is recomputing a prediction engine continuously as conditions change. Our first architecture tried to handle this with polling. That decision became the root of the problem.
            </p>

            <h2>The Problem With Polling</h2>
            <p>
                In the initial system, the backend periodically checked active commutes. At beta scale, it collapsed. Connection pools exhausted. Database locks multiplied. Queries began waiting on other queries. It was a classic feedback loop.
            </p>

            <h2>Thinking in Events Instead of Rows</h2>
            <p>
                Commuting is not a table. It is a constantly evolving stream of events. Instead of periodically checking whether anything had changed, the system needed to <strong>react immediately when something changed</strong>.
            </p>

            <h2>Kafka Becomes the Nervous System</h2>
            <p>
                To handle massive streams of events, we adopted <strong>Apache Kafka</strong>. Every change in the transportation environment becomes an event published into Kafka topics. Instead of asking the system repeatedly if something changed, the system now broadcasts changes instantly.
            </p>

            <h2>Why We Moved to Rust</h2>
            <p>
                Languages like JavaScript and Go periodically pause execution for garbage collection. These pauses can introduce unpredictable latency spikes. We rebuilt our core microservices in <strong>Rust</strong>.
            </p>
            <p>
                Rust offers memory safety without garbage collection and extremely low runtime overhead. It allowed us to process millions of spatial calculations per second without unpredictable pauses.
            </p>

            <h2>Replacing the Database</h2>
            <p>
                Historical traffic models rely on terabytes of time-series data. We replaced PostgreSQL with <strong>ScyllaDB</strong>, optimized for high-performance time-series workloads. This allowed us to maintain single-digit millisecond read latency under massive write pressure.
            </p>

            <h2>The Push Notification Pivot</h2>
            <p>
                Originally, the mobile app periodically asked the server: “Should I leave yet?” Polling wastes resources. We redesigned the backend to maintain a state machine for every user and send a <strong>push notification</strong> only when the threshold is crossed.
            </p>

            <h2>Engineering for the Real World</h2>
            <p>
                The rebuild transformed the system. 99th percentile response latency dropped to <strong>14 milliseconds</strong> globally. Compute costs decreased by nearly 60 percent.
            </p>
            <p>
                Behind the simplicity of a countdown lies an engine processing millions of events, comparing historical patterns, and predicting the future. The goal of good engineering isn’t to expose complexity. It’s to hide it.
            </p>
        </BlogPostLayout>
    );
}
