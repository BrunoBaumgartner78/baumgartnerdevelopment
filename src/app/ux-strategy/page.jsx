'use client';

import UXTechnologiesSection from '../components/UXTechnologiesSection';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/UXStrategy.module.css';
import FooterMenu from '../components/Footer';

export default function UXStrategy() {
  return (
    <>
    <main className={styles.container}>
      <h1>UX-Strategie – Benutzerzentrierte Ansätze für nachhaltigen Erfolg</h1>

      <p className={styles.intro}>
        Willkommen bei Baumgartner Development – Ihrem Experten für durchdachte UX-Strategien. 
        Wir entwickeln maßgeschneiderte Konzepte, die Ihre Benutzer in den Mittelpunkt stellen und nachhaltige Ergebnisse liefern.
      </p>

      <section className={`${styles.section} ${styles.leftImage}`}>
        <div className={styles.text}>
          <h2>Unsere Mission: Herausragende Nutzererlebnisse schaffen</h2>
          <p>
            Mit einer klaren UX-Strategie sorgen wir dafür, dass Ihre digitalen Produkte sowohl funktional als auch ansprechend sind. 
            Unsere benutzerzentrierten Ansätze fördern nicht nur die Zufriedenheit, sondern auch die Loyalität Ihrer Kunden.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/uxui.webp" alt="Unsere Mission" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.rightImage}`}>
        <div className={styles.imageWrapper}>
          <img src="/images/team4.webp" alt="Warum UX-Strategie wichtig ist" />
        </div>
        <div className={styles.text}>
          <h2>Warum eine UX-Strategie wichtig ist</h2>
          <ul>
            <li><strong>Optimierte Nutzererfahrung:</strong> Wir schaffen intuitive Designs, die leicht zu bedienen sind.</li>
            <li><strong>Steigerung der Kundenbindung:</strong> Positive Erlebnisse fördern die langfristige Treue Ihrer Benutzer.</li>
            <li><strong>Effizientere Entwicklung:</strong> Eine klare Strategie spart Zeit und Ressourcen.</li>
            <li><strong>Wettbewerbsvorteil:</strong> Mit einer starken UX-Strategie heben Sie sich von der Konkurrenz ab.</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.leftImage}`}>
        <div className={styles.text}>
          <h2>Unsere Leistungen</h2>
          <ul>
            <li>Entwicklung und Implementierung von UX-Strategien</li>
            <li>Benutzerforschung und Analyse</li>
            <li>Erstellung von Wireframes und Prototypen</li>
            <li>Usability-Tests und Feedback-Integration</li>
            <li>Workshops und Schulungen zu UX-Methoden</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/agency-team.webp" alt="Unsere Leistungen" />
        </div>
      </section>

      <section className={`${styles.section} ${styles.rightImage}`}>
        <div className={styles.imageWrapper}>
          <img src="/images/team5.webp" alt="Warum Baumgartner Development" />
        </div>
        <div className={styles.text}>
          <h2>Warum Baumgartner Development?</h2>
          <p>
            Unser Team kombiniert langjährige Erfahrung mit innovativen Ansätzen, um UX-Strategien zu entwickeln, 
            die Ihre Produkte und Dienstleistungen auf das nächste Level bringen.
          </p>
          <p>
            Lassen Sie uns gemeinsam herausragende Nutzererlebnisse schaffen und Ihre Vision in die Realität umsetzen.
          </p>
          <p className={styles.cta}>
            Kontaktieren Sie uns und starten Sie mit Baumgartner Development in eine neue Ära der Nutzerfreundlichkeit.
          </p>
          <p><strong>Baumgartner Development – Ihr Partner für erfolgreiche UX-Strategien.</strong></p>
        </div>
      </section>
      <UXTechnologiesSection />
       <CostSection />
            <SixStepsSection />
     
    </main>
     <FooterMenu />
    </>
  );
}
