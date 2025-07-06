'use client';

import styles from '../styles/Impressum.module.css';
import FooterMenu from '../components/Footer';

export default function ImpressumPage() {
  return (
    <>
      <main className={styles.container}>
        <h1>Impressum</h1>

        <section className={styles.section}>
          <h2>Angaben gemäss § 5 TMG</h2>
          <p>
            Baumgartner Development<br />
            Bruno Baumgartner<br />
            Le pré-aux-Boeufs 222<br />
            2615 Sonvilier<br />
            Schweiz
          </p>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <p>
            Telefon: +41 78 243 72 27<br />
            E-Mail: bruno@brainbloom.ch<br />
            Web: www.baumgartner-development.ch
          </p>
        </section>

        <section className={styles.section}>
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Bruno Baumgartner<br />
            Adresse wie oben
          </p>
        </section>

        <section className={styles.section}>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Urheberrecht</h2>
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
