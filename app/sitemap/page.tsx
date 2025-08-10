import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap - CommuteTimely',
  description: 'Complete sitemap of CommuteTimely website. Find all pages and sections easily.',
  openGraph: {
    title: 'Sitemap - CommuteTimely',
    description: 'Complete sitemap of CommuteTimely website. Find all pages and sections easily.',
  },
}

export default function SitemapPage() {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page with hero section and overview' },
        { name: 'Features', url: '/features', description: 'Detailed features and capabilities' },
        { name: 'How It Works', url: '/how-it-works', description: 'Step-by-step explanation of the service' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions and answers' },
        { name: 'Testimonials', url: '/testimonials', description: 'Customer reviews and success stories' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and tips about commuting' }
      ]
    },
    {
      category: 'Support & Contact',
      pages: [
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Support', url: '/support', description: 'Help and support resources' }
      ]
    },
    {
      category: 'Legal & Policies',
      pages: [
        { name: 'Privacy Policy', url: '/privacy-policy', description: 'How we handle your data' },
        { name: 'Terms of Service', url: '/terms-of-service', description: 'Terms and conditions of use' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Information about cookies usage' },
        { name: 'Accessibility', url: '/accessibility', description: 'Our accessibility commitment' }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" lang="en">
      {/* Header */}
      <header className="container-max py-16 sm:py-20 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Sitemap
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Complete overview of all pages and sections on CommuteTimely
          </p>
        </div>
      </header>

      {/* Sitemap Structure */}
      <section className="container-max pb-16 sm:pb-20 md:pb-24" aria-label="Website navigation structure">
        <div className="space-y-12">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white border-b border-white/20 pb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.pages.map((page, pageIndex) => (
                  <article
                    key={pageIndex}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-opacity-50"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      <Link 
                        href={page.url}
                        className="hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 rounded"
                        aria-label={`Visit ${page.name} page`}
                      >
                        {page.name}
                      </Link>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {page.description}
                    </p>
                    <Link
                      href={page.url}
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 rounded"
                      aria-label={`Navigate to ${page.name}`}
                    >
                      Visit Page
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* XML Sitemap Link */}
        <section className="text-center mt-16" aria-label="XML sitemap access">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              XML Sitemap
            </h2>
            <p className="text-white/90 mb-6">
              For search engines and developers, you can access our XML sitemap.
            </p>
            <a
              href="/sitemap.xml"
              className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
              aria-label="Access XML sitemap for search engines"
            >
              View XML Sitemap
            </a>
          </div>
        </section>

        {/* Search Functionality */}
        <section className="text-center mt-16" aria-label="Additional help and support">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-gray-300 mb-6">
              Use our search functionality or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                aria-label="Get help and support"
              >
                Get Support
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
                aria-label="Contact our team"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
