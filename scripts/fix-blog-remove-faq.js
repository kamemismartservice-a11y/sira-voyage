const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.join(__dirname, "blog-data.json");
  const items = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  for (const item of items) {
    await prisma.blogPost.update({
      where: { slug: item.slug },
      data: {
        content: item.content,
      },
    });
    console.log("Nettoyé:", item.slug);
  }

  console.log(`\n${items.length} articles nettoyés (FAQ retirée du contenu).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });