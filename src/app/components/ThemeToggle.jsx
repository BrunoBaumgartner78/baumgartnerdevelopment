'use client';

import { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContext';
import styles from '../styles/ThemeToggle.module.css';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Designmodus wechseln"
      className={styles.themeToggle}
    >
      {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
}

