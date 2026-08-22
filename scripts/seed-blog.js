const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.join(__dirname, "blog-data.json");
  const items = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  for (const item of items) {
    let content = item.content;

    if (item.faq && item.faq.length > 0) {
      content += "\n\n## Questions fréquentes\n\n";
      for (const f of item.faq) {
        content += `### ${f.name}\n\n${f.acceptedAnswer.text}\n\n`;
      }
    }

    const excerpt = item.metaDescription || null;

    await prisma.blogPost.upsert({
      where: { slug: item.slug },
      update: {
        title: item.title,
        excerpt: excerpt,
        content: content,
      },
      create: {
        slug: item.slug,
        title: item.title,
        excerpt: excerpt,
        content: content,
        published: true,
      },
    });

    console.log("OK:", item.slug);
  }

  console.log(`\n${items.length} articles importés avec succès.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });