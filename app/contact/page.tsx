import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Sira Voyages | Omra, Hajj, billetterie à Abidjan",
  description: "Contactez Sira Voyages à Cocody Riviera 3, Abidjan. WhatsApp, téléphone et email pour vos réservations Omra, Hajj, billetterie et voyages.",
};

export default function Contact() {
  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <section className="px-6 py-14 text-center sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">PARLONS-EN</p>
        <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#0B3D2E] sm:text-5xl">Contactez-nous</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#0B3D2E]/70 sm:text-base">
          Notre équipe est disponible pour répondre à toutes vos questions sur la Omra, le Hajj, la billetterie et vos voyages.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[#0B3D2E]/10 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#B7962F]">TÉLÉPHONE</p>
            <a href="tel:+2252724589002" className="mt-2 block text-lg text-[#0B3D2E]">+225 27 24 58 90 02</a>
          </div>
          <div className="rounded-xl border border-[#0B3D2E]/10 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#B7962F]">WHATSAPP</p>
            <a href="https://wa.me/22545516269" target="_blank" rel="noopener noreferrer" className="mt-2 block text-lg text-[#0B3D2E]">+225 05 45 51 62 69</a>
          </div>
          <div className="rounded-xl border border-[#0B3D2E]/10 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#B7962F]">EMAIL</p>
            <a href="mailto:siravoyage23@gmail.com" className="mt-2 block text-lg text-[#0B3D2E]">siravoyage23@gmail.com</a>
          </div>
          <div className="rounded-xl border border-[#0B3D2E]/10 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#B7962F]">ADRESSE</p>
            <p className="mt-2 text-lg text-[#0B3D2E]">Cocody Riviera 3, Bonoumin<br />Rond-point Cap Nord</p>
          </div>
        </div>

        <a href="https://wa.me/22545516269" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto">
          Écrivez-nous sur WhatsApp
        </a>
      </section>

      <Footer />
    </main>
  );
}