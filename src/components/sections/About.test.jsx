import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import About from './About'
import useSceneStore from '../../store/sceneStore'

describe('About', () => {
  beforeEach(() => useSceneStore.setState({ activeSection: 0 }))

  it('renders the About heading', () => {
    render(<About />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders all 4 stat labels', () => {
    render(<About />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
    expect(screen.getByText('Records Processed')).toBeInTheDocument()
    expect(screen.getByText('Cost Reduction')).toBeInTheDocument()
  })
})
