'use client';
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value, duration = 3000, start = false, label = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    // Prüfen, ob Animation reduziert werden soll
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(value); // Direkt setzen, keine Animation
      return;
    }

    let current = 0;
    const increment = value / (duration / 30);
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 30);

    return () => clearInterval(interval);
  }, [start, value, duration]);

  return (
    <p
      className="counterNumber"
      role="status"
      aria-live="polite"
      aria-label={`${count} ${label}`}
    >
      {count}
    </p>
  );
}
