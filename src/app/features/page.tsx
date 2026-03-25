import { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BentoGridSection from "@/components/sections/BentoGridSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import KineticGrid from "@/components/KineticGrid";

export const metadata: Metadata = {
  title: "Features: Precision Departure Timing | CommuteTimely",
  description: "CommuteTimely features: AI departure timing, real-time traffic fusion, calendar sync, multi-modal routing. Join 50k+ iOS users.",
  alternates: { canonical: "https://commutetimely.com/features" },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen relative bg-[#020617]">
      <KineticGrid />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Precision Departure Timing
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            CommuteTimely solves one problem brilliantly: <strong className="text-white">When should you leave?</strong> Everything else feeds into that single question.
          </p>
        </div>

        <BentoGridSection />
        <ComparisonSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
