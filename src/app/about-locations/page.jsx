'use client';

import styles from '../styles/AboutLocation.module.css'; // Passe Pfad ggf. an
import FooterMenu from '../components/Footer';
import SixStepsSection from '../components/SixStepSection';
import Image from 'next/image';

export default function AboutLocation() {
  return (
    <>
      <div className={styles.container}>
       <section className={styles.about}>
  <h1>Über Unseren Standort</h1>
  <p>
    Wir sind ein kreatives Digitalstudio mit Fokus auf modernes Webdesign, SEO-Performance
    und technische Exzellenz. Unser Ziel ist es, für unsere Kund:innen nachhaltige und
    wirkungsvolle Online-Auftritte zu entwickeln – transparent, agil und effizient.
  </p>

  <div className={styles.imageWrapper}>
    <Image
  src="/images/teamParis.webp"
  alt="Unser Team in Paris"
  width={800}
  height={500}
   className={styles.aboutImage}
  style={{
    display: 'block',
    margin: '2rem auto',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    color: 'inherit',
     maxWidth: '100%',
    height: 'auto',
  }}
/>

  </div>

  <p>
    Mit Sitz in der Schweiz betreuen wir Kund:innen aus dem gesamten DACH-Raum. Dabei
    setzen wir auf persönliche Beratung, moderne Technologien (wie Next.js & Tailwind CSS)
    und langfristige Partnerschaften.
  </p>
</section>
 <SixStepsSection />

        <section className={styles.location}>
          <h2>Unsere Location</h2>
          <p>
            Du findest uns hier – gerne nach Terminvereinbarung vorbeikommen oder online
            kontaktieren.
          </p>
          <div className={styles.mapWrapper}>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.5277917300255!2d6.937478276201909!3d47.12792497114984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478dfd844f993405%3A0x661e2d7a58b18d8!2sHospice%20Le%20Pr%C3%A9-aux-Boeufs!5e0!3m2!1sen!2sch!4v1751736868672!5m2!1sen!2sch"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </section>
      </div>
     
      <FooterMenu />
    </>
  );
}
