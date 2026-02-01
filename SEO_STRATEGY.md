# SEO STRATEGY - Pandit Yash Shastri

## Executive Summary
This document outlines the comprehensive SEO strategy for Pandit Yash Shastri's premium spiritual guidance platform. The strategy focuses on local SEO dominance in South Delhi and Gurgaon, establishing topical authority through Q&A content, and capturing high-intent conversion keywords.

---

## I. TARGET KEYWORD MATRIX

### Primary Keywords (High Intent)
| Keyword | Search Volume | Difficulty | Target Page |
|---------|--------------|------------|-------------|
| pandit in south delhi | High | Medium | Homepage |
| astrologer in south delhi | High | Medium | /astrology-consultation/ |
| pandit for puja near me | High | Low | /puja-services/ |
| pandit in gurgaon | High | Medium | Homepage, /pandit/gurgaon/ |
| kundli reading south delhi | Medium | Low | /astrology-consultation/ |

### Secondary Keywords (Informational + Transactional)
| Keyword | Intent | Target Page |
|---------|--------|-------------|
| griha pravesh puja pandit | Transactional | /puja-services/ |
| satyanarayan katha at home | Transactional | /puja-services/ |
| marriage kundli matching | Transactional | /astrology-consultation/ |
| best pandit for wedding | Transactional | /puja-services/ |
| navgraha shanti puja cost | Informational | /puja-services/ |

### Long-Tail Keywords (Q&A Content)
| Keyword | Target Content |
|---------|----------------|
| what to do before griha pravesh | Ask Pandit Ji |
| how to check manglik dosha | Ask Pandit Ji |
| shubh muhurat for new business | Ask Pandit Ji |
| remedies for pitru dosha | Ask Pandit Ji |
| difference between kundli and horoscope | Ask Pandit Ji |

### Location Keywords (Local SEO)
| Location | Primary Keyword | URL |
|----------|-----------------|-----|
| Chhatarpur | pandit in chhatarpur delhi | /pandit/chhatarpur/ |
| Mehrauli | pandit in mehrauli | /pandit/mehrauli/ |
| AIIMS Delhi | pandit near aiims delhi | /pandit/aiims-delhi/ |
| Green Park | pandit in green park delhi | /pandit/green-park/ |
| Hauz Khas | pandit in hauz khas | /pandit/hauz-khas/ |
| Panchsheel Enclave | pandit in panchsheel enclave | /pandit/panchsheel-enclave/ |
| Greater Kailash | pandit in gk1 gk2 delhi | /pandit/greater-kailash-gk1-gk2/ |
| Lajpat Nagar | pandit in lajpat nagar | /pandit/lajpat-nagar/ |
| Gurgaon | pandit in gurgaon | /pandit/gurgaon/ |

---

## II. URL STRUCTURE

### URL Hierarchy
```
https://pandityashshastri.com/
├── /astrology-consultation/
├── /puja-services/
├── /ask-pandit-ji/
├── /contact/
└── /pandit/
    ├── /chhatarpur/
    ├── /mehrauli/
    ├── /aiims-delhi/
    ├── /green-park/
    ├── /hauz-khas/
    ├── /panchsheel-enclave/
    ├── /greater-kailash-gk1-gk2/
    ├── /lajpat-nagar/
    └── /gurgaon/
```

### URL Best Practices Applied
- Lowercase, hyphenated slugs
- No trailing parameters
- Canonical URLs set
- 301 redirects for any changes
- Max 3 directory levels

---

## III. META TITLES & DESCRIPTIONS

### Homepage (/)
```
Title: Pandit & Astrologer in South Delhi & Gurgaon | Pandit Yash Shastri
Description: Trusted Pandit and Astrologer in South Delhi & Gurgaon. Quick astrology consultation, home puja, muhurat guidance & Vedic rituals. Book your consultation today.
```

### Astrology Consultation (/astrology-consultation/)
```
Title: Astrology Consultation in South Delhi | Kundli Reading | Pandit Yash Shastri
Description: Get personalized astrology consultation from experienced Vedic astrologer. Kundli reading, horoscope analysis, marriage matching & dosha remedies. Book quick consultation now.
```

