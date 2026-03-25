import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import KineticGrid from "@/components/KineticGrid";
import { blogPosts } from "@/lib/blog-data";
import { generateBlogPostingSchema, generateBreadcrumbSchema } from "@/lib/seo";

// Pre-render all blog routes
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | CommuteTimely Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://commutetimely.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.authorName],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://commutetimely.com" },
    { name: "Blog", item: "https://commutetimely.com/blog" },
    { name: post.title, item: `https://commutetimely.com/blog/${post.slug}` }
  ]);
  
  const blogSchema = generateBlogPostingSchema({
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    authorName: post.authorName,
    datePublished: new Date(post.datePublished).toISOString(),
    url: `https://commutetimely.com/blog/${post.slug}`,
  });

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen relative bg-[#020617] selection:bg-[#3A7BFF] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      
      <KineticGrid />
      <Navbar />
      
      <main className="pt-32 pb-24 relative z-10 w-full">
        <article className="max-w-3xl mx-auto px-6">
          <header className="mb-12">
            <Link href="/blog" className="text-[#3A7BFF] text-sm font-mono tracking-widest uppercase mb-6 inline-block hover:underline">
              ← Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/40 font-mono text-xs sm:text-sm uppercase tracking-widest border-b border-white/10 pb-8">
              <span>{post.datePublished}</span>
              <span>·</span>
              <span>{post.readingTime} read</span>
              <span>·</span>
              <span>By {post.authorName}</span>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-geist-sans prose-headings:font-bold prose-h2:text-white prose-h3:text-white prose-p:text-white/70 prose-a:text-[#3A7BFF] prose-strong:text-white/90 leading-relaxed border-b border-white/10 pb-16"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />

          <div className="mt-12 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-2 font-geist-sans">Explore More Commute Intelligence</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/features" className="text-[#3A7BFF] hover:underline flex items-center gap-2">➔ Discover AI departure timing features</Link></li>
              <li><Link href="/pricing" className="text-[#3A7BFF] hover:underline flex items-center gap-2">➔ Compare Commuter Free vs Pro</Link></li>
            </ul>
          </div>
        </article>

        {/* Related Posts */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h3 className="text-2xl font-bold text-white mb-8 border-t border-white/10 pt-16">Related Reads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map(rp => (
              <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group">
                <div className="p-6 border border-white/10 rounded-xl hover:bg-white/[0.04] transition-colors h-full flex flex-col">
                  <h4 className="text-lg font-medium text-white mb-2 group-hover:text-[#3A7BFF] transition-colors">{rp.title}</h4>
                  <p className="text-white/50 text-sm line-clamp-2">{rp.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Simple markdown formatter wrapper
function formatMarkdown(content: string) {
  return content
    .replace(/^### (.*$)/gim, '<h3 class="text-xl mt-8 mb-4 text-white/90">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl mt-10 mb-5 border-b border-white/10 pb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl mt-12 mb-6">$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white/90">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/---/gim, '<hr class="my-10 border-white/10"/>')
    .replace(/\n- (.*)/gim, '<li class="my-2 ml-4 list-disc text-white/70">$1</li>')
    // Wrap generic paragraphs, split by double new line
    .split('\n\n').map(p => {
        const trimmed = p.trim();
        if(!trimmed || trimmed.startsWith('<')) return p;
        return `<p class="my-6 text-white/70 leading-relaxed">${trimmed}</p>`;
    }).join('\n\n');
}
