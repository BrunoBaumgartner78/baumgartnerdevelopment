'use client';

import styles from '../styles/AGB.module.css';
import FooterMenu from '../components/Footer';

export default function AGBPage() {
  return (
    <>
      <main className={styles.container} aria-label="Allgemeine Geschäftsbedingungen">
        <h1 tabIndex={0}>Allgemeine Geschäftsbedingungen (AGB)</h1>

        <section className={styles.section}>
          <h2 tabIndex={0}>1. Geltungsbereich</h2>
          <p>
            Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und Leistungen zwischen
            Baumgartner Development (nachfolgend „Anbieter“) und seinen Kund:innen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>2. Vertragsgegenstand</h2>
          <p>
            Gegenstand des Vertrags ist die Erbringung von Leistungen im Bereich Webdesign, UX-Strategie, Entwicklung und weiteren digitalen Dienstleistungen.
            Die Einzelheiten ergeben sich aus dem jeweiligen Angebot.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>3. Vertragsschluss</h2>
          <p>
            Ein Vertrag kommt zustande, sobald ein vom Anbieter unterbreitetes Angebot vom Kunden schriftlich oder elektronisch bestätigt wurde.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>4. Preise & Zahlungsbedingungen</h2>
          <p>
            Es gelten die im Angebot genannten Preise. Die Zahlung ist innerhalb von 14 Tagen nach Rechnungserhalt ohne Abzug fällig,
            sofern keine andere Zahlungsfrist vereinbart wurde.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>5. Mitwirkungspflicht</h2>
          <p>
            Der Kunde verpflichtet sich, alle zur Durchführung des Auftrags notwendigen Informationen und Materialien rechtzeitig bereitzustellen.
            Verzögerungen aufgrund fehlender Mitwirkung gehen nicht zu Lasten des Anbieters.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>6. Eigentumsvorbehalt & Nutzungsrechte</h2>
          <p>
            Die gelieferten Leistungen bleiben bis zur vollständigen Bezahlung Eigentum des Anbieters.
            Nutzungsrechte werden dem Kunden erst nach vollständiger Zahlung eingeräumt.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>7. Gewährleistung & Haftung</h2>
          <p>
            Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit. Für technische Probleme, die außerhalb seines Einflussbereichs liegen,
            übernimmt der Anbieter keine Haftung.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>8. Vertraulichkeit</h2>
          <p>
            Beide Parteien verpflichten sich, alle vertraulichen Informationen, die im Rahmen des Projekts bekannt werden, vertraulich zu behandeln.
          </p>
        </section>

        <section className={styles.section}>
          <h2 tabIndex={0}>9. Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Schweiz. Gerichtsstand ist Zürich, sofern nicht zwingendes Recht etwas anderes vorschreibt.
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.
          </p>
        </section>
      </main>
      <FooterMenu />
    </>
  );
}
