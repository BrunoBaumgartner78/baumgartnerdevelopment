import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        {/* Nur eine h1 pro Seite, hier für Haupttitel */}
        <h1 tabIndex={0}>Webdesign für Schweizer KMU, Coaches & Kreative</h1>
        <p tabIndex={0}>
          Individuelle Websites, die Ihre Marke stärken und Kunden gewinnen.
        </p>
      </section>

      <section className={styles.usp} aria-label="Unsere Stärken und Vorteile">
        <h2>Unsere Stärken – Ihre Vorteile</h2>
        <ul>
          {/* Emojis durch aria-label ergänzt für Screenreader */}
          <li>
            <span role="img" aria-label="Check">✅</span> Persönliche Beratung direkt in der Schweiz
          </li>
          <li>
            <span role="img" aria-label="Check">✅</span> Modernes, responsives & SEO-optimiertes Webdesign
          </li>
          <li>
            <span role="img" aria-label="Check">✅</span> Schnelle Ladezeiten & mobile-first Entwicklung
          </li>
          <li>
            <span role="img" aria-label="Check">✅</span> Flexible CMS-Lösungen mit Sanity oder WordPress
          </li>
          <li>
            <span role="img" aria-label="Check">✅</span> Transparente Preise und klare Prozesse
          </li>
        </ul>
      </section>

      <section className={styles.services} aria-label="Unsere Services">
        <h2>Unsere Services</h2>
        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard} tabIndex={0} aria-label="Webdesign und Entwicklung">
            <h3>Webdesign & Entwicklung</h3>
            <p>
              Maßgeschneiderte Websites, die Ihre Ziele und Ihr Branding perfekt umsetzen.
            </p>
          </article>
          <article className={styles.serviceCard} tabIndex={0} aria-label="Suchmaschinen-Optimierung">
            <h3>Suchmaschinen- Optimierung (SEO)</h3>
            <p>Damit Sie bei Google gefunden werden – lokal und überregional.</p>
          </article>
          <article className={styles.serviceCard} tabIndex={0} aria-label="Content Management">
            <h3>Content Management</h3>
            <p>Einfache Pflege Ihrer Inhalte mit modernen CMS-Systemen.</p>
          </article>
          <article className={styles.serviceCard} tabIndex={0} aria-label="Support und Wartung">
            <h3>Support & Wartung</h3>
            <p>Langfristige Betreuung und schnelle Hilfe bei technischen Fragen.</p>
          </article>
        </div>
      </section>

      <section className={styles.testimonials} aria-label="Kundenmeinungen">
        <h2>Kunden- Meinungen</h2>
        <blockquote tabIndex={0}>
          <p>
            „Baumgartner Development hat unsere Website neu gestaltet – der Prozess war unkompliziert, professionell und das Ergebnis fantastisch!“
          </p>
          <footer>– Anna Meier, Coach</footer>
        </blockquote>
        <blockquote tabIndex={0}>
          <p>
            „Endlich eine Agentur, die unsere Sprache spricht und genau versteht, was KMU brauchen.“
          </p>
          <footer>– Markus Müller, Unternehmer</footer>
        </blockquote>
      </section>
    </main>
  )
}
