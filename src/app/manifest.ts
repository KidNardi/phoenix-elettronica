import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.siteName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111315",
    theme_color: "#111315",
    lang: "it-IT",
    icons: [
      {
        src: "/favicon.jpg",
        sizes: "57x63",
        type: "image/jpeg",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
