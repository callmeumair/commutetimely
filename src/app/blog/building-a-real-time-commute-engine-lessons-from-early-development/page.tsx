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
                When we launched the CommuteTimely private beta, our backend was written in Node.js, pulling a few REST APIs, and storing historical data in a standard PostgreSQL database. By day three, our database CPU was pinned at 100%, and API request latency had degraded from 50ms to nearly 4 seconds.
            </p>
            <p>
                This is the story of how we tore it down and built a distributed real-time engine in Rust and Kafka.
            </p>

            <h2>The Problem with Polling</h2>
            <p>
                Arrival intelligence requires answering the question, "When should I leave?" roughly 200,000 times a minute during peak morning rush hour. Our initial implementation polled the database for active commutes every 30 seconds. This synchronous model created massive locking and connection pool exhaustion.
            </p>

            <h2>Switching to an Event-Driven Architecture</h2>
            <p>
                We realized that commutes are not static rows in a database; they are living events. We migrated our core logic to an event-processing pipeline:
            </p>

            <ul>
                <li>
                    <strong>Apache Kafka</strong> became the nervous system of CommuteTimely. Every traffic anomaly, transit delay, and weather shift is an event pushed onto a Kafka topic.
                </li>
                <li>
                    <strong>Rust Microservices</strong> consume these topics. Rust gave us the raw computational speed to process millions of intersecting spatial events without the garbage-collection pauses we experienced in Node and Go.
                </li>
                <li>
                    <strong>ScyllaDB</strong> replaced Postgres for our time-series historical data. We needed a column-family store capable of sustaining massive write throughput as we ingested terabytes of traffic telemetry, while maintaining single-digit millisecond read latencies.
                </li>
            </ul>

            <h2>The Push Notification Pivot</h2>
            <p>
                Instead of the client app polling the server to ask "Should I leave?", the backend now maintains a state-machine for every active user. When the fusion engine determines that a departure threshold is crossed, it fires an HTTP/2 push notification instantly.
            </p>
            <p>
                The result? Our 99th percentile latency dropped to 14ms globally, and our compute costs plummeted by 60%. The beta users noticed immediately. CommuteTimely suddenly felt magical—because it wasn't waiting to be asked; it was waiting to tell you.
            </p>
        </BlogPostLayout>
    );
}
