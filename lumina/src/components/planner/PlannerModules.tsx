import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Landmark,
  MapPin,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

const WHATSAPP_PHONE = SITE_CONFIG.contact.primaryPhone;

interface ModuleShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  pendingReview?: boolean;
  pendingReviewNote?: string;
  children: React.ReactNode;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

function ModuleShell({
  id,
  eyebrow,
  title,
  intro,
  pendingReview = false,
  pendingReviewNote,
  children,
  cta,
}: ModuleShellProps) {
  return (
    <section
      id={id}
      className="py-12 md:py-16 border-b border-muted/60"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-medium tracking-wide uppercase text-saffron mb-2">
            {eyebrow}
          </p>
        )}
        <h2
          id={`${id}-heading`}
          className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4"
        >
          {title}
        </h2>
        {intro && (
          <p className="text-charcoal/75 leading-relaxed mb-6">{intro}</p>
        )}
        {pendingReview && <PendingReviewBadge note={pendingReviewNote} />}
        <div className="prose-styled text-charcoal/80">{children}</div>
        {cta && (
          <div className="mt-8">
            {cta.external ? (
              <LinkButton
                href={cta.href}
                variant="primary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </LinkButton>
            ) : (
              <LinkButton href={cta.href} variant="outline" size="md">
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </LinkButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function PendingReviewBadge({ note }: { note?: string }) {
  return (
    <div className="mb-6 p-4 rounded-lg bg-ivory border-l-4 border-saffron flex items-start gap-3 text-sm">
      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
      <p className="text-charcoal/75 leading-relaxed">
        <span className="font-medium text-charcoal">
          Pandit Ji is reviewing this section.
        </span>{" "}
        {note ??
          "The guidance below reflects common traditions and is being verified by Pandit Yash Shastri before being treated as authoritative."}
      </p>
    </div>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
      {children}
    </h3>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-charcoal/80">
          <Check className="w-4 h-4 mt-1 flex-shrink-0 text-saffron" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="my-3 leading-relaxed">{children}</p>;
}

// -------------------------------------------------------------
// Module 1 — Find a trusted nearby Pandit Ji
// -------------------------------------------------------------
function Module1FindPandit() {
  return (
    <ModuleShell
      id="module-find-pandit"
      eyebrow="Module 1"
      title="How to find a trusted nearby Pandit Ji in South Delhi & Gurgaon"
      intro="Booking a pandit for home puja isn't just about availability — it's about finding someone whose vidhi you trust, who speaks your language, who arrives on time, and who explains rather than mystifies."
      cta={{
        label: "Book Pandit Ji on WhatsApp",
        href: getWhatsAppLink(
          WHATSAPP_PHONE,
          "Namaste Pandit Ji, I'd like to book a home puja. Please share availability."
        ),
        external: true,
      }}
    >
      <H3>What to look for in a Pandit Ji</H3>
      <Bullets
        items={[
          "Verifiable temple or community association (e.g., Shiv Shakti Mandir, Mehrauli for Pandit Yash Shastri)",
          "Language match — comfortable Hindi, English, and clear Sanskrit pronunciation",
          "Clear samagri arrangement upfront — who brings what",
          "Muhurat explained, not just stated as a number",
          "Transparent pricing with no fear-based add-ons",
          "Responsive on WhatsApp / phone within reasonable time",
          "On-time arrival on the puja day",
        ]}
      />

      <H3>Areas Pandit Yash Shastri serves from Mehrauli</H3>
      <Para>
        Pandit Ji travels across South Delhi — from{" "}
        <Link href="/pandit/mehrauli" className="text-saffron hover:underline">
          Mehrauli
        </Link>{" "}
        and{" "}
        <Link
          href="/pandit/chhatarpur"
          className="text-saffron hover:underline"
        >
          Chhatarpur
        </Link>{" "}
        to{" "}
        <Link
          href="/pandit/hauz-khas"
          className="text-saffron hover:underline"
        >
          Hauz Khas
        </Link>
        ,{" "}
        <Link
          href="/pandit/green-park"
          className="text-saffron hover:underline"
        >
          Green Park
        </Link>
        ,{" "}
        <Link
          href="/pandit/greater-kailash-gk1-gk2"
          className="text-saffron hover:underline"
        >
          Greater Kailash
        </Link>
        ,{" "}
        <Link
          href="/pandit/panchsheel-enclave"
          className="text-saffron hover:underline"
        >
          Panchsheel Enclave
        </Link>
        ,{" "}
        <Link
          href="/pandit/lajpat-nagar"
          className="text-saffron hover:underline"
        >
          Lajpat Nagar
        </Link>
        , and the{" "}
        <Link
          href="/pandit/aiims-delhi"
          className="text-saffron hover:underline"
        >
          AIIMS area
        </Link>{" "}
        — and to{" "}
        <Link href="/pandit/gurgaon" className="text-saffron hover:underline">
          Gurgaon
        </Link>{" "}
        for scheduled pujas.
      </Para>

      <H3>How booking typically works</H3>
      <Bullets
        items={[
          "Share your puja and preferred date on WhatsApp",
          "Pandit Ji confirms the muhurat or suggests one",
          "Samagri list is shared 5–10 days ahead",
          "Pandit Ji arrives on time with required items",
          "Puja is performed; vidhi explained along the way",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 2 — Mandir for home types and sizes
// -------------------------------------------------------------
function Module2MandirTypes() {
  return (
    <ModuleShell
      id="module-mandir-types"
      eyebrow="Module 2"
      title="Mandir for home: which type suits your space"
      intro="Choosing a home mandir is mostly a practical decision — the size of your space, where you'll keep it, and what fits your family's daily routine. Vastu rules matter, but so does whether you'll actually use the space."
      cta={{
        label: "Take the Mandir Planner Quiz",
        href: "#planner",
      }}
    >
      <H3>Wall-mounted vs floor cabinet vs dedicated puja room</H3>
      <Bullets
        items={[
          "Wall-mounted (small): suits compact apartments. Mount at chest level on the North-East or East wall.",
          "Floor cabinet: a standing unit with two-shutter doors. Best for a clear corner of a living/study room.",
          "Dedicated puja room: best for independent floors and larger homes. Ground floor preferred.",
          "Open shelf or alcove: a minimal setup — fine to start with, worth upgrading to a wall-mounted unit later.",
        ]}
      />

      <H3>Common mandir materials</H3>
      <Bullets
        items={[
          "Solid wood (sheesham, teak): traditional, warm, needs occasional polish",
          "Marble: durable, formal, heavy — consider load on apartment floors",
          "Corian or composite: lighter, modern, easy to clean",
          "Avoid: hollow ply, plastic finishes",
        ]}
      />

      <H3>Sizes by home type</H3>
      <Bullets
        items={[
          "1 BHK or studio: wall-mounted mandir, 18–24 inches wide",
          "2–3 BHK: floor cabinet, 30–48 inches wide",
          "Independent floor: dedicated puja space, minimum 6×6 feet",
          "Idol height: traditionally between 7 and 9 inches for a home mandir",
        ]}
      />

      <H3>Common mistakes to avoid</H3>
      <Bullets
        items={[
          "Choosing a mandir too tall or too small for the room",
          "Placing on a wall shared with a bathroom, kitchen, or staircase",
          "No clearance between the mandir and the wall (keep about an inch)",
          "Ornate carved mandirs that are hard to clean daily",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 3 — Mandir vastu (NEEDS REVIEW)
// -------------------------------------------------------------
function Module3MandirVastu() {
  return (
    <ModuleShell
      id="module-mandir-vastu"
      eyebrow="Module 3"
      title="Mandir location as per vastu: a calm, practical guide"
      intro="Vastu Shastra offers guidance, not rigid commandments. Many families want a vastu-correct mandir but have to work with the home they already have. Here's a practical reading of what's commonly suggested."
      pendingReview
      pendingReviewNote="Direction guidance reflects widely shared Vastu conventions; specifics for your home should be confirmed with Pandit Ji."
      cta={{
        label: "Get your direction checked — Ask Pandit Ji",
        href: "/ask-pandit-ji",
      }}
    >
      <H3>Why direction matters</H3>
      <Para>
        The orientation of a mandir affects how the worshipper sits during
        puja and which way the idols face. Vastu Shastra associates each
        direction with an element — east with light and clarity, north with
        prosperity, south with fire and instability. Whether one accepts this
        fully or treats it as cultural convention, it shapes the convention
        most Indian families follow.
      </Para>

      <H3>The Ishan Kona (North-East)</H3>
      <Para>
        The North-East corner is traditionally the most sacred zone in a home.
        A mandir here is considered ideal. If you have a corner where both the
        north and east walls meet, that&apos;s the Ishan Kona.
      </Para>

      <H3>Alternative directions</H3>
      <Bullets
        items={[
          "East: aligned with the rising sun; considered auspicious for daily worship",
          "North: associated with prosperity and abundance",
          "Both are acceptable substitutes for the Ishan Kona",
        ]}
      />

      <H3>What to avoid</H3>
      <Bullets
        items={[
          "South-facing mandirs (use a curtain or screen if unavoidable)",
          "South-East corner (fire element conflicts with puja's calm intent)",
          "South-West corner (heavy, grounded — not for the divine)",
          "Under a staircase or directly above/adjacent to a toilet",
          "Sharing a wall with a bathroom or kitchen",
        ]}
      />

      <H3>Apartment-specific guidance</H3>
      <Bullets
        items={[
          "Use the building's floor plan to identify the directional layout — most apartments rotate the cardinal directions differently from the corridor",
          "If the architectural corner doesn't match North-East, choose the available East or North wall",
          "Floor number doesn't change direction rules — they apply per unit",
        ]}
      />

      <H3>Bedroom mandirs</H3>
      <Para>
        Some families place small mandirs in their bedroom. Tradition suggests
        a curtain or screen separating the mandir from the bed area, with the
        curtain closed at night. A bedroom mandir is generally a compromise
        choice when no other space is available.
      </Para>
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 4 — Idol placement
// -------------------------------------------------------------
function Module4IdolPlacement() {
  return (
    <ModuleShell
      id="module-idol-placement"
      eyebrow="Module 4"
      title="Home temple gate, doors, and idol placement"
      intro="Beyond direction, the small details of how a mandir is set up — gate, doors, idol spacing, lighting — carry their own conventions."
      cta={{
        label: "Get a setup checklist",
        href: "#planner",
      }}
    >
      <H3>Why two-shutter doors</H3>
      <Para>
        Traditional mandirs use two-shutter (double-door) cabinets. The two
        doors open symmetrically, allowing the deity to be revealed in full.
        Single-door mandirs work, but the double-door form is preferred where
        space allows.
      </Para>

      <H3>Gate facing direction</H3>
      <Para>
        The cabinet doors (or the open face of a wall-mounted mandir) should
        ideally face East or North — the directions the worshipper looks
        toward during puja.
      </Para>

      <H3>Idol-to-idol spacing</H3>
      <Bullets
        items={[
          "Idols should not face each other directly within the same mandir",
          "Maintain a 2–3 inch gap between individual murtis",
          "The primary deity sits in the centre or slightly to the right",
          "Secondary deities sit to the left of the primary",
          "Keep idols 6 inches from the back wall where space allows",
        ]}
      />

      <H3>Lighting and bell placement</H3>
      <Bullets
        items={[
          "Use a diya (oil lamp) for puja itself; electric light is fine for ambient illumination",
          "The puja bell traditionally goes on the left side of the mandir entrance",
          "A small copper kalash with water can be placed in front of the idols",
          "A camphor stand for aarti should be on a heat-resistant surface",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 5 — Shivling at home (NEEDS REVIEW)
// -------------------------------------------------------------
function Module5Shivling() {
  return (
    <ModuleShell
      id="module-shivling"
      eyebrow="Module 5"
      title="Shivling for home mandir: general guidance and what to avoid"
      intro="Setting up a Shivling at home brings the daily discipline of abhishek into the household. Different family traditions hold nuanced views on this — what follows is general guidance only."
      pendingReview
      pendingReviewNote="Shivling-at-home practices vary by tradition. Please confirm with Pandit Ji before installing one."
      cta={{
        label: "Ask Pandit Ji before setting up a Shivling at home",
        href: "/ask-pandit-ji",
      }}
    >
      <H3>Sizes and materials commonly chosen</H3>
      <Bullets
        items={[
          "Size: a thumb-sized Shivling is most common for home mandirs; large Shivlings are typically reserved for temples",
          "Materials: parad (mercury alloy), narmadeshwar (river stone), sphatik (crystal), and brass are common choices",
          "Note: a Shiv idol or photograph is different from a Shivling and follows different conventions",
        ]}
      />

      <H3>Daily abhishekam basics</H3>
      <Bullets
        items={[
          "Water (jal) abhishek is the simplest daily practice",
          "On special days, families add milk, honey, ghee, curd, and bel patra (Rudrabhishek vidhi)",
          "After abhishek, the offered liquid (charanamrit) is collected and offered to a plant or kept aside — never poured into household drains",
          "Bel patra is offered with the smooth side facing up",
        ]}
      />

      <H3>Common precautions families ask about</H3>
      <Bullets
        items={[
          "Clean the mandir area before each daily puja",
          "Do not leave flowers from the previous day on the Shivling",
          "The Shivling should not be moved frequently after installation",
          "If daily abhishek isn't possible, many families keep a Shiv idol or photograph instead",
        ]}
      />

      <H3>Should every Shiv-worshipping home have a Shivling?</H3>
      <Para>
        This is a question families decide for themselves. Tradition does not
        require it — many homes with Shiv worship use a Shiv idol or
        photograph instead. The choice often depends on whether daily abhishek
        is realistic for the household.
      </Para>
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 6 — Shiv puja at home (NEEDS REVIEW)
// -------------------------------------------------------------
function Module6ShivPuja() {
  const whatsappBookRudrabhishek = getWhatsAppLink(
    WHATSAPP_PHONE,
    "Namaste Pandit Ji, I would like to book a Rudrabhishek at home. Please share availability and the samagri list."
  );
  return (
    <ModuleShell
      id="module-shiv-puja"
      eyebrow="Module 6"
      title="Shiv ji puja at home: when to do it yourself, when to call a pandit"
      intro="Daily Shiv puja at home can be simple — a clean diya, fresh water, a few bel patra, a moment of stillness. Bigger pujas like Rudrabhishek or Mahamrityunjay Jaap follow more elaborate vidhi and are traditionally performed by a pandit."
      pendingReview
      pendingReviewNote="Shiv puja vidhi varies by tradition. Daily-practice guidance below is general; book a pandit for full ceremonies."
      cta={{
        label: "Book Rudrabhishek with Pandit Ji",
        href: whatsappBookRudrabhishek,
        external: true,
      }}
    >
      <H3>Simple daily Shiv puja you can do at home</H3>
      <Bullets
        items={[
          "Clean the mandir surface and your hands",
          "Offer fresh water to the Shivling or Shiv idol",
          "Place bel patra — preferably 3 leaves joined at the stem",
          "Light a diya with sesame oil or ghee",
          "Recite one mantra of your tradition (Om Namah Shivaya is universal)",
          "Close with a moment of silence",
        ]}
      />

      <H3>Rudrabhishek — when it&apos;s traditionally performed</H3>
      <Para>
        Rudrabhishek is the abhishekam of the Shivling with water, milk,
        honey, ghee, curd, and bel patra, accompanied by the Rudra section of
        the Yajurveda. It is typically performed on Mondays, Pradosh days,
        Mahashivratri, and during Sawan month. The vidhi and chanting need
        training — most families book a pandit for it and participate by
        offering the substances.
      </Para>

      <H3>Mahamrityunjay Jaap context</H3>
      <Para>
        Mahamrityunjay is a healing-focused chant. The full traditional count
        is 1.25 lakh repetitions, typically distributed over multiple days or
        performed in a single havan by a pandit. A shorter 108-count version
        is appropriate as daily family practice.
      </Para>

      <H3>Monday, Pradosh, and Shivratri</H3>
      <Bullets
        items={[
          "Monday (Som-var): traditionally associated with Shiv ji — many families do a slightly longer Shiv puja",
          "Pradosh: the 13th lunar day after Amavasya/Purnima, twice a month — evening puja is considered powerful",
          "Mahashivratri: the great night of Shiv ji, observed annually",
          "Sawan (Shravan month): the monsoon month considered specially auspicious for Shiv puja",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 7 — Shiv & Shakti together (NEEDS REVIEW)
// -------------------------------------------------------------
function Module7ShivShakti() {
  return (
    <ModuleShell
      id="module-shiv-shakti"
      eyebrow="Module 7"
      title="Shiv and Shakti: how Indian families honour both together"
      intro="In Indian tradition, Shiv and Shakti are often worshipped as complementary forms — Shiv as stillness, Shakti as motion. Many home mandirs include both, either as Shiv–Parvati murtis side by side or as a Shivling alongside a Devi photo."
      pendingReview
      pendingReviewNote="This is doctrinal content. Pandit Ji is reviewing the framing for accuracy."
      cta={{
        label: "Connect with Pandit Ji at Shiv Shakti Mandir",
        href: getWhatsAppLink(
          WHATSAPP_PHONE,
          "Namaste Pandit Ji, I'd like to understand Shiv Shakti worship for our home mandir. Please guide me."
        ),
        external: true,
      }}
    >
      <H3>What &ldquo;Shiv Shakti&rdquo; means in everyday devotion</H3>
      <Bullets
        items={[
          "The phrase describes the joint worship of Shiv (the divine masculine) and Shakti (the divine feminine)",
          "In practice, families add a Devi photo or murti to a Shiv-focused mandir, or vice versa",
          "The two are complementary worship traditions for most families, not separate ones",
        ]}
      />

      <H3>How the two are worshipped together</H3>
      <Bullets
        items={[
          "Daily puja: water for the Shivling, a flower for Devi, a single diya for both",
          "Pradosh and Shivratri: Shiv-focused; Devi receives a brief offering",
          "Navratri: Devi-focused; Shivling receives a brief offering",
          "Maha Shivratri: many families do Devi puja in the morning and Shiv puja at night",
        ]}
      />

      <H3>Traditional pujas honouring both</H3>
      <Bullets
        items={[
          "Shiv–Parvati Vivah katha: read during Phalguna month",
          "Ardhanarishwar invocation: a short mantra honouring the joint form",
          "Many family pujas open with a brief invocation of both Shiv and Shakti as the default",
        ]}
      />

      <H3>Shiv Shakti Mandir, Mehrauli — a short, factual note</H3>
      <Para>
        Pandit Yash Shastri is associated with {SITE_CONFIG.temple.name},
        located in {SITE_CONFIG.temple.address}. The temple serves the local
        Mehrauli community; several pujas (especially Rudrabhishek and
        Shivratri rituals) are conducted there.
      </Para>
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 8 — Famous Shiv Mandirs in Delhi (carousel)
// -------------------------------------------------------------
interface MandirCardData {
  name: string;
  area: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DELHI_MANDIRS: MandirCardData[] = [
  {
    name: "Shiv Shakti Mandir, Mehrauli",
    area: "Mehrauli",
    description:
      "Pandit Yash Shastri's home temple, Ward No. 6, Gandhi Colony. Daily aarti and Shivratri/Pradosh pujas.",
    icon: Landmark,
  },
  {
    name: "Gauri Shankar Mandir",
    area: "Chandni Chowk",
    description:
      "Old Delhi Shiv mandir. The Shivling here is traditionally held to be many centuries old.",
    icon: Building2,
  },
  {
    name: "Chhatarpur Mandir complex",
    area: "Chhatarpur, South Delhi",
    description:
      "The Shri Adya Katyayani Shaktipeeth complex includes Shiv shrines within its broader temple cluster.",
    icon: Landmark,
  },
  {
    name: "Birla Mandir Shiv shrine",
    area: "Mandir Marg, Central Delhi",
    description:
      "The Lakshmi Narayan Temple complex includes a Shiv shrine open through the day.",
    icon: Building2,
  },
  {
    name: "Shri Shiv Mandir near Delhi Gate",
    area: "Old Delhi",
    description:
      "A well-known older Shiv mandir frequented by daily devotees throughout the day.",
    icon: Building2,
  },
  {
    name: "Yogmaya Temple, Mehrauli",
    area: "Mehrauli",
    description:
      "Primarily a Shaktipeeth, but part of the broader Mehrauli spiritual cluster that includes Shiv mandirs nearby.",
    icon: Landmark,
  },
  {
    name: "Aughar Nath Temple",
    area: "Vikas Marg, East Delhi",
    description:
      "An older Shiv mandir in the East Delhi area; regular morning and evening aarti.",
    icon: Building2,
  },
];

function FamousMandirsCarousel() {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8">
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 scroll-smooth"
        role="region"
        aria-label="Famous Shiv mandirs in Delhi — scroll horizontally"
      >
        {DELHI_MANDIRS.map((mandir) => {
          const Icon = mandir.icon;
          return (
            <article
              key={mandir.name}
              className="snap-start flex-shrink-0 w-72 sm:w-80 p-5 bg-white rounded-2xl border border-muted shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">
                {mandir.name}
              </h3>
              <p className="text-xs font-medium text-saffron mb-2 inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {mandir.area}
              </p>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                {mandir.description}
              </p>
            </article>
          );
        })}
      </div>
      <p className="px-4 sm:px-6 lg:px-8 text-xs text-charcoal/50 mt-2 inline-flex items-center gap-1">
        <ChevronRight className="w-3 h-3" />
        Scroll sideways to see more.
      </p>
    </div>
  );
}

function Module8FamousMandirs() {
  return (
    <ModuleShell
      id="module-famous-mandirs"
      eyebrow="Module 8"
      title="Famous Shiv Mandirs in Delhi worth visiting"
      intro="Delhi has a long Shiv-worship tradition. Some temples are centuries old, others are modern. Here's a curated list of well-known Shiv mandirs in Delhi — useful for darshan, festival visits, or arranging in-temple pujas."
      cta={{
        label: "Want darshan + puja arranged? Ask Pandit Ji",
        href: getWhatsAppLink(
          WHATSAPP_PHONE,
          "Namaste Pandit Ji, I'd like to arrange darshan and a small puja at one of the Delhi Shiv mandirs. Please guide me."
        ),
        external: true,
      }}
    >
      <FamousMandirsCarousel />

      <H3>Visit etiquette</H3>
      <Bullets
        items={[
          "Remove footwear before entering the sanctum",
          "Carry your own offering (bel patra, flowers) where appropriate",
          "Photography is restricted in many sanctums — ask before clicking",
          "Donation boxes are voluntary; no requirement",
          "Modest dress is appreciated, especially during major festivals",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 9 — Shiv Shakti Mandir, Mehrauli (NEEDS FACT-CHECK)
// -------------------------------------------------------------
function Module9ShivShaktiMandir() {
  return (
    <ModuleShell
      id="module-shiv-shakti-mandir"
      eyebrow="Module 9"
      title="Shiv Shakti Mandir, Mehrauli: where Pandit Yash Shastri is based"
      intro="Pandit Yash Shastri's primary association is with Shiv Shakti Mandir in Mehrauli, where he serves the local community alongside conducting home pujas across South Delhi and Gurgaon."
      pendingReview
      pendingReviewNote="Pandit Ji is verifying timings, festival schedule, and access details below."
      cta={{
        label: "Visit or schedule a home puja",
        href: getWhatsAppLink(
          WHATSAPP_PHONE,
          "Namaste Pandit Ji, I'd like to visit Shiv Shakti Mandir or schedule a home puja. Please share details."
        ),
        external: true,
      }}
    >
      <H3>About the temple</H3>
      <Bullets
        items={[
          `Location: ${SITE_CONFIG.temple.address}, ${SITE_CONFIG.temple.city} – ${SITE_CONFIG.temple.postalCode}`,
          "Serves the Mehrauli local community across multiple generations",
          "Daily aarti hours: morning 7:00–9:00 AM, evening 6:00–8:00 PM",
          "Major festivals observed: Mahashivratri, Sawan, Pradosh, Navratri",
        ]}
      />

      <H3>Why it matters to local families</H3>
      <Para>
        For families in Mehrauli, Chhatarpur, and Lado Sarai, the temple is
        part of daily and weekly devotional life. Many home-puja bookings come
        through familiar references built over multi-generational
        relationships with the temple.
      </Para>

      <H3>Pandit Ji&apos;s role at the temple</H3>
      <Bullets
        items={[
          "Conducting temple-side pujas (Rudrabhishek, Shivratri rituals, Pradosh evening puja)",
          "Walk-in consultations during morning aarti hours",
          "Coordinating home pujas across South Delhi and Gurgaon from the temple base",
        ]}
      />

      <H3>How to visit</H3>
      <Bullets
        items={[
          "Best time for a short meeting: morning aarti (7:00–9:00 AM)",
          "For longer in-person consultations, book ahead via WhatsApp",
          "Nearest metro: Qutub Minar station (Yellow Line)",
          "Parking: limited on temple street; consider auto-rickshaw or ride-share for festival days",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 10 — Birthday, mundan, wedding pujas
// -------------------------------------------------------------
function Module10OccasionPujas() {
  return (
    <ModuleShell
      id="module-occasion-pujas"
      eyebrow="Module 10"
      title="Birthday, mundan & wedding pujas: temple or at home?"
      intro="Life events bring specific pujas — and one common question families ask is whether to perform them at home or at a temple. The honest answer: most can be done either way."
      cta={{
        label: "Plan your occasion puja",
        href: "#planner",
      }}
    >
      <H3>Birthday puja</H3>
      <Bullets
        items={[
          "At home: Ayushya Havan (long-life havan) on the morning of the birthday",
          "At temple: short abhishek of the family deity — quicker, simpler",
          "Many families do both: temple visit in the morning, family puja at home in the evening",
          "Samagri: havan samagri, ghee, sesame seeds (til), barley (jau), prasad",
        ]}
      />

      <H3>Mundan sanskar</H3>
      <Bullets
        items={[
          "Traditionally performed at the family deity's temple",
          "Common Delhi temples for Mundan: Chhatarpur Mandir, Kalkaji Mandir, the family kuldevi temple",
          "Can also be done at home with the right preparation",
          "Traditional age window: between 7 months and 3 years",
          "Samagri: clean razor (pandit-provided), small towel for the child, coconut, sweet offering",
        ]}
      />

      <H3>Wedding pujas</H3>
      <Bullets
        items={[
          "Ganesh Puja: performed first — the day before or the morning of the wedding",
          "Navgraha Shanti: performed before the wedding to balance planetary influences from both charts",
          "Vivah Puja itself (mandap, fire, sapta-padi): typically at the venue, not at home",
          "Samagri lists are extensive; Pandit Ji shares the full list 7–10 days in advance",
        ]}
      />

      <H3>How to choose temple vs at-home</H3>
      <Bullets
        items={[
          "Family size: large families often prefer at-home for elder accessibility",
          "Time: temple visits are quicker; at-home is more elaborate",
          "Schedule: weekdays favour temple; weekends favour at-home",
          "Cost: similar for most pujas — venue differences are minor",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 11 — Common questions about Shiv ji (NEEDS REVIEW)
// -------------------------------------------------------------
function Module11CommonQuestions() {
  return (
    <ModuleShell
      id="module-common-questions"
      eyebrow="Module 11"
      title="Common questions about Shiv ji that families ask"
      intro="A few questions come up repeatedly when families set up Shiv worship at home. Here are the most common — answered factually, without embellishment."
      pendingReview
      pendingReviewNote="Answers below are general; Pandit Ji is verifying that nothing crosses into doctrinal overreach."
      cta={{
        label: "Ask Pandit Ji your question (free)",
        href: "/ask-pandit-ji",
      }}
    >
      <H3>What is Shiv ji&apos;s full name?</H3>
      <Para>
        Shiv ji is known by many names, each reflecting a different aspect:
      </Para>
      <Bullets
        items={[
          <span key="shiv">
            <strong>Shiv (शिव)</strong> — &ldquo;the auspicious one&rdquo;
          </span>,
          <span key="mahadev">
            <strong>Mahadev (महादेव)</strong> — &ldquo;the great god&rdquo;
          </span>,
          <span key="shankar">
            <strong>Shankar (शंकर)</strong> — &ldquo;the bestower of peace&rdquo;
          </span>,
          <span key="bholenath">
            <strong>Bholenath (भोलेनाथ)</strong> — &ldquo;the innocent
            lord&rdquo;, reflecting his quick compassion
          </span>,
          <span key="neelkanth">
            <strong>Neelkanth (नीलकंठ)</strong> — &ldquo;the blue-throated
            one&rdquo;, from the story of the cosmic poison
          </span>,
        ]}
      />

      <H3>Major Shiv tirth sthals</H3>
      <Bullets
        items={[
          "Kashi (Varanasi) — Kashi Vishwanath, one of the 12 Jyotirlingas",
          "Kedarnath — high Himalayan Jyotirlinga",
          "Rameswaram — southern Jyotirlinga",
          "Somnath, Mahakaleshwar, Omkareshwar, Bhimashankar, Trimbakeshwar, Vaidyanath, Nageshwar, Ghrishneshwar — the remaining Jyotirlingas",
        ]}
      />
      <Para>
        The 12 Jyotirlingas are traditionally considered the most sacred Shiv
        shrines in India.
      </Para>

      <H3>Common doubts about Shiv puja</H3>
      <Bullets
        items={[
          "Can women perform Shiv puja? Yes. Many family traditions specifically encourage women's Shiv worship, especially on Mondays.",
          "Can Shiv puja be done in the evening? Yes — especially Pradosh (evening twilight) puja.",
          "Is fasting required? Not required; some families choose to fast on Mondays and Shivratri as a personal practice.",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Module 12 — Home puja preparation checklist
// -------------------------------------------------------------
function Module12PujaChecklist() {
  return (
    <ModuleShell
      id="module-puja-checklist"
      eyebrow="Module 12"
      title="Your home puja preparation checklist"
      intro="The day of a home puja is much smoother when preparation starts a day or two in advance. Here's a practical checklist that works for most pujas."
      cta={{
        label: "Talk to Pandit Ji about your puja",
        href: getWhatsAppLink(
          WHATSAPP_PHONE,
          "Namaste Pandit Ji, I'm planning a home puja and would like to discuss preparation."
        ),
        external: true,
      }}
    >
      <H3>Before the day</H3>
      <Bullets
        items={[
          "Confirm puja timing with Pandit Ji",
          "Ask which samagri Pandit Ji brings and which you arrange",
          "Discuss approximate duration so the family can plan",
          "Identify the puja spot — usually the mandir; havan needs a more open area",
          "For larger pujas, brief other family members on their role",
        ]}
      />

      <H3>Samagri basics (most pujas include)</H3>
      <Bullets
        items={[
          "Clean cloth for the mandir surface (red or yellow)",
          "Copper or brass kalash with fresh water",
          "Diya with ghee or sesame oil and cotton wicks",
          "Akshat (rice with turmeric)",
          "Roli, sindoor, kumkum",
          "Fresh flowers (genda or rose)",
          "Fruits and prasad",
          "Incense sticks and camphor for aarti",
          "Asan (seat for the priest)",
        ]}
      />

      <H3>Setting up the mandir</H3>
      <Bullets
        items={[
          "Clean the mandir area thoroughly the evening before",
          "Arrange samagri in trays so it's reachable during the puja",
          "Keep a glass of water nearby for the priest",
          "For havan, identify a ventilated spot for the havan kund",
        ]}
      />

      <H3>What you do, what the pandit does</H3>
      <Bullets
        items={[
          "Pandit Ji performs the vidhi — mantras, mudras, the offering sequence",
          "Family members offer samagri when prompted and join in the closing prayers",
          "Children can light the diya and offer flowers — it keeps them connected",
        ]}
      />

      <H3>After the puja</H3>
      <Bullets
        items={[
          "Distribute prasad to all present",
          "Send aarti and prasad to neighbours / extended family if customary in your tradition",
          "The asan and used items are cleaned and put away; the mandir is left arranged",
          "For havan pujas, allow the kund to cool fully before clearing",
        ]}
      />
    </ModuleShell>
  );
}

// -------------------------------------------------------------
// Exports
// -------------------------------------------------------------
export function PlannerModules() {
  return (
    <div className="bg-white">
      <Module1FindPandit />
      <Module2MandirTypes />
      <Module3MandirVastu />
      <Module4IdolPlacement />
      <Module5Shivling />
      <Module6ShivPuja />
      <Module7ShivShakti />
      <Module8FamousMandirs />
      <Module9ShivShaktiMandir />
      <Module10OccasionPujas />
      <Module11CommonQuestions />
      <Module12PujaChecklist />
    </div>
  );
}
