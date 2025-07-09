'use client';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from '../styles/AboutTeam.module.css';
import { FadeInSection } from '../components/FadeInSection';
import TechnologiesSection from '../components/TechnologieSection';
import FooterMenu from '../components/Footer';
import '../globals.css';
import WireframesTechnologiesSection from '../components/WireframeTechnologiesSection';
import PrototypesTechnologiesSection from '../components/PrototypeTechnologiesSection';
import UXTechnologiesSection from '../components/UXTechnologiesSection';
import CallToDownload from '../components/OurClients';


const teamMembers = [
  {
    name: 'Bruno Baumgartner',
    role: 'Gründer & Lead Developer',
    img: '/images/bruno.webp',
    description:
      'Mit über 10 Jahren Erfahrung in Webentwicklung, UX/UI Design und WordPress steht Bruno für visionäre Projekte mit technischer Exzellenz.',
  },
  {
    name: 'ChatGPT',
    role: 'Künstliche Intelligenz & Ideenmaschine',
    img: '/images/ai-avatar.webp',
    description:
      'ChatGPT verbindet psychologisches Feingefühl mit kreativer Gestaltung und sorgt für nutzerzentrierte Interfaces.',
  },
];

export default function AboutTeam() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={isDark ? 'dark' : 'light'}>
      <section className={`${styles.teamSection} section`} id="about-team">
        <FadeInSection>
          <h2>Unser Team</h2>
          <p className={styles.subtitle}>
            Kreativ, erfahren und voller Leidenschaft – wir bringen Ihre Vision zum Leben.
          </p>
        </FadeInSection>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <FadeInSection key={member.name}>
              <div className={styles.card}>
                <img src={member.img} alt={member.name} className={styles.avatar} />
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.description}>{member.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <TechnologiesSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <UXTechnologiesSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <WireframesTechnologiesSection isDark={isDark} />
        </FadeInSection>
        <FadeInSection>
          <PrototypesTechnologiesSection isDark={isDark} />
        </FadeInSection>
         <FadeInSection>
       <CallToDownload isDark={isDark} />
       </FadeInSection>
      </section>
       <FooterMenu isDark={isDark} />
    </main>
  );
}
