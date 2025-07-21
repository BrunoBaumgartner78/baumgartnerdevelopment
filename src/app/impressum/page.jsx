'use client';

import styles from '../styles/Impressum.module.css';
import FooterMenu from '../components/Footer';

export default function ImpressumPage() {
  return (
    <>
      <main className={styles.container}>

        <h1 tabIndex={-1}>Impressum</h1>

        <section className={styles.section} aria-labelledby="section-legal-info">
          <h2 id="section-legal-info">Angaben gemäss § 5 TMG</h2>
          <address>
            Baumgartner Development<br />
            Bruno Baumgartner<br />
            Le pré-aux-Boeufs 222<br />
            2615 Sonvilier<br />
            Schweiz
          </address>
        </section>

        <section className={styles.section} aria-labelledby="section-contact">
          <h2 id="section-contact">Kontakt</h2>
          <p>
            Telefon: <a href="tel:+41782437227" aria-label="Telefonnummer anrufen">+41 78 243 72 27</a><br />
            E-Mail: <a href="mailto:bruno@brainbloom.ch">bruno@brainbloom.ch</a><br />
            Web: <a href="https://www.baumgartner-development.ch" target="_blank" rel="noopener noreferrer">www.baumgartner-development.ch</a>
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-content-responsible">
          <h2 id="section-content-responsible">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <address>
            Bruno Baumgartner<br />
            Adresse wie oben
          </address>
        </section>

        <section className={styles.section} aria-labelledby="section-disclaimer">
          <h2 id="section-disclaimer">Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section-copyright">
          <h2 id="section-copyright">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

      </main>

      <FooterMenu />
    </>
  );
}
