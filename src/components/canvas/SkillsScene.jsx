import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'
import { skills } from '../../data/resume'

function SkillNode({ color, radius, speed, angleOffset, y }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed + angleOffset
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = y
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  )
}

export default function SkillsScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)

  const nodes = useMemo(
    () =>
      skills.flatMap((cat, catIdx) =>
        cat.items.slice(0, 5).map((_, i) => ({
          color: cat.color,
          radius: 1.4 + catIdx * 0.35,
          speed: 0.25 + catIdx * 0.08,
          angleOffset: (i / 5) * Math.PI * 2,
          y: (catIdx - 2.5) * 0.55,
        }))
      ),
    []
  )

  useFrame((_, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const target = activeSection === 2 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleTarget.current)
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#1e293b"
          emissive="#60a5fa"
          emissiveIntensity={0.08}
          wireframe
        />
      </mesh>
      {nodes.map((node, i) => (
        <SkillNode key={i} {...node} />
      ))}
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={0.8} color="#60a5fa" />
      <pointLight position={[-4, -4, 4]} intensity={0.5} color="#34d399" />
    </group>
  )
}
