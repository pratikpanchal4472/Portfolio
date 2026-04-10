import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'
import { certifications } from '../../data/resume'

export default function CertsScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)

  useFrame(({ clock }, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const target = activeSection === 5 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleTarget.current)
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.28
    }
  })

  const radius = 2.6

  return (
    <group ref={groupRef}>
      {certifications.map((_, i) => {
        const angle = (i / certifications.length) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(i * 0.9) * 0.5, Math.sin(angle) * radius]}
          >
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#a78bfa"
              emissiveIntensity={0.45}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        )
      })}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 4, 4]} intensity={1} color="#a78bfa" />
      <pointLight position={[0, -4, 4]} intensity={0.4} color="#60a5fa" />
    </group>
  )
}
