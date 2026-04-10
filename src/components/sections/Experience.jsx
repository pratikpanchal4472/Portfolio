import { motion } from 'framer-motion'
import { experience } from '../../data/resume'

export default function Experience() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full px-6 w-full max-w-3xl mx-auto"
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ pointerEvents: 'auto' }}
        className="w-full max-h-[85vh] overflow-y-auto pr-2"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-blue-400/25" />
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="pl-11 pb-7 relative"
            >
              <div
                className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-slate-900 ${
                  i === 0 ? 'bg-emerald-400' : 'bg-blue-400'
                }`}
              />
              <div className="text-xs text-emerald-400 tracking-widest mb-1 uppercase">
                {exp.period}
              </div>
              <h3 className="text-white font-semibold text-base">{exp.role}</h3>
              <div className="text-blue-400 text-sm mb-3">{exp.company}</div>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-slate-400 text-sm flex gap-2 leading-snug">
                    <span className="text-emerald-400 mt-0.5 shrink-0">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
