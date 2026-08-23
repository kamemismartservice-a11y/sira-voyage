export const defaultCommuneImage = "/images/services/tourisme-excursionsabidjan.jpg";

export const communeImages: Record<string, string> = {
  // Une fois les vraies photos reçues, ajoutez une ligne par ville ici, par exemple :
  // cocody: "/images/villes/cocody.jpg",
};

export function getCommuneImage(slug: string): string {
  return communeImages[slug] || defaultCommuneImage;
}