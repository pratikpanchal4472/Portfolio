import { motion } from 'framer-motion'
import { personal } from '../../data/resume'

export default function Hero() {
  const scrollToSection = (index) => {
    document.querySelectorAll('.snap-section')[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center px-6"
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{ pointerEvents: 'auto' }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-sm uppercase text-emerald-400 mb-5 font-medium"
        >
          Principal Architect
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {personal.name}
        </h1>

        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          {personal.subtitle}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection(4)}
            className="px-7 py-3 bg-blue-400 text-slate-900 font-semibold rounded-lg hover:bg-blue-300 transition-all duration-200 hover:scale-105"
          >
            View Work
          </button>
          <button
            onClick={() => scrollToSection(6)}
            className="px-7 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>
    </div>
  )
}
