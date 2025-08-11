import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, PresentationControls } from '@react-three/drei'

export default function Scene() {
  const torusRef = useRef()

  // Rotate the object each frame
  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.2 * delta
      torusRef.current.rotation.y += 0.4 * delta
    }
  })

  return (
    <PresentationControls global polar={[-0.2, 0.6]} azimuth={[-0.3, 0.3]}>
      <pointLight position={[5, 5, 5]} intensity={1.2} />

      {/* Main 3D Object */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.8, 0.28, 200, 32]} />
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color={'#06b6d4'}
        />
      </mesh>

      {/* Local HDR for background & reflections */}
      <Environment files="/potsdamer_platz_1k.hdr" background />

      <OrbitControls enablePan={false} enableZoom={false} />
    </PresentationControls>
  )
}
