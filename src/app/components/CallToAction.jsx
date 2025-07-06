'use client';

import Link from 'next/link';
import styles from '../styles/CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <h2>Verlieren Sie keine Kunden mehr durch schlechte UX</h2>
        <p>
          Wir wissen, wie schmerzhaft es ist, wenn potenzielle Kund:innen abspringen, weil die Website verwirrt oder nicht überzeugt.
          Eine schwache Positionierung kostet täglich Vertrauen, Umsatz und Sichtbarkeit.
        </p>
        <p>
          Es ist Zeit, das zu ändern – mit einer Website, die wirklich wirkt.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Unverbindlich beraten lassen
        </Link>
      </div>
    </section>
  );
}
