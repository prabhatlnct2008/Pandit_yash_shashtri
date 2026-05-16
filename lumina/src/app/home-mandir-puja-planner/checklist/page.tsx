import { Metadata } from "next";
import { ChecklistPrintable } from "./ChecklistPrintable";

export const metadata: Metadata = {
  title: "Your Home Mandir & Puja Checklist | Pandit Ji",
  description:
    "Your personalised samagri checklist and puja plan from Pandit Yash Shastri's Home Mandir & Puja Planner.",
  robots: {
    index: false, // page is dynamic to the user's localStorage; no SEO value
    follow: false,
  },
};

export default function ChecklistPage() {
  return <ChecklistPrintable />;
}
