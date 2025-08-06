import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import StickyHeader from '@/components/StickyHeader'
import { runAccessibilityTest } from '@/lib/accessibility'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CommuteTimely - Never Be Late Again',
  description: 'One smart notification that tells you exactly when to leave. Your commute, optimized.',
  keywords: ['commute', 'timing', 'notifications', 'traffic', 'app', 'productivity'],
  authors: [{ name: 'CommuteTimely' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://commutetimely.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CommuteTimely - Never Be Late Again',
    description: 'One smart notification that tells you exactly when to leave. Your commute, optimized.',
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart commute notifications',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommuteTimely - Never Be Late Again',
    description: 'One smart notification that tells you exactly when to leave.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CommuteTimely",
    "description": "One smart notification that tells you exactly when to leave. Your commute, optimized.",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2140"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Finally, an app that actually helps me be on time!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike T."
        },
        "reviewBody": "Game changer for my daily commute. Highly recommend!"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does CommuteTimely know when to notify me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CommuteTimely uses real-time traffic data, historical patterns, and your personal commute preferences to calculate the optimal departure time. The app continuously monitors traffic conditions and adjusts notifications accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "Does the app work in all cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! CommuteTimely works in over 50 major cities worldwide and is constantly expanding. The app uses global traffic data sources to provide accurate predictions wherever you are."
        }
      }
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Sticky header */}
        <StickyHeader />
        <main id="main-content">
          {children}
        </main>
        <Analytics />
        
        {/* Accessibility testing in development */}
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window !== 'undefined') {
                  window.runAccessibilityTest = ${runAccessibilityTest.toString()};
                  console.log('Accessibility test available: window.runAccessibilityTest()');
                }
              `,
            }}
          />
        )}
      </body>
    </html>
  )
} 