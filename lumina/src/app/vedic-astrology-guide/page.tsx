import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Star, ArrowRight, Upload, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mastering the 12 Houses and 9 Planets in Vedic Astrology: A Practical Guide",
  description:
    "Comprehensive beginner's guide to understanding the 12 houses (bhavas) and 9 planets (grahas) in Vedic astrology. Learn how planetary energies shape personality traits and life experiences.",
  keywords: [
    "vedic astrology guide",
    "12 houses in vedic astrology",
    "9 planets grahas",
    "bhavas explained",
    "vedic astrology for beginners",
    "natal chart interpretation",
    "planet house interactions",
    "jyotish basics",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/vedic-astrology-guide`,
  },
  openGraph: {
    title: "Mastering the 12 Houses and 9 Planets in Vedic Astrology",
    description:
      "Learn the foundations of Vedic astrology: understand the 12 houses, 9 planets, and how they interact to shape your life path and personality.",
    url: `${SITE_CONFIG.url}/vedic-astrology-guide`,
    type: "article",
  },
};

export default function VedicAstrologyGuidePage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        title="Mastering the 12 Houses and 9 Planets in Vedic Astrology: A Practical Guide for Beginners"
        description="Comprehensive guide to understanding the 12 houses (bhavas) and 9 planets (grahas) in Vedic astrology, with practical examples and cultural context."
        url={`${SITE_CONFIG.url}/vedic-astrology-guide`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Vedic Astrology Guide", url: `${SITE_CONFIG.url}/vedic-astrology-guide` },
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
                Mastering the 12 Houses and 9 Planets in{" "}
                <span className="text-saffron">Vedic Astrology</span>
              </h1>
              <p className="text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                A practical guide for beginners to understand the foundations of Vedic astrology,
                including houses (bhavas), planets (grahas), and their interactions in natal charts.
              </p>
            </div>

            {/* CTA Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <Card variant="elevated" padding="lg" className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Get Your Birth Chart Reading
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Understand your unique planetary placements
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

              <Card variant="elevated" padding="lg" className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      ज्योतिष परामर्श लें
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      पंडित यश शास्त्री से सीधे बात करें
                    </p>
                  </div>
                  <LinkButton
                    href="/astrology-consultation"
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    <Star className="w-4 h-4" />
                    Book Consultation
                  </LinkButton>
                </div>
              </Card>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Executive Summary */}
          <section className="mb-16">
            <Card variant="bordered" className="bg-accent/5">
              <CardContent className="pt-6">
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
                  Executive Summary
                </h2>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>The 12 houses represent distinct life areas, each with unique symbolic meanings essential for interpreting Vedic natal charts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>The 9 planets govern varying energies that shape personality traits and life experiences within these houses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>Planet-house interactions are central to understanding how astrology reveals life dynamics and personal tendencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>Practical, culturally authentic examples and metaphors facilitate comprehension for astrology beginners.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>Classical Vedic texts and authoritative teachings provide the foundation for trustworthy interpretation and guidance.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Table of Contents */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              Table of Contents
            </h2>
            <Card variant="bordered">
              <CardContent className="pt-6">
                <nav className="space-y-2">
                  <Link href="#foundations" className="flex items-center gap-2 text-accent hover:text-saffron transition-colors py-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>Foundations of Vedic Astrology: Houses, Planets, and Their Roles</span>
                  </Link>
                  <Link href="#12-houses-detailed" className="flex items-center gap-2 text-accent hover:text-saffron transition-colors py-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>The 12 Houses in Detail: Symbolism and Life Domains</span>
                  </Link>
                  <Link href="#9-planets" className="flex items-center gap-2 text-accent hover:text-saffron transition-colors py-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>The 9 Planets (Grahas): Energies and Influences on Personality and Life</span>
                  </Link>
                  <Link href="#planet-house-interactions" className="flex items-center gap-2 text-accent hover:text-saffron transition-colors py-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>How Planets and Houses Interact: Basics of Natal Chart Interpretation</span>
                  </Link>
                  <Link href="#faqs" className="flex items-center gap-2 text-accent hover:text-saffron transition-colors py-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>FAQs and Practical Tips for Beginners</span>
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </section>

          {/* Section 1: Foundations */}
          <section id="foundations" className="mb-16 scroll-mt-20">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6 border-t-2 border-charcoal/10 pt-6">
              Foundations of Vedic Astrology: Houses, Planets, and Their Roles
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-charcoal/80 leading-relaxed mb-4">
                In Vedic Astrology, understanding the basic elements is crucial for interpreting a natal chart effectively.
                The system is built around 12 houses, known as <strong>bhavas</strong>, and 9 planets, referred to as <strong>grahas</strong>,
                each playing a significant role in shaping an individual's life. The term <em>bhava</em> comes from Sanskrit,
                meaning 'house' or 'life condition', and <em>graha</em> translates to 'that which seizes' or 'planet',
                embodying their influence over earthly existence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>The 12 Houses (Bhavas)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">1.</span>
                      <div><strong>Self and Personality:</strong> Identity, appearance, personal strengths</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">2.</span>
                      <div><strong>Wealth and Family:</strong> Financial matters, familial ties, security</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">3.</span>
                      <div><strong>Communication and Siblings:</strong> Skills, relationships, interaction</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">4.</span>
                      <div><strong>Home and Inner Happiness:</strong> Emotional well-being, stability</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">5.</span>
                      <div><strong>Creativity and Intelligence:</strong> Self-expression, pursuits</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">6.</span>
                      <div><strong>Health and Enemies:</strong> Health issues, conflicts, challenges</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">7.</span>
                      <div><strong>Partnerships and Marriage:</strong> Significant relationships</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">8.</span>
                      <div><strong>Transformation and Occult:</strong> Hidden matters, shared resources</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">9.</span>
                      <div><strong>Wisdom and Fortune:</strong> Higher learning, philosophy, spiritual wealth</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">10.</span>
                      <div><strong>Career and Reputation:</strong> Professional life, societal image</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">11.</span>
                      <div><strong>Gains and Social Networks:</strong> Friendships, aspirations</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-saffron min-w-[24px]">12.</span>
                      <div><strong>Losses and Liberation:</strong> Endings, spiritual growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>The 9 Planets (Grahas)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">☉</span>
                      <div><strong>Sun:</strong> Soul, vitality, authority, self-expression</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">☽</span>
                      <div><strong>Moon:</strong> Mind, emotions, nurturing qualities</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">♂</span>
                      <div><strong>Mars:</strong> Energy, courage, aggression, determination</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">☿</span>
                      <div><strong>Mercury:</strong> Communication, intellect, analytical thinking</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">♃</span>
                      <div><strong>Jupiter:</strong> Wisdom, expansion, growth, spirituality</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">♀</span>
                      <div><strong>Venus:</strong> Love, beauty, relationships, aesthetics</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">♄</span>
                      <div><strong>Saturn:</strong> Discipline, delays, patience, resilience</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">☊</span>
                      <div><strong>Rahu:</strong> Desires, illusions, unorthodox paths</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xl min-w-[24px]">☋</span>
                      <div><strong>Ketu:</strong> Spirituality, detachment, liberation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card variant="bordered" className="bg-ivory/30">
              <CardContent className="pt-6">
                <p className="text-charcoal/80 leading-relaxed">
                  These houses and planets collectively inform the structure and interpretations of a natal chart,
                  providing insights into an individual's life path and personality. Understanding their roles is
                  foundational for anyone delving into Vedic astrology, allowing for more informed interpretations
                  and personal insights.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: The 12 Houses in Detail */}
          <section id="12-houses-detailed" className="mb-16 scroll-mt-20">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6 border-t-2 border-charcoal/10 pt-6">
              The 12 Houses in Detail: Symbolism and Life Domains
            </h2>

            <p className="text-charcoal/80 leading-relaxed mb-8">
              The 12 houses in Vedic astrology symbolize distinct areas of life, offering crucial insights into
              our experiences and behaviors. By deeply understanding these houses, individuals can enhance personal
              awareness and guide informed decision-making.
            </p>

            <div className="space-y-6 mb-8">
              {/* House 1 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">1</span>
                    First House: Self and Personality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    The first house reflects one's self-image, physical appearance, and overall demeanor. It manifests
                    the concept of 'Atman,' or the true self, echoing contemplations found in the Upanishads. A strong
                    first house may indicate confidence and vitality, while a weak placement could suggest challenges
                    in self-assertion. For example, a person with a prominent Mars placement here may exhibit a bold
                    personality, akin to the warrior kings of ancient texts.
                  </p>
                </CardContent>
              </Card>

              {/* House 2 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">2</span>
                    Second House: Wealth and Family
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    This house is central to material possessions, financial stability, and family values. One may
                    find references in the Dharma Shastras, where managing resources aligns with ethical living (dharma).
                    Prosperity isn't merely about wealth; it's relational, emphasizing family heritage. For instance,
                    a person with a strong Jupiter influence in the second house may inherit not just wealth, but also
                    moral wisdom from their ancestors, enhancing their familial ties.
                  </p>
                </CardContent>
              </Card>

              {/* House 3 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">3</span>
                    Third House: Communication and Siblings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    The third house emphasizes communication styles, relationships with siblings, and intellectual pursuits.
                    The Mahabharata teaches strategic communication; for instance, Krishna's guidance to Arjuna showcases
                    the essence of effective dialogue. An individual with a strong Mercury influence here may excel in
                    persuasive skills, crucial for navigating complex societal landscapes.
                  </p>
                </CardContent>
              </Card>

              {/* House 4 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">4</span>
                    Fourth House: Home and Inner Happiness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    This house signifies emotional security and domestic life, often reflecting one's roots and
                    psychological comfort. Traditional texts highlight family as a source of strength. A nurturing
                    fourth house supports stability, as depicted in stories of ancestors ('Pitra') who protect and guide.
                    For example, a strong Moon placement may correlate with a peaceful home environment where emotional
                    bonds flourish.
                  </p>
                </CardContent>
              </Card>

              {/* House 5 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">5</span>
                    Fifth House: Creativity and Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    The fifth house is a reservoir of creativity, education, and the joy associated with children.
                    Inspired by stories of deities, such as Saraswati, the goddess of learning, it emphasizes
                    self-expression and the pursuit of knowledge. Those with a robust Venus influence may find success
                    in artistic endeavors or scholarly arts, resonating with the teachings of ancient sages on the
                    importance of nurturing creativity.
                  </p>
                </CardContent>
              </Card>

              {/* House 6 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">6</span>
                    Sixth House: Health and Enemies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    This house concerns health, daily routines, and interpersonal challenges, including enemies.
                    Vedic teachings in Ayurveda stress the prevention of ailments through daily habits. A fortified
                    sixth house can indicate resilience against adversities; for example, someone with a strong Saturn
                    placement may exhibit disciplined health routines that fortify their well-being against life's trials.
                  </p>
                </CardContent>
              </Card>

              {/* House 7 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">7</span>
                    Seventh House: Partnerships and Marriage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Representing relationships, the seventh house underscores the importance of collaboration and
                    commitment. The principles of 'Samskaras' or sacred rites explain a marriage's sanctity, often
                    viewed through various Puranas. A strong Venus influence here may signify harmonious partnerships,
                    highlighting the emotional dependability necessary for marriage.
                  </p>
                </CardContent>
              </Card>

              {/* House 8 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">8</span>
                    Eighth House: Transformation and Occult
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    This house addresses transformation, sexuality, and the pursuit of hidden knowledge. Texts like
                    the Vedas introduce the idea of rebirth and cycles of life. Individuals with strong Scorpio influences
                    may experience profound transformations, deep emotional connections, and encounters with the occult
                    as circumstances demand. The eighth house is often seen as a catalyst for growth and change.
                  </p>
                </CardContent>
              </Card>

              {/* House 9 */}
              <Card variant="bordered" className="border-2 border-saffron/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">9</span>
                    Ninth House: Wisdom and Fortune
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed mb-3">
                    Revered as one of the most auspicious houses, the ninth house embodies higher wisdom, spirituality,
                    and karma. Reflected in the Bhagavad Gita, it underscores the importance of one's spiritual path
                    and higher ideals. For instance, a well-placed Jupiter not only brings good fortune but also deepens
                    moral and spiritual understanding, inspiring faith in the journey towards self-realization.
                  </p>
                  <div className="bg-saffron/10 p-3 rounded-lg">
                    <p className="text-sm text-charcoal/80 font-medium">
                      <Star className="w-4 h-4 inline text-saffron" /> Its status as a trine house emphasizes its
                      positive influence in many life aspects, making it a significant focal point in an individual's chart.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* House 10 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">10</span>
                    Tenth House: Career and Reputation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Focusing on career, public image, and achievements, the tenth house relates closely to the
                    Bhagavad Gita's teachings on duty (dharma). A strong Sun placement here may denote a commanding
                    presence in the public eye, while a challenging placement may indicate struggles with work-life
                    balance, reflecting the cultural emphasis on societal roles.
                  </p>
                </CardContent>
              </Card>

              {/* House 11 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">11</span>
                    Eleventh House: Gains and Social Networks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    This house explores aspirations and the community, shedding light on friendships and profits.
                    Indian culture's emphasis on collective well-being reflects the essence of the eleventh house.
                    A prosperous Mercury can indicate a strong network of friends and valuable collaborations,
                    underscoring the importance of social connections.
                  </p>
                </CardContent>
              </Card>

              {/* House 12 */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-saffron text-white text-sm font-bold">12</span>
                    Twelfth House: Losses and Liberation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Associated with losses, spirituality, and liberation, the twelfth house invites deep reflection
                    on past experiences and the pursuit of moksha (liberation). This house often emphasizes healing
                    and closure, connecting to themes of forgiveness found in traditional scriptures, promoting the
                    idea that one must confront past experiences to achieve spiritual progress.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mansion Metaphor */}
            <Card variant="elevated" className="bg-gradient-to-br from-ivory to-white">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                  The Mansion Metaphor
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Visualize each house as a distinct room within a grand mansion, designed to reflect specific
                  experiences and lessons. Each room provides a unique perspective on individual life, emphasizing
                  that our experiences are multifaceted and enriching. For aspiring Vedic practitioners, mastering
                  this metaphor can facilitate a deeper grasp of the houses, enriching their astrological explorations
                  and interpretations.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: The 9 Planets */}
          <section id="9-planets" className="mb-16 scroll-mt-20">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6 border-t-2 border-charcoal/10 pt-6">
              The 9 Planets (Grahas): Energies and Influences on Personality and Life
            </h2>

            <p className="text-charcoal/80 leading-relaxed mb-8">
              In Vedic Astrology, the nine planets (grahas) embody distinct energies that shape our personas and
              influence our life journeys. Understanding these planets helps us connect specific personality traits
              and tendencies to their astrological roots, enabling deeper self-awareness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sun */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">☉</span>
                    Sun (Surya)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Soul, vitality, and self-expression</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        The Sun governs your core identity and ego. Individuals influenced by a strong Sun tend to be
                        confident, ambitious, and full of vitality. A well-placed Sun in the natal chart often signifies
                        leadership qualities.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Leadership, Confidence, Authority
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Moon */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">☽</span>
                    Moon (Chandra)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Mind, emotions, and intuition</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        The Moon impacts your emotional landscape and mental responses. Those with a prominent Moon are
                        usually empathetic, nurturing, and sensitive, often illustrating this through caring behaviors
                        towards family and friends.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Empathy, Nurturing, Emotions
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mars */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">♂</span>
                    Mars (Mangala)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Energy, courage, and assertiveness</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Mars injects dynamism and motivation. A strong Mars can make an individual competitive, brave,
                        and energetic; they often thrive in physical activities or challenges.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Courage, Competition, Energy
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mercury */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">☿</span>
                    Mercury (Budha)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Communication, intellect, and analytical skills</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Mercury imparts the ability to think critically and communicate effectively. People influenced
                        by Mercury are generally adaptable and quick-witted, suited for careers in marketing, writing,
                        or teaching.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Intellect, Adaptability, Communication
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Jupiter */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">♃</span>
                    Jupiter (Brihaspati)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Wisdom, expansion, and abundance</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Jupiter is a planet of growth and morality, often associated with teachers, philosophers, and
                        benefactors. Those with a well-placed Jupiter are usually considered wise and generous.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Wisdom, Abundance, Growth
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Venus */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">♀</span>
                    Venus (Shukra)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Love, beauty, and harmony</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Venus influences relationships and aesthetic appreciation, aligning with artists, designers,
                        and individuals who thrive in social settings. A strong Venus enhances one's ability to create
                        and maintain fulfilling relationships.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Love, Beauty, Harmony
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Saturn */}
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">♄</span>
                    Saturn (Shani)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Discipline, structure, and karma</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Saturn embodies lessons, structure, and sometimes delays, emphasizing the importance of hard
                        work and resilience. A strong Saturn may indicate a diligent worker who excels in structured
                        environments.
                      </p>
                    </div>
                    <div className="bg-saffron/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Discipline, Structure, Patience
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rahu */}
              <Card variant="bordered" className="border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">☊</span>
                    Rahu (North Node)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Shadow planet with karmic influence</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Rahu governs desires, obsessions, and illusions, influencing individuals to seek external
                        validation. Understanding Rahu's placement is crucial for navigating its energies toward self-growth.
                      </p>
                    </div>
                    <div className="bg-accent/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Desires, Ambition, Transformation
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ketu */}
              <Card variant="bordered" className="border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">☋</span>
                    Ketu (South Node)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-saffron">Nature:</strong>
                      <p className="text-sm text-charcoal/80">Shadow planet symbolizing spirituality</p>
                    </div>
                    <div>
                      <strong className="text-saffron">Influence:</strong>
                      <p className="text-sm text-charcoal/80">
                        Ketu signifies spiritual pursuits and detachment from worldly concerns, often leading individuals
                        towards truth-seeking endeavors. Those influenced by Ketu may excel in roles like spiritual
                        teachers or researchers.
                      </p>
                    </div>
                    <div className="bg-accent/10 p-2 rounded text-xs font-medium text-charcoal/70">
                      Keywords: Spirituality, Detachment, Liberation
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card variant="bordered" className="bg-ivory/30 mt-6">
              <CardContent className="pt-6">
                <p className="text-charcoal/80 leading-relaxed">
                  Each of the nine planets provides a unique lens through which to view one's personality and life events.
                  Their placement in a natal chart and interactions with each other further refine their influence,
                  allowing for a comprehensive interpretation of an individual's astrological profile. Understanding
                  the nuances of Rahu and Ketu can debunk misconceptions about their shadow nature, redirecting focus
                  from fear to spiritual growth.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Planet-House Interactions */}
          <section id="planet-house-interactions" className="mb-16 scroll-mt-20">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6 border-t-2 border-charcoal/10 pt-6">
              How Planets and Houses Interact: Basics of Natal Chart Interpretation
            </h2>

            <p className="text-charcoal/80 leading-relaxed mb-8">
              In Vedic astrology, the interaction between planets and houses is vital for interpreting birth charts.
              Each planet carries unique energy that significantly influences the life areas represented by the houses
              it occupies. This section clarifies how these interactions shape individual experiences and traits across
              various life domains.
            </p>

            <Card variant="elevated" className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Planet-House Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 leading-relaxed">
                  When a planet occupies a house, it merges its energy with the themes of that house. For instance,
                  if Mars, known for its assertive nature, is in the 7th house of partnerships, the individual may
                  experience relationships marked by vigor and assertiveness. This placement suggests a competitive
                  approach to partnerships, motivating the native to take initiative in personal connections.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Step-by-Step Guide to Interpreting Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-saffron text-white text-sm font-bold">1</span>
                    <div>
                      <strong>Identify Planet Placements:</strong> Locate each planet's position within the houses in
                      your natal chart and list them accordingly.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-saffron text-white text-sm font-bold">2</span>
                    <div>
                      <strong>Understand House Themes:</strong> Familiarize yourself with the significance of each house,
                      from the 1st house (self-identity, physical body) to the 12th house (spirituality, solitude).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-saffron text-white text-sm font-bold">3</span>
                    <div>
                      <strong>Analyze the Planets' Energies:</strong> Examine each planet's nature; for example, Venus
                      symbolizes love and beauty, while Saturn represents discipline and restriction. Consider how these
                      energies influence the themes of the house they occupy.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-saffron text-white text-sm font-bold">4</span>
                    <div>
                      <strong>Consider Dasha Periods:</strong> In Vedic astrology, event timing is influenced by Dasha
                      periods, further illuminating how planetary energies manifest at different life stages.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center min-w-[28px] h-7 rounded-full bg-saffron text-white text-sm font-bold">5</span>
                    <div>
                      <strong>Example Interpretation:</strong> If Venus occupies the 5th house, this may enhance artistic
                      pursuits and suggest a joyful outlook on love. Conversely, if Saturn is in the 4th house, it may
                      signal responsibility and potential challenges in emotional expression.
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card variant="bordered" className="bg-accent/5 mt-6">
              <CardContent className="pt-6">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-3">
                  Practical Implications
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  The dynamics between planets and houses create specific experiences in various life areas. For example:
                </p>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>With the Sun in the 10th house, the individual might be perceived as a leader in their career,
                    positively influencing their public image.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-saffron mt-0.5 flex-shrink-0" />
                    <span>If Jupiter, associated with growth and expansion, occupies the 6th house, it may indicate
                    opportunities in service-related careers or improved health.</span>
                  </li>
                </ul>
                <p className="text-charcoal/80 leading-relaxed mt-4">
                  By following these steps, beginners can interpret their natal charts with confidence, transitioning
                  from confusion to clarity in understanding the intricate balance of influences.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: FAQs */}
          <section id="faqs" className="mb-16 scroll-mt-20">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6 border-t-2 border-charcoal/10 pt-6">
              FAQs and Practical Tips for Beginners
            </h2>

            <div className="space-y-4">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">What do the 12 houses in Vedic Astrology represent?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    The 12 houses in Vedic Astrology represent various themes of life. For instance, the 1st house
                    symbolizes self and identity, while the 4th house focuses on home and family matters. The 10th house
                    is about career and public image. By understanding these houses, you can gain clearer insights into
                    your life experiences and challenges. A practical tip is to think of each house as a room in your
                    house—each room has a distinct purpose, just as each house in Vedic Astrology highlights different
                    aspects of your life.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">How do the 9 planets influence my chart?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Each of the 9 planets modifies the characteristics linked to the house they occupy in your birth chart.
                    For example, if Jupiter, known for luck and expansion, is in the 2nd house of finances, it might
                    enhance your wealth and communication abilities. Conversely, if Saturn, often associated with discipline,
                    is found in the 5th house, it could indicate potential challenges in creativity or relationships with
                    children. To apply this understanding, consider your birth chart placements and reflect on how they
                    correlate with your current life situations.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">What is the significance of classical Vedic scriptures?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Classical Vedic texts and reputable astrologers provide foundational principles for interpreting the
                    relationships between houses and planets. This knowledge emphasizes practical clarity, encouraging you
                    to seek actionable insights rather than predictive certainty. To integrate this into your practice,
                    begin with texts like the 'Brihat Parashara Hora Shastra' and discuss interpretations with knowledgeable
                    practitioners in community forums or groups to deepen your understanding.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">How can I start applying this knowledge practically?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Begin by calculating your personal birth chart to identify the placements of planets in the houses.
                    Reflect on the attributes each position symbolizes. For instance, if your Venus is in the 7th house,
                    it may significantly impact your relationships. A useful exercise is to journal about your experiences
                    in the context of each house. This reflection will enable you to connect theoretical knowledge with
                    your real-life situations, making your learning more personal and applicable.
                  </p>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">What common mistakes should beginners avoid?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed mb-3">
                    One common mistake is making broad conclusions based on singular aspects of a chart. Rather than
                    viewing planets and houses in isolation, appreciate their interconnectedness. Over-relying on generic
                    interpretations without tailoring them to your unique birth chart can also be misleading.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-sm text-charcoal/80">
                      <strong className="text-amber-900">Pro Tip:</strong> Practice personalized readings and seek
                      feedback from experienced astrologers, which will enhance your understanding of how various elements
                      interact within your chart.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle className="text-lg">Where can I continue learning about Vedic Astrology?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 leading-relaxed">
                    Consider seeking out online courses, books, or community workshops dedicated to Vedic Astrology principles.
                    Engaging with experienced practitioners, either through online forums or local study groups, is also
                    beneficial. Don't hesitate to ask questions and participate actively; learning in community settings
                    can provide tailored insights and broaden your understanding of this intricate subject.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sources */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
              Sources
            </h2>
            <Card variant="bordered" className="bg-ivory/30">
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://dashaclub.com/learn/houses-planets" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      12 Houses & 9 Planets in Vedic Astrology: Complete Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.shreekundli.com/vedic-astrology/houses" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      12 Bhavas (Houses) in Vedic Astrology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.indastro.com/house.html" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      How do planets behave in houses in Vedic astrology?
                    </a>
                  </li>
                  <li>
                    <a href="https://vedicka.com/12-houses-bhavas-vedic-astrology/" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      12 Houses (Bhavas) in Vedic Astrology Explained
                    </a>
                  </li>
                  <li>
                    <a href="https://jyothishai.com/learn/houses/" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      12 Houses in Vedic Astrology (Bhavas) - Complete Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.indastro.com/house/9th-house.html" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      9th House in Vedic Horoscope
                    </a>
                  </li>
                  <li>
                    <a href="https://astronidan.com/houses/" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      12 Houses (Bhavas) in Vedic Astrology - Complete Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://vasishthaastroguide.com/index.php/2025/11/26/12-houses-in-vedic-astrology/" className="text-accent hover:text-saffron transition-colors" target="_blank" rel="noopener noreferrer">
                      The 12 Houses in Vedic Astrology: Life Areas and What They Mean
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Bottom CTAs */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="elevated" padding="lg" className="text-center bg-gradient-to-br from-saffron/5 to-white">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Ready to Understand Your Chart?
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Get a personalized kundali reading from Pandit Yash Shastri
                    </p>
                  </div>
                  <LinkButton
                    href="/kundali-upload"
                    variant="secondary"
                    size="md"
                    className="w-full"
                  >
                    <Sparkles className="w-4 h-4" />
                    Upload Your Kundali
                  </LinkButton>
                </div>
              </Card>

              <Card variant="elevated" padding="lg" className="text-center bg-gradient-to-br from-accent/5 to-white">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      Book an Astrology Consultation
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Discuss your planetary placements and life path
                    </p>
                  </div>
                  <LinkButton
                    href="/astrology-consultation"
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Book Now
                  </LinkButton>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
