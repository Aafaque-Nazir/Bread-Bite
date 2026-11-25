/**
 * Centralized SEO Configuration, Route Metadata & Schema.org Graph Builder
 * Shared 1:1 between React Helmet (`src/components/SEO.jsx`) and build-time
 * static prerendering (`scripts/prerender.js`).
 *
 * IMPORTANT: Keep this file pure JavaScript (no JSX, no React imports).
 */

import menuItems from './MenuItems.js';
import { LOCATIONS } from './locations.js';
import { FAQS } from './faqs.js';

export const SITE_URL = 'https://breadandbite.in';
export const SITE_NAME = 'Bread & Bite';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LASTMOD_DATE = '2026-11-26';

export const DEFAULT_GEO = {
  region: 'IN-MH',
  placename: 'Taloja Phase 1, Navi Mumbai, Maharashtra 410208, India',
  position: '19.0647;73.1209',
  icbm: '19.0647, 73.1209'
};

export const PARTY_FAQS = [
  {
    question: 'What is the minimum group size for Bread & Bite party or bulk orders?',
    answer: 'We accept bulk and party orders starting from 5 portions (e.g. 2.5 kg of Chicken Keema or Chicken Korma with Pav/Roti) up to 100+ guests across Navi Mumbai.'
  },
  {
    question: 'How far in advance should I book a party or office lunch order?',
    answer: 'For orders up to 15 people, 2 to 3 hours notice works. For larger house parties, birthday gatherings, or corporate team lunches of 20+ people, please message us on WhatsApp at least 1 day in advance.'
  },
  {
    question: 'Which Navi Mumbai areas do you deliver bulk and catering trays to?',
    answer: 'We deliver bulk trays and meal boxes from our Taloja Phase 1 kitchen to Taloja Phase 1 & 2, Kharghar, Kamothe, Kalamboli (including Steel Market & APMC), Panvel, and CBD Belapur offices.'
  },
  {
    question: 'How is bulk food packed so it stays hot for parties?',
    answer: 'Gravies are packed in heavy-duty sealed 500g and bulk food-grade containers, while Tandoori Rotis and Ladi Pavs are insulated separately so breads stay soft and warm on arrival.'
  }
];

