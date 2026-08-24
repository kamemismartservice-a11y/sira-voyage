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

const MONTHS_LABELS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

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

// Convertit un slug ("juillet-2026") en valeur pour <input type="month"> ("2026-07")
export function slugToMonthValue(slug: string): string | null {
  const parsed = parseDepartureSlug(slug);
  if (!parsed) return null;
  const month = String(parsed.monthIndex + 1).padStart(2, "0");
  return `${parsed.year}-${month}`;
}

// Convertit une valeur <input type="month"> ("2026-07") en libellé lisible ("Juillet 2026")
export function formatMonthValue(value: string): string {
  const match = value.match(/^(\d{4})-(\d{2})$/);
  if (!match) return value;
  const year = match[1];
  const monthIndex = parseInt(match[2], 10) - 1;
  const label = MONTHS_LABELS[monthIndex];
  if (!label) return value;
  return `${label} ${year}`;
}
