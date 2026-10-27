/**
 * Location Landing Page Data — Bread & Bite Navi Mumbai
 *
 * Each location has unique, SEO-rich content for organic traffic capture.
 * Imported by:
 *   1. pages/LocationPage.jsx (React client-side)
 *   2. scripts/prerender.js   (Node.js build-time HTML shells)
 *
 * IMPORTANT: Keep this file as pure JS (no JSX, no React imports).
 */

const SITE_URL = 'https://breadandbite.in';

export const LOCATIONS = [
  // ═══════════════════════════════════════════════════
  // KHARGHAR — Primary target area
  // ═══════════════════════════════════════════════════
  {
    slug: 'kharghar',
    name: 'Kharghar',
    fullName: 'Kharghar, Navi Mumbai',
    pinCode: '410210',
    deliveryTime: '20–30',
    mapEmbedQuery: 'Kharghar+Navi+Mumbai+Maharashtra+410210',

    // SEO Meta
    title: 'Food Delivery in Kharghar | Bread & Bite Navi Mumbai',
    description: 'Order fresh 500g Chicken Keema, Korma, Tandoori Roti & Pav delivered hot to Kharghar Sectors 1-35. Fast 20-30 min delivery by Bread & Bite.',
    keywords: 'food delivery kharghar, chicken keema kharghar, order food online kharghar, cloud kitchen kharghar, keema pav kharghar, chicken korma delivery kharghar, navi mumbai food delivery, halal food kharghar, best chicken gravy kharghar, home delivery food kharghar navi mumbai',

    // Hero Content
    heroTagline: 'Hot, Homestyle Meals Delivered to Your Sector',
    heroSubtitle: 'From our cloud kitchen in Taloja Phase 1, we deliver fresh 500g Chicken Keema, rich Chicken Korma, and hot Tandoori Rotis straight to your doorstep across all 35 sectors of Kharghar — in just 20 to 30 minutes.',

    // Content Sections (unique per location)
    sections: [
      {
        heading: 'Why Kharghar Residents Choose Bread & Bite',
        text: 'Kharghar is Navi Mumbai\'s most vibrant residential hub — from the greenery of Central Park to the bustling lanes near Hiranandani Heritage, families here expect quality and value in equal measure. That\'s exactly what we bring to your table. Our 500-gram chicken gravies aren\'t the usual 250g restaurant portions — they\'re honest, family-sized meals cooked fresh with daily-sourced Halal chicken, whole spices, and zero preservatives. Whether you\'re in Sector 4 near the railway station or in Sector 35 near the hills, our dedicated delivery riders reach you within 20 to 30 minutes of placing your order.',
      },
      {
        heading: 'What We Deliver to Kharghar',
        text: 'Our menu is built for hearty meals, not fancy gimmicks. The star dishes are our Chicken Keema Boneless (500g, ₹199) — rich, slow-cooked chicken mince simmered with onions and coriander — and Chicken Korma (500g, ₹199) — tender chicken pieces in a rich cashew-onion gravy. Pair either with hot Tandoori Rotis (₹30 each) or 4-pack soft Ladi Pavs (₹30) for a complete meal. We also serve Crispy Chicken Burgers (₹149), French Fries (200g, ₹99), and value meal combos like the Keema Pav Meal (₹219) that save you money without compromising portions.',
      },
      {
        heading: 'Delivery Coverage Across Kharghar',
        text: 'We cover every sector in Kharghar — from Sector 1 near the Kharghar railway station all the way through Sector 35 near the Kharghar hills. Whether you live near Central Park, Oves Kharghar, Hiranandani Fortune City, NRI Complex, or the DY Patil Sports Stadium area, our kitchen-to-doorstep delivery is consistently under 30 minutes. We deliver via our own dedicated fleet, so your food arrives hot and sealed in spill-proof containers — not cold from long aggregator waits.',
      },
    ],

    // Landmarks for local context
    landmarks: [
      'Kharghar Railway Station',
      'Central Park Kharghar',
      'Hiranandani Heritage & Fortune City',
      'DY Patil Stadium & Sports Academy',
      'Oves Kharghar',
      'NRI Complex',
      'Kharghar Hills & Golf Course',
      'Pandavkada Falls Road',
    ],

    coverageDetail: 'All Sectors 1 to 35, including areas near Kharghar Railway Station, Central Park, Hiranandani Heritage, Oves, NRI Complex, and DY Patil Stadium.',

    // FAQs unique to this location
    faqs: [
      {
        question: 'How long does delivery take to Kharghar from Bread & Bite?',
        answer: 'Delivery to Kharghar typically takes 20 to 30 minutes from our cloud kitchen in Taloja Phase 1. Your food is freshly cooked upon order, sealed in spill-proof containers, and delivered hot by our own riders.',
      },
      {
        question: 'Which sectors in Kharghar do you deliver to?',
        answer: 'We deliver to all 35 sectors of Kharghar — from Sector 1 near the railway station to Sector 35 near the hills, including areas around Central Park, Hiranandani Heritage, Oves, NRI Complex, and DY Patil Stadium.',
      },
      {
        question: 'What is the minimum order for free delivery to Kharghar?',
        answer: 'Free delivery to Kharghar is available on all orders above ₹299. Orders below ₹299 have a nominal delivery charge of ₹49.',
      },
      {
        question: 'Can I order party platters for delivery to Kharghar?',
        answer: 'Absolutely! We prepare bulk orders of Keema Pav platters, Chicken Korma handis, and snack boxes for house parties, birthday celebrations, and office events in Kharghar. Message us on WhatsApp at +91 93256 29256 for custom party orders.',
      },
    ],

    nearbyLocations: ['panvel', 'kamothe', 'taloja'],
  },

  // ═══════════════════════════════════════════════════
  // PANVEL — Old Panvel + New Panvel
  // ═══════════════════════════════════════════════════
  {
    slug: 'panvel',
    name: 'Panvel',
    fullName: 'Panvel & New Panvel, Navi Mumbai',
    pinCode: '410206',
    deliveryTime: '25–35',
    mapEmbedQuery: 'Panvel+Navi+Mumbai+Maharashtra+410206',

    title: 'Food Delivery in Panvel | Bread & Bite Navi Mumbai',
    description: 'Order 500g Chicken Keema, Korma & hot Tandoori Roti delivered to Old Panvel, New Panvel & Khandeshwar. 25-35 min delivery by Bread & Bite.',
    keywords: 'food delivery panvel, chicken keema panvel, order food online panvel, cloud kitchen panvel, keema pav new panvel, chicken korma delivery panvel, navi mumbai food delivery, halal food panvel, best non veg delivery panvel',

    heroTagline: 'Homestyle Chicken Gravies, Delivered Fresh to Panvel',
    heroSubtitle: 'Whether you\'re in the bustling lanes of Old Panvel or the modern apartments of New Panvel, Bread & Bite delivers hearty 500g portions of Chicken Keema, Chicken Korma, and freshly baked Tandoori Rotis to your door in 25 to 35 minutes.',

    sections: [
      {
        heading: 'Why Panvel Residents Choose Bread & Bite',
        text: 'Panvel is a town that takes its food seriously — from the roadside keema stalls near the station to the sit-down joints in New Panvel. But finding generous, home-cooked quality food delivered fast was always a gap. That\'s where we come in. Our 500g Chicken Keema isn\'t the watery mince you get from most delivery apps — it\'s a thick, well-spiced, flavorful keema slow-cooked with whole spices and fresh coriander, exactly the way it\'s made in kitchens across Mumbai. At ₹199 for 500 grams, you\'re getting twice the portion of most restaurants at half the price.',
      },
      {
        heading: 'Our Menu for Panvel Delivery',
        text: 'We keep it focused and we keep it honest. Chicken Keema Boneless (500g, ₹199) — our bestseller across all delivery areas. Chicken Korma (500g, ₹199) — a rich, creamy gravy cooked with cashews and fried onions. Pair with Tandoori Rotis (₹30) baked fresh in our clay oven, or soft Ladi Pavs (₹30 for 4 pieces) for the classic keema-pav experience. Our combo meals — Keema Pav Meal at ₹219 and Korma Roti Meal at ₹249 — are complete lunch or dinner solutions. We also have Crispy Chicken Burgers and hot French Fries for lighter cravings.',
      },
      {
        heading: 'Panvel Delivery Coverage',
        text: 'Our delivery covers Old Panvel (station area, market, and residential lanes), New Panvel (all sectors including Orion Mall and D-Mart Road), and Khandeshwar. Whether you\'re near Panvel Railway Station, Orion Mall, Balaji Temple Road, or the highway service road apartments, our riders know every lane. Average delivery time from our Taloja kitchen to Panvel is 25 to 35 minutes depending on traffic and your exact location.',
      },
    ],

    landmarks: [
      'Panvel Railway Station',
      'New Panvel Bus Stand',
      'Orion Mall New Panvel',
      'Khandeshwar Railway Station',
      'Panvel Municipal Market',
      'Balaji Temple Road',
      'D-Mart New Panvel',
      'Sion-Panvel Highway',
    ],

    coverageDetail: 'Old Panvel (station area, market, residential lanes), New Panvel (all sectors, Orion Mall, D-Mart Road), and Khandeshwar area.',

    faqs: [
      {
        question: 'Do you deliver to both Old Panvel and New Panvel?',
        answer: 'Yes! We cover both Old Panvel (near the station and market) and New Panvel (including areas near Orion Mall, D-Mart Road, and the highway service road apartments). We also deliver to Khandeshwar.',
      },
      {
        question: 'How long does delivery take to Panvel?',
        answer: 'Delivery to Panvel takes approximately 25 to 35 minutes from our kitchen in Taloja Phase 1. Your food is freshly cooked upon order, so it arrives hot and sealed.',
      },
      {
        question: 'What payment methods do you accept in Panvel?',
        answer: 'We accept Cash on Delivery, UPI (Google Pay, PhonePe, Paytm), and all major debit/credit cards. Payment is collected at your doorstep.',
      },
      {
        question: 'Is the chicken Halal for Panvel orders?',
        answer: 'Yes, all our chicken is 100% Halal certified, sourced fresh daily from certified local suppliers. We never use frozen chicken or pre-made gravy bases.',
      },
    ],

    nearbyLocations: ['kharghar', 'kamothe', 'kalamboli'],
  },

  // ═══════════════════════════════════════════════════
  // KAMOTHE — Residential township
  // ═══════════════════════════════════════════════════
  {
    slug: 'kamothe',
    name: 'Kamothe',
    fullName: 'Kamothe, Navi Mumbai',
    pinCode: '410209',
    deliveryTime: '20–30',
    mapEmbedQuery: 'Kamothe+Navi+Mumbai+Maharashtra+410209',

    title: 'Food Delivery in Kamothe | Bread & Bite Navi Mumbai',
    description: 'Order 500g Chicken Keema, Korma & Tandoori Roti delivered fresh to Kamothe sectors. Fast 20-30 min home delivery by Bread & Bite cloud kitchen.',
    keywords: 'food delivery kamothe, chicken keema kamothe, order food online kamothe, cloud kitchen kamothe, keema pav kamothe, chicken korma delivery kamothe, halal food kamothe navi mumbai, non veg delivery kamothe',

    heroTagline: 'Fresh 500g Chicken Meals, Right at Your Door in Kamothe',
    heroSubtitle: 'Kamothe families love generous portions and homestyle flavors. Our kitchen delivers exactly that — 500g Chicken Keema, rich Chicken Korma, and hot-off-the-tandoor Rotis to all Kamothe sectors in 20 to 30 minutes flat.',

    sections: [
      {
        heading: 'Why Kamothe Families Order from Bread & Bite',
        text: 'Kamothe is a family-first township — quiet, clean, and full of young households who value honest meals over flashy restaurant packaging. Our cloud kitchen was built for exactly this audience. When you order a 500g Chicken Keema from us, you get a real home-cooked meal that fills two adults comfortably, not a tiny 250g container with more gravy than meat. Our Tandoori Rotis are baked fresh the moment your order comes in, and our Ladi Pavs are soft bakery-quality — never stale, never reheated. Families in Kamothe regularly order our Keema Pav Meal (₹219) and Korma Roti Meal (₹249) as weekday dinner solutions — quick, affordable, and genuinely satisfying.',
      },
      {
        heading: 'Complete Menu for Kamothe Delivery',
        text: 'Our menu focuses on doing a few things exceptionally well. Chicken Keema Boneless (500g, ₹199) — our signature dish, slow-cooked with whole spices and fresh coriander. Chicken Korma (500g, ₹199) — tender chicken in a Mughlai cashew-onion gravy. Random Chicken Gravy (500g, ₹199) — our chef\'s daily special, a different homestyle curry every day. Add Tandoori Rotis (₹30), Ladi Pav pack (₹30 for 4 pieces), French Fries (200g, ₹99), Maggi (₹99), or a Crispy Chicken Burger (₹149). Our combo deals save you ₹10-19 per meal.',
      },
      {
        heading: 'Kamothe Delivery Coverage',
        text: 'We deliver across all Kamothe sectors — from the residential blocks near Mansarovar to the areas near Kamothe railway station and the main bus depot. Whether you live near the Kamothe circle, the D-Mart area, or the newer residential complexes towards Kharghar, our riders reach you in 20 to 30 minutes. We use our own delivery fleet, so your food stays hot in insulated bags and arrives in sealed, spill-proof packaging.',
      },
    ],

    landmarks: [
      'Kamothe Railway Station',
      'Kamothe Bus Depot',
      'Mansarovar Complex',
      'D-Mart Kamothe',
      'Kamothe Circle',
      'Raghunath Nagar',
      'Kamothe Gaon',
    ],

    coverageDetail: 'All residential sectors in Kamothe, including areas near Mansarovar, Kamothe Railway Station, bus depot, D-Mart, and the Kamothe Circle.',

    faqs: [
      {
        question: 'How quickly can you deliver to Kamothe?',
        answer: 'We deliver to Kamothe in approximately 20 to 30 minutes from our kitchen in Taloja Phase 1. Your meal is cooked fresh upon order and delivered hot in sealed containers.',
      },
      {
        question: 'Do you deliver to all parts of Kamothe?',
        answer: 'Yes — we cover all residential sectors in Kamothe, including Mansarovar area, near the railway station, Kamothe bus depot, D-Mart road, Kamothe Circle, and the newer complexes towards Kharghar.',
      },
      {
        question: 'What are the best-selling items in Kamothe?',
        answer: 'The Keema Pav Meal (500g Chicken Keema + 4 Pavs at ₹219) is our most popular combo in Kamothe, followed by the Chicken Korma & Roti Meal (₹249). Many families order these as their weekday dinner.',
      },
    ],

    nearbyLocations: ['kharghar', 'panvel', 'kalamboli'],
  },

  // ═══════════════════════════════════════════════════
  // KALAMBOLI — Commercial + Residential
  // ═══════════════════════════════════════════════════
  {
    slug: 'kalamboli',
    name: 'Kalamboli',
    fullName: 'Kalamboli, Navi Mumbai',
    pinCode: '410218',
    deliveryTime: '25–35',
    mapEmbedQuery: 'Kalamboli+Navi+Mumbai+Maharashtra+410218',

    title: 'Food Delivery in Kalamboli | Bread & Bite Navi Mumbai',
    description: 'Order 500g Chicken Keema, Korma & Tandoori Roti delivered to Kalamboli. Hot meals in 25-35 min from Bread & Bite cloud kitchen.',
    keywords: 'food delivery kalamboli, chicken keema kalamboli, order food online kalamboli, cloud kitchen kalamboli, keema pav kalamboli, food delivery near kalamboli steel market, halal food kalamboli navi mumbai',

    heroTagline: 'Filling Meals Delivered Fast to Kalamboli',
    heroSubtitle: 'Whether you\'re working near the Steel Market or relaxing at home in a Kalamboli residential complex, Bread & Bite delivers 500g chicken meals, hot Tandoori Rotis, and value combos to your door in 25 to 35 minutes.',

    sections: [
      {
        heading: 'Kalamboli\'s Go-To Cloud Kitchen',
        text: 'Kalamboli is a town of hard-working people — from the shopkeepers at the Steel Market and APMC to the families in the growing residential sectors. When lunch or dinner needs to be quick, filling, and affordable, Bread & Bite is the answer. Our 500g Chicken Keema (₹199) feeds two adults easily, and our value combos like the Keema Pav Meal (₹219) or Burger & Fries Combo (₹229) are designed for people who want a real meal without overspending. No tiny portions, no hidden charges — just honest food at honest prices.',
      },
      {
        heading: 'What You Can Order in Kalamboli',
        text: 'Chicken Keema Boneless (500g, ₹199) — our bestselling dish, rich and flavorful. Chicken Korma (500g, ₹199) — a milder, creamier option perfect with rotis. Chef\'s Special Chicken Gravy (500g, ₹199) — a different homestyle curry every day for variety. Tandoori Roti (₹30) and Ladi Pav (₹30 for 4) round out the meal. For something lighter, try our Crispy Chicken Burger (₹149) or crispy French Fries (200g, ₹99). All chicken is 100% Halal, fresh-sourced daily, and cooked on order.',
      },
      {
        heading: 'Delivery Areas in Kalamboli',
        text: 'We cover all of Kalamboli — from the residential sectors near the Steel Market and Furniture Market to the APMC Market area and Palaspe Phata. Whether you\'re near Kalamboli station, the highway service road, or the newer apartment complexes, our riders reach you in 25 to 35 minutes. Office lunch orders near the commercial areas are especially popular — message us on WhatsApp for group orders.',
      },
    ],

    landmarks: [
      'Kalamboli Steel Market',
      'Kalamboli Furniture Market',
      'APMC Market Kalamboli',
      'Kalamboli Railway Station',
      'Palaspe Phata',
      'D-Mart Kalamboli',
      'Kalamboli Circle',
    ],

    coverageDetail: 'All sectors in Kalamboli including Steel Market area, Furniture Market, APMC Market, Palaspe Phata, Railway Station area, and highway-side residential complexes.',

    faqs: [
      {
        question: 'Do you deliver to the Kalamboli Steel Market area?',
        answer: 'Yes! We deliver to all parts of Kalamboli including the Steel Market area, APMC Market, residential sectors, and the highway service road. Group lunch orders for shop workers and offices are welcome — message us on WhatsApp.',
      },
      {
        question: 'How long does delivery take to Kalamboli?',
        answer: 'Delivery to Kalamboli takes approximately 25 to 35 minutes from our Taloja Phase 1 kitchen. Your meal is cooked fresh upon order, not pre-made.',
      },
      {
        question: 'Can I order lunch for my office or shop in Kalamboli?',
        answer: 'Absolutely! Many offices and shop owners near the Steel Market and APMC order daily lunch from us. We offer combo meals starting at ₹219 that are perfect for working lunches. Contact us on WhatsApp at +91 93256 29256 for group orders.',
      },
    ],

    nearbyLocations: ['kamothe', 'panvel', 'taloja'],
  },

  // ═══════════════════════════════════════════════════
  // TALOJA — Home base / Fastest delivery
  // ═══════════════════════════════════════════════════
  {
    slug: 'taloja',
    name: 'Taloja',
    fullName: 'Taloja Phase 1 & 2, Navi Mumbai',
    pinCode: '410208',
    deliveryTime: '10–20',
    mapEmbedQuery: 'Taloja+Phase+1+Navi+Mumbai+Maharashtra+410208',

    title: 'Food Delivery in Taloja | Bread & Bite Cloud Kitchen',
    description: 'Bread & Bite cloud kitchen is located IN Taloja Phase 1. Get 500g Chicken Keema, Korma & Roti delivered in just 10-20 minutes. Fastest delivery guaranteed.',
    keywords: 'food delivery taloja, chicken keema taloja, order food online taloja, cloud kitchen taloja phase 1, keema pav taloja, chicken korma taloja, food delivery taloja phase 2, halal food taloja navi mumbai, best cloud kitchen taloja',

    heroTagline: 'Our Kitchen Is Right Here. Your Food Arrives in Minutes.',
    heroSubtitle: 'Bread & Bite is located in Taloja Phase 1, Sector 11 — which means when you order from us in Taloja, your food is cooked, packed, and at your doorstep in just 10 to 20 minutes. No long waits, no cold deliveries. Just hot, fresh, homestyle meals.',

    sections: [
      {
        heading: 'Taloja\'s Own Cloud Kitchen',
        text: 'We\'re not delivering to Taloja from some distant commercial kitchen — we ARE Taloja. Bread & Bite was born in Taloja Phase 1, Sector 11, and our very first customers were our neighbors. That\'s why we take local delivery seriously: every order within Taloja Phase 1 and Phase 2 reaches your door in 10 to 20 minutes, often faster. We know the gali-mohalla, the building names, and the shortcuts. When you order a 500g Chicken Keema from us, it\'s cooked the moment your order comes in and reaches you while it\'s still steaming.',
      },
      {
        heading: 'Menu Highlights for Taloja Delivery',
        text: 'Our full menu is available for Taloja delivery — and since we\'re local, everything arrives hot and fresh. Chicken Keema Boneless (500g, ₹199) — our signature dish that put Bread & Bite on the map. Thick, tasty, packed with chicken mince. Chicken Korma (500g, ₹199) — a richer, creamier curry for family dinners. Random Chicken Gravy (500g, ₹199) — a chef\'s surprise every day. Tandoori Rotis straight from the clay oven (₹30), and Ladi Pavs fresh from the bakery (₹30 for 4). Plus burgers, fries, and Maggi for quick snacks. Our Keema Pav Meal (₹219) is the most ordered combo in Taloja — it\'s a complete dinner for two.',
      },
      {
        heading: 'Taloja Delivery Coverage',
        text: 'We cover every lane and sector in Taloja Phase 1 (Sectors 1 to 24) and Taloja Phase 2. We also deliver to Taloja MIDC industrial area for office lunch orders. Since our kitchen is in Sector 11, most Phase 1 deliveries arrive in under 15 minutes. Phase 2 deliveries are typically 15 to 20 minutes. MIDC orders can be scheduled in advance for batch delivery — WhatsApp us at +91 93256 29256 for daily lunch subscriptions.',
      },
    ],

    landmarks: [
      'Taloja Phase 1 (Sectors 1–24)',
      'Taloja Phase 2',
      'Taloja MIDC Industrial Area',
      'Taloja Railway Station (upcoming)',
      'Sector 11 Market Area',
      'Taloja Bypass Road',
      'Taloja Panchanand',
    ],

    coverageDetail: 'Taloja Phase 1 (all Sectors 1-24), Taloja Phase 2, Taloja MIDC industrial area, and Taloja Panchanand. Fastest delivery — 10 to 20 minutes.',

    faqs: [
      {
        question: 'How fast is delivery within Taloja?',
        answer: 'Since our kitchen is located right in Taloja Phase 1, Sector 11, delivery within Taloja is our fastest — typically 10 to 20 minutes. Most Phase 1 orders arrive in under 15 minutes.',
      },
      {
        question: 'Do you deliver to Taloja Phase 2 and MIDC?',
        answer: 'Yes! We cover Taloja Phase 2 (15-20 minutes) and Taloja MIDC industrial area. For MIDC, we also offer daily lunch subscriptions — message us on WhatsApp to set up recurring orders.',
      },
      {
        question: 'Can I pick up my order directly from the kitchen?',
        answer: 'Yes! Walk-in takeaway is available at our kitchen: Shop 12, Ground Floor, Sector 11, Taloja Phase 1. Open daily in 2 operational slots: 11:00 AM to 3:15 PM and 7:00 PM to 9:15 PM. No delivery wait — your food is packed fresh and ready in 10 to 15 minutes.',
      },
      {
        question: 'Do you offer daily lunch subscriptions for Taloja?',
        answer: 'Yes, many families and MIDC workers in Taloja subscribe to our daily lunch delivery. We offer customizable weekly plans with combo meals. Contact us on WhatsApp at +91 93256 29256 for subscription details and pricing.',
      },
    ],

    nearbyLocations: ['kharghar', 'panvel', 'kalamboli'],
  },

  // ═══════════════════════════════════════════════════
  // CBD BELAPUR — Business district
  // ═══════════════════════════════════════════════════
  {
    slug: 'cbd-belapur',
    name: 'CBD Belapur',
    fullName: 'CBD Belapur, Navi Mumbai',
    pinCode: '400614',
    deliveryTime: '30–40',
    mapEmbedQuery: 'CBD+Belapur+Navi+Mumbai+Maharashtra+400614',

    title: 'Food Delivery in CBD Belapur | Bread & Bite Navi Mumbai',
    description: 'Order 500g Chicken Keema, Korma & Tandoori Roti delivered to CBD Belapur. Hot meals for offices & homes. 30-40 min delivery by Bread & Bite.',
    keywords: 'food delivery cbd belapur, chicken keema cbd belapur, order food online belapur, lunch delivery belapur navi mumbai, keema pav belapur, chicken korma cbd belapur, cloud kitchen belapur, halal food belapur, office lunch delivery cbd belapur',

    heroTagline: 'Hot Meals Delivered to Belapur\'s Offices & Homes',
    heroSubtitle: 'Working late at the office or relaxing at home in CBD Belapur? Bread & Bite delivers generous 500g Chicken Keema, rich Chicken Korma, and freshly baked Tandoori Rotis to Belapur\'s commercial and residential zones in 30 to 40 minutes.',

    sections: [
      {
        heading: 'The Perfect Lunch Solution for CBD Belapur',
        text: 'CBD Belapur is the business nerve center of Navi Mumbai — home to NMMC headquarters, major banks, IT offices, and Belapur railway station. Office workers here are tired of the same canteen food and overpriced restaurant lunches. Bread & Bite offers a genuine alternative: a 500g Chicken Keema Boneless for just ₹199, enough to share with a colleague or enjoy as a hearty solo lunch. Our Keema Pav Meal (₹219) and Korma Roti Meal (₹249) are specifically designed as complete, filling office lunch combos — no need to order sides separately.',
      },
      {
        heading: 'Menu for CBD Belapur Delivery',
        text: 'For office lunches, we recommend our combo meals: Keema Pav Meal (500g Chicken Keema + 4 Pavs, ₹219) — the most popular choice for working professionals. Chicken Korma & Roti Meal (500g Korma + 2 Tandoori Rotis, ₹249) — for those who prefer roti over pav. Burger & Fries Combo (₹229) — a lighter, quicker option. Individual items are also available: Chicken Keema (500g, ₹199), Chicken Korma (500g, ₹199), Tandoori Roti (₹30), Pav (₹30 for 4), French Fries (₹99), and Crispy Chicken Burger (₹149). All items are packed in sealed, microwave-safe containers — ideal for reheating at the office.',
      },
      {
        heading: 'Belapur Delivery Coverage',
        text: 'We deliver to all of CBD Belapur — Sectors 1 through 15, the area around Belapur Railway Station, Palm Beach Road residences, and the NMMC headquarters zone. Since Belapur is farther from our Taloja kitchen, deliveries take 30 to 40 minutes. For office lunch orders, we recommend ordering by 12:00 PM to get your food by 12:30-12:45 PM. Group orders for 5+ people from the same office get priority processing — contact us on WhatsApp to arrange.',
      },
    ],

    landmarks: [
      'CBD Belapur Railway Station',
      'NMMC Headquarters',
      'Palm Beach Road',
      'Wonders Park',
      'CBD Belapur Bus Terminus',
      'Belapur Commercial Complex',
      'DY Patil Knowledge City',
      'Utsav Chowk',
    ],

    coverageDetail: 'CBD Belapur Sectors 1 to 15, Belapur Railway Station area, Palm Beach Road residences, NMMC HQ zone, Wonders Park area, and Utsav Chowk.',

    faqs: [
      {
        question: 'Do you deliver to offices in CBD Belapur?',
        answer: 'Yes! Office lunch delivery is one of our specialties in CBD Belapur. Many offices near NMMC HQ, Palm Beach Road, and the Belapur railway station area order from us daily. Group orders for 5+ people get priority. Contact us on WhatsApp at +91 93256 29256.',
      },
      {
        question: 'How long does delivery take to CBD Belapur?',
        answer: 'Delivery to CBD Belapur takes approximately 30 to 40 minutes from our Taloja kitchen. For office lunches, we recommend ordering by 12:00 PM so your food arrives before 12:45 PM.',
      },
      {
        question: 'Can I reheat the food at my office?',
        answer: 'Yes — all our food is packed in sealed, microwave-safe containers. The gravies reheat well, and the rotis/pavs are wrapped separately to maintain freshness. Our spill-proof packaging ensures nothing leaks during delivery.',
      },
    ],

    nearbyLocations: ['kharghar', 'kamothe', 'panvel'],
  },
];

/** Helper: find location by slug */
export function getLocationBySlug(slug) {
  return LOCATIONS.find(l => l.slug === slug) || null;
}

/** All location slugs for route generation */
export const LOCATION_SLUGS = LOCATIONS.map(l => l.slug);

export default LOCATIONS;
