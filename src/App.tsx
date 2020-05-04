import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'src/styles/globalStyle'
import { theme } from 'src/styles/theme'
import { HomePage } from 'src/pages/home-page'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
