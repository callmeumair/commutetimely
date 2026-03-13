import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

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
  title: "CommuteTimely — Know Exactly When to Leave",
  description:
    "CommuteTimely predicts the perfect departure time using real-time traffic data, weather signals, and machine learning so you arrive exactly when you need to.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
    shortcut: "/logo.svg",
  },
  openGraph: {
    title: "CommuteTimely — Arrival Intelligence",
    description:
      "Never be late again. The intelligent commute timing platform that tells you exactly when to leave.",
    type: "website",
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: "CommuteTimely - Arrival Intelligence" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-[#E2E8F0]`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
