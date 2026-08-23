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

const OMRA_PROGRAMME = [
  { titre: "Avant le départ", texte: "Conseil, vérification du dossier et préparation du voyage avec l'équipe SIRA VOYAGES." },
  { titre: "Départ d'Abidjan", texte: "Assistance et formalités de départ le jour du vol." },
  { titre: "Séjour à Médine", texte: "Installation, prières à la Mosquée du Prophète, accompagnement de l'équipe." },
  { titre: "Transfert vers La Mecque", texte: "Trajet organisé entre Médine et La Mecque." },
  { titre: "Séjour à La Mecque", texte: "Accomplissement de la Omra, temps spirituel, encadrement religieux." },
  { titre: "Retour", texte: "Transfert, vol retour et suivi post-voyage." },
];

const HAJJ_PROGRAMME = [
  { titre: "Préparation avant départ", texte: "Constitution du dossier, vérification des documents et information sur le déroulement du Hajj." },
  { titre: "Arrivée et installation", texte: "Accueil, transferts et installation selon le programme confirmé." },
  { titre: "Rites du Hajj avec accompagnement", texte: "Ihram, tawaf autour de la Kaaba, sa'i entre Safa et Marwa, station à Arafat, nuit à Muzdalifah, séjour à Mina, lapidation des stèles, sacrifice rituel, tawaf d'adieu — avec encadrement religieux." },
  { titre: "Retour et suivi", texte: "Vol retour et suivi post-voyage par l'équipe SIRA VOYAGES." },
];

const OMRA_FAQ = [
  { q: "Quels documents faut-il pour réserver une Omra ?", a: "Un passeport valide 12 mois après la date de retour, deux photos d'identité récentes, le carnet de vaccination contre la méningite, et vos ordonnances en cas de maladie chronique." },
  { q: "Le visa Omra est-il inclus ?", a: "L'assistance pour le visa Omra est incluse dans la formule, selon les conditions applicables et la validation du dossier. L'obtention du visa reste soumise à la décision des autorités compétentes." },
  { q: "Peut-on choisir une chambre individuelle ?", a: "Oui, selon les disponibilités de la session choisie. Le tarif varie selon le type de chambre (quadruple, triple, double ou individuelle)." },
  { q: "Comment se passe le paiement ?", a: "Un acompte de 30% est demandé à la réservation, un deuxième versement de 40% au plus tard 75 jours avant le départ, et le solde de 30% au plus tard 45 jours avant le départ." },
  { q: "L'agence accompagne-t-elle les pèlerins sur place ?", a: "Oui, un encadrement professionnel et un accompagnement religieux qualifié sont assurés avant, pendant et après le séjour." },
  { q: "Que faut-il prévoir dans la valise ?", a: "Vos documents de voyage, votre tenue d'ihram, vos médicaments personnels et vos effets pour la durée du séjour. Contactez l'agence pour une liste plus complète adaptée à votre formule." },
];

const HAJJ_FAQ = [
  { q: "Quel est le prix du Hajj avec SIRA VOYAGES ?", a: "La formule est proposée à partir de 5 500 000 FCFA. Le tarif définitif est confirmé selon le programme et les prestations retenues." },
  { q: "Quels documents faut-il préparer ?", a: "Un passeport valide 12 mois après le retour, des photos d'identité récentes, le carnet de vaccination requis et vos ordonnances en cas de maladie chronique." },
  { q: "Comment se déroule la préinscription ?", a: "Contactez SIRA VOYAGES pour connaître les modalités de préinscription et les conditions de participation en vigueur pour la campagne Hajj concernée." },
  { q: "Le visa Hajj est-il garanti ?", a: "Non. L'agence assiste dans la préparation et la constitution du dossier, mais l'obtention du visa dépend toujours des autorités compétentes." },
  { q: "Y a-t-il un accompagnement religieux ?", a: "Oui, un encadrement religieux qualifié accompagne les pèlerins tout au long du programme des rites du Hajj." },
];

const DOCUMENTS_REQUIS = [
  "Passeport valide 12 mois après la date de retour",
  "Deux photos d'identité récentes",
  "Carnet de vaccination (méningite obligatoire pour la Omra)",
  "Ordonnances médicales en cas de maladie chronique",
];

const CONDITIONS_PAIEMENT = [
  { label: "Acompte à la réservation", valeur: "30% du prix total" },
  { label: "2ème versement", valeur: "40% du prix total, au plus tard 75 jours avant le départ" },
  { label: "Solde", valeur: "30% restants, au plus tard 45 jours avant le départ" },
];

