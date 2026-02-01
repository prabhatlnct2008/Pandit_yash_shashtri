# PLANNING.md - Pandit Yash Shastri Premium Website

## Project Overview
Building a high-trust, high-conversion, SEO-first premium spiritual guidance platform for Pandit Yash Shastri serving South Delhi and Gurgaon.

---

## Tech Stack

### Core Framework
- **Next.js 14+** (App Router) - Server-first rendering for optimal SEO
- **TypeScript** - Type safety and better developer experience
- **React 18** - Latest React features with Server Components

### Styling & UI
- **Tailwind CSS 3.4+** - Utility-first CSS with custom design tokens
- **Shadcn/UI** - Accessible, customizable component library
- **Framer Motion** - Lightweight, performant animations
- **Lucide React** - Clean, consistent iconography

### SEO & Performance
- **next-sitemap** - Automated sitemap generation
- **Custom JSON-LD components** - Structured data for rich snippets
- **next/image** - Optimized image loading with WebP/AVIF
- **next/font** - Zero-layout-shift font loading

---

## Project Architecture

```
pandit-yash-shastri/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with global schema
│   │   ├── page.tsx                   # Homepage
│   │   ├── astrology-consultation/
│   │   │   └── page.tsx
│   │   ├── puja-services/
│   │   │   └── page.tsx
│   │   ├── ask-pandit-ji/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── pandit/
│   │       └── [location]/
│   │           └── page.tsx           # Dynamic location pages
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── StickyMobileCTA.tsx
│   │   ├── seo/
│   │   │   ├── JsonLd.tsx             # Schema markup wrapper
│   │   │   ├── LocalBusinessSchema.tsx
│   │   │   ├── PersonSchema.tsx
│   │   │   ├── ServiceSchema.tsx
│   │   │   ├── FAQSchema.tsx
│   │   │   └── BreadcrumbSchema.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ConsultationCards.tsx
│   │   │   ├── PujaServices.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   └── AskPanditJi.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Form.tsx
│   │       └── ... (Shadcn components)
│   ├── lib/
│   │   ├── constants.ts               # Site-wide constants
│   │   ├── locations.ts               # Location data
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── tailwind.config.ts
├── next.config.js
└── next-sitemap.config.js
```

---

## Component Hierarchy

### Layout Components (Server Components)
```
RootLayout
├── Header (sticky)
│   ├── Logo/Brand
│   ├── Navigation
│   └── CTAButtons (Quick Consult, Call Now)
├── Main Content
│   └── [Page Content]
├── StickyMobileCTA (mobile-only)
└── Footer
    ├── Contact Info
    ├── Quick Links
    └── Location Links
```

### Page Component Structure
Each page follows this semantic structure:
```html
<main>
  <article>
    <header>
      <h1>Primary Keyword Heading</h1>
    </header>
    <section aria-labelledby="section-id">
      <!-- Content -->
    </section>
  </article>
  <aside>
    <!-- Related content, CTAs -->
  </aside>
</main>
```

---

## Design Tokens (Tailwind Config)

```typescript
// Color Palette
colors: {
  saffron: {
    DEFAULT: '#7A1E1E',
    light: '#9A3E3E',
    dark: '#5A0E0E'
  },
  gold: {
    DEFAULT: '#C9A24D',
    light: '#D9B26D',
    dark: '#A9822D'
  },
  ivory: {
    DEFAULT: '#FFF9F2',
    dark: '#F5EDE5'
  },
  charcoal: '#1C1C1C',
  muted: '#E8DCC8',
  accent: '#1E7F43' // WhatsApp green
}

// Typography
fontFamily: {
  heading: ['Playfair Display', 'serif'],
  body: ['Inter', 'sans-serif']
}

// Font Sizes
fontSize: {
  'h1-desktop': ['3.25rem', { lineHeight: '1.2' }],  // 52px
  'h1-mobile': ['2.25rem', { lineHeight: '1.2' }],   // 36px
  'h2': ['2rem', { lineHeight: '1.3' }],             // 32px
  'h3': ['1.375rem', { lineHeight: '1.4' }],         // 22px
  'body': ['1.125rem', { lineHeight: '1.7' }]        // 18px
}
```

---

## Data Flow

### Contact Form Flow
```
User Input → Client Validation → Server Action →
Email Notification / Database Store → Success Response
```

### Ask Pandit Ji Flow
```
Question Submission → Server Validation →
Store in Database → Admin Review →
Publish with Answer → SEO Indexing
```

---

## Performance Targets (Core Web Vitals)

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Hero image preload, font preload |
| FID | < 100ms | Minimal client JS, Server Components |
| CLS | < 0.1 | Reserved image dimensions, font-display: swap |
| INP | < 200ms | Event delegation, debounced handlers |

---

## Accessibility Standards

- WCAG 2.1 AA compliance
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios > 4.5:1
- Focus indicators visible
- Screen reader optimized

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)
