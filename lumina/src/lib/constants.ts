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
  { href: "/ask-pandit-ji", label: "Ask Pandit Ji" },
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
      "Pandit Yash Shastri ji ne Ganesh Laxmi Pujan evam Shri Radha Krishna Haldi, Mehendi aur Vivah ki poori vidhi bahut hi shuddh, shastriya aur adbhut tarike se sampann karvayi. Unka mantra uchcharan bahut hi spasht aur pavitra tha.",
  },
  {
    author: "Anita S.",
    area: "Hauz Khas",
    rating: 5,
    date: "Recent",
    text:
      "Pandit ji performed our Griha Pravesh with such calm clarity. He explained every step, arrived on time, and the entire vidhi felt unhurried and meaningful. Highly recommended.",
  },
  {
    author: "Rohit K.",
    area: "Gurgaon",
    rating: 5,
    date: "Recent",
    text:
      "We had Pandit ji over for a Satyanarayan Katha at our DLF Phase 4 home. Clear pricing upfront, all samagri arranged, finished within the time he promised. Will book again.",
  },
  {
    author: "Sneha M.",
    area: "Mehrauli",
    rating: 5,
    date: "Recent",
    text:
      "Our family has been associated with Shiv Shakti Mandir for years. Pandit ji's Rudrabhishek on Mahashivratri was beautiful — proper vidhi, respectful pace, and he involved everyone in the family.",
  },
];

export const HOME_FAQS = [
  {
    question: "What services does Pandit Yash Shastri offer?",
    answer:
      "Pandit Yash Shastri offers comprehensive spiritual services including astrology consultations (kundli reading, horoscope analysis, marriage matchmaking), and traditional puja services such as Griha Pravesh, Satyanarayan Katha, Rudrabhishek, wedding ceremonies, and various sanskars. All services are available for South Delhi and Gurgaon residents.",
  },
  {
    question: "How can I book an astrology consultation?",
    answer:
      "You can book a consultation by calling directly at 9716684871 or 9340899598, or by clicking the 'Quick Consult' button on this website. For detailed consultations, you can schedule an appointment for in-person, phone, or video sessions.",
  },
  {
    question: "Which areas does Pandit Ji serve?",
    answer:
      "Pandit Yash Shastri serves all of South Delhi including Chhatarpur, Mehrauli, Green Park, Hauz Khas, Greater Kailash (GK1 & GK2), Panchsheel Enclave, Lajpat Nagar, and areas near AIIMS Delhi. Services are also available throughout Gurgaon.",
  },
  {
    question: "What should I prepare for a home puja?",
    answer:
      "The requirements vary by puja type. After booking, Pandit Ji will provide a detailed samagri (materials) list specific to your puja. Basic items like flowers, fruits, and diya are usually needed. For convenience, samagri arrangement can also be discussed.",
  },
  {
    question: "Is online astrology consultation available?",
    answer:
      "Yes, both phone and video consultations are available for those who cannot meet in person. You will need to share your birth details (date, time, and place) in advance for kundli preparation.",
  },
];
