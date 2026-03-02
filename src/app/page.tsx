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

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bakamo",
  url: "https://bakamousa.com",
  description:
    "Unfiltered consumer intelligence — we inspect the cultural ground before you build.",
  serviceType: "Consumer Intelligence & Cultural Research",
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TensionScope",
          description:
            "Psychological tension mapping that decodes consumer decision-making through seven core human needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cultural Intelligence Reports",
          description:
            "Ground-truth cultural analysis combining unfiltered social listening with representative quantitative measurement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Positioning Intelligence",
          description:
            "Competitive landscape analysis mapping how brands occupy the tension landscape in consumer discourse.",
        },
      },
    ],
  },
};

const REVIEW_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bakamo",
  url: "https://bakamousa.com",
  review: [
    {
      "@type": "Review",
      reviewBody:
        "Bakamo showed us what our customers actually think — not what we assumed they did. It changed our entire product strategy.",
      author: { "@type": "Person", name: "Chief Strategy Officer" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
    {
      "@type": "Review",
      reviewBody:
        "The gap between what our surveys told us and what Bakamo revealed was staggering. We were asking all the wrong questions.",
      author: { "@type": "Person", name: "VP of Consumer Insights" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
    {
      "@type": "Review",
      reviewBody:
        "Ground truth intelligence that actually moves the needle. Our board presentations are now anchored in reality, not assumptions.",
      author: { "@type": "Person", name: "CMO" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
    {
      "@type": "Review",
      reviewBody:
        "We stopped wasting research budget on validating internal hypotheses. Bakamo tells us what matters before we even ask.",
      author: { "@type": "Person", name: "Head of Strategy" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
  ],
};

export default function Home() {
  const content = getHomepageContent();

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Service & Review structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEW_SCHEMA) }}
      />

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
