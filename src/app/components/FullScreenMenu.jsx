'use client';

import { useEffect, useState, useContext, useRef } from 'react';
import styles from '../styles/FullScreenMenu.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const menuItems = [
  {
    title: 'Home',
    links: [
      { text: 'Startseite', href: '/' },
      { text: 'Kontakt', href: '/contact' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { text: 'Unser Team', href: '/about-team' },
      { text: 'Unsere Vision', href: '/about-vision' },
      { text: 'Unsere Leistungen', href: '/about-services' },
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
  const menuRef = useRef(null);

  // Generiere zufällige Kometen
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

  // Escape zum Schließen + Fokus setzen
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    // Fokusfalle
    const focusableElements = menuRef.current.querySelectorAll(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    const trapFocus = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', trapFocus);
    first?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div
      className={styles.fullscreenMenu}
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-title"
      onClick={onClose}
    >
      <span className="sr-only" id="menu-title">
        Vollbild-Menü
      </span>

      {/* Kometenschauer - rein dekorativ */}
      <div className={styles.cometRain} aria-hidden="true">
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

      <div
        className={styles.menuContent}
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
      >
        {menuItems.map((item, index) => (
          <div key={index} className={styles.accordionSection}>
            <button
              className={styles.accordionTitle}
              aria-expanded={openSection === index}
              aria-controls={`section-${index}`}
              onClick={() => toggleSection(index)}
            >
              {item.title}
            </button>
            <ul
              id={`section-${index}`}
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
          className={`${styles.menuCloseButton} ${
            isDark ? styles.dark : styles.light
          }`}
          onClick={onClose}
          aria-label="Menü schließen"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}
