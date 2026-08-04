import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Nos Services — Sira Voyages | Omra, Hajj, Billetterie, Visa, Navette VIP",
  description: "Découvrez tous nos services : Omra, Hajj, billetterie aérienne, assistance visa, navette VIP et circuits touristiques en Côte d'Ivoire.",
};

function ServiceCard({ category, item }: { category: { slug: string }; item: any }) {
  return (
    <Link href={"/services/" + category.slug + "/" + item.slug} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#0B3D2E] block">
      {item.image ? (
        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-5xl">{item.icon}</div>
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#041712] via-transparent to-transparent opacity-90" />
      {item.badge && (
        <span className="absolute right-3 top-3 rounded-full border border-[#B7962F]/50 bg-[#B7962F]/20 px-2.5 py-1 text-[10px] text-[#F8F6F0] backdrop-blur-sm">{item.badge}</span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-[family-name:var(--font-garamond)] text-lg text-[#F8F6F0] sm:text-xl">{item.title}</p>
        {item.subtitle && <p className="text-xs text-[#F8F6F0]/70">{item.subtitle}</p>}
      </div>
    </Link>
  );
}

export default async function Services() {
  const categories = await prisma.serviceCategory.findMany({
    include: { items: true },
    orderBy: { id: "asc" },
  });

  const order = ["omra", "hajj", "billetterie", "visa", "navettes", "tourisme"];
  const sorted = [...categories].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

  const omra = sorted.find((c) => c.slug === "omra");
  const tourisme = sorted.find((c) => c.slug === "tourisme");
  const middle = sorted.filter((c) => ["hajj", "billetterie", "visa", "navettes"].includes(c.slug));

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <div className="relative flex min-h-[45svh] flex-col items-center justify-center overflow-hidden bg-[#0B3D2E] px-6 py-10 text-center sm:px-10" style={{ backgroundImage: "radial-gradient(120% 90% at 50% 0%, rgba(183,150,47,0.18) 0%, rgba(11,61,46,0) 60%)" }}>
        <Header />
        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">CE QUE NOUS FAISONS</p>
          <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#F8F6F0] sm:text-5xl">Nos services</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#F8F6F0]/70 sm:text-base">
            Omra, Hajj, billetterie, visa, navettes VIP et circuits touristiques — un accompagnement complet, du premier devis jusqu&rsquo;à votre retour.
          </p>
        </div>
      </div>

      {omra && (
        <section className="border-t border-[#0B3D2E]/5 px-6 py-14 sm:px-10">
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.35em] text-[#B7962F]">
            {omra.icon} {omra.label.toUpperCase()}
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {omra.items.map((item) => (
              <ServiceCard key={item.id} category={omra} item={item} />
            ))}
          </div>
        </section>
      )}

      {middle.length > 0 && (
        <section className="border-t border-[#0B3D2E]/5 px-6 py-14 sm:px-10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {middle.map((category) => (
              <div key={category.id}>
                <p className="mb-4 text-center text-xs font-semibold tracking-[0.35em] text-[#B7962F]">
                  {category.icon} {category.label.toUpperCase()}
                </p>
                <div className="flex flex-col gap-4">
                  {category.items.map((item) => (
                    <ServiceCard key={item.id} category={category} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {tourisme && (
        <section className="border-t border-[#0B3D2E]/5 px-6 py-14 sm:px-10">
          <p className="mb-8 text-center text-xs font-semibold tracking-[0.35em] text-[#B7962F]">
            {tourisme.icon} {tourisme.label.toUpperCase()}
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {tourisme.items.map((item) => (
              <ServiceCard key={item.id} category={tourisme} item={item} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}