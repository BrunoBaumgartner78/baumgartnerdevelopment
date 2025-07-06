'use client';

import styles from '../styles/ServicesSection.module.css';
import {
  FaMobileAlt,
  FaPencilRuler,
  FaFont,
  FaCogs,
  FaPalette,
  FaPaintBrush,
  FaLayerGroup,
  FaMagic,
} from 'react-icons/fa';

const webdesignServices = [
  { title: 'Responsive Design', description: 'Optimale Darstellung auf allen Geräten – vom Smartphone bis zum Desktop.', icon: FaMobileAlt },
  { title: 'Interaction Design', description: 'Intuitive und ansprechende Nutzerinteraktionen für ein tolles Erlebnis.', icon: FaPencilRuler },
  { title: 'Barrierefreiheit', description: 'Zugängliches Design, das allen Nutzer*innen gerecht wird.', icon: FaFont },
  { title: 'Design Systeme', description: 'Konsistente Gestaltung mit wiederverwendbaren Komponenten.', icon: FaCogs },
  { title: 'Farbkonzepte', description: 'Passende Farbwelten, die Ihre Marke perfekt repräsentieren.', icon: FaPalette },
  { title: 'Kreative Gestaltung', description: 'Individuelle Designs, die auffallen und begeistern.', icon: FaPaintBrush },
  { title: 'Modulares Layout', description: 'Flexibles Design mit modularen Bausteinen für einfache Erweiterungen.', icon: FaLayerGroup },
  { title: 'Visuelle Effekte', description: 'Ansprechende Animationen und Übergänge für ein lebendiges Nutzererlebnis.', icon: FaMagic },
];

export default function WebdesignSection() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Webdesign Leistungen</h2>
      <p className={styles.sectionIntro}>
        Maßgeschneiderte Webdesign-Lösungen, die Ihre Zielgruppe ansprechen und Ihre Marke stärken.
      </p>
      <div className={styles.cards}>
        {webdesignServices.map(({ title, description, icon: Icon }, i) => (
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
