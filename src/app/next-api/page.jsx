'use client';

import Image from 'next/image';
import styles from '../styles/ApiRoutes.module.css';
import FooterMenu from '../components/Footer';
import CostSection from '../components/CostSection';
import SixStepsSection from '../components/SixStepSection';

export default function ApiRoutesPage() {
  return (
    <>
      <main className={styles.container}>
        <h1 tabIndex={-1}>API-Routen in Next.js – Backend direkt im Frontend</h1>

        <section className={styles.section} aria-label="Was sind API-Routen?">
          <div className={styles.text}>
            <h2>Was sind API-Routen?</h2>
            <p>
              In Next.js kannst du eigene <strong>API-Endpunkte</strong> erstellen – direkt im Projekt,
              ohne separates Backend. Diese laufen als serverless Funktionen und verhalten sich wie ein Mini-Backend.
            </p>
            <p>
              Jeder File in <code>/app/api/</code> oder <code>/pages/api/</code> wird zu einer echten REST-Route.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team1.webp"
              alt="Schema zur API-Routen-Architektur in Next.js"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={styles.img}
              loading="eager"
            />
          </div>
        </section>

        <section className={styles.sectionAlt} aria-label="Beispiel einer API-Route">
          <div className={styles.image}>
            <Image
              src="/images/team5.webp"
              alt="Code-Beispiel: Next.js API Handler"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={styles.img}
              loading="lazy"
            />
          </div>
          <div className={styles.text}>
            <h2>Beispiel für eine API-Route</h2>
            <pre className={styles.code} aria-label="Code-Beispiel einer API-Route in Next.js">
{`// app/api/hello/route.js (ab Next 13)
export async function GET(request) {
  return Response.json({ message: 'Hallo aus der API!' });
}`}
            </pre>
            <p>
              Dieser Endpunkt ist unter <code>/api/hello</code> aufrufbar – ideal für Formulare,
              Datenabfragen oder Kontaktversand.
            </p>
          </div>
        </section>

        <section className={styles.methods} aria-label="Mögliche Anwendungsfälle für API-Routen">
          <h2>Mögliche Anwendungsfälle</h2>
          <ul>
            <li>Formularverarbeitung (Kontakt, Newsletter, Feedback)</li>
            <li>Datenbankabfragen (z. B. Prisma, MongoDB)</li>
            <li>Authentifizierung (Login, Tokens, Sessions)</li>
            <li>Kommunikation mit externen APIs (z. B. OpenAI, Stripe)</li>
          </ul>
        </section>

        <section className={styles.section} aria-label="Routenstruktur in Next.js">
          <div className={styles.text}>
            <h2>Routenstruktur in Next.js</h2>
            <p>
              In der <code>app/</code>-Struktur nutzt du:
              <br />
              <code>app/api/route.js</code> oder <code>app/api/foo/route.js</code>
            </p>
            <p>
              In älteren Projekten mit <code>pages/</code>-Struktur:
              <br />
              <code>pages/api/foo.js</code>
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/team7.webp"
              alt="Ordnerstruktur für API-Routen in Next.js"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={styles.img}
              loading="lazy"
            />
          </div>
        </section>

        <CostSection />
        <SixStepsSection />
      </main>

      <FooterMenu />
    </>
  );
}
