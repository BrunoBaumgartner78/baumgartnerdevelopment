import React from "react";
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section
      className="about-text"
      aria-labelledby="about-title"
      role="region"
    >
      <h2 id="about-title" className={styles.title}>Über uns</h2>
      
      <p>
        Wir sind ein innovatives Webdesign-Studio aus der Schweiz,
        spezialisiert auf futuristische Interfaces, 3D-Webtechnologien und
        interaktive Markenkommunikation. Unser Ziel ist es, einzigartige digitale
        Erlebnisse zu schaffen, die beeindrucken und bleiben.
      </p>

      <a
        href="/about-team"
        className="btn btn-primary"
        role="button"
        aria-label="Mehr über unser Team erfahren"
      >
        Mehr über das Team
      </a>
    </section>
  );
}
