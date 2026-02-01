"use client";

import { Phone, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-ivory border-t-2 border-muted shadow-lg">
      <div className="flex">
        <a
          href={getWhatsAppLink(
            SITE_CONFIG.contact.primaryPhone,
            "Hello, I would like to book a consultation with Pandit Ji."
          )}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Sparkles className="w-5 h-5" />
          <span>Quick Consult</span>
        </a>
        <a
          href={getPhoneLink(SITE_CONFIG.contact.primaryPhone)}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-saffron text-white font-medium"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
