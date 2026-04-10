import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills', () => {
  it('renders the Skills heading', () => {
    render(<Skills />)
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders all 6 skill categories', () => {
    render(<Skills />)
    expect(screen.getByText('Cloud & ML')).toBeInTheDocument()
    expect(screen.getByText('Data Engineering')).toBeInTheDocument()
    expect(screen.getByText('AI/ML & Vectors')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('DevOps & IaC')).toBeInTheDocument()
  })
})
