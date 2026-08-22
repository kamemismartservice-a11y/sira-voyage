export interface CommuneFaqItem {
  q: string;
  a: string;
}

export interface CommuneData {
  slug: string;
  nom: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  faq: CommuneFaqItem[];
  cta: string;
}

export const communes: CommuneData[] = [
  {
    slug: "abobo",
    nom: "Abobo",
    title: "Agence de voyage à Abobo | Omra, Hajj et billets d'avion",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs d'Abobo pour la Omra, le Hajj, la billetterie et les voyages familiaux.",
    h1: "Agence de voyage à Abobo : Omra, Hajj et billets d'avion",
    intro: [
      "Vous vivez à Abobo et préparez une Omra, un Hajj, un billet d'avion ou un voyage familial ? SIRA VOYAGES vous accompagne depuis Abidjan pour comprendre les démarches, vérifier les éléments importants de votre projet et connaître les offres réellement disponibles.",
    ],
    faq: [
      { q: "Puis-je préparer ma première Omra depuis Abobo ?", a: "Oui. SIRA VOYAGES accompagne les voyageurs d'Abobo, y compris pour une première Omra, avec des explications claires sur les démarches." },
      { q: "Puis-je voyager en famille ou en groupe ?", a: "Oui. Indiquez le nombre de voyageurs pour recevoir une orientation adaptée." },
    ],
    cta: "Demander les disponibilités depuis Abobo",
  },
  {
    slug: "adjame",
    nom: "Adjamé",
    title: "Agence de voyage à Adjamé | Billets, visa, Omra et Hajj",
    metaDescription: "SIRA VOYAGES accompagne vos projets de voyage religieux, professionnel et international depuis Adjamé.",
    h1: "Agence de voyage à Adjamé : billets, visa, Omra et Hajj",
    intro: [
      "Depuis Adjamé, SIRA VOYAGES accompagne vos projets de voyage religieux, professionnel, familial ou international. Présentez votre besoin — Omra, Hajj, billet, visa ou transfert — afin de recevoir une orientation adaptée à votre destination et à votre période souhaitée.",
    ],
    faq: [
      { q: "SIRA VOYAGES peut-elle m'aider pour un visa depuis Adjamé ?", a: "L'agence propose une assistance dans les démarches selon votre destination et votre dossier. L'obtention d'un visa reste soumise à la décision des autorités compétentes." },
      { q: "Puis-je réserver uniquement un billet d'avion ?", a: "Oui, SIRA VOYAGES propose des services de billetterie indépendamment d'un projet Omra ou Hajj." },
    ],
    cta: "Parler à un conseiller voyage",
  },
  {
    slug: "attecoube",
    nom: "Attécoubé",
    title: "Agence de voyage à Attécoubé | Omra, Hajj et séjours organisés",
    metaDescription: "SIRA VOYAGES accompagne les habitants d'Attécoubé pour la Omra, le Hajj et leurs voyages familiaux.",
    h1: "Agence de voyage à Attécoubé : Omra, Hajj et séjours organisés",
    intro: [
      "SIRA VOYAGES accompagne les habitants d'Attécoubé dans la préparation de leur Omra, Hajj, séjour familial ou voyage international. Chaque projet commence par une écoute attentive de vos besoins, de votre période souhaitée et des documents à prévoir.",
    ],
    faq: [
      { q: "Comment démarrer mon dossier depuis Attécoubé ?", a: "Contactez SIRA VOYAGES pour présenter votre projet ; l'agence vous indiquera les prochaines étapes." },
      { q: "Puis-je demander un devis avant de m'engager ?", a: "Oui, vous pouvez demander les informations correspondant aux offres actives avant toute réservation." },
    ],
    cta: "Préparer mon projet de voyage",
  },
  {
    slug: "cocody",
    nom: "Cocody",
    title: "Agence de voyage à Cocody | Omra, Hajj, visa et billetterie",
    metaDescription: "SIRA VOYAGES vous accueille à Cocody Riviera Bonoumin pour vos projets de Omra, Hajj et voyages.",
    h1: "Agence de voyage à Cocody : Omra, Hajj, visa et billetterie",
    intro: [
      "SIRA VOYAGES vous accueille à Cocody Riviera Bonoumin pour vos projets de Omra, Hajj, billetterie, assistance visa, navette et séjour sur mesure. Vous pouvez échanger avec un conseiller, présenter votre projet et connaître les conditions applicables avant toute réservation.",
    ],
    faq: [
      { q: "Où se trouve l'agence à Cocody ?", a: "SIRA VOYAGES est située à Cocody Riviera 3, Bonoumin, Rond-point Cap Nord, direction Abidjan Mall." },
      { q: "Puis-je venir sur place sans rendez-vous ?", a: "Il est recommandé de contacter l'agence avant de vous déplacer afin de préparer votre visite." },
    ],
    cta: "Nous rendre visite à Cocody",
  },
  {
    slug: "koumassi",
    nom: "Koumassi",
    title: "Agence de voyage à Koumassi | Omra, Hajj et accompagnement",
    metaDescription: "SIRA VOYAGES accompagne votre première Omra depuis Koumassi, ainsi que le Hajj et la billetterie.",
    h1: "Agence de voyage à Koumassi : Omra, Hajj et accompagnement",
    intro: [
      "Vous préparez votre première Omra depuis Koumassi ? SIRA VOYAGES vous aide à structurer votre projet : période, documents, type de chambre, besoins de santé et étapes avant le départ. L'agence accompagne également les demandes de Hajj, de billetterie et de voyages familiaux.",
    ],
    faq: [
      { q: "Puis-je recevoir une checklist avant mon départ ?", a: "Oui, l'agence peut vous orienter sur les documents et éléments à préparer selon votre formule." },
      { q: "L'agence accompagne-t-elle les groupes depuis Koumassi ?", a: "Oui, les familles et groupes peuvent présenter leur projet pour une étude adaptée." },
    ],
    cta: "Recevoir la checklist Omra",
  },
  {
    slug: "marcory",
    nom: "Marcory",
    title: "Agence de voyage à Marcory | Billets, visa, Omra et voyages d'affaires",
    metaDescription: "SIRA VOYAGES accompagne vos déplacements personnels et professionnels depuis Marcory.",
    h1: "Agence de voyage à Marcory : billets, visa, Omra et voyages d'affaires",
    intro: [
      "Depuis Marcory, organisez vos déplacements personnels et professionnels avec SIRA VOYAGES. L'agence propose la billetterie, l'assistance visa, les voyages d'affaires, la Omra, le Hajj et les transferts selon vos besoins.",
    ],
    faq: [
      { q: "SIRA VOYAGES gère-t-elle les voyages professionnels ?", a: "Oui, l'agence accompagne les déplacements d'affaires en plus des projets religieux et touristiques." },
      { q: "Puis-je demander un transfert depuis Marcory ?", a: "Oui, des transferts et navettes peuvent être organisés sur réservation." },
    ],
    cta: "Demander une solution de voyage",
  },
  {
    slug: "plateau",
    nom: "Le Plateau",
    title: "Agence de voyage au Plateau | Voyages d'affaires, billets et visa",
    metaDescription: "SIRA VOYAGES accompagne entreprises et institutions du Plateau pour leurs déplacements professionnels.",
    h1: "Agence de voyage au Plateau : voyages d'affaires, billets et visa",
    intro: [
      "SIRA VOYAGES accompagne les entreprises, dirigeants, institutions et voyageurs du Plateau pour la billetterie, les réservations, les voyages d'affaires, les visas et les transferts avec chauffeur. L'agence propose également des solutions pour la Omra et le Hajj.",
    ],
    faq: [
      { q: "Proposez-vous des solutions pour les entreprises ?", a: "Oui, SIRA VOYAGES peut étudier les besoins de billetterie et de transfert des entreprises du Plateau." },
      { q: "Un transfert avec chauffeur est-il possible ?", a: "Oui, sur réservation, selon les disponibilités." },
    ],
    cta: "Organiser un voyage d'affaires",
  },
  {
    slug: "port-bouet",
    nom: "Port-Bouët",
    title: "Agence de voyage à Port-Bouët | Navette aéroport et voyages",
    metaDescription: "SIRA VOYAGES accompagne vos transferts vers l'aéroport et vos voyages depuis Port-Bouët.",
    h1: "Agence de voyage à Port-Bouët : navette aéroport et voyages",
    intro: [
      "À Port-Bouët, SIRA VOYAGES vous accompagne pour préparer vos déplacements vers ou depuis l'Aéroport International Félix Houphouët-Boigny. Réservez un transfert avec chauffeur, demandez un billet d'avion ou préparez votre Omra, Hajj ou voyage international.",
    ],
    faq: [
      { q: "Proposez-vous des navettes vers l'aéroport ?", a: "Oui, sur réservation, entre l'aéroport, les hôtels, les résidences et d'autres destinations." },
      { q: "Puis-je aussi préparer une Omra depuis Port-Bouët ?", a: "Oui, contactez SIRA VOYAGES pour connaître les offres disponibles." },
    ],
    cta: "Réserver un transfert aéroport",
  },
  {
    slug: "treichville",
    nom: "Treichville",
    title: "Agence de voyage à Treichville | Billetterie, visa et Omra",
    metaDescription: "SIRA VOYAGES accompagne les habitants et professionnels de Treichville pour leurs déplacements.",
    h1: "Agence de voyage à Treichville : billetterie, visa et Omra",
    intro: [
      "SIRA VOYAGES accompagne les habitants, commerçants, familles et professionnels de Treichville dans leurs projets de mobilité : billets d'avion, assistance visa, Omra, Hajj, transferts et séjours organisés.",
    ],
    faq: [
      { q: "Puis-je demander un devis rapide depuis Treichville ?", a: "Oui, présentez votre projet à l'agence pour recevoir les informations correspondant à votre besoin." },
      { q: "L'agence aide-t-elle pour les visas professionnels ?", a: "SIRA VOYAGES propose une assistance selon la destination et le dossier, sans garantir l'obtention du visa." },
    ],
    cta: "Demander un billet ou un devis voyage",
  },
  {
    slug: "yopougon",
    nom: "Yopougon",
    title: "Agence de voyage à Yopougon | Omra, Hajj et voyages en famille",
    metaDescription: "SIRA VOYAGES accompagne les familles et groupes de Yopougon pour leur Omra et leur Hajj.",
    h1: "Agence de voyage à Yopougon : Omra, Hajj et voyages en famille",
    intro: [
      "Vous résidez à Yopougon et souhaitez accomplir une Omra en famille, avec des proches ou au sein d'un groupe ? SIRA VOYAGES vous accompagne dans la préparation du projet, la compréhension des formules disponibles et l'organisation des démarches avant départ.",
    ],
    faq: [
      { q: "Puis-je organiser une Omra pour un groupe depuis Yopougon ?", a: "Oui, indiquez le nombre de participants pour recevoir une orientation adaptée." },
      { q: "L'agence accompagne-t-elle aussi le Hajj ?", a: "Oui, selon les conditions de la campagne concernée." },
    ],
    cta: "Préparer une Omra en groupe",
  },
  {
    slug: "anyama",
    nom: "Anyama",
    title: "Agence de voyage à Anyama | Omra, Hajj, billets et visa",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs d'Anyama pour la Omra, le Hajj et la billetterie.",
    h1: "Agence de voyage à Anyama : Omra, Hajj et billets d'avion",
    intro: [
      "Depuis Anyama, préparez votre Omra, votre Hajj ou votre prochain voyage avec SIRA VOYAGES. L'agence accompagne les voyageurs qui souhaitent anticiper leurs démarches avant un départ depuis Abidjan : période envisagée, documents, nombre de voyageurs et besoins particuliers.",
    ],
    faq: [
      { q: "Puis-je préparer mon projet Omra depuis Anyama ?", a: "Oui, vous pouvez contacter SIRA VOYAGES pour présenter votre projet et connaître les prochaines étapes." },
      { q: "Puis-je réserver un billet d'avion depuis Anyama ?", a: "Oui, l'agence propose également des solutions de billetterie internationale." },
    ],
    cta: "Préparer mon voyage depuis Anyama",
  },
  {
    slug: "bingerville",
    nom: "Bingerville",
    title: "Agence de voyage à Bingerville | Omra, Hajj et séjours en famille",
    metaDescription: "SIRA VOYAGES accompagne les familles de Bingerville pour leurs voyages religieux et touristiques.",
    h1: "Agence de voyage à Bingerville : Omra, Hajj et voyages en famille",
    intro: [
      "SIRA VOYAGES accompagne les habitants de Bingerville pour leurs voyages religieux, familiaux, professionnels et touristiques. Depuis votre ville, vous pouvez préparer une Omra, un Hajj, demander un billet d'avion, solliciter une assistance visa ou organiser un séjour sur mesure.",
    ],
    faq: [
      { q: "Puis-je préparer une Omra en famille depuis Bingerville ?", a: "Oui, indiquez le nombre de voyageurs, l'âge des participants et vos besoins particuliers." },
      { q: "SIRA VOYAGES propose-t-elle des sorties en Côte d'Ivoire ?", a: "Oui, l'agence propose des circuits et excursions selon les programmes disponibles." },
    ],
    cta: "Planifier un voyage en famille",
  },
  {
    slug: "songon",
    nom: "Songon",
    title: "Agence de voyage à Songon | Omra, Hajj et séjours organisés",
    metaDescription: "SIRA VOYAGES accompagne les groupes et familles de Songon pour leurs voyages organisés.",
    h1: "Agence de voyage à Songon : préparez vos voyages avec SIRA VOYAGES",
    intro: [
      "Vous vivez à Songon et souhaitez organiser une Omra, un Hajj, un voyage en famille ou un déplacement à l'international ? SIRA VOYAGES vous aide à structurer votre projet avant le départ, notamment pour les groupes : familles nombreuses, associations, événements ou entreprises.",
    ],
    faq: [
      { q: "Puis-je organiser une Omra pour un groupe depuis Songon ?", a: "Oui, présentez le nombre de participants, la période souhaitée et les besoins particuliers." },
      { q: "Les transferts sont-ils possibles ?", a: "SIRA VOYAGES propose des navettes, transferts et transports avec chauffeur sur réservation." },
    ],
    cta: "Organiser un voyage de groupe",
  },
  {
    slug: "grand-bassam",
    nom: "Grand-Bassam",
    title: "Agence de voyage à Grand-Bassam | Omra, Hajj et circuits touristiques",
    metaDescription: "SIRA VOYAGES accompagne les habitants de Grand-Bassam pour leurs voyages et circuits touristiques.",
    h1: "Agence de voyage à Grand-Bassam : Omra, Hajj et escapades en Côte d'Ivoire",
    intro: [
      "SIRA VOYAGES accompagne les habitants de Grand-Bassam pour leurs projets de Omra, Hajj, billetterie aérienne et séjours organisés. La page répond aussi aux besoins des familles, visiteurs et entreprises qui recherchent des transferts ou des circuits de découverte.",
      "Grand-Bassam constitue également une destination mise en avant dans les circuits de SIRA VOYAGES, selon le programme retenu.",
    ],
    faq: [
      { q: "Puis-je organiser une excursion à Grand-Bassam avec SIRA VOYAGES ?", a: "Oui, l'agence propose des circuits touristiques selon les programmes ouverts." },
      { q: "Puis-je préparer une Omra depuis Grand-Bassam ?", a: "Oui, contactez l'agence pour connaître les démarches et les offres disponibles." },
    ],
    cta: "Préparer une Omra ou une excursion",
  },
  {
    slug: "bonoua",
    nom: "Bonoua",
    title: "Agence de voyage à Bonoua | Omra, Hajj, billets et séjours",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs de Bonoua pour leur Omra, leur Hajj et leurs séjours.",
    h1: "Agence de voyage à Bonoua : Omra, Hajj et voyages en famille",
    intro: [
      "SIRA VOYAGES accompagne les voyageurs de Bonoua dans la préparation de leur Omra, de leur Hajj et de leurs déplacements en Côte d'Ivoire ou à l'international, avec une approche adaptée aux familles.",
    ],
    faq: [
      { q: "Puis-je demander des informations avant de réserver ?", a: "Oui, SIRA VOYAGES vous renseigne sur les démarches et les solutions correspondant à votre projet." },
      { q: "Puis-je demander un séjour familial ?", a: "Oui, l'agence peut étudier votre demande de séjour, de billetterie ou de transport selon vos besoins." },
    ],
    cta: "Demander les informations voyage",
  },
  {
    slug: "alepe",
    nom: "Alépé",
    title: "Agence de voyage à Alépé | Omra, Hajj et billets d'avion",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs d'Alépé depuis Abidjan pour la Omra, le Hajj et plus.",
    h1: "Agence de voyage à Alépé : préparez votre Omra et vos déplacements",
    intro: [
      "Vous résidez à Alépé et souhaitez accomplir une Omra, préparer votre Hajj ou voyager à l'international ? SIRA VOYAGES vous accompagne depuis Abidjan dans les premières étapes de votre projet, à distance.",
    ],
    faq: [
      { q: "Puis-je préparer mon dossier depuis Alépé ?", a: "Oui, vous pouvez contacter SIRA VOYAGES afin de connaître les démarches applicables à votre projet." },
      { q: "L'agence peut-elle m'aider pour un visa ?", a: "SIRA VOYAGES propose une assistance selon la destination et le dossier ; l'obtention du visa reste soumise à la décision des autorités compétentes." },
    ],
    cta: "Préparer mon projet depuis Alépé",
  },
  {
    slug: "azaguie",
    nom: "Azaguié",
    title: "Agence de voyage à Azaguié | Omra, Hajj et voyages de groupe",
    metaDescription: "SIRA VOYAGES accompagne les projets collectifs de voyage religieux et familial depuis Azaguié.",
    h1: "Agence de voyage à Azaguié : Omra, Hajj et départs organisés",
    intro: [
      "SIRA VOYAGES accompagne les habitants d'Azaguié pour les voyages religieux, familiaux et professionnels, avec une orientation particulière vers les projets collectifs : familles, amis, communautés, associations ou collègues.",
    ],
    faq: [
      { q: "Peut-on faire une demande Omra pour plusieurs personnes ?", a: "Oui, précisez le nombre de voyageurs, la période souhaitée et les besoins de chambres pour recevoir une orientation." },
      { q: "Puis-je être rappelé(e) par un conseiller ?", a: "Oui, utilisez le formulaire ou WhatsApp pour demander un rappel." },
    ],
    cta: "Demander un rappel pour mon groupe",
  },
  {
    slug: "dabou",
    nom: "Dabou",
    title: "Agence de voyage à Dabou | Omra, Hajj et séjours organisés",
    metaDescription: "SIRA VOYAGES accompagne vos projets de Omra, Hajj et séjours personnalisés depuis Dabou.",
    h1: "Agence de voyage à Dabou : Omra, Hajj et voyages sur mesure",
    intro: [
      "Depuis Dabou, SIRA VOYAGES accompagne vos projets de Omra, Hajj, billets d'avion, assistance visa et séjours personnalisés, avec une préparation structurée pour mieux anticiper documents, période et prestations nécessaires.",
    ],
    faq: [
      { q: "Puis-je réserver un voyage autre qu'une Omra depuis Dabou ?", a: "Oui, SIRA VOYAGES accompagne aussi les voyages touristiques, familiaux et professionnels." },
      { q: "Les informations de départ sont-elles toujours les mêmes ?", a: "Non, les dates, tarifs, hôtels et disponibilités doivent être confirmés par l'agence avant toute réservation." },
    ],
    cta: "Construire mon projet de voyage",
  },
  {
    slug: "jacqueville",
    nom: "Jacqueville",
    title: "Agence de voyage à Jacqueville | Omra, Hajj et transferts",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs de Jacqueville pour leur Omra, Hajj, billets et transferts.",
    h1: "Agence de voyage à Jacqueville : Omra, transferts et voyages organisés",
    intro: [
      "SIRA VOYAGES accompagne les voyageurs de Jacqueville pour leur Omra, leur Hajj, leurs billets d'avion, leurs transferts et leurs séjours organisés, avec un accent particulier sur la mobilité : transferts, navettes et escapades.",
    ],
    faq: [
      { q: "Puis-je réserver un transfert depuis Jacqueville ?", a: "SIRA VOYAGES propose des services de navette et de transport avec chauffeur sur réservation, selon votre itinéraire et vos besoins." },
      { q: "Puis-je demander une Omra pour ma famille ?", a: "Oui, l'agence peut vous renseigner sur les solutions disponibles selon la composition de votre groupe." },
    ],
    cta: "Préparer mon départ depuis Jacqueville",
  },
  {
    slug: "bouake",
    nom: "Bouaké",
    title: "Omra depuis Bouaké | Hajj et voyages avec SIRA VOYAGES",
    metaDescription: "Préparez votre Omra, Hajj, billet d'avion ou visa depuis Bouaké avec SIRA VOYAGES.",
    h1: "Omra depuis Bouaké : préparez votre pèlerinage avec SIRA VOYAGES",
    intro: [
      "Vous vivez à Bouaké et souhaitez accomplir une Omra ou préparer votre Hajj ? SIRA VOYAGES accompagne les pèlerins du centre de la Côte d'Ivoire dans la préparation de leur voyage religieux, avec un accompagnement sur les documents, la formule adaptée et les conditions de réservation.",
    ],
    faq: [
      { q: "Puis-je préparer une Omra sans vivre à Abidjan ?", a: "Oui, SIRA VOYAGES accompagne les demandes venant de Bouaké et d'autres villes de Côte d'Ivoire." },
      { q: "Puis-je réserver pour plusieurs membres de ma famille ?", a: "Oui, indiquez le nombre de voyageurs, la période souhaitée et le type de chambre envisagé." },
    ],
    cta: "Demandez les informations pour préparer votre Omra ou votre Hajj",
  },
  {
    slug: "daloa",
    nom: "Daloa",
    title: "Agence de voyage à Daloa | Omra, Hajj, billets et visa",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs de Daloa pour la Omra, le Hajj, la billetterie et les visas.",
    h1: "Agence de voyage à Daloa : préparez votre Omra et vos déplacements",
    intro: [
      "À Daloa, SIRA VOYAGES accompagne les personnes qui souhaitent organiser une Omra, un Hajj, un voyage familial, un déplacement professionnel ou une demande de billetterie aérienne, avec une préparation claire du dossier et des documents nécessaires.",
    ],
    faq: [
      { q: "Quand faut-il commencer à préparer son voyage ?", a: "Il est conseillé de contacter l'agence dès que votre projet se précise afin de connaître les étapes et les documents à anticiper." },
      { q: "SIRA VOYAGES accompagne-t-elle les voyages non religieux ?", a: "Oui, l'agence propose également la billetterie, les voyages d'affaires, le tourisme et des séjours sur mesure." },
    ],
    cta: "Demandez à être rappelé(e) par SIRA VOYAGES",
  },
  {
    slug: "korhogo",
    nom: "Korhogo",
    title: "Omra depuis Korhogo | Hajj, billets et voyages SIRA VOYAGES",
    metaDescription: "Organisez votre Omra ou votre Hajj depuis Korhogo avec SIRA VOYAGES.",
    h1: "Omra depuis Korhogo : un accompagnement pour les voyageurs du Nord",
    intro: [
      "SIRA VOYAGES accompagne les habitants de Korhogo dans la préparation de leur Omra, de leur Hajj et de leurs voyages internationaux, en les guidant sur les documents, la préparation du voyage et les options de chambres.",
    ],
    faq: [
      { q: "Puis-je recevoir des informations depuis Korhogo ?", a: "Oui, SIRA VOYAGES peut vous renseigner à distance avant de définir les prochaines étapes de votre dossier." },
      { q: "Puis-je demander un billet d'avion pour une autre destination ?", a: "Oui, SIRA VOYAGES propose aussi des services de billetterie internationale." },
    ],
    cta: "Contactez SIRA VOYAGES pour connaître les étapes à prévoir",
  },
  {
    slug: "san-pedro",
    nom: "San-Pédro",
    title: "Agence de voyage à San-Pédro | Omra, Hajj et tourisme",
    metaDescription: "SIRA VOYAGES accompagne San-Pédro pour la Omra, le Hajj et les circuits touristiques du Sud-Ouest.",
    h1: "Agence de voyage à San-Pédro : Omra, Hajj et découverte du Sud-Ouest",
    intro: [
      "À San-Pédro, SIRA VOYAGES accompagne les voyageurs qui souhaitent organiser une Omra, préparer un Hajj, réserver un billet d'avion ou découvrir les richesses du Sud-Ouest ivoirien à travers ses circuits touristiques.",
    ],
    faq: [
      { q: "Puis-je préparer ma Omra depuis San-Pédro ?", a: "Oui, contactez SIRA VOYAGES pour connaître les démarches et les offres disponibles au moment de votre demande." },
      { q: "Proposez-vous des circuits dans la région ?", a: "SIRA VOYAGES propose des circuits touristiques en Côte d'Ivoire, notamment dans le Sud-Ouest." },
    ],
    cta: "Préparez votre Omra ou votre prochain circuit",
  },
  {
    slug: "yamoussoukro",
    nom: "Yamoussoukro",
    title: "Agence de voyage à Yamoussoukro | Omra, Hajj et circuits",
    metaDescription: "Préparez votre Omra, Hajj, billet d'avion ou circuit à Yamoussoukro avec SIRA VOYAGES.",
    h1: "Agence de voyage à Yamoussoukro : pèlerinages et voyages organisés",
    intro: [
      "SIRA VOYAGES accompagne les habitants de Yamoussoukro pour leurs projets de Omra, Hajj, billetterie, assistance visa et séjours organisés, avec aussi des propositions d'excursions autour du patrimoine de la capitale politique.",
    ],
    faq: [
      { q: "Peut-on préparer une Omra depuis Yamoussoukro ?", a: "Oui, SIRA VOYAGES accompagne les voyageurs de Yamoussoukro dans la préparation de leur projet." },
      { q: "Proposez-vous des circuits à Yamoussoukro ?", a: "L'agence peut organiser ou proposer des circuits incluant les sites emblématiques de la ville, selon le programme choisi." },
    ],
    cta: "Organisez votre Omra ou votre séjour depuis Yamoussoukro",
  },
  {
    slug: "man",
    nom: "Man",
    title: "Agence de voyage à Man | Omra, Hajj et circuits nature",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs de Man pour la Omra, le Hajj et les circuits touristiques.",
    h1: "Agence de voyage à Man : Omra, Hajj et voyages de découverte",
    intro: [
      "Depuis Man, SIRA VOYAGES accompagne les voyageurs qui souhaitent accomplir une Omra, préparer le Hajj, réserver un billet d'avion ou organiser un séjour touristique tourné vers les montagnes et la découverte de l'Ouest ivoirien.",
    ],
    faq: [
      { q: "Puis-je organiser un pèlerinage depuis Man ?", a: "Oui, SIRA VOYAGES reçoit les demandes des voyageurs de Man et les accompagne dans leur préparation." },
      { q: "Puis-je voyager en groupe ?", a: "Oui, les demandes de familles, associations et groupes peuvent être étudiées selon le nombre de participants et la période." },
    ],
    cta: "Préparez votre voyage religieux ou touristique",
  },
  {
    slug: "gagnoa",
    nom: "Gagnoa",
    title: "Omra depuis Gagnoa | Hajj et voyages avec SIRA VOYAGES",
    metaDescription: "Préparez votre Omra, Hajj ou voyage familial depuis Gagnoa avec SIRA VOYAGES.",
    h1: "Omra depuis Gagnoa : un accompagnement clair pour votre projet",
    intro: [
      "SIRA VOYAGES accompagne les habitants de Gagnoa dans leurs projets de Omra, Hajj, voyages familiaux et déplacements internationaux, avec écoute, clarté et une préparation adaptée à chaque voyageur.",
    ],
    faq: [
      { q: "Puis-je demander des informations avant de réserver ?", a: "Oui, vous pouvez contacter SIRA VOYAGES afin de présenter votre projet et connaître les étapes à prévoir." },
      { q: "Est-ce que l'agence propose des conseils avant le départ ?", a: "Oui, SIRA VOYAGES accompagne les voyageurs dans la préparation de leur voyage." },
    ],
    cta: "Préparez votre Omra depuis Gagnoa",
  },
  {
    slug: "duekoue",
    nom: "Duékoué",
    title: "Agence de voyage à Duékoué | Omra, Hajj, billets et visa",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs de Duékoué pour la Omra, le Hajj et les séjours organisés.",
    h1: "Agence de voyage à Duékoué : préparez votre Omra et vos voyages",
    intro: [
      "Vous habitez Duékoué et préparez une Omra, un Hajj ou un voyage international ? SIRA VOYAGES vous accompagne dans les premières étapes de votre projet, même à distance d'Abidjan.",
    ],
    faq: [
      { q: "Puis-je commencer mon dossier depuis Duékoué ?", a: "Oui, vous pouvez prendre contact avec SIRA VOYAGES pour connaître les démarches adaptées à votre projet." },
      { q: "Puis-je demander un voyage sur mesure ?", a: "Oui, SIRA VOYAGES peut étudier les demandes de séjours familiaux, touristiques ou professionnels." },
    ],
    cta: "Demandez les informations utiles avant de préparer votre départ",
  },
  {
    slug: "divo",
    nom: "Divo",
    title: "Omra depuis Divo | Hajj, billets et voyages SIRA VOYAGES",
    metaDescription: "SIRA VOYAGES accompagne les voyageurs de Divo pour la Omra, le Hajj et les séjours en Côte d'Ivoire.",
    h1: "Omra depuis Divo : préparez votre projet avec SIRA VOYAGES",
    intro: [
      "SIRA VOYAGES accompagne les voyageurs de Divo qui souhaitent accomplir une Omra, se préparer pour le Hajj, réserver un billet d'avion ou organiser un séjour familial, avec une préparation attentive du départ.",
    ],
    faq: [
      { q: "Puis-je accomplir une Omra en partant de Divo ?", a: "Oui, SIRA VOYAGES accompagne les demandes venant de Divo, avec départ et organisation précisés selon les offres actives." },
      { q: "Comment savoir quelles formules sont ouvertes ?", a: "Contactez l'agence pour demander les disponibilités réellement confirmées au moment de votre projet." },
    ],
    cta: "Préparez votre Omra, votre Hajj ou votre prochain voyage",
  },
];
