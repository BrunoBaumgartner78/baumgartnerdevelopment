'use client';

import FooterMenu from '../components/Footer';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';
import PrototypesTechnologiesSection from '../components/PrototypeTechnologiesSection';
import styles from '../styles/Prototyping.module.css';
import Image from 'next/image';

export default function Prototyping() {
  return (
    <>
    <main className={styles.container}>
      <h1>Prototyping – Ideen sichtbar machen</h1>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Vom Konzept zum klickbaren Prototyp</h2>
          <p>
            Prototyping ist ein zentraler Bestandteil des UX-Prozesses. Es erlaubt uns, Ideen
            schnell zu visualisieren, zu testen und weiterzuentwickeln. Ob Low-Fidelity Skizze
            oder High-Fidelity Prototyp – wir gestalten interaktive Entwürfe, die Nutzererlebnisse
            greifbar machen.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/team2.webp"
            alt="Prototyp Skizze"
            width={600}
            height={400}
            className={styles.img}
          />
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.image}>
          <Image
            src="/images/team6.webp"
            alt="Interaktiver Prototyp"
            width={600}
            height={400}
            className={styles.img}
          />
        </div>
        <div className={styles.text}>
          <h2>Prototypen, die überzeugen</h2>
          <p>
            Interaktive Prototypen helfen, Ideen im Team zu kommunizieren und Stakeholder zu
            überzeugen. Sie dienen als Grundlage für Tests und sparen wertvolle Ressourcen in der
            späteren Entwicklung.
          </p>
        </div>
      </section>

      <section className={styles.methods}>
        <h2>Unsere Prototyping-Methoden</h2>
        <ul>
          <li>Low-Fidelity Skizzen (Papier, Whiteboard, Figma Wireframes)</li>
          <li>Interaktive High-Fidelity-Prototypen in Figma & Adobe XD</li>
          <li>Klickbare Abläufe zur Nutzerführung</li>
          <li>Schnelle Iterationen basierend auf Nutzerfeedback</li>
        </ul>
      </section>
      <PrototypesTechnologiesSection />
      <CostSection />
    <SixStepsSection />
    </main>
    <FooterMenu />
    </>
  );
}
