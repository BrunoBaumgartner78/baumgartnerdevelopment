'use client';

import { motion } from 'framer-motion';
import styles from '../styles/UXTechnologiesSection.module.css';
import { FaPencilAlt, FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd } from 'react-icons/si';

const uxTools = [
  { name: 'Bleistift & Papier', icon: FaPencilAlt },
  { name: 'Figma', icon: FaFigma },
  { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
  { name: 'Adobe XD', icon: SiAdobexd },
];

export default function UXTechnologiesSection() {
  return (
    <section className={styles.section} aria-labelledby="ux-tools-heading">
      <h2 id="ux-tools-heading" className={styles.heading}>Unsere UX-Werkzeuge</h2>
      <div className={styles.grid} role="list">
        {uxTools.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={styles.card}
            role="listitem"
          >
            <Icon
              className={styles.icon}
              aria-hidden="true"
              focusable="false"
              // Optional: Farbanpassung z.B. style={{ color: '#000' }} je nach Hintergrund
            />
            <p className={styles.label}>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
