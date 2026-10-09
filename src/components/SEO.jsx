import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://breadandbite.in';
const SITE_NAME = 'Bread & Bite';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

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
  const pageTitle = title ? title : `${SITE_NAME} | 500g Chicken Keema, Korma, Roti & Pav - Navi Mumbai`;
  const canonicalUrl = url ? `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}` : SITE_URL;
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
      url: SITE_URL,
      telephone: '+919325629256',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, PhonePe, Google Pay, Paytm, Credit Card, Debit Card',
      servesCuisine: ['Mughlai', 'North Indian', 'Chicken Keema', 'Chicken Korma', 'Fast Food', 'Burgers', 'Street Food'],
      acceptsReservations: 'False',
      sameAs: [
        'https://www.instagram.com/bread_and_bite/',
        'https://www.zomato.com/mumbai/bread-and-bite-taloja-navi-mumbai'
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
          opens: '08:00',
          closes: '23:45',
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
                description: '500g tender chicken in thick, aromatic korma gravy.',
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
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        },
        deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeOwnFleet'
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
      url: SITE_URL,
      name: 'Bread & Bite',
      description: 'Navi Mumbai cloud kitchen serving hearty 500g Chicken Keema, Chicken Korma, hot Tandoori Roti, soft Pav, and crispy snacks.',
      publisher: {
        '@id': `${SITE_URL}/#restaurant`,
      },
      inLanguage: 'en-IN',
    },

    // 3. SiteNavigationElement (Tells Google how to render subpage Sitelinks)
    {
      '@type': 'SiteNavigationElement',
      '@id': `${SITE_URL}/#navigation`,
      name: [
        'Explore Kitchen Menu',
        'Meal Combos',
        'About Our Kitchen',
        'Contact & Orders',
      ],
      url: [
        `${SITE_URL}/menu`,
        `${SITE_URL}/menu?category=combos`,
        `${SITE_URL}/about`,
        `${SITE_URL}/contact`,
      ],
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
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
