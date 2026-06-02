import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import useSceneStore from './sceneStore'

describe('sceneStore', () => {
  beforeEach(() => {
    useSceneStore.setState({ activeSection: 0 })
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
})
