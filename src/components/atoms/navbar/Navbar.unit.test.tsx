import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Navbar } from '.'

test('render navbar with logo', () => {
  render(<Navbar />)

  expect(screen.getByAltText(/webmotors/i)).toBeTruthy()
  expect(screen.getByAltText(/webmotors/i)).toHaveAttribute('src')
})
