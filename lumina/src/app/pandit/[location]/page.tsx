import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Sparkles, Check, ArrowRight, Star } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQSchema, BreadcrumbSchema, WebPageSchema, JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, PUJA_SERVICES } from "@/lib/constants";
import { LOCATIONS, getLocationBySlug, getAllLocationSlugs } from "@/lib/locations";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${SITE_CONFIG.url}/pandit/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_CONFIG.url}/pandit/${location.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  // Get services mentioned in popularServices
  const popularServiceDetails = PUJA_SERVICES.filter((service) =>
    location.popularServices.some(
      (ps) => service.name.toLowerCase().includes(ps.toLowerCase().split(" ")[0])
    )
  ).slice(0, 3);

  // Create location-specific schema
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_CONFIG.name} - ${location.name}`,
    description: location.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.slug === "gurgaon" ? "Haryana" : "New Delhi",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: location.fullName,
    },
    telephone: `+91-${SITE_CONFIG.contact.primaryPhone}`,
    url: `${SITE_CONFIG.url}/pandit/${location.slug}`,
  };

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title={location.h1}
        description={location.description}
        url={`${SITE_CONFIG.url}/pandit/${location.slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: `Pandit in ${location.name}`, url: `${SITE_CONFIG.url}/pandit/${location.slug}` },
        ]}
      />
      <JsonLd data={locationSchema} />
      <FAQSchema faqs={location.faqs} />

      <article>
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-saffron mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">{location.areaType}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                {location.h1}
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                {location.content}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    `Hello, I am from ${location.name} and would like to book a consultation/puja.`
                  )}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Sparkles className="w-5 h-5" />
                  Book Consultation
                </LinkButton>
                <LinkButton
                  href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                  variant="outline"
                  size="lg"
                >
                  <Phone className="w-5 h-5" />
                  Call for Availability
                </LinkButton>
              </div>
            </div>
          </div>
        </header>

        {/* Location Highlights */}
        <section className="py-12 bg-white border-b border-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🏛️</div>
                <h3 className="font-medium text-charcoal mb-1">Temple Associated</h3>
                <p className="text-sm text-charcoal/70">{SITE_CONFIG.temple.name}</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="font-medium text-charcoal mb-1">Google Reviewed</h3>
                <p className="text-sm text-charcoal/70">Trusted by local families</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚗</div>
                <h3 className="font-medium text-charcoal mb-1">Home Visits</h3>
                <p className="text-sm text-charcoal/70">We come to your location</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services in Area */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="popular-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2
                id="popular-services"
                className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
              >
                Popular Services in {location.name}
              </h2>
              <p className="text-lg text-charcoal/70">
                Most requested puja and astrology services by {location.name}{" "}
                residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {location.popularServices.map((serviceName, index) => {
                const serviceDetail = popularServiceDetails[index];
                return (
                  <Card
                    key={serviceName}
                    variant="elevated"
                    className="hover:border-gold transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron">
                        <Check className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{serviceName}</CardTitle>
                    </div>
                    {serviceDetail && (
                      <CardDescription className="text-sm">
                        {serviceDetail.description}
                      </CardDescription>
                    )}
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Link href="/puja-services">
                <LinkButton variant="outline">
                  View All Puja Services
                  <ArrowRight className="w-4 h-4" />
                </LinkButton>
              </Link>
            </div>
          </div>
        </section>

        {/* About the Area */}
        <section className="py-16 md:py-24 bg-ivory-dark" aria-labelledby="about-area">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="about-area"
              className="font-heading text-3xl font-bold text-charcoal mb-6 text-center"
            >
              Serving {location.fullName}
            </h2>
            <div className="prose prose-lg mx-auto text-charcoal/80">
              <p className="text-lg leading-relaxed">{location.description}</p>
            </div>

            {location.nearbyLandmarks.length > 0 && (
              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">
                  Nearby Landmarks We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyLandmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="px-3 py-1 bg-ivory rounded-full text-sm text-charcoal/80"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
                Why {location.name} Families Choose Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="bordered" className="text-center p-6">
                <div className="text-2xl mb-3">🕉️</div>
                <h3 className="font-medium mb-2">Authentic Rituals</h3>
                <p className="text-sm text-charcoal/70">
                  Shuddh vidhi as per Vedic tradition
                </p>
              </Card>
              <Card variant="bordered" className="text-center p-6">
                <div className="text-2xl mb-3">🏠</div>
                <h3 className="font-medium mb-2">Home Convenience</h3>
                <p className="text-sm text-charcoal/70">
                  Pujas at your home, on your schedule
                </p>
              </Card>
              <Card variant="bordered" className="text-center p-6">
                <div className="text-2xl mb-3">💬</div>
                <h3 className="font-medium mb-2">Clear Communication</h3>
                <p className="text-sm text-charcoal/70">
                  No confusion, no fear-based approach
                </p>
              </Card>
              <Card variant="bordered" className="text-center p-6">
                <div className="text-2xl mb-3">⭐</div>
                <h3 className="font-medium mb-2">Local Trust</h3>
                <p className="text-sm text-charcoal/70">
                  Serving {location.name} families for years
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {location.faqs.length > 0 && (
          <FAQSection
            title={`FAQs for ${location.name}`}
            subtitle={`Common questions from ${location.name} residents`}
            faqs={location.faqs}
            className="bg-ivory-dark"
          />
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-saffron">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book in {location.name}?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need astrology consultation or puja services, Pandit
              Ji is available to serve {location.name} residents with authentic
              Vedic guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  `Hello, I am from ${location.name} and would like to book your services.`
                )}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-saffron hover:bg-ivory"
              >
                Book on WhatsApp
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

        {/* Other Location Links */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-lg font-semibold text-charcoal mb-6 text-center">
              Also Serving Other Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {LOCATIONS.filter((loc) => loc.slug !== location.slug).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/pandit/${loc.slug}`}
                  className="px-4 py-2 bg-ivory hover:bg-ivory-dark rounded-full text-sm text-charcoal transition-colors"
                >
                  Pandit in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
