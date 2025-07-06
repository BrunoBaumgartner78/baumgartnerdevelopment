'use client';

import styles from '../styles/WooCommerce.module.css';
import Image from 'next/image';
import FooterMenu from '../components/Footer';
import CallToAction from '../components/CallToAction';
import CostSection from '../components/CostSection';

export default function WooCommercePage() {
  return (
    <>
      <main className={styles.container}>
        <h1>WooCommerce – Ihr individueller Onlineshop mit WordPress</h1>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Was ist WooCommerce?</h2>
            <p>
              WooCommerce ist das führende E-Commerce-Plugin für WordPress und verwandelt Ihre Website
              in einen vollwertigen Online-Shop. Es ist flexibel, erweiterbar und ideal für kleine bis mittlere Unternehmen,
              die Produkte online verkaufen möchten.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team5.webp"
              alt="WooCommerce Shop Design"
              width={600}
              height={500}
              className={styles.img}
            />
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.image}>
            <Image
              src="/images/team8.webp"
              alt="WooCommerce Entwicklung"
              width={600}
              height={600}
              className={styles.img}
              load="lasy"
            />
          </div>
          <div className={styles.text}>
            <h2>Unsere WooCommerce-Leistungen</h2>
            <ul>
              <li>Installation & Einrichtung von WooCommerce</li>
              <li>Gestaltung von Produktseiten & Warenkorb</li>
              <li>Zahlungssysteme wie Stripe, PayPal & Twint</li>
              <li>Mehrsprachigkeit, Rabatte & Gutscheine</li>
              <li>Optimierung für Mobile & SEO</li>
            </ul>
          </div>
        </section>

        <section className={styles.pricing}>
          <h2>Empfohlene Investition</h2>
          <p>
            Eine individuelle WooCommerce-Lösung startet bei ca. <strong>CHF 2.500.–</strong> für kleinere Shops
            mit bis zu 10 Produkten. Komplexere Funktionen wie Produktvarianten, Multishop, B2B-Logiken oder Schnittstellen
            zu Warenwirtschaftssystemen erfordern ein höheres Budget – typischerweise zwischen <strong>CHF 4.500.–</strong> und <strong>CHF 8.500.–</strong>.
          </p>
          <p>
            Gerne erstellen wir Ihnen ein unverbindliches Angebot basierend auf Ihrem Projekt.
          </p>
        </section>

        <CostSection />
        <CallToAction />
      </main>
      <FooterMenu />
    </>
  );
}
