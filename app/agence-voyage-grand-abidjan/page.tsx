import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCommuneImage } from "@/lib/commune-images";

export const metadata: Metadata = {
  title: "Agence de voyage Grand Abidjan | Omra, Hajj, billets et transferts | SIRA VOYAGES",
  description:
    "SIRA VOYAGES accompagne les voyageurs du Grand Abidjan pour la Omra, le Hajj, la billetterie, l'assistance visa, les navettes et les séjours organisés.",
};

const communesLiees = [
  { nom: "Abidjan", slug: "/agence-voyage-abidjan" },
  { nom: "Cocody", slug: "/agence-voyage/cocody" },
  { nom: "Yopougon", slug: "/agence-voyage/yopougon" },
  { nom: "Bingerville", slug: "/agence-voyage/bingerville" },
  { nom: "Anyama", slug: "/agence-voyage/anyama" },
  { nom: "Songon", slug: "/agence-voyage/songon" },
  { nom: "Grand-Bassam", slug: "/agence-voyage/grand-bassam" },
  { nom: "Bonoua", slug: "/agence-voyage/bonoua" },
  { nom: "Alépé", slug: "/agence-voyage/alepe" },
  { nom: "Azaguié", slug: "/agence-voyage/azaguie" },
  { nom: "Dabou", slug: "/agence-voyage/dabou" },
  { nom: "Jacqueville", slug: "/agence-voyage/jacqueville" },
];

export default function GrandAbidjanHub() {
  return (
    <>
      <Header />
      <main className="local-page">
        <div className="local-hero-image">
          <Image src={getCommuneImage("grand-abidjan")} alt="Grand Abidjan" fill className="object-cover" priority />
        </div>

        <section className="local-hero">
          <h1>Agence de voyage dans le Grand Abidjan : Omra, Hajj et voyages sur mesure</h1>
          <p>
            Vous habitez dans le Grand Abidjan et préparez une Omra, un Hajj, un voyage familial, un déplacement
            professionnel ou un séjour touristique ? SIRA VOYAGES vous accompagne dans l&apos;organisation de votre
            projet depuis son agence située à Cocody Riviera Bonoumin.
          </p>
          <p>
            Que vous résidiez à Abobo, Cocody, Yopougon, Bingerville, Anyama, Songon, Grand-Bassam, Bonoua, Alépé,
            Azaguié, Dabou ou Jacqueville, vous pouvez demander les informations utiles à votre projet : périodes
            envisagées, documents à préparer, services disponibles et modalités de réservation.
          </p>
        </section>

        <section className="local-services">
          <h2>Nos services dans le Grand Abidjan</h2>
          <ul>
            <li><Link href="/services/omra">Omra et Hajj</Link></li>
            <li><Link href="/services/billetterie">Billetterie aérienne et réservations</Link></li>
            <li><Link href="/services/visa">Assistance visa selon la destination</Link></li>
            <li><Link href="/services/navette">Transferts vers l&apos;aéroport et transport avec chauffeur</Link></li>
            <li><Link href="/services/tourisme-ci">Circuits touristiques en Côte d&apos;Ivoire</Link></li>
          </ul>
        </section>

        <section className="local-why">
          <h2>Votre commune dans le Grand Abidjan</h2>
          <ul>
            {communesLiees.map((c) => (
              <li key={c.slug}>
                <Link href={c.slug} className="local-link">{c.nom}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="local-cta">
          <h2>Vous habitez dans le Grand Abidjan ?</h2>
          <p>Demandez les disponibilités correspondant à votre projet.</p>
          <div className="local-cta-buttons">
            <Link href="/contact" className="footer-cta">Demander les disponibilités</Link>
            <a href="https://wa.me/2250545516269" className="local-link">Contacter SIRA VOYAGES sur WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}