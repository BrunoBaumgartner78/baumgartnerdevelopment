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
import Image from 'next/image';

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
    <main className={isDark ? 'dark' : 'light'} aria-label="Über unser Team">
      <section className={`${styles.teamSection} section`} id="about-team">
        <FadeInSection>
          <h2 tabIndex={0}>Unser Team</h2>
          <p className={styles.subtitle}>
            Kreativ, erfahren und voller Leidenschaft – wir bringen Ihre Vision zum Leben.
          </p>
        </FadeInSection>

        <div className={styles.teamGrid} role="list">
          {teamMembers.map((member) => (
            <FadeInSection key={member.name}>
              <article
                className={styles.card}
                role="listitem"
                aria-label={`${member.name}, ${member.role}`}
                tabIndex={0}
              >
                <figure>
                  <Image
                    src={member.img}
                    alt={`Portrait von ${member.name}, ${member.role}`}
                    width={200}
                    height={200}
                    className={styles.avatar}
                    quality={90}
                  />
                  <figcaption className="sr-only">{`${member.name}, ${member.role}`}</figcaption>
                </figure>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.description}>{member.description}</p>
              </article>
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
