import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

// SEO utilities
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Know Exactly When to Leave for Work | CommuteTimely",
  description:
    "CommuteTimely tells you exactly when to leave for work using AI traffic prediction. Never arrive early or late again. Download the iOS app.",
  keywords: "departure time app, commute planner, traffic prediction, leave time calculator, avoid traffic",
  alternates: {
    canonical: "https://commutetimely.com",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
    shortcut: "/logo.svg",
  },
  openGraph: {
    title: "Know Exactly When to Leave for Work | CommuteTimely",
    description:
      "AI-powered departure timing that predicts traffic & arrival delays. Never leave early or late.",
    type: "website",
    url: "https://commutetimely.com",
    images: [{ url: "https://commutetimely.com/og-image.png", width: 1200, height: 630, alt: "CommuteTimely - Arrival Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-[#E2E8F0] min-h-screen flex flex-col`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
