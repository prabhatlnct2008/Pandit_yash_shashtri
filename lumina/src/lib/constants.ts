export const SITE_CONFIG = {
  name: "Pandit Yash Shastri",
  description:
    "Trusted Pandit and Astrologer in South Delhi & Gurgaon. Quick astrology consultation, home puja, muhurat guidance & Vedic rituals.",
  url: "https://www.panditjeehomepuja.in",
  googleBusinessProfile: "https://share.google/7zlaYzGkyVLNZYd7w",
  googleMapsLink: "https://maps.app.goo.gl/wGvusMo96wdbJLgq5",
  temple: {
    name: "Shiv Shakti Mandir",
    address: "Ward No. 6, Gandhi Colony, Mehrauli",
    city: "New Delhi",
    postalCode: "110030",
  },
  contact: {
    primaryPhone: "9716684871",
    secondaryPhone: "9340899598",
    email: "contact@pandityashshastri.com",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61589884800057",
    instagram: "",
    youtube: "",
  },
  geo: {
    latitude: 28.5175,
    longitude: 77.1855,
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/astrology-consultation", label: "Astrology" },
  { href: "/puja-services", label: "Puja Services" },
  { href: "/ask-pandit-ji", label: "Ask Pandit Jee" },
  { href: "/contact", label: "Contact" },
];

export const PUJA_SERVICES = [
  {
    id: "griha-pravesh",
    name: "Griha Pravesh Puja",
    description:
      "Sacred ceremony for entering a new home. Invokes blessings for prosperity, peace, and protection for the family.",
    duration: "2-3 hours",
    category: "Home",
  },
  {
    id: "satyanarayan-katha",
    name: "Satyanarayan Katha",
    description:
      "Devotional puja to Lord Vishnu for fulfillment of wishes, success in endeavors, and family well-being.",
    duration: "2-3 hours",
    category: "Devotional",
  },
  {
    id: "rudrabhishek",
    name: "Rudrabhishek",
    description:
      "Powerful Shiva puja for removing obstacles, health issues, and negative energies. Brings peace and prosperity.",
    duration: "1.5-2 hours",
    category: "Shiva",
  },
  {
    id: "mahamrityunjay-jaap",
    name: "Mahamrityunjay Jaap",
    description:
      "Sacred mantra chanting for healing, longevity, and protection from untimely death. Powerful remedy for health concerns.",
    duration: "1-2 hours",
    category: "Health",
  },
  {
    id: "navgraha-shanti",
    name: "Navgraha Shanti Puja",
    description:
      "Pacifies malefic planetary influences in your horoscope. Essential for those facing career or relationship challenges.",
    duration: "2-3 hours",
    category: "Astrology",
  },
  {
    id: "vastu-shanti",
    name: "Vastu Shanti Puja",
    description:
      "Neutralizes vastu doshas in home or office. Brings harmony, positive energy, and removes obstacles to success.",
    duration: "2-3 hours",
    category: "Home",
  },
  {
    id: "vivah-puja",
    name: "Marriage (Vivah) Puja",
    description:
      "Complete wedding ceremony performed with shuddh vidhi. Includes all rituals from Ganesh puja to Saptapadi.",
    duration: "4-6 hours",
    category: "Wedding",
  },
  {
    id: "naamkaran",
    name: "Naamkaran Sanskar",
    description:
      "Sacred naming ceremony for newborn based on kundli and nakshatra. Auspicious start to your child's life journey.",
    duration: "1-1.5 hours",
    category: "Sanskar",
  },
  {
    id: "mundan",
    name: "Mundan Sanskar",
    description:
      "First head shaving ceremony of the child. Important sanskar for mental development and removal of past-life karma.",
    duration: "1-1.5 hours",
    category: "Sanskar",
  },
  {
    id: "pitru-dosh-nivaran",
    name: "Pitru Dosh Nivaran Puja",
    description:
      "Remedy for ancestral doshas causing obstacles in marriage, career, or health. Brings peace to departed souls.",
    duration: "2-3 hours",
    category: "Remedy",
  },
  {
    id: "havan-anushthan",
    name: "Havan & Jaap Anushthan",
    description:
      "Customized fire rituals and mantra chanting for specific wishes, career success, or spiritual growth.",
    duration: "Varies",
    category: "Custom",
  },
];

// Landing-page puja cards (build sheet v2). `waName` is the puja name used
// in the pre-filled WhatsApp message; `name` is the display name on the card.
export const HOME_PUJA_CARDS = [
  {
    id: "griha-pravesh",
    name: "Griha Pravesh",
    waName: "Griha Pravesh Puja",
    image: "/images/griha-pravesh-puja-setup-new-home.jpg",
    alt: "Griha pravesh puja setup at the entrance of a new home.",
    description:
      "Before the family steps into a new home. For peace, prosperity, and protection — welcomed the right way, by a Pandit jee who'll be around for the next puja in it too.",
    duration: "2–3 hrs",
  },
  {
    id: "satyanarayan-katha",
    name: "Satyanarayan Katha",
    waName: "Satyanarayan Katha",
    image: "/images/satyanarayan-katha-mandap-vishnu-puja.jpg",
    alt: "Satyanarayan Katha mandap arranged for a home puja.",
    description:
      "A lovely puja for Lord Vishnu — done when there is gratitude in the heart, or a wish you are holding close.",
    duration: "2–3 hrs",
  },
  {
    id: "rudrabhishek",
    name: "Rudrabhishek",
    waName: "Rudrabhishek",
    image: "/images/rudrabhishek-shivling-abhishek-puja.jpg",
    alt: "Rudrabhishek abhishek of a Shivling during a home Shiva puja.",
    description:
      "The abhishek of Lord Shiva. When there are obstacles, health troubles, or a heaviness you cannot quite name.",
    duration: "1.5–2 hrs",
  },
  {
    id: "mahamrityunjay-jaap",
    name: "Mahamrityunjay Jaap",
    waName: "Mahamrityunjay Jaap",
    image: "/images/mahamrityunjay-jaap-rudraksha-mala.jpg",
    alt: "Rudraksha mala and diya for a Mahamrityunjay Jaap.",
    description:
      "The healing mantra. For long life and protection. Families ask mostly when someone is unwell.",
    duration: "1–2 hrs",
  },
  {
    id: "navgraha-shanti",
    name: "Navgraha Shanti",
    waName: "Navgraha Shanti Puja",
    image: "/images/navgraha-shanti-puja-nine-lamps.jpg",
    alt: "Nine lamps arranged for a Navgraha Shanti puja.",
    description:
      "When the grahas are creating trouble in career, marriage, or health. This calms them.",
    duration: "2–3 hrs",
  },
  {
    id: "vastu-shanti",
    name: "Vastu Shanti",
    waName: "Vastu Shanti Puja",
    image: "/images/vastu-shanti-puja-home-corner.jpg",
    alt: "Vastu Shanti puja setup in the corner of a home.",
    description:
      "For vastu dosha in a home or office. It settles the space and the good feeling returns.",
    duration: "2–3 hrs",
  },
];

export const CONSULTATION_TYPES = [
  {
    id: "quick",
    name: "Quick Consultation",
    duration: "10-15 minutes",
    bestFor: "One urgent question",
    mode: "Phone / WhatsApp Call",
    description:
      "Get immediate guidance on a pressing concern. Ideal for quick questions about muhurat, simple remedies, or time-sensitive decisions.",
  },
  {
    id: "detailed",
    name: "Detailed Astrology Consultation",
    duration: "30-45 minutes",
    bestFor: "Complete kundli analysis",
    mode: "In-person / Phone / Video",
    description:
      "Comprehensive horoscope reading including planetary positions, dasha analysis, dosha identification, and personalized remedies.",
    includes: ["Kundli reading", "Dosha analysis", "Personalized remedies", "Career guidance"],
  },
  {
    id: "matchmaking",
    name: "Marriage Matchmaking (Gun Milan)",
    duration: "45-60 minutes",
    bestFor: "Kundli matching for marriage",
    mode: "In-person / Video",
    description:
      "Detailed compatibility analysis for marriage including gun milan, manglik dosha check, and remedy suggestions if needed.",
    includes: ["Kundli matching", "Gun milan score", "Dosha review", "Remedy guidance"],
  },
];

// Fallback reviews used when GOOGLE_PLACES_API_KEY is unset, the API call
// fails, or returns no reviews. With the API key configured in Vercel,
// ReviewsSection fetches live reviews and these are not displayed.
// Index 0 (Kushagra Bhardwaj) is a real review captured from the GBP;
// the rest are placeholder samples — replace or remove as more real
// reviews become available.
export const REVIEWS = [
  {
    author: "Kushagra Bhardwaj",
    area: "Verified Google review",
    rating: 5,
    date: "2 months ago",
    text:
      "Pandit Yash Shastri jee ne Ganesh Laxmi Pujan evam Shri Radha Krishna Haldi, Mehendi aur Vivah ki poori vidhi bahut hi shuddh, shastriya aur adbhut tarike se sampann karvayi. Unka mantra uchcharan bahut hi spasht aur pavitra tha.",
  },
  {
    author: "Anita S.",
    area: "Hauz Khas",
    rating: 5,
    date: "Recent",
    text:
      "Pandit jee performed our Griha Pravesh with such calm clarity. He explained every step, arrived on time, and the whole vidhi felt unhurried and meaningful.",
  },
  {
    author: "Rohit K.",
    area: "Gurgaon",
    rating: 5,
    date: "Recent",
    text:
      "We had Pandit jee over for a Satyanarayan Katha at our home in Gurgaon. Clear pricing upfront, all samagri arranged, finished within the time he promised. Will book again.",
  },
  {
    author: "Sneha M.",
    area: "Mehrauli",
    rating: 5,
    date: "Recent",
    text:
      "Pandit jee's Rudrabhishek on Mahashivratri was beautiful. Proper vidhi, a respectful pace, and he involved everyone in the family.",
  },
];

export const HOME_FAQS = [
  {
    question: "What do I need to arrange?",
    answer:
      "Very little. I send a small list after you book, but most of the samagri I carry myself. Want zero headache? I can arrange all of it.",
  },
  {
    question: "How do I book?",
    answer:
      "WhatsApp me on 9716684871, or call. Tell me the puja and the date, and I take it from there.",
  },
  {
    question: "Which areas do you come to?",
    answer:
      "All of South Delhi — Chhatarpur, Mehrauli, Green Park, Hauz Khas, Greater Kailash, Panchsheel Enclave, Lajpat Nagar, the AIIMS side. And Gurgaon.",
  },
  {
    question: "Is online consultation possible?",
    answer:
      "Yes, phone and video both. Send me your birth details — date, time, place — a little before, so your kundli is ready.",
  },
  {
    question: "Will I always get you, or someone else?",
    answer:
      "You will get me. That is the whole point — I want to be your family's Pandit jee, not a one-time booking.",
  },
];
