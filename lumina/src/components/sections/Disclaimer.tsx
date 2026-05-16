import { Info } from "lucide-react";

interface DisclaimerProps {
  className?: string;
}

export function Disclaimer({ className = "" }: DisclaimerProps) {
  return (
    <aside
      className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}
      aria-label="Guidance disclaimer"
    >
      <div className="flex gap-3 p-5 rounded-lg bg-ivory border border-muted text-charcoal/80">
        <Info
          className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed">
          The guidance on this page reflects common Vastu and Vedic traditions.
          Individual family customs (kul-rivaaj) vary. Please confirm specific
          rituals, mantras, and remedies with Pandit Yash Shastri or your family
          pandit before performing them at home.
        </p>
      </div>
    </aside>
  );
}
