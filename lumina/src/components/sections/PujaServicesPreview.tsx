import Image from "next/image";
import { ArrowRight, Clock, HelpCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { HOME_PUJA_CARDS, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

export function PujaServicesPreview() {
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
            Pujas I do at home
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed italic">
            At your home, your society hall, your office, the mandir. Wherever
            you need. If yours is not here, just ask — I do many more.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {HOME_PUJA_CARDS.map((puja) => (
            <article
              key={puja.id}
              className="bg-white rounded-2xl border border-muted overflow-hidden shadow-sm hover:border-gold hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={puja.image}
                  alt={puja.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-heading text-xl font-semibold text-charcoal">
                    {puja.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gold whitespace-nowrap mt-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {puja.duration}
                  </span>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6 flex-grow">
                  {puja.description}
                </p>
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    WA_TEMPLATES.bookPuja(puja.waName)
                  )}
                  variant="brass"
                  size="sm"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book this puja
                </LinkButton>
              </div>
            </article>
          ))}
        </div>

        {/* Section CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LinkButton href="/puja-services" variant="primary">
            View all puja services
            <ArrowRight className="w-4 h-4" />
          </LinkButton>
          <LinkButton href="/ask-pandit-ji" variant="outline">
            <HelpCircle className="w-4 h-4" />
            Not sure which puja? Ask Pandit Jee
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
