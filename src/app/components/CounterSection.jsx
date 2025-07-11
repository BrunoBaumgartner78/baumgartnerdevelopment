'use client'

import { useRef, useState, useEffect, useContext } from 'react'
import styles from '../styles/CounterSection.module.css'
import AnimatedCounter from './AnimatedCounter'
import { ThemeContext } from '../../context/ThemeContext';
import Image from 'next/image'


export default function CounterSection() {
  const { isDark } = useContext(ThemeContext)  // Dark Mode aus Context holen

  const sectionRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          observer.disconnect() // Nur einmal triggern
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`${styles.counterSection}`}
      id="counter"
    >
<div className={styles.imageContainer}>
      <Image
        src="/images/agency-team.webp"
        alt="Professionelles Webdesign-Team in Solothurn"
        width={800}
        height={500}
        priority={false} // falls ganz oben auf der Seite: auf true setzen
        className={styles.responsiveImage}
        quality={85}
        placeholder="blur"
        blurDataURL="/images/agency-team.webp" // optional: kleine Blur-Version
      />
    </div>

      <div className={styles.contentWrapper}>
        <div className={styles.counterWrapper}>
          <div className={styles.counterBox}>
            <h3>Webseiten erstellt</h3>
            <AnimatedCounter value={98} start={startCount} />
          </div>
          <div className={styles.counterBox}>
            <h3>Zufriedenheit</h3>
            <div className={styles.counterNumberWrapper}>
              <AnimatedCounter value={100} start={startCount} />
              <span className={styles.percent}>%</span>
            </div>
          </div>
          <div className={styles.counterBox}>
            <h3>Team</h3>
            <AnimatedCounter value={2} start={startCount} />
          </div>
        </div>

        <div className={styles.textBox}>
          <h2>WordPress Dienstleistungen</h2>
          <p>
            Wir bieten Ihnen maßgeschneiderte WordPress-Lösungen, von Design über Entwicklung bis
            hin zur Wartung, um Ihre Online-Präsenz erfolgreich zu gestalten. Ob ausgesuchtes Template, oder
            maßgeschneiderte Lösung für höchste Performance in SEO. Wir sind Ihre Spezialisten für das beliebteste CMS der Welt, WordPress.
            Wir arbeiten seit 2018 mit WordPress und haben schon unzählige Projekte mit WordPress umgesetzt.
            Ob Optimierung Ihrer Seite oder der Neuauftritt mit WordPress ist sicher immer eine Alternative. Ihre Vorteile sind 
            dabei das intuitive Backend und die Möglichkeit selbständig und mit wenig Aufwand News zu posten und 
            Artikel zu verfassen. WordPress gilt als sicher, zukunftsorientiert und flexibel.
          </p>
        </div>
      </div>
    </section>
  )
}
