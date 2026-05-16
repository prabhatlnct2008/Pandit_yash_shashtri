"use client";

import { useEffect, useReducer } from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type {
  PlannerAnswers,
  PlannerState,
} from "@/components/planner/types";
import { composeResult, type PlannerResult } from "@/lib/plannerLogic";
import { SITE_CONFIG } from "@/lib/constants";

const STORAGE_KEY = "mandir-planner-state-v1";
const LEAD_KEY = "mandir-planner-lead-v1";

interface Lead {
  name: string;
  whatsapp: string;
  pincode?: string;
  submittedAt: string;
}

function isValidStored(value: unknown): value is PlannerState {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<PlannerState>;
  return typeof v.step === "number" && typeof v.answers === "object";
}

interface HydratedState {
  hydrated: boolean;
  answers: PlannerAnswers | null;
  lead: Lead | null;
}

type HydrationAction = { type: "HYDRATE"; payload: HydratedState };

const initialHydration: HydratedState = {
  hydrated: false,
  answers: null,
  lead: null,
};

function hydrationReducer(
  state: HydratedState,
  action: HydrationAction
): HydratedState {
  if (action.type === "HYDRATE") return action.payload;
  return state;
}

export function ChecklistPrintable() {
  const [{ hydrated, answers, lead }, dispatch] = useReducer(
    hydrationReducer,
    initialHydration
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    let nextAnswers: PlannerAnswers | null = null;
    let nextLead: Lead | null = null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (isValidStored(parsed)) nextAnswers = parsed.answers;
      }
      const leadRaw = window.localStorage.getItem(LEAD_KEY);
      if (leadRaw) {
        const parsedLead = JSON.parse(leadRaw) as Lead;
        if (parsedLead && typeof parsedLead === "object") nextLead = parsedLead;
      }
    } catch {
      // ignore corrupt storage
    }
    dispatch({
      type: "HYDRATE",
      payload: { hydrated: true, answers: nextAnswers, lead: nextLead },
    });
  }, []);

  if (!hydrated) {
    return (
      <main className="min-h-screen bg-white py-16">
        <p className="text-center text-charcoal/60">Loading your checklist…</p>
      </main>
    );
  }

  if (!answers || Object.keys(answers).length === 0) {
    return (
      <main className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-heading text-2xl font-semibold text-charcoal mb-3">
            No checklist found
          </h1>
          <p className="text-charcoal/70 mb-6">
            We couldn&apos;t find your planner result on this device. Please
            complete the planner first.
          </p>
          <Link
            href="/home-mandir-puja-planner"
            className="inline-flex items-center gap-2 text-saffron hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to the planner
          </Link>
        </div>
      </main>
    );
  }

  const result: PlannerResult = composeResult(answers);

  return (
    <main className="min-h-screen bg-white text-charcoal">
      {/* Screen-only top bar with print and back actions */}
      <div className="print:hidden border-b border-muted bg-ivory">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-3 flex-wrap">
          <Link
            href="/home-mandir-puja-planner"
            className="inline-flex items-center gap-2 text-sm text-charcoal/70 hover:text-charcoal"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to planner
          </Link>
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => {
              if (typeof window !== "undefined") window.print();
            }}
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </Button>
        </div>
      </div>

      {/* Printable area */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 print:py-4">
        <header className="mb-8 pb-6 border-b border-muted">
          <p className="text-xs font-medium tracking-wide uppercase text-saffron mb-1">
            Home Mandir &amp; Puja Plan
          </p>
          <h1 className="font-heading text-3xl font-bold text-charcoal mb-2">
            {lead?.name
              ? `${lead.name}'s personalised checklist`
              : "Your personalised checklist"}
          </h1>
          <p className="text-sm text-charcoal/70">
            Prepared by Pandit Yash Shastri · {SITE_CONFIG.temple.name},{" "}
            {SITE_CONFIG.temple.city}
          </p>
          <p className="text-xs text-charcoal/50 mt-1">
            Date: {new Date().toLocaleDateString("en-IN")}
          </p>
        </header>

        <section className="mb-6">
          <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">
            Mandir direction
          </h2>
          <p className="font-medium">{result.direction.title}</p>
          <p className="text-sm text-charcoal/70 mt-1">{result.direction.note}</p>
        </section>

        <section className="mb-6">
          <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">
            Recommended puja
          </h2>
          <p className="font-medium">{result.puja.primary.name}</p>
          <p className="text-sm text-charcoal/70 mt-1">
            {result.puja.primary.description}
          </p>
          {result.puja.secondary && (
            <p className="text-sm text-charcoal/70 mt-3">
              <span className="font-medium text-charcoal">
                Often performed alongside:
              </span>{" "}
              {result.puja.secondary.name} — {result.puja.secondary.description}
            </p>
          )}
        </section>

        <section className="mb-6">
          <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">
            {result.space.title} — setup tips
          </h2>
          <ul className="list-disc list-inside text-sm text-charcoal/80 space-y-1">
            {result.space.tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">
            Samagri checklist
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-charcoal/80 print:text-charcoal">
            {result.samagri.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 before:content-['☐'] before:text-saffron before:font-bold print:before:text-black"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">
            Location note
          </h2>
          <p className="text-sm text-charcoal/80">{result.location.note}</p>
        </section>

        <section className="mt-8 pt-6 border-t border-muted text-sm text-charcoal/70">
          <p className="font-medium text-charcoal mb-1">Contact Pandit Ji</p>
          <p>
            WhatsApp / Call: +91 {SITE_CONFIG.contact.primaryPhone}
          </p>
          <p>
            Website:{" "}
            <span className="text-charcoal">
              {SITE_CONFIG.url.replace(/^https?:\/\//, "")}
            </span>
          </p>
          <p className="mt-3 text-xs leading-relaxed">
            This checklist reflects common Vastu and Vedic traditions.
            Individual family customs vary. Please confirm specific rituals
            with Pandit Yash Shastri before performing them at home.
          </p>
        </section>
      </article>
    </main>
  );
}