export const STATIC_ROUTES_META = {
  '/': {
    title: 'Bread & Bite | Chicken Keema, Korma Delivery Navi Mumbai',
    description: 'Order fresh 500g Chicken Keema, Chicken Korma, hot Tandoori Roti, soft Pav & Choco Lava Cake. Delivered hot across Taloja, Kharghar & Panvel.',
    keywords: 'bread and bite, bread and bite taloja, chicken keema 500g, keema pav taloja, chicken korma kharghar, cloud kitchen taloja phase 1, food delivery navi mumbai, tandoori roti delivery panvel, halal chicken gravy kamothe',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO,
    faqs: FAQS
  },
  '/menu/': {
    title: 'Menu & Online Order | Bread & Bite Navi Mumbai',
    description: 'Browse our full menu: 500g Chicken Keema, Korma, Tandoori Roti, Ladi Pav, Crispy Chicken Burger, Fries & Choco Lava Cake across Navi Mumbai.',
    keywords: 'bread and bite menu, chicken keema taloja, choco lava cake navi mumbai, chicken korma kharghar, keema pav navi mumbai, tandoori roti delivery, chicken burger taloja phase 1, cloud kitchen menu navi mumbai',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO
  },
  '/party-orders/': {
    title: 'Party Orders & Bulk Food Delivery Navi Mumbai | Bread & Bite',
    description: 'Order bulk 500g Chicken Keema, Chicken Korma platters, Keema Pav boxes & office lunches across Taloja, Kharghar, Panvel & CBD Belapur.',
    keywords: 'party food order navi mumbai, bulk chicken keema kharghar, office lunch delivery cbd belapur, house party catering taloja, bulk keema pav panvel, corporate lunch boxes navi mumbai',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO,
    faqs: PARTY_FAQS
  },
  '/about/': {
    title: 'About Bread & Bite | Cloud Kitchen in Taloja, Navi Mumbai',
    description: 'Learn about Bread & Bite cloud kitchen in Taloja Phase 1. Honest 500g Halal chicken portions, homestyle recipes, and fast local delivery.',
    keywords: 'about bread and bite, cloud kitchen taloja, halal chicken navi mumbai, 500g chicken keema taloja, homestyle non veg food kharghar',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO
  },
  '/reviews/': {
    title: 'Customer Reviews | Bread & Bite Navi Mumbai',
    description: 'We recently opened our cloud kitchen in Taloja, Navi Mumbai. Order today and share your honest review and food photo on WhatsApp.',
    keywords: 'bread and bite reviews, taloja cloud kitchen reviews, chicken keema reviews kharghar, navi mumbai food delivery feedback',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO
  },
  '/contact/': {
    title: 'Contact & WhatsApp Orders | Bread & Bite Navi Mumbai',
    description: 'Order on WhatsApp at +91 93256 29256 or find Bread & Bite in Sector 11, Taloja Phase 1. Fast delivery across Kharghar, Panvel & Belapur.',
    keywords: 'bread and bite contact, food delivery taloja phase 1, whatsapp food order navi mumbai, restaurant contact kharghar, cloud kitchen address taloja',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO,
    faqs: FAQS
  },
  '/privacy/': {
    title: 'Privacy Policy | Bread & Bite Cloud Kitchen',
    description: 'Privacy Policy for Bread & Bite Cloud Kitchen, Navi Mumbai. How we collect, handle, and protect your order details.',
    keywords: 'bread and bite privacy policy',
    robots: 'index, follow',
    geo: DEFAULT_GEO
  },
  '/terms/': {
    title: 'Terms of Service | Bread & Bite Cloud Kitchen',
    description: 'Terms and conditions for placing orders, delivery minimums, and kitchen slots at Bread & Bite Cloud Kitchen, Navi Mumbai.',
    keywords: 'bread and bite terms of service, delivery minimum taloja kharghar panvel',
    robots: 'index, follow',
    geo: DEFAULT_GEO
  },
  '/cart/': {
    title: 'Your Cart & Checkout | Bread & Bite Navi Mumbai',
    description: 'Review your cart items and complete your food order with Bread & Bite across Taloja, Kharghar, Kamothe, Kalamboli, Panvel & Belapur.',
    keywords: 'bread and bite cart checkout',
    robots: 'noindex, follow',
    geo: DEFAULT_GEO
  },
  '/thank-you/': {
    title: 'Order Confirmation | Bread & Bite Navi Mumbai',
    description: 'Order confirmation for Bread & Bite Cloud Kitchen, Navi Mumbai.',
    keywords: 'bread and bite order confirmation',
    robots: 'noindex, nofollow',
    geo: DEFAULT_GEO
  },
  '/404': {
    title: 'Page Not Found - 404 | Bread & Bite Navi Mumbai',
    description: 'The requested page was not found. Return to Bread & Bite to order 500g Chicken Keema, Chicken Korma, hot rotis, and pav in Navi Mumbai.',
    keywords: 'bread and bite 404',
    robots: 'noindex, follow',
    geo: DEFAULT_GEO
  }
};

export function normalizeCanonicalUrl(url = '/') {
  if (!url || url === '/') return `${SITE_URL}/`;
  if (url === '/404') return `${SITE_URL}/404`;
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  const basePath = cleanPath.split('?')[0].replace(/\/+$/, '');
  return `${SITE_URL}${basePath}/`;
}

export function clampTitle(title) {
  const raw = (title || 'Bread & Bite | Online Food Delivery in Navi Mumbai').trim();
  if (raw.length <= 60) return raw;
  return raw.slice(0, 57).replace(/\s+\S*$/, '') + '...';
}

export function clampDescription(description) {
  const raw = (description || 'Order 500g Chicken Keema, Korma, Tandoori Roti, soft Pav & warm Choco Lava Cake across Navi Mumbai.').trim();
  if (raw.length <= 155) return raw;
  return raw.slice(0, 152).replace(/\s+\S*$/, '') + '...';
}

