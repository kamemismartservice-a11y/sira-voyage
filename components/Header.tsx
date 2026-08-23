import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 flex w-full flex-col gap-3 bg-[#0B3D2E] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-6 sm:px-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-garamond)] text-xl tracking-wide text-[#F8F6F0] sm:text-2xl">
          Sira Voyage
        </Link>
      </div>

      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:gap-x-6 sm:text-base">
        <Link href="/" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Accueil</Link>
        <Link href="/a-propos" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">À propos</Link>
        <Link href="/services" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Services</Link>
        <Link href="/blog" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Blog</Link>
        <Link href="/faq" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">FAQ</Link>
        <Link href="/contact" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Contact</Link>
      </nav>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <a href="tel:+2250545516269" className="inline-flex items-center gap-1.5 rounded-full border border-[#B7962F]/60 px-3 py-1.5 text-xs font-medium tracking-wide text-[#B7962F] transition-colors hover:bg-[#B7962F]/10 sm:text-sm">
          Appeler
        </a>
        <a href="https://wa.me/2250545516269?text=Bonjour%20SIRA%20VOYAGES%2C%20je%20souhaite%20obtenir%20des%20informations." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-[#B7962F]/60 px-3 py-1.5 text-xs font-medium tracking-wide text-[#B7962F] transition-colors hover:bg-[#B7962F]/10 sm:text-sm">
          WhatsApp
        </a>
        <a href="https://siravoyage.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#B7962F] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0B3D2E] transition-colors hover:bg-[#CBA83E] sm:text-sm">
          Réserver / Espace Client
        </a>
      </div>
    </header>
  );
}