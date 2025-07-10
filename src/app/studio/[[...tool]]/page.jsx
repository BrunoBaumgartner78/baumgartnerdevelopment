'use client';

import dynamic from 'next/dynamic';

// Sanity Studio wird nur im Browser geladen
const Studio = dynamic(() => import('../../../sanity/studio'), {
  ssr: false,
});

export default function StudiePage() {
  return <Studio />;
}
