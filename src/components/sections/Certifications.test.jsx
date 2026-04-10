import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Certifications from './Certifications'

describe('Certifications', () => {
  it('renders the heading', () => {
    render(<Certifications />)
    expect(screen.getByText('Certifications & Awards')).toBeInTheDocument()
  })

  it('renders AWS cert', () => {
    render(<Certifications />)
    expect(screen.getByText('AWS Certified Cloud Practitioner')).toBeInTheDocument()
  })

  it('renders CAP Award', () => {
    render(<Certifications />)
    expect(screen.getByText('CAP Award — Splunk UBA 5.2.0 Release Support')).toBeInTheDocument()
  })
})
