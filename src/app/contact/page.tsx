import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bakamo. Offices in New Jersey, London, Dortmund, Budapest, and Kuala Lumpur. Global coverage.",
};

export default function Contact() {
  return (
    <main className="relative w-full min-h-screen bg-near-black overflow-x-hidden">
      <ContactPage />
    </main>
  );
}