### Puja Services (/puja-services/)
```
Title: Puja Services at Home in South Delhi & Gurgaon | Pandit Yash Shastri
Description: Professional pandit for home puja in South Delhi & Gurgaon. Griha Pravesh, Satyanarayan Katha, Rudrabhishek, wedding rituals & more. Performed with shuddh vidhi.
```

### Ask Pandit Ji (/ask-pandit-ji/)
```
Title: Ask Pandit Ji - Vedic & Astrology Questions Answered | Free Guidance
Description: Have questions about puja, astrology, muhurat or Vedic rituals? Ask Pandit Yash Shastri directly. Get authentic answers rooted in traditional wisdom.
```

### Contact (/contact/)
```
Title: Contact Pandit Yash Shastri | Book Consultation | South Delhi & Gurgaon
Description: Contact Pandit Yash Shastri for astrology consultation or puja booking. Serving South Delhi, Gurgaon & nearby areas. Call now or send enquiry online.
```

### Location Pages Template
```
Title: Trusted Pandit & Astrologer in [Location] | Pandit Yash Shastri
Description: Looking for a reliable pandit in [Location]? Pandit Yash Shastri offers home puja, astrology consultation & Vedic rituals. Trusted by [Location] families.
```

---

## IV. SCHEMA MARKUP PLAN

### Site-Wide Schemas

#### 1. LocalBusiness Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pandit Yash Shastri",
  "image": "https://pandityashshastri.com/images/pandit-yash-shastri.jpg",
  "description": "Trusted Pandit and Astrologer serving South Delhi and Gurgaon for home pujas, astrology consultations, and Vedic rituals.",
  "@id": "https://pandityashshastri.com/#localbusiness",
  "url": "https://pandityashshastri.com",
  "telephone": "+91-9716684871",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shiv Shakti Mandir, Ward No. 6, Gandhi Colony",
    "addressLocality": "Mehrauli",
    "addressRegion": "New Delhi",
    "postalCode": "110030",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5175,
    "longitude": 77.1855
  },
  "areaServed": [
    {"@type": "City", "name": "South Delhi"},
    {"@type": "City", "name": "Gurgaon"}
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "21:00"
  }
}
```

#### 2. Person Schema (Homepage, About sections)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Pandit Yash Shastri",
  "jobTitle": "Vedic Pandit & Astrologer",
  "description": "Experienced Vedic Pandit associated with Shiv Shakti Mandir, Mehrauli. Specializes in astrology consultations and traditional puja services.",
  "worksFor": {
    "@type": "Organization",
    "name": "Shiv Shakti Mandir"
  },
  "knowsAbout": ["Vedic Astrology", "Kundli Reading", "Hindu Rituals", "Puja Services", "Vastu Shastra"],
  "sameAs": ["https://share.google/7zlaYzGkyVLNZYd7w"]
}
```

#### 3. Service Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Astrology Consultation",
  "provider": {
    "@type": "Person",
    "name": "Pandit Yash Shastri"
  },
  "areaServed": ["South Delhi", "Gurgaon"],
  "description": "Personal astrology consultation including kundli reading, horoscope analysis, and Vedic remedies."
}
```

#### 4. FAQPage Schema (Homepage, Ask Pandit Ji, Location Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Pandit Yash Shastri offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pandit Yash Shastri offers astrology consultation, kundli reading, marriage matchmaking, and various puja services including Griha Pravesh, Satyanarayan Katha, and Rudrabhishek."
      }
    }
  ]
}
```

#### 5. BreadcrumbList Schema (All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pandityashshastri.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Puja Services",
      "item": "https://pandityashshastri.com/puja-services/"
    }
  ]
}
```

---

## V. INTERNAL LINKING STRATEGY

### Link Flow Architecture
```
Homepage (Hub)
    ↓ ↓ ↓
    ├── Astrology Consultation ←→ Ask Pandit Ji
    │       ↓
    │   Location Pages
    │
    ├── Puja Services ←→ Location Pages
    │       ↓
    │   Ask Pandit Ji
    │
    └── Contact (Terminal)
            ↑
    [All pages link to Contact]
