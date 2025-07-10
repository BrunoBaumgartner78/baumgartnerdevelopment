'use client';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FadeInSection } from './components/FadeInSection';
import ScrollIndicator from './components/ScrollIndicator';
import Model from './components/ThreeDScene';
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
import './globals.css';
import HomeContent from './components/HomeContent';

export default function HomePage() {
  const { isDark } = useContext(ThemeContext);

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

      <section className="projects-section" id="projects">
        <Model />
      </section>

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
            className="about-image"
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
<FadeInSection>
      <HomeContent isDark={isDark} />
</FadeInSection>
<FadeInSection>
          <Home />
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
