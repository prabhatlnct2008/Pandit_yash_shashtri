import { REVIEWS } from "@/lib/constants";

export interface GoogleReview {
  author: string;
  rating: number;
  date: string;
  text: string;
  area?: string;
  profilePhotoUrl?: string;
  source: "google" | "fallback";
}

interface PlacesV1AuthorAttribution {
  displayName?: string;
  photoUri?: string;
}

interface PlacesV1Review {
  rating: number;
  text?: { text: string; languageCode?: string };
  originalText?: { text: string; languageCode?: string };
  authorAttribution?: PlacesV1AuthorAttribution;
  publishTime?: string;
  relativePublishTimeDescription?: string;
}

interface PlacesV1SearchResponse {
  places?: Array<{ id: string; displayName?: { text: string } }>;
}

interface PlacesV1PlaceResponse {
  reviews?: PlacesV1Review[];
  rating?: number;
  userRatingCount?: number;
}

const PLACE_QUERY = "Pandit ji Yash Shastri Home Puja Mehrauli";
const REVALIDATE_SECONDS = 21600; // refresh reviews every 6 hours

const FALLBACK_REVIEWS: GoogleReview[] = REVIEWS.map((r) => ({
  author: r.author,
  rating: r.rating,
  date: r.date,
  text: r.text,
  area: r.area,
  source: "fallback" as const,
}));

async function findPlaceId(apiKey: string): Promise<string | null> {
  try {
    const res = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.displayName",
        },
        body: JSON.stringify({ textQuery: PLACE_QUERY }),
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as PlacesV1SearchResponse;
    return data.places?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function fetchPlaceReviews(
  apiKey: string,
  placeId: string
): Promise<PlacesV1Review[]> {
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as PlacesV1PlaceResponse;
    return data.reviews ?? [];
  } catch {
    return [];
  }
}

function formatDate(review: PlacesV1Review): string {
  if (review.relativePublishTimeDescription)
    return review.relativePublishTimeDescription;
  if (review.publishTime) {
    try {
      return new Date(review.publishTime).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      });
    } catch {
      // fall through
    }
  }
  return "";
}

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK_REVIEWS;

  const placeId = await findPlaceId(apiKey);
  if (!placeId) return FALLBACK_REVIEWS;

  const raw = await fetchPlaceReviews(apiKey, placeId);
  if (raw.length === 0) return FALLBACK_REVIEWS;

  return raw
    .map<GoogleReview>((r) => ({
      author: r.authorAttribution?.displayName ?? "Google user",
      rating: r.rating,
      date: formatDate(r),
      text: r.text?.text ?? r.originalText?.text ?? "",
      profilePhotoUrl: r.authorAttribution?.photoUri,
      source: "google",
    }))
    .filter((r) => r.text.trim().length > 0);
}
