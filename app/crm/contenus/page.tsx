import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createContentItem, updateContentStatut } from "./actions";
import TitreThemeField from "./TitreThemeField";
import HashtagPicker from "./HashtagPicker";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const MUTED = "#6B6B6B";
const BORDER = "#E4DFCF";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const RUBRIQUES = [
  { value: "omra_conseils", label: "Lundi — Omra Conseils" },
  { value: "billetterie_express", label: "Mardi — Billetterie Express" },
  { value: "visa_formalites", label: "Mercredi — Visa & Formalités" },
  { value: "destination_ci", label: "Jeudi — Destination Côte d'Ivoire" },
  { value: "spiritualite", label: "Vendredi — Spiritualité" },
  { value: "transport_navettes", label: "Samedi — Transport & Navettes" },
  { value: "temoignages_vie_sira", label: "Dimanche — Témoignages & Vie de SIRA" },
];

const COUCHES = [
  { value: "moteur_commercial", label: "Couche 1 — Moteur commercial (60%)" },
  { value: "services_permanents", label: "Couche 2 — Services permanents (25%)" },
  { value: "marque", label: "Couche 3 — Marque (15%)" },
];

const FORMATS = [
  "article_seo", "facebook", "instagram", "linkedin", "tiktok", "reel",
  "youtube_short", "youtube_video", "newsletter", "whatsapp", "story",
  "pinterest", "google_business", "faq", "carrousel", "voix_off",
];

const STATUTS = [
  { value: "a_faire", label: "À faire" },
  { value: "en_cours", label: "En cours" },
  { value: "a_valider", label: "À valider" },
  { value: "publie", label: "Publié" },
];

