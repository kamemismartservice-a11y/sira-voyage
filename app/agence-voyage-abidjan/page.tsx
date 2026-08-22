import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agence de voyage à Abidjan | Omra, Hajj, billets et visa | SIRA VOYAGES",
  description:
    "SIRA VOYAGES accompagne vos projets de Omra, Hajj, billets d'avion, visa, transferts et séjours depuis Abidjan. Contactez notre agence à Cocody Riviera Bonoumin.",
};

export default function AgenceVoyageAbidjan() {
  return (
    <main className="local-page">
      <section className="local-hero">
        <h1>Agence de voyage à Abidjan : Omra, Hajj et voyages avec SIRA VOYAGES</h1>
        <p>
          Vous recherchez une agence de voyage à Abidjan pour préparer une Omra, un Hajj, acheter un billet d&apos;avion,
          organiser un transfert aéroport, demander une assistance visa ou construire un séjour sur mesure ?
          SIRA VOYAGES vous accompagne selon votre projet, votre période envisagée et le nombre de voyageurs.
        </p>
        <p>
          Implantée à Cocody Riviera Bonoumin, SIRA VOYAGES accompagne les particuliers, les familles, les groupes,
          les entreprises et les institutions pour les voyages religieux, touristiques, professionnels et familiaux.
        </p>
      </section>

      <section className="local-services">
        <h2>Services à Abidjan</h2>

        <article>
          <h3>Omra depuis Abidjan</h3>
          <p>
            Préparez votre Omra avec un accompagnement avant, pendant et après le séjour. Les prestations proposées
            par SIRA VOYAGES peuvent inclure, selon la formule confirmée, le billet aller-retour, l&apos;hébergement,
            les transferts, le transport entre Médine et La Mecque, l&apos;accompagnement religieux et l&apos;assistance
            de l&apos;équipe.
          </p>
          <Link href="/services/omra" className="local-link">Découvrir les formules Omra</Link>
        </article>

        <article>
          <h3>Hajj depuis Abidjan</h3>
          <p>
            Le Hajj est un projet spirituel qui nécessite anticipation et organisation. SIRA VOYAGES accompagne les
            futurs pèlerins dans la préparation de leur demande, les documents nécessaires et les étapes du voyage
            selon les conditions de la campagne concernée.
          </p>
          <Link href="/services/hajj" className="local-link">Préparer mon projet Hajj</Link>
        </article>

        <article>
          <h3>Billetterie aérienne</h3>
          <p>
            Besoin d&apos;un billet d&apos;avion au départ d&apos;Abidjan ? SIRA VOYAGES propose des solutions de
            billetterie pour les voyages touristiques, familiaux, professionnels, scolaires, de groupe ou religieux.
          </p>
          <Link href="/services/billetterie" className="local-link">Demander un billet d&apos;avion</Link>
        </article>

        <article>
          <h3>Assistance visa</h3>
          <p>
            SIRA VOYAGES propose une assistance administrative pour les demandes de visa selon la destination, le
            type de voyage et la situation du demandeur. L&apos;agence accompagne la constitution et la vérification
            du dossier, sans garantir l&apos;obtention du visa, qui dépend toujours des autorités compétentes.
          </p>
          <Link href="/services/visa" className="local-link">Demander une assistance visa</Link>
        </article>

        <article>
          <h3>Navette et transfert aéroport</h3>
          <p>
            Organisez votre transfert entre Abidjan, votre hôtel, votre résidence, votre entreprise ou l&apos;Aéroport
            International Félix Houphouët-Boigny. Des prestations de transport avec chauffeur, transferts privés,
            navettes de groupes et services pour événements sont proposés sur réservation.
          </p>
          <Link href="/services/navette" className="local-link">Réserver un transfert aéroport</Link>
        </article>

        <article>
          <h3>Circuits en Côte d&apos;Ivoire</h3>
          <p>
            SIRA VOYAGES propose des circuits touristiques et des séjours de découverte en Côte d&apos;Ivoire selon
            les programmes disponibles.
          </p>
          <Link href="/services/tourisme-ci" className="local-link">Découvrir la Côte d&apos;Ivoire</Link>
        </article>
      </section>

      <section className="local-why">
        <h2>Pourquoi choisir SIRA VOYAGES ?</h2>
        <ul>
          <li>Une agence basée à Abidjan, à Cocody Riviera Bonoumin</li>
          <li>Des services réunis au même endroit : Omra, Hajj, billets, visas, navettes, séjours et circuits</li>
          <li>Un accompagnement adapté au projet : voyageurs individuels, familles, groupes, entreprises et institutions</li>
          <li>Une approche transparente : les tarifs, dates, hôtels, compagnies et disponibilités sont confirmés avant toute réservation</li>
        </ul>
      </section>

      <section className="local-prepare">
        <h2>Préparer votre Omra à Abidjan</h2>
        <p>Avant de réserver votre Omra, préparez les éléments essentiels :</p>
        <ul>
          <li>Votre période de départ envisagée</li>
          <li>Le nombre de voyageurs</li>
          <li>Le type de chambre souhaité : quadruple, triple, double ou individuelle</li>
          <li>La validité du passeport</li>
          <li>Les documents demandés selon la formule et les formalités applicables</li>
          <li>Vos besoins particuliers : famille, personne âgée, mobilité, chambre, accompagnement ou transfert</li>
        </ul>
      </section>

      <section className="local-faq">
        <h2>FAQ</h2>

        <div className="faq-item">
          <h3>Où se trouve SIRA VOYAGES à Abidjan ?</h3>
          <p>SIRA VOYAGES est située à Cocody Riviera Bonoumin, Rond-point Cap Nord, direction Abidjan Mall, angle Rue L53 et Rue I72, à Abidjan.</p>
        </div>

        <div className="faq-item">
          <h3>Puis-je préparer une Omra depuis Abidjan ?</h3>
          <p>Oui. Vous pouvez contacter SIRA VOYAGES pour demander les informations sur les formules actuellement disponibles, les documents nécessaires et les modalités de réservation.</p>
        </div>

        <div className="faq-item">
          <h3>L&apos;agence organise-t-elle le Hajj ?</h3>
          <p>SIRA VOYAGES propose un accompagnement pour le Hajj. Les conditions, dates, prestations et disponibilités doivent être confirmées auprès de l&apos;équipe pour la campagne concernée.</p>
        </div>

        <div className="faq-item">
          <h3>Puis-je acheter uniquement un billet d&apos;avion ?</h3>
          <p>Oui. SIRA VOYAGES propose des services de billetterie pour différentes destinations et motifs de voyage.</p>
        </div>

        <div className="faq-item">
          <h3>SIRA VOYAGES peut-elle garantir mon visa ?</h3>
          <p>Non. L&apos;agence peut vous assister dans la préparation de votre dossier selon votre destination, mais la décision finale appartient aux autorités consulaires ou compétentes.</p>
        </div>

        <div className="faq-item">
          <h3>Proposez-vous des transferts vers l&apos;aéroport d&apos;Abidjan ?</h3>
          <p>Oui. Des transferts et navettes avec chauffeur peuvent être organisés sur réservation entre l&apos;aéroport, les hôtels, les résidences, les bureaux et d&apos;autres destinations.</p>
        </div>

        <div className="faq-item">
          <h3>Puis-je organiser un voyage de groupe ?</h3>
          <p>Oui. Les familles, associations, entreprises et groupes peuvent soumettre leur projet afin que l&apos;agence étudie les besoins liés au transport, à l&apos;hébergement, à la billetterie ou au programme.</p>
        </div>
      </section>

      <section className="local-advice">
        <h2>Nos conseils avant réservation</h2>
        <ul>
          <li>Contactez l&apos;agence suffisamment tôt pour exposer votre projet</li>
          <li>Ne communiquez vos documents personnels qu&apos;à travers un canal officiel et sécurisé</li>
          <li>Demandez une confirmation écrite des prestations, de la période et des conditions avant tout paiement</li>
          <li>Vérifiez la validité de votre passeport et les formalités applicables à votre destination</li>
          <li>Pour la Omra et le Hajj, demandez les éléments inclus dans la formule sélectionnée avant la réservation</li>
        </ul>
      </section>

      <section className="local-contact">
        <h2>SIRA VOYAGES à Abidjan</h2>
        <address>
          Cocody Riviera 3, Bonoumin, Rond-point Cap Nord,<br />
          direction Abidjan Mall, angle Rue L53 et Rue I72,<br />
          Abidjan, Côte d&apos;Ivoire
        </address>
        <p><a href="tel:+2252724589002">+225 27 24 58 90 02</a></p>
        <p><a href="https://wa.me/2250545516269">WhatsApp : +225 05 45 51 62 69</a></p>
        <p><a href="https://omrahajjabidjan.com">omrahajjabidjan.com</a></p>
      </section>

      <section className="local-cta">
        <h2>Votre projet commence ici</h2>
        <p>Vous préparez une Omra, un Hajj, un billet d&apos;avion, un visa, un transfert aéroport ou un séjour depuis Abidjan ?</p>
        <div className="local-cta-buttons">
          <Link href="/contact" className="footer-cta">Demander les disponibilités</Link>
          <Link href="/contact" className="local-link">Être rappelé(e) par un conseiller</Link>
          <a href="https://wa.me/2250545516269" className="local-link">Contacter SIRA VOYAGES sur WhatsApp</a>
        </div>
      </section>
    </main>
  );
}