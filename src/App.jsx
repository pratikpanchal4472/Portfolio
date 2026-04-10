import { useRef, useEffect } from 'react'
import useSceneStore from './store/sceneStore'
import useScrollSection from './hooks/useScrollSection'
import Scene from './components/canvas/Scene'
import DotNav from './components/ui/DotNav'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

export default function App() {
  // Declare all refs at top-level to satisfy Rules of Hooks
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const sectionRefs = [ref0, ref1, ref2, ref3, ref4, ref5, ref6]

  useScrollSection(sectionRefs)

  const setMousePos = useSceneStore((s) => s.setMousePos)

  useEffect(() => {
    const handler = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [setMousePos])

  return (
    <>
      <Scene />
      <Navbar />
      <DotNav />
      <div id="scroll-container">
        <section className="snap-section" ref={ref0}><Hero /></section>
        <section className="snap-section" ref={ref1}><About /></section>
        <section className="snap-section" ref={ref2}><Skills /></section>
        <section className="snap-section" ref={ref3}><Experience /></section>
        <section className="snap-section" ref={ref4}><Projects /></section>
        <section className="snap-section" ref={ref5}><Certifications /></section>
        <section className="snap-section" ref={ref6}><Contact /></section>
      </div>
    </>
  )
}
