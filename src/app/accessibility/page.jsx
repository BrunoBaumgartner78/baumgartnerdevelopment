'use client';

import CostSection from '../components/CostSection';
import FooterMenu from '../components/Footer';
import SixStepsSection from '../components/SixStepSection';
import styles from '../styles/Accessibility.module.css';
import Image from 'next/image';

export default function BarrierefreiheitPage() {
  return (
    <>
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Barrierefreiheit – Digitale Teilhabe für alle</h1>
        <p>
          Digitale Inklusion beginnt mit Barrierefreiheit. Bei Baumgartner Development setzen wir uns dafür ein, dass Ihre Website für alle Menschen zugänglich ist – unabhängig von körperlichen oder kognitiven Einschränkungen.
        </p>
        <div className={styles.imageWrapper}>
          <div className={`${styles.imageWrapper} ${styles.fullWidthImage}`}>
  <Image
    src="/images/old.webp"
    alt="Symbolbild für digitale Barrierefreiheit"
    width={1600}
    height={600}
    priority
    style={{ width: '100%', height: 'auto' }}
  />
</div>

        </div>
      </section>

      <section className={styles.why}>
        <h2>Warum Barrierefreiheit wichtig ist</h2>
        <ul>
          <li><strong>Rechtliche Anforderungen:</strong> In der Schweiz, EU und weltweit gelten gesetzliche Standards wie WCAG und das Behindertengleichstellungsgesetz.</li>
          <li><strong>Soziale Verantwortung:</strong> Jeder Mensch verdient einen gleichwertigen Zugang zu digitalen Informationen und Angeboten.</li>
          <li><strong>Bessere Usability:</strong> Barrierefreie Websites sind oft auch für alle Nutzer:innen verständlicher und benutzerfreundlicher.</li>
          <li><strong>SEO-Vorteile:</strong> Semantisch korrekte, zugängliche Websites schneiden in Suchmaschinen besser ab.</li>
        </ul>
      </section>

      <section className={styles.services}>
        <h2>Unsere Leistungen für barrierefreie Webentwicklung</h2>
        <ul>
          <li>Analyse und Audit nach WCAG-Standards</li>
          <li>Screenreader- & Tastaturnavigation</li>
          <li>Kontraste & Farbzugänglichkeit</li>
          <li>Alternativtexte, ARIA-Roles & semantisches HTML</li>
          <li>Testen mit echten Nutzer:innen mit Einschränkungen</li>
        </ul>
      </section>

      <section className={styles.commitment}>
        <h2>Unser Versprechen</h2>
        <p>
          Wir glauben, dass echte Innovation niemanden ausschließt. Darum integrieren wir barrierefreies Design von Anfang an – nicht erst zum Schluss.
        </p>
        <p>
          Vertrauen Sie auf unsere Expertise in digitaler Inklusion – für eine Website, die alle erreicht.
        </p>
      </section>
      <CostSection />
      <SixStepsSection />
    </main>
    <FooterMenu />
    </>
  );
}
