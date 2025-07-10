import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Webdesign für Schweizer KMU, Coaches & Kreative</h1>
        <p>Individuelle Websites, die Ihre Marke stärken und Kunden gewinnen.</p>
      </section>

      <section className={styles.usp}>
        <h2>Unsere Stärken – Ihre Vorteile</h2>
        <ul>
          <li>✅ Persönliche Beratung direkt in der Schweiz</li>
          <li>✅ Modernes, responsives & SEO-optimiertes Webdesign</li>
          <li>✅ Schnelle Ladezeiten & mobile-first Entwicklung</li>
          <li>✅ Flexible CMS-Lösungen mit Sanity oder WordPress</li>
          <li>✅ Transparente Preise und klare Prozesse</li>
        </ul>
      </section>

      <section className={styles.services}>
        <h2>Unsere Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Webdesign & Entwicklung</h3>
            <p>Maßgeschneiderte Websites, die Ihre Ziele und Ihr Branding perfekt umsetzen.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Suchmaschinen- Optimierung (SEO)</h3>
            <p>Damit Sie bei Google gefunden werden – lokal und überregional.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Content Management</h3>
            <p>Einfache Pflege Ihrer Inhalte mit modernen CMS-Systemen.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Support & Wartung</h3>
            <p>Langfristige Betreuung und schnelle Hilfe bei technischen Fragen.</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Kundenmeinungen</h2>
        <blockquote>
          <p>„Baumgartner Development hat unsere Website neu gestaltet – der Prozess war unkompliziert, professionell und das Ergebnis fantastisch!“</p>
          <footer>– Anna Meier, Coach</footer>
        </blockquote>
        <blockquote>
          <p>„Endlich eine Agentur, die unsere Sprache spricht und genau versteht, was KMU brauchen.“</p>
          <footer>– Markus Müller, Unternehmer</footer>
        </blockquote>
      </section>
    </main>
  )
}
