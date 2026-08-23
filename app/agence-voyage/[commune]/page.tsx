import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { communes } from "@/lib/communes-data";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return communes.map((c) => ({ commune: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ commune: string }>;
}): Promise<Metadata> {
  const { commune } = await params;
  const data = communes.find((c) => c.slug === commune);
  if (!data) return {};
  return {
    title: `${data.title} | SIRA VOYAGES`,
    description: data.metaDescription,
  };
}

export default async function CommunePage({
  params,
}: {
  params: Promise<{ commune: string }>;
}) {
  const { commune } = await params;
  const data = communes.find((c) => c.slug === commune);

  if (!data) {
    notFound();
  }

  return (
    <>
      <main className="local-page">
        <section className="local-hero">
          <h1>{data.h1}</h1>
          {data.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        <section className="local-services">
          <h2>Nos services</h2>
          <ul>
            <li><Link href="/services/omra">Omra</Link></li>
            <li><Link href="/services/hajj">Hajj</Link></li>
            <li><Link href="/services/billetterie">Billetterie aérienne</Link></li>
            <li><Link href="/services/visa">Assistance visa</Link></li>
            <li><Link href="/services/navette">Navette &amp; transferts</Link></li>
            <li><Link href="/services/tourisme-ci">Découvrir la Côte d&apos;Ivoire</Link></li>
          </ul>
        </section>

        <section className="local-faq">
          <h2>FAQ {data.nom}</h2>
          {data.faq.map((item, i) => (
            <div className="faq-item" key={i}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>

        <section className="local-cta">
          <h2>Votre projet commence ici</h2>
          <div className="local-cta-buttons">
            <Link href="/contact" className="footer-cta">{data.cta}</Link>
            <a href="https://wa.me/2250545516269" className="local-link">Contacter SIRA VOYAGES sur WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}