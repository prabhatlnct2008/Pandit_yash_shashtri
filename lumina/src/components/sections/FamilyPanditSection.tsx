import Image from "next/image";

export function FamilyPanditSection() {
  return (
    <section className="bg-ivory" aria-labelledby="family-pandit-heading">
      {/* Image band */}
      <div className="relative h-56 md:h-72 lg:h-80">
        <Image
          src="/images/home-puja-diya-threshold-welcome.jpg"
          alt="A lit brass diya welcoming a puja at the threshold of a South Delhi home."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2
          id="family-pandit-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-saffron mb-8"
        >
          What it means to have your own Pandit jee
        </h2>
        <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
          <p className="text-xl text-charcoal">
            For your home&rsquo;s important moments, you don&rsquo;t want a new
            face every time. You want one Pandit jee — who knows your family,
            does every vidhi properly, and is there for the next puja too.
          </p>
          <p>
            In most families, the best pujas were never &ldquo;booked.&rdquo;
            There was simply <em>a</em> Pandit jee. The one who came for the
            griha pravesh, returned for the satyanarayan, sat with the family
            through the good days and the hard ones. He knew your home. You
            knew him. That is what made those pujas feel like yours.
          </p>
          <p>
            Somewhere that got lost. Now you call an app, and it sends whoever
            is free that day. A different face each time, in a hurry, meeting
            your family for the first time at your own door, on a morning that
            matters to you.
          </p>
          <p>
            I would like to bring back the old way. Call me once, and if it
            feels right, call me again. Slowly I stop being a name on a screen
            and become your family&rsquo;s Pandit jee — the one your children
            recognise at the door.
          </p>
          <p>
            I am Pandit Yash Shastri. Tell me the puja and the date.
            I&rsquo;ll share an auspicious muhurat and a clear price, and we
            begin.
          </p>
        </div>
      </div>
    </section>
  );
}
