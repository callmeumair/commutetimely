import { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import KineticGrid from "@/components/KineticGrid";

export const metadata: Metadata = {
  title: "CommuteTimely vs Google Maps vs Waze",
  description: "See why CommuteTimely's predictive departure AI is fundamentally different from navigation apps like Google Maps and Waze.",
  alternates: { canonical: "https://commutetimely.com/comparison" },
};

export default function ComparisonPage() {
  return (
    <div className="min-h-screen relative bg-[#020617]">
      <KineticGrid />
      <Navbar />
      <main className="pt-32 pb-16">
        <ComparisonSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
