"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "2250545516269";

export default function OmraSurMesureForm() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [periode, setPeriode] = useState("");
  const [adultes, setAdultes] = useState("");
  const [enfants, setEnfants] = useState("");
  const [chambre, setChambre] = useState("Pas de préférence");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lignes = [
      "Bonjour SIRA VOYAGES, je souhaite demander une Omra sur mesure.",
      "",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      periode && `Période souhaitée : ${periode}`,
      adultes && `Nombre d'adultes : ${adultes}`,
      enfants && `Nombre d'enfants : ${enfants}`,
      `Type de chambre souhaité : ${chambre}`,
      budget && `Budget approximatif par personne : ${budget}`,
      message && `Message complémentaire : ${message}`,
    ].filter(Boolean);

    const texte = lignes.join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texte)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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

      <div>
        <label htmlFor="periode" className="block text-xs font-semibold tracking-wide text-[#0B3D2E]">Période souhaitée</label>
        <input
          type="text"
          id="periode"
          placeholder="Ex : Février 2027, ou une date approximative"
          value={periode}
          onChange={(e) => setPeriode(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[#0B3D2E]/15 px-4 py-2.5 text-sm text-[#0B3D2E] outline-none focus:border-[#B7962F]"
        />
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

      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Envoyer ma demande sur WhatsApp
      </button>
      <p className="text-xs text-[#0B3D2E]/50">
        En cliquant, WhatsApp s&apos;ouvre avec un message pré-rempli reprenant vos informations. Vous pouvez le modifier avant de l&apos;envoyer.
      </p>
    </form>
  );
}
