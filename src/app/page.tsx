import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BentoGridSection from "@/components/sections/BentoGridSection";
import ExecutiveDashboardSection from "@/components/sections/ExecutiveDashboardSection";
import NeuralInfraSection from "@/components/sections/NeuralInfraSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";
import KineticGrid from "@/components/KineticGrid";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ background: "#020617" }}>
      <KineticGrid />
      <Navbar />
      <main>
        <HeroSection />
        <BentoGridSection />
        <ExecutiveDashboardSection />
        <NeuralInfraSection />
        <SocialProofSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
      <Toaster position="bottom-center" theme="dark" richColors />
    </div>
  );
}

