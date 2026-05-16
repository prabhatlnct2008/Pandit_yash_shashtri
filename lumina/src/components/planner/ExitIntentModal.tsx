"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";

const SHOWN_KEY = "mandir-planner-exit-intent-shown-v1";
const DESKTOP_QUERY = "(min-width: 1024px)";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // First-visit only
    try {
      if (window.localStorage.getItem(SHOWN_KEY)) return;
    } catch {
      // ignore
    }

    // Desktop only
    if (!window.matchMedia(DESKTOP_QUERY).matches) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 8000); // arm after 8s so it doesn't fire on quick scroll-past

    function handleMouseLeave(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return; // only when leaving from the top of the viewport
      setOpen(true);
      try {
        window.localStorage.setItem(SHOWN_KEY, "1");
      } catch {
        // ignore
      }
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const message = WA_TEMPLATES.exitIntentSave(
    "I was using the Home Mandir & Puja Planner. Please keep my context for follow-up."
  );

  return (
    <div
      className="fixed inset-0 z-[100] bg-charcoal/50 flex items-center justify-center p-4 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 p-1 rounded-full text-charcoal/50 hover:text-charcoal hover:bg-ivory transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 text-saffron mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs font-medium uppercase tracking-wide">
            Before you go
          </span>
        </div>
        <h2
          id="exit-intent-title"
          className="font-heading text-2xl font-semibold text-charcoal mb-2"
        >
          Save your planner result on WhatsApp
        </h2>
        <p className="text-sm text-charcoal/70 leading-relaxed mb-5">
          Send a quick note to Pandit Ji so your context isn&apos;t lost.
          He&apos;ll follow up at your convenience — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <LinkButton
            href={getWhatsAppLink(SITE_CONFIG.contact.primaryPhone, message)}
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center"
          >
            Save on WhatsApp
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-sm text-charcoal/60 hover:text-charcoal"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}
