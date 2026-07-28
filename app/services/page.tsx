import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ServicesSelector from "./ServicesSelector";

export default async function Services() {
  const categories = await prisma.serviceCategory.findMany({
    include: { items: true },
    orderBy: { id: "asc" },
  });

  const order = ["omra", "hajj", "billetterie", "visa", "navettes", "tourisme"];
  const sorted = [...categories].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <header className="flex items-center justify-between bg-[#0B3D2E] px-6 py-6 sm:px-10">
        <Link href="/" className="font-[family-name:var(--font-garamond)] text-xl tracking-wide text-[#F8F6F0] sm:text-2xl">Sira Voyage</Link>
        <nav className="flex items-center gap-6 text-sm text-[#F8F6F0]/80">
          <Link href="/" className="transition-colors hover:text-[#B7962F]">Accueil</Link>
          <Link href="/services" className="text-[#B7962F]">Services</Link>
        </nav>
      </header>

      <section className="px-6 py-14 text-center sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">CE QUE NOUS FAISONS</p>
        <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#0B3D2E] sm:text-5xl">Nos services</h1>
      </section>

      <ServicesSelector categories={sorted} />
    </main>
  );
}