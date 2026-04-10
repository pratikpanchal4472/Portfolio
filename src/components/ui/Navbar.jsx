import { useEffect, useState } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById('scroll-container')
    if (!el) return
    const handler = () => setVisible(el.scrollTop > 50)
    el.addEventListener('scroll', handler)
    return () => el.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={`fixed top-4 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="flex items-center gap-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2">
        <span className="text-blue-400 font-bold text-sm">PP</span>
        <div className="w-px h-4 bg-slate-700" />
        <a
          href="/resume.pdf"
          download
          className="text-slate-300 hover:text-white text-xs tracking-wider transition-colors"
        >
          Resume
        </a>
      </div>
    </div>
  )
}
