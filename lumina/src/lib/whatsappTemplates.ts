import type { PlannerAnswers } from "@/components/planner/types";

const DIRECTION_LABEL: Record<string, string> = {
  NE: "North-East (Ishan Kona)",
  E: "East",
  N: "North",
  NW: "North-West",
  W: "West",
  SW: "South-West",
  S: "South",
  SE: "South-East",
  "not-sure": "Not yet decided",
};

const DEITY_LABEL: Record<string, string> = {
  shiv: "Shiv ji",
  "shiv-parivar": "Shiv Parivar",
  "ram-darbar": "Ram Darbar",
  krishna: "Krishna ji",
  devi: "Devi",
  multiple: "multiple deities",
  "help-decide": "your family deity (to be decided)",
};

const OCCASION_LABEL: Record<string, string> = {
  "griha-pravesh": "Griha Pravesh",
  daily: "daily worship",
  "specific-puja": "a specific upcoming puja",
  birthday: "a family member's birthday",
  mundan: "Mundan ceremony",
  wedding: "wedding preparation",
  health: "health and peace",
  "setup-properly": "setting up properly",
};

const LOCATION_LABEL: Record<string, string> = {
  mehrauli: "Mehrauli",
  chhatarpur: "Chhatarpur",
  "hauz-khas": "Hauz Khas",
  "green-park": "Green Park",
  gk: "Greater Kailash",
  "lajpat-nagar": "Lajpat Nagar",
  aiims: "the AIIMS area",
  gurgaon: "Gurgaon",
  "other-south-delhi": "South Delhi",
  "other-ncr": "Delhi NCR",
};

function label(map: Record<string, string>, key: string | undefined): string {
  if (!key) return "";
  return map[key] ?? key;
}

export const WA_TEMPLATES = {
  generic: () =>
    "Namaste Pandit Ji, I'd like to discuss a puja. Please guide me.",

  hero: () =>
    "Namaste Pandit Ji, I'd like to plan my home mandir and puja setup. Please guide me.",

  fromPlanner: (
    answers: PlannerAnswers,
    recommendedPujaName?: string
  ): string => {
    const lines = [
      "Namaste Pandit Ji,",
      "",
      "I used the Home Mandir & Puja Planner and got this recommendation:",
    ];
    if (answers.direction)
      lines.push(`• Mandir direction: ${label(DIRECTION_LABEL, answers.direction)}`);
    if (answers.deity)
      lines.push(`• Main deity: ${label(DEITY_LABEL, answers.deity)}`);
    if (answers.occasion)
      lines.push(`• Reason: ${label(OCCASION_LABEL, answers.occasion)}`);
    if (recommendedPujaName)
      lines.push(`• Recommended puja: ${recommendedPujaName}`);
    if (answers.location)
      lines.push(`• Location: ${label(LOCATION_LABEL, answers.location)}`);
    lines.push("", "Please guide me on the next steps.");
    return lines.join("\n");
  },

  fromPlannerWithLead: (
    answers: PlannerAnswers,
    recommendedPujaName: string | undefined,
    lead: { name?: string; whatsapp?: string; pincode?: string }
  ): string => {
    const lines = [
      `Namaste Pandit Ji,${lead.name ? ` this is ${lead.name}.` : ""}`,
      "",
      "I used the Home Mandir & Puja Planner and downloaded the samagri checklist.",
    ];
    if (answers.direction)
      lines.push(`• Mandir direction: ${label(DIRECTION_LABEL, answers.direction)}`);
    if (answers.deity)
      lines.push(`• Main deity: ${label(DEITY_LABEL, answers.deity)}`);
    if (answers.occasion)
      lines.push(`• Reason: ${label(OCCASION_LABEL, answers.occasion)}`);
    if (recommendedPujaName)
      lines.push(`• Recommended puja: ${recommendedPujaName}`);
    if (answers.location)
      lines.push(`• Location: ${label(LOCATION_LABEL, answers.location)}`);
    if (lead.pincode) lines.push(`• Pincode: ${lead.pincode}`);
    lines.push("", "Please guide me on the next steps.");
    return lines.join("\n");
  },

  bookRudrabhishek: () =>
    "Namaste Pandit Ji, I would like to book a Rudrabhishek at home. Please share availability and the samagri list.",

  bookOccasion: (occasion: string) =>
    `Namaste Pandit Ji, I want to plan a ${occasion} puja. Could you share what's typically involved and your availability?`,

  shivlingAtHome: () =>
    "Namaste Pandit Ji, I'd like to set up a Shivling at home and would like your guidance before I do.",

  shivShakti: () =>
    "Namaste Pandit Ji, I'd like to understand Shiv Shakti worship for our home mandir. Please guide me.",

  visitTemple: () =>
    "Namaste Pandit Ji, I'd like to visit Shiv Shakti Mandir or schedule a home puja. Please share details.",

  darshan: () =>
    "Namaste Pandit Ji, I'd like to arrange darshan and a small puja at one of the Delhi Shiv mandirs. Please guide me.",

  exitIntentSave: (resultSummary: string) =>
    `Namaste Pandit Ji, save my planner result:\n\n${resultSummary}\n\nI'll follow up shortly. Thank you.`,

  homePuja: () =>
    "Namaste Pandit Ji, I'm planning a home puja and would like to discuss preparation.",

  fromLocation: (locationName: string) =>
    `Hello Pandit Ji, I am from ${locationName} and would like to book a consultation/puja.`,
};

export type WaTemplateKey = keyof typeof WA_TEMPLATES;
