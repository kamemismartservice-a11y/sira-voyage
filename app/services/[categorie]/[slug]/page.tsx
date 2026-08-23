import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShare from "@/components/ProductShare";

const WHATSAPP_NUMBER = "2250545516269";
const SITE_URL = "https://omrahajjabidjan.com";

function parseList(text: string | null): string[] {
  if (!text) return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

export default async function ServiceDetail({ params }: { params: Promise<{ categorie: string; slug: string }> }) {
  const { categorie, slug } = await params;

  const category = await prisma.serviceCategory.findUnique({ where: { slug: categorie } });
  if (!category) notFound();

  const item = await prisma.serviceItem.findUnique({
    where: { categoryId_slug: { categoryId: category.id, slug } },
    include: { sessions: true },
  });
  if (!item) notFound();

  const tagsList = item.tags ? item.tags.split(",") : [];
  const message = `Bonjour, je souhaite réserver : ${item.title}`;
  const isHajj = category.slug === "hajj";

  const inclusionsList = parseList(item.inclusions);
  const exclusionsList = parseList(item.exclusions);
  const pointsFortsList = parseList(item.pointsForts);

  const pageUrl = `${SITE_URL}/services/${categorie}/${slug}`;

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <div className="relative overflow-hidden">
        {item.image ? (
          <div className="relative h-64 w-full sm:h-80">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,23,18,0.35) 0%, rgba(4,23,18,0.85) 100%)" }} />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              {item.badge && <span className="mb-2 inline-block rounded-full border border-[#B7962F]/50 bg-[#B7962F]/15 px-3 py-1 text-xs text-[#F8F6F0] backdrop-blur-sm">{item.badge}</span>}
              <h1 className="font-[family-name:var(--font-garamond)] text-3xl text-[#F8F6F0] sm:text-4xl">{item.title}</h1>
              {item.subtitle && <p className="mt-2 text-sm text-[#F8F6F0]/80 sm:text-base">{item.subtitle}</p>}
            </div>
          </div>
        ) : (
          <div className="flex h-64 w-full flex-col items-center justify-center bg-[#0B3D2E] text-center sm:h-80" style={{ backgroundImage: "radial-gradient(120% 90% at 50% 0%, rgba(183,150,47,0.18) 0%, rgba(11,61,46,0) 60%)" }}>
            <span className="mb-3 text-6xl">{item.icon}</span>
            {item.badge && <span className="mb-2 inline-block rounded-full border border-[#B7962F]/50 bg-[#B7962F]/15 px-3 py-1 text-xs text-[#F8F6F0]">{item.badge}</span>}
            <h1 className="font-[family-name:var(--font-garamond)] text-3xl text-[#F8F6F0] sm:text-4xl">{item.title}</h1>
            {item.subtitle && <p className="mt-2 text-sm text-[#F8F6F0]/80 sm:text-base">{item.subtitle}</p>}
          </div>
        )}
      </div>

      <section className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        {item.sessions.length === 0 && <p className="text-2xl font-semibold text-[#0B3D2E]">{item.price}</p>}

        {isHajj && (
          <div className="mt-6 rounded-xl border border-[#B7962F]/40 bg-[#B7962F]/10 p-5">
            <p className="text-sm font-semibold text-[#0B3D2E]">Inscriptions bientôt ouvertes</p>
            <p className="mt-1 text-sm text-[#0B3D2E]/70">
              Les dates de session précises et les tarifs détaillés du Hajj 2027 seront communiqués prochainement.
              Départ prévu du 14 au 19 mai 2027. Contactez-nous dès maintenant pour être parmi les premiers informés.
            </p>
          </div>
        )}

        {item.description ? (
          <p className="mt-6 text-sm leading-relaxed text-[#0B3D2E]/80 sm:text-base">{item.description}</p>
        ) : (
          tagsList.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tagsList.map((t) => (
                <span key={t} className="rounded-full border border-[#0B3D2E]/15 bg-white px-3 py-1.5 text-xs text-[#0B3D2E]/80 sm:text-sm">{t}</span>
              ))}
            </div>
          )
        )}

        {pointsFortsList.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B7962F]">Pourquoi choisir cette expérience ?</p>
            <ul className="flex flex-col gap-2">
              {pointsFortsList.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#0B3D2E]/85">
                  <span className="mt-0.5 text-[#B7962F]">★</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(inclusionsList.length > 0 || exclusionsList.length > 0) && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {inclusionsList.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B7962F]">Ce que votre voyage inclut</p>
                <ul className="flex flex-col gap-2">
                  {inclusionsList.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0B3D2E]/85">
                      <span className="mt-0.5 text-green-700">✓</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {exclusionsList.length > 0 && (
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B7962F]">Ce qui n&apos;est pas inclus</p>
                <ul className="flex flex-col gap-2">
                  {exclusionsList.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0B3D2E]/70">
                      <span className="mt-0.5 text-red-600">✕</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {item.sessions.length > 0 && (
          <div className="mt-8 flex flex-col gap-6">
            {item.sessions.map((s) => (
              <div key={s.id} className="overflow-hidden rounded-xl border border-[#0B3D2E]/10 bg-white">
                <div className="grid gap-0 sm:grid-cols-[minmax(0,260px)_1fr]">
                  <div className="relative h-44 w-full sm:h-auto">
                    <Image src={s.image} alt={s.periode} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-base font-medium text-[#0B3D2E]">{s.periode}</p>
                    <p className="text-xs text-[#0B3D2E]/60">{s.duree}</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {s.quad && (
                        <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Quad.</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.quad} F</p></div>
                      )}
                      <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Triple</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.triple} F</p></div>
                      <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Double</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.double} F</p></div>
                      <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Individ.</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.individuelle} F</p></div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je souhaite réserver : ${item.title} — ${s.periode}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-[#25D366] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90">Réserver via WhatsApp</a>
                      <a href="https://siravoyage.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-[#0B3D2E] px-4 text-xs font-medium text-[#F8F6F0] transition-opacity hover:opacity-90">Réserver en ligne</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {item.sessions.length === 0 && (
          <div className="mt-8 flex gap-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-opacity hover:opacity-90">Réserver via WhatsApp</a>
            <a href="https://siravoyage.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[#0B3D2E] px-6 text-sm font-medium text-[#F8F6F0] transition-opacity hover:opacity-90">Réserver en ligne</a>
          </div>
        )}

        <ProductShare title={item.title} url={pageUrl} />

        <Link href="/services" className="mt-8 inline-block text-sm text-[#0B3D2E]/60 underline">← Retour à tous les services</Link>
      </section>

      <Footer />
    </main>
  );
}
