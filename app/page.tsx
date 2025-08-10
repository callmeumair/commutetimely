import type { Metadata } from 'next'
import { Suspense } from 'react'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import DownloadCTASection from '@/components/DownloadCTASection'
import TrustSection from '@/components/TrustSection'
import LoadingPlaceholder from '@/components/LoadingPlaceholder'

export const metadata: Metadata = {
  title: 'CommuteTimely - Never Be Late Again | Smart Commute Notifications',
  description: 'Get intelligent notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling. Join the waitlist for early access.',
  keywords: 'commute, notifications, traffic, smart notifications, leave on time, commute app, traffic alerts, public transport, walking, cycling, car, bus, train',
  authors: [{ name: 'CommuteTimely Team' }],
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
    description: 'Smart notifications that tell you exactly when to leave. Works with all transport modes.',
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart commute notifications app',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommuteTimely - Never Be Late Again',
    description: 'Smart notifications that tell you exactly when to leave. Works with all transport modes.',
    images: ['/og-image.jpg'],
    creator: '@commutetimely',
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <HeroSection />
        </Suspense>
      </section>

      {/* Features Section */}
      <section id="features" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <FeaturesSection />
        </Suspense>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <HowItWorksSection />
        </Suspense>
      </section>

      {/* Trust Section */}
      <section id="trust" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <TrustSection />
        </Suspense>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <TestimonialsSection />
        </Suspense>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <FAQSection />
        </Suspense>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <DownloadCTASection />
        </Suspense>
      </section>
    </main>
  )
} 