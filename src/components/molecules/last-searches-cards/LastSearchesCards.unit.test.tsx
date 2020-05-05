import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { LastSearchesCards } from '.'

const lastSearches: React.ComponentProps<typeof LastSearchesCards> = {
  cards: [
    {
      isNew: false,
      isUsed: false,
      location: 'Fpólis',
      make: { id: 0, name: 'todas' },
      model: { id: 0, name: 'todas' },
      price: { id: 0, name: 'todas' },
      radius: { id: 0, name: 'todas' },
      version: { id: 0, name: 'todas' },
      year: { id: 0, name: 'todas' },
    },
    {
      isNew: false,
      isUsed: false,
      location: 'Fpólis',
      make: { id: 0, name: 'todas' },
      model: { id: 0, name: 'todas' },
      price: { id: 0, name: 'todas' },
      radius: { id: 0, name: 'todas' },
      version: { id: 0, name: 'todas' },
      year: { id: 0, name: 'todas' },
    },
    {
      isNew: false,
      isUsed: false,
      location: 'Fpólis',
      make: { id: 0, name: 'todas' },
      model: { id: 0, name: 'todas' },
      price: { id: 0, name: 'todas' },
      radius: { id: 0, name: 'todas' },
      version: { id: 0, name: 'todas' },
      year: { id: 0, name: 'todas' },
    },
  ],
}

test('render last searches list', () => {
  render(<LastSearchesCards {...lastSearches} />)

  expect(screen.getAllByRole('option').length).toBe(3)
  expect(screen.getAllByText(/modelo/i).length).toBe(3)
  expect(screen.getAllByText(/versão/i).length).toBe(3)
  expect(screen.getAllByText(/raio/i).length).toBe(3)
})
