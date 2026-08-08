const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const MUTED = "#6B6B6B";
const BORDER = "#E4DFCF";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

const card: React.CSSProperties = {
  background: WHITE,
  borderRadius: 14,
  padding: "1.75rem",
  boxShadow: "0 1px 3px rgba(11,61,46,0.08)",
  border: `1px solid ${BORDER}`,
  marginBottom: "2rem",
};

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 10, border: `1px solid ${BORDER}`, marginTop: "0.75rem", marginBottom: "0.75rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
        <thead>
          <tr style={{ background: EMERALD }}>
            {headers.map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "0.65rem 1rem", color: WHITE, fontWeight: 600, fontSize: "0.85rem" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} style={{ background: idx % 2 === 0 ? OFFWHITE : WHITE }}>
              {r.map((cell, i) => (
                <td key={i} style={{ padding: "0.55rem 1rem", fontSize: "0.9rem" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: SERIF,
        color: EMERALD,
        fontSize: "1.5rem",
        marginTop: "2rem",
        marginBottom: "0.75rem",
        paddingBottom: "0.4rem",
        borderBottom: `2px solid ${GOLD}`,
      }}
    >
      {children}
    </h2>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: SERIF, color: EMERALD, fontSize: "1.15rem", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#333", margin: "0.5rem 0" }}>{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0.5rem 0", paddingLeft: "1.3rem" }}>
      {items.map((it, i) => (
        <li key={i} style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#333", marginBottom: "0.25rem" }}>
          {it}
        </li>
      ))}
    </ul>
  );
}

function Ol({ items }: { items: string[] }) {
  return (
    <ol style={{ margin: "0.5rem 0", paddingLeft: "1.3rem" }}>
      {items.map((it, i) => (
        <li key={i} style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#333", marginBottom: "0.25rem" }}>
          {it}
        </li>
      ))}
    </ol>
  );
}

export default function AidePage() {
  return (
    <div style={{ background: OFFWHITE, minHeight: "100vh", fontFamily: SANS }}>
      <div style={{ background: EMERALD, padding: "2rem 2.5rem", marginBottom: "2rem" }}>
        <h1 style={{ color: WHITE, fontFamily: SERIF, fontSize: "2rem", margin: 0 }}>SIRA VOYAGES</h1>
        <p style={{ color: GOLD, fontFamily: SERIF, fontStyle: "italic", margin: "0.25rem 0 0.5rem" }}>
          Faire l'expérience du monde
        </p>
        <p style={{ color: "#DCE5DF", margin: 0, fontSize: "0.95rem" }}>Manuel d'utilisation — Prospects, Contenus, Bibliothèque</p>
      </div>

      <div style={{ padding: "0 2.5rem 3rem", maxWidth: 900, margin: "0 auto" }}>
        <section style={card}>
          <H1>1. Se connecter (commun aux trois outils)</H1>
          <P>
            Un seul identifiant donne accès aux trois applications : le CRM (Prospects), le Content Hub (Contenus)
            et la Bibliothèque Marketing. Il n'est pas nécessaire de se reconnecter en changeant d'outil.
          </P>
          <Ol
            items={[
              "Ouvrir un navigateur (Chrome de préférence), sur ordinateur, tablette ou téléphone.",
              "Aller sur omrahajjabidjan.com/login (ou cliquer sur Déconnexion pour y revenir automatiquement).",
              "Saisir l'email et le mot de passe communiqués individuellement.",
              "Cliquer sur « Se connecter ».",
            ]}
          />
          <P>Au premier accès, il est fortement recommandé de changer le mot de passe temporaire fourni par la Direction.</P>

          <H2>La barre de navigation</H2>
          <P>Une fois connecté, une barre verte apparaît en haut de chaque page avec plusieurs liens :</P>
          <Table
            headers={["Élément", "Fonction"]}
            rows={[
              ["Prospects", "Ouvre le CRM"],
              ["Contenus", "Ouvre le Content Hub (planning quotidien de publication)"],
              ["Bibliothèque", "Ouvre la Bibliothèque Marketing (les fiches de contenu)"],
              ["Aide", "Ouvre cette page"],
              ["Déconnexion", "Ferme la session en toute sécurité et revient à la page de connexion"],
            ]}
          />
          <P>Cette barre reste visible en permanence : plus besoin de taper une adresse à la main.</P>
        </section>

        <section style={card}>
          <H1>2. CRM — Prospects</H1>
          <P>Le CRM permet d'enregistrer chaque prospect ou client contacté et de suivre où en est chaque contact, du premier appel jusqu'au contrat signé.</P>

          <H2>Ajouter un prospect</H2>
          <Table
            headers={["Champ", "Ce qu'il faut indiquer"]}
            rows={[
              ["Nom de l'entreprise", "Nom exact de la structure contactée"],
              ["Catégorie", "Type de structure (hôtel, banque, ONG, ambassade, école…)"],
              ["Ville / Commune", "Localisation du prospect"],
              ["Téléphone fixe / WhatsApp", "Coordonnées de contact"],
              ["Email", "Adresse email principale, si disponible"],
            ]}
          />

          <H2>Statuts d'un prospect</H2>
          <Table
            headers={["Statut", "Signification"]}
            rows={[
              ["Prospect identifié", "Le contact a été repéré, pas encore approché"],
              ["Premier contact", "Un premier appel ou message a été envoyé"],
              ["Visite effectuée", "Une rencontre physique a eu lieu"],
              ["Besoin identifié", "Le besoin exact du prospect est connu"],
              ["Devis envoyé", "Une proposition tarifaire a été transmise"],
              ["Relance 1 / Relance 2", "Le prospect a été recontacté après le devis"],
              ["Négociation", "Discussion en cours sur les conditions"],
              ["Contrat signé", "L'accord est conclu"],
              ["Client actif / fidèle", "Le client utilise ou revient régulièrement"],
              ["Perdu", "Le prospect ne donnera pas suite"],
            ]}
          />
        </section>

        <section style={card}>
          <H1>3. Content Hub — Contenus</H1>
          <P>Le Content Hub sert à préparer, suivre et valider les publications quotidiennes selon la rubrique du jour.</P>

          <H2>Rubriques de la semaine</H2>
          <Table
            headers={["Jour", "Rubrique"]}
            rows={[
              ["Lundi", "Omra Conseils"],
              ["Mardi", "Billetterie Express"],
              ["Mercredi", "Visa & Formalités"],
              ["Jeudi", "Destination Côte d'Ivoire"],
              ["Vendredi", "Spiritualité"],
              ["Samedi", "Transport & Navettes"],
              ["Dimanche", "Témoignages & Vie de SIRA"],
            ]}
          />

          <H2>Statuts d'un contenu</H2>
          <Table
            headers={["Statut", "Signification"]}
            rows={[
              ["À faire", "Le contenu est prévu, pas encore commencé"],
              ["En cours", "Rédaction ou création du visuel en cours"],
              ["À valider", "Prêt, en attente du feu vert avant publication"],
              ["Publié", "En ligne"],
            ]}
          />
          <P><strong>Règle à retenir :</strong> ne jamais publier un contenu resté en « À valider » sans validation préalable de la Direction.</P>
        </section>

        <section style={card}>
          <H1>4. Bibliothèque Marketing</H1>
          <P>
            La Bibliothèque regroupe les fiches de contenu prêtes à rédiger : chaque fiche donne le sujet, le public
            visé, le mot-clé, l'angle à prendre, les formats à décliner et l'appel à l'action.
          </P>

          <H2>Utiliser les filtres</H2>
          <Ul
            items={[
              "Recherche — par titre, mot-clé ou numéro de fiche (ex. « prix omra », « ASS-01 »)",
              "Bibliothèque — pour n'afficher qu'un pôle (Omra, Hajj, Visa, Tourisme Côte d'Ivoire…)",
              "Statut — À écrire, En relecture, Validé, Programmé, Publié",
              "Type — Commercial (pousse une vente) ou Autorité SEO (construit la présence du site)",
            ]}
          />

          <H2>Faire avancer une fiche</H2>
          <P>
            Dans la colonne « Changer » à droite de chaque ligne, choisir le nouveau statut puis cliquer sur « OK ».
            Le tableau « Avancement » en haut de page se met à jour automatiquement.
          </P>

          <H2>Méthode recommandée</H2>
          <Ol
            items={[
              "Filtrer par Bibliothèque et repérer les fiches ★★★★★ en premier.",
              "Utiliser la fiche comme brief : sujet, angle, mot-clé, formats, CTA.",
              "Rédiger le contenu (voir Content Hub pour la publication).",
              "Mettre à jour le statut de la fiche au fur et à mesure.",
            ]}
          />
        </section>

        <section style={card}>
          <H1>5. Bonnes pratiques générales</H1>
          <Ul
            items={[
              "Mettre à jour les statuts dès qu'une action est faite — ne pas attendre la fin de la semaine.",
              "Ne jamais créer deux fiches prospect pour la même entreprise.",
              "Ne jamais publier un contenu non validé.",
              "Toujours se déconnecter sur un ordinateur partagé.",
              "En cas de doute ou de blocage technique, contacter la Direction avant de continuer.",
            ]}
          />
        </section>
      </div>
    </div>
  );
}