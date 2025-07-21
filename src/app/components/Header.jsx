'use client'

import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import MenuButton from './MenuButton'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header({ isDark, onMenuToggle, toggleTheme }) {
  const { isDark: ctxDark } = useContext(ThemeContext)
  const [openMenuIndex, setOpenMenuIndex] = useState(null)

  const menuItems = [
    {
      title: 'Home',
      submenu: [
        { text: 'Startseite', href: '/' },
        { text: 'Kontakt', href: '/contact' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'About Us',
      submenu: [
        { text: 'Unser Team', href: '/about-team' },
        { text: 'Unsere Vision', href: '/about-vision' },
        { text: 'Leistungen', href: '/about-services' },
        { text: 'Standorte', href: '/about-locations' },
      ],
    },
    {
      title: 'UX / UI',
      submenu: [
        { text: 'UX-Strategie', href: '/ux-strategy' },
        { text: 'Wireframes', href: '/wireframes' },
        { text: 'Prototyping', href: '/prototyping' },
        { text: 'User Research', href: '/user-research' },
      ],
    },
    {
      title: 'Webdesign',
      submenu: [
        { text: 'Responsive', href: '/responsive-design' },
        { text: 'Interaction', href: '/interaction-design' },
        { text: 'Barrierefreiheit', href: '/accessibility' },
        { text: 'Design Systeme', href: '/design-systems' },
      ],
    },
    {
      title: 'Next.js',
      submenu: [
        { text: 'Server-Komponenten', href: '/next-server' },
        { text: 'API-Routen', href: '/next-api' },
        { text: 'SEO', href: '/next-seo' },
        { text: 'Dynamic Routing', href: '/next-routing' },
      ],
    },
    {
      title: 'WordPress',
      submenu: [
        { text: 'Themes', href: '/wp-themes' },
        { text: 'Plugins', href: '/wp-plugins' },
        { text: 'WooCommerce', href: '/wp-woocommerce' },
        { text: 'Headless', href: '/wp-headless' },
      ],
    },
  ]

  const toggleSubmenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index)
  }

  const closeSubmenu = () => setOpenMenuIndex(null)

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>
        <Link href="/" aria-label="Zur Startseite Baumgartner">
          Baumgartner
        </Link>
      </h1>

      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      {/* Desktop-Navigation */}
      <nav className={styles.desktopNav} aria-label="Hauptnavigation">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.title}
              className={item.submenu ? styles.hasSubmenu : ''}
              onMouseLeave={closeSubmenu} // Menü schließt beim Verlassen
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown' && item.submenu) {
                  e.preventDefault()
                  toggleSubmenu(index)
                }
                if (e.key === 'Escape') {
                  closeSubmenu()
                }
              }}
            >
              <button
                aria-haspopup={item.submenu ? 'true' : undefined}
                aria-expanded={openMenuIndex === index ? 'true' : 'false'}
                aria-controls={item.submenu ? `submenu-${index}` : undefined}
                onClick={() => {
                  if (item.submenu) toggleSubmenu(index)
                }}
                className={styles.menuButton}
                type="button"
              >
                {item.title}
              </button>

              {item.submenu && (
                <ul
                  id={`submenu-${index}`}
                  className={`${styles.submenu} ${
                    openMenuIndex === index ? styles.submenuOpen : ''
                  }`}
                  role="menu"
                  onMouseLeave={closeSubmenu}
                >
                  {item.submenu.map((sub) => (
                    <li key={sub.text} role="none">
                      <Link
                        href={sub.href}
                        role="menuitem"
                        tabIndex={openMenuIndex === index ? 0 : -1}
                        onClick={closeSubmenu} // Schließt Menü nach Klick
                      >
                        {sub.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.buttonDiv}>
        <MenuButton isDark={isDark} onClick={onMenuToggle} aria-label="Menü öffnen" />
      </div>
    </header>
  )
}
