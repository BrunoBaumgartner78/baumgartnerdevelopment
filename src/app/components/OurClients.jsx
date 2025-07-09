'use client';

import Link from 'next/link';
import styles from '../styles/CallToDownload.module.css';

export default function CallToDownload() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <h2>Für wen lohnen sich unsere Services – und wer sind unsere Kunden?</h2>

        <p>
          Wir wissen, wie schmerzhaft es ist, wenn potenzielle Kund:innen abspringen, 
          weil die Website verwirrt oder nicht überzeugt.
          Eine schwache Positionierung kostet täglich Vertrauen, Umsatz und Sichtbarkeit.
        </p>

        <p>
          Es ist Zeit, das zu ändern – mit einer Website, die wirklich wirkt.
        </p>

        <p>
          📄 Laden Sie jetzt unseren Vergleich herunter:<br />
          <strong>Baumgartner vs. Website-Builder</strong>
        </p>

        <a
          href="/downloads/Baumgartner-Vergleich.pdf"
          className={styles.ctaButton}
          download
        >
          PDF herunterladen
        </a>

        <p style={{ marginTop: '1.5rem' }}>
          Oder lassen Sie sich unverbindlich beraten:
        </p>

        <Link href="/contact" className={styles.ctaButton}>
          Jetzt Beratung anfragen
        </Link>
      </div>
    </section>
  );
}
