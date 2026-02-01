import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ConsultationCards } from "@/components/sections/ConsultationCards";
import { PujaServicesPreview } from "@/components/sections/PujaServicesPreview";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema, BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { HOME_FAQS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pandit & Astrologer in South Delhi & Gurgaon | Pandit Yash Shastri",
  description:
    "Trusted Pandit and Astrologer in South Delhi & Gurgaon. Quick astrology consultation, home puja, muhurat guidance & Vedic rituals. Book your consultation today.",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "Pandit & Astrologer in South Delhi & Gurgaon | Pandit Yash Shastri",
    description:
      "Trusted Pandit and Astrologer in South Delhi & Gurgaon. Quick astrology consultation, home puja, muhurat guidance & Vedic rituals.",
    url: SITE_CONFIG.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Pandit & Astrologer in South Delhi & Gurgaon"
        description="Trusted Pandit and Astrologer in South Delhi & Gurgaon. Quick astrology consultation, home puja, muhurat guidance & Vedic rituals."
        url={SITE_CONFIG.url}
      />
      <BreadcrumbSchema
        items={[{ name: "Home", url: SITE_CONFIG.url }]}
      />
      <FAQSchema faqs={HOME_FAQS} />

      {/* Page Content */}
      <article>
        {/* Hero Section */}
        <Hero />

        {/* Quick Consultation Section */}
        <ConsultationCards />

        {/* Puja Services Preview */}
        <PujaServicesPreview />

        {/* Trust & Local Proof Section */}
        <TrustSection />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
          faqs={HOME_FAQS}
        />
      </article>
    </>
  );
}
