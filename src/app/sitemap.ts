import type { MetadataRoute } from "next";

import { localSeoPages } from "@/data/local-seo";
import { company, navLinks } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = navLinks.map((link) => ({
    url: `${company.siteUrl}${link.href}`,
    lastModified: now,
    changeFrequency: (link.href === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));

  staticPages.push({
    url: `${company.siteUrl}/privacy-policy`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  });

  const localPages = localSeoPages.map((page) => ({
    url: `${company.siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...localPages];
}
