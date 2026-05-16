"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Compass,
  Home,
  Info,
  MapPin,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
import { composeResult, type DirectionTier, type PlannerResult } from "@/lib/plannerLogic";
import { SamagriPdfGate } from "./SamagriPdfGate";
import type {
  AnswerKey,
  Deity,
  Direction,
  LocationKey,
  Occasion,
  PanditReview,
  PlannerAnswers,
  PlannerState,
  Space,
} from "./types";

const STORAGE_KEY = "mandir-planner-state-v1";

type Option<V extends string> = {
  value: V;
  label: string;
  subLabel?: string;
};

type Question<V extends string> = {
  key: AnswerKey;
  title: string;
  subtitle: string;
  options: Option<V>[];
};

const Q1: Question<Direction> = {
  key: "direction",
  title: "Which corner of your home will the mandir be in?",
  subtitle: "आपका मंदिर घर के किस कोने में होगा?",
  options: [
    { value: "NE", label: "North-East", subLabel: "Ishan Kona" },
    { value: "E", label: "East" },
    { value: "N", label: "North" },
    { value: "NW", label: "North-West" },
    { value: "W", label: "West" },
    { value: "SW", label: "South-West" },
    { value: "S", label: "South" },
    { value: "SE", label: "South-East" },
    { value: "not-sure", label: "Not sure", subLabel: "We'll guide you" },
  ],
};

const Q2: Question<Deity> = {
  key: "deity",
  title: "Who is the main deity in your mandir?",
  subtitle: "आपके मंदिर के मुख्य देवता कौन हैं?",
  options: [
    { value: "shiv", label: "Shiv ji" },
    {
      value: "shiv-parivar",
      label: "Shiv Parivar",
      subLabel: "Shiv–Parvati–Ganesh",
    },
    { value: "ram-darbar", label: "Ram Darbar" },
    { value: "krishna", label: "Krishna ji" },
    { value: "devi", label: "Devi (Durga / Lakshmi)" },
    { value: "multiple", label: "Multiple deities" },
    { value: "help-decide", label: "Help me decide" },
  ],
};

const Q3: Question<Space> = {
  key: "space",
  title: "How much space do you have for the mandir?",
  subtitle: "मंदिर के लिए कितनी जगह है?",
  options: [
    {
      value: "wall-mounted",
      label: "Wall-mounted small",
      subLabel: "Hung on the wall",
    },
    {
      value: "floor-cabinet",
      label: "Floor cabinet",
      subLabel: "Standing unit",
    },
    {
      value: "puja-room",
      label: "Dedicated puja room",
      subLabel: "A full room",
    },
    { value: "shelf", label: "Just a shelf", subLabel: "Open shelf or alcove" },
  ],
};

const Q4: Question<Occasion> = {
  key: "occasion",
  title: "What's the main reason for setting this up now?",
  subtitle: "अभी मंदिर सेट करने का मुख्य कारण?",
  options: [
    { value: "griha-pravesh", label: "New home (Griha Pravesh)" },
    { value: "daily", label: "Daily worship" },
    { value: "specific-puja", label: "Specific puja coming up" },
    { value: "birthday", label: "Family member's birthday" },
    { value: "mundan", label: "Mundan ceremony" },
    { value: "wedding", label: "Wedding preparation" },
    { value: "health", label: "Health / peace concern" },
    { value: "setup-properly", label: "Just want to set it up properly" },
  ],
};

const Q5: Question<LocationKey> = {
  key: "location",
  title: "Where are you located?",
  subtitle: "आप कहाँ रहते हैं?",
  options: [
    { value: "mehrauli", label: "Mehrauli" },
    { value: "chhatarpur", label: "Chhatarpur" },
    { value: "hauz-khas", label: "Hauz Khas" },
    { value: "green-park", label: "Green Park" },
    { value: "gk", label: "Greater Kailash" },
    { value: "lajpat-nagar", label: "Lajpat Nagar" },
    { value: "aiims", label: "AIIMS area" },
    { value: "gurgaon", label: "Gurgaon" },
    { value: "other-south-delhi", label: "Other South Delhi" },
    { value: "other-ncr", label: "Other Delhi NCR" },
  ],
};

