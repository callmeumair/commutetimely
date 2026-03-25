import { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import KineticGrid from "@/components/KineticGrid";

export const metadata: Metadata = {
  title: "Pricing | CommuteTimely",
  description: "Simple, transparent pricing for CommuteTimely. Start your free trial today and reclaim your time.",
  alternates: { canonical: "https://commutetimely.com/pricing" },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen relative bg-[#020617]">
      <KineticGrid />
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto">
            CommuteTimely has one job: tell you when to leave. Pick the plan that fits your commute.
          </p>
        </div>

        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
