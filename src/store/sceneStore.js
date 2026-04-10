import { create } from 'zustand'

const useSceneStore = create((set) => ({
  activeSection: 0,
  mousePos: { x: 0, y: 0 },
  setActiveSection: (index) => set({ activeSection: index }),
  setMousePos: (pos) => set({ mousePos: pos }),
}))

export default useSceneStore
