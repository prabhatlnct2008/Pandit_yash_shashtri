# PHASES.md - Development Roadmap

## Phase Overview

| Phase | Focus | Tracks | Dependencies |
|-------|-------|--------|--------------|
| Phase 1 | Foundation | Parallel | None |
| Phase 2 | Core Pages | Sequential | Phase 1 |
| Phase 3 | Location SEO | Parallel | Phase 2 |
| Phase 4 | Polish & Launch | Sequential | Phase 3 |

---

## PHASE 1: FOUNDATION (Parallel Tracks)

### Track 1A: Project Setup
- [x] Initialize Next.js 14 with TypeScript
- [x] Configure Tailwind CSS with design tokens
- [x] Install dependencies (Shadcn/UI, Framer Motion, Lucide)
- [x] Set up folder structure
- [x] Configure next-sitemap

### Track 1B: Design System
- [x] Define color palette in tailwind.config.ts
- [x] Configure typography (Playfair Display + Inter)
- [x] Set up spacing and component tokens
- [x] Create base component styles

### Track 1C: SEO Infrastructure
- [x] Create JsonLd wrapper component
- [x] Build LocalBusiness schema component
- [x] Build Person schema component
- [x] Build Service schema component
- [x] Build FAQPage schema component
- [x] Build BreadcrumbList schema component
- [x] Create metadata generation utilities

**Deliverables:**
- Working Next.js project
- Configured design system
- Reusable SEO components

---

## PHASE 2: CORE PAGES (Sequential)

### Step 2.1: Layout Components
- [x] Header (sticky, responsive)
- [x] Footer (with contact info, links)
- [x] StickyMobileCTA component
- [x] Root layout with global schemas

### Step 2.2: Homepage
- [x] Hero section with Sanskrit invocation
- [x] Trust strip (Google-rated, temple, location)
- [x] Quick consultation cards
- [x] Puja services preview
- [x] Trust & proof section
- [x] FAQ section for schema
- [x] All CTAs wired

### Step 2.3: Astrology Consultation Page
- [x] Consultation options cards
- [x] Service details
- [x] Booking CTA integration
- [x] Service schema markup

### Step 2.4: Puja Services Page
- [x] Service listing (11 puja types)
- [x] Service cards with descriptions
- [x] Location options (Home, Temple, Office)
- [x] Booking flow

### Step 2.5: Ask Pandit Ji Page
- [x] Question submission form
- [x] Sample Q&A content (SEO seed)
- [x] FAQ schema integration
- [x] Call-to-action for consultation

### Step 2.6: Contact Page
- [x] Enquiry form
- [x] Contact information
- [x] Service area map
- [x] Direct call/WhatsApp buttons

**Deliverables:**
- All 5 core pages complete
- Full schema markup
- Internal linking implemented

---

## PHASE 3: LOCATION SEO PAGES (Parallel)

### All Location Pages (Template-Based)
Each page includes:
- [x] Unique H1 with location keyword
- [x] Location-specific content
- [x] Popular services in area
- [x] Trust signals
- [x] CTAs to book/consult
- [x] LocalBusiness schema with geo
- [x] FAQ schema

### Location Pages:
- [x] /pandit/chhatarpur/
- [x] /pandit/mehrauli/
- [x] /pandit/aiims-delhi/
- [x] /pandit/green-park/
- [x] /pandit/hauz-khas/
- [x] /pandit/panchsheel-enclave/
- [x] /pandit/greater-kailash-gk1-gk2/
- [x] /pandit/lajpat-nagar/
- [x] /pandit/gurgaon/

**Deliverables:**
- 9 location-optimized pages
- Dynamic routing implemented
- Unique content per location

---

## PHASE 4: POLISH & LAUNCH (Sequential)

### Step 4.1: Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize images (sizes, formats)
- [ ] Preload critical assets
- [ ] Test Core Web Vitals

### Step 4.2: SEO Verification
- [ ] Verify all meta tags
- [ ] Test schema with Google Rich Results
- [ ] Check internal link integrity
- [ ] Validate sitemap.xml
- [ ] Test robots.txt

### Step 4.3: Final Testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Form submission testing
- [ ] Accessibility audit

### Step 4.4: Launch Preparation
- [ ] Configure next-sitemap output
- [ ] Set up 301 redirects (if migrating)
- [ ] Prepare Open Graph images
- [ ] Submit sitemap to Google Search Console

**Deliverables:**
- Production-ready website
- All SEO elements verified
- Performance targets met

---

## Parallel vs Sequential Logic

### Why Parallel in Phase 1?
- Project setup, design system, and SEO infrastructure have no dependencies
- Can be developed simultaneously by different modules

### Why Sequential in Phase 2?
- Layout must exist before pages
- Homepage establishes patterns for other pages
- Each page may inform improvements to shared components

### Why Parallel in Phase 3?
- All location pages use same template
- No dependencies between location pages
- Can generate all simultaneously

### Why Sequential in Phase 4?
- Performance optimization affects testing
- SEO verification requires complete pages
- Final testing depends on all optimizations

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Content gaps | Use SEO-informed placeholder copy |
| Performance issues | Progressive image loading, minimal JS |
| Schema errors | Validate with Google's testing tool |
| Mobile UX issues | Mobile-first design approach |
| Slow page loads | Server Components, edge caching |

---

## Success Metrics

### Technical
- Lighthouse Performance: 90+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 95+
- Core Web Vitals: All Green

### SEO
- All pages indexed within 2 weeks
- Rich snippets appearing within 4 weeks
- Local pack visibility within 8 weeks

### Business
- Consultation form submissions
- Phone call clicks
- WhatsApp message initiations
