import { Metadata } from "next";
import Link from "next/link";
import { Home, Heart, Sparkles, Users, Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema, BreadcrumbSchema, ServiceSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { PUJA_SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Puja Services at Home in South Delhi & Gurgaon",
  description:
    "Professional pandit for home puja in South Delhi & Gurgaon. Griha Pravesh, Satyanarayan Katha, Rudrabhishek, wedding rituals & more. Performed with shuddh vidhi.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/puja-services`,
  },
  openGraph: {
    title: "Puja Services at Home in South Delhi & Gurgaon | Pandit Yash Shastri",
    description:
      "Professional pandit for home puja in South Delhi & Gurgaon. Griha Pravesh, Satyanarayan Katha, Rudrabhishek, wedding rituals & more.",
    url: `${SITE_CONFIG.url}/puja-services`,
    type: "website",
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6" />,
  Devotional: <Heart className="w-6 h-6" />,
  Shiva: <Sparkles className="w-6 h-6" />,
  Wedding: <Users className="w-6 h-6" />,
  Sanskar: <Users className="w-6 h-6" />,
  Health: <Heart className="w-6 h-6" />,
  Astrology: <Sparkles className="w-6 h-6" />,
  Remedy: <Sparkles className="w-6 h-6" />,
  Custom: <Sparkles className="w-6 h-6" />,
};

const pujaFAQs = [
  {
    question: "How do I book a puja service?",
    answer:
      "You can book by calling directly at 9716684871 or messaging on WhatsApp. Share the type of puja, preferred date, and location. Pandit Ji will confirm availability and provide the samagri (materials) list.",
  },
  {
    question: "What materials (samagri) do I need to arrange?",
    answer:
      "After booking, you'll receive a detailed list specific to your puja. Basic items typically include flowers, fruits, milk, diya, and specific items based on the puja type. Samagri arrangement assistance is also available if needed.",
  },
  {
    question: "Can pujas be performed in apartments?",
    answer:
      "Yes, Pandit Ji regularly performs pujas in apartments across South Delhi and Gurgaon. The rituals are adapted to respect apartment settings while maintaining traditional authenticity.",
  },
  {
    question: "How long does a typical puja take?",
    answer:
      "Duration varies by puja type. Quick pujas like Satyanarayan Katha take 2-3 hours, while elaborate ceremonies like weddings may take 4-6 hours. Specific timings are discussed during booking.",
  },
  {
    question: "What areas do you serve for home pujas?",
    answer:
      "Pandit Ji serves all of South Delhi including Chhatarpur, Mehrauli, Green Park, Hauz Khas, Greater Kailash, Panchsheel, Lajpat Nagar, and the entire Gurgaon region.",
  },
];

export default function PujaServicesPage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Puja Services at Home in South Delhi & Gurgaon"
        description="Professional pandit for home puja in South Delhi & Gurgaon. Griha Pravesh, Satyanarayan Katha, Rudrabhishek, wedding rituals & more."
        url={`${SITE_CONFIG.url}/puja-services`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Puja Services", url: `${SITE_CONFIG.url}/puja-services` },
        ]}
      />
      <ServiceSchema
        serviceName="Home Puja Services"
        serviceDescription="Traditional Vedic puja services performed at your home, including Griha Pravesh, Satyanarayan Katha, Rudrabhishek, wedding ceremonies, and all major sanskars."
      />
      <FAQSchema faqs={pujaFAQs} />

      <article>
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-saffron mb-4">
                <span className="text-2xl">🕉️</span>
                <span className="text-sm font-medium">Traditional Vedic Rituals</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Puja Services at{" "}
                <span className="text-saffron">Your Home</span>
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Traditional Vedic rituals performed with shuddh vidhi at your
                home, society, office, or temple. Every ceremony conducted with
                devotion, precision, and respect for your space.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    "Hello, I would like to schedule a puja with Pandit Ji."
                  )}
                  variant="primary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sparkles className="w-5 h-5" />
                  Schedule a Puja
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

        {/* Puja Location Options */}
        <section className="py-12 bg-white border-b border-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-charcoal/80">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-saffron" />
                <span className="font-medium">Home</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-saffron" />
                <span className="font-medium">Society</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-saffron" />
                <span className="font-medium">Office</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-saffron">🕉️</span>
                <span className="font-medium">Temple</span>
              </div>
            </div>
          </div>
        </section>

        {/* All Puja Services */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="all-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="all-services"
                className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
              >
                Our Puja Services
              </h2>
              <p className="text-lg text-charcoal/70">
                Complete range of Vedic rituals and ceremonies for all occasions
                and life stages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PUJA_SERVICES.map((service) => (
                <Card
                  key={service.id}
                  variant="bordered"
                  className="hover:border-gold hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0 group-hover:bg-saffron group-hover:text-white transition-colors">
                      {categoryIcons[service.category] || (
                        <Sparkles className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-sm mb-3">
                        {service.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gold font-medium">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                        <span className="text-xs px-2 py-1 bg-ivory rounded-full text-charcoal/60">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-charcoal/70 mb-4">
                Don't see your required puja listed? We perform all traditional
                Vedic rituals.
              </p>
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  "Hello, I have a question about puja services."
                )}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask About Other Pujas
              </LinkButton>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-ivory-dark" aria-labelledby="why-choose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="why-choose"
              className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Why Families Trust Our Puja Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-4xl mb-4">🕉️</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Shuddh Vidhi
                </h3>
                <p className="text-sm text-charcoal/70">
                  All rituals performed according to authentic Vedic traditions
                  and proper procedure.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-4xl mb-4">🛕</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Temple Association
                </h3>
                <p className="text-sm text-charcoal/70">
                  Associated with Shiv Shakti Mandir, Mehrauli — bringing temple
                  sanctity to your home.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Calm & Respectful
                </h3>
                <p className="text-sm text-charcoal/70">
                  Clear communication, no rush, no pressure. Your ceremony
                  conducted with peace and dignity.
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Local & Accessible
                </h3>
                <p className="text-sm text-charcoal/70">
                  Serving all of South Delhi and Gurgaon with flexible
                  scheduling for your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title="Puja Services FAQs"
          subtitle="Common questions about booking and conducting pujas"
          faqs={pujaFAQs}
          className="bg-white"
        />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-saffron">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Schedule Your Puja?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Bring divine blessings to your home, office, or special occasion.
              Contact Pandit Ji to discuss your requirements and book your puja.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  "Hello, I would like to schedule a puja."
                )}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-saffron hover:bg-ivory"
              >
                Schedule on WhatsApp
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
