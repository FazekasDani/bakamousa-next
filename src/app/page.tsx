import KimiHero from "@/components/KimiHero";
import MetaphorSection from "@/components/MetaphorSection";
import BusinessRealitySection from "@/components/BusinessRealitySection";
import ProcessSection from "@/components/ProcessSection";
import DeliverableSection from "@/components/DeliverableSection";
import InsurancePolicySection from "@/components/InsurancePolicySection";
import KimiFooter from "@/components/KimiFooter";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <KimiHero />
      <MetaphorSection />
      <BusinessRealitySection />
      <ProcessSection />
      <DeliverableSection />
      <InsurancePolicySection />
      <KimiFooter />
    </main>
  );
}
