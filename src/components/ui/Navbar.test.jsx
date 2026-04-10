import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the PP monogram', () => {
    render(<Navbar />)
    expect(screen.getByText('PP')).toBeInTheDocument()
  })

  it('renders a Resume download link', () => {
    render(<Navbar />)
    expect(screen.getByText('Resume')).toBeInTheDocument()
  })
})
