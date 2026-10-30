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
    heroSubtitle: 'Fresh 500g Chicken Keema, rich Chicken Korma, and clay-oven Tandoori Rotis delivered hot to all 35 sectors of Kharghar in 20 to 30 minutes.',

    pricing: {
      minOrder: 249,
      freeAbove: 399,
      deliveryFee: 49,
      standardOrderName: 'Chicken Korma & Roti Meal',
      standardSubtotal: 249,
      standardTotal: 298,
      freeOrderName: '2 Chicken Gravies & 2 Rotis',
      freeSubtotal: 428,
      freeTotal: 428,
      tip: 'Minimum order is ₹249. Add a Tandoori Roti (₹30) or soft Pav (₹30) to cross ₹399 and get free delivery.'
    },

    // Short, Punchy Highlights (No fluff)
    sections: [
      {
        heading: 'Generous 500g Portions',
        text: 'Full 500-gram chicken gravies slow-cooked with fresh Halal chicken and roasted spices — real meals that easily feed two.'
      },
      {
        heading: 'Fresh Tandoor & Bakery',
        text: 'Clay-oven Tandoori Rotis (₹30) and soft Ladi Pavs (4 pcs, ₹30) baked fresh to order, packed warm in spill-proof containers.'
      },
      {
        heading: 'All 35 Sectors Covered',
        text: 'Dispatched directly from our Taloja Phase 1 kitchen to Kharghar Sectors 1–35, Central Park, and Hiranandani in 20 to 30 minutes.'
      }
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
        answer: 'Delivery to Kharghar typically takes 20 to 30 minutes from our cloud kitchen in Taloja Phase 1. Food is cooked fresh on order and delivered hot.',
      },
      {
        question: 'Which sectors in Kharghar do you deliver to?',
        answer: 'We deliver to all 35 sectors of Kharghar — from Sector 1 near the railway station to Sector 35 near the hills, including Central Park, Hiranandani, and DY Patil Stadium.',
      },
      {
        question: 'What is the minimum order for free delivery to Kharghar?',
        answer: 'Free delivery to Kharghar is unlocked on orders above ₹399. For orders between ₹249 and ₹398, a nominal delivery charge of ₹49 applies (minimum order is ₹249).',
      },
      {
        question: 'Can I order party platters for delivery to Kharghar?',
        answer: 'Absolutely! We prepare bulk orders of Keema Pav platters, Chicken Korma handis, and snack boxes for house parties, birthday celebrations, and office events in Kharghar.',
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
    heroSubtitle: 'Hearty 500g portions of Chicken Keema, rich Chicken Korma, and freshly baked Tandoori Rotis delivered hot to Old & New Panvel in 25 to 35 minutes.',

    pricing: {
      minOrder: 499,
      freeAbove: 699,
      deliveryFee: 79,
      standardOrderName: 'Keema & Korma Combos',
      standardSubtotal: 499,
      standardTotal: 578,
      freeOrderName: 'Family Feast (2 Gravies, Rotis & Sides)',
      freeSubtotal: 716,
      freeTotal: 716,
      tip: 'Minimum order is ₹499. Orders of ₹699 and above receive free delivery.'
    },

    sections: [
      {
        heading: 'Thick Homestyle Gravies',
        text: 'Real 500g Chicken Keema and creamy Korma — generous family-sized portions made with 100% fresh Halal chicken.'
      },
      {
        heading: 'Freshly Baked Clay-Oven Rotis',
        text: 'Hot tandoori rotis and soft bakery pavs prepared fresh the moment your order comes in.'
      },
      {
        heading: 'Old & New Panvel Coverage',
        text: 'Fast doorstep delivery to Old Panvel, New Panvel sectors, Orion Mall area, and Khandeshwar in 25 to 35 minutes.'
      }
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
        answer: 'Yes! We cover both Old Panvel (near the station and market) and New Panvel (including Orion Mall, D-Mart Road, and Khandeshwar).',
      },
      {
        question: 'What is the delivery fee and minimum order for Panvel?',
        answer: 'Panvel has a minimum order of ₹499 with a ₹79 delivery fee. Orders of ₹699 and above receive 100% FREE doorstep delivery.',
      },
      {
        question: 'How long does delivery take to Panvel?',
        answer: 'Delivery to Panvel takes approximately 25 to 35 minutes from our kitchen in Taloja Phase 1. Your food is freshly cooked upon order and arrives sealed.',
      },
      {
        question: 'What payment methods do you accept in Panvel?',
        answer: 'We accept Cash on Delivery and UPI QR (Google Pay, PhonePe, Paytm). Payment is verified upon delivery.',
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
    heroSubtitle: 'Hearty 500g Chicken Keema, rich Chicken Korma, and hot-off-the-tandoor Rotis delivered to all Kamothe sectors in 20 to 30 minutes.',

    pricing: {
      minOrder: 249,
      freeAbove: 399,
      deliveryFee: 49,
      standardOrderName: 'Keema Pav Meal & Roti',
      standardSubtotal: 249,
      standardTotal: 298,
      freeOrderName: 'Keema, Korma & 2 Rotis',
      freeSubtotal: 458,
      freeTotal: 458,
      tip: 'Minimum order is ₹249. Add a side or roti to reach ₹399 and get free delivery.'
    },

    sections: [
      {
        heading: 'Family-First Portions',
        text: 'Generous 500g boneless keema and korma gravies that easily satisfy 2 adults without skimping on chicken.'
      },
      {
        heading: 'Hot Tandoori Breads',
        text: 'Crispy whole wheat rotis and soft ladi pavs packed warm in food-grade spill-proof containers.'
      },
      {
        heading: 'Quick 20–30m Delivery',
        text: 'Fast doorstep delivery across all Kamothe residential sectors, Mansarovar, and near the railway station.'
      }
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
        answer: 'We deliver to Kamothe in approximately 20 to 30 minutes from our kitchen in Taloja Phase 1. Your meal is cooked fresh upon order and delivered hot.',
      },
      {
        question: 'What is the delivery charge and free delivery threshold for Kamothe?',
        answer: 'Kamothe orders have a minimum order of ₹249. Delivery is ₹49 below ₹399, and completely FREE on all orders of ₹399 and above.',
      },
      {
        question: 'What are the best-selling items in Kamothe?',
        answer: 'The Keema Pav Meal (500g Chicken Keema + 4 Pavs at ₹219) is our most popular combo in Kamothe, followed by the Chicken Korma & Roti Meal (₹249).',
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
    heroSubtitle: 'Hearty 500g chicken meals, hot Tandoori Rotis, and value combos delivered to your doorstep in Kalamboli in 25 to 35 minutes.',

    pricing: {
      minOrder: 249,
      freeAbove: 399,
      deliveryFee: 49,
      standardOrderName: 'Chicken Korma & Roti Meal',
      standardSubtotal: 249,
      standardTotal: 298,
      freeOrderName: 'Keema Meal, Burger & Fries',
      freeSubtotal: 448,
      freeTotal: 448,
      tip: 'Minimum order is ₹249. Orders of ₹399 and above receive free delivery.'
    },

    sections: [
      {
        heading: 'Hearty Everyday Meals',
        text: 'Heavy 500g chicken gravies and filling combo meals crafted for honest appetites and working lunches.'
      },
      {
        heading: 'Clay-Oven Freshness',
        text: 'Hot rotis and fresh pavs baked on order. Never pre-cooked, pre-packaged, or reheated.'
      },
      {
        heading: 'Residential & Market Delivery',
        text: 'Delivering hot food in 25–35 minutes across Kalamboli residential sectors, Steel Market, and APMC.'
      }
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

    coverageDetail: 'All sectors in Kalamboli including Steel Market area, Furniture Market, APMC Market, Palaspe Phata, Railway Station area, and residential complexes.',

    faqs: [
      {
        question: 'Do you deliver to the Kalamboli Steel Market area?',
        answer: 'Yes! We deliver to all parts of Kalamboli including the Steel Market area, APMC Market, and residential sectors. Group lunch orders are welcome.',
      },
      {
        question: 'What is the delivery fee for Kalamboli?',
        answer: 'Minimum order is ₹249 with a ₹49 delivery fee. Orders of ₹399 and above receive 100% FREE delivery.',
      },
      {
        question: 'How long does delivery take to Kalamboli?',
        answer: 'Delivery to Kalamboli takes approximately 25 to 35 minutes from our Taloja Phase 1 kitchen. Food is cooked fresh upon order.',
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
    heroSubtitle: 'Bread & Bite is based in Taloja Phase 1, Sector 11. Your food is cooked, packed, and delivered to your doorstep in just 10 to 20 minutes.',

    pricing: {
      minOrder: 199,
      freeAbove: 299,
      deliveryFee: 39,
      standardOrderName: 'Chicken Keema Boneless (500g)',
      standardSubtotal: 199,
      standardTotal: 238,
      freeOrderName: 'Keema (500g), Fries & Pav',
      freeSubtotal: 328,
      freeTotal: 328,
      tip: 'Minimum order is ₹199. Add a Pav pack (₹30) or Tandoori Roti (₹30) to reach ₹299 for free delivery.'
    },

    sections: [
      {
        heading: 'Taloja\'s Own Cloud Kitchen',
        text: 'Located in Sector 11, Taloja Phase 1. When you order from us, your food is cooked fresh and reaches you in 10 to 20 minutes.'
      },
      {
        heading: 'Honest 500g Portions',
        text: 'Chicken Keema Boneless (₹199), creamy Chicken Korma (₹199), hot Tandoori Rotis (₹30), and burgers at everyday prices.'
      },
      {
        heading: 'Phase 1, Phase 2 & MIDC',
        text: 'Covering all residential sectors and Taloja MIDC. Walk-in takeaway also available at Shop 12, Ground Floor, Sector 11.'
      }
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
        answer: 'Since our kitchen is located right in Taloja Phase 1, Sector 11, delivery within Taloja is our fastest — typically 10 to 20 minutes.',
      },
      {
        question: 'What is the delivery fee in Taloja?',
        answer: 'Orders under ₹299 have a small ₹39 local delivery fee (min order ₹199). All orders of ₹299 and above receive 100% FREE delivery.',
      },
      {
        question: 'Can I pick up my order directly from the kitchen?',
        answer: 'Yes! Walk-in takeaway is available at Shop 12, Ground Floor, Sector 11, Taloja Phase 1. Open daily: 11:15 AM – 3:30 PM & 7:00 PM – 9:45 PM.',
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
    heroSubtitle: 'Generous 500g Chicken Keema, rich Chicken Korma, and freshly baked Tandoori Rotis delivered hot to Belapur in 30 to 40 minutes.',

    pricing: {
      minOrder: 499,
      freeAbove: 699,
      deliveryFee: 79,
      standardOrderName: 'Office Lunch (2 Gravies & Pavs)',
      standardSubtotal: 499,
      standardTotal: 578,
      freeOrderName: 'Team Lunch (3-4 Meals & Sides)',
      freeSubtotal: 720,
      freeTotal: 720,
      tip: 'Minimum order is ₹499. Orders of ₹699 and above receive free delivery.'
    },

    sections: [
      {
        heading: 'Corporate & Team Lunches',
        text: 'Hearty 500g gravies and combo meals packed in sealed microwave-safe containers — ideal for office sharing.'
      },
      {
        heading: '100% Halal Fresh Cooking',
        text: 'Fresh chicken sourced daily and cooked with authentic spices. Honest value compared to expensive restaurant orders.'
      },
      {
        heading: 'Belapur Commercial & Residential',
        text: 'Delivering to Sectors 1–15, NMMC HQ zone, Palm Beach Road, and station commercial hubs in 30–40 minutes.'
      }
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
        answer: 'Yes! Office lunch delivery is one of our specialties in CBD Belapur. Many offices near NMMC HQ and Palm Beach Road order daily.',
      },
      {
        question: 'What is the delivery fee and minimum order for Belapur?',
        answer: 'Minimum order for Belapur is ₹499 with a ₹79 express delivery fee. All orders of ₹699 and above receive 100% FREE delivery.',
      },
      {
        question: 'Can I reheat the food at my office?',
        answer: 'Yes — all food is packed in sealed, microwave-safe, spill-proof containers. Rotis and pavs are packed separately to stay warm.',
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
