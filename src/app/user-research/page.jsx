'use client';

import FooterMenu from '../components/Footer';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/UserResearch.module.css';
import Image from 'next/image';
import CallToAction from '../components/CallToAction';

export default function UserResearchPage() {
  return (
    <>
   
    <main className={styles.container}>
      <h1>User Research – Verstehen, was Ihre Nutzer:innen wirklich brauchen</h1>

      <section className={styles.intro}>
        <div className={styles.text}>
          <p>
            Bei Baumgartner Development stellen wir den Menschen in den Mittelpunkt. Unsere User Research Methoden helfen uns, echte Bedürfnisse, Erwartungen und Schmerzpunkte Ihrer Zielgruppe zu erkennen.
          </p>
          <p>
            Nur wer seine Nutzer:innen versteht, kann nachhaltige, erfolgreiche digitale Produkte entwickeln.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/team7.webp"
            alt="User Research Illustration"
            width={600}
            height={400}
            className={styles.img}
          />
        </div>
      </section>

      <section className={styles.methods}>
        <h2>Unsere Methoden</h2>
        <ul>
          <li><strong>Interviews & Tiefeninterviews:</strong> Wir sprechen direkt mit Ihrer Zielgruppe.</li>
          <li><strong>Online-Umfragen:</strong> Schnell skalierbar & datengestützt.</li>
          <li><strong>Kontextuelle Beobachtungen:</strong> Nutzer:innen im echten Nutzungskontext verstehen.</li>
          <li><strong>Personas & Empathy Maps:</strong> Visualisierung von Nutzertypen & deren Motivation.</li>
          <li><strong>User Journey Mapping:</strong> Den Weg Ihrer Nutzer:innen Schritt für Schritt analysieren.</li>
        </ul>
      </section>

      <section className={styles.benefits}>
        <h2>Warum User Research entscheidend ist</h2>
        <ul>
          <li>Reduziert Fehlentwicklungen und spart Ressourcen</li>
          <li>Verbessert Usability und Akzeptanz</li>
          <li>Schafft echte Differenzierung durch Nutzerzentrierung</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <h2>Mit echtem Nutzerverständnis zum Erfolg</h2>
        <p>
          Gemeinsam erarbeiten wir maßgeschneiderte Research-Strategien für Ihr Projekt.
          Vertrauen Sie auf fundierte Erkenntnisse – nicht auf Bauchgefühl.
        </p>
        <p className={styles.highlight}>
          Baumgartner Development – Ihr Partner für nutzerzentrierte Produktentwicklung.
        </p>
      </section>
      
       <CostSection />
    <SixStepsSection />
               <CallToAction />    
    </main>
    <FooterMenu />
     </>
  );
}
