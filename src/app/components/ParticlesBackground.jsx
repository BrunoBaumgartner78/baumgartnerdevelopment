'use client';

import { useCallback, useContext } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ThemeContext } from '../../context/ThemeContext'; // Pfad ggf. anpassen

export default function ParticlesBackground() {
  const { isDark } = useContext(ThemeContext);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: isDark ? "#0d0d0d" : "#ffffff" } },
        particles: {
          number: { value: 150 },
          links: {
            enable: true,
            color: isDark ? "#00bfff" : "#0070f3",
            distance: 120,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          size: { value: 3 },
          color: { value: isDark ? "#00bfff" : "#0070f3" },
        },
      }}
    />
  );
}
