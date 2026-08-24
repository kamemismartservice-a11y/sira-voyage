import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OmraSurMesureForm from "@/components/OmraSurMesureForm";

export const metadata = {
  title: "Omra à la demande — Sira Voyages | Formule personnalisée",
  description: "Vous ne trouvez pas la date qui vous convient ? Demandez une Omra sur mesure adaptée à vos dates, votre budget et vos besoins.",
};

export default function OmraSurMesure() {
  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <section className="px-6 py-14 text-center sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">SUR MESURE</p>
        <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#0B3D2E] sm:text-5xl">Omra à la demande</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#0B3D2E]/70 sm:text-base">
          Aucune de nos sessions programmées ne correspond à vos disponibilités ? Décrivez votre projet, notre équipe étudie votre demande et vous recontacte avec une proposition adaptée.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16 sm:px-10">
        <div className="rounded-xl border border-[#0B3D2E]/10 bg-white p-6 sm:p-8">
          <OmraSurMesureForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
