'use client';

import Image from 'next/image';
import { SiNextdotjs, SiTailwindcss, SiGoogle, SiSanity, SiReact } from 'react-icons/si';
import { MdSupportAgent } from 'react-icons/md';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';
import FooterMenu from '../components/Footer';
import CallToAction from '../components/CallToAction';
import styles from '../styles/ServicesPage.module.css';

const services = [
  {
    title: 'Webdesign & UX',
    description:
      'Nutzerzentrierte Designs mit Wiedererkennungswert und klarer Struktur – maßgeschneidert für Ihre Zielgruppe.',
    icon: <SiReact size={32} aria-hidden="true" focusable="false" />,
    image: '/images/team4.webp',
  },
  {
    title: 'Entwicklung mit Next.js',
    description:
      'Blitzschnelle Ladezeiten & moderne Entwicklung – optimiert für Google Core Web Vitals.',
    icon: <SiNextdotjs size={32} aria-hidden="true" focusable="false" />,
    image: '/images/team1.webp',
  },
  {
    title: 'Tailwind CSS & Responsive Design',
    description:
      'Perfekt auf alle Endgeräte abgestimmt – Mobile First, Barrierefreiheit inklusive.',
    icon: <SiTailwindcss size={32} aria-hidden="true" focusable="false" />,
    image: '/images/team6.webp',
  },
  {
    title: 'Headless CMS (Sanity)',
    description:
      'Volle Inhaltskontrolle für Ihr Team – mit skalierbaren, modularen Komponenten.',
    icon: <SiSanity size={32} aria-hidden="true" focusable="false" />,
    image: '/images/team2.webp',
  },
  {
    title: 'SEO & Google-Optimierung',
    description:
      'Bessere Rankings durch technische Performance, saubere Meta-Daten & UX-Signale.',
    icon: <SiGoogle size={32} aria-hidden="true" focusable="false" />,
    image: '/images/team3.webp',
  },
  {
    title: 'Wartung & Support',
    description:
      'Langfristige Betreuung, Sicherheits-Updates und Performance-Checks für dauerhafte Stabilität.',
    icon: <MdSupportAgent size={32} aria-hidden="true" focusable="false" />,
    image: '/images/team7.webp',
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className={styles.container} aria-label="Unsere Leistungen">
        <section className={styles.hero} aria-labelledby="hero-title">
          <h1 id="hero-title">Unsere Leistungen</h1>
          <p>
            Wir entwickeln digitale Lösungen, die nicht nur modern aussehen, sondern Ihnen auch
            wirklich etwas bringen – mehr Reichweite, mehr Kunden, mehr Erfolg.
          </p>
        </section>

        <section
          className={styles.servicesGrid}
          aria-label="Übersicht unserer Services mit Beschreibung und Bild"
        >
          {services.map((service, index) => (
            <article key={index} className={styles.serviceBox} tabIndex={0} aria-labelledby={`service-title-${index}`} aria-describedby={`service-desc-${index}`}>
              <div className={styles.icon}>{service.icon}</div>
              <Image
                src={service.image}
                alt={`Bild zum Service ${service.title}`}
                width={400}
                height={250}
                className={styles.image}
              />
              <h3 id={`service-title-${index}`}>{service.title}</h3>
              <p id={`service-desc-${index}`}>{service.description}</p>
            </article>
          ))}
        </section>

        <section className={styles.benefits} aria-labelledby="benefits-title">
          <h2 id="benefits-title">Ihre Vorteile auf einen Blick</h2>
          <ul>
            <li>
              <strong>Zeitersparnis:</strong> Sie konzentrieren sich auf Ihr Business – wir übernehmen Technik &amp; Design.
            </li>
            <li>
              <strong>Mehr Leads:</strong> Durch bessere UX und SEO erzielen Sie höhere Conversions.
            </li>
            <li>
              <strong>Weniger Verluste:</strong> Keine Kunden mehr, die wegen schlechter Ladezeiten oder fehlender Optimierung abspringen.
            </li>
            <li>
              <strong>Top-Rankings:</strong> Wir bauen mit Fokus auf SEO-Performance und Sichtbarkeit.
            </li>
            <li>
              <strong>Technisches Know-how:</strong> Neueste Technologien wie Next.js, Tailwind &amp; Headless CMS.
            </li>
          </ul>
        </section>

        <section className={styles.builderProblems} aria-labelledby="problems-title">
          <h2 id="problems-title">Warum Baukästen &amp; Frameworks oft nicht ausreichen</h2>
          <p>
            Viele Website-Builder sehen auf den ersten Blick einfach aus – aber langfristig kosten sie Zeit, Nerven und verlorene Kunden:
          </p>
          <ul>
            <li>
              <strong>Langsame Ladezeiten:</strong> Baukästen laden zu viel ungenutzten Code – schlecht für Google &amp; Nutzer.
            </li>
            <li>
              <strong>Eingeschränkte SEO-Kontrolle:</strong> Meta-Tags, strukturierte Daten oder PageSpeed lassen sich oft nicht präzise optimieren.
            </li>
            <li>
              <strong>Kein individuelles Design:</strong> Templates sehen aus „wie von der Stange“ – wenig Wiedererkennung.
            </li>
            <li>
              <strong>Schlecht skalierbar:</strong> Für wachsende Unternehmen sind Webbuilder schnell eine Sackgasse.
            </li>
            <li>
              <strong>Technische Limitierungen:</strong> APIs, Integrationen oder komplexe Funktionen sind oft nicht realisierbar.
            </li>
          </ul>
        </section>

        <section className={styles.cta} aria-labelledby="cta-title">
          <h2 id="cta-title">Bereit für den nächsten Schritt?</h2>
          <p>
            Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren – mit einer
            Website, die dank SEO für Sie arbeitet.
          </p>
        </section>

        <CostSection />
        <SixStepsSection />
      </main>

      <CallToAction />

      <FooterMenu />
    </>
  );
}
