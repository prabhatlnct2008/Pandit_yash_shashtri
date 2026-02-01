import { Building, MessageCircle, Shield, MapPin, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const trustPoints = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Temple Association",
    description: `Associated with ${SITE_CONFIG.temple.name}, Mehrauli`,
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Clear Communication",
    description: "Calm, respectful guidance without fear-based selling",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trusted Locally",
    description: "Serving South Delhi & Gurgaon families for years",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Google Reviewed",
    description: "Verified reviews from real families",
  },
];

export function TrustSection() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="trust-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Why Families Choose Pandit Yash Shastri
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Authentic Vedic practice combined with modern understanding.
            Spiritual guidance you can trust.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-ivory hover:bg-ivory-dark transition-colors"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-saffron/10 flex items-center justify-center text-saffron mb-4">
                {point.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-charcoal/70">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <a
            href={SITE_CONFIG.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
          >
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span>View Google Reviews</span>
          </a>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-12 border-t border-muted">
          <div className="flex items-center justify-center gap-2 text-charcoal/70 mb-4">
            <MapPin className="w-5 h-5 text-saffron" />
            <span className="font-medium">Proudly Serving</span>
          </div>
          <p className="text-center text-charcoal/80">
            Chhatarpur • Mehrauli • Green Park • Hauz Khas • Greater Kailash •
            Panchsheel Enclave • Lajpat Nagar • AIIMS Area • Gurgaon
          </p>
        </div>
      </div>
    </section>
  );
}
