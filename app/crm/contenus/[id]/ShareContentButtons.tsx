"use client";

import { useState } from "react";

const EMERALD = "#0B3D2E";
const GOLD = "#B7962F";
const WHITE = "#FFFFFF";
const OFFWHITE = "#F8F6F0";
const BORDER = "#E4DFCF";

function buildFullText(titre: string, texte: string, hashtags: string) {
  const parts = [titre, "", texte || "", hashtags ? "\n" + hashtags : ""].filter(Boolean);
  return parts.join("\n");
}

export default function ShareContentButtons({
  titre,
  texte,
  hashtags,
}: {
  titre: string;
  texte: string;
  hashtags: string;
}) {
  const [copied, setCopied] = useState(false);
  const fullText = buildFullText(titre, texte, hashtags);

  function handleCopy() {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleWhatsapp() {
    const url = "https://wa.me/?text=" + encodeURIComponent(fullText);
    window.open(url, "_blank");
  }

  function handleEmail() {
    const subject = encodeURIComponent(titre);
    const body = encodeURIComponent(fullText);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  function handlePrint() {
    window.print();
  }

  const btnStyle: React.CSSProperties = {
    background: OFFWHITE,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    padding: "0.55rem 1rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: EMERALD,
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1rem" }}>
      <button type="button" onClick={handleCopy} style={{ ...btnStyle, background: copied ? EMERALD : GOLD, color: WHITE, border: "none" }}>
        {copied ? "Copié ✓" : "Copier le texte"}
      </button>
      <button type="button" onClick={handleWhatsapp} style={btnStyle}>
        WhatsApp
      </button>
      <button type="button" onClick={handleEmail} style={btnStyle}>
        Email
      </button>
      <button type="button" onClick={handlePrint} style={btnStyle}>
        Imprimer / PDF
      </button>
    </div>
  );
}