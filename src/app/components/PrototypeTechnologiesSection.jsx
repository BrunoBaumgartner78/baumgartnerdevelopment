'use client';

import { motion } from 'framer-motion';
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
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Prototyping Tools & Methoden</h2>
      <div className={styles.grid}>
        {prototypeTools.map(({ name, icon: Icon }) => (
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
