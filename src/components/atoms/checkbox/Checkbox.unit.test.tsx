import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { Checkbox } from '.'

const checkbox: React.ComponentProps<typeof Checkbox> = {
  isChecked: true,
  label: 'Novos',
  setChecked: () => console.log('checkbox clicked'),
}

test('render card shadow', () => {
  render(<Checkbox {...checkbox} />)

  expect(screen.getByText('Novos')).toBeTruthy()
})
