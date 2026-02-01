import Link from "next/link";
import { ArrowRight, Home, Heart, Sparkles, Users } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { PUJA_SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5" />,
  Devotional: <Heart className="w-5 h-5" />,
  Shiva: <Sparkles className="w-5 h-5" />,
  Wedding: <Users className="w-5 h-5" />,
  Sanskar: <Users className="w-5 h-5" />,
  Health: <Heart className="w-5 h-5" />,
  Astrology: <Sparkles className="w-5 h-5" />,
  Remedy: <Sparkles className="w-5 h-5" />,
  Custom: <Sparkles className="w-5 h-5" />,
};

export function PujaServicesPreview() {
  const featuredServices = PUJA_SERVICES.slice(0, 6);

  return (
    <section
      className="py-16 md:py-24 bg-ivory-dark"
      aria-labelledby="puja-services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="puja-services-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Puja Services at Your Home
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Traditional Vedic rituals performed with shuddh vidhi at your home,
            society, office, or temple. Every ceremony conducted with devotion
            and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              variant="bordered"
              className="hover:border-gold hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                  {categoryIcons[service.category] || (
                    <Sparkles className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                  <p className="text-xs text-gold mt-2 font-medium">
                    {service.duration}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Location Options */}
        <div className="text-center mb-8">
          <p className="text-charcoal/70 mb-2">
            <strong>Puja Locations:</strong> Home • Society • Office • Temple
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/puja-services">
            <LinkButton variant="primary">
              View All Puja Services
              <ArrowRight className="w-4 h-4" />
            </LinkButton>
          </Link>
          <LinkButton
            href={getWhatsAppLink(
              SITE_CONFIG.contact.primaryPhone,
              "Hello, I would like to schedule a puja with Pandit Ji."
            )}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Puja
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
