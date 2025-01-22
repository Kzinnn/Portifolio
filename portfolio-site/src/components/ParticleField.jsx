import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 1000 }) => {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colors = useMemo(() => {
    const temp = [];
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const h = i / count;
      color.setHSL(h, 0.9, 0.7);
      temp.push(color.r, color.g, color.b);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { time, factor, speed, x, y, z } = particle;

      time = particle.time += speed / 2;
      const s = Math.cos(time);
      
      dummy.position.set(
        x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10,
        y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10,
        z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
      );
      
      const scale = Math.cos(time) * 0.3 + 0.7;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;

    // Mover a luz em um padrão circular
    if (light.current) {
      const time = state.clock.getElapsedTime();
      light.current.position.x = Math.sin(time * 0.5) * 3;
      light.current.position.y = Math.cos(time * 0.5) * 3;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#ff0080" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial
          color="#fff"
          transparent
          opacity={0.6}
          vertexColors={true}
        />
      </instancedMesh>
    </>
  );
};

export default ParticleField;
