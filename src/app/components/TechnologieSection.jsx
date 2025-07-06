'use client';

import { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/TechnologiesSection.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiWordpress,
  SiPhp,
  SiOpenai,
  SiGoogle,        // Google
  SiApollographql, // API (GraphQL Beispiel)
  SiJsonwebtokens, // JSON (JWT steht für JSON Web Token)
  SiGithub,        // Github
  SiDocker,        // Docker für Containerisierung
  SiFirebase,      // Firebase als Backend / Auth
  SiNodedotjs,     // Node.js Backend
  SiExpress,       // Express.js (Node Web Framework)
  SiSass,          // Sass CSS Preprocessor
  SiVercel,        // Vercel Deployment Plattform
} from 'react-icons/si';

const technologies = [
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'PHP', icon: SiPhp },
  { name: 'ChatGPT (OpenAI)', icon: SiOpenai },

  // Neue Technologien:
  { name: 'Google APIs', icon: SiGoogle },
  { name: 'GraphQL API', icon: SiApollographql },
  { name: 'JSON Web Tokens (JWT)', icon: SiJsonwebtokens },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Docker', icon: SiDocker },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Sass', icon: SiSass },
  { name: 'Vercel', icon: SiVercel },
];


export default function TechnologiesSection() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={`${styles.section}`}>
      <h2 className={styles.heading}>Unsere Technologien</h2>

      <div className={styles.grid}>
        {technologies.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={styles.card}
          >
            <Icon className={styles.icon} />
            <p className={styles.label}>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
