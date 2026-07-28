import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const data = {
  omra: {
    label: "Omra",
    icon: "🕋",
    items: [
      {
        slug: "juillet-2026", title: "Omra — Juillet 2026", subtitle: "2 sessions disponibles",
        image: "/images/services/omra/omra-juillet-2026-session1.jpg", price: "à partir de 1 744 000 FCFA",
        sessions: [
          { periode: "Session 1 : du 02 au 11 juillet 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-juillet-2026-session1.jpg", quad: "1 744 000", triple: "1 995 000", double: "2 495 000", individuelle: "2 745 000" },
          { periode: "Session 2 : du 22 au 31 juillet 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-juillet-2026-session2.jpg", quad: "1 844 000", triple: "2 095 000", double: "2 595 000", individuelle: "2 645 000" },
        ],
      },
      {
        slug: "aout-2026", title: "Omra — Août 2026", subtitle: "2 sessions disponibles (dont Mawlid)",
        image: "/images/services/omra/omra-aout-2026-session1.jpg", price: "à partir de 1 941 000 FCFA",
        sessions: [
          { periode: "Session 1 : du 05 au 14 août 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-aout-2026-session1.jpg", quad: "1 941 000", triple: "2 187 000", double: "2 682 000", individuelle: "2 884 000" },
          { periode: "Session 2 (Mawlid) : du 19 au 28 août 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-aout-2026-session2.jpg", quad: "1 941 000", triple: "2 187 000", double: "2 682 000", individuelle: "2 884 000" },
        ],
      },
      {
        slug: "septembre-2026", title: "Omra — Septembre 2026", subtitle: "3 sessions disponibles",
        image: "/images/services/omra/omra-septembre-2026-session1.jpg", price: "à partir de 1 499 000 FCFA",
        sessions: [
          { periode: "Session 1 : du 10 au 19 septembre 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-septembre-2026-session1.jpg", quad: "1 499 000", triple: "1 745 000", double: "2 245 000", individuelle: "2 445 000" },
          { periode: "Session 2 : du 12 au 20 septembre 2026", duree: "8 nuits (4 Médine + 4 Mecque)", image: "/images/services/omra/omra-septembre-2026-session2.jpg", quad: "1 499 000", triple: "1 745 000", double: "2 245 000", individuelle: "2 445 000" },
          { periode: "Session 3 : du 24 septembre au 03 octobre 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-septembre-2026-session3.jpg", quad: "1 499 000", triple: "1 745 000", double: "2 245 000", individuelle: "2 445 000" },
        ],
      },
      {
        slug: "octobre-2026", title: "Omra — Octobre 2026", subtitle: "2 sessions disponibles",
        image: "/images/services/omra/omra-octobre-2026-session1.jpg", price: "à partir de 1 499 000 FCFA",
        sessions: [
          { periode: "Session 1 : du 13 au 20 octobre 2026", duree: "7 nuits (3 Médine + 4 Mecque)", image: "/images/services/omra/omra-octobre-2026-session1.jpg", quad: "1 499 000", triple: "1 745 000", double: "2 245 000", individuelle: "2 445 000" },
          { periode: "Session 2 (vacances scolaires) : du 22 octobre au 01 novembre 2026", duree: "10 nuits (4 Médine + 6 Mecque)", image: "/images/services/omra/omra-octobre-2026-session2.jpg", quad: "1 744 000", triple: "1 995 000", double: "2 495 000", individuelle: "2 745 000" },
        ],
      },
      {
        slug: "novembre-2026", title: "Omra — Novembre 2026", subtitle: "2 sessions disponibles",
        image: "/images/services/omra/omra-novembre-2026-session1.jpg", price: "à partir de 1 499 000 FCFA",
        sessions: [
          { periode: "Session 1 : du 10 au 18 novembre 2026", duree: "8 nuits (4 Médine + 4 Mecque)", image: "/images/services/omra/omra-novembre-2026-session1.jpg", quad: "1 499 000", triple: "1 745 000", double: "2 245 000", individuelle: "2 445 000" },
          { periode: "Session 2 : du 26 novembre au 05 décembre 2026", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-novembre-2026-session2.jpg", quad: "1 549 000", triple: "1 795 000", double: "2 295 000", individuelle: "2 495 000" },
        ],
      },
      {
        slug: "decembre-2027", title: "Omra — Décembre 2027", subtitle: "3 départs disponibles",
        image: "/images/services/omra/omra-decembre-2027-depart1.jpg", price: "à partir de 1 845 000 FCFA",
        sessions: [
          { periode: "Départ 1 : du 19 au 28 décembre 2027", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-decembre-2027-depart1.jpg", quad: "1 845 000", triple: "2 095 000", double: "2 595 000", individuelle: "2 845 000" },
          { periode: "Départ 2 : du 24 décembre 2027 au 02 janvier 2028", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-decembre-2027-depart2.jpg", quad: "1 845 000", triple: "2 095 000", double: "2 595 000", individuelle: "2 845 000" },
          { periode: "Départ 3 : du 26 décembre 2027 au 04 janvier 2028", duree: "9 nuits (4 Médine + 5 Mecque)", image: "/images/services/omra/omra-decembre-2027-depart3.jpg", quad: "1 845 000", triple: "2 095 000", double: "2 595 000", individuelle: "2 845 000" },
        ],
      },
      {
        slug: "janvier-2027", title: "Omra — Janvier 2027", subtitle: "1 session disponible",
        image: "/images/services/omra/omra-janvier-2027.jpg", price: "1 499 000 FCFA",
        sessions: [
          { periode: "Du 03 au 10 janvier 2027", duree: "7 nuits (3 Médine + 4 Mecque)", image: "/images/services/omra/omra-janvier-2027.jpg", quad: "1 499 000", triple: "1 745 000", double: "2 245 000", individuelle: "2 445 000" },
        ],
      },
    ],
  },
  hajj: {
    label: "Hajj", icon: "🕌",
    items: [
      { slug: "hajj-2027", title: "Hajj 2027", subtitle: "14 – 19 mai 2027", image: "/images/hero-mecque.png", badge: "HAJJ 2027", price: "à partir de 5 500 000 FCFA", tags: "Ihram,Tawaf autour de la Kaaba,Sa'i entre Safa et Marwa,Station à Arafat,Nuit à Muzdalifah,Séjour à Mina,Lapidation des stèles (Jamarat),Sacrifice rituel,Tawaf d'adieu" },
    ],
  },
  billetterie: {
    label: "Billetterie", icon: "✈️",
    items: [
      { slug: "vols-nationaux-internationaux", title: "Billetterie", subtitle: "Vols nationaux et internationaux", icon: "✈️", price: "Émission sous 24 à 48h", tags: "Ethiopian Airlines,Qatar Airways,Air Côte d'Ivoire,Turkish Airlines" },
    ],
  },
  visa: {
    label: "Assistance Visa", icon: "🛂",
    items: [
      { slug: "assistance-visa", title: "Assistance Visa", subtitle: "De A à Z, nous gérons tout", icon: "🛂", price: "à partir de 15 000 FCFA / dossier", tags: "Arabie Saoudite (Omra/Hajj),Émirats Arabes Unis,Espace Schengen,États-Unis & Canada,Royaume-Uni" },
    ],
  },
  navettes: {
    label: "Navettes VIP", icon: "🚐",
    items: [
      { slug: "navette-vip", title: "Navettes VIP", subtitle: "Minibus 11 places, chauffeur professionnel", icon: "🚐", price: "à partir de 30 000 FCFA", tags: "Transfert aéroport,Journée complète (8h),Demi-journée (4h),Événement VIP,Excursion Assinie,Partenariat agences & hôtels" },
    ],
  },
  tourisme: {
    label: "Tourisme CI", icon: "🌍",
    items: [
      { slug: "sud-ouest", title: "Sud-Ouest ivoirien — Le Grand Circuit", subtitle: "7 jours / 6 nuits", image: "/images/dest-cote-divoire.png", price: "390 000 FCFA / personne", tags: "San Pedro,Grand-Béréby,Sassandra,Monogaga" },
      { slug: "excursions-abidjan", title: "Excursions près d'Abidjan", subtitle: "1 jour (sauf mention)", price: "20 000 à 95 000 FCFA", tags: "Grand-Bassam — 35 000 F,Assinie & Assouindé — 45 000 F,Yamoussoukro — 55 000 F,Azagny — 50 000 F,Jacqueville — 30 000 F,Aboudé-Mandéké & La Mé — 40 000 F,Bingerville & Jardin Botanique (½j) — 20 000 F,Divo (2j/1n) — 95 000 F" },
      { slug: "decouverte", title: "Circuits découverte", subtitle: "3 jours / 2 nuits", price: "195 000 à 210 000 FCFA", tags: "Man — 195 000 F,Korhogo — 210 000 F" },
    ],
  },
};

async function main() {
  for (const [catSlug, cat] of Object.entries(data)) {
    const category = await prisma.serviceCategory.upsert({
      where: { slug: catSlug },
      update: { label: cat.label, icon: cat.icon },
      create: { slug: catSlug, label: cat.label, icon: cat.icon },
    });

    for (const item of cat.items) {
      const savedItem = await prisma.serviceItem.upsert({
        where: { categoryId_slug: { categoryId: category.id, slug: item.slug } },
        update: {
          title: item.title, subtitle: item.subtitle ?? null, image: item.image ?? null,
          icon: item.icon ?? null, badge: item.badge ?? null, price: item.price, tags: item.tags ?? null,
        },
        create: {
          categoryId: category.id, slug: item.slug, title: item.title, subtitle: item.subtitle ?? null,
          image: item.image ?? null, icon: item.icon ?? null, badge: item.badge ?? null, price: item.price, tags: item.tags ?? null,
        },
      });

      if (item.sessions) {
        await prisma.omraSession.deleteMany({ where: { itemId: savedItem.id } });
        for (const s of item.sessions) {
          await prisma.omraSession.create({
            data: { itemId: savedItem.id, periode: s.periode, duree: s.duree, image: s.image, quad: s.quad ?? null, triple: s.triple, double: s.double, individuelle: s.individuelle },
          });
        }
      }
    }
  }
  console.log("✅ Base de données remplie avec succès !");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());