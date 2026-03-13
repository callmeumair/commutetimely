import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import KineticGrid from "@/components/KineticGrid";
import { Toaster } from "sonner";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative" style={{ background: "#020617" }}>
      <KineticGrid />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster position="bottom-center" theme="dark" richColors />
    </div>
  );
}
