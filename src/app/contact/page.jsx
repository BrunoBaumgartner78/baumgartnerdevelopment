'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/ContactPage.module.css';
import ParticlesBackground from '../components/ParticlesBackground';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  
  // Ref auf Erfolgsmeldung für Fokus
  const successRef = useRef(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

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
      setErrors({});
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
        <h1 className="title">Hinterlassen Sie uns eine Notiz</h1>

        {submitted ? (
          <p
            className={styles.success}
            tabIndex={-1}
            role="alert"
            aria-live="polite"
            ref={successRef}
          >
            Danke für Ihre Nachricht! Wir melden uns umgehend!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className={styles.form} aria-describedby="form-instructions">
            <p id="form-instructions" className="sr-only">
              Pflichtfelder sind mit einem Stern (*) gekennzeichnet.
            </p>

            <label htmlFor="name">
              Name: <span aria-hidden="true" style={{color:'red'}}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className={styles.error} role="alert">
                {errors.name}
              </span>
            )}

            <label htmlFor="email">
              E-Mail: <span aria-hidden="true" style={{color:'red'}}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.error} role="alert">
                {errors.email}
              </span>
            )}

            <label htmlFor="message">
              Nachricht: <span aria-hidden="true" style={{color:'red'}}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className={styles.error} role="alert">
                {errors.message}
              </span>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
              aria-disabled={sending}
            >
              {sending ? 'Wird gesendet...' : 'Absenden'}
            </button>
          </form>
        )}
      </main>
    </>
  );
}
