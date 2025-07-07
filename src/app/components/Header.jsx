'use client'

import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ThemeToggle from './ThemeToggle'
import MenuButton from './MenuButton'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header({ isDark, onMenuToggle, toggleTheme }) {
  const { isDark: ctxDark } = useContext(ThemeContext)

  const menuItems = [
   {
  title: 'Home', submenu: [
    { text: 'Startseite', href: '/' },
    { text: 'Kontakt', href: '/contact' },
    { text: 'Blog', href: '/blog' }
  ]
},

    { title: 'About Us', submenu: [
        { text: 'Unser Team', href: '/about-team' },
        { text: 'Unsere Vision', href: '/about-vision' },
        { text: 'Leistungen', href: '/about-services' },
        { text: 'Standorte', href: '/about-locations' },
      ]
    },
    { title: 'UX / UI', submenu: [
        { text: 'UX-Strategie', href: '/ux-strategy' },
        { text: 'Wireframes', href: '/wireframes' },
        { text: 'Prototyping', href: '/prototyping' },
        { text: 'User Research', href: '/user-research' },
      ]
    },
    { title: 'Webdesign', submenu: [
        { text: 'Responsive', href: '/responsive-design' },
        { text: 'Interaction', href: '/interaction-design' },
        { text: 'Barrierefreiheit', href: '/accessibility' },
        { text: 'Design Systeme', href: '/design-systems' },
      ]
    },
    { title: 'Next.js', submenu: [
        { text: 'Server-Komponenten', href: '/next-server' },
        { text: 'API-Routen', href: '/next-api' },
        { text: 'SEO', href: '/next-seo' },
        { text: 'Dynamic Routing', href: '/next-routing' },
      ]
    },
    { title: 'WordPress', submenu: [
        { text: 'Themes', href: '/wp-themes' },
        { text: 'Plugins', href: '/wp-plugins' },
        { text: 'WooCommerce', href: '/wp-woocommerce' },
        { text: 'Headless', href: '/wp-headless' },
      ]
    },
  ]

  return (
    <header className={styles.header}>
      <h2 className={styles.header_title}>
        <Link href="/">Baumgartner</Link>
      </h2>
<ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      {/* Großes Menü (Desktop) */}
      <nav className={styles.desktopNav}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className={item.submenu ? styles.hasSubmenu : ''}>
              <Link href={item.href || '#'}>{item.title}</Link>
              {item.submenu && (
                <ul className={styles.submenu}>
                  {item.submenu.map((sub) => (
                    <li key={sub.text}>
                      <Link href={sub.href}>{sub.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Buttons */}
      <div className={styles.buttonDiv}>
        
        <MenuButton isDark={isDark} onClick={onMenuToggle} />
      </div>
    </header>
  )
}
