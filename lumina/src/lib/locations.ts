export interface LocationData {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  popularServices: string[];
  areaType: string;
  nearbyLandmarks: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string;
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "chhatarpur",
    name: "Chhatarpur",
    fullName: "Chhatarpur, South Delhi",
    areaType: "Premium residential area",
    description:
      "Chhatarpur is known for its serene farmhouse estates and proximity to the famous Chhatarpur Temple. Residents here value traditional rituals performed with authenticity and precision.",
    popularServices: ["Griha Pravesh Puja", "Vastu Shanti Puja", "Satyanarayan Katha"],
    nearbyLandmarks: ["Chhatarpur Temple", "Qutub Minar", "Sultanpur National Park"],
    metaTitle: "Trusted Pandit & Astrologer in Chhatarpur | Pandit Yash Shastri",
    metaDescription:
      "Looking for a reliable pandit in Chhatarpur? Pandit Yash Shastri offers home puja, astrology consultation & Vedic rituals. Trusted by Chhatarpur families.",
    h1: "Trusted Pandit & Astrologer in Chhatarpur",
    content:
      "Families in Chhatarpur trust Pandit Yash Shastri for authentic Vedic rituals and personalized astrology guidance. Whether you reside in one of the elegant farmhouses or modern apartments in the area, Pandit Ji brings the same dedication and shuddh vidhi to every ceremony. With easy accessibility from Mehrauli and the Chhatarpur Metro station, booking a puja or consultation is convenient and hassle-free.",
    faqs: [
      {
        question: "Does Pandit Ji travel to Chhatarpur farmhouses?",
        answer:
          "Yes, Pandit Yash Shastri regularly conducts pujas at farmhouses, villas, and apartments throughout Chhatarpur. The area is close to Mehrauli, making it very convenient for home visits.",
      },
      {
        question: "What is the most requested puja in Chhatarpur?",
        answer:
          "Griha Pravesh and Vastu Shanti pujas are particularly popular in Chhatarpur due to the many new properties and farmhouse renovations in the area.",
      },
    ],
  },
  {
    slug: "mehrauli",
    name: "Mehrauli",
    fullName: "Mehrauli, South Delhi",
    areaType: "Historic locality",
    description:
      "Mehrauli is home to the ancient Shiv Shakti Mandir where Pandit Yash Shastri is associated. This historic locality combines spiritual heritage with modern residential areas.",
    popularServices: ["Rudrabhishek", "Satyanarayan Katha", "All Sanskars"],
    nearbyLandmarks: ["Shiv Shakti Mandir", "Qutub Minar", "Mehrauli Archaeological Park"],
    metaTitle: "Pandit & Astrologer in Mehrauli | Shiv Shakti Mandir | Pandit Yash Shastri",
    metaDescription:
      "Pandit Yash Shastri, associated with Shiv Shakti Mandir, Mehrauli. Expert pandit for home puja, astrology consultation & traditional Vedic rituals.",
    h1: "Pandit & Astrologer in Mehrauli",
    content:
      "Pandit Yash Shastri is closely associated with the revered Shiv Shakti Mandir in Mehrauli, Ward No. 6, Gandhi Colony. For Mehrauli residents, this means access to authentic Vedic rituals performed by a pandit deeply rooted in the local spiritual community. Whether you need a quick astrology consultation or an elaborate wedding ceremony, Pandit Ji brings generations of traditional knowledge to serve you.",
    faqs: [
      {
        question: "Is Pandit Ji available at Shiv Shakti Mandir?",
        answer:
          "Yes, Pandit Yash Shastri is associated with Shiv Shakti Mandir in Mehrauli. You can meet him at the temple or book a home visit for puja services.",
      },
      {
        question: "Can pujas be performed at Shiv Shakti Mandir?",
        answer:
          "Yes, certain pujas like Rudrabhishek can be arranged at the mandir. Contact Pandit Ji to discuss temple-based ceremonies.",
      },
    ],
  },
  {
    slug: "aiims-delhi",
    name: "AIIMS Delhi",
    fullName: "AIIMS Area, South Delhi",
    areaType: "Institutional area",
    description:
      "The AIIMS area includes residential colonies around India's premier medical institution. Many families here seek spiritual support during challenging health situations.",
    popularServices: ["Mahamrityunjay Jaap", "Navgraha Shanti Puja", "Quick Consultation"],
    nearbyLandmarks: ["AIIMS Hospital", "Safdarjung Hospital", "IIT Delhi"],
    metaTitle: "Pandit Near AIIMS Delhi | Healing Pujas | Pandit Yash Shastri",
    metaDescription:
      "Need a pandit near AIIMS Delhi? Pandit Yash Shastri offers Mahamrityunjay Jaap, healing pujas & astrology consultation. Compassionate spiritual guidance.",
    h1: "Pandit & Astrologer Near AIIMS Delhi",
    content:
      "For families in the AIIMS Delhi area facing health challenges, Pandit Yash Shastri offers compassionate spiritual support. The Mahamrityunjay Jaap and healing-focused pujas can provide peace of mind during difficult times. Pandit Ji understands the unique needs of families dealing with medical situations and offers flexible timing for consultations and pujas. Residents of nearby colonies like Gulmohar Park and SDA also frequently avail services.",
    faqs: [
      {
        question: "Can Pandit Ji visit patients at AIIMS?",
        answer:
          "While hospital visits are subject to hospital policies, Pandit Ji can perform healing pujas at your residence near AIIMS and provide mantra guidance that family members can chant at the hospital.",
      },
      {
        question: "Which puja is recommended for health recovery?",
        answer:
          "Mahamrityunjay Jaap is traditionally performed for health, healing, and protection. Navgraha Shanti may also be recommended based on the individual's horoscope.",
      },
    ],
  },
  {
    slug: "green-park",
    name: "Green Park",
    fullName: "Green Park, South Delhi",
    areaType: "Upscale residential colony",
    description:
      "Green Park is an established South Delhi colony known for its tree-lined streets and cultured residents. Families here appreciate refined spiritual services.",
    popularServices: ["Griha Pravesh Puja", "Satyanarayan Katha", "Astrology Consultation"],
    nearbyLandmarks: ["Green Park Metro", "Hauz Khas Village", "Deer Park"],
    metaTitle: "Trusted Pandit & Astrologer in Green Park | Pandit Yash Shastri",
    metaDescription:
      "Looking for a reliable pandit in Green Park? Pandit Yash Shastri offers home puja, astrology consultation & Vedic rituals. Trusted by Green Park families.",
    h1: "Trusted Pandit & Astrologer in Green Park",
    content:
      "Residents of Green Park trust Pandit Yash Shastri for home pujas and astrology consultations performed with discipline and clarity. Pandit Ji is experienced with apartment-based pujas and understands the needs of modern families in established colonies. From traditional Satyanarayan Katha to personalized astrology sessions, every service is delivered with respect for your time and space.",
    faqs: [
      {
        question: "Is Pandit Ji experienced with apartment pujas?",
        answer:
          "Yes, Pandit Yash Shastri regularly performs pujas in apartments across Green Park and understands how to conduct ceremonies respectfully within apartment settings.",
      },
      {
        question: "How far is Green Park from Pandit Ji's location?",
        answer:
          "Green Park is approximately 15-20 minutes from Mehrauli, making it very convenient for home visits. Pandit Ji serves all parts of Green Park Main and Extension.",
      },
    ],
  },
  {
    slug: "hauz-khas",
    name: "Hauz Khas",
    fullName: "Hauz Khas, South Delhi",
    areaType: "Historic and upscale area",
    description:
      "Hauz Khas combines historic monuments with upscale residential areas. The cosmopolitan residents here seek authentic spiritual services that respect tradition while fitting modern lifestyles.",
    popularServices: ["Satyanarayan Katha", "Vivah Puja", "Astrology Consultation"],
    nearbyLandmarks: ["Hauz Khas Fort", "Deer Park", "Hauz Khas Village"],
    metaTitle: "Pandit & Astrologer in Hauz Khas | Pandit Yash Shastri",
    metaDescription:
      "Need a pandit in Hauz Khas? Pandit Yash Shastri offers authentic home puja, wedding ceremonies & astrology consultation. Serving Hauz Khas Enclave & Village.",
    h1: "Pandit & Astrologer in Hauz Khas",
    content:
      "Hauz Khas residents seeking authentic Vedic rituals find a trusted partner in Pandit Yash Shastri. Whether you live in Hauz Khas Enclave, near the historic fort, or in the newer apartments, Pandit Ji brings the same commitment to traditional practice. The area's blend of heritage and modernity is matched by services that honor tradition while respecting contemporary sensibilities.",
    faqs: [
      {
        question: "Does Pandit Ji perform wedding ceremonies in Hauz Khas venues?",
        answer:
          "Yes, Pandit Yash Shastri performs complete wedding ceremonies (Vivah Puja) at venues, farmhouses, and homes in Hauz Khas. All rituals are conducted with proper shuddh vidhi.",
      },
      {
        question: "Are services available for Hauz Khas Village residents?",
        answer:
          "Yes, Pandit Ji serves all parts of Hauz Khas including the Village area, Enclave, and surrounding localities.",
      },
    ],
  },
  {
    slug: "panchsheel-enclave",
    name: "Panchsheel Enclave",
    fullName: "Panchsheel Enclave, South Delhi",
    areaType: "Affluent residential enclave",
    description:
      "Panchsheel Enclave is one of South Delhi's most affluent neighborhoods. Residents here expect premium service quality and discretion in all spiritual matters.",
    popularServices: ["Griha Pravesh Puja", "Vastu Shanti Puja", "Marriage Matchmaking"],
    nearbyLandmarks: ["Panchsheel Club", "Sheikh Sarai", "Greater Kailash"],
    metaTitle: "Pandit in Panchsheel Enclave | Premium Spiritual Services | Pandit Yash Shastri",
    metaDescription:
      "Premium pandit services in Panchsheel Enclave. Pandit Yash Shastri offers discreet, high-quality puja & astrology services for discerning families.",
    h1: "Trusted Pandit in Panchsheel Enclave",
    content:
      "Panchsheel Enclave families deserve and expect the highest quality spiritual services. Pandit Yash Shastri delivers exactly that — authentic Vedic rituals performed with precision, clear communication throughout the process, and absolute discretion. Whether it's a private astrology consultation or a family ceremony, Pandit Ji's approach matches the refined expectations of Panchsheel Enclave residents.",
    faqs: [
      {
        question: "Does Pandit Ji maintain confidentiality?",
        answer:
          "Absolutely. Pandit Yash Shastri maintains strict confidentiality regarding all consultations and family matters. Your privacy is fully respected.",
      },
      {
        question: "Can services be scheduled for early morning or late evening?",
        answer:
          "Yes, Pandit Ji offers flexible scheduling to accommodate busy professionals. Early morning pujas (especially muhurat-based) and evening consultations can be arranged.",
      },
    ],
  },
  {
    slug: "greater-kailash-gk1-gk2",
    name: "Greater Kailash",
    fullName: "Greater Kailash (GK1 & GK2), South Delhi",
    areaType: "Premier residential area",
    description:
      "Greater Kailash is among Delhi's most prestigious addresses. Both GK1 and GK2 are home to families who value tradition and seek authentic spiritual guidance.",
    popularServices: ["All Pujas", "Astrology Consultation", "Wedding Services"],
    nearbyLandmarks: ["GK M Block Market", "Nehru Place", "Kailash Colony"],
    metaTitle: "Pandit in Greater Kailash GK1 GK2 | Pandit Yash Shastri",
    metaDescription:
      "Trusted pandit in Greater Kailash (GK1 & GK2). Pandit Yash Shastri offers complete puja services, astrology & wedding ceremonies for GK families.",
    h1: "Pandit & Astrologer in Greater Kailash (GK1 & GK2)",
    content:
      "Greater Kailash residents have trusted Pandit Yash Shastri for years. Whether you're in the bungalows of GK1 or the elegant homes of GK2, Pandit Ji brings authentic Vedic services to your doorstep. From auspicious occasions like weddings and griha pravesh to regular devotional pujas, every ceremony is conducted with the precision and respect that GK families expect.",
    faqs: [
      {
        question: "Does Pandit Ji serve both GK1 and GK2?",
        answer:
          "Yes, Pandit Yash Shastri regularly serves families in both Greater Kailash 1 and Greater Kailash 2, as well as nearby areas like Kailash Colony.",
      },
      {
        question: "Are references available from GK families?",
        answer:
          "Pandit Ji has served many families in Greater Kailash over the years. You can check Google reviews or request references for specific services.",
      },
    ],
  },
  {
    slug: "lajpat-nagar",
    name: "Lajpat Nagar",
    fullName: "Lajpat Nagar, South Delhi",
    areaType: "Vibrant commercial and residential area",
    description:
      "Lajpat Nagar is a bustling South Delhi locality with a mix of residential areas and famous markets. The diverse community here seeks accessible, authentic spiritual services.",
    popularServices: ["Satyanarayan Katha", "Mundan Sanskar", "Quick Consultation"],
    nearbyLandmarks: ["Lajpat Nagar Central Market", "Defence Colony", "Moolchand Metro"],
    metaTitle: "Pandit in Lajpat Nagar | Affordable Puja Services | Pandit Yash Shastri",
    metaDescription:
      "Need a pandit in Lajpat Nagar? Pandit Yash Shastri offers authentic home puja, sanskars & astrology at reasonable rates. Serving Lajpat Nagar 1, 2, 3 & 4.",
    h1: "Pandit & Astrologer in Lajpat Nagar",
    content:
      "Lajpat Nagar families looking for a trustworthy pandit find Pandit Yash Shastri's services both authentic and accessible. Serving all parts of Lajpat Nagar — from the residential blocks to areas near the famous market — Pandit Ji offers the complete range of puja and astrology services. His straightforward approach and clear communication make booking and conducting pujas a smooth experience.",
    faqs: [
      {
        question: "Which parts of Lajpat Nagar does Pandit Ji serve?",
        answer:
          "Pandit Yash Shastri serves all parts including Lajpat Nagar 1, 2, 3, and 4, as well as nearby areas like Defence Colony and Jangpura.",
      },
      {
        question: "Is parking available if Pandit Ji visits by car?",
        answer:
          "Pandit Ji is familiar with the parking challenges in Lajpat Nagar and plans visits accordingly. Please inform about parking availability when booking.",
      },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    fullName: "Gurgaon (Gurugram)",
    areaType: "Major metropolitan city",
    description:
      "Gurgaon is a major city with numerous residential sectors, corporate offices, and a growing population seeking quality spiritual services amidst busy lifestyles.",
    popularServices: [
      "Office Puja",
      "Griha Pravesh",
      "Astrology Consultation",
      "All Major Pujas",
    ],
    nearbyLandmarks: ["Cyber City", "Golf Course Road", "DLF Phases"],
    metaTitle: "Pandit in Gurgaon | Home & Office Puja | Pandit Yash Shastri",
    metaDescription:
      "Trusted pandit in Gurgaon for home puja, office puja & astrology consultation. Pandit Yash Shastri serves DLF, Sohna Road, Golf Course Road & all sectors.",
    h1: "Trusted Pandit & Astrologer in Gurgaon",
    content:
      "Gurgaon's dynamic professionals and families trust Pandit Yash Shastri for authentic spiritual services that fit busy schedules. Whether you're in DLF phases, along Golf Course Road, in Sohna Road apartments, or any sector of Gurgaon, Pandit Ji travels to serve you. Office pujas for new ventures, griha pravesh for new homes, and quick astrology consultations are particularly popular among Gurgaon residents.",
    faqs: [
      {
        question: "Does Pandit Ji travel to all parts of Gurgaon?",
        answer:
          "Yes, Pandit Yash Shastri serves all areas of Gurgaon including DLF phases 1-5, Golf Course Road, Sohna Road, Sector 14-57, and Dwarka Expressway areas.",
      },
      {
        question: "Are office pujas available for Gurgaon companies?",
        answer:
          "Yes, Pandit Ji performs office pujas including new office inauguration, annual pujas, and special occasions. Timing can be arranged to minimize business disruption.",
      },
      {
        question: "Is there additional travel charge for Gurgaon?",
        answer:
          "A nominal travel charge may apply for distant Gurgaon locations. This is discussed upfront during booking with complete transparency.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((loc) => loc.slug);
}
