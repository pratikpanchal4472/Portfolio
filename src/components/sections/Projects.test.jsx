import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from './Projects'

describe('Projects', () => {
  it('renders the Key Projects heading', () => {
    render(<Projects />)
    expect(screen.getByText('Key Projects')).toBeInTheDocument()
  })

  it('renders all 6 project titles', () => {
    render(<Projects />)
    expect(screen.getByText('DataShift — Natural Query to Analytics Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Privacy-Preserving Identity Resolution')).toBeInTheDocument()
    expect(screen.getByText('RynoTrax Streaming Modernisation')).toBeInTheDocument()
    expect(screen.getByText('Abstract Security Event Processing')).toBeInTheDocument()
    expect(screen.getByText('Splunk UBA 5.2.0 Release')).toBeInTheDocument()
    expect(screen.getByText('Malbek CLM Platform')).toBeInTheDocument()
  })
})
