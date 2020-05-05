import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'

import { Card } from '.'

afterEach(cleanup)

test('render card shadow', () => {
  render(<Card />)

  const style = window.getComputedStyle(screen.getByTestId('card'))

  expect(style.boxShadow).toBe('0 4px 8px 0 rgba(0,0,0,0.2)')
})