```

### Anchor Text Strategy
| From | To | Anchor Text |
|------|----|-------------|
| Homepage | /astrology-consultation/ | "Book astrology consultation" |
| Homepage | /puja-services/ | "View puja services" |
| Homepage | /ask-pandit-ji/ | "Ask Pandit Ji your question" |
| Puja Services | /contact/ | "Schedule your puja" |
| Location Pages | /astrology-consultation/ | "Astrology consultation in [Location]" |
| Location Pages | /puja-services/ | "Home puja services" |
| Ask Pandit Ji | /astrology-consultation/ | "Book a personal consultation" |

### Footer Links (All Pages)
- Quick Consult
- Puja Services
- Ask Pandit Ji
- All Location Pages
- Contact

---

## VI. CONTENT OPTIMIZATION GUIDELINES

### H1 Rules
- Exactly ONE H1 per page
- Contains primary target keyword
- Placed above the fold
- 50-60 characters max

### Header Hierarchy
```
H1: Primary Keyword Heading
  └── H2: Section Headings
        └── H3: Subsection Headings
              └── H4: Detail Headings (if needed)
```

### Content Length Targets
| Page Type | Target Word Count |
|-----------|-------------------|
| Homepage | 1,500 - 2,000 words |
| Service Pages | 1,000 - 1,500 words |
| Location Pages | 800 - 1,200 words |
| Q&A Answers | 300 - 500 words each |

### E-E-A-T Signals
- **Experience**: Mention years of practice, temple association
- **Expertise**: Reference Vedic knowledge, specific rituals
- **Authoritativeness**: Google reviews, temple credibility
- **Trustworthiness**: No fear-based selling, clear communication

---

## VII. TECHNICAL SEO CHECKLIST

### Must-Have Elements
- [ ] XML Sitemap at /sitemap.xml
- [ ] robots.txt properly configured
- [ ] Canonical URLs on all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card markup
- [ ] Mobile-responsive design
- [ ] HTTPS enforced
- [ ] 404 page with navigation
- [ ] Proper heading hierarchy

### Performance
- [ ] Images optimized (WebP/AVIF)
- [ ] Lazy loading for below-fold images
- [ ] Hero images preloaded
- [ ] Fonts preloaded
- [ ] Critical CSS inlined
- [ ] JavaScript deferred/async
- [ ] Gzip/Brotli compression

### Core Web Vitals
- [ ] LCP < 2.5 seconds
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] INP < 200ms

---

## VIII. LOCAL SEO STRATEGY

### Google Business Profile Optimization
- Link to GBP from website
- Embed Google reviews
- Consistent NAP across all pages
- Location-specific landing pages

### Local Signals
- Address in footer (all pages)
- Phone number clickable
- Embedded Google Map on contact page
- Area-served mentions in content

### Citation Strategy
- Google Business Profile
- Justdial
- Sulekha
- Local directories
- Temple websites (if applicable)

---

## IX. CONTENT CALENDAR (Q&A SEO Flywheel)

### Month 1: Foundation Questions
1. What is the best time for Griha Pravesh?
2. How to prepare for Satyanarayan Katha at home?
3. What is Manglik Dosha and its remedies?
4. When should I do Navgraha Shanti Puja?
5. How to check marriage compatibility in Kundli?

### Month 2: Service-Related Questions
1. What is included in Rudrabhishek Puja?
2. How long does a wedding puja take?
3. What are the remedies for Pitru Dosha?
4. When to do Mundan ceremony for baby?
5. What is the significance of Mahamrityunjay Jaap?

### Month 3: Seasonal/Festival Questions
1. Shubh Muhurat for new business in [Current Month]
2. Best days for vehicle purchase this month
3. Auspicious dates for engagement ceremony
4. How to perform Diwali puja at home?
5. Significance of Navratri puja

### Ongoing
- Answer 4-5 questions per week
- Update seasonal content
- Add location-specific Q&A

---

## X. COMPETITOR DIFFERENTIATION

### Unique Value Propositions (UVPs) to Highlight
1. **Temple Association**: "Associated with Shiv Shakti Mandir, Mehrauli"
2. **Trust Approach**: "Clear guidance, no fear-based selling"
3. **Quick Access**: "Book consultation in minutes"
4. **Premium Service**: "Serving South Delhi's finest localities"
5. **Authentic Practice**: "Shuddh vidhi, traditional rituals"

### Content Gaps to Fill
- Detailed puja process explanations
- Video testimonials (future)
- Muhurat calendar (interactive)
- Educational blog content
