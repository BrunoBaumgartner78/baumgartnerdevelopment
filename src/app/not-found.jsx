'use client';

import Link from 'next/link';
import styles from './styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 – Ooops Seite nicht gefunden</h1>
      <p>Die Seite, die Sie aufrufen wollten, existiert nicht oder wurde verschoben.</p>
      <Link href="/" className={styles.link}>
        Zur Startseite
      </Link>
    </div>
  );
}
