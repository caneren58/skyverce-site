import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://skyverse.studio";
  const now = new Date();

  const routes = [
    "",
    "/istanbul-drone-cekimi", // ✅ yeni landing sayfa eklendi
    "/hizmetler",
    "/portfoy",
    "/hakkimizda",
    "/sss",
    "/guvenlik",
    "/yasal",
    "/iletisim",
    "/kvkk",
    "/cerez-politikasi",
    "/gizlilik-politikasi",
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
