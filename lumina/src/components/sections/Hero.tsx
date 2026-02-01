import Link from "next/link";
import { Star, MapPin, Sparkles, Calendar, HelpCircle } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237A1E1E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sanskrit Invocation */}
          <div className="mb-8 animate-fade-in">
            <p className="font-heading text-saffron/80 text-lg md:text-xl italic leading-relaxed">
              ॐ असतो मा सद्गमय
              <br />
              तमसो मा ज्योतिर्गमय
              <br />
              मृत्योर्मा अमृतं गमय
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
            Guidance Rooted in{" "}
            <span className="text-saffron">Vedic Wisdom</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-xl md:text-2xl text-charcoal/80 font-medium mb-6">
            Pandit & Astrologer for South Delhi and Gurgaon Families
          </p>

          {/* Support Copy */}
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Personal astrology consultations, home puja services, and muhurat
            guidance — performed with shuddh vidhi, calm clarity, and sincerity.
          </p>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2 text-charcoal/80">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span>Google-rated</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal/80">
              <span className="text-saffron">🕉️</span>
              <span>{SITE_CONFIG.temple.name}, Mehrauli</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal/80">
              <MapPin className="w-5 h-5 text-saffron" />
              <span>South Delhi & Gurgaon</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <LinkButton
              href={getWhatsAppLink(
                SITE_CONFIG.contact.primaryPhone,
                "Hello, I would like to book an astrology consultation with Pandit Ji."
              )}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sparkles className="w-5 h-5" />
              Book Quick Astrology Consult
            </LinkButton>
            <LinkButton href="/puja-services" variant="primary" size="lg">
              <Calendar className="w-5 h-5" />
              Schedule a Puja
            </LinkButton>
          </div>

          {/* Secondary CTA */}
          <Link
            href="/ask-pandit-ji"
            className="inline-flex items-center gap-2 text-saffron hover:text-saffron-dark font-medium transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Ask Pandit Ji (Free)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
