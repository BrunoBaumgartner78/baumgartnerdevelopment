'use client';

import { useContext } from 'react';
import styles from '../styles/FooterMenu.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function FooterMenu() {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer
      className={`${styles.footer} ${isDark ? styles.dark : styles.light}`}
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      <div className={styles.content}>
        <h2 id="footer-title">Baumgartner Design & Development</h2>

        {/* CTA-Bereich */}
        <div className={styles.ctaBox}>
          <h3>Bereit für Ihr nächstes Webprojekt?</h3>
          <p>Jetzt unverbindliche Erstberatung buchen oder direkt anfragen.</p>
          <a
            href="/contact"
            className={styles.ctaButton}
            role="button"
            aria-label="Kostenlose Erstberatung starten"
          >
            Kostenlose Erstberatung starten
          </a>
        </div>

        {/* Navigation */}
        <div className={styles.columns}>

          <nav aria-label="Hauptnavigation">
            <h4>Home</h4>
            <ul>
              <li><a href="/">Zur Startseite</a></li>
              <li><a href="/contact">Kontakt aufnehmen</a></li>
            </ul>
          </nav>

          <nav aria-label="Über uns">
            <h4>About Us</h4>
            <ul>
              <li><a href="/about-team">Unser Team</a></li>
              <li><a href="/about-vision">Unsere Vision</a></li>
              <li><a href="/about-services">Unsere Leistungen</a></li>
              <li><a href="/about-locations">Standorte</a></li>
            </ul>
          </nav>

          <nav aria-label="UX / UI">
            <h4>UX / UI</h4>
            <ul>
              <li><a href="/ux-strategy">UX Strategie</a></li>
              <li><a href="/wireframes">Wireframes</a></li>
              <li><a href="/prototyping">Prototyping</a></li>
              <li><a href="/user-research">User Research</a></li>
            </ul>
          </nav>

          <nav aria-label="Webdesign">
            <h4>Webdesign</h4>
            <ul>
              <li><a href="/responsive-design">Responsive Design</a></li>
              <li><a href="/interaction-design">Interaction Design</a></li>
              <li><a href="/accessibility">Barrierefreiheit</a></li>
              <li><a href="/design-systems">Design Systeme</a></li>
            </ul>
          </nav>

          <nav aria-label="Next.js">
            <h4>Next.js</h4>
            <ul>
              <li><a href="/next-server">Server-Komponenten</a></li>
              <li><a href="/next-api">API-Routen</a></li>
              <li><a href="/next-seo">SEO mit Next.js</a></li>
              <li><a href="/next-routing">Dynamic Routing</a></li>
            </ul>
          </nav>

          <nav aria-label="WordPress">
            <h4>WordPress</h4>
            <ul>
              <li><a href="/wp-themes">Theme Entwicklung</a></li>
              <li><a href="/wp-plugins">Plugins</a></li>
              <li><a href="/wp-woocommerce">WooCommerce</a></li>
              <li><a href="/wp-headless">Headless WP</a></li>
            </ul>
          </nav>
        </div>

        {/* Rechtliches */}
        <nav aria-label="Rechtliche Informationen" className={styles.datenschutz}>
          <ul>
            <li><a href="/agb">AGB</a></li>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/datenschutz">Datenschutz</a></li>
          </ul>
        </nav>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Baumgartner Design & Development</p>
        </div>
      </div>
    </footer>
  );
}
