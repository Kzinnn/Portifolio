// Importação de dependências do React e React Three Fiber
import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

// Componente que renderiza uma esfera animada
const AnimatedSphere = () => {
  // Referência para o objeto da esfera
  const sphereRef = useRef()
  
  // Estado para controlar o hover da esfera
  const [hovered, setHovered] = useState(false)
  
  // Acesso ao mouse para controlar a rotação da esfera
  const { mouse } = useThree()
  
  // Animação da escala da esfera com React Spring
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { mass: 1, tension: 170, friction: 26 },
  })

  // Animação da rotação da esfera a cada frame
  useFrame((state) => {
    // Tempo atual
    const time = state.clock.getElapsedTime()
    
    // Rotação suave da esfera com base no tempo e posição do mouse
    sphereRef.current.rotation.x = Math.sin(time * 0.2) * 0.2 + mouse.y * 0.1
    sphereRef.current.rotation.y = time * 0.2 + mouse.x * 0.1
  })

  return (
    // Esfera animada com evento de hover
    <animated.mesh
      ref={sphereRef}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Geometria da esfera */}
      <sphereGeometry args={[2, 64, 64]} />
      
      {/* Material da esfera com efeito de emissão */}
      <meshPhongMaterial
        color="#1a1a1a"
        emissive="#0066cc"
        emissiveIntensity={0.8}
        specular="#4d94ff"
        shininess={50}
        wireframe
        transparent
        opacity={0.6}
      />
    </animated.mesh>
  )
}

// Componente principal que renderiza a cena 3D
const Hero3D = () => {
  return (
    // Canvas da cena 3D com configuração da câmera
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        background: 'transparent',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* Cor de fundo da cena */}
      <color attach="background" args={['#000000']} />
      
      {/* Controles de órbita para a câmera */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
      
      {/* Luz ambiente */}
      <ambientLight intensity={0.3} />
      
      {/* Luzes pontuais */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#0066cc" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#0050cc" />
      
      {/* Estrelas no fundo */}
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Esfera animada */}
      <AnimatedSphere />
    </Canvas>
  )
}

export default Hero3D
