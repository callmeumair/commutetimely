import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - CommuteTimely',
  description: 'Latest insights, tips, and news about smart commuting, traffic optimization, and time management.',
  openGraph: {
    title: 'Blog - CommuteTimely',
    description: 'Latest insights, tips, and news about smart commuting, traffic optimization, and time management.',
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Ways to Optimize Your Morning Commute',
      excerpt: 'Discover proven strategies to make your morning commute more efficient and less stressful.',
      category: 'Tips & Tricks',
      readTime: '5 min read',
      date: '2024-01-15',
      slug: 'optimize-morning-commute'
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Traffic Prediction',
      excerpt: 'Explore the cutting-edge technology behind real-time traffic forecasting and route optimization.',
      category: 'Technology',
      readTime: '8 min read',
      date: '2024-01-10',
      slug: 'ai-traffic-prediction'
    },
    {
      id: 3,
      title: 'The Psychology of Being Late and How to Overcome It',
      excerpt: 'Understanding the mental barriers to punctuality and practical solutions for time management.',
      category: 'Psychology',
      readTime: '6 min read',
      date: '2024-01-05',
      slug: 'psychology-being-late'
    },
    {
      id: 4,
      title: 'Public Transport vs. Driving: A Comprehensive Comparison',
      excerpt: 'Weighing the pros and cons of different transportation modes for your daily commute.',
      category: 'Transportation',
      readTime: '7 min read',
      date: '2023-12-28',
      slug: 'public-transport-vs-driving'
    },
    {
      id: 5,
      title: 'Weather-Proofing Your Commute: A Complete Guide',
      excerpt: 'How to prepare for and navigate through various weather conditions during your commute.',
      category: 'Weather',
      readTime: '4 min read',
      date: '2023-12-20',
      slug: 'weather-proof-commute'
    },
    {
      id: 6,
      title: 'The Future of Smart Cities and Transportation',
      excerpt: 'Exploring upcoming innovations in urban mobility and how they will change our daily commutes.',
      category: 'Future',
      readTime: '9 min read',
      date: '2023-12-15',
      slug: 'future-smart-cities'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container-max py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            CommuteTimely Blog
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and stories to help you master your daily commute
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container-max pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Category */}
              <div className="inline-block bg-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {post.category}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-2">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>{post.readTime}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>

              {/* Read More */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest commuting tips and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
