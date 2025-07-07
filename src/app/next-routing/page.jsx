'use client';

import CostSection from '../components/CostSection';
import FooterMenu from '../components/Footer';
import SixStepsSection from '../components/SixStepSection';
import TechnologiesSection from '../components/TechnologieSection';
import styles from '../styles/DynamicRouting.module.css';
import Image from 'next/image';

export default function DynamicRoutingPage() {
  return (
    <>
      <main className={styles.container}>
        <h1>Dynamic Routing – Flexible Seitenstrukturen mit Next.js</h1>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Was ist Dynamic Routing?</h2>
            <p>
              Dynamic Routing erlaubt es, Seiten in Next.js dynamisch anhand von URL-Parametern zu erstellen.
              So lassen sich z.B. Produktseiten, Blogposts oder Benutzerprofile automatisch anhand von Daten generieren –
              schnell, skalierbar und suchmaschinenfreundlich.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team1.webp"
              alt="Dynamische Routenstruktur"
              width={600}
              height={400}
              className={styles.img}
            />
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.image}>
            <Image
              src="/images/team2.webp"
              alt="Next.js Routing Beispiel"
              width={600}
              height={400}
              className={styles.img}
              load="lasy"
            />
          </div>
          <div className={styles.text}>
            <h2>Beispielhafte Anwendung</h2>
            <p>
              Erstellen Sie z.B. eine Datei <code>[slug].js</code> oder <code>[id]/page.jsx</code> in Ihrem Pages- oder App-Verzeichnis,
              um Inhalte automatisch per URL zu laden – kombiniert mit <code>getStaticPaths()</code> oder Server-Komponenten.
            </p>
          </div>
        </section>

        <section className={styles.methods}>
          <h2>Ihre Vorteile mit Dynamic Routing</h2>
          <ul>
            <li>Skalierbare Seitenstruktur mit automatischem Seitenaufbau</li>
            <li>SEO-freundlich durch statische Generierung</li>
            <li>Perfekt für Blogs, Shops, Profile und mehr</li>
            <li>Einfach zu integrieren mit fetch, API oder CMS</li>
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
