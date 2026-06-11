import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

const OFFERINGS = [
  {
    name: "Quick guidance",
    detail:
      "10–15 min, phone or WhatsApp call. One urgent thing. A muhurat, a small upay, a quick decision.",
  },
  {
    name: "Detailed kundli reading",
    detail:
      "30–45 min, in person / phone / video. Full horoscope: grahas, dasha, any dosha, and remedies you can actually follow.",
  },
  {
    name: "Gun Milan (marriage matching)",
    detail: "45–60 min. Kundli matching, manglik check, a straight answer.",
  },
];

export function KundliSection() {
  return (
    <section
      className="py-16 md:py-24 bg-ivory-dark"
      aria-labelledby="kundli-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/janam-kundli-vedic-astrology-chart.jpg?v=2"
              alt="A hand-drawn Vedic janam kundli chart for astrology consultation."
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div>
            <h2
              id="kundli-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6"
            >
              Kundli and astrology
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              I do astrology too. Not the scary kind. Just honest guidance when
              there is a real question on your mind.
            </p>
            <ul className="space-y-4 mb-6">
              {OFFERINGS.map((offering) => (
                <li key={offering.name} className="flex gap-3">
                  <span className="text-gold mt-1" aria-hidden="true">
                    ◆
                  </span>
                  <p className="text-charcoal/80 leading-relaxed">
                    <strong className="text-charcoal">{offering.name}</strong>{" "}
                    — {offering.detail}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Whatever you tell me stays with me. I suggest a remedy only when
              one is genuinely needed.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  WA_TEMPLATES.kundli()
                )}
                variant="brass"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask me about your kundli
              </LinkButton>
              <LinkButton href="/astrology-consultation" variant="outline">
                See all astrology services
                <ArrowRight className="w-4 h-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
