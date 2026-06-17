import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { fetchGoogleReviews, fetchReviewSummary } from "@/lib/googleReviews";

interface ReviewWidgetProps {
  /** How many review cards to show. */
  limit?: number;
  /** Background utility class for the section. */
  className?: string;
}

/**
 * Compact, reusable review widget rendered on every page from the root
 * layout. Shows the Google rating summary plus a few review cards and a link
 * to read more.
 */
export async function ReviewWidget({
  limit = 3,
  className = "bg-ivory-dark",
}: ReviewWidgetProps) {
  const [reviews, summary] = await Promise.all([
    fetchGoogleReviews(),
    fetchReviewSummary(),
  ]);
  const shown = reviews.slice(0, limit);
  if (shown.length === 0) return null;

  return (
    <section
      className={`py-14 md:py-20 ${className}`}
      aria-labelledby="review-widget-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2
              id="review-widget-heading"
              className="font-heading text-2xl md:text-3xl font-bold text-charcoal"
            >
              What families say about Pandit Ji Home Puja
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    aria-hidden="true"
                  />
                ))}
              </span>
              <span className="text-sm text-charcoal/70">
                {summary
                  ? `${summary.rating.toFixed(1)} from ${summary.count}+ Google reviews`
                  : "Verified Google reviews from South Delhi & Gurgaon families"}
              </span>
            </div>
          </div>
          <a
            href={SITE_CONFIG.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-charcoal/90 transition-colors self-start sm:self-auto"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            Read all reviews on Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shown.map((review, idx) => (
            <article
              key={`${review.author}-${idx}`}
              className="bg-white p-6 rounded-2xl border border-muted shadow-sm flex flex-col"
            >
              <Quote className="w-5 h-5 text-saffron/40 mb-3" aria-hidden="true" />
              <p className="text-sm text-charcoal/80 leading-relaxed mb-4 flex-grow line-clamp-5">
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
                    {[review.area, review.date].filter(Boolean).join(" · ") ||
                      "Verified Google review"}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
