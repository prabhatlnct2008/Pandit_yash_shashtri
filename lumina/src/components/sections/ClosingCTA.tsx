import Image from "next/image";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

export function ClosingCTA() {
  return (
    <section
      className="bg-saffron text-ivory"
      aria-labelledby="closing-cta-heading"
    >
      {/* Marigold toran band */}
      <div className="relative h-40 md:h-56">
        <Image
          src="/images/marigold-toran-doorway-puja-invitation.jpg?v=2"
          alt="A marigold toran across a doorway, ready to welcome a puja."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2
          id="closing-cta-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-ivory mb-8"
        >
          Let us begin
        </h2>
        <div className="space-y-6 text-lg text-ivory/90 leading-relaxed mb-10">
          <p>
            A puja coming up? A question sitting in your mind? Send me a
            message. We will find the right day together, and the rest you can
            leave to me.
          </p>
          <p>
            Do this once, and if it feels right, I would be honoured to become
            your family&rsquo;s Pandit jee for the years ahead.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <LinkButton
            href={getWhatsAppLink(
              SITE_CONFIG.contact.primaryPhone,
              WA_TEMPLATES.general()
            )}
            variant="brass"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </LinkButton>
          <LinkButton
            href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
            variant="outline"
            size="lg"
            className="border-ivory text-ivory hover:bg-ivory hover:text-saffron"
          >
            <Phone className="w-5 h-5" />
            Call {SITE_CONFIG.contact.primaryPhone}
          </LinkButton>
        </div>

        <p className="text-ivory/80 text-sm md:text-base flex flex-wrap items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-gold-light" aria-hidden="true" />
          <span>
            {SITE_CONFIG.temple.name}, {SITE_CONFIG.temple.address},{" "}
            {SITE_CONFIG.temple.city} {SITE_CONFIG.temple.postalCode}
          </span>
          <span aria-hidden="true">·</span>
          <a
            href={SITE_CONFIG.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold-light hover:text-ivory underline underline-offset-4 transition-colors"
          >
            Get directions
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </section>
  );
}
