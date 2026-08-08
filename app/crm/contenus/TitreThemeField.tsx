"use client";

import { useState } from "react";

const EMERALD = "#0B3D2E";
const MUTED = "#6B6B6B";
const OFFWHITE = "#F8F6F0";

const fieldWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "0.3rem" };
const fieldLabel: React.CSSProperties = { fontSize: "0.8rem", color: MUTED };
const inputStyle: React.CSSProperties = {
  padding: "0.6rem 0.75rem",
  borderRadius: 8,
  border: "1px solid #D8D3C4",
  fontSize: "0.9rem",
  background: OFFWHITE,
};

type Fiche = { id: string; titre: string; motCle: string | null };

export default function TitreThemeField({ fiches }: { fiches: Fiche[] }) {
  const [selectedId, setSelectedId] = useState("");
  const [theme, setTheme] = useState("");

  const selectedFiche = fiches.find((f) => f.id === selectedId);
  const themes = Array.from(new Set(fiches.map((f) => f.motCle).filter(Boolean))) as string[];

  function handleTitreChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.value;
    setSelectedId(id);
    const fiche = fiches.find((f) => f.id === id);
    setTheme(fiche?.motCle || "");
  }

  return (
    <>
      <div style={fieldWrap}>
        <label style={fieldLabel}>Sujet (depuis la Bibliothèque)</label>
        <select value={selectedId} onChange={handleTitreChange} style={inputStyle} required>
          <option value="">-- Choisir un sujet --</option>
          {fiches.map((f) => (
            <option key={f.id} value={f.id}>
              {f.titre}
            </option>
          ))}
        </select>
        <input type="hidden" name="titre" value={selectedFiche?.titre || ""} />
        <input type="hidden" name="ficheMarketingId" value={selectedId} />
      </div>

      <div style={fieldWrap}>
        <label style={fieldLabel}>Thème (mot-clé)</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} style={inputStyle}>
          <option value="">-- Choisir un thème --</option>
          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <input type="hidden" name="theme" value={theme} />
      </div>
    </>
  );
}