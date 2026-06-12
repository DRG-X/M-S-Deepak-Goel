export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://msdeepakgoel.com/#business",
        "name": "M/S Deepak Goel",
        "alternateName": "MS Deepak Goel Construction",
        "description":
          "Premier construction company in Kanpur, Uttar Pradesh with 20+ years of experience in residential, commercial, turnkey, and renovation projects.",
        "url": "https://msdeepakgoel.com",
        "telephone": "+91-XXXXXXXXXX",
        "email": "info@msdeepakgoel.com",
        "foundingDate": "2004",
        "numberOfEmployees": "80+",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kanpur",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN",
          "postalCode": "208001",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.4499,
          "longitude": 80.3319,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00",
          },
        ],
        "sameAs": [],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Construction Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Turnkey Projects" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renovation & Remodeling" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Civil Works" } },
          ],
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "450",
          "bestRating": "5",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://msdeepakgoel.com/#website",
        "url": "https://msdeepakgoel.com",
        "name": "M/S Deepak Goel",
        "description": "Premier Construction Company in Kanpur, Uttar Pradesh",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
