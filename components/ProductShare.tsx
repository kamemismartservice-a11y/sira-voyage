"use client";

import { useState } from "react";

export default function ProductShare({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B7962F]">Partager cette offre</p>
      <div className="flex flex-wrap gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-full border border-[#0B3D2E]/15 bg-white px-4 text-xs font-medium text-[#0B3D2E] transition-colors hover:bg-[#0B3D2E]/5"
        >
          WhatsApp
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-full border border-[#0B3D2E]/15 bg-white px-4 text-xs font-medium text-[#0B3D2E] transition-colors hover:bg-[#0B3D2E]/5"
        >
          Facebook
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-9 items-center justify-center rounded-full border border-[#0B3D2E]/15 bg-white px-4 text-xs font-medium text-[#0B3D2E] transition-colors hover:bg-[#0B3D2E]/5"
        >
          {copied ? "Lien copié !" : "Copier le lien"}
        </button>
      </div>
    </div>
  );
}
