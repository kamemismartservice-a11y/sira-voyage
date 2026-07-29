import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Blog() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <section className="px-6 py-14 text-center sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">ACTUALITÉS</p>
        <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#0B3D2E] sm:text-5xl">Notre Blog</h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        {posts.length === 0 ? (
          <p className="text-center text-sm text-[#0B3D2E]/60">Aucun article publié pour le moment.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={"/blog/" + post.slug} className="group overflow-hidden rounded-xl border border-[#0B3D2E]/10 bg-white">
                {post.coverImage && (
                  <div className="relative h-44 w-full">
                    <Image src={post.coverImage} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-5">
                  <p className="text-xs text-[#0B3D2E]/50">
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-garamond)] text-xl text-[#0B3D2E]">{post.title}</h2>
                  {post.excerpt && <p className="mt-2 text-sm text-[#0B3D2E]/70">{post.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}