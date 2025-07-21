'use client';

import { motion, useReducedMotion } from 'framer-motion';
import styles from '../styles/PrototypeTechnologiesSection.module.css';
import { FaRegObjectGroup, FaMousePointer } from 'react-icons/fa';
import { SiAdobexd, SiFigma, SiFramer } from 'react-icons/si';

const prototypeTools = [
  { name: 'Figma', icon: SiFigma },
  { name: 'Adobe XD', icon: SiAdobexd },
  { name: 'Framer', icon: SiFramer },
  { name: 'Klickbare Prototypen', icon: FaMousePointer },
  { name: 'Interaktionen & Animationen', icon: FaRegObjectGroup },
];

export default function PrototypesTechnologiesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="prototyping-tools-title">
      <h2 id="prototyping-tools-title" className={styles.heading}>
        Prototyping Tools & Methoden
      </h2>
      <div className={styles.grid} role="list">
        {prototypeTools.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            role="listitem"
            tabIndex={0} // macht die Cards mit TAB erreichbar – sinnvoll wenn sie Fokus bekommen sollen
            aria-label={name}
            whileHover={
              shouldReduceMotion
                ? {}
                : { scale: 1.2, rotate: 5 }
            }
            transition={{ type: 'spring', stiffness: 300 }}
            className={styles.card}
            onKeyDown={(e) => {
              // Optional: wenn Interaktion vorgesehen, hier z.B. Enter/Space-Handler
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Aktion ausführen, z.B. Modal öffnen o.Ä.
              }
            }}
          >
            <Icon
              className={styles.icon}
              aria-hidden="true"
              focusable="false"
            />
            <p className={styles.label}>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
