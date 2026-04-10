import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'
import { projects } from '../../data/resume'

function ProjectPanel({ position, color, index }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const targetY = hovered ? position[1] + 0.25 : position[1]
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, delta * 5)
    const targetEmissive = hovered ? 0.55 : 0.12
    meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
      meshRef.current.material.emissiveIntensity,
      targetEmissive,
      delta * 5
    )
  })

  return (
    <mesh
      ref={meshRef}
      position={[...position]}
      rotation={[0.08, (index - 2) * 0.18, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.9, 1.1, 0.07]} />
      <meshStandardMaterial
        color="#1e293b"
        emissive={color}
        emissiveIntensity={0.12}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  )
}

export default function ProjectsScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)

  useFrame((_, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const target = activeSection === 4 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)
    if (groupRef.current) groupRef.current.scale.setScalar(scaleTarget.current)
  })

  return (
    <group ref={groupRef}>
      {projects.map((p, i) => (
        <ProjectPanel
          key={p.title}
          index={i}
          color={p.color}
          position={[
            (i - 2) * 0.7,
            Math.sin(i * 1.1) * 1.3,
            -1.2 - i * 0.25,
          ]}
        />
      ))}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 4, 4]} intensity={1} color="#60a5fa" />
      <pointLight position={[0, -4, 4]} intensity={0.5} color="#34d399" />
    </group>
  )
}
