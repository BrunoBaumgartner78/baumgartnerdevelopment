'use client';

import { useEffect, useRef, useState } from 'react';


export function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // nur einmal einblenden
        }
      },
      { threshold: 0.1 } // 10% sichtbar
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
