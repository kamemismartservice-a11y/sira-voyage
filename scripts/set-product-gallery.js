const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Correspondance nom de fichier -> {catégorie, slug du produit}
const PRODUCT_SLUGS = {
  "hajj-2027": { categorie: "hajj", slug: "hajj-2027" },
  "vols-nationaux-internationaux": { categorie: "billetterie", slug: "vols-nationaux-internationaux" },
  "assistance-visa": { categorie: "visa", slug: "assistance-visa" },
  "navette-vip": { categorie: "navettes", slug: "navette-vip" },
  "excursions-abidjan": { categorie: "tourisme", slug: "excursions-abidjan" },
  "decouverte": { categorie: "tourisme", slug: "decouverte" },
  "sud-ouest": { categorie: "tourisme", slug: "sud-ouest" },
};

async function main() {
  const imagesDir = path.join(__dirname, "..", "public", "images", "services");

  if (!fs.existsSync(imagesDir)) {
    console.error(`Dossier introuvable : ${imagesDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter((f) => f.endsWith(".jpg"));

  // Regrouper les fichiers par produit (ex: hajj-2027-2.jpg, hajj-2027-3.jpg -> hajj-2027)
  const grouped = {};

  for (const file of files) {
    const match = file.match(/^(.+)-(\d+)\.jpg$/);
    if (!match) continue;

    const baseName = match[1];
    if (!PRODUCT_SLUGS[baseName]) continue;

    if (!grouped[baseName]) grouped[baseName] = [];
    grouped[baseName].push(file);
  }

  let updated = 0;

  for (const [baseName, fileList] of Object.entries(grouped)) {
    const { categorie, slug } = PRODUCT_SLUGS[baseName];

    // Trier par numéro (2, 3, 4, 5)
    fileList.sort((a, b) => {
      const numA = parseInt(a.match(/-(\d+)\.jpg$/)[1], 10);
      const numB = parseInt(b.match(/-(\d+)\.jpg$/)[1], 10);
      return numA - numB;
    });

    const galleryPaths = fileList.map((f) => `/images/services/${f}`).join("\n");

    const category = await prisma.serviceCategory.findUnique({ where: { slug: categorie } });
    if (!category) {
      console.log(`Catégorie introuvable : ${categorie}`);
      continue;
    }

    await prisma.serviceItem.update({
      where: { categoryId_slug: { categoryId: category.id, slug } },
      data: { gallery: galleryPaths },
    });

    console.log(`OK: ${categorie}/${slug} — ${fileList.length} photo(s) ajoutée(s)`);
    updated++;
  }

  console.log(`\n${updated} produit(s) mis à jour avec leur galerie.`);

  if (updated === 0) {
    console.log("Aucun fichier reconnu. Vérifiez que les noms de fichiers respectent exactement le format du brief (ex: hajj-2027-2.jpg).");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
