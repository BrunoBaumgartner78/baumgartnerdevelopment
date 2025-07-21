'use client';

import { motion } from 'framer-motion';
import styles from '../styles/WireframesTechnologiesSection.module.css';
import { FaVectorSquare, FaRulerCombined, FaTools } from 'react-icons/fa';
import { SiSketch, SiInvision } from 'react-icons/si';

const wireframeTools = [
  { name: 'Skizzen & Tools', icon: FaTools }, // Ersatz für Balsamiq
  { name: 'Sketch', icon: SiSketch },
  { name: 'InVision', icon: SiInvision },
  { name: 'Vektorwerkzeuge', icon: FaVectorSquare },
  { name: 'Lineal & Messwerkzeuge', icon: FaRulerCombined },
];

export default function WireframesTechnologiesSection() {
  return (
    <section className={styles.section} aria-labelledby="wireframes-tools-heading">
      <h2 id="wireframes-tools-heading" className={styles.heading}>
        Tools & Mittel für Wireframes
      </h2>
      <div className={styles.grid}>
        {wireframeTools.map(({ name, icon: Icon }, index) => (
          <article
            key={name}
            className={styles.card}
            role="region"
            aria-labelledby={`wireframe-tool-title-${index}`}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-hidden="true"
              className={styles.iconWrapper}
            >
              <Icon className={styles.icon} aria-hidden="true" />
            </motion.div>
            <p id={`wireframe-tool-title-${index}`} className={styles.label}>
              {name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
