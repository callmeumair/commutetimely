import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CommuteTimely - Smart Commute Alerts',
  description: 'Intelligent leave alerts using real-time traffic data to help you arrive on time, every time. Launching September 2025 on iOS and Android.',
  keywords: ['commute timing', 'traffic notifications', 'smart commute', 'arrival time', 'traffic alerts'],
  authors: [{ name: 'CommuteTimely Team' }],
  creator: 'CommuteTimely',
  publisher: 'CommuteTimely',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    title: 'CommuteTimely - Smart Commute Alerts',
    description: 'Intelligent leave alerts using real-time traffic data to help you arrive on time, every time.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart Commute Alerts',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@commutetimely',
    creator: '@commutetimely',
    title: 'CommuteTimely - Smart Commute Alerts',
    description: 'Intelligent leave alerts using real-time traffic data to help you arrive on time, every time.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: 'productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased bg-dark-950 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
