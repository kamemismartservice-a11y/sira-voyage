const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const OMRA_INCLUSIONS = [
  "Billet d'avion aller-retour",
  "Visa Omra selon les conditions applicables et validation du dossier",
  "Hébergement à Médine et à La Mecque",
  "Transferts et transport sur place",
  "Encadrement professionnel par l'équipe SIRA VOYAGES",
  "Accompagnement religieux qualifié",
  "Assistance avant, pendant et après le séjour",
].join("\n");

const OMRA_EXCLUSIONS = [
  "Dépenses personnelles",
  "Achats et souvenirs",
  "Frais médicaux personnels",
  "Prestations non mentionnées dans la formule",
  "Toute demande spécifique hors contrat",
].join("\n");

const OMRA_POINTS_FORTS = [
  "Accompagnement avant, pendant et après le séjour",
  "Encadrement religieux qualifié",
  "Formules pensées pour le confort et la sérénité",
  "Agence agréée basée à Abidjan",
  "Assistance administrative et logistique",
].join("\n");

const HAJJ_INCLUSIONS = [
  "Billet d'avion aller-retour",
  "Visa Hajj selon réglementation applicable",
  "Hébergement confirmé",
  "Transport et transferts sur place",
  "Encadrement professionnel",
  "Accompagnement religieux qualifié",
  "Assistance avant, pendant et après le séjour",
].join("\n");

const HAJJ_EXCLUSIONS = [
  "Dépenses personnelles",
  "Achats et frais individuels",
  "Prestations non prévues dans le contrat",
  "Services supplémentaires demandés sur place",
].join("\n");

const HAJJ_POINTS_FORTS = [
  "Accompagnement structuré",
  "Assistance administrative",
  "Encadrement religieux",
  "Suivi personnalisé",
  "Organisation orientée confort et sérénité",
].join("\n");

