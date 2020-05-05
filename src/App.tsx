import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'src/styles/globalStyle'
import { theme } from 'src/styles/theme'
import { HomePage } from 'src/pages/home-page'
import store from 'src/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
