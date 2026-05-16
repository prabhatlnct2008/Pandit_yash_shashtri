import type {
  Deity,
  Direction,
  LocationKey,
  Occasion,
  PlannerAnswers,
  Space,
} from "@/components/planner/types";

export type DirectionTier =
  | "ideal"
  | "auspicious"
  | "acceptable"
  | "avoid"
  | "unknown";

export interface DirectionVerdict {
  tier: DirectionTier;
  title: string;
  note: string;
}

export interface PujaRecommendation {
  name: string;
  description: string;
  whyNote?: string;
}

export interface SpaceGuidance {
  title: string;
  tips: string[];
}

export interface LocationContext {
  note: string;
  isHomeBase: boolean;
}

export interface PlannerResult {
  direction: DirectionVerdict;
  alternatives: { tier: DirectionTier; label: string; directions: string[] }[];
  puja: {
    primary: PujaRecommendation;
    secondary?: PujaRecommendation;
  };
  space: SpaceGuidance;
  location: LocationContext;
  samagri: string[];
  whatsappMessage: string;
}

const DIRECTION_LABEL: Record<Direction, string> = {
  NE: "North-East (Ishan Kona)",
  E: "East",
  N: "North",
  NW: "North-West",
  W: "West",
  SW: "South-West",
  S: "South",
  SE: "South-East",
  "not-sure": "Not yet identified",
};

const DEITY_LABEL: Record<Deity, string> = {
  shiv: "Shiv ji",
  "shiv-parivar": "Shiv Parivar",
  "ram-darbar": "Ram Darbar",
  krishna: "Krishna ji",
  devi: "Devi",
  multiple: "multiple deities",
  "help-decide": "your chosen family deity",
};

const OCCASION_LABEL: Record<Occasion, string> = {
  "griha-pravesh": "Griha Pravesh",
  daily: "daily worship",
  "specific-puja": "a specific upcoming puja",
  birthday: "a family member's birthday",
  mundan: "Mundan ceremony",
  wedding: "wedding preparation",
  health: "health and peace",
  "setup-properly": "setting up your mandir properly",
};

