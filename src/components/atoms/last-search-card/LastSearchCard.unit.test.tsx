import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { LastSearchCard } from '.'

const search: React.ComponentProps<typeof LastSearchCard> = {
  item: {
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
}

test('render last search card', () => {
  render(<LastSearchCard item={search.item} />)

  expect(screen.getByText(/modelo/i)).toHaveTextContent(/Modelo/)
  expect(screen.getByText(/versão/i)).toHaveTextContent(/Versão/)
  expect(screen.getByText(/raio/i)).toHaveTextContent(/Raio/)
})
