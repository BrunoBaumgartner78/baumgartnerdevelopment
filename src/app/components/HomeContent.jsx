import Image from 'next/image'
import styles from '../styles/HomeContent.module.css'

export default function HomeContent() {
  return (
    <>
      <section className={styles.section} aria-labelledby="section1-title">
        <div className={styles.sectionContent}>
          <div className={styles.text}>
            <h2 id="section1-title" tabIndex={0}>Webdesigner Solothurn gesucht? Wir helfen Ihnen weiter!</h2>
            <p tabIndex={0}>
              Sie möchten eine moderne Website, die Ihre Kunden begeistert und bei Google sichtbar ist?
              Bei Baumgartner Development bekommen Sie professionelle Webdesign-Lösungen, speziell für Schweizer KMU, Coaches und Kreative.
            </p>
          </div>
          <Image
            src="/images/team1.webp"
            alt="Team von Baumgartner Development bei der Arbeit im Büro"
            width={500}
            height={300}
            className={styles.image}
            priority={true} // Wenn wichtig fürs Laden
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="section2-title">
        <div className={styles.sectionContent}>
          <Image
            src="/images/team7.webp"
            alt="Responsive Design auf unterschiedlichen Geräten dargestellt"
            width={500}
            height={300}
            className={styles.image}
            priority={false}
          />
          <div className={styles.text}>
            <h2 id="section2-title" tabIndex={0}>Warum professionelle Websites entscheidend sind</h2>
            <p tabIndex={0}>
              Eine ansprechende Website ist heute oft der erste Kontaktpunkt zu neuen Kunden.
              Viele Unternehmen verlieren potenzielle Aufträge, weil ihre Website veraltet, langsam oder nicht mobilfreundlich ist.
              Wir sorgen dafür, dass Ihre Website überzeugt – optisch, technisch und inhaltlich.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="section3-title">
        <div className={styles.sectionContent}>
          <div className={styles.text}>
            <h2 id="section3-title" tabIndex={0}>Unsere Leistungen für Ihren Erfolg</h2>
            <ul>
              <li tabIndex={0}>Individuelles Design & Entwicklung</li>
              <li tabIndex={0}>Suchmaschinenoptimierung (SEO) für bessere Sichtbarkeit</li>
              <li tabIndex={0}>Responsive Webdesign für alle Endgeräte</li>
              <li tabIndex={0}>Content Management mit Sanity oder WordPress</li>
              <li tabIndex={0}>Support & Wartung aus einer Hand</li>
            </ul>
          </div>
          <Image
            src="/images/team5.webp"
            alt="Symbolbild für professionelle Webdesign-Leistungen"
            width={500}
            height={300}
            className={styles.image}
            priority={false}
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="section4-title">
        <div className={styles.sectionContent}>
          <Image
            src="/images/team6.webp"
            alt="Fragen und Antworten zum Thema Webdesign"
            width={500}
            height={300}
            className={styles.image}
            priority={false}
          />
          <div className={styles.text}>
            <h2 id="section4-title" tabIndex={0}>Häufig gestellte Fragen (FAQ)</h2>

            <article aria-labelledby="faq1-title" tabIndex={0}>
              <h3 id="faq1-title">Wie lange dauert eine Website-Erstellung?</h3>
              <p>Je nach Umfang dauert eine Website meist zwischen 2 und 6 Wochen.</p>
            </article>

            <article aria-labelledby="faq2-title" tabIndex={0}>
              <h3 id="faq2-title">Was kostet eine Website?</h3>
              <p>Die Kosten richten sich nach Ihren Anforderungen. Wir erstellen Ihnen ein individuelles Angebot.</p>
            </article>

            <article aria-labelledby="faq3-title" tabIndex={0}>
              <h3 id="faq3-title">Kann ich meine Website später selbst pflegen?</h3>
              <p>Ja, wir setzen auf benutzerfreundliche CMS-Systeme, damit Sie Inhalte einfach selbst verwalten können.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
