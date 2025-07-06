'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

function GLBModel() {
  const { scene } = useGLTF('/models/mclaren.glb'); // <-- ersetze Pfad bei Bedarf
  return <primitive object={scene} />;
}

function CameraController({ scrollY }) {
  const { camera } = useThree();

  useFrame(() => {
    if (scrollY < 1000) {
      // 720° horizontal (2 volle Drehungen)
      const angle = (scrollY / 1000) * Math.PI * 2;
      camera.position.x = 5 * Math.sin(angle);
      camera.position.z = 5 * Math.cos(angle);
      camera.position.y = 0;
      camera.lookAt(0, 0, 0);
    } else if (scrollY < 1500) {
      // Zoom in
      const zoomFactor = 5 - ((scrollY - 1000) / 500) * 3; // 5 → 2
      camera.position.z = zoomFactor;
      camera.position.x = 0;
      camera.position.y = 0;
    } else if (scrollY < 1800) {
      // Vertikale Rotation (180°)
    
    } else {
      // Objekt ausblenden (nur Kamera fix)
      camera.position.set(0, 0, 2);
      camera.lookAt(0, 0, 0);
    }

    camera.updateProjectionMatrix();
  });

  return null;
}

export default function ThreeDScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <Canvas style={{ height: '130vh', width: '100%'}}>

      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} />
      <CameraController scrollY={scrollY} />
      <Suspense fallback={null}>
        <GLBModel />
      </Suspense>
    </Canvas>
  );
}
