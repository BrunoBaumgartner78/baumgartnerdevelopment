'use client';

import { useContext } from 'react';
import styles from '../styles/ServicesSection.module.css';
import {
  FaPaintBrush,
  FaCode,
  FaWordpressSimple,
  FaSearch,
  FaTools,
  FaShoppingCart,
  FaChartBar,
  FaLaptopCode
} from 'react-icons/fa';

import { ThemeContext } from '../../context/ThemeContext';

const services = [
  {
    title: 'Webdesign',
    description: 'Webdesign, das Ihre Zielgruppe überzeugt',
    icon: FaPaintBrush,
  },
  {
    title: 'Entwicklung',
    description: 'Performante Entwicklung Ihrer Website',
    icon: FaCode,
  },
  {
    title: 'WordPress',
    description: 'Das beliebteste System der Welt',
    icon: FaWordpressSimple,
  },
  {
    title: 'SEO',
    description: 'Ihre Website bei Google ganz oben',
    icon: FaSearch,
  },
  {
    title: 'Wartungsservice',
    description: 'Eine stets aktuelle und sichere Website',
    icon: FaTools,
  },
  {
    title: 'E-Commerce',
    description: 'Verkaufen Sie Ihre Produkte auch online',
    icon: FaShoppingCart,
  },
  {
    title: 'Datenauswertung',
    description: 'Keine Vermutungen, nur knallharte Fakten',
    icon: FaChartBar,
  },
  {
    title: 'Webapplikationen',
    description: 'Haben Sie eine Idee für eine Software ...',
    icon: FaLaptopCode,
  },
];

export default function ServicesSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={styles.servicesSection}
      aria-labelledby="services-title"
    >
      <h2 id="services-title" className={styles.sectionTitle}>
        Leistungen als WordPress Freelancer
      </h2>
      <p className={styles.sectionIntro}>
        Die individuelle Erstellung einer Homepage erfordert viel Wissen aus vielen Bereichen.
        Profitieren Sie von meiner langjährigen Erfahrung und lassen Sie sich Ihre individuelle Website erstellen.
        Kontaktieren Sie mich gerne, um gemeinsam Ihre WordPress-Website umzusetzen.
      </p>
      <div className={styles.cards} role="list">
        {services.map(({ title, description, icon: Icon }, i) => (
          <article key={i} className={styles.card} role="listitem">
            <div className={styles.iconWrapper}>
              <Icon
                className={styles.icon}
                aria-hidden="true"
                focusable="false"
              />
              <div className={styles.iconBackground} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
