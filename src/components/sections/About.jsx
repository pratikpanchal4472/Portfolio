import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personal, stats } from '../../data/resume'
import useSceneStore from '../../store/sceneStore'

function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const activeSection = useSceneStore((s) => s.activeSection)

  useEffect(() => {
    if (activeSection !== 1) { setCount(0); return }
    let frame = 0
    const totalFrames = 120
    const step = () => {
      frame++
      setCount(Math.min(Math.round((frame / totalFrames) * value), value))
      if (frame < totalFrames) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [activeSection, value])

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-400 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full px-6 w-full max-w-4xl mx-auto"
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ pointerEvents: 'auto' }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">About</h2>
        <p className="text-slate-300 text-lg leading-relaxed text-center mb-12 max-w-2xl mx-auto">
          {personal.summary}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
