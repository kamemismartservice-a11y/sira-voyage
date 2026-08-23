import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { isPastDeparture, compareDepartures } from "@/lib/omra-dates";

export const metadata = {
  title: "Nos départs — Sira Voyages | Omra, Hajj et voyages programmés",
  description: "Consultez les prochains départs Omra et Hajj de Sira Voyages : dates, durées et tarifs par formule.",
};

export default async function NosDeparts() {
  const sessions = await prisma.omraSession.findMany({
    include: {
      item: {
        include: { category: true },
      },
    },
  });

  // Ne conserver que les départs à venir, triés du plus proche au plus lointain
  const upcomingSessions = sessions
    .filter((s) => !isPastDeparture(s.item.slug))
    .sort((a, b) => compareDepartures(a.item.slug, b.item.slug));

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <section className="px-6 py-14 text-center sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">CALENDRIER</p>
        <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#0B3D2E] sm:text-5xl">Nos départs</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#0B3D2E]/70 sm:text-base">
          Retrouvez ici les prochains départs Omra, avec leurs dates, durées et tarifs par formule de chambre.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        {upcomingSessions.length === 0 ? (
          <p className="text-center text-sm text-[#0B3D2E]/60">Aucun départ à venir pour le moment. Contactez-nous pour connaître les prochaines disponibilités.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingSessions.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.item.category.slug}/${s.item.slug}`}
                className="group overflow-hidden rounded-xl border border-[#0B3D2E]/10 bg-white transition-shadow hover:shadow-md"
              >
                <div className="relative h-44 w-full">
                  <Image src={s.image} alt={s.periode} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full border border-[#B7962F]/50 bg-[#0B3D2E]/80 px-3 py-1 text-[10px] uppercase tracking-wide text-[#F8F6F0] backdrop-blur-sm">
                    {s.item.category.label}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-[family-name:var(--font-garamond)] text-lg text-[#0B3D2E]">{s.item.title}</h2>
                  <p className="mt-1 text-sm font-medium text-[#0B3D2E]/80">{s.periode}</p>
                  <p className="text-xs text-[#0B3D2E]/50">{s.duree}</p>

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#0B3D2E]/10 pt-3 sm:grid-cols-4">
                    {s.quad && (
                      <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Quad.</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.quad} F</p></div>
                    )}
                    <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Triple</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.triple} F</p></div>
                    <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Double</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.double} F</p></div>
                    <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Individ.</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.individuelle} F</p></div>
                  </div>

                  <span className="mt-4 inline-block text-xs font-medium text-[#B7962F] underline">Voir l&apos;offre →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-xl border border-[#B7962F]/30 bg-[#B7962F]/10 p-6 text-center">
          <p className="text-sm text-[#0B3D2E]">
            Le Hajj 2027 est en préparation — départ prévu du 14 au 19 mai 2027, dates et tarifs détaillés communiqués prochainement.
          </p>
          <Link href="/services/hajj" className="mt-3 inline-block text-sm font-medium text-[#B7962F] underline">En savoir plus sur le Hajj →</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
