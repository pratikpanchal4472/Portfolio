import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import useSceneStore from './sceneStore'

describe('sceneStore', () => {
  beforeEach(() => {
    useSceneStore.setState({ activeSection: 0, mousePos: { x: 0, y: 0 } })
  })

  it('initialises with activeSection 0', () => {
    const { result } = renderHook(() => useSceneStore())
    expect(result.current.activeSection).toBe(0)
  })

  it('setActiveSection updates activeSection', () => {
    const { result } = renderHook(() => useSceneStore())
    act(() => result.current.setActiveSection(3))
    expect(result.current.activeSection).toBe(3)
  })

  it('setMousePos updates mousePos', () => {
    const { result } = renderHook(() => useSceneStore())
    act(() => result.current.setMousePos({ x: 0.5, y: -0.3 }))
    expect(result.current.mousePos).toEqual({ x: 0.5, y: -0.3 })
  })
})
