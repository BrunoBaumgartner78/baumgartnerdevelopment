'use client';

import { useState } from 'react';
import styles from '../styles/ContactPage.module.css';
import ParticlesBackground from '../components/ParticlesBackground';
import FooterMenu from '../components/Footer';





export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich.';
    if (!formData.email.trim()) newErrors.email = 'E-Mail ist erforderlich.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-Mail ist ungültig.';
    if (!formData.message.trim()) newErrors.message = 'Bitte Nachricht eingeben.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Senden fehlgeschlagen');

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Fehler beim Senden: ' + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
    <ParticlesBackground />
   
    <main className={styles.container}>
      
      <h1 className="title">Kontaktieren Sie uns</h1>

      {submitted ? (
        <p className={styles.success}>Danke für Ihre Nachricht! Wir melden uns bald.</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby="name-error"
          />
          {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}

          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby="email-error"
          />
          {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}

          <label htmlFor="message">Nachricht:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby="message-error"
          />
          {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'Wird gesendet...' : 'Absenden'}
          </button>
        </form>
      )}
    </main>
   
     </>
  );
}
