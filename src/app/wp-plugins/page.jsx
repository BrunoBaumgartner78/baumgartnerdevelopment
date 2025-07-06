'use client';

import Image from 'next/image';
import styles from '../styles/WPPlugins.module.css';
import FooterMenu from '../components/Footer';
import CallToAction from '../components/CallToAction';
import TechnologiesSection from '../components/TechnologieSection';

export default function WordPressPluginsPage() {
  return (
    <>
      <main className={styles.container}>
        <h1>WordPress Plugins – Funktionalität nach Maß</h1>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Warum Plugins?</h2>
            <p>
              WordPress-Plugins erweitern den Funktionsumfang Ihrer Website – von kleinen Helfern bis zu komplexen Modulen.
              Ob SEO, Sicherheit, Shop-Funktionen oder Schnittstellen – mit den richtigen Plugins holen Sie mehr aus Ihrem Webauftritt.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team7.webp"
              alt="Plugin-Einbindung WordPress"
              width={600}
              height={400}
              className={styles.img}
            />
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.image}>
            <Image
              src="/images/team8.webp"
              alt="Custom Plugin Entwicklung"
              width={600}
              height={600}
              className={styles.img}
              load="lasy"
            />
          </div>
          <div className={styles.text}>
            <h2>Eigene Plugin-Entwicklung</h2>
            <p>
              Nicht immer erfüllt ein Plugin von der Stange alle Anforderungen. Wir entwickeln maßgeschneiderte Plugins,
              die perfekt zu Ihrem Geschäftsmodell passen – sicher, performant und updatefähig.
            </p>
          </div>
        </section>

        <section className={styles.features}>
          <h2>Unsere Leistungen im Bereich Plugins</h2>
          <ul>
            <li>Beratung bei der Auswahl geeigneter Plugins</li>
            <li>Installation, Einrichtung & Konfiguration</li>
            <li>Entwicklung individueller Plugins nach Ihren Anforderungen</li>
            <li>Anbindung externer Systeme & APIs</li>
            <li>Optimierung von Ladezeiten & Sicherheit</li>
          </ul>
        </section>

        <section className={styles.tech}>
          <h2>Technologie & Codequalität</h2>
          <p>
            Unsere Plugins basieren auf den WordPress Coding Standards und folgen modernen PHP- und JavaScript-Standards.
            Durch saubere Struktur, modulare Bauweise und klare Dokumentation stellen wir Wartbarkeit und Erweiterbarkeit sicher.
          </p>
        </section>

        <TechnologiesSection />
        <CallToAction />
      </main>
      <FooterMenu />
    </>
  );
}
