"use client";

import { usePathname } from "next/navigation";
import { HelpCircle, Phone, Sparkles, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

export function StickyMobileCTA() {
  const pathname = usePathname();
  const isPlanner = pathname?.startsWith("/home-mandir-puja-planner");

  if (isPlanner) {
    return <PlannerStickyBar />;
  }
  return <DefaultStickyBar />;
}

function DefaultStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-ivory border-t-2 border-muted shadow-lg print:hidden">
      <div className="flex">
        <a
          href={getWhatsAppLink(SITE_CONFIG.contact.primaryPhone, WA_TEMPLATES.generic())}
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

function PlannerStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-ivory border-t-2 border-muted shadow-lg print:hidden">
      <div className="flex">
        <a
          href="/ask-pandit-ji"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-medium"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Ask Pandit Ji</span>
        </a>
        <a
          href={getWhatsAppLink(SITE_CONFIG.contact.primaryPhone, WA_TEMPLATES.homePuja())}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-saffron text-white font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-5 h-5" />
          <span>Book Puja</span>
        </a>
      </div>
    </div>
  );
}
