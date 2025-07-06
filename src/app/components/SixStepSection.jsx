'use client';

import { useContext } from 'react';
import styles from '../styles/SixStepsSection.module.css';
import { Phone, Mail } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

export default function SixStepsSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`${styles.section}`} id="steps">
      <div className={styles.wrapper}>
        {/* Linke Seite: Schritte */}
        <div className={styles.steps}>
          <h2>So entsteht Ihre Website</h2>
          <ol>
            <li> Erstgespräch & Bedarfsanalyse</li>
            <li> Konzeption & Sitemap</li>
            <li> Webdesign-Entwurf</li>
            <li> Technische Umsetzung mit WordPress oder Next.js</li>
            <li> Feedback & Feinschliff</li>
            <li> Übergabe & Einführung in die Bedienung</li>
          </ol>
        </div>

        {/* Rechte Seite: Kontaktkarten */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <Phone size={28} />
            <div>
              <p>Telefon</p>
              <strong>+41 78 241 72 27</strong>
            </div>
          </div>
          <div className={styles.card}>
            <Mail size={28} />
            <div>
              <p>E-Mail</p>
              <strong>bruno@brainbloom.ch</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
