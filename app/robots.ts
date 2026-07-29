import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/crm/", "/login/", "/api/"],
    },
    sitemap: "https://omrahajjabidjan.com/sitemap.xml",
  };
}