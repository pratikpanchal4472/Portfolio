import useSceneStore from '../../store/sceneStore'

const LABELS = ['Hero', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export default function DotNav() {
  const activeSection = useSceneStore((s) => s.activeSection)

  const scrollTo = (index) => {
    const sections = document.querySelectorAll('.snap-section')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      style={{ pointerEvents: 'auto' }}
    >
      {LABELS.map((label, i) => (
        <button
          key={label}
          onClick={() => scrollTo(i)}
          title={label}
          aria-current={activeSection === i ? 'true' : undefined}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeSection === i
              ? 'bg-blue-400 scale-125'
              : 'bg-slate-600 hover:bg-slate-400'
          }`}
          style={
            activeSection === i
              ? { boxShadow: '0 0 8px #60a5fa' }
              : {}
          }
        />
      ))}
    </nav>
  )
}
