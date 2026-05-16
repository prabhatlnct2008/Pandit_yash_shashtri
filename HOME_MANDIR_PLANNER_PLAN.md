# HOME_MANDIR_PLANNER_PLAN.md — Home Mandir & Puja Planner

## Goal
Ship a single, interactive `/home-mandir-puja-planner` page that:
- Retains users 2-3 minutes via a 6-step tool + 12 keyword-rich modules
- Absorbs 4 keyword clusters (mandir vastu, mandir-for-home, Shiv puja, pandit-near-me) without cannibalising existing pages
- Generates leads through (a) result-screen WhatsApp deep-link, (b) gated PDF samagri checklist, (c) sticky "Ask Pandit Ji" bar

Full strategic brief: see source spec (Sections 1-14 from product input).

---

## Phase Overview

| Phase | Focus | Track | Depends on |
|-------|-------|-------|-----------|
| Phase 1 | Tool MVP (route + planner + result) | Sequential | None |
| Phase 2 | SEO modules below tool | Mostly parallel | Phase 1 done |
| Phase 3 | SEO infrastructure (metadata, schema, sitemap, internal links) | Parallel | Phase 1 + at least 4 modules of Phase 2 |
| Phase 4 | Lead capture (PDF, sticky bar, exit-intent) | Parallel | Phase 1 |
| Phase 5 | Pandit-review pass + launch | Sequential | All above |

Ship after Phase 1 for early indexing — Phases 2-5 layer on top without breaking the URL.

---

## PHASE 1 — Tool MVP

### Step 1.1: Page scaffold + hero + disclaimer + footer CTA
- Create `src/app/home-mandir-puja-planner/page.tsx`
- Hero: H1, 1-line subhead, trust line ("Reviewed by Pandit Ji at Shiv Shakti Mandir, Mehrauli"), "Start Planner" anchor button
- Trust strip section (placeholder content)
- Disclaimer block component (reusable; mandatory on this page)
- Footer "Talk to Pandit Ji" CTA strip
- Page metadata (title, description, canonical, OG)
- No tool logic yet — only layout shell with anchor IDs ready

### Step 1.2: Planner component (6 questions, no result)
- New client component `src/components/planner/MandirPlanner.tsx`
- 6 questions per Section 8 of the brief
- Tap-only options (no typing); single-select per question
- Progress bar + back/next navigation
- Bilingual microcopy per question (English headline + Devanagari subhead)
- State stored in `useReducer` (no API; no submission yet)
- "Restart" button at last step
- localStorage persistence so result survives reload

### Step 1.3: Result card + logic
- Encode rules per brief Section 8 (direction scoring, deity→puja, size, occasion→puja, location routing)
- New file `src/lib/plannerLogic.ts` with pure functions: `scoreDirection`, `mapDeityToPuja`, `mapOccasionToPuja`, `composeResult`
- Result card UI: direction verdict, recommended puja, samagri preview, primary WhatsApp CTA with pre-filled message, "Confirm with Pandit Ji" disclaimer
- "Explore alternative directions" toggle (additional engagement time)
- WhatsApp deep-link uses existing `getWhatsAppLink` util from `src/lib/utils.ts`

### Step 1.4: Alternate filter routes
- `/mandir-vastu-finder` → loads planner with `?focus=vastu` (pre-selects emphasis on Q1 direction screen)
- `/shiv-puja-planner` → loads planner with `?focus=shivpuja` (pre-selects Q2=Shiv ji, jumps to Q4)
- Implement via Next.js `rewrites()` in `next.config.ts` OR as standalone route files that re-export the planner with a starter prop
- Both routes have their own metadata (different title tag entries) but canonical points to `/home-mandir-puja-planner`

---

## PHASE 2 — SEO Modules

Each module is a section component dropped into the planner page below the tool. Order matches the wireframe in Section 12 of the brief. Each ~400 words when written.

Modules flagged **[NEEDS PANDIT REVIEW]** must ship behind a content TODO marker; copy is drafted but the page can flag "Pandit Ji is reviewing this section" until signed off.

- Step 2.1: Module 1 — Find a trusted pandit nearby (operational; no review needed)
- Step 2.2: Module 2 — Mandir for home types/sizes (light review)
- Step 2.3: Module 3 — Mandir location as per vastu **[NEEDS PANDIT REVIEW]**
- Step 2.4: Module 4 — Gate, doors, idol placement (light review)
- Step 2.5: Module 5 — Shivling for home mandir **[NEEDS PANDIT REVIEW — mandatory]**
- Step 2.6: Module 6 — Shiv puja at home **[NEEDS PANDIT REVIEW — mandatory]**
- Step 2.7: Module 7 — Shiv & Shakti together **[NEEDS PANDIT REVIEW — mandatory]**
- Step 2.8: Module 8 — Famous Shiv Mandirs in Delhi (carousel; light fact-check)
- Step 2.9: Module 9 — Shiv Shakti Mandir, Mehrauli **[NEEDS PANDIT JI FACT-CHECK]**
- Step 2.10: Module 10 — Birthday/mundan/wedding pujas (light review)
- Step 2.11: Module 11 — Common questions about Shiv ji **[NEEDS PANDIT REVIEW]**
- Step 2.12: Module 12 — Home puja preparation checklist (light review)