const STATUT_STYLE: Record<string, { bg: string; text: string }> = {
  a_faire: { bg: "#E9E7E1", text: "#5A5A5A" },
  en_cours: { bg: "#F5E9C9", text: "#8A6D1D" },
  a_valider: { bg: "#DCE7F5", text: "#1F4E85" },
  publie: { bg: EMERALD, text: WHITE },
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

export default async function ContenusPage() {
  const [items, users, fiches] = await Promise.all([
    prisma.contentItem.findMany({
      include: { assigne: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.user.findMany({
      where: { role: { not: "client" } },
      orderBy: { name: "asc" },
    }),
    prisma.ficheMarketing.findMany({
      select: { id: true, titre: true, motCle: true },
      orderBy: { titre: "asc" },
    }),
  ]);

  const suivi: Record<string, Record<string, number>> = {};
  for (const item of items) {
    const key = item.assigne?.name || item.assigne?.email || "Non assigné";
    if (!suivi[key]) suivi[key] = { a_faire: 0, en_cours: 0, a_valider: 0, publie: 0 };
    suivi[key][item.statut] = (suivi[key][item.statut] || 0) + 1;
  }

  return (
    <div style={{ background: OFFWHITE, minHeight: "100vh", fontFamily: SANS }}>
      <div style={{ background: EMERALD, padding: "2rem 2.5rem", marginBottom: "2rem" }}>
        <h1 style={{ color: WHITE, fontFamily: SERIF, fontSize: "2rem", margin: 0 }}>
          SIRA VOYAGES
        </h1>
        <p style={{ color: GOLD, fontFamily: SERIF, fontStyle: "italic", margin: "0.25rem 0 0.5rem" }}>
          Faire l'expérience du monde
        </p>
        <p style={{ color: "#DCE5DF", margin: 0, fontSize: "0.95rem" }}>Content Hub — Suivi éditorial de l'équipe</p>
      </div>

      <div style={{ padding: "0 2.5rem 3rem", maxWidth: 1200, margin: "0 auto" }}>
        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Suivi de l'équipe (temps réel)</h2>
          <div style={{ overflow: "hidden", borderRadius: 10, border: `1px solid ${BORDER}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: EMERALD }}>
                  {["Personne", "À faire", "En cours", "À valider", "Publié"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "0.75rem 1rem", color: WHITE, fontWeight: 600, fontSize: "0.85rem" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(suivi).map(([personne, counts], idx) => (
                  <tr key={personne} style={{ background: idx % 2 === 0 ? OFFWHITE : WHITE }}>
                    <td style={{ padding: "0.65rem 1rem", fontWeight: 600 }}>{personne}</td>
                    <td style={{ padding: "0.65rem 1rem" }}>{counts.a_faire}</td>
                    <td style={{ padding: "0.65rem 1rem" }}>{counts.en_cours}</td>
                    <td style={{ padding: "0.65rem 1rem" }}>{counts.a_valider}</td>
                    <td style={{ padding: "0.65rem 1rem" }}>{counts.publie}</td>
                  </tr>
                ))}
                {Object.keys(suivi).length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ padding: "1rem", color: MUTED, textAlign: "center" }}>
                      Aucun contenu pour le moment.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Ajouter un contenu</h2>
          <form action={createContentItem} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            <TitreThemeField fiches={fiches} />

            <div style={fieldWrap}>
              <label style={fieldLabel}>Rubrique du jour</label>
              <select name="rubrique" style={inputStyle} required defaultValue="">
                <option value="" disabled>-- Choisir --</option>
                {RUBRIQUES.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Couche</label>
              <select name="couche" style={inputStyle} defaultValue="moteur_commercial">
                {COUCHES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Format</label>
              <select name="format" style={inputStyle} required defaultValue="">
                <option value="" disabled>-- Choisir --</option>
                {FORMATS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Assigné à</label>
              <select name="assigneId" style={inputStyle} defaultValue="">
                <option value="">-- Choisir --</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>{u.name || u.email}</option>
                ))}
              </select>
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Date de publication prévue</label>
              <input name="datePublicationPrevue" type="date" style={inputStyle} />
            </div>
            <div style={fieldWrap}>
              <label style={fieldLabel}>Lien du visuel (Canva, Drive...)</label>
              <input name="lienVisuel" style={inputStyle} />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ ...fieldLabel, marginBottom: "0.5rem", display: "block" }}>Hashtags</label>
              <HashtagPicker />
            </div>

            <div style={{ ...fieldWrap, gridColumn: "1 / -1" }}>
              <label style={fieldLabel}>Texte du contenu</label>
              <textarea name="texte" rows={4} style={{ ...inputStyle, resize: "vertical", fontFamily: SANS }} />
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
                Créer le contenu
              </button>
            </div>
          </form>
        </section>

        <section style={card}>
          <h2 style={{ fontFamily: SERIF, color: EMERALD, marginTop: 0 }}>Liste des contenus ({items.length})</h2>
          <div style={{ overflow: "hidden", borderRadius: 10, border: `1px solid ${BORDER}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: EMERALD }}>
                  {["Titre", "Rubrique", "Format", "Assigné", "Statut", "Changer le statut"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "0.75rem 1rem", color: WHITE, fontWeight: 600, fontSize: "0.85rem" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => {
                  const s = STATUT_STYLE[item.statut];
                  return (
                    <tr key={item.id} style={{ background: idx % 2 === 0 ? OFFWHITE : WHITE }}>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <Link
                          href={`/crm/contenus/${item.id}`}
                          style={{ color: EMERALD, fontWeight: 600, textDecoration: "underline" }}
                        >
                          {item.titre}
                        </Link>
                      </td>
                      <td style={{ padding: "0.65rem 1rem" }}>{RUBRIQUES.find((r) => r.value === item.rubrique)?.label ?? item.rubrique}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>{item.format}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>{item.assigne?.name || item.assigne?.email || "—"}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <span style={{ background: s.bg, color: s.text, padding: "0.25rem 0.6rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 600 }}>
                          {STATUTS.find((st) => st.value === item.statut)?.label}
                        </span>
                      </td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <form action={updateContentStatut} style={{ display: "flex", gap: "0.4rem" }}>
                          <input type="hidden" name="id" value={item.id} />
                          <input type="hidden" name="userId" value={item.assigneId || ""} />
                          <select name="statut" defaultValue={item.statut} style={{ ...inputStyle, padding: "0.4rem 0.5rem" }}>
                            {STATUTS.map((st) => (
                              <option key={st.value} value={st.value}>{st.label}</option>
                            ))}
                          </select>
                          <button
                            type="submit"
                            style={{
                              background: EMERALD,
                              color: WHITE,
                              border: "none",
                              borderRadius: 6,
                              padding: "0.4rem 0.8rem",
                              fontSize: "0.8rem",
                              cursor: "pointer",
                            }}
                          >
                            OK
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
                {items.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ padding: "1rem", color: MUTED, textAlign: "center" }}>
                      Aucun contenu créé pour le moment.
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