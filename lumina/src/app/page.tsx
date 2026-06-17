import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { FamilyPanditSection } from "@/components/sections/FamilyPanditSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PujaServicesPreview } from "@/components/sections/PujaServicesPreview";
import { HowItGoesSection } from "@/components/sections/HowItGoesSection";
import { KundliSection } from "@/components/sections/KundliSection";
import { TalkFirstSection } from "@/components/sections/TalkFirstSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FAQSchema, BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { HOME_FAQS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Pandit Ji Home Puja in South Delhi & Gurgaon | Pandit Yash Shastri",
  description:
    "Pandit Ji Home Puja by Pandit Yash Shastri — book home puja, kundli & astrology across South Delhi & Gurgaon. The same Pandit jee every time, a clear price, all samagri brought.",
  keywords: [
    "pandit ji home puja",
    "panditjeehomepuja",
    "pandit ji home puja south delhi",
    "home puja pandit gurgaon",
    "pandit yash shastri",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title:
      "Pandit Ji Home Puja in South Delhi & Gurgaon | Pandit Yash Shastri",
    description:
      "Pandit Ji Home Puja by Pandit Yash Shastri — home puja, kundli & astrology across South Delhi & Gurgaon. The same Pandit jee every time.",
    url: SITE_CONFIG.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Pandit Ji Home Puja in South Delhi & Gurgaon"
        description="Pandit Ji Home Puja by Pandit Yash Shastri — home puja, kundli & astrology across South Delhi & Gurgaon. The same Pandit jee every time."
        url={SITE_CONFIG.url}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_CONFIG.url }]} />
      <FAQSchema faqs={HOME_FAQS} />

      {/* Page Content */}
      <article>
        {/* Section 1 — Hero (havan flame video) */}
        <Hero />

        {/* Section 1B — Quick facts strip */}
        <QuickFacts />

        {/* Section 2 — What a family Pandit jee means */}
        <FamilyPanditSection />

        {/* Section 3 — About me */}
        <AboutSection />

        {/* Section 4 — Pujas I do at home */}
        <PujaServicesPreview />

        {/* Section 5 — How a puja with me goes */}
        <HowItGoesSection />

        {/* Section 6 — Kundli & astrology */}
        <KundliSection />

        {/* Section 7 — What families say: the site-wide ReviewWidget
            (rendered in the root layout before the footer) covers reviews
            on the home page and every other page. */}

        {/* Section 8 — You don't have to book to talk to me */}
        <TalkFirstSection />

        {/* Section 9 — FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={HOME_FAQS}
          className="bg-ivory-dark"
        />

        {/* Section 10 — Closing CTA band */}
        <ClosingCTA />
      </article>
    </>
  );
}
