import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'
import { heroTechCards } from '../../data/resume'

export default function HeroScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)

  useFrame((_, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const mousePos = useSceneStore.getState().mousePos
    const target = activeSection === 0 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)

    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleTarget.current)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.15,
        delta * 2
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePos.y * 0.1,
        delta * 2
      )
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#34d399" />

      {heroTechCards.map((card) => (
        <Float key={card.label} speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh position={card.position} rotation={[Math.PI / 2, Math.PI / 6, 0]}>
            <cylinderGeometry args={[0.55, 0.55, 0.1, 6]} />
            <meshStandardMaterial
              color={card.color}
              emissive={card.color}
              emissiveIntensity={0.35}
              transparent
              opacity={0.85}
              roughness={0.2}
              metalness={0.7}
            />
          </mesh>
          <Text
            position={[card.position[0], card.position[1], card.position[2] + 0.1]}
            fontSize={card.label.length > 8 ? 0.13 : 0.17}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            maxWidth={0.9}
          >
            {card.label}
          </Text>
        </Float>
      ))}
    </group>
  )
}
