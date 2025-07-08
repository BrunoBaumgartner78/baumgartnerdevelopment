'use client';

import Image from 'next/image';
import styles from '../styles/ResponsiveDesign.module.css';
import FooterMenu from '../components/Footer';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';

export default function ResponsiveDesignPage() {
  return (
    <>
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.text}>
            <h1 className={styles.title}>Responsive Design – Für alle Geräte optimiert</h1>
            <p>
              Ihre Website muss auf jedem Gerät funktionieren – ob Smartphone, Tablet oder Desktop. 
              Wir entwickeln digitale Erlebnisse, die sich flexibel an jedes Endgerät anpassen.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/responsive.webp"
              alt="Responsive Website Darstellung auf verschiedenen Geräten"
              width={600}
              height={400}
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <h2>Warum responsive Design unverzichtbar ist</h2>
        <ul>
          <li><strong>Mobile First:</strong> Über 60% der Nutzer:innen besuchen Websites mobil.</li>
          <li><strong>Google Ranking:</strong> Responsives Design verbessert Ihre Sichtbarkeit in Suchmaschinen.</li>
          <li><strong>Kundenzufriedenheit:</strong> Ein konsistentes Nutzererlebnis auf allen Geräten stärkt das Vertrauen.</li>
          <li><strong>Conversion:</strong> Benutzerfreundlichkeit steigert Ihre Abschlüsse und Kontaktanfragen.</li>
        </ul>
      </section>

      <section className={styles.features}>
        <h2>Unsere Umsetzung</h2>
        <ul>
          <li>Flexibles Grid-System mit CSS Grid & Flexbox</li>
          <li>Mobile-optimierte Navigation</li>
          <li>Optimierte Ladezeiten für Mobilgeräte</li>
          <li>Medienabfragen (Media Queries) für alle Breakpoints</li>
        </ul>
      </section>

      <section className={styles.trust}>
        <h2>Vertrauen Sie auf unsere Expertise</h2>
        <p>
          Mit modernsten Frameworks wie <strong>Tailwind CSS</strong> und <strong>Next.js</strong> 
          sorgen wir dafür, dass Ihre Website in jeder Auflösung überzeugt – funktional, schnell und elegant.
        </p>
        <p>
          Responsive Design ist kein Trend – es ist der Standard.
        </p>
      </section>
      <SixStepsSection />
      <CostSection />

    </main>
    <FooterMenu />
    </>
  );
}
