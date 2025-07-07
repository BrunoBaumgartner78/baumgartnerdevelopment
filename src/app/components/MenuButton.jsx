// MenuButton.jsx
'use client';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../styles/MenuButton.css';

export default function MenuButton({ onClick }) {
  const { isDark } = useContext(ThemeContext);

  const logoSrc = isDark ? '/baumgartnerLogo.webp' : '/baumgartnerLogoWeiss.webP';


  return (
    <button
      onClick={onClick}  // <-- Wichtig, dass onClick richtig benutzt wird
      aria-label="Toggle menu"
      className={isDark ? 'menu-button dark' : 'menu-button light'}
      type="button"
    >
      <img src={logoSrc} alt="Menu" className="menu-button-image" />
    </button>
  );
}
