-- CreateEnum
CREATE TYPE "CategorieEntreprise" AS ENUM ('entreprise_privee', 'administration_publique', 'banque', 'assurance', 'hotel', 'compagnie_aerienne', 'ong', 'ambassade', 'ecole', 'universite', 'clinique', 'cabinet_medical', 'cabinet_avocat', 'notaire', 'agence_immobiliere', 'entreprise_miniere', 'societe_petroliere', 'btp', 'securite_privee', 'evenementiel', 'mosquee', 'association', 'comite_entreprise', 'particulier_vip');

-- CreateEnum
CREATE TYPE "StatutPipeline" AS ENUM ('prospect_identifie', 'premier_contact', 'visite_effectuee', 'besoin_identifie', 'devis_envoye', 'relance_1', 'relance_2', 'negociation', 'contrat_signe', 'client_actif', 'client_fidele', 'perdu');

-- CreateEnum
CREATE TYPE "TypeBesoin" AS ENUM ('navette_entreprise', 'navette_aeroport', 'billetterie', 'voyages_affaires', 'tourisme', 'sejours', 'visa', 'omra', 'hajj', 'transport_evenementiel', 'location_vehicule', 'autres');

-- CreateTable
CREATE TABLE "Entreprise" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "nomCommercial" TEXT,
    "rccm" TEXT,
    "categorie" "CategorieEntreprise" NOT NULL,
    "secteurActivite" TEXT,
    "effectif" INTEGER,
    "dateCreation" TIMESTAMP(3),
    "siteInternet" TEXT,
    "facebook" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "pays" TEXT NOT NULL DEFAULT 'Côte d''Ivoire',
    "ville" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "quartier" TEXT,
    "rue" TEXT,
    "immeuble" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "secteurCommercial" TEXT,
    "zoneCommerciale" TEXT,
    "telephoneFixe" TEXT,
    "whatsapp" TEXT,
    "emailPrincipal" TEXT,
    "emailSecondaire" TEXT,
    "horaires" TEXT,
    "observations" TEXT,
    "statutPipeline" "StatutPipeline" NOT NULL DEFAULT 'prospect_identifie',
    "probabiliteVente" INTEGER,
    "montantEstime" DECIMAL(12,0),
    "commercialId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "entrepriseId" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "fonction" TEXT,
    "telephone" TEXT,
    "whatsapp" TEXT,
    "email" TEXT,
    "dateAnniversaire" TIMESTAMP(3),
    "centreInteret" TEXT,
    "estDecideur" BOOLEAN NOT NULL DEFAULT false,
    "estInfluenceur" BOOLEAN NOT NULL DEFAULT false,
    "estUtilisateur" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BesoinIdentifie" (
    "id" TEXT NOT NULL,
    "entrepriseId" TEXT NOT NULL,
    "type" "TypeBesoin" NOT NULL,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BesoinIdentifie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entreprise" ADD CONSTRAINT "Entreprise_commercialId_fkey" FOREIGN KEY ("commercialId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BesoinIdentifie" ADD CONSTRAINT "BesoinIdentifie_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
