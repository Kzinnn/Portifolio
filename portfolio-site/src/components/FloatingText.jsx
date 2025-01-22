import { extend } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

extend({ Text3D });

const FloatingText = ({ text, position, color = '#4a0082' }) => {
  const textRef = useRef();
  const [spring, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 2, tension: 170, friction: 26 }
  }));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(time) * 0.1;
      textRef.current.rotation.x = Math.sin(time * 0.3) * 0.03;
      textRef.current.rotation.y = Math.cos(time * 0.2) * 0.03;
    }
  });

  const handlePointerOver = () => {
    api.start({ scale: 1.2 });
  };

  const handlePointerOut = () => {
    api.start({ scale: 1 });
  };

  return (
    <animated.mesh
      ref={textRef}
      position={position}
      scale={spring.scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshPhongMaterial
          color={color}
          specular="#ffffff"
          shininess={100}
          transparent
          opacity={0.9}
        />
      </Text3D>
    </animated.mesh>
  );
};

export default FloatingText;
