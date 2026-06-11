import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { fetchGoogleReviews } from "@/lib/googleReviews";

export async function ReviewsSection() {
  const reviews = (await fetchGoogleReviews()).slice(0, 4);
  if (reviews.length === 0) return null;

  return (
    <section
      className="py-16 md:py-24 bg-ivory-dark"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-5 h-5 text-gold fill-gold"
                aria-hidden="true"
              />
            ))}
          </div>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            What families say
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Verified reviews from South Delhi and Gurgaon families on Google.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviews.map((review, idx) => (
            <article
              key={`${review.author}-${idx}`}
              className="bg-white p-6 rounded-2xl border border-muted shadow-sm flex flex-col"
            >
              <Quote
                className="w-6 h-6 text-saffron/40 mb-3"
                aria-hidden="true"
              />
              <div
                className="inline-flex items-center gap-0.5 mb-3"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: Math.round(review.rating) }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed mb-4 flex-grow">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="pt-3 border-t border-muted flex items-center gap-3">
                {review.profilePhotoUrl ? (
                  <Image
                    src={review.profilePhotoUrl}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    unoptimized
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full bg-saffron/15 text-saffron flex items-center justify-center text-sm font-medium flex-shrink-0"
                  >
                    {review.author.slice(0, 1).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-medium text-charcoal text-sm truncate">
                    {review.author}
                  </p>
                  <p className="text-xs text-charcoal/60 truncate">
                    {[review.area, review.date].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Read more on Google */}
        <div className="text-center">
          <a
            href={SITE_CONFIG.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
          >
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span>Read all reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
