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
    <section className={styles.section}>
      <h2 className={styles.heading}>Tools & Mittel für Wireframes</h2>
      <div className={styles.grid}>
        {wireframeTools.map(({ name, icon: Icon }) => (
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
