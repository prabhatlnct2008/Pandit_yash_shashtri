import { Clock, Phone, Video, Users, Check, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { CONSULTATION_TYPES, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

const icons: Record<string, React.ReactNode> = {
  quick: <Phone className="w-6 h-6" />,
  detailed: <Video className="w-6 h-6" />,
  matchmaking: <Users className="w-6 h-6" />,
};

export function ConsultationCards() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="consultation-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="consultation-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Need Guidance Right Now?
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Astrology is most helpful when guidance is timely and personal.
            Pandit Ji offers structured consultations for urgent and important
            life questions.
          </p>
        </div>

        {/* Consultation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CONSULTATION_TYPES.map((consultation) => (
            <Card
              key={consultation.id}
              variant="elevated"
              className="flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron mb-4">
                  {icons[consultation.id]}
                </div>
                <CardTitle>{consultation.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{consultation.duration}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-charcoal/70">
                    <Sparkles className="w-4 h-4 text-gold mt-0.5" />
                    <span>Best for: {consultation.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Phone className="w-4 h-4 text-gold" />
                    <span>{consultation.mode}</span>
                  </div>
                </div>

                <CardDescription>{consultation.description}</CardDescription>

                {consultation.includes && (
                  <ul className="mt-4 space-y-2">
                    {consultation.includes.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-charcoal/80"
                      >
                        <Check className="w-4 h-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>

              <CardFooter>
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    `Hello, I would like to book a ${consultation.name} with Pandit Ji.`
                  )}
                  variant={consultation.id === "quick" ? "secondary" : "outline"}
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book {consultation.id === "matchmaking" ? "Matchmaking" : "Consult"}
                </LinkButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-charcoal/60 mt-8 italic">
          Astrology is guidance-based and conducted with complete confidentiality.
        </p>
      </div>
    </section>
  );
}
