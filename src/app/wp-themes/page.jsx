'use client';

import CostSection from '../components/CostSection';
import FooterMenu from '../components/Footer';
import SixStepsSection from '../components/SixStepSection';
import TechnologiesSection from '../components/TechnologieSection';
import styles from '../styles/WPThemes.module.css'; // Optional: eigenes WordPress-Stylesheet erstellen
import Image from 'next/image';

export default function WordPressPage() {
  return (
    <>
      <main className={styles.container}>
        <h1>WordPress & Theme-Entwicklung – Flexibilität trifft Benutzer- freundlichkeit</h1>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Individuelle WordPress-Lösungen</h2>
            <p>
              WordPress ist eines der weltweit beliebtesten Content-Management-Systeme. 
              Wir entwickeln maßgeschneiderte Themes und Plugins, die Ihre Marke perfekt widerspiegeln – leistungsstark, sicher und SEO-optimiert.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team2.webp"
              alt="WordPress Theme Design"
              width={600}
              height={400}
              className={styles.img}
            />
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.image}>
            <Image
              src="/images/team5.webp"
              alt="WordPress Theme Entwicklung"
              width={600}
              height={400}
              className={styles.img}
              loading="lazy"
            />
          </div>
          <div className={styles.text}>
            <h2>Theme-Entwicklung, die begeistert</h2>
            <p>
              Ob individuelles Design, WooCommerce-Integration oder Performance-Optimierung –
              wir bauen Ihre WordPress-Website exakt nach Ihren Anforderungen. Kein Baukasten, sondern echte Handarbeit.
            </p>
          </div>
        </section>

        <section className={styles.methods}>
          <h2>Unsere Leistungen im Überblick</h2>
          <ul>
            <li>Entwicklung individueller WordPress-Themes</li>
            <li>WooCommerce-Shops mit perfektem UX-Design</li>
            <li>Responsives und barrierefreies Webdesign</li>
            <li>SEO-optimierter Seitenaufbau</li>
            <li>Performance-Tuning & Security-Hardening</li>
            <li>Wartung & Support</li>
          </ul>
        </section>

        <TechnologiesSection />
        <CostSection />
        <SixStepsSection />
       
      </main>
      <FooterMenu />
    </>
  );
}