---

## PHASE 3 — SEO Infrastructure

- Step 3.1: Page metadata refined (final title, description, OG image)
- Step 3.2: Schema markup — HowTo (mirrors planner logic), FAQPage (10 questions), LocalBusiness (extend with new areaServed and aggregateRating if available), Service schemas for Rudrabhishek/Griha Pravesh/Mahamrityunjay Jaap/Vastu Shanti, Organization + Person with Shiv Shakti Mandir affiliation
- Step 3.3: Sitemap update — add new routes to `next-sitemap.config.js` transform + manually update `public/sitemap.xml`
- Step 3.4: Internal links pass:
  - Homepage: hero secondary button "Try our Mandir & Puja Planner"
  - `/puja-services` top: "Not sure which puja? Try the Planner"
  - `/ask-pandit-ji` top: "Or use our Mandir Planner first"
  - All `/pandit/[location]` pages: contextual link inside content
- Step 3.5: Disclaimer block placement audit (already in 1.1, verify above-FAQ position)

---

## PHASE 4 — Lead capture

- Step 4.1: WhatsApp deep-link template library in `src/lib/whatsappTemplates.ts` — one template per CTA path (after-tool, shivling, occasion, etc.)
- Step 4.2: PDF samagri checklist — client-side generation via `window.print()` with a print-only stylesheet on a hidden `/home-mandir-puja-planner/checklist` route; OR use a lightweight `jspdf` if needed. Lead form gate: 3 fields (Name, WhatsApp, optional Pincode), no API yet — submission posts to WhatsApp deep-link and triggers download in same action
- Step 4.3: Sticky mobile bar variant for this page (overrides default StickyMobileCTA with "Ask Pandit Ji" + "Book Puja")
- Step 4.4: Exit-intent modal (desktop only; first visit only via localStorage flag) — "Save your result on WhatsApp before you go"
- Step 4.5: Image carousel for Module 8 — lightweight (CSS scroll-snap; no heavy library)

---

## PHASE 5 — Pandit-review pass + launch

- Step 5.1: Flag all `[NEEDS PANDIT REVIEW]` modules in a checklist comment at the top of each component file
- Step 5.2: Side-by-side review session with Pandit Ji — module 3, 5, 6, 7, 9, 11. Capture his corrections inline
- Step 5.3: Accessibility audit (keyboard nav for planner, focus rings, ARIA labels on radio-style buttons, alt text on every image)
- Step 5.4: Mobile QA on real device — completion time, tap targets, sticky bar overlap with tool, WhatsApp link opens correctly
- Step 5.5: GSC submission — Request Indexing on `/home-mandir-puja-planner` first, then the two alternate routes
- Step 5.6: Internal launch announcement (Pandit Ji can share on WhatsApp status / GBP post → real traffic signal)

---

## Risk register

| Risk | Mitigation |
|------|-----------|
| Religious content makes wrong assertions | All output uses "traditionally / many families / please confirm with Pandit Ji" softening. Mandatory review for modules 3, 5, 6, 7, 9, 11 |
| Google treats this as doorway/duplicate vs `/puja-services` | Page leads with a TOOL, not service descriptions. Modules target different clusters with their own H2s |
| `shiv shakti jiohotstar` and similar pop-culture queries dilute relevance | Never include this string anywhere on the page or in keyword targeting |
| Tool fatigue at 6 questions | Tap-only, single-select, progress bar, back-allowed, localStorage save. Each question ~15-20s |
| Lead form friction kills downloads | Only 3 fields; WhatsApp pre-fill keeps the path short; pincode is optional |
| Alternate routes (`/mandir-vastu-finder`, `/shiv-puja-planner`) trigger duplicate content | Both have canonical → `/home-mandir-puja-planner`; only the title/H1 differ via filter pre-selection |

---

## Out of scope (do NOT build)

- AI chatbot for spiritual Q&A (existing `/ask-pandit-ji` handles this; AI risk too high)
- DOB/birth-time/kundli capture on this page (separate page's job)
- AR mandir preview
- Cost/price estimator with hard numbers
- Disparaging or fear-based copy (against site's trust positioning)

---

## Success metrics (post-launch)

- Time on page (target: 2-3 min median for users who interact with the tool)
- Tool completion rate (Q1 → result; target: 40%+)
- WhatsApp CTA click rate from result screen (target: 25% of completions)
- PDF download form submissions (lead volume — track in GSC and CRM)
- Indexing status in GSC (target: indexed within 14 days of launch)
- Ranking for primary kw `mandir for home` and secondaries within 8-12 weeks
