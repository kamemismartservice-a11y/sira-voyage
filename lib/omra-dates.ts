const MONTHS: Record<string, number> = {
  janvier: 0,
  fevrier: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  aout: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  decembre: 11,
};

export function parseDepartureSlug(slug: string): { year: number; monthIndex: number } | null {
  const match = slug.match(/^([a-z]+)-([0-9]{4})$/);
  if (!match) return null;

  const monthName = match[1];
  const year = parseInt(match[2], 10);
  const monthIndex = MONTHS[monthName];
  if (monthIndex === undefined) return null;

  return { year, monthIndex };
}

export function isPastDeparture(slug: string): boolean {
  const parsed = parseDepartureSlug(slug);
  if (!parsed) return false;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  if (parsed.year < currentYear) return true;
  if (parsed.year === currentYear && parsed.monthIndex < currentMonth) return true;
  return false;
}

export function compareDepartures(slugA: string, slugB: string): number {
  const a = parseDepartureSlug(slugA);
  const b = parseDepartureSlug(slugB);
  if (!a || !b) return 0;
  if (a.year !== b.year) return a.year - b.year;
  return a.monthIndex - b.monthIndex;
}
