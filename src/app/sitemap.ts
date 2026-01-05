import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://skyverce-site-l5ln.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", // ✅ ana sayfa da olsun
    "/hizmetler",
    "/portfoy",
    "/hakkimizda",
    "/sss",
    "/guvenlik",
    "/yasal",
    "/iletisim",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
