import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function APropos() {
  return (
    <main className="min-h-[100svh] bg-[#F8F6F0]">
      <Header />

      <section className="px-6 py-14 text-center sm:px-10">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B7962F]">QUI SOMMES-NOUS</p>
        <h1 className="mx-auto max-w-2xl font-[family-name:var(--font-garamond)] text-4xl leading-tight text-[#0B3D2E] sm:text-5xl">À propos de Sira Voyages</h1>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-16 sm:px-10">
        <div className="flex flex-col gap-5 text-sm leading-relaxed text-[#0B3D2E]/80 sm:text-base">
          <p>
            Sira Voyages est une agence de voyage et de pèlerinage basée à Abidjan, spécialisée dans l&rsquo;organisation de la Omra, du Hajj, de la billetterie aérienne, de l&rsquo;assistance visa, du transport VIP et des circuits touristiques en Côte d&rsquo;Ivoire et à l&rsquo;international.
          </p>
          <p>
            Forte de plus de 13 ans d&rsquo;expérience de réseau, notre équipe a accompagné plus de 10 000 pèlerins vers les Lieux Saints, avec un taux de satisfaction de 98 %. Nous prenons en charge chaque étape du voyage &mdash; visa, hébergement, transport, encadrement religieux &mdash; pour que nos clients vivent leur expérience en toute sérénité, du premier contact jusqu&rsquo;à leur retour.
          </p>
          <p>
            Notre agence s&rsquo;appuie sur un réseau de commissaires et d&rsquo;imams agréés, une équipe dédiée à Abidjan, et des partenariats solides en Arabie Saoudite, en France et au Mali, pour garantir à chaque voyageur un accompagnement rigoureux et humain.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#0B3D2E]/10 pt-8 text-center">
            <div>
              <p className="font-[family-name:var(--font-garamond)] text-2xl text-[#0B3D2E]">Excellence</p>
            </div>
            <div className="border-x border-[#0B3D2E]/10">
              <p className="font-[family-name:var(--font-garamond)] text-2xl text-[#0B3D2E]">Intégrité</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-garamond)] text-2xl text-[#0B3D2E]">Proximité</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}