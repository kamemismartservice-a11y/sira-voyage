import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { prisma } from "@/lib/prisma";

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const idMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const id = idMatch ? idMatch[1] : "";
    return "https://www.youtube.com/embed/" + id;
  }
  return url;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) return {};

  const image = post.coverImage || "/images/hero-mecque.png";

  return {
    title: post.title + " — Sira Voyages",
    description: post.excerpt || post.title,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || post.title,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [image],
    },
  };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post || !post.published) notFound();

  const blocks = post.content.split("\n").filter((p) => p.trim() !== "");
  const pageUrl = "https://omrahajjabidjan.com/blog/" + post.slug;

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      {post.coverImage && !post.videoUrl && (
        <div className="relative h-64 w-full sm:h-96">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <article className="mx-auto max-w-2xl px-6 py-12 sm:px-10">
        <p className="text-xs text-[#0B3D2E]/50">
          {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-garamond)] text-3xl leading-tight text-[#0B3D2E] sm:text-4xl">{post.title}</h1>

        <div className="mt-5">
          <ShareButtons url={pageUrl} title={post.title} caption={post.excerpt || post.title} />
        </div>

        {post.videoUrl && (
          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src={getEmbedUrl(post.videoUrl)}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="mt-8 flex flex-col gap-4">
          {blocks.map((block, i) => {
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="mt-4 text-lg font-semibold text-[#0B3D2E] sm:text-xl">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="mt-8 border-t border-[#0B3D2E]/10 pt-6 font-[family-name:var(--font-garamond)] text-2xl leading-tight text-[#0B3D2E] sm:text-3xl">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-sm leading-relaxed text-[#0B3D2E]/80 sm:text-base">
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-8 border-t border-[#0B3D2E]/10 pt-6">
          <ShareButtons url={pageUrl} title={post.title} caption={post.excerpt || post.title} />
        </div>

        <Link href="/blog" className="mt-8 inline-block text-sm text-[#0B3D2E]/60 underline">← Retour au blog</Link>
      </article>

      <Footer />
    </main>
  );
}