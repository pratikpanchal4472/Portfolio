import { useEffect } from 'react'
import useSceneStore from '../store/sceneStore'

export default function useScrollSection(refs) {
  const setActiveSection = useSceneStore((s) => s.setActiveSection)

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(index)
        },
        { threshold: 0.5 }
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [refs, setActiveSection])
}
