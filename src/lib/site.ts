export const siteConfig = {
  siteName: "Phoenix Elettronica",
  legalName: "Phoenix Elettronica s.a.s. di De Leonardis Emilio & C.",
  domain: "https://phoenixelettronica.net",
  locale: "it-IT",
  ogLocale: "it_IT",
  description:
    "Impianti elettrici ed elettronici a Bari e provincia per condomini, aziende e privati. Interventi rapidi, preventivi chiari e soluzioni su misura.",
  ogImage: "/opengraph-image",
  logoPath: "/brand/logo%20phoenix.png",
  imagePath: "/opengraph-image",
  manifestPath: "/manifest.webmanifest",
  sameAs: [] as string[],
  openingHours: ["Mo-Fr 08:30-13:00", "Mo-Fr 15:30-19:00"],
  areaServed: ["Bari", "Bari e provincia"],
  nap: {
    name: "Phoenix Elettronica s.a.s. di De Leonardis Emilio & C.",
    streetAddress: "Via Papa Innocenzo XII, 19",
    postalCode: "70124",
    city: "Bari",
    region: "BA",
    country: "IT",
    fullAddress: "Via Papa Innocenzo XII, 19 - 70124 Bari (BA) - Italia",
    phone: "080 2021338",
    phoneHref: "tel:+390802021338",
    mobile: "335 6349428",
    mobileHref: "tel:+393356349428",
    email: "info@phoenixelettronica.net",
    emailHref: "mailto:info@phoenixelettronica.net",
    vat: "05940130726",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}
