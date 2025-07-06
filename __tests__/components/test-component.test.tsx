import { render, screen } from '@testing-library/react'
import { TestComponent } from '../../src/components/test-component'

describe('TestComponent', () => {
  it('renders without crashing', () => {
    render(<TestComponent />)
    expect(screen.getByText('Test Component with Absolute Imports')).toBeInTheDocument()
  })

  it('applies correct styling', () => {
    render(<TestComponent />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('inline-flex')
  })
})