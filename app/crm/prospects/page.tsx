import { prisma } from "@/lib/prisma";
import { createEntreprise } from "../actions";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const MUTED = "#6B6B6B";
const BORDER = "#E4DFCF";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const CATEGORIES = [
  ["entreprise_privee", "Entreprise privée"],
  ["administration_publique", "Administration publique"],
  ["banque", "Banque"],
  ["assurance", "Assurance"],
  ["hotel", "Hôtel"],
  ["compagnie_aerienne", "Compagnie aérienne"],
  ["ong", "ONG"],
  ["ambassade", "Ambassade"],
  ["ecole", "École"],
  ["universite", "Université"],
  ["clinique", "Clinique"],
  ["cabinet_medical", "Cabinet médical"],
  ["cabinet_avocat", "Cabinet d'avocats"],
  ["notaire", "Notaire"],
  ["agence_immobiliere", "Agence immobilière"],
  ["entreprise_miniere", "Entreprise minière"],
  ["societe_petroliere", "Société pétrolière"],
  ["btp", "BTP"],
  ["securite_privee", "Sécurité privée"],
  ["evenementiel", "Événementiel"],
  ["mosquee", "Mosquée"],
  ["association", "Association"],
  ["comite_entreprise", "Comité d'entreprise"],
  ["particulier_vip", "Particulier VIP"],
];

const STATUT_STYLE: Record<string, { bg: string; text: string }> = {
  prospect_identifie: { bg: "#E9E7E1", text: "#5A5A5A" },
  premier_contact: { bg: "#F5E9C9", text: "#8A6D1D" },
  visite_effectuee: { bg: "#F5E9C9", text: "#8A6D1D" },
  besoin_identifie: { bg: "#DCE7F5", text: "#1F4E85" },
  devis_envoye: { bg: "#DCE7F5", text: "#1F4E85" },
  relance_1: { bg: "#F5DCC9", text: "#8A4D1D" },
  relance_2: { bg: "#F5DCC9", text: "#8A4D1D" },
  negociation: { bg: "#F0D9E8", text: "#7A1D5C" },
  contrat_signe: { bg: EMERALD, text: WHITE },
  client_actif: { bg: EMERALD, text: WHITE },
  client_fidele: { bg: GOLD, text: WHITE },
  perdu: { bg: "#F0D0D0", text: "#8A1D1D" },
};

function formatLabel(value: string) {
  return value.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

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

export default async function ProspectsPage() {
  const entreprises = await prisma.entreprise.findMany({
    orderBy: { createdAt: "desc" },
  });

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
        <p style={{ color: "#DCE5DF", margin: 0, fontSize: "0.95rem" }}>CRM — Prospects</p>
      </div>

      <div style={{ padding: "0 2.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
        {/* Ajouter un prospect */}
        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Ajouter un prospect</h2>
          <form
            action={createEntreprise}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}
          >
            <div style={fieldWrap}>
              <label style={fieldLabel}>Nom de l'entreprise</label>
              <input name="nom" style={inputStyle} required />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Catégorie</label>
              <select name="categorie" style={inputStyle} required defaultValue="">
                <option value="" disabled>-- Choisir --</option>
                {CATEGORIES.map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Ville</label>
              <input name="ville" style={inputStyle} required />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Commune</label>
              <input name="commune" style={inputStyle} required />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Téléphone fixe</label>
              <input name="telephoneFixe" style={inputStyle} />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>WhatsApp</label>
              <input name="whatsapp" style={inputStyle} />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Email</label>
              <input name="emailPrincipal" type="email" style={inputStyle} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
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
                }}
              >
                Créer le prospect
              </button>
            </div>
          </form>
        </section>

        {/* Liste des prospects */}
        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>
            Liste des prospects ({entreprises.length})
          </h2>
          <div style={{ overflow: "hidden", borderRadius: 10, border: `1px solid ${BORDER}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: EMERALD }}>
                  {["Nom", "Catégorie", "Ville / Commune", "Statut"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "0.75rem 1rem", color: WHITE, fontWeight: 600, fontSize: "0.85rem" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {entreprises.map((e, idx) => {
                  const s = STATUT_STYLE[e.statutPipeline] ?? { bg: "#E9E7E1", text: "#5A5A5A" };
                  return (
                    <tr key={e.id} style={{ background: idx % 2 === 0 ? OFFWHITE : WHITE }}>
                      <td style={{ padding: "0.65rem 1rem", fontWeight: 600 }}>{e.nom}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>{formatLabel(e.categorie)}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>{e.ville} / {e.commune}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <span style={{ background: s.bg, color: s.text, padding: "0.25rem 0.6rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 600 }}>
                          {formatLabel(e.statutPipeline)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {entreprises.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ padding: "1rem", color: MUTED, textAlign: "center" }}>
                      Aucun prospect pour le moment.
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