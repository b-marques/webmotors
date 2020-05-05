import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Button } from '.'

const button: React.ComponentProps<typeof Button> = {
  size: 'medium',
  variant: 'outlined',
  onClick: () => console.log('button clicked'),
  label: 'button',
}

test('render button with label', () => {
  render(<Button {...button} />)

  expect(screen.getByRole('button', { name: /button/i })).toHaveTextContent('button')
})

test('render raised button with label and uppercase text', () => {
  render(<Button {...button} size="big" variant="raised" />)

  expect(screen.getByRole('button', { name: /button/i })).toHaveStyle('text-transform: uppercase')
})
