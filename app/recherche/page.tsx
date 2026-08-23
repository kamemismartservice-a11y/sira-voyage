import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { faqItems } from "@/lib/faq-data";
import { communes } from "@/lib/communes-data";

export const metadata = {
  title: "Recherche — Sira Voyages",
  description: "Recherchez parmi les offres, articles et questions fréquentes de Sira Voyages.",
};

export default async function RecherchePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q || "").trim();

  let products: { title: string; subtitle: string | null; href: string }[] = [];
  let posts: { title: string; excerpt: string | null; slug: string }[] = [];
  let faqResults: { question: string; answer: string; slug: string }[] = [];
  let communeResults: { nom: string; slug: string; h1: string }[] = [];

  if (query.length >= 2) {
    const items = await prisma.serviceItem.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { subtitle: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      include: { category: true },
      take: 10,
    });
    products = items.map((it) => ({
      title: it.title,
      subtitle: it.subtitle,
      href: `/services/${it.category.slug}/${it.slug}`,
    }));

    const blogPosts = await prisma.blogPost.findMany({
      where: {
        published: true,
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { excerpt: { contains: query, mode: "insensitive" } },
        ],
      },
      take: 10,
    });
    posts = blogPosts.map((p) => ({ title: p.title, excerpt: p.excerpt, slug: p.slug }));

    const q_lower = query.toLowerCase();
    faqResults = faqItems
      .filter((f) => f.question.toLowerCase().includes(q_lower) || f.answer.toLowerCase().includes(q_lower))
      .slice(0, 10)
      .map((f) => ({ question: f.question, answer: f.answer, slug: f.slug }));

    communeResults = communes
      .filter((c) => c.nom.toLowerCase().includes(q_lower) || c.h1.toLowerCase().includes(q_lower))
      .slice(0, 10)
      .map((c) => ({ nom: c.nom, slug: c.slug, h1: c.h1 }));
  }

  const totalResults = products.length + posts.length + faqResults.length + communeResults.length;

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">RECHERCHE</p>
          <h1 className="font-[family-name:var(--font-garamond)] text-3xl text-[#0B3D2E] sm:text-4xl">
            {query ? `Résultats pour « ${query} »` : "Rechercher sur Sira Voyages"}
          </h1>

          <form action="/recherche" method="get" className="mt-6 flex gap-2">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Omra, visa, transfert aéroport, Cocody..."
              className="h-11 flex-1 rounded-full border border-[#0B3D2E]/15 bg-white px-5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
            />
            <button type="submit" className="h-11 rounded-full bg-[#0B3D2E] px-6 text-sm font-medium text-[#F8F6F0] transition-opacity hover:opacity-90">
              Rechercher
            </button>
          </form>

          {query.length > 0 && query.length < 2 && (
            <p className="mt-6 text-sm text-[#0B3D2E]/60">Merci de saisir au moins 2 caractères.</p>
          )}

          {query.length >= 2 && totalResults === 0 && (
            <p className="mt-6 text-sm text-[#0B3D2E]/60">
              Aucun résultat pour « {query} ». Essayez un autre mot, ou{" "}
              <Link href="/contact" className="text-[#B7962F] underline">contactez-nous directement</Link>.
            </p>
          )}

          {products.length > 0 && (
            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Offres et services</p>
              <div className="flex flex-col gap-2">
                {products.map((p, i) => (
                  <Link key={i} href={p.href} className="rounded-xl border border-[#0B3D2E]/10 bg-white p-4 transition-colors hover:border-[#B7962F]/40">
                    <p className="text-sm font-medium text-[#0B3D2E]">{p.title}</p>
                    {p.subtitle && <p className="text-xs text-[#0B3D2E]/60">{p.subtitle}</p>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {posts.length > 0 && (
            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Articles du blog</p>
              <div className="flex flex-col gap-2">
                {posts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border border-[#0B3D2E]/10 bg-white p-4 transition-colors hover:border-[#B7962F]/40">
                    <p className="text-sm font-medium text-[#0B3D2E]">{p.title}</p>
                    {p.excerpt && <p className="text-xs text-[#0B3D2E]/60 line-clamp-2">{p.excerpt}</p>}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {faqResults.length > 0 && (
            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Questions fréquentes</p>
              <div className="flex flex-col gap-2">
                {faqResults.map((f) => (
                  <Link key={f.slug} href="/faq" className="rounded-xl border border-[#0B3D2E]/10 bg-white p-4 transition-colors hover:border-[#B7962F]/40">
                    <p className="text-sm font-medium text-[#0B3D2E]">{f.question}</p>
                    <p className="text-xs text-[#0B3D2E]/60 line-clamp-2">{f.answer}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {communeResults.length > 0 && (
            <div className="mt-10">
              <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Pages locales</p>
              <div className="flex flex-col gap-2">
                {communeResults.map((c) => (
                  <Link key={c.slug} href={`/agence-voyage/${c.slug}`} className="rounded-xl border border-[#0B3D2E]/10 bg-white p-4 transition-colors hover:border-[#B7962F]/40">
                    <p className="text-sm font-medium text-[#0B3D2E]">{c.h1}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
