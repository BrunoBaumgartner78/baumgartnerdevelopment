'use client';

import FooterMenu from '../components/Footer';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/Seo.module.css';
import Image from 'next/image';

export default function SeoPage() {
  return (
    <>
      <main className={styles.container}>
        <h1 tabIndex={-1}>SEO in Next.js – Sichtbarkeit, die wirkt</h1>

        <section className={styles.section} aria-label="Suchmaschinenoptimierung für moderne Web-Apps">
          <div className={styles.text}>
            <h2>Suchmaschinen­optimierung für moderne Web-Apps</h2>
            <p>
              Mit Next.js lassen sich SEO-Anforderungen optimal umsetzen. Durch serverseitiges Rendering,
              schnelle Ladezeiten und strukturierte Daten erhöhen wir Ihre Sichtbarkeit nachhaltig – bei
              Google, Bing &amp; Co.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team8.webp"
              alt="Strategie zur Suchmaschinenoptimierung mit Next.js"
              width={600}
              height={400}
              className={styles.img}
              loading="eager"
            />
          </div>
        </section>

        <section className={styles.sectionAlt} aria-label="Technische SEO Umsetzung">
          <div className={styles.image}>
            <Image
              src="/images/team3.webp"
              alt="Technische Umsetzung von SEO-Maßnahmen"
              width={600}
              height={400}
              className={styles.img}
              loading="lazy"
            />
          </div>
          <div className={styles.text}>
            <h2>Technik &amp; Inhalt perfekt abgestimmt</h2>
            <p>
              Wir verbinden technisches SEO mit inhaltlicher Relevanz: von semantischem HTML und Meta-Tags
              über strukturierte Daten bis zu Performance-Optimierung – alles aus einer Hand.
            </p>
          </div>
        </section>

        <section className={styles.methods} aria-label="Unsere SEO-Maßnahmen">
          <h2>Unsere SEO-Maßnahmen</h2>
          <ul>
            <li>Server-side Rendering &amp; statische Optimierung</li>
            <li>Meta-Tags &amp; strukturierte Daten (JSON-LD, OpenGraph)</li>
            <li>Keyword-Strategie &amp; semantische Inhalte</li>
            <li>PageSpeed- &amp; Core Web Vitals Optimierung</li>
            <li>Internes Linking &amp; Sitemap-Automatisierung</li>
          </ul>
        </section>

        <CostSection />
        <SixStepsSection />
      </main>
      <FooterMenu />
    </>
  );
}
