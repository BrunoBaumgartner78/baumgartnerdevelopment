'use client';

import { useContext } from 'react';
import styles from '../styles/NextJsSection.module.css';
import { FaServer, FaCode, FaSearch, FaRoute } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';

const nextJsServices = [
  {
    title: 'Server-Komponenten',
    description: 'Moderne SSR und statische Generierung für beste Performance',
    icon: FaServer,
  },
  {
    title: 'API-Routen',
    description: 'Flexible Backend-Integration mit API-Routen',
    icon: FaCode,
  },
  {
    title: 'SEO mit Next.js',
    description: 'Optimale Sichtbarkeit und Performance bei Suchmaschinen',
    icon: FaSearch,
  },
  {
    title: 'Dynamic Routing',
    description: 'Dynamische URL-Strukturen einfach umsetzen',
    icon: FaRoute,
  },
  {
    title: 'React Hooks',
    description: 'Effizientes State- und Lifecycle-Management mit Hooks.',
    icon: FaCode,
  },
  {
    title: 'State Management',
    description: 'Zustandsverwaltung mit React Context, Redux oder anderen Tools.',
    icon: FaCode,
  },
  {
    title: 'Middleware',
    description: 'Anpassbare Middleware für Authentifizierung und Routing.',
    icon: FaRoute,
  },
  {
    title: 'Image Optimization',
    description: 'Automatische Bildoptimierung für schnellere Ladezeiten.',
    icon: FaServer,
  },
];

export default function NextJsSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`${styles.nextJsSection} `}>
      <h2 className={styles.sectionTitle}>Next.js Freelancer Leistungen</h2>
      <p className={styles.sectionIntro}>
        Nutzen Sie die Vorteile von Next.js für schnelle, SEO-optimierte Webanwendungen. Erstellen Sie mit mir zusammen eine hochperformante Webseite.
      </p>
      <div className={styles.cards}>
        {nextJsServices.map(({ title, description, icon: Icon }, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} />
              <div className={styles.iconBackground} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
