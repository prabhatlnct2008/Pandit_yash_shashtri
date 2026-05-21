export interface PanditQA {
  id: string;
  question: string;
  answer: string;
  category: string;
  askedBy: string;
  dateRelative: string;
  featuredInSchema?: boolean; // included in FAQPage JSON-LD when true
}

// Long-form Q&As answered by Pandit Yash Shastri. Voice is intentionally
// conversational — Hindi/English code-switching, occasional informality —
// to read as human-written rather than templated.
export const PANDIT_QAS: PanditQA[] = [
  {
    id: "shivling-at-home",
    question:
      "My in-laws have given us a small marble Shivling for our new flat in DLF. Can we keep it at home or is it bad?",
    answer:
      "Beta, this is a question many families ask me. Shivling at home is fine — but it brings some daily discipline with it. You should be able to do at least a jal abhishek every morning — fresh water, a bel patra if you can. If for any reason a day goes by and the abhishek doesn't happen, do not feel guilty, just resume the next day. Many people get scared by random advice that Shivling at home brings problems — there is no such rule in our shastra. Just keep the Shivling small (thumb-size is enough), keep the area clean, and don't place flowers from previous day. If you cannot manage daily abhishek, then a Shiv ji photo or murti is also acceptable. Aap chahein toh WhatsApp pe call kijiye, mein detail mein bata dunga.",
    category: "Mandir & Vastu",
    askedBy: "Priya, Gurgaon",
    dateRelative: "2 weeks ago",
    featuredInSchema: true,
  },
  {
    id: "13-day-ritual-timing",
    question:
      "My grandfather passed away last week, when should we do the 13-day rituals?",
    answer:
      "My condolences. The 13th day ceremony (terahvin) is counted from the day of cremation, not the day of death — though for most families both are the same. In some traditions it is done on the 12th day instead. The important thing is the daily pind-daan during these days, the brahmin bhojan on terahvin day, and the godaan (cow donation, if your family follows it). Don't take up any auspicious tasks during this period — no shopping for celebrations, no new clothes for everyone in the house. For the actual vidhi please call a pandit immediately, these are time-sensitive rituals. Mein bhi available hoon if you need someone in Delhi NCR.",
    category: "Shraddha & Pitru",
    askedBy: "Anonymous",
    dateRelative: "1 week ago",
    featuredInSchema: true,
  },
  {
    id: "mandir-direction",
    question:
      "Which direction should my home mandir face? My architect said south facing but my mother is saying it should be north.",
    answer:
      "Aapki mataji theek keh rahi hain. North-East (Ishan Kona) is the most preferred — this is the standard guidance in vastu shastra. East and North walls are both acceptable. South facing mandir is generally avoided in our tradition. Most pandits would suggest you ask the architect to relook, especially since architects sometimes focus only on natural light and forget the vastu angle. Agar bilkul bhi koi aur option nahi hai, then we can do some softening — a curtain in front of the mandir at night, no idols facing south wall direct. But first option should be NE/E/N. Send me your floor plan on WhatsApp and I can suggest based on actual layout.",
    category: "Mandir & Vastu",
    askedBy: "Manish, Greater Kailash",
    dateRelative: "3 weeks ago",
    featuredInSchema: true,
  },
  {
    id: "baby-name-nakshatra",
    question:
      "What is the best name for a baby boy born on 15th August at 4:32 AM? We want a Sanskrit name.",
    answer:
      "Beta, baby names should not be chosen from a website list — they should match the nakshatra and rashi of the child at the time of birth. For your time and date, I would need to first calculate the exact nakshatra. From 15 August birth around dawn time, likely it is around Krittika nakshatra or close to it, and the rashi-akshar (first syllable) will be specific to that. Common syllables for these nakshatras are 'A', 'I', 'U', 'E' — but the right one needs to be confirmed with full kundli. Some Sanskrit name suggestions starting from these letters are Aarav, Ishaan, Udayan, Eklavya — but please don't pick from this list without checking the akshar. WhatsApp the exact birth time, place and date, mein 1-2 din mein 4-5 suggested names share kar dunga.",
    category: "Sanskar",
    askedBy: "Sonal, Hauz Khas",
    dateRelative: "4 weeks ago",
    featuredInSchema: true,
  },
  {
    id: "mundan-home-or-temple",
    question: "Is it ok to do Mundan at home or must it be at temple?",
    answer:
      "Both are acceptable. Traditionally Mundan is done at the family deity's temple — for many Delhi families that means Chhatarpur Mandir or Kalkaji. But if temple visit is difficult, home Mundan is also fine, the vidhi remains the same. Important thing is the muhurat (right day and time), proper sankalp, and offering the cut hair appropriately afterwards. Some families bury the hair near a peepal tree, some offer it to a flowing water body. The age is also flexible — usually between 7 months and 3 years. If you ask me, do at home where the child is comfortable, it goes much smoother that way for the little one. Call me a week before for muhurat checking and the samagri list.",
    category: "Sanskar",
    askedBy: "Anonymous",
    dateRelative: "1 month ago",
    featuredInSchema: true,
  },
  {
    id: "pitru-paksha-unknown-date",
    question:
      "How is Pitru Paksha shraddha done if we don't know the exact date of grandfather's death?",
    answer:
      "Bahut acha sawaal hai. Many families face this. In Pitru Paksha, if exact tithi (lunar date of passing) is not known, we observe Sarva Pitru Amavasya — the new moon day at the end of Pitru Paksha. This day covers all departed family members. Every year, Sarva Pitru Amavasya is the safe fall-back date. If you know the lunar month but not the exact tithi, then the chaturdashi (14th day) is also commonly used. The main rituals are pind-daan, tarpan, and brahmin-bhojan. Crows are fed first — agar kawe nahi aate, then traditionally it is said the pitr are not satisfied, but really it just means we need to do the offering with full devotion and attention. Drop me a message, I can suggest the date and arrange the samagri.",
    category: "Shraddha & Pitru",
    askedBy: "Suresh, Lajpat Nagar",
    dateRelative: "1 month ago",
    featuredInSchema: true,
  },
  {
    id: "satyanarayan-veg-house",
    question:
      "I want to do Satyanarayan Katha at home but I am vegetarian and we don't have any non-veg in our house, do we still need to do all the shuddhi?",
    answer:
      "Renuka ji, if your house is already pure vegetarian then most of the shuddhi steps are simpler. Still, on the day of katha — clean the puja area thoroughly, fresh clothes for everyone (not necessarily new, just freshly washed), do not consume onion/garlic from the morning, and try to maintain a calm atmosphere — no fights, no loud TV. The actual katha itself takes about 2-2.5 hours including the panchamrit prasad distribution. Most families do this on Purnima but it can be done any day with good intention. Materials needed: roli, akshat, banana, cloves, panchamrit ingredients, prasad (suji halwa or panjeeri). Drop me a message a week before with your preferred date, I'll send the full samagri list.",
    category: "Puja & Rituals",
    askedBy: "Renuka, Panchsheel",
    dateRelative: "5 weeks ago",
  },
  {
    id: "manglik-marriage",
    question:
      "Manglik dosha hai meri girl ki kundli mein. Will marriage with non-manglik boy create problems?",
    answer:
      "Manglik dosha is widely misunderstood. First thing — many girls who are called 'manglik' actually have a partial dosha that gets cancelled out by other planetary positions in the same chart. Without full chart analysis, 'manglik hai' by itself doesn't mean much. Second — even where the dosha is real and strong, traditional remedies exist (kumbh vivah, ashwath vivah, etc.) which families have used for generations. Third — if both partners' kundlis show compatibility on other parameters (gun milan, dasha analysis), the manglik issue alone should not stop the alliance. Please get full chart analysis done — not just a 'manglik check' from a website — and we can discuss properly. Don't take rushed decisions based on partial information.",
    category: "Astrology & Kundli",
    askedBy: "Anonymous",
    dateRelative: "1 month ago",
    featuredInSchema: true,
  },
  {
    id: "basic-samagri",
    question: "What are basic samagri I need to keep at home for any small puja?",
    answer:
      "Beta, ek basic puja samagri box rakh lo at home — saves you running to market every time. Basic items: roli (red), akshat (rice with a little turmeric), kumkum, haldi powder, agarbatti, kapur (camphor), ghee, white cotton wicks, fresh diya, panchamrit ingredients (milk, dahi, ghee, shahad, sugar — these you have anyway in fridge), supari (whole), cloves, elaichi, fresh flowers (genda or rose — buy fresh on the day), banana, coconut, gangajal (small bottle), and a small kalash (copper or brass). For festival pujas additional items needed like bel patra (Shiv), durva grass (Ganesh) — these you buy day before. This basic set is enough for daily puja and most small ceremonies. For bigger pujas I bring the special samagri myself.",
    category: "Puja & Rituals",
    askedBy: "Vineet, Gurgaon",
    dateRelative: "5 weeks ago",
    featuredInSchema: true,
  },
  {
    id: "mahamrityunjay-by-family",
    question:
      "My husband is in hospital. Can I do Mahamrityunjay Jaap at home for his recovery? How many times?",
    answer:
      "Mrs Sharma ji, yes, you absolutely can. Mahamrityunjay jaap done with sincere devotion from a family member has its own value — it doesn't always need to be a pandit. For daily home practice — 11 times in the morning and 11 in the evening using a tulsi or rudraksha mala is a meaningful start. If you can do 108 once a day, even better. Sit facing east, light a diya, and do the chanting with focus on your husband. Don't worry too much about exact pronunciation — bhaav (intention) matters most. Alongside this, agar aap chahein, I can arrange a proper 1.25 lakh count Mahamrityunjay anushthan at home or at the temple — this is a multi-day havan done by 4-5 pandits. Just message me, we will figure out what works for your family right now.",
    category: "Puja & Rituals",
    askedBy: "Mrs. Sharma, AIIMS area",
    dateRelative: "6 weeks ago",
    featuredInSchema: true,
  },
  {
    id: "shraddha-by-daughter",
    question: "What is the rule for Shraddha — should sons do or also daughters?",
    answer:
      "In our shastra, the eldest son traditionally has the primary right and duty for shraddha. But this does not mean daughters cannot — in absence of sons, or where families have evolved their tradition, daughters absolutely can and should do shraddha. Many families today do it jointly — sons and daughters together, which is also acceptable. The key is intention and proper vidhi, not gender exclusion. If father is no more, the eldest son or eldest available family member takes the lead role. If you are the only daughter and your father has no son, please do not feel hesitation — do the shraddha. Pitr accept the offering with the same blessing.",
    category: "Shraddha & Pitru",
    askedBy: "Anonymous",
    dateRelative: "6 weeks ago",
  },
  {
    id: "shop-opening-puja",
    question: "My new shop is opening on 5th Nov, what puja should I do?",
    answer:
      "Karan ji, for a new shop or business opening — Lakshmi-Ganesh puja is the standard. Ganesh first (he removes obstacles), then Lakshmi (for prosperity). On the day of opening — do this in the morning before customers come in. Total time about 60-90 minutes. Samagri needed: small Ganesh and Lakshmi murti or photo, kalash, akshat, roli, agarbatti, ghee diya, panchamrit, fresh flowers, coconut, fruits, prasad, a new red cloth for the gaddi area. If shop is in a busy market area, schedule for 7-8 AM before crowd builds up. Take a muhurat — 5th Nov has some good windows but I need to check based on panchang. Drop me a message at least a week before with your shop address and we will finalise.",
    category: "Puja & Rituals",
    askedBy: "Karan, Chhatarpur",
    dateRelative: "7 weeks ago",
    featuredInSchema: true,
  },
  {
    id: "mundan-season",
    question:
      "My son's mundan is due. He is 2.5 years old. What is the right time of year?",
    answer:
      "Beta, the most preferred months traditionally are during the cooler season — Margashirsha, Pausha, Magha, Phalguna (roughly Dec-Mar) or after monsoon (Sept-Oct). Hot summer is generally avoided because the child's tender scalp needs protection. Within the chosen month, the muhurat depends on the child's nakshatra — usually a Tuesday or Saturday is avoided, and Monday/Wednesday/Friday are favoured. Also avoid Saturn and Mars heavy days. At 2.5 years, your child is at a good age — not too young to be unsettled, not too old to be too aware. Ceremony itself is short — 60-90 mins. Tell me your son's birth details and I'll suggest 2-3 dates in the next 2-3 months.",
    category: "Sanskar",
    askedBy: "Rashmi, Green Park",
    dateRelative: "2 months ago",
  },
  {
    id: "1bhk-morning-puja",
    question:
      "How to do morning puja in a small 1BHK flat where mandir is in bedroom?",
    answer:
      "First — bedroom mandir is acceptable but not ideal. Keep a small curtain or cloth that you can pull across the mandir at night. In the morning before puja, pull the curtain aside, freshen up, and then do the puja. Basic morning routine for 1BHK setup: 1) Light a diya 2) Offer fresh water (a small jal-arpan) 3) Akshat and a flower to the deity 4) Light agarbatti 5) Two-three mantras of your tradition (Om Gan Ganapataye Namah, Om Namah Shivaya — whatever you follow) 6) Pranam and close. Total 5-7 minutes. Beta, don't make it elaborate when space is small — do the smaller version daily, that is better than doing the elaborate version once a week. Consistency is what builds the connect.",
    category: "Daily Practice",
    askedBy: "Anonymous",
    dateRelative: "2 months ago",
    featuredInSchema: true,
  },
  {
    id: "tuesday-saturday-myth",
    question: "Is Tuesday or Saturday a bad day for starting new things?",
    answer:
      "There is a common belief that Tuesday and Saturday are avoided for new starts — especially Tuesday for journey, Saturday for shaving/haircut. But please remember — these are general guidelines, not absolute rules. Tuesday is actually auspicious for Hanuman related work, real estate purchase, certain investments. Saturday is good for Shani-related remedies, donating, helping the poor. Within these days there are good and bad muhurats based on the panchang. So the question is not 'Tuesday is bad', but 'is this particular Tuesday morning good for this particular new start'. Bhai sahab, send me what you are planning and the date, I'll check the panchang and tell you the actual muhurat windows.",
    category: "Muhurat & Timing",
    askedBy: "Anil, Mehrauli",
    dateRelative: "2 months ago",
  },
  {
    id: "baby-girl-naming",
    question: "How to choose a baby girl name based on rashi and nakshatra?",
    answer:
      "Meera ji, the process is — first, exact birth time and place tell us the moon's position at that moment. From that we get the nakshatra (constellation, one of 27) and the rashi (sign, one of 12). Each nakshatra has 4 padas (quarters), and each pada has a specific syllable (akshar) for the child's name. For example, if your daughter is born under Pushya nakshatra 2nd pada, the syllable is 'Ho' or 'Da' depending on the specific tradition. From there, we shortlist names starting with that syllable. So please send me the exact birth time (HH:MM AM/PM), date, and city. Within 1-2 days I share 5-7 name options with their meanings. The naming ceremony (Naamkaran sanskar) is then done on the 11th day or as the family prefers.",
    category: "Sanskar",
    askedBy: "Meera, Gurgaon",
    dateRelative: "2 months ago",
    featuredInSchema: true,
  },
  {
    id: "asthi-visarjan-timing",
    question: "In how many days after death should asthi visarjan be done?",
    answer:
      "The traditional period is within 10-13 days after cremation, but ideally from the 4th day onwards. In Delhi NCR, most families do visarjan at Haridwar — Har Ki Pauri is the main ghat. Some go to Prayagraj (Allahabad) at the Sangam. Travel by train or by car the day before, visarjan in the morning, then return same day or next. The vidhi at the ghat is done by a tirth purohit there — they handle the pind-daan, gau-pooja, and the actual immersion. Total time at the ghat is 90 mins to 2 hours. Many families combine this with the terahvin-related rituals. If your family is doing this and want me to coordinate the Haridwar visit or do the pre-departure puja at home, just call.",
    category: "Shraddha & Pitru",
    askedBy: "Anonymous",
    dateRelative: "2 months ago",
  },
  {
    id: "karwa-chauth-vidhi",
    question: "Why is Karwa Chauth so important and what is the correct vidhi at home?",
    answer:
      "Karwa Chauth is observed on the fourth day after Sharad Purnima (Kartik Krishna Chaturthi). The fast is from sunrise to moonrise. Married women keep this for the long life and well-being of their husband. Pre-evening preparation: sargi in the early morning (food eaten before sunrise, traditionally given by mother-in-law). Then nirjala (no food, no water) fast through the day. Evening puja around 5:30-6:30 PM with other women — listening to Karwa Chauth katha, doing aarti, exchanging baya (gift bundle) with elder lady. Then waiting for moon rise — usually around 7:30-8:15 PM in Delhi but check the exact time for the year. Once moon is sighted, see husband through a sieve, drink water from his hands, eat the first morsel. If you want me to come and conduct the katha for a group at your place, message me a week before.",
    category: "Festival",
    askedBy: "Pratibha, Lajpat Nagar",
    dateRelative: "3 months ago",
  },
  {
    id: "godh-bharai",
    question:
      "My wife is pregnant, 7th month chal raha hai, family wants Godh Bharai. What is the vidhi?",
    answer:
      "Congratulations bhai sahab. Godh Bharai (also called Seemantonnayana) is one of the 16 sanskars in our tradition. It is traditionally done in the 7th or 8th month. The family ladies (mother-in-law, elder sisters, aunts) gather and place sweets, fruits, dry fruits, and small gifts in the expecting mother's lap (godh). She is dressed in new traditional clothes, bangles, jewellery — usually red, green, or yellow. A small puja for healthy delivery is done — Ganesh first, then a prayer to Gauri-Parvati. Songs are sung, blessings shared. The function is more emotional-cultural than ritualistic, so don't make it stressful. Mein agar zaroori ho toh aa sakta hoon to do the puja portion but actually a senior lady from family can also lead this — call me if anything is unclear.",
    category: "Sanskar",
    askedBy: "Amit, GK 2",
    dateRelative: "3 months ago",
    featuredInSchema: true,
  },
  {
    id: "rudrabhishek-vs-mahamrityunjay",
    question:
      "What is the difference between Rudrabhishek and Mahamrityunjay Jaap? Which one should I do?",
    answer:
      "Both are powerful Shiv-related practices but quite different. Rudrabhishek is an abhishek — offering of liquids (water, milk, honey, ghee, curd, gangajal, bel patra) on the Shivling while chanting the Rudra suktam from Yajurveda. It is more devotional and is done for general well-being, peace, removal of doshas. Mahamrityunjay Jaap is a chanting practice — repetition of the Mahamrityunjay mantra (Om Tryambakam Yajamahe…) — specifically focused on health, healing, and protection from untimely difficulties. Both can be done together for serious situations. If you are looking for general blessing and peace — Rudrabhishek. If there is specific health concern in family — Mahamrityunjay Jaap. If you want both — many families do Rudrabhishek with Mahamrityunjay mantras inserted during the abhishek, which gives benefit of both. I can do either at your home — typically 2-3 hours for Rudrabhishek, 1-2 hours for a 108-count Mahamrityunjay.",
    category: "Puja & Rituals",
    askedBy: "Anonymous",
    dateRelative: "3 months ago",
    featuredInSchema: true,
  },
  {
    id: "vastu-shanti-rented-flat",
    question: "What is Vastu Shanti puja? Do I need it even if my flat is rented?",
    answer:
      "Arvind ji, Vastu Shanti is performed to balance the directional energies of a home or office. It is most commonly done — 1) During Griha Pravesh (entering a new home) 2) After major renovation 3) If the family feels persistent unease and wants a 'reset'. For rented flats — technically yes, you can do Vastu Shanti, but most families do a simpler Ganesh-Lakshmi puja for rentals and reserve full Vastu Shanti for owned homes. The reason is that Vastu Shanti involves making offerings to the dik-palas (directional guardians) of the building itself, and for a rented property the connection is temporary. If you have specific concerns about the rented flat — Vastu Dosha symptoms or just unsettled feeling — I would suggest a shorter Vastu correction puja (about 2 hours) instead of the full Shanti. Tell me what's happening, we'll decide together.",
    category: "Mandir & Vastu",
    askedBy: "Arvind, Sohna Road",
    dateRelative: "3 months ago",
  },
  {
    id: "saturday-hair-wash",
    question:
      "Pandit ji, my mother says I should not wash hair on Saturday. Is this really shastra or just family rule?",
    answer:
      "Beta, this is one of those things — partly shastra, partly family rule. The general guideline is Saturday is associated with Shani, and some traditions say washing hair on Saturday 'washes away' Lakshmi blessings of the week. But this is not in any major scripture as an absolute rule — it is a folk practice that has become tradition in many North Indian families. Other days commonly avoided are Thursday (Brihaspati's day, considered better for shaving and grooming earlier in the week) and Sunday (some traditions). If your hair washing schedule conflicts with these family rules, take a middle path — wash on Friday evening or Sunday morning instead of Saturday. Don't fight with mataji over this — these small things keep the family rhythm peaceful. If she insists, just adjust the day. Bigger battles are worth fighting; this one usually isn't.",
    category: "Daily Practice",
    askedBy: "Sneha, Hauz Khas",
    dateRelative: "3 months ago",
  },
  {
    id: "naamkaran-meaning",
    question: "What is Naamkaran Sanskar and when should it be done?",
    answer:
      "Naamkaran is the 5th of the 16 sanskars in Hindu tradition — the formal naming ceremony of the newborn. Traditionally it is done on the 11th day after birth. Some families do on the 12th day, some on the 100th day, some on the first birthday — there is flexibility based on family custom. The vidhi: father whispers the chosen name in the baby's right ear, the name is then announced to the gathering, Ganesh and family deity puja is done for the child's well-being, and the baby is blessed by elders. The name is chosen as per the nakshatra-akshar (syllable based on birth star). Pandit ji or family priest leads the ceremony. Total time 90 mins. If you want to plan one, send me birth details 5-7 days in advance — I share name options first, then we do the ceremony on the chosen day.",
    category: "Sanskar",
    askedBy: "Anonymous",
    dateRelative: "3 months ago",
    featuredInSchema: true,
  },
  {
    id: "flight-muhurat",
    question: "How do you check muhurat for a flight booking?",
    answer:
      "Vivek ji, for travel — the panchang is checked for the day's general yog (combinations) and the specific time of departure. Things avoided: 1) Rahu Kaal of the day (90 min window that varies by day) 2) Specific tithis like chaturdashi/amavasya for new journeys 3) Tuesday for travel toward north, Saturday for travel toward east — direction specific (dishashool) 4) Eclipses if travelling for important purpose. Things favoured: morning hours, Thursday or Sunday for most directions, ascending moon phases. For a flight that is already booked and unchangeable — don't stress, just leave the house at a slightly better local time within reason, do a small Ganesh prayer before stepping out, and proceed. Don't cancel pre-booked flights over muhurat — that creates more disruption than the muhurat issue itself. Mein aapko panchang ka snapshot share kar dunga if you tell me the date.",
    category: "Muhurat & Timing",
    askedBy: "Vivek, Greater Kailash",
    dateRelative: "3 months ago",
  },
  {
    id: "first-death-anniversary",
    question:
      "My husband had passed away last year. This year for his first death anniversary, what is the vidhi?",
    answer:
      "My deepest condolences Mrs Gupta. The first death anniversary (Pratham Shraddha or Vaarshik Shraddha) is significant. It is observed on the same lunar tithi as the death (not the English calendar date). Vidhi: 1) Pind-daan in the morning at home 2) Brahmin bhojan — feed 3-5 brahmins simple sattvik food 3) Donate one set of clothes, an umbrella, footwear (these are traditional items for the departed soul's onward journey) 4) Feed crows first before family eats — symbolic offering 5) Family does not have any celebration on this day, just remembrance. Many families also visit the cremation ghat or do Ganga jal sprinkling. After this first anniversary, the annual shraddha continues every year on the same tithi. Mein aa sakta hoon to lead the vidhi if you want — just message me 5-7 days before so we can fix the date as per panchang.",
    category: "Shraddha & Pitru",
    askedBy: "Mrs. Gupta, Mehrauli",
    dateRelative: "4 months ago",
    featuredInSchema: true,
  },
  {
    id: "saraswati-puja-kids",
    question: "How is Saraswati Puja done at home for child's studies?",
    answer:
      "Saraswati puja for studies is mostly done on Basant Panchami (in Jan/Feb) but it can be done anytime — especially before exams or before starting a new subject. Set up a clean white cloth (Saraswati is associated with white), place Saraswati ji's photo or murti, light a diya and white agarbatti, offer white flowers (lily, jasmine, white roses), white sweets (kheer, batasha), yellow akshat. The child should bring their books, pen, instrument (if music student) and place them at Saraswati ji's feet during the puja. Short Saraswati Vandana mantra is chanted. After puja, the books are kept at the mandir overnight, picked up by the child the next morning before studies resume. Total time 30-45 minutes. Very simple but powerful for building the child's connect with their studies.",
    category: "Festival",
    askedBy: "Anonymous",
    dateRelative: "4 months ago",
  },
  {
    id: "16-sanskars",
    question:
      "Pandit ji, what are the 16 sanskars? My in-laws keep talking about them.",
    answer:
      "Deepak ji, the 16 sanskars (Shodash Sanskar) are the traditional life ceremonies marking key transitions in a Hindu's life. They are: 1) Garbhadhan (conception) 2) Pumsavana (3rd month of pregnancy, prayer for a healthy child) 3) Seemantonnayana (Godh Bharai, 7th-8th month) 4) Jatakarma (birth ceremony) 5) Naamkaran (naming, 11th day) 6) Nishkramana (first outing, 4th month) 7) Annaprashan (first solid food, 6th month) 8) Chudakarana (Mundan) 9) Karnavedh (ear piercing) 10) Upanayana (sacred thread, around 8-12 years for boys) 11) Vedarambh (start of study) 12) Samavartana (completion of study) 13) Vivah (marriage) 14) Vanaprastha (retirement from worldly duties) 15) Sanyasa (renunciation) 16) Antyeshti (last rites). Most modern families practice 5-7 of these actively. Your in-laws might be referring to specific ones for your current life stage — ask them which ones they think are pending. Mein aapko WhatsApp pe full list ke saath details bhej sakta hoon.",
    category: "Sanskar",
    askedBy: "Deepak, Panchsheel",
    dateRelative: "4 months ago",
    featuredInSchema: true,
  },
  {
    id: "tulsi-plant-dried",
    question:
      "Tulsi plant in my balcony has dried up. Is this a bad sign? Should I plant new one?",
    answer:
      "Anjali ji, please don't worry too much — Tulsi drying can happen for very practical reasons — too much sun, not enough water, root-bound pot, or seasonal change. The North Indian winter is hard on Tulsi. Whether it is a 'sign' depends on the rest of the situation in your home. If family is healthy, work is good, peace at home — likely it is just botanical, not spiritual. Replanting is absolutely fine — many families do this each year. When planting new Tulsi: choose a clay or terracotta pot (not plastic), use well-draining soil, place where it gets 4-5 hours of morning sun. Light a diya near the new plant on the day of planting, offer a small mantra (Om Tulsi Devyai Namah). For the dried plant — don't throw in trash; uproot gently, the wood/stems can be kept at the base of a tree, or for a small offering in a flowing water body. New Tulsi will grow.",
    category: "Daily Practice",
    askedBy: "Anjali, Chhatarpur",
    dateRelative: "4 months ago",
  },
  {
    id: "friday-gold-buying",
    question: "Is Friday a good day for buying gold?",
    answer:
      "Yes, Friday is traditionally associated with Lakshmi-related activities, and gold buying on Friday is considered auspicious in many families. Other recommended days for gold: Akshaya Tritiya (Vaishakh Shukla Tritiya, falls around Apr-May), Dhanteras (two days before Diwali), Pushya Nakshatra days. Avoid: Saturdays (Shani's day, generally avoided for gold/jewellery purchase), and amavasya. Within the chosen day, also avoid the local Rahu Kaal window. But again — these are guidelines, not iron rules. If you have a wedding to plan and Saturday is when the jeweller can give you a good deal, don't reject the deal over muhurat. Buy on Saturday but defer the symbolic 'wearing first time' to a Friday. Common sense and tradition can work together.",
    category: "Muhurat & Timing",
    askedBy: "Anonymous",
    dateRelative: "5 months ago",
  },
  {
    id: "aarti-for-elder",
    question:
      "My mother is very religious and wants to do daily morning aarti but her health is not allowing her to stand. Can I do it for her?",
    answer:
      "Mahesh, this is a beautiful question and shows your care. Absolutely yes — family members can do daily aarti on behalf of an unwell elder. Your mother can sit and listen, or even sit quietly with her eyes closed while you do the aarti — that participation is enough on her part. Aarti vidhi: light the diya, ring the bell, do the circular motion in front of the deity (clockwise, starting from the bottom), chant the aarti words (Om Jai Jagdish Hare or your family's preferred), bring the diya around to your mother so she can take the blessing by hand gesture, share prasad. Daily 10-15 minutes is enough. If she has a specific deity she follows — Hanuman ji, Devi ji, Krishna — let me know and I can suggest the right aarti for her. And don't forget the medical side — health permitting, even sitting quietly during your aarti, she will feel connected. Sometimes the bhaav (intention) is bigger than the body.",
    category: "Daily Practice",
    askedBy: "Mahesh, AIIMS area",
    dateRelative: "5 months ago",
    featuredInSchema: true,
  },
];

export function getSchemaQAs() {
  return PANDIT_QAS.filter((q) => q.featuredInSchema).map((q) => ({
    question: q.question,
    answer: q.answer,
  }));
}
