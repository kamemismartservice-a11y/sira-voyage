import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const categories = await prisma.serviceCategory.findMany({
    include: { items: true },
    orderBy: { id: "asc" },
  });

  const order = ["omra", "hajj", "billetterie", "visa", "navettes", "tourisme"];
  const sorted = [...categories].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));

  const highlights = sorted
    .map((category) => {
      const item = category.items.find((i) => i.image) || category.items[0];
      if (!item) return null;
      return {
        key: item.id,
        href: "/services/" + category.slug + "/" + item.slug,
        image: item.image,
        icon: item.icon,
        label: item.title,
        sub: item.subtitle || category.label,
      };
    })
    .filter((d): d is NonNullable<typeof d> => d !== null);

  return (
    <main className="relative flex flex-col overflow-hidden bg-[#0B3D2E]">
      <div className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <Image src="/images/hero-mecque.png" alt="La Mecque" fill priority className="object-cover object-center" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,23,18,0.75) 0%, rgba(6,37,27,0.55) 45%, rgba(11,61,46,0.92) 100%)" }} />

        <div className="relative z-10">
          <Header />
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B7962F]/40 bg-[#B7962F]/10 px-4 py-1.5 text-xs tracking-wide text-[#F8F6F0]/90 backdrop-blur-sm sm:text-sm">
            🕌 Hajj &amp; Omra · Un réseau de 13 ans d&rsquo;expérience
          </span>

          <p dir="rtl" lang="ar" className="mb-3 max-w-2xl font-[family-name:var(--font-garamond)] text-2xl leading-relaxed text-[#F8F6F0] sm:text-3xl">
            اللهم ارزقنا زيارة بيتك الحرام وزيارة نبيك
          </p>
          <p className="mb-8 max-w-lg text-sm italic leading-relaxed text-[#F8F6F0]/70 sm:text-base">
            « Ô Allah, accorde-nous la visite de Ta Maison Sacrée et la visite de Ton Prophète. »
          </p>

          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-[#B7962F] sm:text-sm">FAIRE L&rsquo;EXPÉRIENCE DU MONDE</p>

          <h1 className="max-w-3xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#F8F6F0] drop-shadow-sm sm:text-5xl md:text-6xl">Sira Voyage, votre partenaire de confiance pour la Omra, le Hajj et tous vos voyages.</h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F8F6F0]/80 sm:text-lg">Départs Côte d&rsquo;Ivoire et Europe, accompagnement complet et assistance 24h/24, du premier devis jusqu&rsquo;à votre retour.</p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a href="/services" className="inline-flex h-12 whitespace-nowrap items-center justify-center rounded-full bg-[#B7962F] px-7 text-sm font-medium tracking-wide text-[#0B3D2E] transition-colors hover:bg-[#CBA83E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F6F0] sm:text-base">Réserver une Omra</a>
            <a href="/services" className="inline-flex h-12 whitespace-nowrap items-center justify-center rounded-full bg-[#B7962F] px-7 text-sm font-medium tracking-wide text-[#0B3D2E] transition-colors hover:bg-[#CBA83E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F6F0] sm:text-base">Voir nos services</a>
            <a href="https://wa.me/2250545516269" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 whitespace-nowrap items-center justify-center gap-2 rounded-full bg-[#B7962F] px-7 text-sm font-medium tracking-wide text-[#0B3D2E] transition-colors hover:bg-[#CBA83E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F6F0] sm:text-base">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2zm5.6 14.14c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.28-3.42-.72-2.9-1.2-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97 0-1.42.74-2.11 1-2.4.26-.29.56-.36.75-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.07 1.3 2.36 1.45.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.38-.24.63-.15.26.1 1.65.78 1.93.92.29.15.48.22.55.34.07.13.07.75-.17 1.43z" /></svg>
              WhatsApp
            </a>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-[#F8F6F0]/20 pt-8">
            <div className="flex flex-col items-center">
              <span className="font-[family-name:var(--font-garamond)] text-3xl text-[#F8F6F0] sm:text-4xl">13 <span className="text-lg text-[#B7962F] sm:text-xl">ans</span></span>
              <span className="mt-1 text-[10px] uppercase tracking-wide text-[#F8F6F0]/70 sm:text-xs">d&rsquo;expérience réseau</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#F8F6F0]/20">
              <span className="font-[family-name:var(--font-garamond)] text-3xl text-[#F8F6F0] sm:text-4xl">10 000+</span>
              <span className="mt-1 text-[10px] uppercase tracking-wide text-[#F8F6F0]/70 sm:text-xs">pèlerins accompagnés</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-[family-name:var(--font-garamond)] text-3xl text-[#F8F6F0] sm:text-4xl">98%</span>
              <span className="mt-1 text-[10px] uppercase tracking-wide text-[#F8F6F0]/70 sm:text-xs">satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <section className="relative z-10 bg-[#0B3D2E] py-16">
        <p className="mb-2 text-center text-xs font-semibold tracking-[0.35em] text-[#B7962F]">NOS DESTINATIONS</p>
        <p className="mb-8 text-center text-xs text-[#F8F6F0]/50">Faites glisser pour découvrir tous nos services →</p>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:gap-6 sm:px-10 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          {highlights.map((d) => (
            <Link
              key={d.key}
              href={d.href}
              className="group relative aspect-[3/4] w-[68vw] flex-none snap-start overflow-hidden rounded-2xl sm:w-[280px]"
            >
              {d.image ? (
                <Image src={d.image} alt={d.label} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#0B3D2E] text-6xl">{d.icon}</div>
              )}
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#041712] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-[family-name:var(--font-garamond)] text-lg text-[#F8F6F0] sm:text-xl">{d.label}</p>
                <p className="text-xs text-[#F8F6F0]/70">{d.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}