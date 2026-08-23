const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.serviceCategory.findMany({
    include: { items: true },
    orderBy: { id: "asc" },
  });

  for (const cat of categories) {
    console.log(`\n=== ${cat.label} (${cat.slug}) ===`);
    if (cat.items.length === 0) {
      console.log("  (aucun produit)");
    }
    for (const item of cat.items) {
      console.log(`  - slug: ${item.slug}`);
      console.log(`    titre: ${item.title}`);
      console.log(`    sous-titre: ${item.subtitle || "(aucun)"}`);
      console.log(`    description actuelle: ${item.description ? "déjà remplie" : "VIDE"}`);
      console.log(`    tags: ${item.tags || "(aucun)"}`);
      console.log("");
    }
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
