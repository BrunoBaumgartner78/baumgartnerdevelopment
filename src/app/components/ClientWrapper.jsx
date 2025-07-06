'use client';

import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import FullScreenMenu from '../components/FullScreenMenu';
import { ThemeContext } from '../../context/ThemeContext';

export default function ClientWrapper({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
  }, [setIsDark]);

  useEffect(() => {
    if (isDark === null) return;
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  if (isDark === null) return null;

  return (
    <>
      <Header isDark={isDark} onMenuToggle={toggleMenu} toggleTheme={toggleTheme} />
      {menuOpen && <FullScreenMenu isOpen={menuOpen} onClose={toggleMenu} isDark={isDark} />}
      <main>{children}</main>
    </>
  );
}