const LOCATION_LABEL: Record<LocationKey, string> = {
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

export function getDirectionVerdict(
  direction: Direction | undefined
): DirectionVerdict {
  switch (direction) {
    case "NE":
      return {
        tier: "ideal",
        title: "Most auspicious — Ishan Kona",
        note:
          "The North-East corner is traditionally considered the most sacred zone for a home mandir. Idols are placed facing east or west, with the worshipper facing east during puja.",
      };
    case "E":
    case "N":
      return {
        tier: "auspicious",
        title: `Auspicious alternative — ${DIRECTION_LABEL[direction]}`,
        note:
          "Both East and North are considered auspicious alternatives to the Ishan Kona. East aligns with the rising sun; North is associated with prosperity. Keep the mandir on a clean, raised surface with no clutter behind.",
      };
    case "NW":
    case "W":
      return {
        tier: "acceptable",
        title: `Acceptable with care — ${DIRECTION_LABEL[direction]}`,
        note:
          "These directions are usable when North-East and East are unavailable. Keep the mandir on a slightly raised platform, ensure the wall behind is not shared with a bathroom or kitchen, and maintain about an inch of clearance from the wall.",
      };
    case "S":
    case "SE":
    case "SW":
      return {
        tier: "avoid",
        title: `Generally avoided — ${DIRECTION_LABEL[direction]}`,
        note:
          "South, South-East, and South-West are traditionally avoided for home mandirs. If this is the only option you have, soften with a curtain or screen, avoid placing the mandir against a bedroom or bathroom wall, and please consult Pandit Ji for a personalised remedy.",
      };
    case "not-sure":
      return {
        tier: "unknown",
        title: "Find your direction first",
        note:
          "Open your phone's compass app and face the corner where you'd like the mandir. If it points to North-East, that's the most auspicious choice. East or North are good alternatives. South-facing corners are best avoided.",
      };
    default:
      return {
        tier: "unknown",
        title: "Direction not selected",
        note: "Please complete the planner to receive direction guidance.",
      };
  }
}

const DIRECTION_TIER_GROUPS: PlannerResult["alternatives"] = [
  { tier: "ideal", label: "Most auspicious", directions: ["North-East (Ishan Kona)"] },
  { tier: "auspicious", label: "Auspicious alternatives", directions: ["East", "North"] },
  { tier: "acceptable", label: "Acceptable with care", directions: ["North-West", "West"] },
  { tier: "avoid", label: "Generally avoided", directions: ["South", "South-East", "South-West"] },
];

export function getDirectionAlternatives() {
  return DIRECTION_TIER_GROUPS;
}

export function getRecommendedPuja(
  deity: Deity | undefined,
  occasion: Occasion | undefined
): { primary: PujaRecommendation; secondary?: PujaRecommendation } {
  // Occasion-driven recommendation takes priority for life events
  if (occasion === "griha-pravesh") {
    return {
      primary: {
        name: "Griha Pravesh + Vastu Shanti",
        description:
          "A full Griha Pravesh ceremony performed before moving in, traditionally followed by a Vastu Shanti to consecrate the home.",
      },
      secondary:
        deity === "shiv" || deity === "shiv-parivar"
          ? {
              name: "Rudrabhishek (first puja in the new mandir)",
              description:
                "Many families perform Rudrabhishek as the first puja in their new mandir for blessings of peace and prosperity.",
            }
          : undefined,
    };
  }
  if (occasion === "wedding") {
    return {
      primary: {
        name: "Ganesh Puja + Navgraha Shanti",
        description:
          "Ganesh Puja is traditionally performed first as the remover of obstacles, followed by Navgraha Shanti to balance planetary influences before the wedding.",
      },
    };
  }
  if (occasion === "mundan") {
    return {
      primary: {
        name: "Mundan Sanskar",
        description:
          "A traditional samskara for the child's first hair-shaving ceremony. Often performed at the family deity's temple, but can be conducted at home with the right preparation.",
      },
    };
  }
  if (occasion === "birthday") {
    return {
      primary: {
        name: "Ayushya Havan",
        description:
          "A traditional birthday havan invoking long life and well-being. Some families also visit a temple for a short abhishek on the birthday.",
      },
    };
  }
  if (occasion === "health") {
    return {
      primary: {
        name: "Mahamrityunjay Jaap",
        description:
          "Traditionally performed for health, healing, and protection. The traditional count is 1.25 lakh repetitions; a shorter 108-count version is appropriate as daily family practice.",
      },
      secondary:
        deity === "shiv" || deity === "shiv-parivar"
          ? {
              name: "Rudrabhishek",
              description:
                "An abhishek of the Shivling with water, milk, and honey — traditionally performed alongside Mahamrityunjay for added blessings.",
            }
          : undefined,
    };
  }
  if (occasion === "specific-puja") {
    return {
      primary: {
        name: "Custom puja planning",
        description:
          "Since you have a specific puja in mind, please share the details on WhatsApp — Pandit Ji will plan the vidhi, samagri, and muhurat precisely for you.",
      },
    };
  }

  // Daily / setup-properly — lead with the deity
  switch (deity) {
    case "shiv":
      return {
        primary: {
          name: "Rudrabhishek",
          description:
            "An abhishek of the Shivling with water, milk, honey, and bel patra — traditionally performed for peace and well-being. Can be conducted on Mondays, Pradosh, or Mahashivratri.",
        },
        secondary: {
          name: "Mahamrityunjay Jaap",
          description:
            "Traditionally performed alongside Rudrabhishek for protection and health.",
        },
      };
    case "shiv-parivar":
      return {
        primary: {
          name: "Rudrabhishek + Ganesh Archana",
          description:
            "Rudrabhishek for Shiv ji performed alongside a Ganesh archana — a natural fit for a Shiv Parivar mandir where Shiv, Parvati, and Ganesh are worshipped together.",
        },
      };
    case "ram-darbar":
      return {
        primary: {
          name: "Sundarkand Path",
          description:
            "A traditional recitation from the Ramayana, often performed on Tuesdays or Saturdays, and especially auspicious for a Ram Darbar mandir.",
        },
      };
    case "krishna":
      return {
        primary: {
          name: "Satyanarayan Katha",
          description:
            "A devotional puja honouring Lord Vishnu — appropriate for a Krishna mandir and traditionally performed on Purnima or major family occasions.",
        },
      };
    case "devi":
      return {
        primary: {
          name: "Durga Saptashati Path",
          description:
            "A recitation of the 700 verses honouring Devi Durga — traditionally performed during Navratri and for Devi mandirs at home.",
        },
      };
    case "multiple":
      return {
        primary: {
          name: "Satyanarayan Katha",
          description:
            "Satyanarayan Katha is a universal choice that honours all deities and works well for mandirs with multiple murtis.",
        },
      };
    case "help-decide":
      return {
        primary: {
          name: "Let's pick together",
          description:
            "Pandit Ji can help you choose the right deity setup and starter puja for your family — common starter options include a Shiv–Parivar mandir or a Satyanarayan Katha. Share a few details on WhatsApp.",
        },
      };
    default:
      return {
        primary: {
          name: "Daily mandir routine",
          description:
            "A simple daily routine: morning lamp, fresh water, akshat and flowers; light incense; one mantra recitation appropriate to your family deity.",
        },
      };
  }
}

export function getSpaceGuidance(space: Space | undefined): SpaceGuidance {
  switch (space) {
    case "wall-mounted":
      return {
        title: "Wall-mounted mandir",
        tips: [
          "Hang at chest level so idols are seen comfortably while seated",
          "Use the North-East or East wall where possible",
          "Maintain about an inch of clearance between the mandir and the wall",
          "Avoid walls shared with a bathroom, kitchen, or staircase",
        ],
      };
    case "floor-cabinet":
      return {
        title: "Floor cabinet mandir",
        tips: [
          "Place on a clean, raised platform — do not set directly on the floor",
          "Cabinet doors should open fully without obstruction",
          "Two-shutter doors are traditional and help maintain sanctity",
          "Keep at least 6 inches of clearance from surrounding furniture",
        ],
      };
    case "puja-room":
      return {
        title: "Dedicated puja room",
        tips: [
          "Ground floor is traditionally preferred",
          "No shared wall with a bathroom or toilet",
          "Idols should not face each other directly",
          "Adequate ventilation for diya and havan smoke",
        ],
      };
    case "shelf":
      return {
        title: "Open shelf or alcove",
        tips: [
          "Acceptable as a minimal setup — consider upgrading to a wall-mounted unit later",
          "Cover with a clean cloth between pujas to keep the space sacred",
          "Avoid placing other household items on the same shelf",
          "Same direction rules apply — prefer North-East or East",
        ],
      };
    default:
      return {
        title: "Mandir space",
        tips: [
          "A clean, raised surface is the basic requirement for any home mandir",
        ],
      };
  }
}

export function getLocationContext(
  location: LocationKey | undefined
): LocationContext {
  if (!location) {
    return {
      note: "Pandit Ji serves South Delhi and Gurgaon.",
      isHomeBase: false,
    };
  }
  const isHomeBase = location === "mehrauli" || location === "chhatarpur";
  if (isHomeBase) {
    return {
      note: `${LOCATION_LABEL[location]} is Pandit Ji's home base — same-day or next-day pujas are often possible.`,
      isHomeBase: true,
    };
  }
  return {
    note: `Pandit Ji regularly serves ${LOCATION_LABEL[location]} from his base at Shiv Shakti Mandir, Mehrauli.`,
    isHomeBase: false,
  };
}

const BASE_SAMAGRI = [
  "Clean cloth for the mandir surface (red or yellow)",
  "Copper or brass kalash with water",
  "Diya (oil lamp) with cotton wicks and ghee or sesame oil",
  "Akshat (rice mixed with a pinch of turmeric)",
  "Roli / kumkum",
  "Fresh flowers (genda or rose)",
  "Fruits and prasad",
  "Incense sticks (agarbatti) or dhoop",
  "Camphor for aarti",
];

const PUJA_SAMAGRI_ADDITIONS: Record<string, string[]> = {
  Rudrabhishek: ["Ganga jal", "Milk", "Honey", "Ghee", "Curd", "Bel patra"],
  "Griha Pravesh + Vastu Shanti": ["Kalash with mango leaves", "Coconut", "Nava-grain (9 grains)", "Pancha-pallava (5 leaves)"],
  "Ganesh Puja + Navgraha Shanti": ["Durva grass", "Modak (sweet)", "9 small kalash for navagrahas"],
  Mahamrityunjay: ["Rudraksha mala", "Bel patra", "White flowers"],
  "Mundan Sanskar": ["Coconut", "Small towel for the child", "Sweet offerings"],
  "Ayushya Havan": ["Havan samagri (mixed)", "Ghee", "Til (sesame)", "Jau (barley)"],
  "Durga Saptashati Path": ["Red cloth and chunni", "Sindoor", "Coconut", "Red flowers"],
  "Sundarkand Path": ["Hanuman ji's chola samagri", "Boondi prasad"],
};

export function getSamagri(pujaName: string): string[] {
  // Match by puja-name prefix to be tolerant of variations
  const matchKey = Object.keys(PUJA_SAMAGRI_ADDITIONS).find((k) =>
    pujaName.toLowerCase().includes(k.toLowerCase())
  );
  const additions = matchKey ? PUJA_SAMAGRI_ADDITIONS[matchKey] : [];
  return [...BASE_SAMAGRI, ...additions];
}

function buildWhatsAppMessage(
  answers: PlannerAnswers,
  result: Omit<PlannerResult, "whatsappMessage">
): string {
  const directionText = answers.direction
    ? DIRECTION_LABEL[answers.direction]
    : "not yet decided";
  const deityText = answers.deity ? DEITY_LABEL[answers.deity] : "not yet decided";
  const occasionText = answers.occasion
    ? OCCASION_LABEL[answers.occasion]
    : "general setup";
  const locationText = answers.location
    ? LOCATION_LABEL[answers.location]
    : "South Delhi / Gurgaon";

  const lines = [
    "Namaste Pandit Ji,",
    "",
    "I used the Home Mandir & Puja Planner and got this recommendation:",
    `• Mandir direction: ${directionText}`,
    `• Main deity: ${deityText}`,
    `• Reason: ${occasionText}`,
    `• Recommended puja: ${result.puja.primary.name}`,
    `• Location: ${locationText}`,
    "",
    "Please guide me on the next steps.",
  ];
  return lines.join("\n");
}

export function composeResult(answers: PlannerAnswers): PlannerResult {
  const direction = getDirectionVerdict(answers.direction);
  const alternatives = getDirectionAlternatives();
  const puja = getRecommendedPuja(answers.deity, answers.occasion);
  const space = getSpaceGuidance(answers.space);
  const location = getLocationContext(answers.location);
  const samagri = getSamagri(puja.primary.name);

  const partial: Omit<PlannerResult, "whatsappMessage"> = {
    direction,
    alternatives,
    puja,
    space,
    location,
    samagri,
  };

  return {
    ...partial,
    whatsappMessage: buildWhatsAppMessage(answers, partial),
  };
}
