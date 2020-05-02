import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,400;1,900&display=swap');
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  dd {
    margin: 0;
  }

  p {
    margin: 0;
  }

  html,
  body {
    color: black;
    background: white;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.15rem;
    -webkit-font-smoothing: antialiased;
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`
