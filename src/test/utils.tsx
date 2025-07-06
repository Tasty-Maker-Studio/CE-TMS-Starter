import React from 'react'
import { render, RenderOptions, screen } from '@testing-library/react'

// Create a custom render function that includes providers if needed
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, options)

// Re-export everything from React Testing Library
export * from '@testing-library/react'

// Override render method
export { customRender as render };
export { screen };


