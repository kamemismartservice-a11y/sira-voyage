import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-block">
        <h3>SIRA VOYAGES</h3>
        <p>Votre agence de voyages à Abidjan pour la Omra, le Hajj, la billetterie, l&apos;assistance visa, les navettes, les transferts, les circuits en Côte d&apos;Ivoire et les voyages à l&apos;international.</p>
        <Link href="/reserver" className="footer-cta">Réserver</Link>
      </div>

      <div className="footer-block">
        <h3>Nos services</h3>
        <ul>
          <li><Link href="/services/omra">Omra</Link></li>
          <li><Link href="/services/hajj">Hajj</Link></li>
          <li><Link href="/services/billetterie">Billetterie</Link></li>
          <li><Link href="/services/visa">Assistance visa</Link></li>
          <li><Link href="/services/navette">Navette &amp; transferts</Link></li>
          <li><Link href="/services/tourisme-ci">Découvrir la Côte d&apos;Ivoire</Link></li>
        </ul>
      </div>

      <div className="footer-block">
        <h3>Informations utiles</h3>
        <ul>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/a-propos">À propos</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-block">
        <h3>SIRA VOYAGES à Abidjan</h3>
        <ul>
          <li><Link href="/agence-voyage-abidjan">Agence de voyage à Abidjan</Link></li>
          <li><Link href="/agence-voyage/cocody">Agence de voyage à Cocody</Link></li>
          <li><Link href="/agence-voyage/yopougon">Agence de voyage à Yopougon</Link></li>
          <li><Link href="/agence-voyage/marcory">Agence de voyage à Marcory</Link></li>
          <li><Link href="/agence-voyage/koumassi">Agence de voyage à Koumassi</Link></li>
          <li><Link href="/agence-voyage/treichville">Agence de voyage à Treichville</Link></li>
          <li><Link href="/agence-voyage/port-bouet">Agence de voyage à Port-Bouët</Link></li>
          <li><Link href="/agence-voyage/abobo">Agence de voyage à Abobo</Link></li>
          <li><Link href="/agence-voyage/adjame">Agence de voyage à Adjamé</Link></li>
          <li><Link href="/agence-voyage/attecoube">Agence de voyage à Attécoubé</Link></li>
          <li><Link href="/agence-voyage/plateau">Agence de voyage au Plateau</Link></li>
        </ul>
      </div>

      <div className="footer-block">
        <h3>SIRA VOYAGES dans le Grand Abidjan</h3>
        <ul>
          <li><Link href="/agence-voyage-grand-abidjan">Vue d&apos;ensemble Grand Abidjan</Link></li>
          <li><Link href="/agence-voyage/bingerville">Agence de voyage à Bingerville</Link></li>
          <li><Link href="/agence-voyage/anyama">Agence de voyage à Anyama</Link></li>
          <li><Link href="/agence-voyage/songon">Agence de voyage à Songon</Link></li>
          <li><Link href="/agence-voyage/grand-bassam">Agence de voyage à Grand-Bassam</Link></li>
          <li><Link href="/agence-voyage/bonoua">Agence de voyage à Bonoua</Link></li>
          <li><Link href="/agence-voyage/alepe">Agence de voyage à Alépé</Link></li>
          <li><Link href="/agence-voyage/azaguie">Agence de voyage à Azaguié</Link></li>
          <li><Link href="/agence-voyage/dabou">Agence de voyage à Dabou</Link></li>
          <li><Link href="/agence-voyage/jacqueville">Agence de voyage à Jacqueville</Link></li>
        </ul>
      </div>

      <div className="footer-block">
        <h3>SIRA VOYAGES en Côte d&apos;Ivoire</h3>
        <ul>
          <li><Link href="/agence-voyage/bouake">Omra depuis Bouaké</Link></li>
          <li><Link href="/agence-voyage/daloa">Agence de voyage à Daloa</Link></li>
          <li><Link href="/agence-voyage/korhogo">Omra depuis Korhogo</Link></li>
          <li><Link href="/agence-voyage/san-pedro">Agence de voyage à San-Pédro</Link></li>
          <li><Link href="/agence-voyage/yamoussoukro">Agence de voyage à Yamoussoukro</Link></li>
          <li><Link href="/agence-voyage/man">Agence de voyage à Man</Link></li>
          <li><Link href="/agence-voyage/gagnoa">Omra depuis Gagnoa</Link></li>
          <li><Link href="/agence-voyage/duekoue">Agence de voyage à Duékoué</Link></li>
          <li><Link href="/agence-voyage/divo">Omra depuis Divo</Link></li>
        </ul>
      </div>

      <div className="footer-block">
        <h3>Contact</h3>
        <address>
          Cocody Riviera 3, Bonoumin, Rond-point Cap Nord,<br />
          direction Abidjan Mall, angle Rue L53 et Rue I72,<br />
          Abidjan, Côte d&apos;Ivoire
        </address>
        <p><a href="tel:+2252724589002">+225 27 24 58 90 02</a></p>
        <p><a href="https://wa.me/2250545516269">WhatsApp : +225 05 45 51 62 69</a></p>
        <p><a href="mailto:siravoyage23@gmail.com">siravoyage23@gmail.com</a></p>
      </div>

      <div className="footer-block">
        <h3>Suivez-nous</h3>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/siravoyageci/" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://instagram.com/siravoyage225" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://www.tiktok.com/@siravoyage23" target="_blank" rel="noopener">TikTok</a></li>
          <li><a href="https://www.linkedin.com/company/sira-voyages-abidjan/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="https://g.co/kgs/2GhiQhw" target="_blank" rel="noopener">Google Business</a></li>
        </ul>
      </div>

      <div className="footer-mini-seo">
        <p>Agence de voyage à Abidjan · Omra depuis Abidjan · Hajj depuis la Côte d&apos;Ivoire · Billetterie à Abidjan · Assistance visa à Abidjan · Navette aéroport Abidjan · Circuits touristiques Côte d&apos;Ivoire</p>
      </div>

      <div className="footer-bottom">
        <p>© {year} SIRA VOYAGES — Tous droits réservés</p>
      </div>
    </footer>
  );
}