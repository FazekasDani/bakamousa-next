import { readFileSync } from "fs";
import { join } from "path";
import KimiHero from "@/components/KimiHero";
import MetaphorSection from "@/components/MetaphorSection";
import BusinessRealitySection from "@/components/BusinessRealitySection";
import ProcessSection from "@/components/ProcessSection";
import DeliverableSection from "@/components/DeliverableSection";
import InsurancePolicySection from "@/components/InsurancePolicySection";
import KimiFooter from "@/components/KimiFooter";

function getHomepageContent() {
  const filePath = join(process.cwd(), "content", "homepage.json");
  const raw = readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

export default function Home() {
  const content = getHomepageContent();

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      <KimiHero content={content.hero} />
      <MetaphorSection content={content.metaphor} />
      <BusinessRealitySection content={content.businessReality} />
      <ProcessSection content={content.process} />
      <DeliverableSection content={content.deliverable} />
      <InsurancePolicySection content={content.insurance} />
      <KimiFooter content={content.footer} />
    </main>
  );
}
