'use client';

import styles from '../styles/NextServer.module.css';
import Image from 'next/image';
import FooterMenu from '../components/Footer';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';

export default function NextServerPage() {
  return (
    <>
      <main className={styles.container}>
        <h1 tabIndex={-1}>Next.js Server-Komponenten – Schnelligkeit &amp; Effizienz</h1>

        <section className={styles.section} aria-label="Was sind Server-Komponenten?">
          <div className={styles.text}>
            <h2>Was sind Server-Komponenten?</h2>
            <p>
              In Next.js ermöglichen <strong>Server-Komponenten</strong> das Rendern von UI auf dem Server
              – direkt beim Request. Dadurch entsteht eine bessere Performance, reduzierte JS-Größe
              und bessere SEO.
            </p>
            <p>
              Server-Komponenten werden <code>ohne JavaScript</code> im Browser ausgeliefert – ideal für
              Inhalte, die sich nicht interaktiv ändern müssen.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team1.webp"
              alt="Architektur von Next.js Server-Komponenten"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={styles.img}
              loading="eager"
            />
          </div>
        </section>

        <section className={styles.sectionAlt} aria-label="Vorteile von Server-Komponenten">
          <div className={styles.image}>
            <Image
              src="/images/team2.webp"
              alt="Konzept und Vorteile von Server-Komponenten in Next.js"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className={styles.img}
              loading="lazy"
            />
          </div>
          <div className={styles.text}>
            <h2>Vorteile von Server-Komponenten</h2>
            <ul>
              <li>Bessere Ladezeiten durch weniger JavaScript im Client</li>
              <li>Direkter Zugriff auf Server-Funktionen (z. B. Datenbank, Authentifizierung)</li>
              <li>Perfekt für statische oder datengetriebene Seiten</li>
              <li>Kein Zustand oder Interaktion erforderlich</li>
            </ul>
          </div>
        </section>

        <section className={styles.methods} aria-label="Typische Einsatzbereiche">
          <h2>Typische Einsatzbereiche</h2>
          <ul>
            <li>Artikel, Blogs, Informationsseiten</li>
            <li>Dashboard mit Server-Daten (ohne JavaScript-State)</li>
            <li>Authentifizierte Inhalte über Middleware</li>
            <li>Initiale Ladezeit von Produktlisten</li>
          </ul>
        </section>

        <section className={styles.section} aria-label="Client vs. Server Komponenten in Next.js">
          <div className={styles.text}>
            <h2>Client vs. Server Komponenten</h2>
            <p>
              In Next.js wird eine Datei automatisch als <strong>Server-Komponente</strong> behandelt,
              solange kein <code>'use client'</code> verwendet wird. Du kannst beides kombinieren.
            </p>
            <p>
              <strong>Client-Komponenten</strong> brauchst du z. B. für Animationen, State, Events oder Refs.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team5.webp"
              alt="Vergleich Client- und Server-Komponenten"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={styles.img}
              loading="lazy"
            />
          </div>
        </section>

        <CostSection />
        <SixStepsSection />
      </main>
      <FooterMenu />
    </>
  );
}
