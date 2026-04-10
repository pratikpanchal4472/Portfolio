import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'
import { experience } from '../../data/resume'

export default function ExperienceScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)

  const { tubeGeometry, nodePositions } = useMemo(() => {
    const points = experience.map((_, i) =>
      new THREE.Vector3(
        Math.sin(i * 1.2) * 2.2,
        (experience.length / 2 - i) * 1.3,
        Math.cos(i * 0.9) * 1.6
      )
    )
    const curve = new THREE.CatmullRomCurve3(points)
    const tube = new THREE.TubeGeometry(curve, 60, 0.018, 8, false)
    return { tubeGeometry: tube, nodePositions: points }
  }, [])

  useFrame((_, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const target = activeSection === 3 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleTarget.current)
      groupRef.current.rotation.y += delta * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.45} />
      </mesh>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial
            color={i === 0 ? '#34d399' : '#60a5fa'}
            emissive={i === 0 ? '#34d399' : '#60a5fa'}
            emissiveIntensity={i === 0 ? 0.9 : 0.5}
          />
        </mesh>
      ))}
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 5]} intensity={1} color="#60a5fa" />
    </group>
  )
}
