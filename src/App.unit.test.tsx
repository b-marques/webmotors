import React from 'react'
import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import axios from 'axios'

import '@testing-library/jest-dom/extend-expect'
import App from 'src/App'
import makeResponseData from 'src/utils/files/make-fetch-data-example.json'

const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('axios')

test('can render app with redux with defaults', () => {
  mockedAxios.get.mockResolvedValue(makeResponseData)
  render(<App />)

  fireEvent.click(screen.getByTestId(/dropdown-marca/i))

  waitForElementToBeRemoved(() => screen.getByTestId('loader'))

  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  expect(screen.getAllByRole('button').length).toBe(12)
})