function buildMenuSectionsSchema() {
  const groups = new Map();
  for (const item of menuItems) {
    if (!groups.has(item.category)) {
      groups.set(item.category, []);
    }
    groups.get(item.category).push({
      '@type': 'MenuItem',
      name: item.shortName || item.name,
      description: item.description,
      url: `${SITE_URL}/menu/${item.slug}/`,
      image: `${SITE_URL}${item.image.split('?')[0]}`,
      offers: {
        '@type': 'Offer',
        price: String(item.price),
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/menu/${item.slug}/`
      }
    });
  }

  return Array.from(groups.entries()).map(([sectionName, items]) => ({
    '@type': 'MenuSection',
    name: sectionName,
    hasMenuItem: items
  }));
}

export function buildRestaurantSchema(pageImage = DEFAULT_IMAGE) {
  return {
    '@type': ['Restaurant', 'FoodEstablishment'],
    '@id': `${SITE_URL}/#restaurant`,
    name: 'Bread & Bite',
    alternateName: ['Bread & Bite Cloud Kitchen', 'Bread and Bite Taloja', 'Bread and Bite Navi Mumbai'],
    image: [
      `${SITE_URL}/images/chicken-keema.webp`,
      `${SITE_URL}/images/chicken-korma.webp`,
      `${SITE_URL}/images/keema-pav-meal.jpg`,
      `${SITE_URL}/images/crispy-chicken-burger.jpg`,
      `${SITE_URL}/images/choco-lava-cake.jpg`,
      pageImage
    ],
    logo: `${SITE_URL}/Logo.png`,
    url: `${SITE_URL}/`,
    telephone: '+919325629256',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, PhonePe, Google Pay, Paytm',
    servesCuisine: ['Mughlai', 'North Indian', 'Fast Food', 'Burgers', 'Desserts'],
    acceptsReservations: 'False',
    sameAs: [
      'https://www.instagram.com/bread_and_bite/',
      'https://link.zomato.com/xqzv/rshare?id=10960061830563279',
      'https://www.swiggy.com/direct/brand/675246?source=swiggy-direct&subSource=generic'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop 12, Ground Floor, Sector 11, Taloja Phase 1',
      addressLocality: 'Taloja, Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '410208',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0647,
      longitude: 73.1209
    },
    hasMap: 'https://maps.google.com/?q=Bread+and+Bite+Taloja+Navi+Mumbai+410208',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:15',
        closes: '15:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '19:00',
        closes: '21:45'
      }
    ],
    areaServed: [
      ...LOCATIONS.map((loc) => ({
        '@type': 'AdministrativeArea',
        name: loc.fullName || loc.name,
        postalCode: loc.pinCode
      })),
      { '@type': 'City', name: 'Navi Mumbai' }
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'Bread & Bite Kitchen Menu',
      url: `${SITE_URL}/menu/`,
      hasMenuSection: buildMenuSectionsSchema()
    },
    potentialAction: [
      {
        '@type': 'OrderAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/menu/`,
          inLanguage: 'en-IN',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform'
          ]
        },
        deliveryMethod: 'https://schema.org/DeliveryModeOwnFleet'
      },
      {
        '@type': 'OrderAction',
        name: 'Order on WhatsApp',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/919325629256',
          actionPlatform: ['https://schema.org/MobileWebPlatform']
        }
      }
    ]
  };
}

/**
 * Build route-appropriate Schema.org @graph
 * - Never emits unverified/fake AggregateRating or Review nodes.
 * - Product schema is only emitted on single-dish pages (/menu/<slug>/).
 */
