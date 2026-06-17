import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface ServiceAreaMapProps {
  /** Area name to centre the map on, e.g. "Hauz Khas". */
  areaName: string;
  /** Full label shown in the caption, e.g. "Hauz Khas, South Delhi". */
  areaLabel?: string;
}

/**
 * Conditional service-area map. Renders a Google Maps embed centred on the
 * given locality so each /pandit/[location] page shows where Pandit Ji Home
 * Puja serves. Uses the keyless maps embed (no API key required) so it works
 * in every environment.
 */
export function ServiceAreaMap({ areaName, areaLabel }: ServiceAreaMapProps) {
  const query = encodeURIComponent(`${areaName}, Delhi NCR, India`);
  const src = `https://maps.google.com/maps?q=${query}&z=13&output=embed`;
  const label = areaLabel ?? areaName;

  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="area-map-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-saffron" aria-hidden="true" />
          <h2
            id="area-map-heading"
            className="font-heading text-2xl md:text-3xl font-bold text-charcoal"
          >
            Pandit Ji Home Puja in {label}
          </h2>
        </div>
        <p className="text-charcoal/70 mb-6 max-w-3xl">
          {SITE_CONFIG.name} travels to homes, societies, and offices across{" "}
          {label} from {SITE_CONFIG.temple.name}, Mehrauli. The map below shows
          the area served.
        </p>
        <div className="relative w-full overflow-hidden rounded-2xl border border-muted shadow-sm aspect-[16/10] sm:aspect-[16/7]">
          <iframe
            title={`Map of Pandit Ji Home Puja service area in ${label}`}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <p className="text-sm text-charcoal/60 mt-4">
          Based at {SITE_CONFIG.temple.name}, {SITE_CONFIG.temple.address},{" "}
          {SITE_CONFIG.temple.city} {SITE_CONFIG.temple.postalCode}.{" "}
          <a
            href={SITE_CONFIG.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron hover:text-saffron-dark underline underline-offset-2"
          >
            Get directions
          </a>
        </p>
      </div>
    </section>
  );
}
