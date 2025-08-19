import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "CommuteTimely - Smart Traffic App & Commute Planner | Never Be Late Again",
    template: "%s | CommuteTimely"
  },
  description: "CommuteTimely is the #1 intelligent traffic app that sends smart leave alerts using real-time traffic data. AI-powered commute planning for iOS & Android. Get early access now!",
  keywords: [
    "traffic app",
    "commute planner", 
    "traffic alerts",
    "real-time traffic",
    "smart commute",
    "traffic prediction",
    "route optimization",
    "iOS traffic app",
    "Android traffic app",
    "commute notifications"
  ],
  authors: [{ name: "CommuteTimely Team" }],
  creator: "CommuteTimely",
  publisher: "CommuteTimely",
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
    title: "CommuteTimely - Smart Traffic App & Commute Planner",
    description: "The #1 intelligent traffic app that sends smart leave alerts using real-time traffic data. Never be late again with AI-powered commute planning.",
    url: 'https://commutetimely.com',
    siteName: 'CommuteTimely',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CommuteTimely - Smart Traffic App Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommuteTimely - Smart Traffic App & Commute Planner',
    description: 'The #1 intelligent traffic app that sends smart leave alerts using real-time traffic data. Never be late again!',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for performance */}
        
        {/* Using next/font for Inter; no external font preload needed */}
        
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', () => {
                  if ('performance' in window) {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                    }
                  }
                });
              }
            `,
          }}
        />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance hints - removed unused image preload to fix console warning */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-SWX3M644X0`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());

            gtag('config', 'G-SWX3M644X0');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