export function buildSchemaGraph({
  url = '/',
  title,
  description,
  image = DEFAULT_IMAGE,
  noindex = false,
  faqs = null,
  breadcrumbs = null,
  product = null,
  areaServed = null,
  customSchema = null
}) {
  const canonicalUrl = normalizeCanonicalUrl(url);
  const pageImage = image.startsWith('http')
    ? image
    : `${SITE_URL}${image.startsWith('/') ? image.split('?')[0] : `/${image.split('?')[0]}`}`;

  if (noindex) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: clampTitle(title),
          description: clampDescription(description),
          inLanguage: 'en-IN'
        }
      ]
    };
  }

  const graph = [
    buildRestaurantSchema(pageImage),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: 'Navi Mumbai cloud kitchen serving 500g Chicken Keema, Chicken Korma, Tandoori Roti, soft Pav, burgers & desserts.',
      publisher: { '@id': `${SITE_URL}/#restaurant` },
      inLanguage: 'en-IN'
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: clampTitle(title),
      description: clampDescription(description),
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#restaurant` },
      inLanguage: 'en-IN'
    }
  ];

  // Navigation schema on Homepage only (avoids repeating across every subpage)
  if (canonicalUrl === `${SITE_URL}/`) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#navigation`,
      name: 'Main Site Navigation',
      itemListElement: [
        { '@type': 'SiteNavigationElement', position: 1, name: 'Kitchen Menu', url: `${SITE_URL}/menu/` },
        { '@type': 'SiteNavigationElement', position: 2, name: 'Party & Bulk Orders', url: `${SITE_URL}/party-orders/` },
        { '@type': 'SiteNavigationElement', position: 3, name: 'About Our Kitchen', url: `${SITE_URL}/about/` },
        { '@type': 'SiteNavigationElement', position: 4, name: 'Contact & Orders', url: `${SITE_URL}/contact/` },
        { '@type': 'SiteNavigationElement', position: 5, name: 'Food Delivery in Taloja', url: `${SITE_URL}/taloja/` },
        { '@type': 'SiteNavigationElement', position: 6, name: 'Food Delivery in Kharghar', url: `${SITE_URL}/kharghar/` }
      ]
    });
  }

  // Focused FoodDelivery / Service schema on location & party pages
  if (areaServed) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#delivery-service`,
      name: areaServed.serviceName || `Food Delivery in ${areaServed.name} — Bread & Bite`,
      serviceType: 'Food Delivery',
      provider: { '@id': `${SITE_URL}/#restaurant` },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: areaServed.fullName || areaServed.name,
        postalCode: areaServed.pinCode
      }
    });
  }

  // Single-dish Product schema (only on dedicated /menu/<slug>/ pages)
  if (product) {
    const cleanImg = product.image.split('?')[0];
    graph.push({
      '@type': 'Product',
      '@id': `${canonicalUrl}#product`,
      name: product.shortName || product.name,
      sku: `BB-${String(product.id).padStart(3, '0')}`,
      image: `${SITE_URL}${cleanImg}`,
      description: product.longDescription || product.description,
      category: product.category,
      brand: { '@type': 'Brand', name: SITE_NAME },
      offers: {
        '@type': 'Offer',
        price: String(product.price),
        priceCurrency: 'INR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: canonicalUrl,
        seller: { '@id': `${SITE_URL}/#restaurant` }
      }
    });
  }

  // Breadcrumbs on all non-home pages
  if (canonicalUrl !== `${SITE_URL}/`) {
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`
      }
    ];

    if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      breadcrumbs.forEach((crumb, idx) => {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: idx + 2,
          name: crumb.name,
          item: crumb.path.startsWith('http') ? crumb.path : `${SITE_URL}${crumb.path}`
        });
      });
    } else {
      const slugLabel = canonicalUrl.replace(`${SITE_URL}/`, '').replace(/\/$/, '').replace(/-/g, ' ');
      const pageLabel = slugLabel ? slugLabel.replace(/\b\w/g, (c) => c.toUpperCase()) : 'Page';
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: pageLabel,
        item: canonicalUrl
      });
    }

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems
    });
  }

  // FAQPage schema only when visible FAQs are rendered on the page
  if (Array.isArray(faqs) && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  if (customSchema) {
    graph.push(customSchema);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

export function getDishMeta(item) {
  const cleanImg = item.image.split('?')[0];
  const shortTitle = `${item.shortName || item.name} ₹${item.price} | Bread & Bite`;
  const dishLabel = item.shortName || item.name;
  const fullCandidate = `Order ${dishLabel} (₹${item.price}) in Navi Mumbai. ${item.description}`;
  const compactCandidate = `Order ${dishLabel} at ₹${item.price} fresh from Bread & Bite. Delivered hot across Taloja, Kharghar, Panvel & Navi Mumbai.`;
  const rawDesc = fullCandidate.length <= 155
    ? fullCandidate
    : (compactCandidate.length <= 155 ? compactCandidate : item.description);

  return {
    path: `/menu/${item.slug}/`,
    title: clampTitle(shortTitle),
    description: clampDescription(rawDesc),
    keywords: item.keywords || `${item.name}, bread and bite navi mumbai`,
    image: `${SITE_URL}${cleanImg}`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: DEFAULT_GEO,
    breadcrumbs: [
      { name: 'Menu', path: '/menu/' },
      { name: item.shortName || item.name, path: `/menu/${item.slug}/` }
    ],
    product: item,
    faqs: item.faqs || []
  };
}

export function getLocationMeta(loc) {
  return {
    path: `/${loc.slug}/`,
    title: clampTitle(loc.title),
    description: clampDescription(loc.description),
    keywords: loc.keywords,
    image: DEFAULT_IMAGE,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    geo: {
      region: 'IN-MH',
      placename: `${loc.fullName || loc.name}, Maharashtra ${loc.pinCode}, India`,
      position: DEFAULT_GEO.position,
      icbm: DEFAULT_GEO.icbm
    },
    breadcrumbs: [{ name: `${loc.name} Delivery`, path: `/${loc.slug}/` }],
    areaServed: loc,
    faqs: loc.faqs || []
  };
}
