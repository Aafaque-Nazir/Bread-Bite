/**
 * Shared Navi Mumbai Delivery Cities, Fees, Minimums & Address Auto-Detection
 * Used 1:1 by Cart (`pages/Cart.jsx`), Party Orders (`pages/PartyOrders.jsx`),
 * and Location landing pages (`pages/LocationPage.jsx`).
 *
 * Pure JS — safe to import in both browser React components and Node scripts.
 */

export const DELIVERY_CITIES = {
  taloja: {
    id: 'taloja',
    slug: 'taloja',
    name: 'Taloja Phase 1 & 2',
    shortName: 'Taloja',
    subLabel: 'Kitchen Base · 10–20m',
    time: '10–20 min',
    minOrder: 199,
    freeAbove: 299,
    fee: 39,
    keywords: ['taloja phase 1', 'taloja phase 2', 'taloja phase', 'taloja midc', 'panchanand', 'taloja 1', 'taloja 2', 'taloja']
  },
  kharghar: {
    id: 'kharghar',
    slug: 'kharghar',
    name: 'Kharghar',
    shortName: 'Kharghar',
    subLabel: '5–8 km · 20–30m',
    time: '20–30 min',
    minOrder: 249,
    freeAbove: 399,
    fee: 49,
    keywords: ['hiranandani', 'central park', 'utsav chowk', 'dy patil', 'oves', 'kharghar']
  },
  kamothe: {
    id: 'kamothe',
    slug: 'kamothe',
    name: 'Kamothe',
    shortName: 'Kamothe',
    subLabel: '5–8 km · 20–30m',
    time: '20–30 min',
    minOrder: 249,
    freeAbove: 399,
    fee: 49,
    keywords: ['mansarovar', 'khandeshwar', 'raghunath nagar', 'kamothe']
  },
  kalamboli: {
    id: 'kalamboli',
    slug: 'kalamboli',
    name: 'Kalamboli',
    shortName: 'Kalamboli',
    subLabel: '6–9 km · 25–35m',
    time: '25–35 min',
    minOrder: 249,
    freeAbove: 399,
    fee: 49,
    keywords: ['steel market', 'roadpali', 'furniture market', 'kalamboli']
  },
  panvel: {
    id: 'panvel',
    slug: 'panvel',
    name: 'Panvel (Old & New)',
    shortName: 'Panvel',
    subLabel: '10–14 km · 25–35m',
    time: '25–35 min',
    minOrder: 499,
    freeAbove: 699,
    fee: 79,
    keywords: ['new panvel', 'old panvel', 'khanda colony', 'palaspe', 'orion mall', 'panvel']
  },
  belapur: {
    id: 'belapur',
    slug: 'cbd-belapur',
    name: 'CBD Belapur',
    shortName: 'CBD Belapur',
    subLabel: '12–15 km · 30–40m',
    time: '30–40 min',
    minOrder: 499,
    freeAbove: 699,
    fee: 79,
    keywords: ['cbd belapur', 'artist village', 'kille gaothan', 'saket', 'belapur', 'cbd']
  }
};

export const DELIVERY_ZONES = DELIVERY_CITIES;

export const LOCATION_SLUG_TO_CITY_ID = {
  taloja: 'taloja',
  kharghar: 'kharghar',
  kamothe: 'kamothe',
  kalamboli: 'kalamboli',
  panvel: 'panvel',
  'cbd-belapur': 'belapur',
  belapur: 'belapur'
};

export function detectCityFromText(text) {
  if (!text || text.trim().length < 3) return null;
  const lower = text.toLowerCase();

  const allKws = [];
  for (const city of Object.values(DELIVERY_CITIES)) {
    for (const kw of city.keywords) {
      allKws.push({ kw, cityId: city.id, length: kw.length });
    }
  }
  allKws.sort((a, b) => b.length - a.length);

  for (const item of allKws) {
    const regex = new RegExp(`\\b${item.kw}\\b`, 'i');
    if (regex.test(lower)) {
      return item.cityId;
    }
  }
  return null;
}

export function getInitialPreferredCity(defaultCity = 'taloja') {
  if (typeof window === 'undefined') return defaultCity;
  try {
    const params = new URLSearchParams(window.location.search);
    const queryCity = params.get('city') || params.get('area') || params.get('zone');
    if (queryCity && DELIVERY_CITIES[queryCity]) return queryCity;
    if (queryCity === 'mid') return 'kharghar';
    if (queryCity === 'far') return 'panvel';

    const saved = sessionStorage.getItem('preferred_delivery_city') || sessionStorage.getItem('preferred_delivery_zone');
    if (saved && DELIVERY_CITIES[saved]) return saved;
    if (saved === 'mid') return 'kharghar';
    if (saved === 'far') return 'panvel';
  } catch {
    // ignore storage errors
  }
  return defaultCity;
}

export function savePreferredCity(cityOrSlug) {
  if (typeof window === 'undefined' || !cityOrSlug) return;
  const cityId = DELIVERY_CITIES[cityOrSlug]
    ? cityOrSlug
    : (LOCATION_SLUG_TO_CITY_ID[cityOrSlug] || 'taloja');
  try {
    sessionStorage.setItem('preferred_delivery_city', cityId);
    sessionStorage.setItem('preferred_delivery_zone', cityId);
  } catch {
    // ignore storage errors
  }
}
