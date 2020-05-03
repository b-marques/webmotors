import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'

import { InputConcatDropdown } from '.'

afterEach(cleanup)

let locationInputValue = 'Floripa'
const defaultOption = { id: 0, name: 'make0' }
const items = [
  { id: 1, name: 'make1' },
  { id: 2, name: 'make2' },
  { id: 3, name: 'make3' },
  { id: 4, name: 'make4' },
  { id: 5, name: 'make5' },
]

function setLocationInput(newInput: string) {
  locationInputValue = newInput
}

test('render location input', async () => {
  const { rerender } = render(
    <InputConcatDropdown
      dropdown={{
        label: 'label',
        items,
        activeItem: 0,
        defaultOption,
        handleSelectItem: () => console.log('item selected'),
      }}
      input={{ value: locationInputValue, setValue: () => setLocationInput('') }}
    />,
  )

  expect(screen.getByTestId(/location-icon/i)).toBeTruthy()
  expect(screen.getByTestId(/clear-input-icon/i)).toBeTruthy()
  expect(screen.getByTestId(/location-prefix/i)).toHaveTextContent('Onde:')
  expect((screen.getByTestId(/location-input/i) as HTMLInputElement).value).toBe('Floripa')

  fireEvent.click(screen.getByTestId(/clear-input-icon/))

  rerender(
    <InputConcatDropdown
      dropdown={{
        label: 'label',
        items,
        activeItem: 0,
        defaultOption,
        handleSelectItem: () => console.log('item selected'),
      }}
      input={{ value: locationInputValue, setValue: () => setLocationInput('') }}
    />,
  )
  fireEvent.click(screen.getByTestId(/dropdown-label/i))

  expect((screen.getByTestId(/location-input/i) as HTMLInputElement).value).toBe('')

  screen
    .getAllByRole('option')
    .forEach((item, i) => expect(item).toHaveTextContent([defaultOption, ...items][i].name))
})
