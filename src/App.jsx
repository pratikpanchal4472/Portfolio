import { useRef } from 'react'
import useScrollSection from './hooks/useScrollSection'
import SplashCursor from './components/background/SplashCursor'
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
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const sectionRefs = [ref0, ref1, ref2, ref3, ref4, ref5, ref6]

  useScrollSection(sectionRefs)

  return (
    <>
      <SplashCursor
        SIM_RESOLUTION={160}
        DYE_RESOLUTION={1664}
        PRESSURE={0.3}
        CURL={6}
        SPLAT_RADIUS={0.4}
        COLOR_UPDATE_SPEED={8}
      />
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
