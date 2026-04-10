import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import useScrollSection from './useScrollSection'
import useSceneStore from '../store/sceneStore'

describe('useScrollSection', () => {
  beforeEach(() => {
    useSceneStore.setState({ activeSection: 0 })
  })

  it('observes each ref with IntersectionObserver', () => {
    const observe = vi.fn()
    const disconnect = vi.fn()
    global.IntersectionObserver = vi.fn(function() {
      this.observe = observe
      this.disconnect = disconnect
    })

    const refs = [
      { current: document.createElement('div') },
      { current: document.createElement('div') },
    ]
    renderHook(() => useScrollSection(refs))

    expect(observe).toHaveBeenCalledTimes(2)
  })

  it('disconnects observers on unmount', () => {
    const disconnect = vi.fn()
    const observe = vi.fn()
    global.IntersectionObserver = vi.fn(function() {
      this.observe = observe
      this.disconnect = disconnect
    })

    const refs = [{ current: document.createElement('div') }]
    const { unmount } = renderHook(() => useScrollSection(refs))
    unmount()

    expect(disconnect).toHaveBeenCalledTimes(1)
  })
})
