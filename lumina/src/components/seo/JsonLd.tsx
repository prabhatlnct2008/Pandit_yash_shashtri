import { SITE_CONFIG } from "@/lib/constants";

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/pandit-yash-shastri.jpg`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: `+91-${SITE_CONFIG.contact.primaryPhone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.temple.address,
      addressLocality: "Mehrauli",
      addressRegion: "New Delhi",
      postalCode: SITE_CONFIG.temple.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "South Delhi" },
      { "@type": "City", name: "Gurgaon" },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
    sameAs: [SITE_CONFIG.googleBusinessProfile],
  };

  return <JsonLd data={schema} />;
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#person`,
    name: SITE_CONFIG.name,
    jobTitle: "Vedic Pandit & Astrologer",
    description:
      "Experienced Vedic Pandit associated with Shiv Shakti Mandir, Mehrauli. Specializes in astrology consultations and traditional puja services.",
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.temple.name,
    },
    knowsAbout: [
      "Vedic Astrology",
      "Kundli Reading",
      "Hindu Rituals",
      "Puja Services",
      "Vastu Shastra",
      "Marriage Matchmaking",
    ],
    sameAs: [SITE_CONFIG.googleBusinessProfile],
  };

  return <JsonLd data={schema} />;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceType?: string;
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceType = "ReligiousService",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      "@id": `${SITE_CONFIG.url}/#person`,
    },
    areaServed: ["South Delhi", "Gurgaon"],
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: `+91-${SITE_CONFIG.contact.primaryPhone}`,
      serviceUrl: SITE_CONFIG.url,
    },
  };

  return <JsonLd data={schema} />;
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      "@id": `${SITE_CONFIG.url}/#person`,
    },
  };

  return <JsonLd data={schema} />;
}
