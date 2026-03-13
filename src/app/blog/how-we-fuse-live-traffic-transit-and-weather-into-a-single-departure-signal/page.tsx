import BlogPostLayout from "@/components/BlogPostLayout";

export default function ArticlePage() {
    return (
        <BlogPostLayout
            title="How we fuse live traffic, transit, and weather into a single departure signal"
            tag="Engineering"
            tagColor="#6E5CFF"
            author="CommuteTimely Team"
            date="Feb 2026"
            readTime="10 min"
        >
            <p>
                Getting to work on time used to mean checking three different apps: maps for traffic, the local transit authority for train delays, and a weather app to see if rain would slow everything down. We built CommuteTimely to do that cognitive heavy lifting for you.
            </p>

            <h2>The Data Engineering Challenge</h2>
            <p>
                The core problem of arrival intelligence isn't just pulling data; it's fusing asynchronous, heterogenous streams into a single reliable timeline. Live traffic data pushes updates via WebSockets every few seconds. Transit feeds (GTFS-RT) often update batch-style every minute. Weather intelligence requires continuous spatial queries along your predicted route.
            </p>

            <h3>1. The Traffic Layer</h3>
            <p>
                Our ingestion engine processes millions of traffic nodes per minute. We don't just look at the route you're on right now; we look at the historical decay rate of congestion ahead of you. If a jam usually clears in 15 minutes and you're 20 minutes away, we won't tell you to leave early.
            </p>

            <h3>2. The Transit Layer</h3>
            <p>
                For multimodal commuters, transit data is notoriously flaky. We augment official GTFS-RT feeds with predictive models trained on historical delays. If the L-train is historically 4 minutes late when it rains on a Tuesday morning, our model factors that in before the official delay is even announced.
            </p>

            <h3>3. The Atmospheric Layer</h3>
            <p>
                We query hyperlocal weather data along your exact route corridor, slicing the journey into 5-minute temporal windows. Precipitation drastically increases the "friction" of travel, impacting both driving speeds and walking transit connections.
            </p>

            <h2>Synthesizing the Signal</h2>
            <p>
                All these data streams flow into our real-time fusion pipeline, written in Rust for zero-allocation performance. The output is a single, deterministic piece of information: <strong>Exactly when you need to walk out the door.</strong> No more mental math. Just a quiet, confident signal that it's time to go.
            </p>
        </BlogPostLayout>
    );
}
