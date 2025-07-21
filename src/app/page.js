'use client';

import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FadeInSection } from './components/FadeInSection';
import ScrollIndicator from './components/ScrollIndicator';
import ServicesSection from './components/ServiceSection';
import NextJsSection from './components/NextJsSection';
import WebdesignSection from './components/WebdesignSection';
import CounterSection from './components/CounterSection';
import NextJsImageSection from './components/NextJsImageSection';
import WebdesignImageSection from './components/WebdesignImageSection';
import CostSection from './components/CostSection';
import SixStepsSection from './components/SixStepSection';
import FaqSection from './components/FaqSection';
import FooterMenu from './components/Footer';
import TechnologiesSection from './components/TechnologieSection';
import AboutSection from './components/AboutSection';
import Home from './components/Home';
import Image from 'next/image';
import './styles/Index.module.css';
import './globals.css';
import styles from './styles/Index.module.css';
import HomeContent from './components/HomeContent';
import dynamic from 'next/dynamic';

// Lazy load ThreeDScene (nur clientseitig)
const LazyThreeDScene = dynamic(() => import('./components/ThreeDScene'), {
  ssr: false,
  loading: () => <p aria-live="polite">Lade 3D Modell...</p>,
});

export default function HomePage() {
  const { isDark } = useContext(ThemeContext);
  const [loadModel, setLoadModel] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadModel(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skiplink für Tastaturnutzer */}
      <a href="#main-content" className="skip-link">Zum Inhalt springen</a>

      <main
        id="main-content"
        className={`page-wrapper ${isDark ? 'dark' : 'light'}`}
        role="main"
        aria-label="Hauptinhalt"
      >
        {/* Hero Section */}
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <FadeInSection>
            <div className="text-center">
              <h1 id="hero-title" className="main-title">
                Baumgartner Design &amp; Development
              </h1>

              <div className="flex justify-center items-center gap-2">
                <Image
                  className="swiss"
                  src="/images/switzerland.webp"
                  alt="Schweizer Qualität im Webdesign"
                  width={40}
                  height={40}
                  priority
                />
                <p className="subtitle">
                  Professionelles Webdesign und moderne Entwicklung made in Switzerland
                </p>
              </div>

              <div className="button-group" role="navigation" aria-label="Primäre Aktionen">
                <a href="#contact" className="btn btn-primary" role="button">
                  Kontakt
                </a>
                <a href="#about-team" className="btn btn-secondary" role="button">
                  Über das Team
                </a>
              </div>

              <ScrollIndicator />
            </div>
          </FadeInSection>
        </section>

        {/* Projekte + 3D Modell */}
        <section
          ref={ref}
          className="projects-section"
          id="projects"
          aria-labelledby="projects-title"
          style={{ minHeight: '600px' }}
        >
          <h2 id="projects-title" className="sr-only">3D Projekte</h2>
          {loadModel ? (
            <LazyThreeDScene aria-label="Interaktive 3D Szene" />
          ) : (
            <p aria-live="polite">Scrollen Sie, um das 3D Modell zu laden...</p>
          )}
        </section>

        <HomeContent isDark={isDark} />

        <FadeInSection>
          <Home />
        </FadeInSection>
        <ServicesSection isDark={isDark} />
        <CounterSection isDark={isDark} />
        <NextJsSection isDark={isDark} />
        <NextJsImageSection isDark={isDark} />
        <WebdesignSection isDark={isDark} />
        <WebdesignImageSection isDark={isDark} />
        <CostSection isDark={isDark} />
        <SixStepsSection isDark={isDark} />

        {/* About Team */}
        <section className="about-section" id="about-team" aria-labelledby="about-title">
          <h2 id="about-title" className="sr-only">Über unser Team</h2>
          <FadeInSection>
            <Image
              src="/images/team.webp"
              alt="Unser Team bei Baumgartner Design & Development"
              width={800}
              height={400}
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="/images/team.webp"
              className={styles.responsiveImage}
            />
          </FadeInSection>
          <FadeInSection>
            <AboutSection />
          </FadeInSection>
        </section>

        <FadeInSection>
          <TechnologiesSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <FaqSection isDark={isDark} />
        </FadeInSection>

        {/* Kontakt */}
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title" className="contact">Kontakt</h2>
          <address>
            <p><strong>Bruno Baumgartner</strong></p>
            <p>Baumgartner Design &amp; Development</p>
            <p>
              E-Mail:{' '}
              <a href="mailto:bruno@brainbloom.ch" aria-label="E-Mail an Bruno Baumgartner">
                bruno@brainbloom.ch
              </a>
            </p>
            <p>
              Telefon:{' '}
              <a href="tel:+41782437227" aria-label="Telefonnummer anrufen +41 78 243 72 27">
                +41 78 243 72 27
              </a>
            </p>
          </address>
        </section>

        <FooterMenu isDark={isDark} />
      </main>
    </>
  );
}
