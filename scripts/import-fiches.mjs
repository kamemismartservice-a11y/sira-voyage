// Script d'import des fiches marketing dans la base de données SIRA VOYAGES.
//
// UTILISATION :
//   1. Placez ce fichier dans le dossier "scripts" de votre projet
//      (C:\Users\hp\sira-voyage\scripts\import-fiches.mjs)
//   2. Placez le fichier "fiches.json" dans le même dossier "scripts"
//   3. Dans le terminal, à la racine du projet, lancez :
//        node scripts/import-fiches.mjs
//   4. Le script affiche sa progression et un résumé à la fin.
//
// Il ne modifie rien d'autre dans votre base : il ne touche ni le CRM
// (Entreprise, Contact...) ni le Content Hub (ContentItem) existants.
// Vous pouvez le relancer sans risque de doublons : chaque fiche est
// identifiée par son "idFiche" unique (ex: "001", "ASS-01"), donc une
// fiche déjà présente sera mise à jour plutôt que dupliquée.

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  const jsonPath = path.join(__dirname, "fiches.json");
  const raw = fs.readFileSync(jsonPath, "utf-8");
  const fiches = JSON.parse(raw);

  console.log(`Import de ${fiches.length} fiches en cours...`);

  let created = 0;
  let updated = 0;
  let errors = 0;

  for (const fiche of fiches) {
    try {
      const existing = await prisma.ficheMarketing.findUnique({
        where: { idFiche: fiche.idFiche },
      });

      await prisma.ficheMarketing.upsert({
        where: { idFiche: fiche.idFiche },
        update: {
          bibliotheque: fiche.bibliotheque,
          categorie: fiche.categorie,
          sousCategorie: fiche.sousCategorie,
          titre: fiche.titre,
          objectif: fiche.objectif,
          publicCible: fiche.publicCible,
          motCle: fiche.motCle,
          motsClesSecondaires: fiche.motsClesSecondaires,
          requeteBrute: fiche.requeteBrute,
          intention: fiche.intention,
          angle: fiche.angle,
          formats: fiche.formats,
          cta: fiche.cta,
          priorite: fiche.priorite,
          type: fiche.type,
          statut: fiche.statut,
          responsable: fiche.responsable,
          lienDossier: fiche.lienDossier,
        },
        create: {
          idFiche: fiche.idFiche,
          bibliotheque: fiche.bibliotheque,
          categorie: fiche.categorie,
          sousCategorie: fiche.sousCategorie,
          titre: fiche.titre,
          objectif: fiche.objectif,
          publicCible: fiche.publicCible,
          motCle: fiche.motCle,
          motsClesSecondaires: fiche.motsClesSecondaires,
          requeteBrute: fiche.requeteBrute,
          intention: fiche.intention,
          angle: fiche.angle,
          formats: fiche.formats,
          cta: fiche.cta,
          priorite: fiche.priorite,
          type: fiche.type,
          statut: fiche.statut,
          responsable: fiche.responsable,
          lienDossier: fiche.lienDossier,
        },
      });

      if (existing) {
        updated++;
      } else {
        created++;
      }
    } catch (err) {
      errors++;
      console.error(`Erreur sur la fiche ${fiche.idFiche} :`, err.message);
    }
  }

  console.log("");
  console.log("=== Résumé de l'import ===");
  console.log(`Fiches créées   : ${created}`);
  console.log(`Fiches mises à jour : ${updated}`);
  console.log(`Erreurs         : ${errors}`);
  console.log(`Total traité    : ${created + updated}/${fiches.length}`);
}

main()
  .catch((e) => {
    console.error("Erreur générale :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });