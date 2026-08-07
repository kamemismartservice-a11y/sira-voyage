import { prisma } from "@/lib/prisma";
import { updateFicheStatut } from "./actions";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const MUTED = "#6B6B6B";
const BORDER = "#E4DFCF";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const STATUTS = [
  { value: "a_ecrire", label: "À écrire" },
  { value: "en_relecture", label: "En relecture" },
  { value: "valide", label: "Validé" },
  { value: "programme", label: "Programmé" },
  { value: "publie", label: "Publié" },
];

const STATUT_STYLE: Record<string, { bg: string; text: string }> = {
  a_ecrire: { bg: "#E9E7E1", text: "#5A5A5A" },
  en_relecture: { bg: "#F5E9C9", text: "#8A6D1D" },
  valide: { bg: "#DCE7F5", text: "#1F4E85" },
  programme: { bg: "#F0D9E8", text: "#7A1D5C" },
  publie: { bg: EMERALD, text: WHITE },
};

const TYPE_STYLE: Record<string, { bg: string; text: string }> = {
  commercial: { bg: EMERALD, text: WHITE },
  autorite_seo: { bg: GOLD, text: WHITE },
};

const TYPE_LABEL: Record<string, string> = {
  commercial: "Commercial",
  autorite_seo: "Autorité SEO",
};

const card: React.CSSProperties = {
  background: WHITE,
  borderRadius: 14,
  padding: "1.75rem",
  boxShadow: "0 1px 3px rgba(11,61,46,0.08)",
  border: `1px solid ${BORDER}`,
  marginBottom: "2rem",
};

const fieldWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "0.3rem" };
const fieldLabel: React.CSSProperties = { fontSize: "0.8rem", color: MUTED, fontFamily: SANS };
const inputStyle: React.CSSProperties = {
  padding: "0.6rem 0.75rem",
  borderRadius: 8,
  border: "1px solid #D8D3C4",
  fontFamily: SANS,
  fontSize: "0.9rem",
  background: OFFWHITE,
};

