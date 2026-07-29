import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const idMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const id = idMatch ? idMatch[1] : "";
    return "https://www.youtube.com/embed/" + id;
  }
  return url;
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post || !post.published) notFound();

  const paragraphs = post.content.split("\n").filter((p) => p.trim() !== "");

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
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[#0B3D2E]/80 sm:text-base">{p}</p>
          ))}
        </div>

        <Link href="/blog" className="mt-8 inline-block text-sm text-[#0B3D2E]/60 underline">← Retour au blog</Link>
      </article>

      <Footer />
    </main>
  );
}