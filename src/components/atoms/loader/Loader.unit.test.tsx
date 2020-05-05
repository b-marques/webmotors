import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, screen } from '@testing-library/react'

import { Loader } from './Loader'

afterEach(cleanup)

test('should render loader message', async () => {
  render(<Loader />)

  expect(screen.getByTestId('loader')).toHaveTextContent('Carregando...')
})
