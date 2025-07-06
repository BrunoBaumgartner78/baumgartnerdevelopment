'use client';

import { useEffect, useState, useContext } from 'react';
import styles from '../styles/FullScreenMenu.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const menuItems = [
  {
    title: 'Home',
    links: [
      { text: 'Startseite', href: '/' },
      { text: 'Contact', href: '/contact' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { text: 'Unser Team', href: '/about-team' },
      { text: 'Unsere Vision', href: '/about-vision' },
      { text: 'Unsere Lesitungen', href: '/about-services' },
      { text: 'Standorte', href: '/about-locations' },
    ],
  },
  {
    title: 'UX / UI',
    links: [
      { text: 'UX Strategie', href: '/ux-strategy' },
      { text: 'Wireframes', href: '/wireframes' },
      { text: 'Prototyping', href: '/prototyping' },
      { text: 'User Research', href: '/user-research' },
    ],
  },
  {
    title: 'Webdesign',
    links: [
      { text: 'Responsive Design', href: '/responsive-design' },
      { text: 'Interaction Design', href: '/interaction-design' },
      { text: 'Barrierefreiheit', href: '/accessibility' },
      { text: 'Design Systeme', href: '/design-systems' },
    ],
  },
  {
    title: 'Next.js',
    links: [
      { text: 'Server-Komponenten', href: '/next-server' },
      { text: 'API-Routen', href: '/next-api' },
      { text: 'SEO mit Next.js', href: '/next-seo' },
      { text: 'Dynamic Routing', href: '/next-routing' },
    ],
  },
  {
    title: 'WordPress',
    links: [
      { text: 'Theme Entwicklung', href: '/wp-themes' },
      { text: 'Plugins', href: '/wp-plugins' },
      { text: 'WooCommerce', href: '/wp-woocommerce' },
      { text: 'Headless WP', href: '/wp-headless' },
    ],
  },
];

export default function FullScreenMenu({ isOpen, onClose }) {

  
  const [openSection, setOpenSection] = useState(null);
  const [comets, setComets] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (!isOpen) return;

    const cometCount = 15;
    const generated = Array.from({ length: cometCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      delay: Math.random() * 10,
    }));
    setComets(generated);
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div
      className={`${styles.fullscreenMenu} `}
      onClick={onClose}
    >
      {/* Kometenschauer */}
      <div className={styles.cometRain}>
        {comets.map((comet) => (
          <div
            key={comet.id}
            className={styles.comet}
            style={{
              top: comet.top,
              left: comet.left,
              animationDelay: `${comet.delay}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.accordionSection}>
            <button
              className={styles.accordionTitle}
              onClick={() => toggleSection(index)}
            >
              {item.title}
            </button>
            <ul
              className={`${styles.accordionList} ${
                openSection === index ? styles.accordionOpen : ''
              }`}
            >
              {item.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={onClose}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button
          className={`${styles.menuCloseButton} ${isDark ? styles.dark : styles.light}`}
          onClick={onClose}
        >
          Schliessen
        </button>
      </div>
    </div>
  );
}
