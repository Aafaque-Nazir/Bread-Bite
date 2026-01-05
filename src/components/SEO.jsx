import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://breadandbite.in'; // Update this with your actual domain
const SITE_NAME = 'Bread & Bite';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`; // Add an og-image.jpg to public folder

const SEO = ({ 
    title, 
    description, 
    keywords = '',
    image = DEFAULT_IMAGE,
    url = '',
    type = 'website',
    noindex = false,
    schema = null
}) => {
    const fullTitle = title ? `${title}` : `${SITE_NAME} | Premium Comfort Food - Navi Mumbai`;
    const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;

    // Default Local Business Schema
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Bread & Bite",
        "image": DEFAULT_IMAGE,
        "url": SITE_URL,
        "telephone": "+919325629256",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Taloja Phase 1",
            "addressLocality": "Navi Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "410208",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0647,
            "longitude": 73.1209
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "23:45"
        },
        "servesCuisine": ["Italian", "Indian", "Street Food", "Fast Food"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
        },
        "areaServed": ["Kharghar", "Panvel", "Taloja", "Kamothe", "CBD Belapur", "Navi Mumbai"]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO */}
            <meta name="author" content="Bread & Bite" />
            <meta name="geo.region" content="IN-MH" />
            <meta name="geo.placename" content="Navi Mumbai" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(schema || defaultSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
