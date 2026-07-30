"use client";

import { useState } from "react";

export default function ShareButtons({ url, title, caption }: { url: string; title: string; caption?: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const textToCopy = (caption || title) + "\n\n" + url;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-[#0B3D2E]/50">Partager cet article :</span>

      <div className="flex flex-wrap items-center gap-2">
        <a href={"https://wa.me/?text=" + encodedTitle + "%20" + encodedUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-full bg-[#25D366] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90">WhatsApp</a>
        <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-full bg-[#1877F2] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90">Facebook</a>
        <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodedUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-full bg-[#0A66C2] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90">LinkedIn</a>
        <button onClick={handleCopy} className="inline-flex h-9 items-center justify-center rounded-full border border-[#0B3D2E]/20 px-4 text-xs font-medium text-[#0B3D2E] transition-colors hover:bg-[#0B3D2E]/5">{copied ? "Texte copié !" : "Copier pour Instagram / TikTok"}</button>
      </div>

      <p className="text-[11px] text-[#0B3D2E]/40">Instagram et TikTok ne permettent pas le partage direct depuis un site — collez le texte copié dans une nouvelle publication ou story.</p>
    </div>
  );
}