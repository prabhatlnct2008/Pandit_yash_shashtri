import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink, getPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Pandit Yash Shastri | Book Consultation",
  description:
    "Contact Pandit Yash Shastri for astrology consultation or puja booking. Serving South Delhi, Gurgaon & nearby areas. Call now or send enquiry online.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Contact Pandit Yash Shastri | Book Consultation | South Delhi & Gurgaon",
    description:
      "Contact Pandit Yash Shastri for astrology consultation or puja booking. Serving South Delhi, Gurgaon & nearby areas.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
  },
};

const serviceAreas = [
  "Chhatarpur",
  "Mehrauli",
  "Green Park",
  "Hauz Khas",
  "Greater Kailash (GK1 & GK2)",
  "Panchsheel Enclave",
  "Lajpat Nagar",
  "AIIMS Area",
  "Defence Colony",
  "Saket",
  "Vasant Kunj",
  "Gurgaon (All Sectors)",
];

export default function ContactPage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Contact Pandit Yash Shastri"
        description="Contact Pandit Yash Shastri for astrology consultation or puja booking. Serving South Delhi, Gurgaon & nearby areas."
        url={`${SITE_CONFIG.url}/contact`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
        ]}
      />

      <article>
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Get in <span className="text-saffron">Touch</span>
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Not ready to call? Send your requirement below. Pandit Ji or
                team will respond shortly to assist with your puja or
                consultation needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                  variant="primary"
                  size="lg"
                >
                  <Phone className="w-5 h-5" />
                  Call: {SITE_CONFIG.contact.primaryPhone}
                </LinkButton>
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    "Hello, I would like to enquire about your services."
                  )}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </LinkButton>
              </div>
            </div>
          </div>
        </header>

        {/* Contact Info & Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-10">
                  <Card variant="bordered" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                      <a
                        href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
                        className="text-saffron hover:underline text-lg"
                      >
                        {SITE_CONFIG.contact.primaryPhone}
                      </a>
                      <span className="mx-2 text-charcoal/40">|</span>
                      <a
                        href={getPhoneLink(SITE_CONFIG.contact.secondaryPhone)}
                        className="text-saffron hover:underline text-lg"
                      >
                        {SITE_CONFIG.contact.secondaryPhone}
                      </a>
                    </div>
                  </Card>

                  <Card variant="bordered" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal mb-1">WhatsApp</h3>
                      <a
                        href={getWhatsAppLink(SITE_CONFIG.contact.primaryPhone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Message on WhatsApp
                      </a>
                      <p className="text-sm text-charcoal/60 mt-1">
                        Quick responses during working hours
                      </p>
                    </div>
                  </Card>

                  <Card variant="bordered" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal mb-1">Address</h3>
                      <address className="not-italic text-charcoal/70">
                        {SITE_CONFIG.temple.name}
                        <br />
                        {SITE_CONFIG.temple.address}
                        <br />
                        {SITE_CONFIG.temple.city} – {SITE_CONFIG.temple.postalCode}
                      </address>
                    </div>
                  </Card>

                  <Card variant="bordered" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal mb-1">Availability</h3>
                      <p className="text-charcoal/70">
                        7:00 AM – 9:00 PM
                        <br />
                        All days of the week
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">
                    Service Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-ivory rounded-full text-sm text-charcoal/80"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">
                  Send Enquiry
                </h2>

                <Card variant="bordered" padding="lg">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Name <span className="text-saffron">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Phone Number <span className="text-saffron">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Your contact number"
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="area"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Area <span className="text-saffron">*</span>
                      </label>
                      <select
                        id="area"
                        name="area"
                        required
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select your area</option>
                        <option value="south-delhi">South Delhi</option>
                        <option value="gurgaon">Gurgaon</option>
                        <option value="other">Other (specify in message)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Service Type <span className="text-saffron">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select service type</option>
                        <option value="astrology">Astrology Consultation</option>
                        <option value="puja">Puja Services</option>
                        <option value="matchmaking">Marriage Matchmaking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Please share details about your requirement, preferred dates, or any questions..."
                        className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-saffron text-white font-medium rounded-xl hover:bg-saffron-dark transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </button>

                    <p className="text-xs text-charcoal/50 text-center">
                      Pandit Ji or team will respond shortly.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="bg-ivory-dark py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">
                Find Us
              </h2>
              <p className="text-charcoal/70">
                Based at {SITE_CONFIG.temple.name}, Mehrauli
              </p>
            </div>
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-charcoal/50">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Map integration coming soon</p>
                <a
                  href={`https://maps.google.com/?q=${SITE_CONFIG.geo.latitude},${SITE_CONFIG.geo.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron hover:underline text-sm mt-2 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
