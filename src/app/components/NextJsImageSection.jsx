'use client';

import { useContext } from 'react';
import styles from '../styles/NextJsImageSection.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image'


export default function NextJsImageSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`${styles.nextJsSection}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.textBox}>
          <h2>Next.js Dienstleistungen</h2>
          <p>
            Profitieren Sie von modernster Webtechnologie mit Next.js. Wir entwickeln
            blitzschnelle, serverseitig gerenderte Anwendungen mit höchster SEO-Performance.
            Ob dynamisches Routing, API-Integration oder statische Seiten – Next.js bietet die
            ideale Grundlage für zukunftssichere Webprojekte. Dank modularer Architektur
            realisieren wir performante, wartbare und erweiterbare Anwendungen – abgestimmt
            auf Ihre Anforderungen.
          </p>
        </div>

         <div className={styles.imageContainer}>
      <Image
        src="/images/team4.webp"
        alt="Next.js Entwicklung – modernes Webdesign für KMU"
        width={800}
        height={500}
        quality={85}
        className={styles.responsiveImage}
        placeholder="blur"
        blurDataURL="/images/team4.webp" // optional, siehe unten
        priority={false}
      />
    </div>
      </div>
    </section>
  );
}
