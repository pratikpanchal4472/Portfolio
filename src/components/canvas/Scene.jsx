import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import useIsMobile from '../../hooks/useIsMobile'
import HeroScene from './HeroScene'
import AboutScene from './AboutScene'
import SkillsScene from './SkillsScene'
import ExperienceScene from './ExperienceScene'
import ProjectsScene from './ProjectsScene'
import CertsScene from './CertsScene'
import ContactScene from './ContactScene'

export default function Scene() {
  const isMobile = useIsMobile()

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      <HeroScene />
      <AboutScene />
      <SkillsScene />
      <ExperienceScene />
      <ProjectsScene />
      <CertsScene />
      <ContactScene />
      {!isMobile && (
        <EffectComposer>
          <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={0.8} />
        </EffectComposer>
      )}
    </Canvas>
  )
}
