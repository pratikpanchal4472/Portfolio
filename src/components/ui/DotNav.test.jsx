import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import DotNav from './DotNav'
import useSceneStore from '../../store/sceneStore'

describe('DotNav', () => {
  beforeEach(() => {
    useSceneStore.setState({ activeSection: 0 })
  })

  it('renders 7 navigation dots', () => {
    render(<DotNav />)
    expect(screen.getAllByRole('button')).toHaveLength(7)
  })

  it('active dot has aria-current attribute', () => {
    useSceneStore.setState({ activeSection: 2 })
    render(<DotNav />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[2]).toHaveAttribute('aria-current', 'true')
  })
})