function formatLabel(value: string | null) {
  if (!value) return "—";
  return value.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

export default async function BibliothequePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() || "";
  const bibliotheque = params.bibliotheque || "";
  const statut = params.statut || "";
  const type = params.type || "";

  const where: any = {};
  if (bibliotheque) where.bibliotheque = bibliotheque;
  if (statut) where.statut = statut;
  if (type) where.type = type;
  if (q) {
    where.OR = [
      { titre: { contains: q, mode: "insensitive" } },
      { motCle: { contains: q, mode: "insensitive" } },
      { idFiche: { contains: q, mode: "insensitive" } },
    ];
  }

  const [fiches, bibliothequesRaw, total, statutCounts] = await Promise.all([
    prisma.ficheMarketing.findMany({
      where,
      orderBy: { idFiche: "asc" },
      take: 100,
    }),
    prisma.ficheMarketing.findMany({
      select: { bibliotheque: true },
      distinct: ["bibliotheque"],
      orderBy: { bibliotheque: "asc" },
    }),
    prisma.ficheMarketing.count({ where }),
    prisma.ficheMarketing.groupBy({
      by: ["statut"],
      _count: true,
    }),
  ]);

  const bibliotheques = bibliothequesRaw.map((b) => b.bibliotheque).filter(Boolean);
  const countByStatut: Record<string, number> = {};
  for (const s of statutCounts) {
    countByStatut[s.statut] = s._count;
  }
  const totalFiches = statutCounts.reduce((acc, s) => acc + s._count, 0);

  return (
    <div style={{ background: OFFWHITE, minHeight: "100vh", fontFamily: SANS }}>
      {/* Bandeau */}
      <div style={{ background: EMERALD, padding: "2rem 2.5rem", marginBottom: "2rem" }}>
        <h1 style={{ color: WHITE, fontFamily: SERIF, fontSize: "2rem", margin: 0 }}>
          SIRA VOYAGES
        </h1>
        <p style={{ color: GOLD, fontFamily: SERIF, fontStyle: "italic", margin: "0.25rem 0 0.5rem" }}>
          Faire l'expérience du monde
        </p>
        <p style={{ color: "#DCE5DF", margin: 0, fontSize: "0.95rem" }}>
          Bibliothèque Marketing — {totalFiches} fiches
        </p>
      </div>

      <div style={{ padding: "0 2.5rem 3rem", maxWidth: 1300, margin: "0 auto" }}>
        {/* Vue d'ensemble par statut */}
        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Avancement</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {STATUTS.map((s) => {
              const style = STATUT_STYLE[s.value];
              return (
                <div
                  key={s.value}
                  style={{
                    background: OFFWHITE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: "0.75rem 1.25rem",
                    minWidth: 130,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.6rem", fontWeight: 700, color: EMERALD }}>
                    {countByStatut[s.value] || 0}
                  </div>
                  <span
                    style={{
                      background: style.bg,
                      color: style.text,
                      padding: "0.2rem 0.6rem",
                      borderRadius: 20,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Filtres */}
        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Filtrer la bibliothèque</h2>
          <form
            method="GET"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}
          >
            <div style={fieldWrap}>
              <label style={fieldLabel}>Recherche (titre, mot-clé, ID)</label>
              <input name="q" defaultValue={q} style={inputStyle} placeholder="ex: prix omra, ASS-01..." />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Bibliothèque</label>
              <select name="bibliotheque" defaultValue={bibliotheque} style={inputStyle}>
                <option value="">Toutes</option>
                {bibliotheques.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Statut</label>
              <select name="statut" defaultValue={statut} style={inputStyle}>
                <option value="">Tous</option>
                {STATUTS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Type</label>
              <select name="type" defaultValue={type} style={inputStyle}>
                <option value="">Tous</option>
                <option value="commercial">Commercial</option>
                <option value="autorite_seo">Autorité SEO</option>
              </select>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <button
                type="submit"
                style={{
                  background: GOLD,
                  color: WHITE,
                  border: "none",
                  borderRadius: 8,
                  padding: "0.65rem 1.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Filtrer
              </button>
            </div>
          </form>
        </section>

        {/* Liste des fiches */}
        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>
            Résultats ({total}{total > 100 ? " — 100 premières affichées, affinez la recherche" : ""})
          </h2>
          <div style={{ overflowX: "auto", borderRadius: 10, border: `1px solid ${BORDER}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
              <thead>
                <tr style={{ background: EMERALD }}>
                  {["ID", "Titre", "Bibliothèque", "Type", "Priorité", "Statut", "Changer"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        color: WHITE,
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fiches.map((fiche, idx) => {
                  const sStyle = STATUT_STYLE[fiche.statut] ?? { bg: "#E9E7E1", text: "#5A5A5A" };
                  const tStyle = TYPE_STYLE[fiche.type] ?? { bg: "#999", text: WHITE };
                  return (
                    <tr key={fiche.id} style={{ background: idx % 2 === 0 ? OFFWHITE : WHITE }}>
                      <td style={{ padding: "0.6rem 1rem", fontWeight: 700, color: EMERALD, whiteSpace: "nowrap" }}>
                        {fiche.idFiche}
                      </td>
                      <td style={{ padding: "0.6rem 1rem", maxWidth: 320 }}>{fiche.titre}</td>
                      <td style={{ padding: "0.6rem 1rem", whiteSpace: "nowrap" }}>{fiche.bibliotheque}</td>
                      <td style={{ padding: "0.6rem 1rem" }}>
                        <span
                          style={{
                            background: tStyle.bg,
                            color: tStyle.text,
                            padding: "0.2rem 0.55rem",
                            borderRadius: 20,
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {TYPE_LABEL[fiche.type] ?? fiche.type}
                        </span>
                      </td>
                      <td style={{ padding: "0.6rem 1rem", color: GOLD, whiteSpace: "nowrap" }}>
                        {fiche.priorite || "—"}
                      </td>
                      <td style={{ padding: "0.6rem 1rem" }}>
                        <span
                          style={{
                            background: sStyle.bg,
                            color: sStyle.text,
                            padding: "0.2rem 0.6rem",
                            borderRadius: 20,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {STATUTS.find((s) => s.value === fiche.statut)?.label ?? fiche.statut}
                        </span>
                      </td>
                      <td style={{ padding: "0.6rem 1rem" }}>
                        <form action={updateFicheStatut} style={{ display: "flex", gap: "0.35rem" }}>
                          <input type="hidden" name="id" value={fiche.id} />
                          <select
                            name="statut"
                            defaultValue={fiche.statut}
                            style={{ ...inputStyle, padding: "0.35rem 0.5rem", fontSize: "0.8rem" }}
                          >
                            {STATUTS.map((s) => (
                              <option key={s.value} value={s.value}>{s.label}</option>
                            ))}
                          </select>
                          <button
                            type="submit"
                            style={{
                              background: EMERALD,
                              color: WHITE,
                              border: "none",
                              borderRadius: 6,
                              padding: "0.35rem 0.7rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                            }}
                          >
                            OK
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
                {fiches.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ padding: "1.5rem", color: MUTED, textAlign: "center" }}>
                      Aucune fiche ne correspond à ces filtres.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}