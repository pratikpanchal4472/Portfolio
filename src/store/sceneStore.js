import { create } from 'zustand'

const useSceneStore = create((set) => ({
  activeSection: 0,
  setActiveSection: (index) => set({ activeSection: index }),
}))

export default useSceneStore
