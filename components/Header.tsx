import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-[#0B3D2E] px-6 py-6 sm:px-10">
      <Link href="/" className="font-[family-name:var(--font-garamond)] text-xl tracking-wide text-[#F8F6F0] sm:text-2xl">
        Sira Voyage
      </Link>
      <nav className="flex items-center gap-5 text-sm sm:gap-6 sm:text-base">
        <Link href="/" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Accueil</Link>
        <Link href="/a-propos" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">À propos</Link>
        <Link href="/services" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Services</Link>
        <Link href="/blog" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Blog</Link>
        <Link href="/contact" className="tracking-wide text-[#B7962F] transition-opacity hover:opacity-80">Contact</Link>
        <a href="https://siravoyage.com/login" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#B7962F]/60 px-4 py-1.5 text-xs font-medium tracking-wide text-[#B7962F] transition-colors hover:bg-[#B7962F]/10 sm:text-sm">Espace Client</a>
      </nav>
    </header>
  );
}