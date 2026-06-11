import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="py-16 md:py-24 bg-ivory"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto md:mx-0">
              <Image
                src="/images/pandit-yash-shastri-mehrauli-portrait.jpg"
                alt="Pandit Yash Shastri, home puja Pandit jee and astrologer in Mehrauli, South Delhi."
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-3">
            <h2
              id="about-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6"
            >
              A little about me
            </h2>
            <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
              <p>
                I sit at Shiv Shakti Mandir, in Mehrauli. This work is most of
                my life.
              </p>
              <p>
                Here is what I would want you to know before you decide
                anything.
              </p>
              <p>
                <strong className="text-charcoal">
                  I will not frighten you. Ever.
                </strong>{" "}
                No Pandit jee should tell you that something terrible will
                happen if you do not do a certain puja. That is not our dharma.
                It is fear dressed up as faith, and I will have no part in it.
              </p>
              <p>
                <strong className="text-charcoal">
                  I will not send a substitute.
                </strong>{" "}
                If I commit to your puja, I am the one who comes. Not
                &ldquo;someone from our team.&rdquo;
              </p>
              <p>
                <strong className="text-charcoal">I will not rush.</strong> A
                vidhi done in a hurry to reach the next house is not a vidhi at
                all.
              </p>
              <p>
                <strong className="text-charcoal">
                  And I will not push you toward expensive pujas you do not
                  need.
                </strong>{" "}
                If a simple one is right, I will tell you that, even when a
                bigger one would have paid me more.
              </p>
              <p>
                These four things are the whole of how I work. Everything else
                is just doing the puja properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
