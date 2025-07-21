'use client';

import { useContext } from 'react';
import styles from '../styles/SixStepsSection.module.css';
import { Phone, Mail } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

export default function SixStepsSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={styles.section} id="steps" aria-labelledby="steps-title">
      <div className={styles.wrapper}>
        {/* Linke Seite: Schritte */}
        <div className={styles.steps}>
          <h2 id="steps-title">So entsteht Ihre Website</h2>
          <ol aria-label="Sechs Schritte zur Erstellung Ihrer Website">
            <li>Erstgespräch & Bedarfsanalyse</li>
            <li>Konzeption & Sitemap</li>
            <li>Webdesign-Entwurf</li>
            <li>Technische Umsetzung mit WordPress oder Next.js</li>
            <li>Feedback & Feinschliff</li>
            <li>Übergabe & Einführung in die Bedienung</li>
          </ol>
        </div>

        {/* Rechte Seite: Kontaktkarten */}
        <div className={styles.sixcards}>
          <div className={styles.sixcard}>
            <Phone size={28} aria-hidden="true" focusable="false" />
            <div>
              <p>Telefon</p>
              <strong>
                <a href="tel:+41782417227" className={styles.contactLink}>
                  +41 78 241 72 27
                </a>
              </strong>
            </div>
          </div>
          <div className={styles.sixcard}>
            <Mail size={28} aria-hidden="true" focusable="false" />
            <div>
              <p>E-Mail</p>
              <strong>
                <a href="mailto:bruno@brainbloom.ch" className={styles.contactLink}>
                  bruno@brainbloom.ch
                </a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
