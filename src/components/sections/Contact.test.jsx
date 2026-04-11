import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<Contact />)
    expect(screen.getByText('pnchlprtk@gmail.com')).toBeInTheDocument()
  })

  it('renders the LinkedIn link', () => {
    render(<Contact />)
    expect(screen.getByText('linkedin.com/in/pratikpanchal4472')).toBeInTheDocument()
  })
})
