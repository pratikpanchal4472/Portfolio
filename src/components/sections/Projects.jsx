import { motion } from 'framer-motion'
import { projects } from '../../data/resume'

export default function Projects() {
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col bg-slate-800/65 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{p.title}</h3>
              <div className="text-xs font-mono mb-3 leading-snug" style={{ color: p.color }}>
                {p.metric}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-700/40">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{ color: p.color, borderColor: `${p.color}40` }}
                  >
                    {tag}
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
