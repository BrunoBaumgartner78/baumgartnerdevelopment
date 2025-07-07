'use client';

import CostSection from '../components/CostSection';
import FooterMenu from '../components/Footer';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/AboutVision.module.css';
import Image from 'next/image';

const werte = [
  { title: 'Vertrauen', text: 'Wir schaffen verlässliche Partnerschaften auf Augenhöhe.' },
  { title: 'Innovation', text: 'Wir setzen auf zukunftsweisende Technologien & kreative Lösungen.' },
  { title: 'Barrierefreiheit', text: 'Wir gestalten nutzerfreundliche Erlebnisse für alle Menschen.' },
  { title: 'Nachhaltigkeit', text: 'Digitale Lösungen mit Verantwortung und Effizienz.' },
];

const meilensteine = [
  '2018 – Gründung durch Bruno Baumgartner',
  '2021 – Fokus auf UX & barrierefreie Webentwicklung',
  '2024 – Einführung von Headless WordPress & Next.js',
  '2025 – Nationale Kunden und KI-basierte Services',
];

export default function AboutVisionClient() {
  return (
    <>
    <div className={styles.container}>
      <section className={styles.visionSection}>
        <h1 className='visionTitle'>Unsere Vision</h1>
        <p>
          Wir glauben an eine inklusive, performante und menschlich gedachte Zukunft des Webs.
          Unsere Vision ist eine digitale Welt, in der Technologie nicht nur funktioniert – sondern inspiriert.
        </p>
        <Image
          src="/images/team7.webp"
          alt="Vision"
          width={600}
          height={200}
          className={styles.image}
          priority // Wichtigstes Bild direkt laden
        />
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textBlock}>
          <h2>Unsere Mission</h2>
          <p>
            Wir helfen Unternehmen, durch strategisches UX Design, moderne Webtechnologie und durchdachte
            Inhalte ihren digitalen Auftritt zu stärken. Dabei setzen wir auf Partnerschaft, Agilität und Qualität.
          </p>
        </div>
        <Image
          src="/images/team1.webp"
          alt="Mission"
          className={styles.sideImage}
          width={400}
          height={350}
          loading="lazy" // Lazy load, da nicht im Viewport Start sichtbar
        />
      </section>

      <section className={styles.splitSectionReverse}>
        <Image
          src="/images/team4.webp"
          alt="Werte"
          className={styles.sideImage}
          width={400}
          height={570}
          loading="lazy"
        />
        <div className={styles.textBlock}>
          <h2>Unsere Werte</h2>
          <ul className={styles.werteList}>
            {werte.map((wert) => (
              <li key={wert.title}>
                <h3>{wert.title}</h3>
                <p>{wert.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.meilensteinSection}>
        <h2>Meilensteine</h2>
        <Image
          src="/images/team8.webp"
          alt="Historie"
          className={styles.image}
          width={400}
          height={200}
          loading="lazy"
        />
        <ul className={styles.timeline}>
          {meilensteine.map((eintrag, index) => (
            <li key={index}>{eintrag}</li>
          ))}
        </ul>
      </section>
    <CostSection />
    <SixStepsSection />
 
    </div>
  <FooterMenu />
    </>
  );
}