const products = [
  // OMRA
  {
    category: "omra",
    slug: "juillet-2026",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Deux sessions sont proposées pour ce départ de juillet 2026 ; dates précises, durée et répartition des nuits entre Médine et La Mecque communiquées selon la session choisie.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  {
    category: "omra",
    slug: "aout-2026",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Deux sessions sont proposées pour ce départ d'août 2026, dont une session couvrant la période du Mawlid ; dates précises et répartition des nuits communiquées selon la session choisie.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  {
    category: "omra",
    slug: "septembre-2026",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Trois sessions sont proposées pour ce départ de septembre 2026 ; dates précises, durée et répartition des nuits entre Médine et La Mecque communiquées selon la session choisie.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  {
    category: "omra",
    slug: "octobre-2026",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Deux sessions sont proposées pour ce départ d'octobre 2026 ; dates précises et répartition des nuits communiquées selon la session choisie.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  {
    category: "omra",
    slug: "novembre-2026",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Deux sessions sont proposées pour ce départ de novembre 2026 ; dates précises et répartition des nuits communiquées selon la session choisie.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  {
    category: "omra",
    slug: "decembre-2027",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Trois départs sont proposés pour cette période de décembre 2027 ; dates précises et répartition des nuits communiquées selon le départ choisi.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  {
    category: "omra",
    slug: "janvier-2027",
    description:
      "Omra organisée par SIRA VOYAGES au départ d'Abidjan, avec accompagnement religieux et assistance continue avant, pendant et après le séjour à Médine et à La Mecque. Une session est proposée pour ce départ de janvier 2027 ; dates précises et répartition des nuits communiquées à la réservation.",
    inclusions: OMRA_INCLUSIONS,
    exclusions: OMRA_EXCLUSIONS,
    pointsForts: OMRA_POINTS_FORTS,
  },
  // HAJJ
  {
    category: "hajj",
    slug: "hajj-2027",
    description:
      "Hajj 2027 organisé par SIRA VOYAGES, avec départ prévu du 14 au 19 mai 2027 (dates sous réserve de confirmation officielle). Formule proposée à partir de 5 500 000 FCFA. Le programme accompagne les principaux rites du Hajj : ihram, tawaf autour de la Kaaba, sa'i entre Safa et Marwa, station à Arafat, nuit à Muzdalifah, séjour à Mina, lapidation des stèles, sacrifice rituel et tawaf d'adieu. Les inscriptions sont bientôt ouvertes ; contactez SIRA VOYAGES pour être informé(e) en priorité.",
    inclusions: HAJJ_INCLUSIONS,
    exclusions: HAJJ_EXCLUSIONS,
    pointsForts: HAJJ_POINTS_FORTS,
  },
  // BILLETTERIE
  {
    category: "billetterie",
    slug: "vols-nationaux-internationaux",
    description:
      "SIRA VOYAGES propose la réservation de billets d'avion pour vols nationaux et internationaux, en lien avec plusieurs compagnies aériennes dont Ethiopian Airlines, Qatar Airways, Air Côte d'Ivoire et Turkish Airlines. Contactez l'agence pour connaître les disponibilités et tarifs selon votre destination et vos dates de voyage.",
    inclusions: null,
    exclusions: null,
    pointsForts: [
      "Ethiopian Airlines",
      "Qatar Airways",
      "Air Côte d'Ivoire",
      "Turkish Airlines",
    ].join("\n"),
  },
  // VISA
  {
    category: "visa",
    slug: "assistance-visa",
    description:
      "SIRA VOYAGES accompagne vos démarches de visa de A à Z, pour l'Arabie Saoudite (Omra/Hajj), les Émirats Arabes Unis, l'espace Schengen, les États-Unis, le Canada et le Royaume-Uni. L'agence assiste dans la constitution et la vérification du dossier, sans garantir l'obtention du visa, qui dépend de la décision des autorités compétentes.",
    inclusions: null,
    exclusions: null,
    pointsForts: [
      "Arabie Saoudite (Omra/Hajj)",
      "Émirats Arabes Unis",
      "Espace Schengen",
      "États-Unis & Canada",
      "Royaume-Uni",
    ].join("\n"),
  },
  // NAVETTES
  {
    category: "navettes",
    slug: "navette-vip",
    description:
      "SIRA VOYAGES propose un service de navette VIP en minibus 11 places avec chauffeur professionnel, pour vos transferts aéroport, journées complètes, demi-journées, événements VIP, excursions ou partenariats avec agences et hôtels.",
    inclusions: null,
    exclusions: null,
    pointsForts: [
      "Transfert aéroport",
      "Journée complète (8h)",
      "Demi-journée (4h)",
      "Événement VIP",
      "Excursion Assinie",
      "Partenariat agences & hôtels",
    ].join("\n"),
  },
  // TOURISME
  {
    category: "tourisme",
    slug: "excursions-abidjan",
    description:
      "SIRA VOYAGES propose des excursions d'une journée au départ d'Abidjan vers plusieurs destinations de Côte d'Ivoire, ainsi qu'une formule de deux jours vers Divo avec une nuit sur place.",
    inclusions: null,
    exclusions: null,
    pointsForts: [
      "Grand-Bassam — 35 000 F",
      "Assinie & Assouindé — 45 000 F",
      "Yamoussoukro — 55 000 F",
      "Azagny — 50 000 F",
      "Jacqueville — 30 000 F",
      "Aboudé-Mandéké & La Mé — 40 000 F",
      "Bingerville & Jardin Botanique (½j) — 20 000 F",
      "Divo (2j/1n) — 95 000 F",
    ].join("\n"),
  },
  {
    category: "tourisme",
    slug: "decouverte",
    description:
      "Circuits découverte de 3 jours / 2 nuits proposés par SIRA VOYAGES vers Man et Korhogo, avec hébergement et prestations incluses selon la formule choisie.",
    inclusions: null,
    exclusions: null,
    pointsForts: [
      "Man — 195 000 F",
      "Korhogo — 210 000 F",
    ].join("\n"),
  },
  {
    category: "tourisme",
    slug: "sud-ouest",
    description:
      "Grand Circuit du Sud-Ouest ivoirien sur 7 jours / 6 nuits proposé par SIRA VOYAGES, à la découverte de San Pedro, Grand-Béréby, Sassandra et Monogaga.",
    inclusions: null,
    exclusions: null,
    pointsForts: [
      "San Pedro",
      "Grand-Béréby",
      "Sassandra",
      "Monogaga",
    ].join("\n"),
  },
];

async function main() {
  let updated = 0;

  for (const p of products) {
    const category = await prisma.serviceCategory.findUnique({ where: { slug: p.category } });
    if (!category) {
      console.log(`Catégorie introuvable: ${p.category}`);
      continue;
    }

    await prisma.serviceItem.update({
      where: { categoryId_slug: { categoryId: category.id, slug: p.slug } },
      data: {
        description: p.description,
        inclusions: p.inclusions,
        exclusions: p.exclusions,
        pointsForts: p.pointsForts,
      },
    });

    console.log(`OK: ${p.category}/${p.slug}`);
    updated++;
  }

  console.log(`\n${updated} produits mis à jour.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
