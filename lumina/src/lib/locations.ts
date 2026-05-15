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
  content: string[];
  localContext: string[];
  nearbyAreas: { slug: string; anchor: string }[];
  pillAnchor: string;
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "chhatarpur",
    name: "Chhatarpur",
    fullName: "Chhatarpur, South Delhi",
    areaType: "Premium residential area",
    description:
      "Chhatarpur is known for its serene farmhouse estates and proximity to the famous Chhatarpur Mandir. Whether you're hosting an event at one of the area's heritage farmhouses or in a residential apartment, the spiritual character of the area calls for ceremonies that honour both tradition and the unique setting.",
    popularServices: ["Griha Pravesh Puja", "Vastu Shanti Puja", "Satyanarayan Katha"],
    nearbyLandmarks: ["Chhatarpur Mandir", "Qutub Minar", "Sultanpur National Park"],
    metaTitle: "Trusted Pandit & Astrologer in Chhatarpur | Pandit Yash Shastri",
    metaDescription:
      "Looking for a reliable pandit in Chhatarpur? Pandit Yash Shastri offers home puja, astrology consultation & Vedic rituals. Trusted by Chhatarpur families.",
    h1: "Trusted Pandit & Astrologer in Chhatarpur",
    content: [
      "Chhatarpur is a community that straddles two worlds — the sprawling farmhouse estates along Chhatarpur Mandir Marg and the apartment clusters near Andheria Mor and the metro station. Pandit Yash Shastri serves both, bringing the same authentic Vedic vidhi whether the ceremony is in a 2-acre farmhouse or a 3-BHK in the DDA society.",
      "Most Chhatarpur bookings fall into one of two patterns: Griha Pravesh and Vastu Shanti for new property handovers (especially during the October–March season when farmhouse construction wraps), and Satyanarayan Katha as a recurring family practice. Pandit Ji travels with the standard samagri kit, so families don't need to source items from the busy Mandir Marg shops on the morning of the ceremony.",
      "Access is straightforward — Pandit Ji reaches most of Chhatarpur within 15–20 minutes from his base in Mehrauli, including farmhouses along the Faridabad–Gurgaon road. For Saturday and Sunday bookings near Chhatarpur Mandir festivals, slots fill 2–3 weeks ahead, so early booking is recommended.",
    ],
    localContext: [
      "The farmhouse belt south of Chhatarpur Metro — including parts of Asola, Bhati, and the Chhatarpur Pahari villages — has a long tradition of multi-day ceremonies. Wedding pujas and large Satyanarayan Kathas at these venues often involve extended families flying in from outside Delhi, which is why Pandit Ji offers itinerary planning support and a clear timing breakdown for each segment.",
      "For apartment residents in Chhatarpur DDA Society, Suncity Phase 1, and Andheria Mor pockets, shorter-format services like 60-minute astrology consultations and 2–3 hour pujas are more common. Pandit Ji adapts both format and pricing to suit the setting rather than insisting on one fixed structure.",
    ],
    nearbyAreas: [
      { slug: "mehrauli", anchor: "Mehrauli families near Shiv Shakti Mandir" },
      { slug: "panchsheel-enclave", anchor: "Panchsheel Enclave residents seeking private consultations" },
    ],
    pillAnchor: "Pandit in Chhatarpur farmhouses",
    faqs: [
      {
        question: "Does Pandit Ji travel to Chhatarpur farmhouses?",
        answer:
          "Yes, Pandit Yash Shastri regularly conducts pujas at farmhouses, villas, and apartments throughout Chhatarpur. The area is close to Mehrauli, making it very convenient for home visits.",
      },
      {
        question: "What is the most requested puja in Chhatarpur?",
        answer:
          "Griha Pravesh and Vastu Shanti are particularly popular in Chhatarpur due to the many new properties and farmhouse renovations in the area.",
      },
      {
        question: "How far in advance should I book for a Chhatarpur farmhouse puja?",
        answer:
          "For Saturday/Sunday slots and during the October–March wedding and property-handover season, 2–4 weeks notice is ideal. Weekday slots can often be arranged within 3–5 days.",
      },
      {
        question: "Is samagri (puja items) included or do I arrange separately?",
        answer:
          "Pandit Ji typically brings the standard samagri kit. For larger ceremonies needing specific items (havan kund hire, large kalash, special offerings), the requirements and cost are discussed upfront before the booking is confirmed.",
      },
    ],
  },
  {
    slug: "mehrauli",
    name: "Mehrauli",
    fullName: "Mehrauli, South Delhi",
    areaType: "Historic locality",
    description:
      "Mehrauli is home to the ancient Shiv Shakti Mandir where Pandit Yash Shastri is associated. The locality combines deep spiritual heritage — the temple area itself and proximity to historic monuments — with a steady residential community spanning generations.",
    popularServices: ["Rudrabhishek", "Satyanarayan Katha", "All Sanskars"],
    nearbyLandmarks: ["Shiv Shakti Mandir", "Qutub Minar", "Mehrauli Archaeological Park"],
    metaTitle: "Pandit & Astrologer in Mehrauli | Shiv Shakti Mandir | Pandit Yash Shastri",
    metaDescription:
      "Pandit Yash Shastri, associated with Shiv Shakti Mandir, Mehrauli. Expert pandit for home puja, astrology consultation & traditional Vedic rituals.",
    h1: "Pandit & Astrologer in Mehrauli",
    content: [
      "Mehrauli is Pandit Yash Shastri's home base — he is associated with Shiv Shakti Mandir in Ward No. 6, Gandhi Colony, just minutes from Lado Sarai, Sanjay Colony, and the Mehrauli Archaeological Park. For Mehrauli families, this proximity means same-day pujas are often possible when urgent muhurats come up.",
      "The mandir association matters for two practical reasons: certain ceremonies — Rudrabhishek, special Shivratri pujas, large havans — can be conducted directly at the temple rather than at home. And the long-standing community presence means many Mehrauli families have multi-generational relationships with the practice, simplifying booking through familiar references.",
      "Mehrauli's mix of historic gallis and modern colonies (Sainik Farms, Lado Sarai, parts of Said-ul-Ajaib) means Pandit Ji handles a wide range of puja settings — from compact homes in the old colony to large Sainik Farms properties. The vidhi is identical; only the logistics adapt to the space.",
    ],
    localContext: [
      "For Mehrauli's older families, the most common services are recurring practices: monthly Satyanarayan Katha, annual Pitru Paksha rituals, and Mundan Sanskar performed at the family deity. Familiarity with neighbourhood traditions matters here — small details like which corner of the home to set up the havan kund are decisions informed by local custom, not just textbook position.",
      "Newer Mehrauli residents often start with kundli reading or marriage matchmaking, then return for life events. Walk-in conversations at Shiv Shakti Mandir are practical during morning aarti hours (typically 7:00–9:00 AM); for longer consultations, a home booking is more comfortable for both sides.",
    ],
    nearbyAreas: [
      { slug: "chhatarpur", anchor: "Chhatarpur farmhouse owners booking griha pravesh" },
      { slug: "aiims-delhi", anchor: "AIIMS Delhi area families needing healing pujas" },
    ],
    pillAnchor: "Pandit in Mehrauli – Shiv Shakti Mandir",
    faqs: [
      {
        question: "Is Pandit Ji available at Shiv Shakti Mandir?",
        answer:
          "Yes, Pandit Yash Shastri is associated with Shiv Shakti Mandir in Mehrauli. You can meet him at the temple or book a home visit for puja services.",
      },
      {
        question: "Can pujas be performed at Shiv Shakti Mandir itself?",
        answer:
          "Yes, certain pujas — Rudrabhishek in particular — can be arranged at the mandir. Contact Pandit Ji to discuss temple-based ceremonies and available slots.",
      },
      {
        question: "Can I drop in at Shiv Shakti Mandir to meet Pandit Ji?",
        answer:
          "Yes — morning aarti hours (typically 7:00–9:00 AM) are the easiest time for a short in-person meeting. For longer consultations, please call ahead so a quiet slot can be reserved.",
      },
      {
        question: "Does Pandit Ji conduct special Shivratri pujas at the mandir?",
        answer:
          "Yes. Mahashivratri and major Shiv festival rituals are conducted at Shiv Shakti Mandir each year. Slots typically book up 3–4 weeks in advance during festival weeks.",
      },
    ],
  },
  {
    slug: "aiims-delhi",
    name: "AIIMS Delhi",
    fullName: "AIIMS Area, South Delhi",
    areaType: "Institutional area",
    description:
      "The AIIMS area covers several residential colonies around India's premier medical institution. Many families here seek spiritual support during challenging health situations, alongside the routine puja and astrology needs of a stable, professional community.",
    popularServices: ["Mahamrityunjay Jaap", "Navgraha Shanti Puja", "Quick Consultation"],
    nearbyLandmarks: ["AIIMS Hospital", "Safdarjung Hospital", "IIT Delhi"],
    metaTitle: "Pandit Near AIIMS Delhi | Healing Pujas | Pandit Yash Shastri",
    metaDescription:
      "Need a pandit near AIIMS Delhi? Pandit Yash Shastri offers Mahamrityunjay Jaap, healing pujas & astrology consultation. Compassionate spiritual guidance.",
    h1: "Pandit & Astrologer Near AIIMS Delhi",
    content: [
      "For families in the AIIMS area — Gulmohar Park, Yusuf Sarai, Safdarjung Enclave, the SDA colonies, and the IIT/AIIMS staff residences — spiritual support often comes during difficult moments. Pandit Yash Shastri's approach is built around that reality: focused rituals like Mahamrityunjay Jaap and Navgraha Shanti that can be completed without disrupting hospital routines.",
      "Many AIIMS-area families need flexible timing — early morning pujas before hospital visits, or late evening sessions after a family member returns from the ward. Pandit Ji accommodates 5:30–7:00 AM and 8:00–9:30 PM slots specifically for these situations. Where appropriate, he provides recorded mantras and chanting guidance that family members can play or recite at the bedside.",
      "Beyond healing pujas, the AIIMS area's mix of staff residences and student populations also brings demand for kundli reading and quick astrology consultations. These tend to be focused 45–60 minute sessions, often booked at short notice.",
    ],
    localContext: [
      "Mahamrityunjay Jaap is the most requested service from this area. The traditional count is 1.25 lakh repetitions; for families seeking a shorter alternative, Pandit Ji offers a 108-repetition version that fits a single sitting and is appropriate as ongoing daily practice for family members at home.",
      "For families with members at AIIMS, Safdarjung, or AIIMS Trauma Centre, Pandit Ji can suggest specific mantras tied to the planetary positions in the patient's birth chart — a more personalised intervention than a generic puja, and one that family members can continue at the bedside.",
    ],
    nearbyAreas: [
      { slug: "green-park", anchor: "Green Park residents booking weekend pujas" },
      { slug: "hauz-khas", anchor: "Hauz Khas families seeking traditional ceremonies" },
    ],
    pillAnchor: "Pandit near AIIMS Delhi for healing pujas",
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
      {
        question: "Can rituals be conducted on short notice?",
        answer:
          "Yes — for urgent situations, Pandit Ji prioritises same-day or next-day bookings when possible. Mahamrityunjay Jaap can usually be arranged within 24 hours.",
      },
      {
        question: "Do you offer guidance for family members who want to chant at the hospital?",
        answer:
          "Yes. Pandit Ji shares the specific mantras, correct pronunciation, and a simple count discipline (e.g., a 108-bead mala) so family members can participate meaningfully without prior training.",
      },
    ],
  },
  {
    slug: "green-park",
    name: "Green Park",
    fullName: "Green Park, South Delhi",
    areaType: "Upscale residential colony",
    description:
      "Green Park is an established South Delhi colony known for its tree-lined streets and long-standing residential community. Families here appreciate refined, well-paced spiritual services that respect their established traditions and the rhythm of the colony's lifestyle.",
    popularServices: ["Griha Pravesh Puja", "Satyanarayan Katha", "Astrology Consultation"],
    nearbyLandmarks: ["Green Park Metro", "Hauz Khas Village", "Deer Park"],
    metaTitle: "Trusted Pandit & Astrologer in Green Park | Pandit Yash Shastri",
    metaDescription:
      "Looking for a reliable pandit in Green Park? Pandit Yash Shastri offers home puja, astrology consultation & Vedic rituals. Trusted by Green Park families.",
    h1: "Trusted Pandit & Astrologer in Green Park",
    content: [
      "Green Park is the kind of South Delhi colony where many families have lived for two or three generations — Main Block, Green Park Extension, and the streets between Aurobindo Marg and Sri Aurobindo Marg. Pandit Yash Shastri's services here lean towards established traditions: annual Satyanarayan Kathas, family Griha Pravesh for grown children moving back, and pre-wedding consultations.",
      "Most Green Park homes are apartments — second, third, and fourth-floor walk-ups in older buildings. Pandit Ji is accustomed to apartment pujas: compact havan setups, minimal-smoke arrangements (electric havan kund options where ventilation is limited), and respect for neighbours during longer ceremonies.",
      "Green Park Metro and Aurobindo Marg make access straightforward — Pandit Ji typically reaches most of the colony within 20 minutes from Mehrauli. For evening sessions after working hours, the 6:30–9:00 PM window is the most commonly requested slot.",
    ],
    localContext: [
      "Apartment-friendly puja setup is a small but important skill in this area. Pandit Ji uses a compact havan arrangement with smoke-management options and brings a portable kalash setup that doesn't require dismantling kitchen counters. For Vastu Shanti in older Green Park flats — where layouts are often unconventional — he adapts the vidhi to the actual space rather than insisting on textbook positioning.",
      "Saturday morning slots (7:00–10:00 AM) are the most popular in Green Park, followed by weekday evenings. Wedding-season bookings (October–February) fill the fastest, so 4–6 weeks of notice is recommended for full Vivah Pujas.",
    ],
    nearbyAreas: [
      { slug: "hauz-khas", anchor: "Hauz Khas Enclave families with similar service needs" },
      { slug: "aiims-delhi", anchor: "AIIMS area neighbours booking healing pujas" },
    ],
    pillAnchor: "Pandit in Green Park apartments",
    faqs: [
      {
        question: "Is Pandit Ji experienced with apartment pujas?",
        answer:
          "Yes — Pandit Yash Shastri regularly performs pujas in apartments across Green Park and understands how to conduct ceremonies respectfully within apartment settings.",
      },
      {
        question: "How far is Green Park from Pandit Ji's location?",
        answer:
          "Green Park is approximately 15–20 minutes from Mehrauli, making it convenient for home visits. Pandit Ji serves all parts of Green Park Main and Extension.",
      },
      {
        question: "Can the havan be done without too much smoke?",
        answer:
          "Yes — Pandit Ji uses a compact havan kund with minimal samagri smoke when needed, and electric havan kund options are available for apartments with limited ventilation.",
      },
      {
        question: "Are weekday morning slots available for Green Park?",
        answer:
          "Yes — weekday 6:30–9:00 AM slots are commonly available with 3–5 days notice, useful for families avoiding weekend traffic on Aurobindo Marg.",
      },
    ],
  },
  {
    slug: "hauz-khas",
    name: "Hauz Khas",
    fullName: "Hauz Khas, South Delhi",
    areaType: "Historic and upscale area",
    description:
      "Hauz Khas combines historic monuments with upscale residential areas. The cosmopolitan residents — from long-established Enclave families to younger professionals near the village — seek authentic spiritual services that respect tradition while fitting modern lifestyles.",
    popularServices: ["Satyanarayan Katha", "Vivah Puja", "Astrology Consultation"],
    nearbyLandmarks: ["Hauz Khas Fort", "Deer Park", "Hauz Khas Village"],
    metaTitle: "Pandit & Astrologer in Hauz Khas | Pandit Yash Shastri",
    metaDescription:
      "Need a pandit in Hauz Khas? Pandit Yash Shastri offers authentic home puja, wedding ceremonies & astrology consultation. Serving Hauz Khas Enclave & Village.",
    h1: "Pandit & Astrologer in Hauz Khas",
    content: [
      "Hauz Khas blends two distinct communities — the established residents of Hauz Khas Enclave (A, B, C blocks) and the younger renters in flats around Hauz Khas Village and Aurobindo Place. Pandit Yash Shastri tailors his approach to each: traditional, multi-generational ceremonies for Enclave families, and shorter focused consultations for the village area's working professionals.",
      "The proximity to Deer Park and the historic fort gives Hauz Khas a unique setting for ceremonies — several families request engagement and small Vivah Pujas at venues near the fort or in farmhouse-style banquets. Pandit Ji performs full ceremonies at these venues and coordinates with venue staff for setup as needed.",
      "For Hauz Khas Village–area residents — many of whom are working professionals — quick 45-minute kundli consultations and pre-marriage matchmaking sessions are the most common booking. Evening slots (7:00–9:30 PM) on weekdays are the most popular for this group.",
    ],
    localContext: [
      "Hauz Khas Enclave's blocks have a relatively consistent demographic — well-settled families, often with one or two children studying or working abroad. NRI children's weddings frequently bring Pandit Ji to the Enclave for pre-wedding pujas, with the main ceremony sometimes performed at a different venue.",
      "For the Village and Aurobindo Place areas, parking can be tight on weekends. Pandit Ji typically arrives 15–20 minutes early on weekend bookings to accommodate this, and asks for parking guidance during the booking call.",
    ],
    nearbyAreas: [
      { slug: "green-park", anchor: "Green Park families with apartment-based ceremonies" },
      { slug: "panchsheel-enclave", anchor: "Panchsheel Enclave residents seeking premium services" },
    ],
    pillAnchor: "Pandit in Hauz Khas Enclave",
    faqs: [
      {
        question: "Does Pandit Ji perform wedding ceremonies in Hauz Khas venues?",
        answer:
          "Yes — Pandit Yash Shastri performs complete wedding ceremonies (Vivah Puja) at venues, farmhouses, and homes across Hauz Khas, conducted with proper shuddh vidhi.",
      },
      {
        question: "Are services available for Hauz Khas Village residents?",
        answer:
          "Yes, Pandit Ji serves all parts of Hauz Khas including the Village area, Enclave, and surrounding localities.",
      },
      {
        question: "Can pre-wedding rituals be performed for NRI families visiting Hauz Khas?",
        answer:
          "Yes — Pandit Ji regularly performs Roka, Sagai, and Ganesh Pujan for NRI families whose children are based abroad. Scheduling can be coordinated around short visiting windows.",
      },
      {
        question: "Are evening consultations available for working professionals?",
        answer:
          "Yes — weekday evenings (7:00–9:30 PM) are reserved primarily for working professionals seeking quick kundli reading or marriage matching sessions.",
      },
    ],
  },
  {
    slug: "panchsheel-enclave",
    name: "Panchsheel Enclave",
    fullName: "Panchsheel Enclave, South Delhi",
    areaType: "Affluent residential enclave",
    description:
      "Panchsheel Enclave is one of South Delhi's most affluent neighbourhoods. Residents here expect precision, discretion, and refined service — the kind of carefully delivered spiritual experience that matches the area's broader standards.",
    popularServices: ["Griha Pravesh Puja", "Vastu Shanti Puja", "Marriage Matchmaking"],
    nearbyLandmarks: ["Panchsheel Club", "Sheikh Sarai", "Greater Kailash"],
    metaTitle: "Pandit in Panchsheel Enclave | Premium Spiritual Services | Pandit Yash Shastri",
    metaDescription:
      "Premium pandit services in Panchsheel Enclave. Pandit Yash Shastri offers discreet, high-quality puja & astrology services for discerning families.",
    h1: "Trusted Pandit in Panchsheel Enclave",
    content: [
      "Panchsheel Enclave is one of South Delhi's most settled, affluent pockets — the Phase 1 bungalows around Panchsheel Club, the apartment buildings near Shahpur Jat, and the streets connecting to Greater Kailash. Pandit Yash Shastri's services for this area emphasise three things residents specifically request: precision in vidhi, discretion about household matters, and tight scheduling that respects busy days.",
      "Most Panchsheel Enclave bookings are private — small family-only ceremonies rather than large gatherings. Astrology consultations are often conducted in dedicated study or library spaces, and Pandit Ji is comfortable working with household staff for setup and post-puja cleanup without family involvement in the logistics.",
      "Marriage matchmaking and engagement pujas are particularly common in this area, often involving families whose children are based in the US, UK, or Singapore. Pandit Ji coordinates timing with international schedules when needed — including pre-dawn or late-night slots aligned to overseas time zones.",
    ],
    localContext: [
      "Privacy practices matter here. Pandit Ji does not share photographs, attendance details, or any consultation specifics — every booking is treated as confidential by default. For families particularly sensitive about visibility, services can be scheduled at low-traffic times and arrivals coordinated through service entrances.",
      "For Panchsheel Enclave's NRI-linked families, Pandit Ji is comfortable conducting hybrid ceremonies — the in-person ritual happens at the home while remote family members join via video for key moments. The vidhi remains complete; only the participation format adapts.",
    ],
    nearbyAreas: [
      { slug: "greater-kailash-gk1-gk2", anchor: "GK1 and GK2 families needing similar discretion" },
      { slug: "hauz-khas", anchor: "Hauz Khas Enclave residents for refined ceremonies" },
    ],
    pillAnchor: "Pandit in Panchsheel Enclave",
    faqs: [
      {
        question: "Does Pandit Ji maintain confidentiality?",
        answer:
          "Absolutely. Pandit Yash Shastri maintains strict confidentiality regarding all consultations and family matters. Your privacy is fully respected.",
      },
      {
        question: "Can services be scheduled for early morning or late evening?",
        answer:
          "Yes — Pandit Ji offers flexible scheduling to accommodate busy professionals. Early morning pujas (especially muhurat-based) and evening consultations can be arranged on request.",
      },
      {
        question: "Can the puja be coordinated with NRI family members joining remotely?",
        answer:
          "Yes — Pandit Ji conducts hybrid ceremonies where the ritual happens in person at the home and overseas family members join via video for key moments. The vidhi remains complete.",
      },
      {
        question: "Do you work with household staff for setup if family is unavailable?",
        answer:
          "Yes — Pandit Ji can coordinate the entire setup and post-puja cleanup with household staff briefed in advance, so family members only need to be present for the core ritual moments.",
      },
    ],
  },
  {
    slug: "greater-kailash-gk1-gk2",
    name: "Greater Kailash",
    fullName: "Greater Kailash (GK1 & GK2), South Delhi",
    areaType: "Premier residential area",
    description:
      "Greater Kailash is among Delhi's most prestigious addresses. Both GK1 and GK2 are home to settled families who value tradition, who span generations, and who seek authentic spiritual guidance delivered with the same standard expected of long-standing community institutions.",
    popularServices: ["All Pujas", "Astrology Consultation", "Wedding Services"],
    nearbyLandmarks: ["GK M Block Market", "Nehru Place", "Kailash Colony"],
    metaTitle: "Pandit in Greater Kailash GK1 GK2 | Pandit Yash Shastri",
    metaDescription:
      "Trusted pandit in Greater Kailash (GK1 & GK2). Pandit Yash Shastri offers complete puja services, astrology & wedding ceremonies for GK families.",
    h1: "Pandit & Astrologer in Greater Kailash (GK1 & GK2)",
    content: [
      "Greater Kailash spans two distinct sub-localities — GK1 (M, N, W, S blocks) with its mix of bungalows and apartment buildings, and GK2 (E, W, and the perimeter near Alaknanda) leaning more towards apartments. Pandit Yash Shastri serves both, with most bookings clustered around weddings, engagements, and annual family rituals.",
      "GK families often span three generations — grandparents who have lived in the home for decades, working-age children, and grandchildren visiting or studying. Pandit Ji adapts ceremonies to involve everyone — shorter participatory segments for elderly family members and brief explanations for younger participants unfamiliar with specific mantras.",
      "The GK1 M Block Market and Kailash Colony Market are useful reference points — Pandit Ji is familiar with parking and access for most blocks. For larger weddings involving community halls or hotels in the GK area, full Vivah Puja services are conducted at the venue with all required pheras and post-wedding rituals.",
    ],
    localContext: [
      "Three-generation pujas have specific logistics that matter — Pandit Ji ensures asanas are accessible for elderly family members, paces mantras so everyone can follow along, and keeps the entire ceremony within a comfortable 60–90 minute window when needed. Longer formal versions remain available when families prefer them.",
      "Wedding bookings in GK fill the fastest during the November–February season. For families planning a December–January wedding, initial muhurat consultations should ideally happen by August or September to lock in the date and reserve the slot.",
    ],
    nearbyAreas: [
      { slug: "panchsheel-enclave", anchor: "Panchsheel Enclave neighbours booking private ceremonies" },
      { slug: "lajpat-nagar", anchor: "Lajpat Nagar families seeking traditional sanskars" },
    ],
    pillAnchor: "Pandit in GK1 and GK2",
    faqs: [
      {
        question: "Does Pandit Ji serve both GK1 and GK2?",
        answer:
          "Yes — Pandit Yash Shastri regularly serves families in both Greater Kailash 1 and Greater Kailash 2, as well as nearby areas like Kailash Colony.",
      },
      {
        question: "Are references available from GK families?",
        answer:
          "Pandit Ji has served many families in Greater Kailash over the years. Google reviews are publicly available, and specific references can be shared with prior consent for particular services.",
      },
      {
        question: "How early should we book a wedding muhurat in GK?",
        answer:
          "For November–February weddings, initial muhurat consultations should happen 4–5 months in advance. The actual ceremony date and timing are then locked in to coordinate with venue and family availability.",
      },
      {
        question: "Can the ceremony be kept shorter for elderly family members?",
        answer:
          "Yes — Pandit Ji offers an accessible 60–90 minute version of most ceremonies that retains the essential vidhi while making it easier for elderly participants. Longer formal versions remain available when preferred.",
      },
    ],
  },
  {
    slug: "lajpat-nagar",
    name: "Lajpat Nagar",
    fullName: "Lajpat Nagar, South Delhi",
    areaType: "Vibrant commercial and residential area",
    description:
      "Lajpat Nagar is a vibrant South Delhi locality with a mix of residential areas and famous markets. The diverse community — spanning long-established families and newer arrivals — seeks accessible, authentic spiritual services that fit varied budgets and traditions.",
    popularServices: ["Satyanarayan Katha", "Mundan Sanskar", "Quick Consultation"],
    nearbyLandmarks: ["Lajpat Nagar Central Market", "Defence Colony", "Moolchand Metro"],
    metaTitle: "Pandit in Lajpat Nagar | Affordable Puja Services | Pandit Yash Shastri",
    metaDescription:
      "Need a pandit in Lajpat Nagar? Pandit Yash Shastri offers authentic home puja, sanskars & astrology at reasonable rates. Serving Lajpat Nagar 1, 2, 3 & 4.",
    h1: "Pandit & Astrologer in Lajpat Nagar",
    content: [
      "Lajpat Nagar is one of South Delhi's most diverse neighbourhoods — the residential blocks of LNP 1, 2, 3, and 4, the bustling Central Market area, and the streets connecting to Defence Colony and Jangpura. Pandit Yash Shastri's services here reflect this mix: a wide range of family backgrounds, accessible pricing, and flexible scheduling.",
      "Many Lajpat Nagar bookings are recurring family practices — annual Satyanarayan Kathas, Mundan Sanskars for children, and routine astrology consultations during major life events. Pandit Ji has long-standing relationships with several Lajpat Nagar families, which often translates into easier booking through familiar references.",
      "For families near the Central Market, parking is a real consideration. Pandit Ji arrives early on weekend bookings and coordinates through the residential side streets. Block-wise access (LNP-1 through LNP-4) is well known, so directions usually don't require extra coordination beyond the booking call.",
    ],
    localContext: [
      "Group pujas for joint family homes are a particularly common request in Lajpat Nagar. Pandit Ji is comfortable working in homes with 10–20 family members present, structuring the ceremony so that key moments involve everyone while practical bits proceed efficiently.",
      "For the Central Market–adjacent residential streets, weekend bookings work best either in the early morning (before market traffic builds up) or in the evening after 7:00 PM. Pandit Ji can advise on the best slot during the initial booking call.",
    ],
    nearbyAreas: [
      { slug: "greater-kailash-gk1-gk2", anchor: "GK families with multi-generational ceremonies" },
      { slug: "aiims-delhi", anchor: "AIIMS area neighbours for compassionate services" },
    ],
    pillAnchor: "Pandit in Lajpat Nagar",
    faqs: [
      {
        question: "Which parts of Lajpat Nagar does Pandit Ji serve?",
        answer:
          "Pandit Yash Shastri serves all parts including Lajpat Nagar 1, 2, 3, and 4, as well as nearby areas like Defence Colony and Jangpura.",
      },
      {
        question: "Is parking available if Pandit Ji visits by car?",
        answer:
          "Pandit Ji is familiar with parking challenges in Lajpat Nagar and plans visits accordingly. Please share parking guidance when booking to keep the visit smooth.",
      },
      {
        question: "Can pujas be arranged for joint families with many participants?",
        answer:
          "Yes — Pandit Ji regularly conducts ceremonies for joint families of 10–20 members. The vidhi is structured so that key moments involve everyone meaningfully.",
      },
      {
        question: "What is the best time for weekend bookings near Lajpat Central Market?",
        answer:
          "Early morning (before 9:00 AM) or evening after 7:00 PM works best for Central Market–adjacent streets, avoiding peak market traffic.",
      },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    fullName: "Gurgaon (Gurugram)",
    areaType: "Major metropolitan city",
    description:
      "Gurgaon is a major metropolitan city with numerous residential sectors, corporate offices, and a fast-growing population. Residents and businesses here seek quality spiritual services that fit demanding professional schedules and match the standards of a time-conscious community.",
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
    content: [
      "Gurgaon (Gurugram) is large — Pandit Yash Shastri's bookings span the DLF Phases (1 through 5), Golf Course Road and Golf Course Extension, the Sohna Road apartments, Cyber City offices, sectors 14 through 57, and the newer developments along Dwarka Expressway. Two broad categories cover most bookings: home pujas for families, and office pujas for new ventures.",
      "Office pujas are a Gurgaon specialty. New office inaugurations, factory or warehouse blessings, and annual pujas at corporate offices in Cyber City and Udyog Vihar are routinely booked through Pandit Ji. These are typically conducted during low-occupancy hours — early morning, evening, or weekends — to minimise disruption to working teams.",
      "For home pujas, the most common bookings are Griha Pravesh (especially for families moving into new DLF or Sohna Road properties), Satyanarayan Katha as an annual practice, and astrology consultations for working professionals. Pandit Ji coordinates Gurgaon travel logistics in advance — for areas like Dwarka Expressway or Sushant Lok, a 60–90 minute travel buffer is built into the schedule.",
    ],
    localContext: [
      "For corporate apartment pujas in places like DLF Phase 5 and Golf Course Road, Pandit Ji is familiar with high-rise puja logistics — coordinating with building security, using stairwells or service lifts where main lifts are restricted, and managing setup quickly to keep noise and disruption minimal for neighbours.",
      "NRI families form a noticeable share of Gurgaon bookings — typically parents settled in Gurgaon while children visit from abroad. Pandit Ji can coordinate hybrid ceremonies with remote family participation via video where the situation calls for it.",
    ],
    nearbyAreas: [
      { slug: "greater-kailash-gk1-gk2", anchor: "Greater Kailash families with similar booking patterns" },
      { slug: "panchsheel-enclave", anchor: "Panchsheel Enclave residents seeking premium services" },
    ],
    pillAnchor: "Pandit in Gurgaon – home & office puja",
    faqs: [
      {
        question: "Does Pandit Ji travel to all parts of Gurgaon?",
        answer:
          "Yes — Pandit Yash Shastri serves all areas of Gurgaon including DLF phases 1–5, Golf Course Road, Sohna Road, Sectors 14–57, and Dwarka Expressway areas.",
      },
      {
        question: "Are office pujas available for Gurgaon companies?",
        answer:
          "Yes — Pandit Ji performs office pujas including new office inauguration, annual pujas, and special occasions. Timing can be arranged to minimise business disruption.",
      },
      {
        question: "Is there an additional travel charge for Gurgaon?",
        answer:
          "A nominal travel charge may apply for distant Gurgaon locations. This is discussed upfront during booking with complete transparency — no hidden additions.",
      },
      {
        question: "Are weekend slots available for working professionals in Gurgaon?",
        answer:
          "Yes — Saturday and Sunday morning slots (7:00–11:00 AM) are reserved primarily for working professionals. These typically book 2–3 weeks ahead during peak seasons.",
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
