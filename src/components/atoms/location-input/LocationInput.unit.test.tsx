import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'

import { LocationInput } from '.'

afterEach(cleanup)

let locationInputValue = 'Floripa'
function setLocationInput(newInput: string) {
  locationInputValue = newInput
}

test('render location input', async () => {
  const { rerender } = render(
    <LocationInput value={locationInputValue} setValue={() => setLocationInput('')} />,
  )

  expect(screen.getByTestId(/location-icon/i)).toBeTruthy()
  expect(screen.getByTestId(/clear-input-icon/i)).toBeTruthy()
  expect(screen.getByTestId(/location-prefix/i)).toHaveTextContent('Onde:')
  expect((screen.getByTestId(/location-input/i) as HTMLInputElement).value).toBe('Floripa')

  fireEvent.click(screen.getByTestId(/clear-input-icon/))

  rerender(<LocationInput value={locationInputValue} setValue={setLocationInput} />)

  expect((screen.getByTestId(/location-input/i) as HTMLInputElement).value).toBe('')
})
