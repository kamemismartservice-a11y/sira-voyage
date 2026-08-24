import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { blogCategories, blogPostCategories } from "@/lib/blog-categories";

export const metadata = {
  title: "Blog — Sira Voyages | Actualités Omra, Hajj et voyages",
  description: "Conseils, actualités et guides pratiques pour préparer votre Omra, votre Hajj et vos voyages avec Sira Voyages.",
};

export default async function Blog() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  const categorySlugOf = (postSlug: string): string | null => {
    const match = blogPostCategories.find((m) => m.slug === postSlug);
    return match ? match.categorySlug : null;
  };

  const postsByCategory = blogCategories.map((cat) => ({
    ...cat,
    posts: posts.filter((p) => categorySlugOf(p.slug) === cat.slug),
  }));

  const uncategorized = posts.filter((p) => !categorySlugOf(p.slug));

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
          <>
            <nav aria-label="Sommaire du blog" className="mb-12 flex flex-wrap justify-center gap-2">
              {postsByCategory
                .filter((cat) => cat.posts.length > 0)
                .map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="rounded-full border border-[#0B3D2E]/15 bg-white px-4 py-1.5 text-xs font-medium text-[#0B3D2E] transition-colors hover:border-[#B7962F]/50 hover:text-[#B7962F]"
                  >
                    {cat.label} ({cat.posts.length})
                  </a>
                ))}
            </nav>

            {postsByCategory
              .filter((cat) => cat.posts.length > 0)
              .map((cat) => (
                <div key={cat.slug} id={cat.slug} className="mb-14 scroll-mt-6">
                  <h2 className="mb-6 font-[family-name:var(--font-garamond)] text-2xl text-[#0B3D2E]">{cat.label}</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.posts.map((post) => (
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
                          <h3 className="mt-2 font-[family-name:var(--font-garamond)] text-xl text-[#0B3D2E]">{post.title}</h3>
                          {post.excerpt && <p className="mt-2 text-sm text-[#0B3D2E]/70">{post.excerpt}</p>}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

            {uncategorized.length > 0 && (
              <div id="autres" className="mb-14 scroll-mt-6">
                <h2 className="mb-6 font-[family-name:var(--font-garamond)] text-2xl text-[#0B3D2E]">Autres articles</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {uncategorized.map((post) => (
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
                        <h3 className="mt-2 font-[family-name:var(--font-garamond)] text-xl text-[#0B3D2E]">{post.title}</h3>
                        {post.excerpt && <p className="mt-2 text-sm text-[#0B3D2E]/70">{post.excerpt}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}
