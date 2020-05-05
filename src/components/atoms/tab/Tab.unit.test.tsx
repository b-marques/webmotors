import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'src/styles/theme'

import { Tab } from '.'

const tab: React.ComponentProps<typeof Tab> = {
  actionText: 'comprar',
  icon: <></>,
  subjectText: 'carros',
  isActive: true,
  onClick: () => 0,
}

test('render active tab', () => {
  render(
    <ThemeProvider theme={theme}>
      <Tab {...tab} />
    </ThemeProvider>,
  )

  expect(screen.getByText(/comprar/i)).toBeTruthy()
  expect(screen.getByText(/carros/i)).toBeTruthy()
  expect(screen.getByRole('button')).toHaveTextContent(/comprarcarros/i)

  expect(screen.getByRole('button')).toHaveStyle(`border-bottom: 3px solid ${theme.primary}`)
})
