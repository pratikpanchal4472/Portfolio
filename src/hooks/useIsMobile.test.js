import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useIsMobile from './useIsMobile'

describe('useIsMobile', () => {
  it('returns false when innerWidth is 1440', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1440 })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('returns true when innerWidth is 375', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('updates on resize event', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1440 })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
    act(() => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(true)
  })
})
