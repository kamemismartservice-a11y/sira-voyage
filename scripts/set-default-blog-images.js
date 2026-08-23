const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const defaultImage = "/images/services/tourisme-excursionsabidjan.jpg";

  const result = await prisma.blogPost.updateMany({
    where: { coverImage: null },
    data: { coverImage: defaultImage },
  });

  console.log(`${result.count} articles mis à jour avec l'image par défaut.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });