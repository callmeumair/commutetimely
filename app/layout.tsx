import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CommuteTimely - Never Be Late Again',
  description: 'Smart notifications that tell you exactly when to leave. Works with car, bus, train, walking, and cycling.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-dark-950 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
