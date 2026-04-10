import { motion } from 'framer-motion'
import { skills } from '../../data/resume'

export default function Skills() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full px-6 w-full max-w-5xl mx-auto"
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ pointerEvents: 'auto' }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-colors"
            >
              <h3
                className="font-semibold mb-3 text-sm tracking-wide uppercase"
                style={{ color: cat.color }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-slate-700/60 text-slate-300 px-2 py-0.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
