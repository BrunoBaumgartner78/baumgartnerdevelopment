import '../styles/FadeInSection.css';
import { useInView } from 'react-intersection-observer';

export function FadeInSection({ children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}
