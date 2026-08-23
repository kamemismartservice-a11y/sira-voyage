const fs = require("fs");
const path = require("path");

async function main() {
  const imagesDir = path.join(__dirname, "..", "public", "images", "villes");

  if (!fs.existsSync(imagesDir)) {
    console.error(`Dossier introuvable : ${imagesDir}`);
    console.error("Créez public/images/villes/ et placez-y les fichiers reçus du graphiste avant de relancer ce script.");
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir).filter((f) => f.endsWith(".jpg"));

  if (files.length === 0) {
    console.error("Aucun fichier .jpg trouvé dans public/images/villes/");
    process.exit(1);
  }

  const entries = files
    .map((file) => {
      const slug = file.replace(".jpg", "");
      return `  ${slug}: "/images/villes/${file}",`;
    })
    .join("\n");

  const fileContent = `export const defaultCommuneImage = "/images/services/tourisme-excursionsabidjan.jpg";

export const communeImages: Record<string, string> = {
${entries}
};

export function getCommuneImage(slug: string): string {
  return communeImages[slug] || defaultCommuneImage;
}
`;

  const outputPath = path.join(__dirname, "..", "lib", "commune-images.ts");
  fs.writeFileSync(outputPath, fileContent, "utf-8");

  console.log(`${files.length} images trouvées et associées dans lib/commune-images.ts :`);
  files.forEach((f) => console.log("  -", f));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});