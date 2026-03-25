import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import KineticGrid from "@/components/KineticGrid";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | CommuteTimely",
  description: "Read the latest insights on commute optimization, traffic prediction, and time management.",
  alternates: { canonical: "https://commutetimely.com/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen relative bg-[#020617]">
      <KineticGrid />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Commute Intelligence Blog
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light mb-16">
            Insights on traffic prediction, time optimization, and the science of commuting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
                <article className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors h-full flex flex-col">
                  {/* Pseudo-image block for demo purposes */}
                  <div className="h-48 bg-gradient-to-tr from-[#3A7BFF]/20 to-[#6E5CFF]/10 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-widest mb-3">
                      <span>{post.datePublished}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="text-xl font-medium text-white mb-3 group-hover:text-[#3A7BFF] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-white/60 font-light text-sm line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto text-[#3A7BFF] text-sm font-medium pt-4 border-t border-white/5">
                      Read article →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
