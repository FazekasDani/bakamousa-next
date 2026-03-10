import WeFixedQuant from "../components/WeFixedQuant";
import { getSiteUrl } from "@/lib/site-url";

function buildServiceSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bakamo",
    url: siteUrl,
    description:
      "We deliver the real human narrative behind the decimal point. Unfiltered consumer intelligence.",
    serviceType: "Consumer Intelligence & Cultural Research",
    areaServed: { "@type": "Country", name: "United States" },
  };
}

export default async function Home() {
  const siteUrl = await getSiteUrl();
  const SERVICE_SCHEMA = buildServiceSchema(siteUrl);

  return (
    <main className="relative w-full min-h-screen bg-near-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <WeFixedQuant />
    </main>
  );
}
