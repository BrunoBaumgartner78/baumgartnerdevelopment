'use client';

import { useContext } from 'react';
import styles from '../styles/WebdesignImageSection.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image'


export default function WebdesignImageSection({ isDark: isDarkProp }) {
  // Nutze ThemeContext, falls verfügbar – sonst fallback auf Prop
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.isDark ?? isDarkProp ?? false;

  return (
    <section
      className={`${styles.webdesignSection} `}
      aria-labelledby="webdesign-services-heading"
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
        width={800}          // Optional: tatsächliche Breite
        height={500}         // Optional: tatsächliche Höhe
        quality={85}         // Kompromiss zwischen Größe und Qualität
        className={styles.responsiveImage}
        placeholder="blur"
        blurDataURL="/images/team2.webp" // Optional, falls vorhanden
      />
        </div>
      </div>
    </section>
  );
}
