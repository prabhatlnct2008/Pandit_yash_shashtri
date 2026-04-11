import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Star, ArrowRight, Upload, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Complete Kundali Guide | Understanding Vedic Astrology",
  description:
    "Comprehensive guide to understanding kundali, horoscope, and Vedic astrology. Learn about houses, grahas, nakshatras, dashas, and how to read your birth chart accurately.",
  keywords: [
    "kundali guide",
    "what is kundali",
    "vedic astrology explained",
    "birth chart reading",
    "horoscope analysis",
    "jyotish guide",
    "kundli matching",
    "astrology for beginners",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/kundali-guide`,
  },
  openGraph: {
    title: "Complete Kundali Guide | Understanding Vedic Astrology",
    description:
      "Comprehensive guide to understanding kundali, horoscope, and Vedic astrology. Learn about houses, grahas, nakshatras, and dashas.",
    url: `${SITE_CONFIG.url}/kundali-guide`,
    type: "article",
  },
};

export default function KundaliGuidePage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Complete Kundali Guide | Understanding Vedic Astrology"
        description="Comprehensive guide to understanding kundali, horoscope, and Vedic astrology. Learn about houses, grahas, nakshatras, dashas, and how to read your birth chart."
        url={`${SITE_CONFIG.url}/kundali-guide`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Kundali Guide", url: `${SITE_CONFIG.url}/kundali-guide` },
        ]}
      />

      <article className="bg-white">
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-ivory to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-saffron mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">Complete Guide</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
                Kundali and Astrology,{" "}
                <span className="text-saffron">Clearly Explained</span>
              </h1>
              <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                A practical long-form guide for beginners to understand kundali,
                Vedic astrology, and how to approach birth chart reading responsibly.
              </p>
            </div>

            {/* CTA Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {/* English CTA */}
              <Card variant="elevated" padding="lg" className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Book Your Kundali Reading
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Get personalized insights from Pandit Yash Shastri
                    </p>
                  </div>
                  <LinkButton
                    href="/kundali-upload"
                    variant="secondary"
                    size="md"
                    className="w-full"
                  >
                    <Sparkles className="w-4 h-4" />
                    Upload Kundali
                  </LinkButton>
                </div>
              </Card>

              {/* Hindi CTA */}
              <Card variant="elevated" padding="lg" className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      अपनी कुंडली रीडिंग बुक करें
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      पंडित यश शास्त्री से व्यक्तिगत मार्गदर्शन प्राप्त करें
                    </p>
                  </div>
                  <LinkButton
                    href="/kundali-upload"
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    <Upload className="w-4 h-4" />
                    कुंडली अपलोड करें
                  </LinkButton>
                </div>
              </Card>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              Introduction
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              A lot of people in India meet astrology through a practical doorway, not
              a philosophical one. A family asks for a kundali before marriage. Someone
              is told they are Manglik. Another person hears that "Saturn is strong" or
              that a difficult dasha is running. The vocabulary arrives before the
              understanding.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              This guide is meant to fix that. It explains what a kundali is, how Indian
              astrology commonly reads it, why it remains culturally important, and why
              it should not be treated as scientifically proven destiny. Astrology, in
              reference works, is generally described as a divinatory system that
              interprets the positions of celestial bodies in relation to human affairs;
              that description fits both global astrology broadly and Indian astrology in
              particular, even though the details differ by tradition.
            </p>
          </section>

          {/* Section 1: Definitions */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
              1. What kundali, horoscope, and astrology each mean
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-saffron pl-6">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Kundali
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  A kundali is a birth chart: a symbolic map of the sky at the date,
                  time, and place of someone's birth. In many Indian contexts, janma
                  kundali means the natal chart specifically, the chart cast for birth.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Horoscope
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  A horoscope can mean different things in different settings. In serious
                  astrology, it can mean the full chart. In everyday speech, it often
                  means a short sun-sign prediction like "Virgo today: avoid conflict."
                  That popular use is much narrower than a full kundali.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Astrology
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Astrology is the larger belief system or interpretive framework. A
                  kundali is one tool within astrology, not the whole field. Britannica
                  describes astrology as a divinatory practice that seeks meaning in the
                  positions of the Sun, Moon, planets, and stars.
                </p>
              </div>
            </div>

            <Card variant="bordered" className="mt-8">
              <CardHeader>
                <CardTitle>The simplest distinction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="text-saffron font-bold">•</span>
                    <span>
                      <strong>Astrology</strong> = the overall system
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-saffron font-bold">•</span>
                    <span>
                      <strong>Kundali</strong> = your individual birth chart inside that
                      system
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-saffron font-bold">•</span>
                    <span>
                      <strong>Horoscope</strong> = either the chart itself or, in popular
                      use, a simplified prediction
                    </span>
                  </li>
                </ul>
                <p className="text-charcoal/70 mt-4 text-sm italic">
                  A useful beginner correction: saying "I am a Scorpio" is not the same
                  thing as understanding a kundali. A kundali includes multiple factors at
                  once: ascendant, Moon, planetary placements, houses, nakshatras, dashas,
                  and more.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Cultural Role */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              2. The cultural role of kundali in India
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Indian astrology is often referred to as Jyotisha, a traditional system
              historically linked with Hindu astronomical and calendrical traditions.
              Britannica notes the long-standing role of nakshatras and the Hindu calendar
              in this broader framework.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              In modern India, kundali is not just an abstract belief system. It appears
              in everyday social life. Common uses include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Marriage matching",
                "Choosing auspicious timings (muhurta)",
                "Naming advice",
                "Career and business consultations",
                "Periods of uncertainty or stress",
                "Health and wellness guidance",
              ].map((use, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-ivory rounded-lg"
                >
                  <Star className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-charcoal/80">{use}</span>
                </div>
              ))}
            </div>

            <Card variant="bordered">
              <CardContent className="text-charcoal/80 leading-relaxed">
                <p>
                  This cultural role matters because many people approach kundali less as
                  "science class" and more as a mixture of tradition, family process,
                  psychological reflection, and ritualized decision-making. Even people
                  who are not deeply religious may still participate in kundali matching
                  because it functions socially: it reassures elders, gives a shared
                  language for compatibility, or provides a way to discuss concerns
                  indirectly.
                </p>
                <p className="mt-4 font-medium text-saffron">
                  That does not prove astrology true. It shows why it persists.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Required Data */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              3. What data is needed to create a kundali
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              A kundali is usually calculated from three inputs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card variant="elevated" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-saffron">1</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Date of Birth
                  </h3>
                  <p className="text-sm text-charcoal/70">
                    Determines planetary positions
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Exact Time of Birth
                  </h3>
                  <p className="text-sm text-charcoal/70">
                    Critical for lagna calculation
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-charcoal">3</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Place of Birth
                  </h3>
                  <p className="text-sm text-charcoal/70">
                    Affects horizon and houses
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card variant="bordered" className="bg-amber-50 border-amber-300">
              <CardHeader>
                <CardTitle className="text-amber-900">
                  Why birth time matters so much
                </CardTitle>
              </CardHeader>
              <CardContent className="text-charcoal/80">
                <p className="mb-4">
                  The lagna is the sign rising on the eastern horizon at birth. It anchors
                  the houses of the chart and becomes the starting point for much
                  interpretation. If the birth time is wrong, the first house may shift,
                  and with it the whole house structure.
                </p>
                <p className="font-medium text-amber-900">
                  What if the birth time is uncertain? Then the chart becomes less reliable
                  for fine-grained interpretation.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Anatomy of Kundali */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              4. The anatomy of a kundali: houses, signs, grahas, and lagna
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-8">
              This is the core of the system.
            </p>

            <div className="space-y-8">
              {/* 12 Houses */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-charcoal mb-4">
                  The 12 houses (bhavas)
                </h3>
                <p className="text-charcoal/80 mb-6">
                  A kundali divides life into 12 sectors called houses or bhavas. Each
                  represents a different area of life:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { num: "1", area: "Self, body, identity" },
                    { num: "2", area: "Family, speech, money" },
                    { num: "3", area: "Siblings, courage, communication" },
                    { num: "4", area: "Home, mother, emotional foundation" },
                    { num: "5", area: "Children, creativity, learning" },
                    { num: "6", area: "Health, service, debts, conflict" },
                    { num: "7", area: "Marriage, partnerships" },
                    { num: "8", area: "Longevity, crisis, transformation" },
                    { num: "9", area: "Dharma, belief, teachers, fortune" },
                    { num: "10", area: "Career, status, action" },
                    { num: "11", area: "Gains, networks, aspirations" },
                    { num: "12", area: "Loss, retreat, liberation" },
                  ].map((house) => (
                    <div
                      key={house.num}
                      className="flex items-start gap-3 p-3 bg-ivory rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-saffron text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {house.num}
                      </div>
                      <span className="text-sm text-charcoal/80">{house.area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9 Grahas */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-charcoal mb-4">
                  The 9 grahas
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Indian astrology commonly works with navagraha, the nine grahas:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Sun (Surya)",
                    "Moon (Chandra)",
                    "Mars (Mangala)",
                    "Mercury (Budha)",
                    "Jupiter (Guru)",
                    "Venus (Shukra)",
                    "Saturn (Shani)",
                    "Rahu",
                    "Ketu",
                  ].map((graha, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gradient-to-br from-ivory to-white rounded-lg border border-gold/20 text-center"
                    >
                      <span className="font-medium text-charcoal">{graha}</span>
                    </div>
                  ))}
                </div>
                <Card variant="bordered" className="mt-6">
                  <CardContent className="text-sm text-charcoal/70 italic">
                    A useful beginner note: graha is often translated as "planet," but it
                    functions more like an astrological actor or force. Rahu and Ketu are
                    not physical planets in astronomy; they are the lunar nodes, but they
                    are treated as important grahas in astrology.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 5-12: Condensed for length */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              5. Nakshatras, dignity, and chart nuance
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-4">
              A nakshatra is a lunar mansion. In Indian astrology, the ecliptic is divided
              into 27 nakshatras, each spanning 13°20′. They add a finer layer beyond the
              sign. Two people may both have the Moon in Taurus, but if one Moon falls in
              Rohini and the other in Krittika, astrologers may describe them differently.
            </p>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Planetary dignity</CardTitle>
              </CardHeader>
              <CardContent className="text-charcoal/80">
                <p className="mb-4">
                  Astrologers judge whether a planet is strong, weak, comfortable, or
                  troubled in a sign. Traditional language includes:
                </p>
                <ul className="space-y-2">
                  {["Own sign", "Exalted", "Debilitated", "Friendly or inimical sign"].map(
                    (term, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-gold">•</span>
                        <span>{term}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              6. How astrologers usually begin reading a chart
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              A good astrologer usually does not start with "You are doomed" or "You will
              be rich." They often begin with structure.
            </p>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>A common reading sequence</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {[
                    {
                      title: "Lagna and lagna lord",
                      desc: "Backbone of the chart: vitality, temperament, orientation",
                    },
                    {
                      title: "Moon",
                      desc: "Mind, emotional response, dasha framework",
                    },
                    {
                      title: "Sun",
                      desc: "Identity, authority, confidence, vitality",
                    },
                    {
                      title: "Key houses",
                      desc: "Especially 1st, 4th, 7th, 10th",
                    },
                    {
                      title: "House lords",
                      desc: "Where do rulers of important houses go?",
                    },
                    {
                      title: "Planetary strength",
                      desc: "Supported, isolated, combust, retrograde, aspected?",
                    },
                    {
                      title: "Dashas and transits",
                      desc: "Timing activation of chart promises",
                    },
                  ].map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-saffron/20 flex items-center justify-center text-saffron font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">{step.title}</h4>
                        <p className="text-sm text-charcoal/70">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Criticism & Responsible Use */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              12. Criticism, skepticism, and responsible use
            </h2>

            <Card variant="bordered" className="bg-blue-50 border-blue-300 mb-6">
              <CardContent className="text-charcoal/80">
                <p className="mb-4">
                  <strong className="text-blue-900">A balanced guide has to be direct here.</strong>
                </p>
                <p>
                  Mainstream science does not regard astrology as scientifically
                  established. Controlled tests have generally failed to show that
                  astrologers can reliably do better than chance on key claims.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  Why skepticism persists
                </h3>
                <div className="space-y-2">
                  {[
                    "Lack of a known mechanism",
                    "Weak predictive performance under controlled conditions",
                    "Vague or flexible interpretation",
                    "Selective memory and confirmation bias",
                    "The Barnum effect (general statements feeling personally accurate)",
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-ivory rounded">
                      <span className="text-saffron">•</span>
                      <span className="text-charcoal/80">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  But why do people still find astrology meaningful?
                </h3>
                <p className="text-charcoal/80 mb-4">
                  Because meaning is not the same as proof. People may use astrology as:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "A reflective language",
                    "A cultural inheritance",
                    "A ritual tool during uncertainty",
                    "A way to discuss fears and hopes",
                  ].map((use, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-ivory to-white rounded-lg"
                    >
                      <Star className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-charcoal/80">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card variant="elevated" className="bg-gradient-to-br from-saffron/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-saffron">Responsible use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 mb-4">
                    A responsible approach to kundali would mean:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Do not treat it as exact destiny",
                      "Do not use it to justify cruelty, panic, or fatalism",
                      "Do not replace medicine, law, finance, or therapy with chart reading",
                      "Do not terrify people with dosha language",
                      "Use it, if at all, as a symbolic framework for reflection and conversation",
                    ].map((guideline, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent text-xl">✓</span>
                        <span className="text-charcoal/80">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              13. Common mistakes beginners make
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Reducing everything to one placement",
                  desc: '"Saturn in 7th means no marriage." That is not how serious chart reading works.',
                },
                {
                  title: "Confusing signs with houses",
                  desc: "A sign is not a house. Aries is a sign. The 1st house is a house.",
                },
                {
                  title: "Panic over doshas",
                  desc: "Online content often turns conditional indication into lifelong curse.",
                },
                {
                  title: "Ignoring timing",
                  desc: "Beginners read static placements and forget dashas and transits.",
                },
                {
                  title: "Forgetting normal life causes",
                  desc: "Not every breakup, career delay, or illness needs astrological explanation.",
                },
              ].map((mistake, index) => (
                <Card key={index} variant="bordered" className="bg-red-50/50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-base text-red-900">
                      Mistake {index + 1}: {mistake.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-charcoal/70">{mistake.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              Conclusion
            </h2>
            <Card variant="elevated" className="bg-gradient-to-br from-ivory to-white">
              <CardContent className="text-charcoal/80 leading-relaxed space-y-4">
                <p>
                  A kundali is best understood as a structured symbolic map inside a
                  long-lived Indian astrological tradition. It is not the same thing as a
                  newspaper horoscope, and it is not a scientifically proven machine for
                  exact prediction.
                </p>
                <p>
                  It combines houses, signs, grahas, nakshatras, timing systems, and
                  interpretive rules into a framework that many people use for
                  self-understanding, family decisions, and ritualized guidance.
                </p>
                <p className="font-medium text-saffron">
                  The fairest way to approach astrology is neither blind surrender nor lazy
                  ridicule. Learn its vocabulary. Understand its cultural place. Notice its
                  internal logic. But keep your judgment.
                </p>
                <p>
                  A responsible beginner treats kundali as a traditional interpretive
                  system, not as a substitute for evidence, ethics, medicine, or common
                  sense.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Bottom CTA Section */}
          <section className="mt-16 pt-16 border-t border-muted">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
                Ready to Get Your Kundali Reading?
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Book a personalized kundali reading session with Pandit Yash Shastri.
                Upload your kundali or birth details to get started.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* English CTA */}
              <Card variant="elevated" padding="lg" className="text-center hover:shadow-2xl transition-shadow">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">
                      Book Your Kundali Reading
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Get expert guidance from an experienced Vedic astrologer
                    </p>
                  </div>
                  <LinkButton
                    href="/kundali-upload"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    <Sparkles className="w-5 h-5" />
                    Upload Kundali Now
                  </LinkButton>
                </div>
              </Card>

              {/* Hindi CTA */}
              <Card variant="elevated" padding="lg" className="text-center hover:shadow-2xl transition-shadow">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="w-8 h-8 text-accent fill-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">
                      अपनी कुंडली रीडिंग बुक करें
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      अनुभवी वैदिक ज्योतिषी से विशेषज्ञ मार्गदर्शन प्राप्त करें
                    </p>
                  </div>
                  <LinkButton
                    href="/kundali-upload"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <Upload className="w-5 h-5" />
                    अभी कुंडली अपलोड करें
                  </LinkButton>
                </div>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/astrology-consultation"
                className="inline-flex items-center gap-2 text-saffron font-medium hover:underline"
              >
                Or explore our astrology consultation packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
