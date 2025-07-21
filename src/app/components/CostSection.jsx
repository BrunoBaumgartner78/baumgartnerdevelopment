'use client';

import styles from '../styles/CostSection.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function CostSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={`${styles.costSection} ${isDark ? styles.dark : styles.light}`}
      aria-labelledby="cost-title"
      role="region"
    >
      <div className={styles.inner}>
        <h2 id="cost-title">Was kostet Ihre neue Website?</h2>

        <p>
          Bei meinen Webdesign-Projekten profitieren Sie von transparenten Pauschalpreisen –
          ohne versteckte Kosten. So behalten Sie stets die volle Kontrolle über Ihr Budget.
          Eine individuelle WordPress-Website startet ab <strong>1.800 CHF</strong>.
          Sobald ich mehr über Ihr Projekt weiß, erhalten Sie ein maßgeschneidertes Angebot.
        </p>

        <Link
          href="/contact"
          className={styles.ctaButton}
          role="button"
          aria-label="Unverbindlich Kostenvoranschlag für Ihre neue Website anfordern"
        >
          Kostenvoranschlag einholen
        </Link>
      </div>
    </section>
  );
}

