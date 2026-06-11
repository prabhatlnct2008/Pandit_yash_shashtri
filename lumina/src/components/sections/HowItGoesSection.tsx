import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

export function HowItGoesSection() {
  return (
    <section className="bg-white" aria-labelledby="how-it-goes-heading">
      {/* Full-width image band */}
      <div className="relative h-56 md:h-72 lg:h-80">
        <Image
          src="/images/home-puja-mandap-brass-thali-setup.jpg?v=2"
          alt="A complete home puja setup with brass thali, kalash, marigold and diyas."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          id="how-it-goes-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-8"
        >
          How a puja with me actually goes
        </h2>
        <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed mb-10">
          <p>
            You tell me the puja and the date. I check the panchang and give
            you the correct muhurat. I bring the samagri, all of it, so nobody
            is sent to the market that morning. I reach on time. I set up.
          </p>
          <p>
            And then, the part most families remember. As we go, I explain.
            What this step means, why we do it, what we are asking for. So the
            puja is not just Sanskrit you sit through. Your parents understand
            it. Your children understand it. Everyone in the room is part of
            it, not just watching it.
          </p>
          <p>
            The price I tell you at the start is the final price. Nothing
            appears at the end.
          </p>
        </div>
        <LinkButton
          href={getWhatsAppLink(
            SITE_CONFIG.contact.primaryPhone,
            WA_TEMPLATES.general()
          )}
          variant="brass"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a puja on WhatsApp
        </LinkButton>
      </div>
    </section>
  );
}
