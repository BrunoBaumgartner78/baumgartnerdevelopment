'use client';

import { useRef, useState, useEffect, useContext } from 'react';
import styles from '../styles/CounterSection.module.css';
import AnimatedCounter from './AnimatedCounter';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image';

export default function CounterSection() {
  const { isDark } = useContext(ThemeContext);

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Nur einmal triggern
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="counter"
      className={`${styles.counterSection} ${isDark ? styles.dark : styles.light}`}
      aria-labelledby="counter-title"
      role="region"
    >
      <div className={styles.imageContainer}>
        <Image
          src="/images/agency-team.webp"
          alt="Professionelles Webdesign-Team in Solothurn"
          width={800}
          height={500}
          priority={false}
          className={styles.responsiveImage}
          quality={85}
          placeholder="blur"
          blurDataURL="/images/agency-team.webp"
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.counterWrapper} role="list" aria-label="Erfolgskennzahlen">
          <div className={styles.counterBox} role="listitem">
            <h3>Webseiten erstellt</h3>
            <AnimatedCounter value={98} start={startCount} label="erstellte Webseiten" />
          </div>

          <div className={styles.counterBox} role="listitem">
            <h3>Zufriedenheit</h3>
            <div className={styles.counterNumberWrapper}>
              <AnimatedCounter value={100} start={startCount} label="Prozent Zufriedenheit" />
              <span className={styles.percent} aria-hidden="true">%</span>
            </div>
          </div>

          <div className={styles.counterBox} role="listitem">
            <h3>Team</h3>
            <AnimatedCounter value={2} start={startCount} label="Teammitglieder" />
          </div>
        </div>

        <div className={styles.textBox}>
          <h2 id="counter-title">WordPress Dienstleistungen</h2>
          <p>
            Wir bieten Ihnen maßgeschneiderte WordPress-Lösungen, von Design über Entwicklung bis
            hin zur Wartung, um Ihre Online-Präsenz erfolgreich zu gestalten. Ob ausgesuchtes Template, oder
            maßgeschneiderte Lösung für höchste Performance in SEO. Wir sind Ihre Spezialisten für das beliebteste CMS der Welt, WordPress.
            Wir arbeiten seit 2018 mit WordPress und haben schon unzählige Projekte mit WordPress umgesetzt.
            Ob Optimierung Ihrer Seite oder der Neuauftritt mit WordPress ist sicher immer eine Alternative. Ihre Vorteile sind 
            dabei das intuitive Backend und die Möglichkeit selbständig und mit wenig Aufwand News zu posten und 
            Artikel zu verfassen. WordPress gilt als sicher, zukunftsorientiert und flexibel.
          </p>
        </div>
      </div>
    </section>
  );
}
