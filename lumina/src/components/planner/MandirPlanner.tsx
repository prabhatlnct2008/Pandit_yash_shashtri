"use client";

import { useEffect, useReducer } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";
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
            <ResultPreview answers={state.answers} />
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

function ResultPreview({ answers }: { answers: PlannerAnswers }) {
  const whatsappMsg = buildWhatsAppMessage(answers);
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 text-saffron mb-3">
        <Sparkles className="w-5 h-5" />
        <span className="text-sm font-medium">Your inputs are saved</span>
      </div>
      <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
        Your personalised plan is coming up
      </h3>
      <p className="text-charcoal/70 leading-relaxed mb-6 max-w-xl mx-auto">
        We&apos;ve recorded your selections below. The full personalised mandir
        setup + recommended puja card will appear here in the next update.
        Meanwhile, you can already reach Pandit Ji with the context you&apos;ve
        provided.
      </p>

      <div className="text-left bg-ivory rounded-xl p-4 mb-6">
        <SummaryRow label="Mandir direction" value={answers.direction} />
        <SummaryRow label="Main deity" value={answers.deity} />
        <SummaryRow label="Space type" value={answers.space} />
        <SummaryRow label="Reason / occasion" value={answers.occasion} />
        <SummaryRow label="Location" value={answers.location} />
        <SummaryRow
          label="Pandit Ji review"
          value={answers.panditReview}
          last
        />
      </div>

      <LinkButton
        href={getWhatsAppLink(SITE_CONFIG.contact.primaryPhone, whatsappMsg)}
        variant="primary"
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Sparkles className="w-5 h-5" />
        Continue on WhatsApp with Pandit Ji
      </LinkButton>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string | undefined;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between text-sm py-2 ${
        last ? "" : "border-b border-muted/60"
      }`}
    >
      <span className="text-charcoal/60">{label}</span>
      <span className="font-medium text-charcoal">
        {value ? humanise(value) : "—"}
      </span>
    </div>
  );
}

function humanise(value: string): string {
  return value
    .split("-")
    .map((w) => (w === w.toUpperCase() ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function buildWhatsAppMessage(answers: PlannerAnswers): string {
  const parts: string[] = [
    "Namaste Pandit Ji, I used the Home Mandir & Puja Planner.",
  ];
  if (answers.direction) parts.push(`Mandir direction: ${humanise(answers.direction)}.`);
  if (answers.deity) parts.push(`Main deity: ${humanise(answers.deity)}.`);
  if (answers.space) parts.push(`Space: ${humanise(answers.space)}.`);
  if (answers.occasion) parts.push(`Reason: ${humanise(answers.occasion)}.`);
  if (answers.location) parts.push(`Location: ${humanise(answers.location)}.`);
  if (answers.panditReview)
    parts.push(`Preferred review: ${humanise(answers.panditReview)}.`);
  parts.push("Please guide me on next steps.");
  return parts.join(" ");
}
