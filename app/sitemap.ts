import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/menu", "/gallery", "/about", "/reserve"];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-20"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
