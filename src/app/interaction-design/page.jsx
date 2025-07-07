'use client';

import Image from 'next/image';
import styles from '../styles/InteractionDesign.module.css';
import FooterMenu from '../components/Footer';
import { SiX } from 'react-icons/si';
import SixStepsSection from '../components/SixStepSection';
import CostSection from '../components/CostSection';

export default function InteractionDesignPage() {
  return (
    <>
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Interaction Design – Nutzerinteraktion im Fokus</h1>
          <p>
            Interaktionsdesign stellt sicher, dass Ihre Nutzer:innen intuitiv, effektiv und mit Freude mit Ihrer digitalen Anwendung interagieren können.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/wordpress.webp"
            alt="Interaktives Webdesign"
            width={600}
            height={400}
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.principles}>
        <h2>Grundprinzipien des Interaktionsdesigns</h2>
        <ul>
          <li><strong>Konsistenz:</strong> Wiedererkennbare Muster und visuelle Sprache.</li>
          <li><strong>Feedback:</strong> Nutzer erhalten direkte Rückmeldung zu ihren Aktionen.</li>
          <li><strong>Affordanz:</strong> Benutzer verstehen sofort, wie etwas zu bedienen ist.</li>
          <li><strong>Fehlertoleranz:</strong> Systeme erlauben Korrekturen und vermeiden Frustration.</li>
        </ul>
      </section>

      <section className={styles.methods}>
        <h2>Unsere Methoden im Interaktionsdesign</h2>
        <ul>
          <li>Click-Path-Analyse & Touchpoint-Optimierung</li>
          <li>Interaktive Prototypen mit Tools wie Figma & Adobe XD</li>
          <li>Gestaltung klarer Call-to-Actions (CTAs)</li>
          <li>Micro-Interactions für mehr Nutzerbindung</li>
        </ul>
      </section>

      <section className={styles.promise}>
        <h2>Ihr Mehrwert mit Baumgartner Development</h2>
        <p>
          Unsere Interaktionsdesigner sorgen dafür, dass Ihre Nutzer mit Leichtigkeit durch Ihre Website oder App geführt werden – mit Fokus auf Effizienz, Klarheit und Freude.
        </p>
        <p>
          Lassen Sie uns gemeinsam digitale Erlebnisse schaffen, die in Erinnerung bleiben.
        </p>
      </section>
      <CostSection/>
      <SixStepsSection />
     
    </main>
    <FooterMenu />
    </>
  );
}
