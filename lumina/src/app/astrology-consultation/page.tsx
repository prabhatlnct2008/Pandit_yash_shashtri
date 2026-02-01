import { Metadata } from "next";
import Link from "next/link";
import { Clock, Phone, Video, Users, Check, Sparkles, Star, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema, BreadcrumbSchema, ServiceSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { CONSULTATION_TYPES, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Astrology Consultation in South Delhi | Kundli Reading",
  description:
    "Get personalized astrology consultation from experienced Vedic astrologer. Kundli reading, horoscope analysis, marriage matching & dosha remedies. Book quick consultation now.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/astrology-consultation`,
  },
  openGraph: {
    title: "Astrology Consultation in South Delhi | Kundli Reading | Pandit Yash Shastri",
    description:
      "Get personalized astrology consultation from experienced Vedic astrologer. Kundli reading, horoscope analysis, marriage matching & dosha remedies.",
    url: `${SITE_CONFIG.url}/astrology-consultation`,
    type: "website",
  },
};

const icons: Record<string, React.ReactNode> = {
  quick: <Phone className="w-8 h-8" />,
  detailed: <Video className="w-8 h-8" />,
  matchmaking: <Users className="w-8 h-8" />,
};

const astrologyFAQs = [
  {
    question: "What information do I need for an astrology consultation?",
    answer:
      "For accurate kundli analysis, you need your exact birth date, birth time (as accurate as possible), and birth place. If birth time is unknown, Pandit Ji can work with approximate times but accuracy may vary.",
  },
  {
    question: "How is online consultation conducted?",
    answer:
      "Online consultations are conducted via WhatsApp video call or regular phone call. You share your birth details in advance, Pandit Ji prepares your kundli, and then discusses findings and guidance during the scheduled call.",
  },
  {
    question: "What is included in a detailed consultation?",
    answer:
      "A detailed consultation includes complete kundli analysis, current dasha period interpretation, identification of any doshas (like Manglik, Kaal Sarp, etc.), career and relationship guidance, and personalized remedies if needed.",
  },
  {
    question: "Can astrology help with marriage decisions?",
    answer:
      "Yes, Vedic astrology is widely used for marriage matchmaking (Gun Milan). It analyzes compatibility between two horoscopes, identifies potential challenges, and suggests remedies. However, final decisions should consider multiple factors beyond just horoscope matching.",
  },
  {
    question: "How often should I consult an astrologer?",
    answer:
      "There's no fixed frequency. Many people consult during major life decisions (career changes, marriage, property purchase) or when facing persistent challenges. Annual consultations during your birthday month can also be helpful for yearly planning.",
  },
];

export default function AstrologyConsultationPage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Astrology Consultation in South Delhi"
        description="Get personalized astrology consultation from experienced Vedic astrologer. Kundli reading, horoscope analysis, marriage matching & dosha remedies."
        url={`${SITE_CONFIG.url}/astrology-consultation`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Astrology Consultation", url: `${SITE_CONFIG.url}/astrology-consultation` },
        ]}
      />
      <ServiceSchema
        serviceName="Vedic Astrology Consultation"
        serviceDescription="Personal astrology consultation including kundli reading, horoscope analysis, dosha identification, and Vedic remedies for life guidance."
      />
      <FAQSchema faqs={astrologyFAQs} />

      <article>
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-saffron mb-4">
                <Star className="w-5 h-5 fill-gold text-gold" />
                <span className="text-sm font-medium">Vedic Astrology Services</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Astrology Consultation for{" "}
                <span className="text-saffron">Life Guidance</span>
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Vedic astrology offers timeless wisdom for navigating life's
                questions. From career decisions to relationship compatibility,
                get personalized guidance rooted in authentic Jyotish tradition.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    "Hello, I would like to book an astrology consultation."
                  )}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sparkles className="w-5 h-5" />
                  Book Consultation Now
                </LinkButton>
                <LinkButton
                  href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                  variant="outline"
                  size="lg"
                >
                  <Phone className="w-5 h-5" />
                  Call: {SITE_CONFIG.contact.primaryPhone}
                </LinkButton>
              </div>
            </div>
          </div>
        </header>

        {/* Consultation Types Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="consultation-types">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="consultation-types"
                className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
              >
                Choose Your Consultation Type
              </h2>
              <p className="text-lg text-charcoal/70">
                Select the consultation format that best suits your needs and
                schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CONSULTATION_TYPES.map((consultation, index) => (
                <Card
                  key={consultation.id}
                  variant="elevated"
                  padding="lg"
                  className={`flex flex-col h-full ${
                    index === 1 ? "ring-2 ring-gold lg:scale-105" : ""
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center text-saffron mb-4">
                      {icons[consultation.id]}
                    </div>
                    <CardTitle className="text-2xl">{consultation.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 p-3 bg-ivory rounded-lg">
                        <Clock className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-sm text-charcoal/60">Duration</p>
                          <p className="font-medium">{consultation.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-ivory rounded-lg">
                        <Sparkles className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-sm text-charcoal/60">Best For</p>
                          <p className="font-medium">{consultation.bestFor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-ivory rounded-lg">
                        <Phone className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-sm text-charcoal/60">Mode</p>
                          <p className="font-medium">{consultation.mode}</p>
                        </div>
                      </div>
                    </div>

                    <CardDescription className="mb-4">
                      {consultation.description}
                    </CardDescription>

                    {consultation.includes && (
                      <div className="space-y-2">
                        <p className="font-medium text-charcoal">Includes:</p>
                        <ul className="space-y-2">
                          {consultation.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-accent flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter>
                    <LinkButton
                      href={getWhatsAppLink(
                        SITE_CONFIG.contact.primaryPhone,
                        `Hello, I would like to book a ${consultation.name} with Pandit Ji.`
                      )}
                      variant={index === 1 ? "secondary" : "outline"}
                      className="w-full"
                      size="lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </LinkButton>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 md:py-24 bg-ivory-dark" aria-labelledby="what-to-expect">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2
                id="what-to-expect"
                className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center"
              >
                What to Expect in Your Consultation
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Share Your Birth Details
                    </h3>
                    <p className="text-charcoal/70">
                      Provide your date, time, and place of birth. For
                      matchmaking, both individuals' details are needed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Kundli Preparation
                    </h3>
                    <p className="text-charcoal/70">
                      Pandit Ji prepares your detailed birth chart (kundli)
                      analyzing planetary positions and their influences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Personalized Discussion
                    </h3>
                    <p className="text-charcoal/70">
                      During your consultation, receive insights about your
                      current phase, upcoming opportunities, and areas needing
                      attention.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Remedies & Guidance
                    </h3>
                    <p className="text-charcoal/70">
                      Receive practical remedies — mantras, gemstones, or pujas
                      — tailored to your specific situation. No fear-based
                      selling, just honest guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Astrology Consultation FAQs"
          subtitle="Common questions about our astrology services"
          faqs={astrologyFAQs}
          className="bg-white"
        />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-saffron">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Guidance?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards clarity. Book your astrology
              consultation today and discover what the stars have in store.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  "Hello, I would like to book an astrology consultation."
                )}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-saffron hover:bg-ivory"
              >
                Book on WhatsApp
              </LinkButton>
              <Link
                href="/ask-pandit-ji"
                className="inline-flex items-center gap-2 text-white font-medium hover:underline"
              >
                Or ask a free question
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
