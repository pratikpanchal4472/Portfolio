import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from './Experience'

describe('Experience', () => {
  it('renders the Experience heading', () => {
    render(<Experience />)
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders all 5 companies', () => {
    render(<Experience />)
    expect(screen.getByText('Armakuni Private Limited')).toBeInTheDocument()
    expect(screen.getByText('Crest Data Systems')).toBeInTheDocument()
    expect(screen.getByText('Malbek Solutions LLP')).toBeInTheDocument()
    expect(screen.getByText('Revitas (now ModeIN)')).toBeInTheDocument()
    expect(screen.getByText('Accenture')).toBeInTheDocument()
  })
})
