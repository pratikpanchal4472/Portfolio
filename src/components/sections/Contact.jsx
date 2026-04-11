import { motion } from 'framer-motion'
import { personal } from '../../data/resume'

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full px-6"
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ pointerEvents: 'auto' }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Get In Touch</h2>
        <p className="text-slate-400 mb-10 text-base">
          Open to new opportunities and collaborations
        </p>
        <div className="flex flex-col items-center gap-5">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors text-base group"
          >
            <span className="text-lg">✉</span>
            <span className="group-hover:underline">{personal.email}</span>
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors text-base group"
          >
            <span className="font-bold text-sm border border-blue-400 rounded px-1">in</span>
            <span className="group-hover:underline">{personal.linkedin}</span>
          </a>
          <div className="flex items-center gap-3 text-slate-400 text-base">
            <span>📍</span>
            <span>{personal.location}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
