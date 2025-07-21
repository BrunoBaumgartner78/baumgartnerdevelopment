'use client';

import { useContext } from 'react';
import styles from '../styles/WebdesignImageSection.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image';

export default function WebdesignImageSection({ isDark: isDarkProp }) {
  // Nutze ThemeContext, falls verfügbar – sonst fallback auf Prop
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.isDark ?? isDarkProp ?? false;

  return (
    <section
      className={`${styles.webdesignSection}`}
      aria-labelledby="webdesign-services-heading"
      tabIndex={-1} // Ermöglicht das Fokussieren des Sections via JS für z.B. Skip-Link (optional)
    >
      <div className={styles.contentWrapper}>
        <div className={styles.textBox}>
          <h2 id="webdesign-services-heading">Webdesign Dienstleistungen, kreativ und digital</h2>
          <p>
            Unser Team gestaltet moderne, benutzerfreundliche und responsive Webseiten,
            die Ihre Marke authentisch repräsentieren. Mit Fokus auf Ästhetik, Usability und
            Performance entwickeln wir maßgeschneiderte Designs, die Ihre Zielgruppe begeistern.
            Ob Redesign, Landingpage oder komplettes Corporate Website-Projekt – wir bringen Ihre Vision visuell zum Leben.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/team2.webp"
            alt="Team arbeitet an einem modernen Webdesign-Projekt"
            width={800}
            height={500}
            quality={85}
            className={styles.responsiveImage}
            placeholder="blur"
            blurDataURL="/images/team2.webp"
            // Wichtig: Next.js Bilder sind per Default focusable=false & aria-hidden=false, das ist gut so
          />
        </div>
      </div>
    </section>
  );
}
