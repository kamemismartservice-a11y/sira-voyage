const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const imagesDir = path.join(__dirname, "..", "public", "images", "blog");

  if (!fs.existsSync(imagesDir)) {
    console.error(`Dossier introuvable : ${imagesDir}`);
    console.error("Créez public/images/blog/ et placez-y les fichiers reçus du graphiste avant de relancer ce script.");
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter((f) => f.endsWith(".jpg"));

  if (files.length === 0) {
    console.error("Aucun fichier .jpg trouvé dans public/images/blog/");
    process.exit(1);
  }

  let updated = 0;
  let notFound = [];

  for (const file of files) {
    const slug = file.replace(".jpg", "");
    const imagePath = `/images/blog/${file}`;

    const post = await prisma.blogPost.findUnique({ where: { slug } });

    if (!post) {
      notFound.push(slug);
      continue;
    }

    await prisma.blogPost.update({
      where: { slug },
      data: { coverImage: imagePath },
    });

    console.log("OK:", slug);
    updated++;
  }

  console.log(`\n${updated} articles mis à jour avec leur vraie image.`);

  if (notFound.length > 0) {
    console.log(`\n${notFound.length} fichier(s) sans article correspondant en base (nom de fichier à vérifier) :`);
    notFound.forEach((s) => console.log("  -", s));
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