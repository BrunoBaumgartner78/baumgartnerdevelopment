'use client';

import dynamic from 'next/dynamic';

// Lazy load der AboutVisionClient-Komponente
const AboutVisionClient = dynamic(() => import('./AboutVisionClient'), {
  ssr: false,
  loading: () => <p>Lade Inhalte…</p>,
});

export default function AboutVisionWrapper() {
  return <AboutVisionClient />;
}
