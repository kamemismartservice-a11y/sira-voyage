import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogCategories } from "@/lib/blog-categories";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ Omra et Hajj | SIRA VOYAGES",
  description:
    "Toutes les réponses à vos questions sur la Omra, le Hajj, les formalités, le programme et la vie pratique sur place, avec SIRA VOYAGES.",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="local-page faq-page">
        <section className="local-hero">
          <h1>Foire aux questions — Omra et Hajj</h1>
          <p>
            Retrouvez ici les réponses aux questions les plus fréquentes sur la préparation de votre Omra ou de votre
            Hajj avec SIRA VOYAGES, classées par thème. Cliquez sur une question pour afficher la réponse.
          </p>
        </section>

        <div className="faq-layout">
          <nav className="faq-sommaire" aria-label="Sommaire de la FAQ">
            <p className="faq-sommaire-title">Sommaire</p>
            <ul>
              {blogCategories.map((cat) => {
                const count = faqItems.filter((f) => f.categorySlug === cat.slug).length;
                if (count === 0) return null;
                return (
                  <li key={cat.slug}>
                    <a href={`#${cat.slug}`}>{cat.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="faq-content">
            {blogCategories.map((cat) => {
              const items = faqItems.filter((f) => f.categorySlug === cat.slug);
              if (items.length === 0) return null;
              return (
                <section className="local-faq" id={cat.slug} key={cat.slug}>
                  <h2>{cat.label}</h2>
                  {items.map((item) => (
                    <details className="faq-item" key={item.slug}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
