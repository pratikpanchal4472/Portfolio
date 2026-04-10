import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText('PRATIK PANCHAL')).toBeInTheDocument()
  })

  it('renders View Work button', () => {
    render(<Hero />)
    expect(screen.getByText('View Work')).toBeInTheDocument()
  })

  it('renders Get In Touch button', () => {
    render(<Hero />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })
})
