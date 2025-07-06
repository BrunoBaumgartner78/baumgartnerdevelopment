'use client'

import { useContext } from 'react'
import styles from '../styles/FaqSection.module.css'
import { FaQuestionCircle, FaUserCircle } from 'react-icons/fa'
import { ThemeContext } from '../../context/ThemeContext';

const messages = [
  {
    type: 'question',
    text: 'Wie lange dauert die Erstellung einer Website?',
  },
  {
    type: 'answer',
    text: 'In der Regel dauert ein Projekt je nach Umfang zwischen 2–4 Wochen.',
  },
  {
    type: 'question',
    text: 'Was kostet eine typische Website?',
  },
  {
    type: 'answer',
    text: 'Der Startpreis liegt bei 1800 CHF. Eine genaue Einschätzung erhalten Sie nach einem Gespräch.',
  },
  {
    type: 'question',
    text: 'Kann ich meine Website später selbst pflegen?',
  },
  {
    type: 'answer',
    text: 'Ja! Sie erhalten ein intuitives Backend mit WordPress – ideal für eigene Inhalte.',
  },
]

export default function FaqSection() {
  const { isDark } = useContext(ThemeContext)  // Dark Mode aus Context lesen

  return (
    <section className={`${styles.faqSection} `}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Häufig gestellte Fragen</h2>
          <p>
            Hier finden Sie Antworten auf einige der wichtigsten Fragen,
            die uns unsere Kund:innen im Projektverlauf stellen.
          </p>
        </div>

        <div className={styles.chatBox}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${msg.type === 'question' ? styles.question : styles.answer}`}
            >
              <div className={styles.icon}>
                {msg.type === 'question' ? <FaQuestionCircle /> : <FaUserCircle />}
              </div>
              <div className={styles.text}>{msg.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
