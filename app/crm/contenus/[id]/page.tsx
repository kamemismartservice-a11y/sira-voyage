import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateContentItem } from "../actions";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const MUTED = "#6B6B6B";
const BORDER = "#E4DFCF";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const STATUTS = [
  { value: "a_faire", label: "À faire" },
  { value: "en_cours", label: "En cours" },
  { value: "a_valider", label: "À valider" },
  { value: "publie", label: "Publié" },
];

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
const infoRow: React.CSSProperties = { display: "flex", gap: "0.5rem", fontSize: "0.9rem", marginBottom: "0.4rem" };
const infoLabel: React.CSSProperties = { color: MUTED, minWidth: 140 };

export default async function ContenuDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const item = await prisma.contentItem.findUnique({
    where: { id },
    include: { assigne: true, ficheMarketing: true },
  });

  if (!item) notFound();

  return (
    <div style={{ background: OFFWHITE, minHeight: "100vh", fontFamily: SANS }}>
      <div style={{ background: EMERALD, padding: "2rem 2.5rem", marginBottom: "2rem" }}>
        <h1 style={{ color: WHITE, fontFamily: SERIF, fontSize: "2rem", margin: 0 }}>SIRA VOYAGES</h1>
        <p style={{ color: GOLD, fontFamily: SERIF, fontStyle: "italic", margin: "0.25rem 0 0.5rem" }}>
          Faire l'expérience du monde
        </p>
        <p style={{ color: "#DCE5DF", margin: 0, fontSize: "0.95rem" }}>Détail du contenu</p>
      </div>

      <div style={{ padding: "0 2.5rem 3rem", maxWidth: 800, margin: "0 auto" }}>
        <Link href="/crm/contenus" style={{ color: EMERALD, fontSize: "0.85rem", textDecoration: "underline" }}>
          ← Retour à la liste des contenus
        </Link>

        <section style={{ ...card, marginTop: "1rem" }}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>{item.titre}</h2>

          <div style={infoRow}><span style={infoLabel}>Thème</span><span>{item.theme || "—"}</span></div>
          <div style={infoRow}><span style={infoLabel}>Rubrique</span><span>{item.rubrique}</span></div>
          <div style={infoRow}><span style={infoLabel}>Couche</span><span>{item.couche}</span></div>
          <div style={infoRow}><span style={infoLabel}>Format</span><span>{item.format}</span></div>
          <div style={infoRow}><span style={infoLabel}>Assigné à</span><span>{item.assigne?.name || item.assigne?.email || "—"}</span></div>
          <div style={infoRow}>
            <span style={infoLabel}>Fiche Bibliothèque</span>
            <span>{item.ficheMarketing ? `${item.ficheMarketing.idFiche} — ${item.ficheMarketing.titre}` : "—"}</span>
          </div>
        </section>

        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Modifier / suggérer</h2>
          <form action={updateContentItem} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="id" value={item.id} />

            <div style={fieldWrap}>
              <label style={fieldLabel}>Statut</label>
              <select name="statut" defaultValue={item.statut} style={inputStyle}>
                {STATUTS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div style={fieldWrap}>
              <label style={fieldLabel}>Hashtags</label>
              <input name="hashtags" defaultValue={item.hashtags || ""} style={inputStyle} />
            </div>

            <div style={fieldWrap}>
              <label style={fieldLabel}>Lien du visuel</label>
              <input name="lienVisuel" defaultValue={item.lienVisuel || ""} style={inputStyle} />
            </div>

            <div style={fieldWrap}>
              <label style={fieldLabel}>Texte du contenu</label>
              <textarea
                name="texte"
                defaultValue={item.texte || ""}
                rows={10}
                style={{ ...inputStyle, resize: "vertical", fontFamily: SANS }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: GOLD,
                color: WHITE,
                border: "none",
                borderRadius: 8,
                padding: "0.75rem 1.75rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Enregistrer les modifications
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}