import React from "react";
import styles from '../styles/AboutSection.module.css'; // richtig, exakt wie Datei benannt


export default function AboutSection() {
  const scrollToTeam = () => {
    window.location.href = "#team";
  };

  return (
    <div className="about-text">
      <h2 className={styles.title}>Über uns</h2>
      <p>
        Wir sind ein innovatives Webdesign-Studio aus der Schweiz,
        spezialisiert auf futuristische Interfaces, 3D-Webtechnologien und
        interaktive Markenkommunikation. Unser Ziel ist es, einzigartige digitale
        Erlebnisse zu schaffen, die beeindrucken und bleiben.
      </p>
    <a href="/about-team" className="btn btn-primary">Mehr über das Team</a>
    
    </div>
  );
}
