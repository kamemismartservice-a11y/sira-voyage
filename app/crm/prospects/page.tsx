import { prisma } from "@/lib/prisma";
import { createEntreprise } from "../actions";

export default async function ProspectsPage() {
  const entreprises = await prisma.entreprise.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Prospects — SIRA VOYAGES</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Ajouter un prospect</h2>
        <form
          action={createEntreprise}
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}
        >
          <input name="nom" placeholder="Nom de l'entreprise" required />
          <select name="categorie" required defaultValue="">
            <option value="" disabled>-- Catégorie --</option>
            <option value="entreprise_privee">Entreprise privée</option>
            <option value="administration_publique">Administration publique</option>
            <option value="banque">Banque</option>
            <option value="assurance">Assurance</option>
            <option value="hotel">Hôtel</option>
            <option value="compagnie_aerienne">Compagnie aérienne</option>
            <option value="ong">ONG</option>
            <option value="ambassade">Ambassade</option>
            <option value="ecole">École</option>
            <option value="universite">Université</option>
            <option value="clinique">Clinique</option>
            <option value="cabinet_medical">Cabinet médical</option>
            <option value="cabinet_avocat">Cabinet d'avocats</option>
            <option value="notaire">Notaire</option>
            <option value="agence_immobiliere">Agence immobilière</option>
            <option value="entreprise_miniere">Entreprise minière</option>
            <option value="societe_petroliere">Société pétrolière</option>
            <option value="btp">BTP</option>
            <option value="securite_privee">Sécurité privée</option>
            <option value="evenementiel">Événementiel</option>
            <option value="mosquee">Mosquée</option>
            <option value="association">Association</option>
            <option value="comite_entreprise">Comité d'entreprise</option>
            <option value="particulier_vip">Particulier VIP</option>
          </select>
          <input name="ville" placeholder="Ville" required />
          <input name="commune" placeholder="Commune" required />
          <input name="telephoneFixe" placeholder="Téléphone fixe" />
          <input name="whatsapp" placeholder="WhatsApp" />
          <input name="emailPrincipal" placeholder="Email" type="email" />
          <button type="submit">Créer le prospect</button>
        </form>
      </section>

      <section>
        <h2>Liste des prospects ({entreprises.length})</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>Nom</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>Catégorie</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>Ville / Commune</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>Statut</th>
            </tr>
          </thead>
          <tbody>
            {entreprises.map((e) => (
              <tr key={e.id}>
                <td style={{ padding: "0.5rem 0" }}>{e.nom}</td>
                <td>{e.categorie}</td>
                <td>{e.ville} / {e.commune}</td>
                <td>{e.statutPipeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}