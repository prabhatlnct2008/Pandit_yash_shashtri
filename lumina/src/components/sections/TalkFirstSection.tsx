import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

export function TalkFirstSection() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="talk-first-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="talk-first-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-8"
        >
          You don&rsquo;t have to book to talk to me
        </h2>
        <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed mb-10">
          <p>This is the part I mean the most.</p>
          <p>
            You do not need to decide anything to send me a message. If you
            have a question, a date you are unsure about, a puja you have never
            done before and don&rsquo;t understand, just ask. I will answer. No
            charge, no pressure, no follow-up calls trying to sell you
            something.
          </p>
          <p>
            If it feels right after that, we will fix a day. If it does not,
            that is completely all right too. A Pandit jee your family trusts
            is not someone you book in a hurry. It is someone you talk to
            first.
          </p>
        </div>
        <LinkButton
          href={getWhatsAppLink(
            SITE_CONFIG.contact.primaryPhone,
            WA_TEMPLATES.askFirst()
          )}
          variant="brass"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask Pandit Jee — free
        </LinkButton>
      </div>
    </section>
  );
}
