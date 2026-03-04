import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: siteConfig.ogLocale,
      url,
      title,
      description,
      siteName: siteConfig.siteName,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": absoluteUrl("/#localbusiness"),
    name: siteConfig.legalName,
    url: siteConfig.domain,
    logo: absoluteUrl(siteConfig.logoPath),
    image: absoluteUrl(siteConfig.imagePath),
    telephone: siteConfig.nap.phone,
    email: siteConfig.nap.email,
    priceRange: "$$",
    areaServed: siteConfig.areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.nap.streetAddress,
      addressLocality: siteConfig.nap.city,
      addressRegion: siteConfig.nap.region,
      postalCode: siteConfig.nap.postalCode,
      addressCountry: siteConfig.nap.country,
    },
    openingHours: siteConfig.openingHours,
    vatID: siteConfig.nap.vat,
    sameAs: siteConfig.sameAs,
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.siteName,
    url: siteConfig.domain,
    inLanguage: siteConfig.locale,
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function createServiceSchema({ name, description, path }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: absoluteUrl(path),
    areaServed: siteConfig.areaServed,
    provider: {
      "@type": "Electrician",
      name: siteConfig.legalName,
      url: siteConfig.domain,
      telephone: siteConfig.nap.phone,
      email: siteConfig.nap.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.nap.streetAddress,
        addressLocality: siteConfig.nap.city,
        addressRegion: siteConfig.nap.region,
        postalCode: siteConfig.nap.postalCode,
        addressCountry: siteConfig.nap.country,
      },
    },
  };
}

export function createFaqSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