const Q6: Question<PanditReview> = {
  key: "panditReview",
  title: "Would you like Pandit Ji to perform or review the setup?",
  subtitle: "क्या आप पंडित जी से परामर्श लेना चाहेंगे?",
  options: [
    { value: "in-person", label: "Yes — in-person at home" },
    { value: "call", label: "Yes — on a call / WhatsApp" },
    { value: "checklist-only", label: "Just send the checklist" },
    { value: "not-now", label: "Not now" },
  ],
};

const QUESTIONS = [Q1, Q2, Q3, Q4, Q5, Q6] as const;
const TOTAL_STEPS = QUESTIONS.length;

type Action =
  | { type: "SELECT"; key: AnswerKey; value: string }
  | { type: "BACK" }
  | { type: "RESTART" }
  | { type: "HYDRATE"; state: PlannerState };

const initialState: PlannerState = { step: 0, answers: {} };

function reducer(state: PlannerState, action: Action): PlannerState {
  switch (action.type) {
    case "SELECT": {
      const nextAnswers: PlannerAnswers = {
        ...state.answers,
        [action.key]: action.value,
      };
      return {
        answers: nextAnswers,
        step: Math.min(state.step + 1, TOTAL_STEPS),
      };
    }
    case "BACK":
      return { ...state, step: Math.max(state.step - 1, 0) };
    case "RESTART":
      return initialState;
    case "HYDRATE":
      return action.state;
    default:
      return state;
  }
}

function isValidStored(value: unknown): value is PlannerState {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<PlannerState>;
  return (
    typeof v.step === "number" &&
    v.step >= 0 &&
    v.step <= TOTAL_STEPS &&
    typeof v.answers === "object" &&
    v.answers !== null
  );
}

export function MandirPlanner() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (isValidStored(parsed)) {
        dispatch({ type: "HYDRATE", state: parsed });
      }
    } catch {
      // ignore corrupt storage
    }
  }, []);

  // Persist to localStorage on every change (except initial)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (state.step === 0 && Object.keys(state.answers).length === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota errors
    }
  }, [state]);

  const isResult = state.step >= TOTAL_STEPS;
  const currentQuestion = !isResult ? QUESTIONS[state.step] : null;
  const progressPct = Math.round(
    (Math.min(state.step, TOTAL_STEPS) / TOTAL_STEPS) * 100
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-muted shadow-sm overflow-hidden">
        {/* Progress bar */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between text-sm text-charcoal/60 mb-2">
            <span>
              {isResult
                ? "All done"
                : `Step ${state.step + 1} of ${TOTAL_STEPS}`}
            </span>
            <span>{progressPct}%</span>
          </div>
          <div
            className="h-2 bg-ivory rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-saffron transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Question or result placeholder */}
        <div className="p-6 sm:p-8">
          {currentQuestion ? (
            <QuestionScreen
              question={currentQuestion}
              selected={state.answers[currentQuestion.key]}
              onSelect={(value) =>
                dispatch({
                  type: "SELECT",
                  key: currentQuestion.key,
                  value,
                })
              }
            />
          ) : (
            <ResultCard answers={state.answers} />
          )}
        </div>

        {/* Footer actions */}
        <div className="border-t border-muted px-6 py-4 flex items-center justify-between bg-ivory/40">
          <button
            type="button"
            onClick={() => dispatch({ type: "BACK" })}
            disabled={state.step === 0}
            className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-charcoal disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Go to previous question"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESTART" })}
            className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 hover:text-charcoal"
            aria-label="Restart planner"
          >
            <RotateCcw className="w-4 h-4" />
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

interface QuestionScreenProps<V extends string> {
  question: Question<V>;
  selected: string | undefined;
  onSelect: (value: V) => void;
}

