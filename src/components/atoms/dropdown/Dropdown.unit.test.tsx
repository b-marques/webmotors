import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'

import { Dropdown } from '.'

afterEach(cleanup)

const defaultOption = { id: 0, name: 'make0' }
const items = [
  { id: 1, name: 'make1' },
  { id: 2, name: 'make2' },
  { id: 3, name: 'make3' },
  { id: 4, name: 'make4' },
  { id: 5, name: 'make5' },
]

test('should render dropdown with items', () => {
  render(
    <Dropdown
      label="label"
      items={items}
      activeItem={0}
      defaultOption={defaultOption}
      handleSelectItem={() => 0}
    />,
  )

  fireEvent.click(screen.getByTestId(/dropdown-label/i))

  screen
    .getAllByRole('option')
    .forEach((item, i) => expect(item).toHaveTextContent([defaultOption, ...items][i].name))

  fireEvent.click(screen.getAllByRole('option')[0])
})
