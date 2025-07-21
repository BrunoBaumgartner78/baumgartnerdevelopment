'use client';

import CostSection from '../components/CostSection';
import FooterMenu from '../components/Footer';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/DesignSystem.module.css';
import Image from 'next/image';

export default function DesignSystemPage() {
  return (
    <>
      <main className={styles.container}>

        <h1 tabIndex={-1}>Design-Systeme – Konsistenz mit System</h1>

        <section className={styles.section} aria-labelledby="what-is-design-system">
          <div className={styles.text}>
            <h2 id="what-is-design-system">Was ist ein Design-System?</h2>
            <p>
              Ein Design-System ist eine Sammlung von wiederverwendbaren Komponenten, Richtlinien,
              Farben, Typografien und UI-Mustern. Es schafft Konsistenz, spart Zeit und fördert
              die Zusammenarbeit zwischen Design und Entwicklung.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team6.webp"
              alt="Design System Komponenten"
              width={600}
              height={400}
              className={styles.img}
              loading="lazy"
            />
          </div>
        </section>

        <section className={styles.sectionAlt} aria-labelledby="why-design-system">
          <div className={styles.image}>
            <Image
              src="/images/team1.webp"
              alt="Design Prinzipien"
              width={600}
              height={400}
              className={styles.img}
              loading="lazy"
            />
          </div>
          <div className={styles.text}>
            <h2 id="why-design-system">Warum ein Design-System?</h2>
            <p>
              Es ermöglicht skalierbare Designs über Projekte hinweg. Durch klar definierte Regeln
              und zentrale Styles wird das Nutzererlebnis konsistent – unabhängig vom Endgerät.
            </p>
          </div>
        </section>

        <section className={styles.methods} aria-labelledby="design-system-components">
          <h2 id="design-system-components">Bestandteile eines Design-Systems</h2>
          <ul>
            <li>Farben- und Typografie-Systeme (Design Tokens)</li>
            <li>UI-Komponenten wie Buttons, Cards, Formulare</li>
            <li>Interaktionsprinzipien (Hover, Fokus, Animationen)</li>
            <li>Dokumentation &amp; Guidelines für Entwickler:innen</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="design-thinking-systems">
          <div className={styles.text}>
            <h2 id="design-thinking-systems">Design Thinking &amp; Systeme</h2>
            <p>
              Design-Systeme ergänzen <strong>Design Thinking</strong>, indem sie schnelle
              Prototypen, Testing und Feedbackzyklen ermöglichen. Sie stärken die Nutzerzentrierung
              und fördern die Iteration.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team5.webp"
              alt="Design Thinking Prozess"
              width={600}
              height={400}
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
