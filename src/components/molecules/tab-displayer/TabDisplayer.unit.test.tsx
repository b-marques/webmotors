import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import { Example } from 'src/utils/samples/exampleTabContent'

import { TabDisplayer } from '.'

const tabDisplayer: React.ComponentProps<typeof TabDisplayer> = {
  tabs: [
    {
      icon: <></>,
      actionText: 'comprar',
      subjectText: 'carros',
    },
  ],
  content: [<Example key={0}>Exemplo1</Example>],
  activeTab: 0,
  setActiveTab: () => 0,
}

test('render tab with content', () => {
  render(<TabDisplayer {...tabDisplayer} />)

  fireEvent.click(screen.getAllByRole('button')[0])

  expect(screen.getByText(/exemplo1/i)).toBeVisible()
})
