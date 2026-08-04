"use client";

import { useState } from "react";

const GOLD = "#B7962F";
const EMERALD = "#0B3D2E";
const OFFWHITE = "#F8F6F0";

export function HashtagChip({ pack, tags }: { pack: string; tags: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      style={{
        background: OFFWHITE,
        border: "1px solid #E4DFCF",
        borderRadius: 10,
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <strong style={{ color: EMERALD, fontFamily: "'EB Garamond', Georgia, serif", fontSize: "1.05rem" }}>
          {pack}
        </strong>
        <button
          onClick={() => {
            navigator.clipboard.writeText(tags);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          style={{
            background: copied ? EMERALD : GOLD,
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "0.35rem 0.8rem",
            fontSize: "0.75rem",
            cursor: "pointer",
          }}
        >
          {copied ? "Copié ✓" : "Copier"}
        </button>
      </div>
      <p style={{ margin: 0, fontSize: "0.85rem", color: "#555", lineHeight: 1.6 }}>{tags}</p>
    </div>
  );
}