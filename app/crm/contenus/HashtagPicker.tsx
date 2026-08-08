"use client";

import { useState } from "react";

const EMERALD = "#0B3D2E";
const OFFWHITE = "#F8F6F0";
const WHITE = "#FFFFFF";
const BORDER = "#E4DFCF";
const MUTED = "#6B6B6B";

const HASHTAG_PACKS = [
  { pack: "Génériques", tags: "#Omra #Omra2026 #Omra2027 #Hajj #Mecque #Medine #Islam #VoyageReligieux #Pèlerinage #SiraVoyages" },
  { pack: "Côte d'Ivoire", tags: "#Abidjan #CotedIvoire #VoyageCI #MusulmansCI #OmraCI #HajjCI #AgenceVoyageCI" },
  { pack: "France", tags: "#Paris #France #MusulmansFrance #OmraFrance #HajjFrance #VoyageIslam" },
  { pack: "SEO", tags: "#VisaOmra #PrixOmra #Ramadan #Kaaba #ArabieSaoudite #VisaArabieSaoudite #AgenceOmra #VoyageSpirituel" },
];

export default function HashtagPicker({ defaultValue = "" }: { defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue);

  function addTag(tag: string) {
    setValue((prev) => {
      const current = prev.trim().split(/\s+/).filter(Boolean);
      if (current.includes(tag)) return prev;
      return current.length ? prev.trim() + " " + tag : tag;
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {HASHTAG_PACKS.map((p) => (
        <div key={p.pack}>
          <div style={{ fontSize: "0.78rem", fontWeight: 600, color: EMERALD, marginBottom: "0.3rem" }}>
            {p.pack}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {p.tags.split(/\s+/).filter(Boolean).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => addTag(tag)}
                style={{
                  background: OFFWHITE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 20,
                  padding: "0.25rem 0.7rem",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  color: "#333",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginTop: "0.5rem" }}>
        <label style={{ fontSize: "0.8rem", color: MUTED }}>Hashtags sélectionnés</label>
        <input
          name="hashtags"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: "0.6rem 0.75rem",
            borderRadius: 8,
            border: "1px solid #D8D3C4",
            fontSize: "0.9rem",
            background: WHITE,
          }}
        />
      </div>
    </div>
  );
}