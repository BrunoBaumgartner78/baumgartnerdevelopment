'use client';

import { useContext } from 'react';
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
import { useState, useEffect, useRef } from 'react';



// Lazy load ThreeDScene (kein SSR, also nur clientseitig)
const LazyThreeDScene = dynamic(() => import('./components/ThreeDScene'), {
  ssr: false,
  loading: () => <p>Lade 3D Modell...</p>,
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
    <main className={`page-wrapper ${isDark ? 'dark' : 'light'}`}>
      <section className="hero-section" id="home">
        <FadeInSection>
          <div className="text-center">
            <h1 className="main-title">Baumgartner Design & Development</h1>
            <div className='flex justify-center items-center gap-2'>
              <Image
                className='swiss'
                src="/images/switzerland.webp"
                alt="Schweizer Qualität im Webdesign"
                width={40}
                height={40}
                priority
              />
              <p className="subtitle">Professionelles Webdesign und moderne Entwicklung made in Switzerland</p>
            </div>

            <div className="button-group">
              <a href="#contact" className="btn btn-primary">Kontakt</a>
              <a href="#about-team" className="btn btn-secondary">Über das Team</a>
            </div>

            <ScrollIndicator />
          </div>
        </FadeInSection>
      </section>

      <section ref={ref} className="projects-section" id="projects" style={{ minHeight: '600px' }}>
        {loadModel ? <LazyThreeDScene /> : <p>Scroll down to load 3D model...</p>}
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

      <section className="about-section" id='about-team'>
        <FadeInSection>
           <Image
        src="/images/team.webp"
        alt="Unser Team bei Baumgartner Design & Development"
        width={800}
        height={400}
        quality={85}
        priority={true} // Nur falls das Bild above-the-fold ist
        placeholder="blur"
        blurDataURL="/images/team.webp" // Optional (siehe Hinweis unten)
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

      <section className="contact-section" id="contact">
        <h2 className='contact'>Kontakt</h2>
        <address>
          <p><strong>Bruno Baumgartner</strong></p>
          <p>Baumgartner Design & Development</p>
          <p>E-Mail: <a href="mailto:bruno@brainbloom.ch">bruno@brainbloom.ch</a></p>
          <p>Telefon: <a href="tel:+41782437227">+41 78 243 72 27</a></p>
        </address>
      </section>

      <FooterMenu isDark={isDark} />
    </main>
  );
}
