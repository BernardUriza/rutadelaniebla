import type { MetadataRoute } from "next";

const SITE = "https://rutadelaniebla.org";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/cerro-de-las-culebras", "/biblioteca", "/galeria", "/participa"];
  return routes.map((r) => ({
    url: `${SITE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
