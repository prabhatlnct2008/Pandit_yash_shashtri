import { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Send, ArrowRight, Sparkles, BookOpen, MessageCircle } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { FAQSchema, BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { PANDIT_QAS, getSchemaQAs } from "@/lib/askPanditQAs";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ask Pandit Ji - Vedic & Astrology Questions Answered",
  description:
    "30+ questions about home puja, mandir vastu, shraddha vidhi, baby naming, mundan, weddings and muhurat — answered personally by Pandit Yash Shastri. Ask your own question on WhatsApp.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/ask-pandit-ji`,
  },
  openGraph: {
    title: "Ask Pandit Ji - Vedic & Astrology Questions Answered | Pandit Yash Shastri",
    description:
      "Have questions about puja, astrology, muhurat or Vedic rituals? Ask Pandit Yash Shastri directly. Get authentic answers rooted in traditional wisdom.",
    url: `${SITE_CONFIG.url}/ask-pandit-ji`,
    type: "website",
  },
};

const questionCategories = [
  { name: "Astrology & Kundli", icon: "✨", description: "Horoscope, doshas, planetary effects" },
  { name: "Puja & Rituals", icon: "🕉️", description: "Which puja, how to perform, significance" },
  { name: "Muhurat & Timing", icon: "📅", description: "Auspicious dates, shubh time for events" },
  { name: "Remedies", icon: "💎", description: "Mantras, gemstones, ritual solutions" },
  { name: "Vastu", icon: "🏠", description: "Home direction, placement, corrections" },
  { name: "Life Guidance", icon: "🙏", description: "Career, relationships, major decisions" },
];

export default function AskPanditJiPage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Ask Pandit Ji - Vedic & Astrology Questions Answered"
        description="Have questions about puja, astrology, muhurat or Vedic rituals? Ask Pandit Yash Shastri directly."
        url={`${SITE_CONFIG.url}/ask-pandit-ji`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Ask Pandit Ji", url: `${SITE_CONFIG.url}/ask-pandit-ji` },
        ]}
      />
      <FAQSchema faqs={getSchemaQAs()} />

      <article>
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-ivory to-ivory-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-saffron mb-4">
                <HelpCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Free Q&A</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Ask <span className="text-saffron">Pandit Ji</span>
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Have a question related to puja, astrology, muhurat, or life
                decisions? Submit your question below. Selected questions are
                answered personally by Pandit Ji and published to help others.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href={getWhatsAppLink(
                    SITE_CONFIG.contact.primaryPhone,
                    "Hello Pandit Ji, I have a question: "
                  )}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ask via WhatsApp
                </LinkButton>
                <Link
                  href="/astrology-consultation"
                  className="inline-flex items-center gap-2 text-saffron font-medium hover:underline"
                >
                  Need detailed guidance? Book consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Planner cross-link */}
        <section className="py-8 bg-ivory border-b border-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/home-mandir-puja-planner"
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-white border border-muted hover:border-saffron transition-colors"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-saffron flex-shrink-0 mt-1" />
                <div>
                  <p className="font-heading text-base font-semibold text-charcoal">
                    Setting up a home mandir? Use our Planner first
                  </p>
                  <p className="text-sm text-charcoal/70 mt-1">
                    Six taps → personalised vastu direction, puja, and samagri
                    plan. Then ask Pandit Ji to confirm the specifics.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-saffron whitespace-nowrap">
                Open planner <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* Question Categories */}
        <section className="py-12 bg-white border-b border-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">
                What Can You Ask?
              </h2>
              <p className="text-charcoal/70">
                Questions about any of these topics are welcome
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {questionCategories.map((category) => (
                <div
                  key={category.name}
                  className="text-center p-4 rounded-xl bg-ivory hover:bg-ivory-dark transition-colors"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm text-charcoal mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-charcoal/60">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Question Form Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="submit-question">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="submit-question"
                className="font-heading text-3xl font-bold text-charcoal mb-4"
              >
                Submit Your Question
              </h2>
              <p className="text-charcoal/70">
                Write your question clearly. The more specific, the better the
                guidance.
              </p>
            </div>

            <Card variant="bordered" padding="lg">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Your Question <span className="text-saffron">*</span>
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows={5}
                    required
                    placeholder="Example: What is the best muhurat for Griha Pravesh in March 2024?"
                    className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Name <span className="text-charcoal/50">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email <span className="text-charcoal/50">(for notification)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-muted rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-saffron text-white font-medium rounded-xl hover:bg-saffron-dark transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Submit Question
                </button>

                <p className="text-xs text-charcoal/50 text-center">
                  Only relevant questions are published. Personal details remain
                  private.
                </p>
              </form>
            </Card>
          </div>
        </section>

        {/* Sample Q&A Section */}
        <section
          className="py-16 md:py-24 bg-ivory-dark"
          aria-labelledby="answered-questions"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-saffron mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">Answered by Pandit Ji</span>
              </div>
              <h2
                id="answered-questions"
                className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
              >
                {PANDIT_QAS.length}+ Questions answered by Pandit Ji
              </h2>
              <p className="text-charcoal/70">
                Real questions from South Delhi and Gurgaon families — on
                puja, mandir, shraddha, sanskars, muhurat, and astrology.
              </p>
            </div>

            <div className="space-y-6">
              {PANDIT_QAS.map((qa) => (
                <Card key={qa.id} variant="default" className="overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron flex-shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-ivory rounded-full text-charcoal/60">
                          {qa.category}
                        </span>
                        <span className="text-xs text-charcoal/50">
                          Asked by {qa.askedBy} · {qa.dateRelative}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                        {qa.question}
                      </h3>
                      <div className="pl-4 border-l-2 border-gold">
                        <p className="text-charcoal/70 leading-relaxed whitespace-pre-line">
                          {qa.answer}
                        </p>
                        <p className="text-sm text-saffron mt-3 font-medium">
                          — Pandit Yash Shastri
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-charcoal/60 text-sm">
                More Q&As are added regularly. Check back for new insights.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-saffron">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Need Personal Guidance?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              While Q&A provides general guidance, a personal consultation
              offers tailored advice based on your specific horoscope and
              situation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/astrology-consultation">
                <LinkButton
                  variant="secondary"
                  size="lg"
                  className="bg-white text-saffron hover:bg-ivory"
                >
                  <Sparkles className="w-5 h-5" />
                  Book Personal Consultation
                </LinkButton>
              </Link>
              <LinkButton
                href={getWhatsAppLink(
                  SITE_CONFIG.contact.primaryPhone,
                  "Hello, I would like to discuss my question in detail."
                )}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white text-white hover:bg-white hover:text-saffron"
              >
                Chat on WhatsApp
              </LinkButton>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
