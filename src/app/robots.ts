import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/public/"],
        disallow: ["/private/", "/admin/"],
      },
      {
        userAgent: "BadBot",
        disallow: "/",
      },
    ],
    sitemap: `${process.env.baseUrl}/sitemap.xml`,
  };
}
