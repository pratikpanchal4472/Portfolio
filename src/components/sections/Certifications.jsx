import { motion } from 'framer-motion'
import { certifications, awards } from '../../data/resume'

export default function Certifications() {
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
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Certifications & Awards
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-violet-400 font-semibold tracking-widest text-xs uppercase mb-5">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium leading-snug">{cert.name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-emerald-400 font-semibold tracking-widest text-xs uppercase mb-5">
              Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <div className="text-slate-300 text-sm leading-snug">{award}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
