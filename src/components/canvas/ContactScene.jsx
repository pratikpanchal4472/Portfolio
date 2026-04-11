import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'

const ORBS = [
  { position: [-3.2,  1.2, -2.5], color: '#60a5fa', baseScale: 1.0 },
  { position: [ 3.0, -1.2, -3.2], color: '#34d399', baseScale: 0.75 },
  { position: [ 0.5,  2.5, -4.0], color: '#a78bfa', baseScale: 0.6 },
  { position: [-2.0, -2.2, -2.2], color: '#60a5fa', baseScale: 0.5 },
]

export default function ContactScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)

  useFrame(({ clock }, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const target = activeSection === 6 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleTarget.current)
      groupRef.current.children.forEach((child, i) => {
        if (ORBS[i]) {
          const pulse = 1 + Math.sin(clock.getElapsedTime() * 0.6 + i * 1.2) * 0.08
          child.scale.setScalar(ORBS[i].baseScale * pulse)
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {ORBS.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.18}
            transparent
            opacity={0.12}
          />
        </mesh>
      ))}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 4]} intensity={0.5} color="#60a5fa" />
    </group>
  )
}
