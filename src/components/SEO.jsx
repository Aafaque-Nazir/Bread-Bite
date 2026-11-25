import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_IMAGE,
  DEFAULT_GEO,
  normalizeCanonicalUrl,
  clampTitle,
  clampDescription,
  buildSchemaGraph
} from '../../data/seoConfig.js';

/**
 * Unified SEO Component for Bread & Bite
 * Uses shared pure-JS schema/meta builders from data/seoConfig.js so client
 * hydration matches build-time prerendered HTML 1:1.
 */
const SEO = ({
  title,
  description,
  keywords = '',
  image = DEFAULT_IMAGE,
  url = '/',
  type = 'website',
  noindex = false,
  faqs = null,
  customSchema = null,
  breadcrumbs = null,
  product = null,
  areaServed = null,
  geo = null
}) => {
  const pageTitle = clampTitle(title);
  const pageDescription = clampDescription(description);
  const canonicalUrl = normalizeCanonicalUrl(url);
  const activeGeo = geo || DEFAULT_GEO;

  const cleanImage = image ? image.split('?')[0] : DEFAULT_IMAGE;
  const pageImage = cleanImage.startsWith('http')
    ? cleanImage
    : `${SITE_URL}${cleanImage.startsWith('/') ? cleanImage : `/${cleanImage}`}`;

  const finalSchema = buildSchemaGraph({
    url,
    title: pageTitle,
    description: pageDescription,
    image: pageImage,
    noindex,
    faqs,
    breadcrumbs,
    product,
    areaServed,
    customSchema
  });

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Geo & Local Targeting */}
      <meta name="author" content="Bread & Bite Cloud Kitchen" />
      <meta name="geo.region" content={activeGeo.region} />
      <meta name="geo.placename" content={activeGeo.placename} />
      <meta name="geo.position" content={activeGeo.position} />
      <meta name="ICBM" content={activeGeo.icbm} />
      <meta name="language" content="English" />

      {/* Mobile Browser Color */}
      <meta name="theme-color" content="#FAF7F2" />
      <meta name="format-detection" content="telephone=yes" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema).replace(/</g, '\\u003c')}
      </script>
    </Helmet>
  );
};

export default SEO;
