export type Direction =
  | "NE"
  | "E"
  | "N"
  | "NW"
  | "W"
  | "SW"
  | "S"
  | "SE"
  | "not-sure";

export type Deity =
  | "shiv"
  | "shiv-parivar"
  | "ram-darbar"
  | "krishna"
  | "devi"
  | "multiple"
  | "help-decide";

export type Space = "wall-mounted" | "floor-cabinet" | "puja-room" | "shelf";

export type Occasion =
  | "griha-pravesh"
  | "daily"
  | "specific-puja"
  | "birthday"
  | "mundan"
  | "wedding"
  | "health"
  | "setup-properly";

export type LocationKey =
  | "mehrauli"
  | "chhatarpur"
  | "hauz-khas"
  | "green-park"
  | "gk"
  | "lajpat-nagar"
  | "aiims"
  | "gurgaon"
  | "other-south-delhi"
  | "other-ncr";

export type PanditReview = "in-person" | "call" | "checklist-only" | "not-now";

export interface PlannerAnswers {
  direction?: Direction;
  deity?: Deity;
  space?: Space;
  occasion?: Occasion;
  location?: LocationKey;
  panditReview?: PanditReview;
}

export interface PlannerState {
  step: number; // 0..5 = questions Q1..Q6; 6 = result
  answers: PlannerAnswers;
}

export type AnswerKey = keyof PlannerAnswers;
