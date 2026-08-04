import Link from "next/link";

const correspondants = [
  { ville: "Abobo", nom: "Imam Doumbia Amara", tel: "+225 07 07 69 76 47" },
  { ville: "Divo", nom: "Hadja Kanaté Kady", tel: "+225 07 07 78 99 16" },
  { ville: "Bouaké", nom: "El Hadj Koné Mohamed", tel: "+225 07 07 53 66 06" },
  { ville: "Gagnoa", nom: "M. Koné Mamadou", tel: "+225 07 07 00 65 67" },
  { ville: "Mankono", nom: "M. Bamba Lacina", tel: "+225 01 01 38 21 26" },
];

const whatsappNumbers = [
  "+225 05 45 51 62 69",
  "+225 07 07 69 76 47",
  "+225 01 52 88 27 27",
  "+225 07 07 67 97 91",
];

const socialLinks = [
  { label: "Google", href: "https://g.co/kgs/2GhiQhw" },
  { label: "Facebook", href: "https://www.facebook.com/siravoyageci" },
  { label: "Instagram", href: "https://www.instagram.com/siravoyage225/" },
  { label: "TikTok", href: "https://www.tiktok.com/@siravoyage23" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sira-voyages-abidjan/" },
  { label: "WhatsApp", href: "https://wa.me/22545516269" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#062017] px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-garamond)] text-xl text-[#F8F6F0]">Sira Voyage</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-[#B7962F]">Agence de voyage &amp; pèlerinage</p>
          <p className="mt-4 text-sm leading-relaxed text-[#F8F6F0]/70">
            Abidjan – Cocody Riviera 3, Bonoumin
            <br />
            Rond-point Cap Nord
            <br />
            Direction Abidjan Mall – Au dos d&rsquo;âne à gauche
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#B7962F]">CONTACT</p>
          <p className="text-sm text-[#F8F6F0]/70">Téléphone fixe</p>
          <a href="tel:+2252724589002" className="text-sm text-[#F8F6F0] hover:text-[#B7962F]">+225 27 24 58 90 02</a>

          <p className="mt-4 text-sm text-[#F8F6F0]/70">Mobile / WhatsApp</p>
          <div className="flex flex-col gap-0.5">
            {whatsappNumbers.map((n) => (
              <a key={n} href={"https://wa.me/" + n.replace(/[^0-9]/g, "")} target="_blank" rel="noopener noreferrer" className="text-sm text-[#F8F6F0] hover:text-[#B7962F]">{n}</a>
            ))}
          </div>

          <p className="mt-4 text-sm text-[#F8F6F0]/70">Email</p>
          <a href="mailto:siravoyage23@gmail.com" className="text-sm text-[#F8F6F0] hover:text-[#B7962F]">siravoyage23@gmail.com</a>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#B7962F]">RÉSEAU DE CORRESPONDANTS</p>
          <div className="flex flex-col gap-2.5">
            {correspondants.map((c) => (
              <div key={c.ville} className="text-sm">
                <span className="text-[#F8F6F0]">{c.ville} — {c.nom}</span>
                <br />
                <a href={"https://wa.me/" + c.tel.replace(/[^0-9]/g, "")} target="_blank" rel="noopener noreferrer" className="text-[#F8F6F0]/60 hover:text-[#B7962F]">{c.tel}</a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#B7962F]">SUIVEZ-NOUS</p>
          <div className="flex flex-col gap-2 text-sm">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#F8F6F0]/80 hover:text-[#B7962F]">{s.label}</a>
            ))}
          </div>

          <p className="mt-6 mb-2 text-xs font-semibold tracking-[0.25em] text-[#B7962F]">NAVIGATION</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="text-[#F8F6F0]/80 hover:text-[#B7962F]">Accueil</Link>
            <Link href="/services" className="text-[#F8F6F0]/80 hover:text-[#B7962F]">Services</Link>
            <Link href="/contact" className="text-[#F8F6F0]/80 hover:text-[#B7962F]">Contact</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[#F8F6F0]/10 pt-6 text-center">
        <p className="font-[family-name:var(--font-garamond)] text-sm text-[#B7962F]">Sira Voyages – L&rsquo;expérience du voyage autrement</p>
        <p className="mt-2 text-xs text-[#F8F6F0]/40">© {new Date().getFullYear()} Sira Voyages. Tous droits réservés.</p>
      </div>
    </footer>
  );
}