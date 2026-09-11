export const defaultCommuneImage = "/images/services/tourisme-excursionsabidjan.jpg";

export const communeImages: Record<string, string> = {
  abidjan: "/images/villes/abidjan.jpg",
  abobo: "/images/villes/abobo.jpg",
  adjame: "/images/villes/adjame.jpg",
  alepe: "/images/villes/alepe.jpg",
  anyama: "/images/villes/anyama.jpg",
  attecoube: "/images/villes/attecoube.jpg",
  azaguie: "/images/villes/azaguie.jpg",
  bingerville: "/images/villes/bingerville.jpg",
  bonoua: "/images/villes/bonoua.jpg",
  bouake: "/images/villes/bouake.jpg",
  cocody: "/images/villes/cocody.jpg",
  dabou: "/images/villes/dabou.jpg",
  daloa: "/images/villes/daloa.jpg",
  divo: "/images/villes/divo.jpg",
  duekoue: "/images/villes/duekoue.jpg",
  gagnoa: "/images/villes/gagnoa.jpg",
  grand-abidjan: "/images/villes/grand-abidjan.jpg",
  grand-bassam: "/images/villes/grand-bassam.jpg",
  jacqueville: "/images/villes/jacqueville.jpg",
  korhogo: "/images/villes/korhogo.jpg",
  koumassi: "/images/villes/koumassi.jpg",
  man: "/images/villes/man.jpg",
  marcory: "/images/villes/marcory.jpg",
  plateau: "/images/villes/plateau.jpg",
  port-bouet: "/images/villes/port-bouet.jpg",
  san-pedro: "/images/villes/san-pedro.jpg",
  songon: "/images/villes/songon.jpg",
  treichville: "/images/villes/treichville.jpg",
  yamoussoukro: "/images/villes/yamoussoukro.jpg",
  yopougon: "/images/villes/yopougon.jpg",
};

export function getCommuneImage(slug: string): string {
  return communeImages[slug] || defaultCommuneImage;
}
