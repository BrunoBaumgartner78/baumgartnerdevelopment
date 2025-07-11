import Image from 'next/image'
import styles from '../styles/HomeContent.module.css'

export default function HomeContent() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.text}>
            <h2>Webdesigner Solothurn gesucht? Wir helfen Ihnen weiter!</h2>
            <p>
              Sie möchten eine moderne Website, die Ihre Kunden begeistert und bei Google sichtbar ist?
              Bei Baumgartner Development bekommen Sie professionelle Webdesign-Lösungen, speziell für Schweizer KMU, Coaches und Kreative.
            </p>
          </div>
          <Image
            src="/images/team1.webp"
            alt="Webdesign Solothurn"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <Image
            src="/images/team7.webp"
            alt="Responsive Design"
            width={500}
            height={300}
            className={styles.image}
          />
          <div className={styles.text}>
            <h2>Warum professionelle Websites entscheidend sind</h2>
            <p>
              Eine ansprechende Website ist heute oft der erste Kontaktpunkt zu neuen Kunden.
              Viele Unternehmen verlieren potenzielle Aufträge, weil ihre Website veraltet, langsam oder nicht mobilfreundlich ist.
              Wir sorgen dafür, dass Ihre Website überzeugt – optisch, technisch und inhaltlich.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.text}>
            <h2>Unsere Leistungen für Ihren Erfolg</h2>
            <ul>
              <li>Individuelles Design & Entwicklung</li>
              <li>Suchmaschinenoptimierung (SEO) für bessere Sichtbarkeit</li>
              <li>Responsive Webdesign für alle Endgeräte</li>
              <li>Content Management mit Sanity oder WordPress</li>
              <li>Support & Wartung aus einer Hand</li>
            </ul>
          </div>
          <Image
            src="/images/team5.webp"
            alt="Unsere Leistungen"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <Image
            src="/images/team6.webp"
            alt="Fragen zur Website"
            width={500}
            height={300}
            className={styles.image}
          />
          <div className={styles.text}>
            <h2>Häufig gestellte Fragen (FAQ)</h2>
            <h3>Wie lange dauert eine Website-Erstellung?</h3>
            <p>Je nach Umfang dauert eine Website meist zwischen 2 und 6 Wochen.</p>

            <h3>Was kostet eine Website?</h3>
            <p>Die Kosten richten sich nach Ihren Anforderungen. Wir erstellen Ihnen ein individuelles Angebot.</p>

            <h3>Kann ich meine Website später selbst pflegen?</h3>
            <p>Ja, wir setzen auf benutzerfreundliche CMS-Systeme, damit Sie Inhalte einfach selbst verwalten können.</p>
          </div>
        </div>
      </section>
    </>
  )
}
