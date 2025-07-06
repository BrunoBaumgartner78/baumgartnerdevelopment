'use client';

import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from './Header';
import FullScreenMenu from './FullScreenMenu';
import ScrollProgressBar from './ScrollProgressBar';
import CustomCursor from './CustomCursor.module';

export default function InnerApp({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const { isDark, setIsDark } = useContext(ThemeContext);
  if (isDark === null) return null;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
      <Header isDark={isDark} toggleTheme={toggleTheme} onMenuToggle={toggleMenu} />
      {menuOpen && <FullScreenMenu isOpen={menuOpen} onClose={toggleMenu} isDark={isDark} />}
      <main className={isDark ? 'dark' : 'light'}>{children}</main>
    </>
  );
}
