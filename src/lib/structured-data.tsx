import { BASE_URL } from "@/lib/metadata-config";

interface OrganizationData {
  name: string;
  url: string;
  email: string;
}

interface SoftwareAppData {
  name: string;
  description: string;
  url: string;
  operatingSystem: string;
  applicationCategory: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
}

export function OrganizationJsonLd({
  name,
  url,
  email,
}: OrganizationData) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    email,
    logo: `${BASE_URL}/assets/images/mob_nas_icon.webp`,
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.wbytesistemas.mob_nas",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email,
      contactType: "customer support",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  operatingSystem,
  applicationCategory,
  offers,
}: SoftwareAppData) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    operatingSystem,
    applicationCategory,
    image: `${BASE_URL}/assets/images/opengraphimage.webp`,
    offers: {
      "@type": "Offer",
      ...offers,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
