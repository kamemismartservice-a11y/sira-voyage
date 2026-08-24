"use client";

import { useState } from "react";
import { formatMonthValue } from "@/lib/omra-dates";

const WHATSAPP_NUMBER = "2250545516269";

type Statut = "idle" | "envoi" | "succes" | "erreur";

type SessionSuggestion = { title: string; monthValue: string };

export default function OmraSurMesureForm({
  sessionsSuggerees = [],
}: {
  sessionsSuggerees?: SessionSuggestion[];
}) {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [sexe, setSexe] = useState("Je préfère ne pas préciser");
  const [typeVol, setTypeVol] = useState("Économique");
  const [periodeMois, setPeriodeMois] = useState("");
  const [adultes, setAdultes] = useState("");
  const [enfants, setEnfants] = useState("");
  const [chambre, setChambre] = useState("Pas de préférence");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [statut, setStatut] = useState<Statut>("idle");

  const periodeAffichee = periodeMois ? formatMonthValue(periodeMois) : "";

  const buildWhatsappMessage = () => {
    const lignes = [
      "Bonjour SIRA VOYAGES, je souhaite demander une Omra sur mesure.",
      "",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Email : ${email}`,
      `Sexe : ${sexe}`,
      `Type de vol souhaité : ${typeVol}`,
      periodeAffichee && `Période souhaitée : ${periodeAffichee}`,
      adultes && `Nombre d'adultes : ${adultes}`,
      enfants && `Nombre d'enfants : ${enfants}`,
      `Type de chambre souhaité : ${chambre}`,
      budget && `Budget approximatif par personne : ${budget}`,
      message && `Message complémentaire : ${message}`,
    ].filter(Boolean);
    return lignes.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatut("envoi");

    try {
      const res = await fetch("/api/omra-sur-mesure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          telephone,
          email,
          sexe,
          typeVol,
          periode: periodeAffichee,
          adultes,
          enfants,
          chambre,
          budget,
          message,
        }),
      });

      if (!res.ok) throw new Error("Échec de l'envoi");

      setStatut("succes");
    } catch {
      setStatut("erreur");
    }

    const texte = buildWhatsappMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texte)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (statut === "succes") {
    return (
      <div className="rounded-xl border border-green-600/30 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">Votre demande a bien été envoyée !</p>
        <p className="mt-2 text-sm text-green-700">
          Un email de confirmation vous a été envoyé à {email}. Notre équipe vous recontactera prochainement. Une conversation WhatsApp s&apos;est aussi ouverte pour un contact plus rapide.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Nom et prénom</label>
          <input
            type="text"
            id="nom"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
          />
        </div>
        <div>
          <label htmlFor="sexe" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Sexe</label>
          <select
            id="sexe"
            value={sexe}
            onChange={(e) => setSexe(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
          >
            <option>Homme</option>
            <option>Femme</option>
            <option>Je préfère ne pas préciser</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="periodeMois" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Période souhaitée</label>
        <input
          type="month"
          id="periodeMois"
          required
          value={periodeMois}
          onChange={(e) => setPeriodeMois(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
        />

        {sessionsSuggerees.length > 0 && (
          <div className="mt-2">
            <p className="mb-1.5 text-[11px] text-[#0B3D2E]/50">Ou choisissez une session déjà programmée :</p>
            <div className="flex flex-wrap gap-1.5">
              {sessionsSuggerees.map((s) => (
                <button
                  key={s.monthValue}
                  type="button"
                  onClick={() => setPeriodeMois(s.monthValue)}
                  className={
                    "rounded-full border px-3 py-1 text-xs transition-colors " +
                    (periodeMois === s.monthValue
                      ? "border-[#B7962F] bg-[#B7962F]/10 text-[#0B3D2E] font-medium"
                      : "border-[#0B3D2E]/15 text-[#0B3D2E]/70 hover:border-[#B7962F]/50")
                  }
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="typeVol" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Type de vol souhaité</label>
        <select
          id="typeVol"
          value={typeVol}
          onChange={(e) => setTypeVol(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
        >
          <option>Économique</option>
          <option>Premium / Affaires</option>
        </select>
        <p className="mt-1 text-[11px] text-[#0B3D2E]/50">Préférence indicative — disponibilité et supplément éventuel confirmés par l&apos;agence.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="adultes" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Nombre d&apos;adultes</label>
          <input
            type="number"
            id="adultes"
            min="1"
            value={adultes}
            onChange={(e) => setAdultes(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
          />
        </div>
        <div>
          <label htmlFor="enfants" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Nombre d&apos;enfants</label>
          <input
            type="number"
            id="enfants"
            min="0"
            value={enfants}
            onChange={(e) => setEnfants(e.target.value)}
            className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="chambre" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Type de chambre souhaité</label>
        <select
          id="chambre"
          value={chambre}
          onChange={(e) => setChambre(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
        >
          <option>Pas de préférence</option>
          <option>Quadruple</option>
          <option>Triple</option>
          <option>Double</option>
          <option>Individuelle</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Budget approximatif par personne (optionnel)</label>
        <input
          type="text"
          id="budget"
          placeholder="Ex : environ 1 800 000 FCFA"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Message complémentaire</label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Besoins particuliers, personne à mobilité réduite, voyage en famille..."
          className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
        />
      </div>

      {statut === "erreur" && (
        <p className="text-sm text-red-600">
          L&apos;envoi par email a échoué, mais WhatsApp va s&apos;ouvrir pour que vous puissiez nous contacter directement.
        </p>
      )}

      <button
        type="submit"
        disabled={statut === "envoi"}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {statut === "envoi" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
      <p className="text-xs text-[#0B3D2E]/50">
        Votre demande sera envoyée par email à notre équipe, avec une confirmation à votre adresse. WhatsApp s&apos;ouvrira aussi pour un contact immédiat.
      </p>
    </form>
  );
}
