'use client';

import styles from '../styles/WpHeadless.module.css';
import Image from 'next/image';
import FooterMenu from '../components/Footer';
import TechnologiesSection from '../components/TechnologieSection';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';

export default function WordPressHeadlessPage() {
  return (
    <>
      <main className={styles.container}>
        <h1>WordPress als Headless CMS – Modernes Content-Management</h1>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>Was bedeutet Headless WordPress?</h2>
            <p>
              Bei einem Headless-Setup wird WordPress ausschließlich als Backend-CMS verwendet.
              Die Inhalte werden per API (REST oder GraphQL) bereitgestellt und mit modernen Frontend-Frameworks wie Next.js dargestellt –
              für maximale Performance, Sicherheit und Flexibilität.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team8.webp"
              alt="WordPress als Headless CMS"
              width={600}
              height={600}
              className={styles.img}
            />
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.image}>
            <Image
              src="/images/team3.webp"
              alt="API Integration mit Next.js"
              width={600}
              height={500}
              className={styles.img}
              load="lasy"
            />
          </div>
          <div className={styles.text}>
            <h2>Vorteile von Headless WordPress</h2>
            <ul>
              <li><strong>Performance:</strong> Schnelle Ladezeiten dank statischem Frontend (Next.js, Vercel)</li>
              <li><strong>Sicherheit:</strong> WordPress ist vom Frontend entkoppelt und somit besser geschützt</li>
              <li><strong>Flexibles Frontend:</strong> Modernes Design mit React, Tailwind, Framer Motion</li>
              <li><strong>API-Zugriff:</strong> Inhalte via REST API oder WPGraphQL steuerbar</li>
              <li><strong>Multichannel:</strong> Inhalte auf Website, App, Shop oder anderen Kanälen nutzbar</li>
            </ul>
          </div>
        </section>

        <section className={styles.trust}>
          <h2>Warum Baumgartner Development?</h2>
          <p>
            Wir sind auf moderne Webarchitektur spezialisiert und helfen Ihnen, Ihre bestehende WordPress-Seite
            zu einem flexiblen Headless-System umzubauen – inklusive API-Anbindung und Frontend mit Next.js.
          </p>
          <p>
            Ob Migration, Neuaufbau oder hybride Lösung – wir beraten Sie individuell und setzen Ihre Vision technisch sauber um.
          </p>
        </section>

        <TechnologiesSection />
        <CostSection />
        <SixStepsSection />
      </main>
      <FooterMenu />
    </>
  );
}
