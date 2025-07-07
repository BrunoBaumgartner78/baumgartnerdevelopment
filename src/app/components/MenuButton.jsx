'use client';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../styles/MenuButton.css';

export default function MenuButton({ onClick }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className={`menu-button ${isDark ? 'dark' : 'light'}`}
      type="button"
      style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke={isDark ? '#ffffff' : '#000000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="menu-button-icon"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}
