'use client';

import React, { useContext } from 'react';
import styles from '../styles/FaqSection.module.css';
import { FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
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
];

export default function FaqSection() {
  const { isDark } = useContext(ThemeContext);

  // Hilfsfunktion: Paare aus Frage + Antwort extrahieren
  const faqPairs = [];
  for (let i = 0; i < messages.length; i += 2) {
    faqPairs.push({
      question: messages[i]?.text,
      answer: messages[i + 1]?.text,
    });
  }

  return (
    <section
      className={`${styles.faqSection} ${isDark ? styles.dark : styles.light}`}
      aria-labelledby="faq-title"
      role="region"
    >
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 id="faq-title">Häufig gestellte Fragen</h2>
          <p>
            Hier finden Sie Antworten auf einige der wichtigsten Fragen,
            die uns unsere Kund:innen im Projektverlauf stellen.
          </p>
        </div>

        <div className={styles.chatBox} aria-label="Fragen und Antworten">
          <dl>
            {faqPairs.map(({ question, answer }, index) => (
              <React.Fragment key={index}>
                <dt className={styles.question}>
                  <span className={styles.icon} aria-hidden="true">
                    <FaQuestionCircle />
                  </span>
                  <span className={styles.text}>{question}</span>
                </dt>
                <dd className={styles.answer}>
                  <span className={styles.icon} aria-hidden="true">
                    <FaUserCircle />
                  </span>
                  <span className={styles.text}>{answer}</span>
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