function QuestionScreen<V extends string>({
  question,
  selected,
  onSelect,
}: QuestionScreenProps<V>) {
  return (
    <fieldset>
      <legend className="block mb-1">
        <span className="block font-heading text-xl sm:text-2xl font-semibold text-charcoal">
          {question.title}
        </span>
        <span
          className="block text-sm text-charcoal/60 mt-1"
          lang="hi"
        >
          {question.subtitle}
        </span>
      </legend>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {question.options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              aria-pressed={isSelected}
              className={`text-left px-4 py-3 rounded-xl border transition-all flex items-start gap-3 ${
                isSelected
                  ? "border-saffron bg-saffron/10 ring-2 ring-saffron/40"
                  : "border-muted hover:border-saffron/60 hover:bg-ivory"
              }`}
            >
              <span
                className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border ${
                  isSelected
                    ? "bg-saffron border-saffron text-white"
                    : "border-charcoal/30 bg-white"
                }`}
                aria-hidden="true"
              >
                {isSelected && <Check className="w-3 h-3" />}
              </span>
              <span className="flex-1">
                <span className="block font-medium text-charcoal">
                  {option.label}
                </span>
                {option.subLabel && (
                  <span className="block text-xs text-charcoal/60 mt-0.5">
                    {option.subLabel}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-charcoal/50 inline-flex items-center gap-1">
        <ArrowRight className="w-3 h-3" />
        Tap an option to continue automatically.
      </p>
    </fieldset>
  );
}

const TIER_STYLES: Record<DirectionTier, { badge: string; ring: string; icon: string }> = {
  ideal: {
    badge: "bg-saffron text-white",
    ring: "ring-saffron/30",
    icon: "text-saffron",
  },
  auspicious: {
    badge: "bg-gold/80 text-charcoal",
    ring: "ring-gold/30",
    icon: "text-gold",
  },
  acceptable: {
    badge: "bg-muted text-charcoal",
    ring: "ring-muted",
    icon: "text-charcoal/70",
  },
  avoid: {
    badge: "bg-accent/15 text-accent",
    ring: "ring-accent/30",
    icon: "text-accent",
  },
  unknown: {
    badge: "bg-ivory-dark text-charcoal",
    ring: "ring-muted",
    icon: "text-charcoal/60",
  },
};

function ResultCard({ answers }: { answers: PlannerAnswers }) {
  const result = useMemo<PlannerResult>(() => composeResult(answers), [answers]);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showSamagri, setShowSamagri] = useState(false);
  const tierStyle = TIER_STYLES[result.direction.tier];

  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-saffron mb-3">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium">Your personalised plan</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal">
          Your Mandir &amp; Puja recommendation
        </h3>
      </div>

      {/* Direction verdict */}
      <section
        className={`p-5 rounded-xl bg-white border border-muted ring-1 ${tierStyle.ring} mb-4`}
        aria-labelledby="result-direction"
      >
        <div className="flex items-start gap-3">
          <Compass
            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tierStyle.icon}`}
            aria-hidden="true"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${tierStyle.badge}`}
              >
                Direction
              </span>
              <h4
                id="result-direction"
                className="font-heading text-lg font-semibold text-charcoal"
              >
                {result.direction.title}
              </h4>
            </div>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              {result.direction.note}
            </p>
            <button
              type="button"
              onClick={() => setShowAlternatives((s) => !s)}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-saffron hover:underline"
              aria-expanded={showAlternatives}
            >
              {showAlternatives ? (
                <>
                  Hide alternative directions <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Explore alternative directions{" "}
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
            {showAlternatives && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.alternatives.map((group) => {
                  const groupStyle = TIER_STYLES[group.tier];
                  return (
                    <div
                      key={group.tier}
                      className="p-3 rounded-lg bg-ivory border border-muted text-sm"
                    >
                      <span
                        className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1 ${groupStyle.badge}`}
                      >
                        {group.label}
                      </span>
                      <p className="text-charcoal/80">
                        {group.directions.join(" · ")}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recommended puja */}
      <section
        className="p-5 rounded-xl bg-white border border-muted mb-4"
        aria-labelledby="result-puja"
      >
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-saffron" aria-hidden="true" />
          <div className="flex-1">
            <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-saffron/10 text-saffron mb-1">
              Recommended puja
            </span>
            <h4
              id="result-puja"
              className="font-heading text-lg font-semibold text-charcoal mb-2"
            >
              {result.puja.primary.name}
            </h4>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              {result.puja.primary.description}
            </p>
            {result.puja.secondary && (
              <div className="mt-4 pt-4 border-t border-muted">
                <p className="text-xs font-medium text-charcoal/60 mb-1">
                  Often performed alongside
                </p>
                <p className="font-medium text-charcoal mb-1">
                  {result.puja.secondary.name}
                </p>
                <p className="text-sm text-charcoal/75 leading-relaxed">
                  {result.puja.secondary.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Space guidance */}
      <section
        className="p-5 rounded-xl bg-white border border-muted mb-4"
        aria-labelledby="result-space"
      >
        <div className="flex items-start gap-3">
          <Home className="w-5 h-5 mt-0.5 flex-shrink-0 text-saffron" aria-hidden="true" />
          <div className="flex-1">
            <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-saffron/10 text-saffron mb-1">
              Setup tips
            </span>
            <h4
              id="result-space"
              className="font-heading text-lg font-semibold text-charcoal mb-2"
            >
              {result.space.title}
            </h4>
            <ul className="space-y-1.5 text-sm text-charcoal/75">
              {result.space.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Samagri preview */}
      <section className="p-5 rounded-xl bg-white border border-muted mb-4">
        <button
          type="button"
          onClick={() => setShowSamagri((s) => !s)}
          aria-expanded={showSamagri}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-saffron/10 text-saffron mb-1">
              Samagri checklist
            </span>
            <h4 className="font-heading text-lg font-semibold text-charcoal">
              {showSamagri ? "Your samagri list" : "View samagri checklist"}
            </h4>
          </div>
          {showSamagri ? (
            <ChevronUp className="w-5 h-5 text-charcoal/60" />
          ) : (
            <ChevronDown className="w-5 h-5 text-charcoal/60" />
          )}
        </button>
        {showSamagri && (
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-charcoal/80">
            {result.samagri.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* PDF lead-gate */}
      <div className="mb-4">
        <SamagriPdfGate answers={answers} pujaName={result.puja.primary.name} />
      </div>

      {/* Location note */}
      <section className="p-4 rounded-xl bg-ivory border border-muted mb-6 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
          <p className="text-charcoal/80">{result.location.note}</p>
        </div>
      </section>

      {/* Primary CTA */}
      <div className="text-center mb-4">
        <LinkButton
          href={getWhatsAppLink(
            SITE_CONFIG.contact.primaryPhone,
            result.whatsappMessage
          )}
          variant="primary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Sparkles className="w-5 h-5" />
          Get this set up — message Pandit Ji
        </LinkButton>
      </div>

      {/* Confirm with Pandit Ji disclaimer */}
      <div className="p-4 rounded-lg bg-white border border-muted/60 flex items-start gap-3 text-sm text-charcoal/70">
        <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
        <p>
          This is general guidance based on common Vastu and Vedic traditions.
          For your specific kundli, home layout, or family tradition, please{" "}
          <Link
            href="/ask-pandit-ji"
            className="text-saffron hover:underline font-medium"
          >
            confirm with Pandit Ji
          </Link>
          .
        </p>
      </div>

      <p className="mt-4 text-xs text-charcoal/50 inline-flex items-center gap-1">
        <ShieldCheck className="w-3 h-3" />
        Your inputs are saved on this device — you can return any time.
      </p>
    </div>
  );
}