export default async function ServiceDetail({ params }: { params: Promise<{ categorie: string; slug: string }> }) {
  const { categorie, slug } = await params;

  const category = await prisma.serviceCategory.findUnique({ where: { slug: categorie } });
  if (!category) notFound();

  const item = await prisma.serviceItem.findUnique({
    where: { categoryId_slug: { categoryId: category.id, slug } },
    include: { sessions: true },
  });
  if (!item) notFound();

  const relatedItems = await prisma.serviceItem.findMany({
    where: { categoryId: category.id, NOT: { id: item.id } },
    take: 4,
  });

  const tagsList = item.tags ? item.tags.split(",") : [];
  const message = `Bonjour, je souhaite réserver : ${item.title}`;
  const isHajj = category.slug === "hajj";
  const isOmra = category.slug === "omra";
  const isPelerinage = isHajj || isOmra;

  const inclusionsList = parseList(item.inclusions);
  const exclusionsList = parseList(item.exclusions);
  const pointsFortsList = parseList(item.pointsForts);

  const pageUrl = `${SITE_URL}/services/${categorie}/${slug}`;
  const programme = isHajj ? HAJJ_PROGRAMME : isOmra ? OMRA_PROGRAMME : null;
  const faq = isHajj ? HAJJ_FAQ : isOmra ? OMRA_FAQ : null;

  // Galerie photo : image principale + images des sessions (si disponibles)
  const galleryImages = Array.from(
    new Set(
      [item.image, ...item.sessions.map((s) => s.image)].filter((img): img is string => Boolean(img))
    )
  ).slice(0, 5);

  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-8">
        {/* En-tête titre */}
        <div className="mb-4">
          {item.badge && <span className="mb-2 inline-block rounded-full border border-[#B7962F]/50 bg-[#B7962F]/10 px-3 py-1 text-xs font-medium text-[#B7962F]">{item.badge}</span>}
          <h1 className="font-[family-name:var(--font-garamond)] text-2xl text-[#0B3D2E] sm:text-3xl">{item.title}</h1>
          {item.subtitle && <p className="mt-1 text-sm text-[#0B3D2E]/60">{item.subtitle}</p>}
        </div>

        {/* Galerie */}
        {galleryImages.length > 0 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl" style={{ height: "360px" }}>
            <div className="relative col-span-4 row-span-2 sm:col-span-2">
              <Image src={galleryImages[0]} alt={item.title} fill className="object-cover" priority />
            </div>
            {galleryImages.slice(1, 5).map((img, i) => (
              <div key={i} className="relative col-span-2 hidden sm:block">
                <Image src={img} alt={`${item.title} — vue ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Corps + sidebar */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            {isHajj && (
              <div className="mb-6 rounded-xl border border-[#B7962F]/40 bg-[#B7962F]/10 p-5">
                <p className="text-sm font-semibold text-[#0B3D2E]">Inscriptions bientôt ouvertes</p>
                <p className="mt-1 text-sm text-[#0B3D2E]/70">
                  Les dates de session précises et les tarifs détaillés du Hajj 2027 seront communiqués prochainement.
                  Départ prévu du 14 au 19 mai 2027. Contactez-nous dès maintenant pour être parmi les premiers informés.
                </p>
              </div>
            )}

            {pointsFortsList.length > 0 && (
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Points forts</p>
                <ul className="flex flex-col gap-2">
                  {pointsFortsList.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0B3D2E]/85">
                      <span className="mt-0.5 text-[#B7962F]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.description && (
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Description complète</p>
                <p className="text-sm leading-relaxed text-[#0B3D2E]/80">{item.description}</p>
              </div>
            )}

            {!item.description && tagsList.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {tagsList.map((t) => (
                  <span key={t} className="rounded-full border border-[#0B3D2E]/15 bg-white px-3 py-1.5 text-xs text-[#0B3D2E]/80">{t}</span>
                ))}
              </div>
            )}

            {(inclusionsList.length > 0 || exclusionsList.length > 0) && (
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                {inclusionsList.length > 0 && (
                  <div>
                    <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Inclus</p>
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
                    <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Non inclus</p>
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
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Sessions disponibles</p>
                <div className="flex flex-col gap-4">
                  {item.sessions.map((s) => (
                    <div key={s.id} className="overflow-hidden rounded-xl border border-[#0B3D2E]/10 bg-white">
                      <div className="grid gap-0 sm:grid-cols-[minmax(0,220px)_1fr]">
                        <div className="relative h-40 w-full sm:h-auto">
                          <Image src={s.image} alt={s.periode} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <p className="text-sm font-medium text-[#0B3D2E]">{s.periode}</p>
                          <p className="text-xs text-[#0B3D2E]/60">{s.duree}</p>
                          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {s.quad && (
                              <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Quad.</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.quad} F</p></div>
                            )}
                            <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Triple</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.triple} F</p></div>
                            <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Double</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.double} F</p></div>
                            <div><p className="text-[10px] uppercase text-[#0B3D2E]/50">Individ.</p><p className="text-xs font-semibold text-[#0B3D2E]">{s.individuelle} F</p></div>
                          </div>
                          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je souhaite réserver : ${item.title} — ${s.periode}`)}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex h-9 items-center justify-center rounded-full bg-[#25D366] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90">Réserver cette session</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {programme && (
              <div className="mb-8">
                <p className="mb-4 text-sm font-semibold text-[#0B3D2E]">Programme</p>
                <ol className="flex flex-col gap-4">
                  {programme.map((etape, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0B3D2E] text-xs font-semibold text-[#F8F6F0]">{i + 1}</span>
                      <div>
                        <p className="text-sm font-medium text-[#0B3D2E]">{etape.titre}</p>
                        <p className="text-sm text-[#0B3D2E]/70">{etape.texte}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {isPelerinage && (
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Documents requis</p>
                <ul className="flex flex-col gap-2">
                  {DOCUMENTS_REQUIS.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0B3D2E]/85">
                      <span className="mt-0.5 text-[#B7962F]">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isPelerinage && (
              <div className="mb-8 rounded-xl border border-[#0B3D2E]/10 bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-[#0B3D2E]">Conditions de paiement</p>
                <div className="flex flex-col gap-2">
                  {CONDITIONS_PAIEMENT.map((c, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="text-sm text-[#0B3D2E]/70">{c.label}</span>
                      <span className="text-sm font-medium text-[#0B3D2E]">{c.valeur}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#0B3D2E]/50">L&apos;obtention du visa dépend toujours de la décision des autorités compétentes et n&apos;est jamais garantie.</p>
              </div>
            )}

            {faq && (
              <div className="mb-8">
                <p className="mb-4 text-sm font-semibold text-[#0B3D2E]">Questions fréquentes</p>
                <div className="flex flex-col gap-1">
                  {faq.map((q, i) => (
                    <details key={i} className="border-b border-[#0B3D2E]/10 py-3">
                      <summary className="cursor-pointer text-sm font-medium text-[#0B3D2E]">{q.q}</summary>
                      <p className="mt-2 text-sm text-[#0B3D2E]/70">{q.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <ProductShare title={item.title} url={pageUrl} />
          </div>

          {/* Sidebar prix */}
          <aside className="h-fit rounded-xl border border-[#0B3D2E]/10 bg-white p-5 lg:sticky lg:top-6">
            {item.sessions.length === 0 && (
              <>
                <p className="text-xs text-[#0B3D2E]/50">À partir de</p>
                <p className="text-2xl font-semibold text-[#0B3D2E]">{item.price}</p>
              </>
            )}
            <div className="mt-4 flex flex-col gap-2">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-opacity hover:opacity-90">Réserver via WhatsApp</a>
              <a href="https://siravoyage.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-[#0B3D2E] px-6 text-sm font-medium text-[#F8F6F0] transition-opacity hover:opacity-90">Réserver en ligne</a>
            </div>
            <ul className="mt-5 flex flex-col gap-2 border-t border-[#0B3D2E]/10 pt-4 text-xs text-[#0B3D2E]/60">
              <li>✓ Accompagnement avant, pendant et après le séjour</li>
              <li>✓ Assistance administrative et logistique</li>
              {isPelerinage && <li>✓ Encadrement religieux qualifié</li>}
            </ul>
          </aside>
        </div>

        {relatedItems.length > 0 && (
          <div className="mt-14 border-t border-[#0B3D2E]/10 pt-10">
            <p className="mb-6 text-sm font-semibold text-[#0B3D2E]">Vous pourriez aussi aimer</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {relatedItems.map((rel) => (
                <Link key={rel.id} href={`/services/${categorie}/${rel.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#0B3D2E] block">
                  {rel.image ? (
                    <Image src={rel.image} alt={rel.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl">{rel.icon}</div>
                  )}
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#041712] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="font-[family-name:var(--font-garamond)] text-sm text-[#F8F6F0]">{rel.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link href="/services" className="my-8 inline-block text-sm text-[#0B3D2E]/60 underline">← Retour à tous les services</Link>
      </div>

      <Footer />
    </main>
  );
}
