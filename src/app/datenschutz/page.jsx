'use client';

import styles from '../styles/Datenschutz.module.css';
import FooterMenu from '../components/Footer';

export default function DatenschutzPage() {
  return (
    <>
      <main className={styles.container}>

        <h1 tabIndex={-1}>Datenschutzerklärung</h1>

        <section className={styles.section} aria-labelledby="section1-heading">
          <h2 id="section1-heading">1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section2-heading">
          <h2 id="section2-heading">2. Verantwortliche Stelle</h2>
          <h3>Angaben gemäss § 5 TMG</h3>
          <address>
            Baumgartner Development<br />
            Bruno Baumgartner<br />
            Le pré-aux-Boeufs 222<br />
            2615 Sonvilier<br />
            Schweiz
          </address>
        </section>

        <section className={styles.section} aria-labelledby="section3-heading">
          <h2 id="section3-heading">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – z. B. durch Eingabe in ein Kontaktformular.
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. IP-Adresse, Browsertyp, Betriebssystem, Uhrzeit).
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section4-heading">
          <h2 id="section4-heading">4. Zweck der Datenverarbeitung</h2>
          <ul>
            <li>Zurverfügungstellung des Onlineangebotes, seiner Inhalte und Funktionen</li>
            <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
            <li>Sicherheitsmaßnahmen</li>
            <li>Reichweitenmessung & Marketing</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="section5-heading">
          <h2 id="section5-heading">5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="section6-heading">
          <h2 id="section6-heading">6. Kontaktformulare & Kommunikation</h2>
          <p>
            Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section7-heading">
          <h2 id="section7-heading">7. Einsatz von Cookies</h2>
          <p>
            Unsere Website verwendet sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
            Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section8-heading">
          <h2 id="section8-heading">8. Google Analytics & Drittanbieter</h2>
          <p>
            Unsere Website verwendet Google Analytics, einen Webanalysedienst der Google Inc. Die durch Cookies erzeugten Informationen
            über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            Sie können dies durch entsprechende Einstellungen in Ihrem Browser verhindern.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section9-heading">
          <h2 id="section9-heading">9. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit "https://" beginnt.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="section10-heading">
          <h2 id="section10-heading">10. Änderung der Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen anzupassen
            oder Änderungen unserer Leistungen umzusetzen.
          </p>
        </section>
      </main>

      <FooterMenu />
    </>
  );
}
