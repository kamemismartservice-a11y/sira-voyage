import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { isPastDeparture } from "@/lib/omra-dates";

function ServiceCard({ categorySlug, item }: { categorySlug: string; item: any }) {
  const past = isPastDeparture(item.slug);

  return (
    <Link
      href={"/services/" + categorySlug + "/" + item.slug}
      className={
        "group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0B3D2E] block" +
        (past ? " grayscale opacity-50" : "")
      }
    >
      {item.image ? (
        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-5xl">{item.icon}</div>
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#041712] via-transparent to-transparent opacity-90" />
      {item.badge && !past && (
        <span className="absolute right-3 top-3 rounded-full border border-[#B7962F]/50 bg-[#B7962F]/20 px-2.5 py-1 text-[10px] text-[#F8F6F0] backdrop-blur-sm">{item.badge}</span>
      )}
      {past && (
        <span className="absolute right-3 top-3 rounded-full border border-white/40 bg-black/50 px-2.5 py-1 text-[10px] text-[#F8F6F0] backdrop-blur-sm">Départ passé</span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-[family-name:var(--font-garamond)] text-lg text-[#F8F6F0] sm:text-xl">{item.title}</p>
        {item.subtitle && <p className="text-xs text-[#F8F6F0]/70">{item.subtitle}</p>}
      </div>
    </Link>
  );
}

export async function generateStaticParams() {
  const categories = await prisma.serviceCategory.findMany();
  return categories.map((c) => ({ categorie: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;
  const category = await prisma.serviceCategory.findUnique({ where: { slug: categorie } });
  if (!category) return {};
  return {
    title: `${category.label} — Sira Voyages`,
    description: `Découvrez nos offres ${category.label} avec Sira Voyages, votre agence de voyage à Abidjan.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;

  const category = await prisma.serviceCategory.findUnique({
    where: { slug: categorie },
    include: { items: true },
  });

  if (!category) notFound();

  // Si la catégorie ne contient qu'un seul produit, on saute directement à sa fiche
  if (category.items.length === 1) {
    redirect(`/services/${category.slug}/${category.items[0].slug}`);
  }

  const sortedItems = [...category.items].sort((a, b) => {
    const aPast = isPastDeparture(a.slug);
    const bPast = isPastDeparture(b.slug);
    if (aPast === bPast) return 0;
    return aPast ? 1 : -1;
  });

  const isOmra = category.slug === "omra";

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <div className="relative flex min-h-[35svh] flex-col items-center justify-center overflow-hidden bg-[#0B3D2E] px-6 py-10 text-center sm:px-10" style={{ backgroundImage: "radial-gradient(120% 90% at 50% 0%, rgba(183,150,47,0.18) 0%, rgba(11,61,46,0) 60%)" }}>
        <Header />
        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">{category.icon}</p>
          <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#F8F6F0] sm:text-5xl">{category.label}</h1>
        </div>
      </div>

      <section className="border-t border-[#0B3D2E]/5 px-6 py-14 sm:px-10">
        {isOmra && (
          <div className="mx-auto mb-10 max-w-4xl rounded-xl border border-[#B7962F]/30 bg-[#B7962F]/10 p-5 text-center">
            <p className="text-sm text-[#0B3D2E]">
              Aucune de ces sessions ne correspond à vos disponibilités ?
            </p>
            <Link href="/services/omra/sur-mesure" className="mt-2 inline-block text-sm font-semibold text-[#B7962F] underline">
              Demandez une Omra sur mesure →
            </Link>
          </div>
        )}

        {sortedItems.length === 0 ? (
          <p className="text-center text-sm text-[#0B3D2E]/60">Aucune offre disponible pour le moment dans cette catégorie.</p>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {sortedItems.map((item) => (
              <ServiceCard key={item.id} categorySlug={category.slug} item={item} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
