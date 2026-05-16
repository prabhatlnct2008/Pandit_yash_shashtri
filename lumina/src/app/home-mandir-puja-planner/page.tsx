import { Metadata } from "next";
import { ArrowDown, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { MandirPlanner } from "@/components/planner/MandirPlanner";
import { PlannerModules } from "@/components/planner/PlannerModules";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";

const PAGE_URL = `${SITE_CONFIG.url}/home-mandir-puja-planner`;

export const metadata: Metadata = {
  title: "Home Mandir & Puja Planner | Pandit Ji, Mehrauli Delhi",
  description:
    "Plan your home mandir, vastu direction & Shiv puja in 90 seconds. Reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli. South Delhi & Gurgaon.",
  keywords: [
    "home mandir",
    "mandir for home",
    "mandir vastu",
    "puja planner",
    "shiv puja at home",
    "shivling for home mandir",
    "pandit in mehrauli",
    "shiv shakti mandir",
    "home temple direction",
    "griha pravesh puja",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Home Mandir & Puja Planner | Pandit Ji, Mehrauli Delhi",
    description:
      "Plan your home mandir, vastu direction & Shiv puja in 90 seconds. Reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Mandir & Puja Planner | Pandit Ji",
    description:
      "Plan your home mandir, vastu direction & Shiv puja in 90 seconds. Reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli.",
  },
};

export default function HomeMandirPujaPlannerPage() {
  const whatsappPrefill = `Namaste Pandit Ji, I'd like to plan my home mandir and puja setup. Please guide me.`;

  return (
    <>
      <WebPageSchema
        title="Home Mandir & Puja Planner"
        description="Plan your home mandir, vastu direction and Shiv puja in 90 seconds. Reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli."
        url={PAGE_URL}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Home Mandir & Puja Planner", url: PAGE_URL },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-saffron mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">
                A 6-step home mandir &amp; puja guide
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Home Mandir &amp; Puja Planner — for South Delhi &amp; Gurgaon homes
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-4 max-w-2xl mx-auto">
              In 6 quick taps, get a personalised home mandir and puja plan
              based on your home, your occasion, and traditional Vastu —
              reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli.
            </p>
            <p
              className="text-sm text-charcoal/60 mb-8"
              lang="hi"
            >
              90 सेकंड में अपने घर का मंदिर एवं पूजा प्लान करें।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="#planner" variant="primary" size="lg">
                <Sparkles className="w-5 h-5" />
                Start the Planner
                <ArrowDown className="w-4 h-4" />
              </LinkButton>
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  whatsappPrefill
                )}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask Pandit Ji on WhatsApp
              </LinkButton>
            </div>
            <p className="mt-6 text-xs text-charcoal/60 inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-saffron" />
              Reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli
            </p>
          </div>
        </header>

        {/* Trust strip */}
        <section className="py-8 bg-white border-b border-muted">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-charcoal/80">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-saffron" />
                <span>
                  Associated with {SITE_CONFIG.temple.name}, Mehrauli
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-saffron" />
                <span>Serving South Delhi &amp; Gurgaon</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-saffron" />
                <span>Google reviewed</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Planner */}
        <section
          id="planner"
          className="py-16 md:py-24 bg-ivory"
          aria-labelledby="planner-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <h2
              id="planner-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3"
            >
              Plan your mandir setup in 90 seconds
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Six quick taps. No signup. Your selections save automatically.
            </p>
          </div>
          <MandirPlanner />
        </section>

        {/* Phase 2 — SEO modules below the tool */}
        <section
          id="learn-more"
          aria-labelledby="modules-heading"
          className="bg-white"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
            <h2
              id="modules-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4"
            >
              Learn more about home mandir, vastu &amp; Shiv puja
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Twelve practical guides covering everything from choosing a
              mandir to performing daily Shiv puja — written with Pandit Ji&apos;s
              guidance and softened where individual family traditions vary.
            </p>
          </div>
          <PlannerModules />
        </section>

        {/* Disclaimer — mandatory on this page */}
        <Disclaimer className="bg-ivory-dark" />

        {/* Footer CTA */}
        <section className="py-16 md:py-20 bg-saffron">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Talk to Pandit Ji
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              For setup guidance, muhurat questions, or to book a home puja —
              reach Pandit Yash Shastri directly. Calls and WhatsApp answered
              personally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  whatsappPrefill
                )}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-saffron hover:bg-ivory"
              >
                WhatsApp Pandit Ji
              </LinkButton>
              <LinkButton
                href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-saffron"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </LinkButton>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
