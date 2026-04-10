import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useSceneStore from '../../store/sceneStore'
import useIsMobile from '../../hooks/useIsMobile'

export default function AboutScene() {
  const groupRef = useRef()
  const scaleTarget = useRef(0)
  const isMobile = useIsMobile()
  const count = isMobile ? 150 : 300

  const { positions, linePositions } = useMemo(() => {
    const pts = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pts[i * 3]     = (Math.random() - 0.5) * 9
      pts[i * 3 + 1] = (Math.random() - 0.5) * 7
      pts[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    const lines = []
    const threshold = 1.6
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pts[i*3] - pts[j*3]
        const dy = pts[i*3+1] - pts[j*3+1]
        const dz = pts[i*3+2] - pts[j*3+2]
        if (dx*dx + dy*dy + dz*dz < threshold * threshold) {
          lines.push(pts[i*3], pts[i*3+1], pts[i*3+2])
          lines.push(pts[j*3], pts[j*3+1], pts[j*3+2])
        }
      }
    }
    return { positions: pts, linePositions: new Float32Array(lines) }
  }, [count])

  useFrame((_, delta) => {
    const activeSection = useSceneStore.getState().activeSection
    const target = activeSection === 1 ? 1 : 0
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 3)
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleTarget.current)
      groupRef.current.rotation.y += delta * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#60a5fa" size={0.04} transparent opacity={0.85} sizeAttenuation />
      </points>
      {linePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#60a5fa" transparent opacity={0.18} />
        </lineSegments>
      )}
      <ambientLight intensity={0.3} />
    </group>
  )
}
