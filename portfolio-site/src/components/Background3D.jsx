import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background3D = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      background: 'transparent'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: '#000000' }}
      >
        <color attach="background" args={['#000000']} />
        <Stars
          radius={300}
          depth={50}
          count={1500}
          factor={4}
          saturation={0}
          fade
          speed={0.3}
        />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default Background3D;
