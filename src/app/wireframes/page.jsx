'use client';

import WireframesTechnologiesSection from '../components/WireframeTechnologiesSection';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/Wireframes.module.css';
import Image from 'next/image';
import FooterMenu from '../components/Footer';

export default function Wireframes() {
  return (
    <>
    <main className={styles.container}>
      <h1>Wireframes – Visuelle Struktur für Ihr Projekt</h1>

      <p className={styles.intro}>
        Wireframes sind die Blaupausen Ihrer digitalen Produkte. Sie helfen dabei, Inhalte, Funktionen und Layouts klar zu strukturieren, bevor das Design beginnt.
      </p>

      <section className={styles.what}>
        <h2>Was sind Wireframes?</h2>
        <p>
          Wireframes sind einfache, schematische Darstellungen einer Benutzeroberfläche. Sie zeigen, wo Inhalte, Buttons, Navigationselemente und andere Komponenten platziert werden.
        </p>
      </section>

      <section className={styles.benefits}>
        <h2>Vorteile von Wireframes</h2>
        <ul>
          <li>Klarheit im Projektverlauf und bessere Kommunikation</li>
          <li>Schnelle Iteration und einfache Anpassungen</li>
          <li>Vermeidung von Fehlentwicklungen und Missverständnissen</li>
          <li>Grundlage für Design- und Entwicklungsteams</li>
        </ul>
      </section>

      <section className={styles.examples}>
        <h2>Beispiel-Wireframes</h2>
        <div className={styles.images}>
          <Image src="/images/team4.webp" alt="Baumgartner Development 1" width={400} height={300} />
          <Image src="/images/team2.webp" alt="Baumgartner Development Team" width={400} height={300} />
        </div>
      </section>

      <section className={styles.cta}>
        <p>
          Sie möchten Ihr Projekt mit professionellen Wireframes starten? Kontaktieren Sie uns für eine individuelle Beratung.
        </p>
        <a href="/contact" className={styles.contactButton}>Kontakt aufnehmen</a>
        <WireframesTechnologiesSection />
        <CostSection />
                    <SixStepsSection />
             
      </section>
    </main>
    <FooterMenu />
    </>
  );
}
