"use client";

import { useState } from "react";
import { Download, FileText, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { WA_TEMPLATES } from "@/lib/whatsappTemplates";
import type { PlannerAnswers } from "./types";

const LEAD_STORAGE_KEY = "mandir-planner-lead-v1";

interface Lead {
  name: string;
  whatsapp: string;
  pincode?: string;
  submittedAt: string;
}

interface SamagriPdfGateProps {
  answers: PlannerAnswers;
  pujaName: string;
}

export function SamagriPdfGate({ answers, pujaName }: SamagriPdfGateProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [pincode, setPincode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function validate(): string | null {
    if (!name.trim()) return "Please share your name.";
    const digits = whatsapp.replace(/\D/g, "");
    if (digits.length < 10) return "Please enter a valid 10-digit WhatsApp number.";
    return null;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setSubmitting(true);

    const lead: Lead = {
      name: name.trim(),
      whatsapp: whatsapp.replace(/\D/g, ""),
      pincode: pincode.trim() || undefined,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(lead));
      }
    } catch {
      // ignore storage failures
    }

    const waMessage = WA_TEMPLATES.fromPlannerWithLead(
      answers,
      pujaName,
      { name: lead.name, whatsapp: lead.whatsapp, pincode: lead.pincode }
    );
    const waUrl = getWhatsAppLink(SITE_CONFIG.contact.primaryPhone, waMessage);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      // Open the printable checklist in a separate new tab — user can save as PDF or print
      window.open("/home-mandir-puja-planner/checklist", "_blank");
    }
    setSubmitting(false);
  }

  return (
    <div className="p-5 rounded-xl bg-saffron/5 border border-saffron/30">
      <div className="flex items-start gap-3 mb-4">
        <FileText className="w-5 h-5 mt-0.5 flex-shrink-0 text-saffron" />
        <div>
          <h4 className="font-heading text-lg font-semibold text-charcoal">
            Get the full samagri checklist as a printable PDF
          </h4>
          <p className="text-sm text-charcoal/70 mt-1">
            Share your details once — we&apos;ll send your checklist to your
            WhatsApp, and Pandit Ji will follow up within an hour.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div>
          <label
            htmlFor="lead-name"
            className="block text-xs font-medium text-charcoal/70 mb-1"
          >
            Name
          </label>
          <input
            id="lead-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="w-full px-3 py-2 rounded-lg border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-saffron text-sm"
            placeholder="Your name"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="lead-whatsapp"
              className="block text-xs font-medium text-charcoal/70 mb-1"
            >
              WhatsApp number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-muted bg-ivory text-sm text-charcoal/70">
                +91
              </span>
              <input
                id="lead-whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                inputMode="numeric"
                autoComplete="tel-national"
                className="flex-1 px-3 py-2 rounded-r-lg border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-saffron text-sm"
                placeholder="10-digit number"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lead-pincode"
              className="block text-xs font-medium text-charcoal/70 mb-1"
            >
              Pincode <span className="text-charcoal/50">(optional)</span>
            </label>
            <input
              id="lead-pincode"
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={6}
              className="w-full px-3 py-2 rounded-lg border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-saffron text-sm"
              placeholder="110030"
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-accent" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" size="md" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Preparing your checklist…
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Send my checklist on WhatsApp
            </>
          )}
        </Button>

        <p className="text-xs text-charcoal/60 inline-flex items-start gap-1">
          <ShieldCheck className="w-3 h-3 mt-0.5 flex-shrink-0 text-saffron" />
          <span>
            We only use your number to send your checklist and (if you ask) to
            connect you with Pandit Ji. No spam. No third-party sharing.
          </span>
        </p>
      </form>
    </div>
  );
}
