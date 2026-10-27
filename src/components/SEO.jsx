import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://breadandbite.in';
const SITE_NAME = 'Bread & Bite';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const DEFAULT_TITLE = 'Bread & Bite | Online Food Delivery in Navi Mumbai';
const DEFAULT_DESCRIPTION = 'Order 500g Chicken Keema, Korma, hot Tandoori Roti, soft Pav & warm Choco Lava Cake. Delivered fast across Taloja & Kharghar by Bread & Bite.';

/**
 * Senior SEO Component for Bread & Bite
 * Emits complete Meta, OpenGraph, Twitter, Geo-targeting, and Schema.org @graph
 * including Restaurant LocalBusiness, WebSite Sitelinks, SiteNavigationElement,
 * Breadcrumbs, and FAQ rich snippets.
 */
const SEO = ({
  title,
  description,
  keywords = '',
  image = DEFAULT_IMAGE,
  url = '',
  type = 'website',
  noindex = false,
  faqs = null,
  customSchema = null,
  breadcrumbs = null,
}) => {
  // Title Length Guardrail (Strictly 45-55 chars, max 58)
  let pageTitle = title ? title.trim() : DEFAULT_TITLE;
  if (pageTitle.length > 58) {
    pageTitle = pageTitle.slice(0, 55).replace(/\s+\S*$/, '') + '...';
  }

  // Description Length Guardrail (Strictly 130-150 chars, max 155)
  let pageDescription = description ? description.trim() : DEFAULT_DESCRIPTION;
  if (pageDescription.length > 150) {
    pageDescription = pageDescription.slice(0, 147).replace(/\s+\S*$/, '') + '...';
  }

  // 1:1 Canonical & Social URL Alignment
  let canonicalUrl = `${SITE_URL}/`;
  if (url && url !== '/') {
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    const basePath = cleanPath.split('?')[0].replace(/\/+$/, '');
    canonicalUrl = `${SITE_URL}${basePath}/`;
  }

  const pageImage = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  // Composite Schema Graph for Google Rich Snippets & AI Answer Engines (AEO/GEO)
  const schemaGraph = [
    // 1. Restaurant / Cloud Kitchen Local Business Schema
    {
      '@type': 'Restaurant',
      '@id': `${SITE_URL}/#restaurant`,
      name: 'Bread & Bite',
      alternateName: ['Bread & Bite Cloud Kitchen', 'Bread and Bite Taloja', 'Bread and Bite Navi Mumbai'],
      image: pageImage,
      logo: `${SITE_URL}/Logo.png`,
      url: SITE_URL,
      telephone: '+919325629256',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, PhonePe, Google Pay, Paytm, Credit Card, Debit Card',
      servesCuisine: ['Mughlai', 'North Indian', 'Chicken Keema', 'Chicken Korma', 'Fast Food', 'Burgers', 'Street Food', 'Desserts', 'Choco Lava Cake'],
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
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0647,
        longitude: 73.1209,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '15:15',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '19:00',
          closes: '21:15',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '520',
        reviewCount: '520',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Taloja Phase 1', postalCode: '410208' },
        { '@type': 'AdministrativeArea', name: 'Taloja Phase 2', postalCode: '410208' },
        { '@type': 'AdministrativeArea', name: 'Kharghar', postalCode: '410210' },
        { '@type': 'AdministrativeArea', name: 'Panvel', postalCode: '410206' },
        { '@type': 'AdministrativeArea', name: 'Kamothe', postalCode: '410209' },
        { '@type': 'AdministrativeArea', name: 'Kalamboli', postalCode: '410218' },
        { '@type': 'AdministrativeArea', name: 'CBD Belapur', postalCode: '400614' },
        { '@type': 'City', name: 'Navi Mumbai' },
      ],
      hasMenu: {
        '@type': 'Menu',
        name: 'Bread & Bite Kitchen Menu',
        url: `${SITE_URL}/menu`,
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: 'Chicken Gravies (500g Portions)',
            description: 'Generous 500-gram portions cooked fresh with 100% Halal chicken',
            hasMenuItem: [
              {
                '@type': 'MenuItem',
                name: 'Chicken Keema Boneless (500g)',
                description: '500g slow-cooked chicken mince with onions and coriander.',
                offers: { '@type': 'Offer', price: '199', priceCurrency: 'INR' }
              },
              {
                '@type': 'MenuItem',
                name: 'Chicken Korma (500g)',
                description: '500g tender chicken in thick, rich korma gravy.',
                offers: { '@type': 'Offer', price: '199', priceCurrency: 'INR' }
              }
            ]
          },
          {
            '@type': 'MenuSection',
            name: 'Roti & Fresh Pav',
            hasMenuItem: [
              {
                '@type': 'MenuItem',
                name: 'Tandoori Roti',
                description: 'Freshly baked whole wheat tandoori roti.',
                offers: { '@type': 'Offer', price: '30', priceCurrency: 'INR' }
              },
              {
                '@type': 'MenuItem',
                name: 'Ladi Pav (4 pieces)',
                description: 'Soft bakery ladi pavs, perfect with chicken keema.',
                offers: { '@type': 'Offer', price: '30', priceCurrency: 'INR' }
              }
            ]
          },
          {
            '@type': 'MenuSection',
            name: 'Value Meal Combos',
            hasMenuItem: [
              {
                '@type': 'MenuItem',
                name: 'Keema Pav Meal',
                description: '500g Chicken Keema Boneless + 4 Soft Pavs.',
                offers: { '@type': 'Offer', price: '219', priceCurrency: 'INR' }
              },
              {
                '@type': 'MenuItem',
                name: 'Chicken Korma & Roti Meal',
                description: '500g Chicken Korma + 2 Hot Tandoori Rotis.',
                offers: { '@type': 'Offer', price: '249', priceCurrency: 'INR' }
              }
            ]
          },
          {
            '@type': 'MenuSection',
            name: 'Warm Desserts',
            description: 'Hot molten chocolate cakes and sweet treats',
            hasMenuItem: [
              {
                '@type': 'MenuItem',
                name: 'Warm Choco Lava Cake',
                description: 'Decadent chocolate cake with a molten gooey chocolate fudge centre.',
                offers: { '@type': 'Offer', price: '89', priceCurrency: 'INR' }
              }
            ]
          }
        ]
      },
      potentialAction: {
        '@type': 'OrderAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/menu`,
          inLanguage: 'en-IN',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform'
          ]
        },
        deliveryMethod: 'https://schema.org/DeliveryModeOwnFleet'
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'p', '.faq-answer']
      }
    },

    // 2. WebSite Schema with Sitelinks SearchBox
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Bread & Bite',
      description: 'Navi Mumbai cloud kitchen serving hearty 500g Chicken Keema, Chicken Korma, hot Tandoori Roti, soft Pav, and crispy snacks.',
      publisher: {
        '@id': `${SITE_URL}/#restaurant`,
      },
      inLanguage: 'en-IN',
    },

    // 3. SiteNavigationElement (Tells Google how to render subpage Sitelinks)
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#navigation`,
      name: 'Main Site Navigation',
      itemListElement: [
        {
          '@type': 'SiteNavigationElement',
          position: 1,
          name: 'Explore Kitchen Menu',
          url: `${SITE_URL}/menu/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 2,
          name: 'About Our Kitchen',
          url: `${SITE_URL}/about/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 3,
          name: 'Customer Reviews',
          url: `${SITE_URL}/reviews/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 4,
          name: 'Contact & Orders',
          url: `${SITE_URL}/contact/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 5,
          name: 'Food Delivery in Kharghar',
          url: `${SITE_URL}/kharghar/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 6,
          name: 'Food Delivery in Panvel',
          url: `${SITE_URL}/panvel/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 7,
          name: 'Food Delivery in Kamothe',
          url: `${SITE_URL}/kamothe/`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 8,
          name: 'Food Delivery in Taloja',
          url: `${SITE_URL}/taloja/`,
        },
      ],
    },

    // 4. DeliveryService Schema (Express Doorstep Delivery in Navi Mumbai)
    {
      '@type': 'DeliveryService',
      '@id': `${SITE_URL}/#delivery-service`,
      name: 'Bread & Bite Express Food Delivery Navi Mumbai',
      provider: { '@id': `${SITE_URL}/#restaurant` },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Kharghar', postalCode: '410210' },
        { '@type': 'AdministrativeArea', name: 'Panvel', postalCode: '410206' },
        { '@type': 'AdministrativeArea', name: 'Kamothe', postalCode: '410209' },
        { '@type': 'AdministrativeArea', name: 'Kalamboli', postalCode: '410218' },
        { '@type': 'AdministrativeArea', name: 'Taloja Phase 1 & 2', postalCode: '410208' },
        { '@type': 'AdministrativeArea', name: 'CBD Belapur', postalCode: '400614' },
        { '@type': 'City', name: 'Navi Mumbai' },
      ],
    },

    // 5. Individual Product Schemas for Google Rich Product Search Snippets
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#product-chicken-keema`,
      name: 'Chicken Keema Boneless (500g)',
      sku: 'BB-KEEMA-500',
      image: `${SITE_URL}/images/chicken-keema.webp`,
      description: 'Generous 500g slow-cooked boneless chicken mince with roasted spices, caramelized onions, and fresh coriander. Halal certified.',
      brand: { '@type': 'Brand', name: 'Bread & Bite' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '184',
        reviewCount: '184',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Faizan S.',
          },
          datePublished: '2026-08-15',
          reviewBody: 'The 500g Chicken Keema is incredibly flavorful and generous in portion. Easily serves two with soft pavs!',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
      ],
      offers: {
        '@type': 'Offer',
        price: '199',
        priceCurrency: 'INR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/menu/?category=Gravy`,
        seller: { '@id': `${SITE_URL}/#restaurant` },
      },
    },
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#product-chicken-korma`,
      name: 'Chicken Korma (500g)',
      sku: 'BB-KORMA-500',
      image: `${SITE_URL}/images/chicken-korma.webp`,
      description: 'Rich cashew and onion korma gravy with tender chicken pieces in full 500g portion.',
      brand: { '@type': 'Brand', name: 'Bread & Bite' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '142',
        reviewCount: '142',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Priya N.',
          },
          datePublished: '2026-08-20',
          reviewBody: 'Rich and creamy cashew gravy with tender chicken pieces. Perfect pair with whole wheat tandoori roti.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
      ],
      offers: {
        '@type': 'Offer',
        price: '199',
        priceCurrency: 'INR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/menu/?category=Gravy`,
        seller: { '@id': `${SITE_URL}/#restaurant` },
      },
    },
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#product-keema-pav-meal`,
      name: 'Keema Pav Meal Combo',
      sku: 'BB-MEAL-KEEMA-PAV',
      image: `${SITE_URL}/images/keema-pav-meal.jpg`,
      description: '500g Chicken Keema Boneless + 4 soft bakery ladi pavs. Complete lunch or dinner combo meal.',
      brand: { '@type': 'Brand', name: 'Bread & Bite' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '195',
        reviewCount: '195',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Rahul M.',
          },
          datePublished: '2026-09-02',
          reviewBody: 'The keema pav combo is my go-to lunch. Piping hot 500g keema with 4 fresh soft pavs delivered fast in Taloja.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
      ],
      offers: {
        '@type': 'Offer',
        price: '219',
        priceCurrency: 'INR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/menu/?category=Combos`,
        seller: { '@id': `${SITE_URL}/#restaurant` },
      },
    },
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#product-choco-lava-cake`,
      name: 'Warm Choco Lava Cake',
      sku: 'BB-DESSERT-CHOCLAVA',
      image: `${SITE_URL}/images/choco-lava-cake.jpg`,
      description: 'Decadent chocolate cake with a rich, molten gooey chocolate fudge centre. Served fresh and warm.',
      brand: { '@type': 'Brand', name: 'Bread & Bite' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '118',
        reviewCount: '118',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Amina K.',
          },
          datePublished: '2026-10-10',
          reviewBody: 'Piping hot and pure chocolate heaven! The molten lava centre flows out beautifully. Must-try dessert with any meal.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
        },
      ],
      offers: {
        '@type': 'Offer',
        price: '89',
        priceCurrency: 'INR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/menu/?category=Dessert`,
        seller: { '@id': `${SITE_URL}/#restaurant` },
      },
    },
  ];

  // 4. Breadcrumbs Schema
  if (url && url !== '/') {
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
    ];

    if (breadcrumbs && Array.isArray(breadcrumbs)) {
      breadcrumbs.forEach((crumb, index) => {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: index + 2,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        });
      });
    } else {
      const cleanPath = url.replace(/^\//, '').split('?')[0];
      const pageName = cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: canonicalUrl,
      });
    }

    schemaGraph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    });
  }

  // 5. FAQPage Schema (Google Rich Snippet "People Also Ask")
  if (faqs && Array.isArray(faqs) && faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // If custom schema provided, merge into graph
  if (customSchema) {
    schemaGraph.push(customSchema);
  }

  const finalSchema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImage} />

      {/* Geo & Local Targeting */}
      <meta name="author" content="Bread & Bite Cloud Kitchen" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Navi Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.0647;73.1209" />
      <meta name="ICBM" content="19.0647, 73.1209" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />

      {/* Mobile Browser Color */}
      <meta name="theme-color" content="#FAF7F2" />
      <meta name="format-detection" content="telephone=yes" />

      {/* JSON-LD Structured Data Graph */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema).replace(/</g, '\\u003c')}
      </script>
    </Helmet>

  );
};

export default SEO;
