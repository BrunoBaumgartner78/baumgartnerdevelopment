'use client'
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value, duration = 3000, start = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

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

  return <p className="counterNumber">{count}</p>;
}
