import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://omrahajjabidjan.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: baseUrl + "/a-propos", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/services", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: baseUrl + "/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: baseUrl + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const categories = await prisma.serviceCategory.findMany({ include: { items: true } });
  const servicePages: MetadataRoute.Sitemap = categories.flatMap((category) =>
    category.items.map((item) => ({
      url: baseUrl + "/services/" + category.slug + "/" + item.slug,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  const posts = await prisma.blogPost.findMany({ where: { published: true } });
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: baseUrl + "/blog/" + post.slug,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}