'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
